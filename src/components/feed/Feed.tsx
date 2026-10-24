'use client';
import { ComposerAction } from './ComposerAction';
import { useFeedRealtimeEvents } from './useFeedRealtimeEvents';

import type { FeedCache } from './Feed.types';
import { FeedTimelineView } from './FeedTimelineView';
export type { FeedCache, FeedSocketReactionPayload } from './Feed.types';

import { PostCardSkeleton } from '@/components/feed/PostCardSkeleton';
import { useRewards } from '@/hooks/useRewards';
import { useVariableRewards } from '@/hooks/useVariableRewards';
import type { ManagedAdCreative } from '@/lib/api/managed-ads';
import { getFeed } from '@/lib/api/posts';
import { type StoryGroup } from '@/lib/api/stories';
import { useAuth } from '@/lib/auth/useAuth';
import { readCachedFeed, writeCachedFeed } from '@/lib/feed/browserCache';
import { FEED_STALE_TIME, queryKeys } from '@/lib/queryKeys';
import { joinPostRoom, leavePostRoom } from '@/lib/socket';
import type { FeedModulePlacement, FeedResponse, PollOption, Post } from '@/types/post';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Interaction-only overlays: loaded on demand so they stay out of the
// critical home-page bundle and don't delay hydration/LCP.
const Comments = dynamic(() => import('@/components/feed/Comments').then((m) => m.Comments), {
  ssr: false,
});
const CreatePostModal = dynamic(
  () => import('@/components/feed/CreatePostModal').then((m) => m.CreatePostModal),
  { ssr: false }
);
const StoryViewer = dynamic(
  () => import('@/components/stories/StoryViewer').then((m) => m.StoryViewer),
  { ssr: false }
);
const StoryCreator = dynamic(
  () => import('@/components/stories/StoryCreator').then((m) => m.StoryCreator),
  { ssr: false }
);

