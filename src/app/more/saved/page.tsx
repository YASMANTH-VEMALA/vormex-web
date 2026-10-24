'use client';
import { useSyncedState } from '@/hooks/useSyncedState';
import { useAuth as useResourceAuth } from '@/lib/auth/useAuth';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { PostCard } from '@/components/feed/PostCard';
import { getSavedPosts } from '@/lib/api/saved';
import type { PollOption, Post, ReactionSummary, ReactionType } from '@/types/post';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Bookmark, BookmarkX, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SavedPostsPage() {
  const router = useRouter();
  const resourceViewer = useResourceAuth().user;
  const savedResource = useInfiniteQuery({
    queryKey: ['saved-posts', resourceViewer?.id],
    initialPageParam: null as string | null,
    queryFn: ({ pageParam }) => getSavedPosts(pageParam, 20),
    getNextPageParam: (last) => (last.hasMore ? last.nextCursor : undefined),
    enabled: !!resourceViewer?.id,
  });
  const savedPosts = useMemo(
    () => savedResource.data?.pages.flatMap((page) => page.posts) || [],
    [savedResource.data]
  );
  const [posts, setPosts] = useSyncedState(savedPosts);
  const loading = savedResource.isPending;
  const loadingMore = savedResource.isFetchingNextPage;
  const nextCursor = savedResource.data?.pages.at(-1)?.nextCursor;
  const hasMore = savedResource.hasNextPage;
  const [, setTotalCount] = useState(0);

  const fetchSavedPosts = (_cursor?: string | null, append = false) =>
    append ? savedResource.fetchNextPage() : savedResource.refetch();

  const loadMore = () => {
    if (!loadingMore && hasMore && nextCursor) {
      fetchSavedPosts(nextCursor, true);
    }
  };

  const handleLikeUpdate = (
    postId: string,
    liked: boolean,
    count: number,
    reactionType?: ReactionType | null,
    reactionSummary?: ReactionSummary[]
  ) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: liked,
              likesCount: count,
              userReactionType: reactionType || null,
              reactionSummary: reactionSummary || post.reactionSummary,
            }
          : post
      )
    );
  };

  const handlePollUpdate = (postId: string, options: PollOption[]) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === postId ? { ...post, pollOptions: options } : post))
    );
  };

  const handlePostDelete = (postId: string) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
    setTotalCount((prev) => prev - 1);
  };

  const handlePostEdit = (postId: string, updatedPost: Post) => {
    setPosts((prev) => prev.map((post) => (post.id === postId ? updatedPost : post)));
  };

  // Handle unsave - remove from list when unsaved
  const handleUnsave = (postId: string) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
    setTotalCount((prev) => Math.max(0, prev - 1));
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-neutral-950">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-neutral-300" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-blue-500" />
                Saved Posts
              </h1>
              {posts.length > 0 && (
                <p className="text-xs text-gray-500 dark:text-neutral-500">
                  {posts.length} saved post{posts.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto px-4 py-6">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
            </div>
          ) : posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center">
                <BookmarkX className="w-10 h-10 text-gray-400 dark:text-neutral-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No saved posts yet
              </h2>
              <p className="text-gray-500 dark:text-neutral-400 max-w-sm mx-auto">
                When you save posts, they&apos;ll appear here so you can easily find them later.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {posts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    layout
                  >
                    <PostCard
                      post={post}
                      onLikeUpdate={handleLikeUpdate}
                      onPollUpdate={handlePollUpdate}
                      onDelete={handlePostDelete}
                      onEdit={handlePostEdit}
                      onUnsave={handleUnsave}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Load More */}
              {hasMore && nextCursor && (
                <div className="flex justify-center py-4">
                  <button
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {loadingMore ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      'Load More'
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
