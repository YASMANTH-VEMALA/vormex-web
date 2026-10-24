'use client';
import { queryKeys } from '@/lib/queryKeys';
import { getSocket, initializeSocket, joinFeedRoom, leaveFeedRoom } from '@/lib/socket';
import type { PollOption, Post } from '@/types/post';
import { useEffect } from 'react';
import type { FeedCache, FeedSocketReactionPayload } from './Feed.types';
interface useFeedRealtimeEventsOptions {
  queryClient: import('@tanstack/react-query').QueryClient;
  user: import('@/types/auth').User | null;
}
export function useFeedRealtimeEvents({ queryClient, user }: useFeedRealtimeEventsOptions) {
  useEffect(() => {
    if (!user) return;

    // Define handlers
    const handlePostCreated = ({ post }: { post: Post }) => {
      queryClient.setQueryData<FeedCache>(queryKeys.feed(user.id), (old) => {
        if (!old?.pages?.length) return old;
        const hasPost = old.pages.some((page) =>
          page.posts.some((existingPost) => existingPost.id === post.id)
        );
        if (hasPost) return old;
        return {
          ...old,
          pages: [{ ...old.pages[0], posts: [post, ...old.pages[0].posts] }, ...old.pages.slice(1)],
        };
      });
    };

    const handlePostLiked = ({
      postId,
      userId: likerUserId,
      liked,
      likesCount,
      reactionType,
      reactionSummary,
    }: FeedSocketReactionPayload) => {
      queryClient.setQueryData<FeedCache>(queryKeys.feed(user.id), (old) => {
        if (!old?.pages) return old;
        const isCurrentUser = likerUserId === user.id;
        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            posts: page.posts.map((post) =>
              post.id !== postId
                ? post
                : {
                    ...post,
                    likesCount,
                    isLiked: isCurrentUser ? liked : post.isLiked,
                    userReactionType: isCurrentUser ? reactionType : post.userReactionType,
                    reactionSummary: reactionSummary || post.reactionSummary,
                  }
            ),
          })),
        };
      });
    };

    const handlePostReacted = ({
      postId,
      userId: reactorUserId,
      liked,
      reactionType,
      likesCount,
      reactionSummary,
    }: FeedSocketReactionPayload) => {
      queryClient.setQueryData<FeedCache>(queryKeys.feed(user.id), (old) => {
        if (!old?.pages) return old;
        const isCurrentUser = reactorUserId === user.id;
        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            posts: page.posts.map((post) =>
              post.id !== postId
                ? post
                : {
                    ...post,
                    likesCount,
                    isLiked: isCurrentUser ? liked : post.isLiked,
                    userReactionType: isCurrentUser ? reactionType : post.userReactionType,
                    reactionSummary: reactionSummary || post.reactionSummary,
                  }
            ),
          })),
        };
      });
    };

    const handleCommentCreated = ({
      postId,
      commentsCount,
    }: {
      postId: string;
      commentsCount: number;
    }) => {
      queryClient.setQueryData<FeedCache>(queryKeys.feed(user.id), (old) => {
        if (!old?.pages) return old;
        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            posts: page.posts.map((post) =>
              post.id === postId ? { ...post, commentsCount } : post
            ),
          })),
        };
      });
    };

    const handlePollUpdated = ({
      postId,
      pollOptions,
    }: {
      postId: string;
      pollOptions: PollOption[];
    }) => {
      queryClient.setQueryData<FeedCache>(queryKeys.feed(user.id), (old) => {
        if (!old?.pages) return old;
        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            posts: page.posts.map((post) => (post.id === postId ? { ...post, pollOptions } : post)),
          })),
        };
      });
    };

    const handlePostShared = ({ postId, sharesCount }: { postId: string; sharesCount: number }) => {
      queryClient.setQueryData<FeedCache>(queryKeys.feed(user.id), (old) => {
        if (!old?.pages) return old;
        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            posts: page.posts.map((post) => (post.id === postId ? { ...post, sharesCount } : post)),
          })),
        };
      });
    };

    // Initialize socket connection
    initializeSocket();

    joinFeedRoom();

    // Directly attach handlers to the socket
    const sock = getSocket();
    if (sock) {
      sock.on('post:created', handlePostCreated);
      sock.on('post:liked', handlePostLiked);
      sock.on('post:reacted', handlePostReacted);
      sock.on('comment:created', handleCommentCreated);
      sock.on('poll:updated', handlePollUpdated);
      sock.on('post:shared', handlePostShared);
    }

    return () => {
      // Clean up handlers on unmount
      const sock = getSocket();
      if (sock) {
        sock.off('post:created', handlePostCreated);
        sock.off('post:liked', handlePostLiked);
        sock.off('post:reacted', handlePostReacted);
        sock.off('comment:created', handleCommentCreated);
        sock.off('poll:updated', handlePollUpdated);
        sock.off('post:shared', handlePostShared);
      }
      leaveFeedRoom();
    };
  }, [user, queryClient]);
}