function createAdSessionId(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `web-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function Feed() {
  const { user, loading: authLoading } = useAuth();
  const queryClient = useQueryClient();
  const { rewards, dismissReward } = useRewards(user?.id);
  const { activeCards, dismissCard } = useVariableRewards(user?.id);
  const [adSessionId] = useState(createAdSessionId);
  const adItemOffsetRef = useRef(0);
  // One fresh ranking per visit. A reload or a navigation back to the feed
  // mounts a new Feed, so this resets and the next first-page fetch re-ranks.
  const needsFreshRankingRef = useRef(true);
  const cachedFeed = useMemo(() => readCachedFeed(user?.id), [user?.id]);

  // Use React Query for feed - cached when navigating back from profile (no reload)
  const {
    data,
    isLoading: loading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage: hasMore,
    error: queryError,
    refetch: retryFeed,
    dataUpdatedAt,
  } = useInfiniteQuery({
    queryKey: queryKeys.feed(user?.id),
    queryFn: async ({ pageParam }) => {
      const cursor = typeof pageParam === 'string' ? pageParam : undefined;
      const adItemOffset = cursor ? adItemOffsetRef.current : 0;
      /*
       * The first page fetched after opening the feed asks the backend to skip
       * its ranked-page snapshot, so a reload re-ranks instead of replaying the
       * cached order. Paging requests never refresh — they must resolve against
       * the snapshot their cursor belongs to.
       */
      const refresh = !cursor && needsFreshRankingRef.current;
      const res = await getFeed(cursor, 20, {
        adSessionId,
        adItemOffset,
        refresh,
      });
      if (refresh) needsFreshRankingRef.current = false;
      adItemOffsetRef.current = adItemOffset + res.posts.length;
      return res;
    },
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    staleTime: FEED_STALE_TIME,
    gcTime: 24 * 60 * 60 * 1000,
    initialData: cachedFeed?.value,
    initialDataUpdatedAt: cachedFeed?.savedAt,
    /*
     * 'always' rather than true: with FEED_STALE_TIME at 30s and the cached
     * snapshot supplying initialDataUpdatedAt, `true` treats a reload inside
     * that window as fresh and never calls queryFn — so the feed would replay
     * localStorage and never ask for a new ranking. Cached posts still paint
     * first; this only guarantees the revalidation happens.
     */
    refetchOnMount: 'always',
    retry: (failureCount, requestError) =>
      failureCount < 2 &&
      (requestError as { response?: { status?: number } })?.response?.status !== 401,
    retryDelay: (attemptIndex) => Math.min(500 * 2 ** attemptIndex, 2_000),
    enabled: !authLoading && !!user,
  });

  const posts = useMemo(() => data?.pages.flatMap((p) => p.posts) ?? [], [data]);
  const error = queryError && posts.length === 0 ? (queryError as Error).message : null;

  /*
   * Interleaved slots are indexed by the 1-based position of the post they
   * follow, so rendering a post is a map lookup instead of a scan. The previous
   * code called `adPlacements.filter(...)` inside the post loop, which is
   * O(posts × placements) on every render of the list.
   */
  const adsByPosition = useMemo(() => {
    const map = new Map<number, ManagedAdCreative[]>();
    for (const page of data?.pages ?? []) {
      for (const ad of page.adPlacements ?? []) {
        const list = map.get(ad.afterItemCount);
        if (list) list.push(ad);
        else map.set(ad.afterItemCount, [ad]);
      }
    }
    return map;
  }, [data]);

  /*
   * Server-ranked recommendation modules (PEOPLE / REELS / JOBS / EVENTS and
   * premium post boosts). The backend picks the type and the feed position;
   * this feed previously dropped the field on the floor and hardcoded a fixed
   * stack of rails above the posts instead. Positions are absolute across the
   * ranked session, and only the first page carries them, so they are keyed off
   * the accumulated post index.
   */
  const modulesByPosition = useMemo(() => {
    const map = new Map<number, FeedModulePlacement[]>();
    const seen = new Set<string>();
    for (const page of data?.pages ?? []) {
      for (const placement of page.modulePlacements ?? []) {
        const key = `${placement.type ?? 'MODULE'}:${placement.position}`;
        if (seen.has(key)) continue;
        seen.add(key);
        const list = map.get(placement.position);
        if (list) list.push(placement);
        else map.set(placement.position, [placement]);
      }
    }
    return map;
  }, [data]);

  const rewardsByPosition = useMemo(() => {
    const map = new Map<number, typeof activeCards>();
    for (const card of activeCards) {
      const list = map.get(card.position);
      if (list) list.push(card);
      else map.set(card.position, [card]);
    }
    return map;
  }, [activeCards]);

  useEffect(() => {
    if (!user?.id || !data || dataUpdatedAt <= (cachedFeed?.savedAt || 0)) return;
    writeCachedFeed(user.id, data, dataUpdatedAt);
  }, [cachedFeed?.savedAt, data, dataUpdatedAt, user?.id]);

  useEffect(() => {
    if (!cachedFeed || adItemOffsetRef.current > 0) return;
    adItemOffsetRef.current = cachedFeed.value.pages.reduce(
      (count, page) => count + page.posts.length,
      0
    );
  }, [cachedFeed]);

  // Modal states
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPostForComments, setSelectedPostForComments] = useState<string | null>(null);
  const [highlightCommentId, setHighlightCommentId] = useState<string | undefined>(undefined);

  // Stories states
  const [showStoryCreator, setShowStoryCreator] = useState(false);
  const [showStoryViewer, setShowStoryViewer] = useState(false);
  const [selectedStoryGroup, setSelectedStoryGroup] = useState<StoryGroup | null>(null);

  // Refs for infinite scroll
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Initialize Socket.IO
  useFeedRealtimeEvents({ queryClient, user });

  // Handle opening a story group
  const handleOpenStory = (group: StoryGroup) => {
    setSelectedStoryGroup(group);
    setShowStoryViewer(true);
  };

  // Load more posts
  const loadMore = useCallback(() => {
    if (loadingMore || !hasMore) return;
    fetchNextPage();
  }, [loadingMore, hasMore, fetchNextPage]);

  // Infinite scroll observer
  useEffect(() => {
    if (loading) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [loading, hasMore, loadingMore, loadMore]);

  // Handle post created - add instantly (optimistic) or via WebSocket
  const updateFeedCache = useCallback(
    (updater: (pages: FeedResponse[]) => FeedResponse[]) => {
      queryClient.setQueryData<FeedCache>(queryKeys.feed(user?.id), (old) => {
        if (!old?.pages) return old;
        return { ...old, pages: updater(old.pages) };
      });
    },
    [queryClient, user?.id]
  );

  const handlePostCreated = (post?: Post) => {
    if (post) {
      updateFeedCache((pages) => {
        const hasPost = pages.some((page) =>
          page.posts.some((existingPost) => existingPost.id === post.id)
        );
        if (hasPost) return pages;
        return [{ ...pages[0], posts: [post, ...pages[0].posts] }, ...pages.slice(1)];
      });
    }
  };

  const handlePostDeleted = (postId: string) => {
    updateFeedCache((pages) =>
      pages.map((page) => ({
        ...page,
        posts: page.posts.filter((post) => post.id !== postId),
      }))
    );
  };

  const handlePostEdited = (postId: string, updatedPost: Post) => {
    updateFeedCache((pages) =>
      pages.map((page) => ({
        ...page,
        posts: page.posts.map((post) => (post.id === postId ? { ...post, ...updatedPost } : post)),
      }))
    );
  };

  const handleLikeUpdate = (postId: string, liked: boolean, count: number) => {
    updateFeedCache((pages) =>
      pages.map((page) => ({
        ...page,
        posts: page.posts.map((post) =>
          post.id === postId ? { ...post, isLiked: liked, likesCount: count } : post
        ),
      }))
    );
  };

  const handlePollUpdate = (postId: string, options: PollOption[]) => {
    updateFeedCache((pages) =>
      pages.map((page) => ({
        ...page,
        posts: page.posts.map((post) =>
          post.id === postId ? { ...post, pollOptions: options } : post
        ),
      }))
    );
  };

  // Handle comment click
  const handleCommentClick = (postId: string) => {
    setSelectedPostForComments(postId);
    setHighlightCommentId(undefined);
    joinPostRoom(postId);
  };

  // Close comments
  const closeComments = () => {
    if (selectedPostForComments) {
      leavePostRoom(selectedPostForComments);
    }
    setSelectedPostForComments(null);
    setHighlightCommentId(undefined);
  };

  if (authLoading) {
    return (
      <div className="mx-auto max-w-6xl pb-24">
        <div className="space-y-4 px-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <PostCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <FeedTimelineView
      Comments={Comments}
      ComposerAction={ComposerAction}
      CreatePostModal={CreatePostModal}
      StoryCreator={StoryCreator}
      StoryViewer={StoryViewer}
      adSessionId={adSessionId}
      adsByPosition={adsByPosition}
      closeComments={closeComments}
      dismissCard={dismissCard}
      dismissReward={dismissReward}
      error={error}
      handleCommentClick={handleCommentClick}
      handleLikeUpdate={handleLikeUpdate}
      handleOpenStory={handleOpenStory}
      handlePollUpdate={handlePollUpdate}
      handlePostCreated={handlePostCreated}
      handlePostDeleted={handlePostDeleted}
      handlePostEdited={handlePostEdited}
      hasMore={hasMore}
      highlightCommentId={highlightCommentId}
      loadMoreRef={loadMoreRef}
      loading={loading}
      loadingMore={loadingMore}
      modulesByPosition={modulesByPosition}
      posts={posts}
      queryClient={queryClient}
      retryFeed={retryFeed}
      rewards={rewards}
      rewardsByPosition={rewardsByPosition}
      selectedPostForComments={selectedPostForComments}
      selectedStoryGroup={selectedStoryGroup}
      setSelectedStoryGroup={setSelectedStoryGroup}
      setShowCreateModal={setShowCreateModal}
      setShowStoryCreator={setShowStoryCreator}
      setShowStoryViewer={setShowStoryViewer}
      showCreateModal={showCreateModal}
      showStoryCreator={showStoryCreator}
      showStoryViewer={showStoryViewer}
      updateFeedCache={updateFeedCache}
      user={user}
    />
  );
}

export default Feed;
