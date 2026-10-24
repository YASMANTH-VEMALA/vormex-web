'use client';
import { useSyncedState } from '@/hooks/useSyncedState';
import { useQuery } from '@tanstack/react-query';
import { CommentThreadRow } from './CommentThreadRow';
import type { CommentItemProps, CommentsProps } from './Comments.types';
import { CommentsDialogView } from './CommentsDialogView';
export type { CommentItemProps, CommentsProps } from './Comments.types';

import {
  createComment as apiCreateComment,
  getComments,
  searchUsersForMention,
  toggleCommentLike,
} from '@/lib/api/posts';
import { useAuth } from '@/lib/auth/useAuth';
import { getSocket, joinPostRoom, leavePostRoom } from '@/lib/socket';
import type { Comment, MentionUser } from '@/types/post';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

function CommentItem({ comment, postId, depth, highlightId, onReply }: CommentItemProps) {
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useSyncedState(comment.isLiked);
  const [likesCount, setLikesCount] = useSyncedState(comment.likesCount);
  const [showReplies, setShowReplies] = useState(depth < 2);
  const [replies, setReplies] = useState<Comment[]>([]);
  const [loadingReplies, setLoadingReplies] = useState(false);
  const [hasMoreReplies, setHasMoreReplies] = useState(comment.replyCount > 0);
  const [replyCount, setReplyCount] = useState(comment.replyCount);

  const commentRef = useRef<HTMLDivElement>(null);
  const isHighlighted = highlightId === comment.id;

  // Listen for real-time reply updates
  useEffect(() => {
    const socket = getSocket();

    const handleCommentCreated = (data: {
      postId: string;
      comment?: Comment;
      commentsCount: number;
    }) => {
      const newReply = data.comment;
      // Skip if no comment data or not a reply to this comment
      if (!newReply || data.postId !== postId || newReply.parentId !== comment.id) return;

      // New reply to this comment
      setReplies((prev) => {
        if (prev.some((r) => r.id === newReply.id)) return prev;
        return [newReply, ...prev];
      });
      setReplyCount((prev) => prev + 1);
      setHasMoreReplies(true);
    };

    const handleCommentLiked = (data: {
      commentId: string;
      userId: string;
      liked: boolean;
      likesCount: number;
    }) => {
      // Update this comment's likes
      if (data.commentId === comment.id) {
        setLikesCount(data.likesCount);
        if (data.userId === user?.id) {
          setIsLiked(data.liked);
        }
      }
      // Update nested replies' likes
      setReplies((prev) =>
        prev.map((r) =>
          r.id === data.commentId
            ? {
                ...r,
                likesCount: data.likesCount,
                isLiked: data.userId === user?.id ? data.liked : r.isLiked,
              }
            : r
        )
      );
    };

    socket?.on('comment:created', handleCommentCreated);
    socket?.on('comment:liked', handleCommentLiked);

    return () => {
      socket?.off('comment:created', handleCommentCreated);
      socket?.off('comment:liked', handleCommentLiked);
    };
  }, [postId, comment.id, user?.id, setLikesCount, setIsLiked]);

  // Scroll to highlighted comment
  useEffect(() => {
    if (isHighlighted && commentRef.current) {
      commentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isHighlighted]);

  // Load replies
  const loadReplies = async () => {
    if (loadingReplies || replies.length >= comment.replyCount) return;

    setLoadingReplies(true);
    try {
      const response = await getComments(postId, comment.id, 1, 10);
      setReplies(response.comments);
      setHasMoreReplies(response.hasMore);
    } catch (error) {
      console.error('Error loading replies:', error);
    } finally {
      setLoadingReplies(false);
    }
  };

  // Handle like
  const handleLike = async () => {
    const newLiked = !isLiked;
    setIsLiked(newLiked);
    setLikesCount((prev) => (newLiked ? prev + 1 : prev - 1));

    try {
      const res = await toggleCommentLike(postId, comment.id);
      if (res) {
        setIsLiked(res.liked);
        setLikesCount(res.likesCount);
      }
    } catch {
      setIsLiked(!newLiked);
      setLikesCount(likesCount);
    }
  };

  // Parse content for mentions
  const parseContent = (text: string) => {
    const parts = text.split(/(@\w+)/g);
    return parts.map((part, index) => {
      if (part.startsWith('@')) {
        return (
          <Link
            key={index}
            href={`/profile/${part.slice(1)}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {part}
          </Link>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <CommentThreadRow
      CommentItem={CommentItem}
      comment={comment}
      commentRef={commentRef}
      depth={depth}
      handleLike={handleLike}
      hasMoreReplies={hasMoreReplies}
      highlightId={highlightId}
      isHighlighted={isHighlighted}
      isLiked={isLiked}
      likesCount={likesCount}
      loadReplies={loadReplies}
      loadingReplies={loadingReplies}
      onReply={onReply}
      parseContent={parseContent}
      postId={postId}
      replies={replies}
      replyCount={replyCount}
      setShowReplies={setShowReplies}
      showReplies={showReplies}
    />
  );
}

export function Comments({
  postId,
  isOpen,
  onClose,
  highlightCommentId,
  onCommentCountChange,
}: CommentsProps) {
  const { user } = useAuth();
  const [initialComments] = useState<Comment[]>([]);

  const [initialHasMore] = useState(false);

  const [loadingMore, setLoadingMore] = useState(false);

  // Reply state
  const [replyingTo, setReplyingTo] = useState<{ id: string; username: string } | null>(null);

  // Input state
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Error state

  const [submitError, setSubmitError] = useState<string | null>(null);

  // Mention state
  const [mentionResults, setMentionResults] = useState<MentionUser[]>([]);
  const [showMentionDropdown, setShowMentionDropdown] = useState(false);
  const [mentions, setMentions] = useState<string[]>([]);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const commentsContainerRef = useRef<HTMLDivElement>(null);

  const fetchCommentsResource = useQuery({
    queryKey: ['post-comments', user?.id, postId],
    queryFn: () => getComments(postId, undefined, 1, 20),
    enabled: isOpen,
    retry: false,
  });
  const [comments, setComments] = useSyncedState(
    fetchCommentsResource.data?.comments ?? initialComments
  );
  const [hasMore, setHasMore] = useSyncedState(
    fetchCommentsResource.data?.hasMore ?? initialHasMore
  );
  const [page, setPage] = useSyncedState(1, fetchCommentsResource.data);
  const loading = fetchCommentsResource.isPending;
  const fetchError = fetchCommentsResource.isError
    ? 'Could not load comments. Please try again.'
    : null;
  const fetchComments = async () => {
    await fetchCommentsResource.refetch();
  };
  // Join post room for real-time updates
  useEffect(() => {
    if (isOpen) {
      joinPostRoom(postId);

      // Set up real-time comment listeners
      const socket = getSocket();

      const handleCommentCreated = (data: {
        postId: string;
        comment?: Comment;
        commentsCount: number;
      }) => {
        if (data.postId !== postId) return;

        // Update comment count regardless of whether full comment data is present
        if (typeof data.commentsCount === 'number') {
          onCommentCountChange?.(data.commentsCount);
        }

        // If no comment data provided (global feed broadcast), just update the count
        const newComment = data.comment;
        if (!newComment) return;

        // Add new comment to the list (avoid duplicates)
        setComments((prev) => {
          // Check if comment already exists (from optimistic update or duplicate event)
          const exists = prev.some((c) => c.id === newComment.id);
          const hasTempComment = prev.some((c) => c.id.startsWith('temp-'));

          if (exists) {
            // Comment already in list, no change needed
            return prev;
          }

          if (hasTempComment) {
            // Replace temp comment with real one
            return prev.map((c) => (c.id.startsWith('temp-') ? newComment : c));
          }

          // Add to top if it's a new top-level comment
          if (!newComment.parentId) {
            return [newComment, ...prev];
          }
          return prev;
        });
      };

      const handleCommentLiked = (data: {
        commentId: string;
        userId: string;
        liked: boolean;
        likesCount: number;
      }) => {
        // Update comment likes in real-time
        setComments((prev) =>
          prev.map((c) =>
            c.id === data.commentId
              ? {
                  ...c,
                  likesCount: data.likesCount,
                  isLiked: data.userId === user?.id ? data.liked : c.isLiked,
                }
              : c
          )
        );
      };

      socket?.on('comment:created', handleCommentCreated);
      socket?.on('comment:liked', handleCommentLiked);

      return () => {
        leavePostRoom(postId);
        socket?.off('comment:created', handleCommentCreated);
        socket?.off('comment:liked', handleCommentLiked);
      };
    }
  }, [isOpen, postId, user?.id, onCommentCountChange, setComments]);

  // Fetch comments
  // Load more comments
  const loadMore = async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    try {
      const nextPage = page + 1;
      const response = await getComments(postId, undefined, nextPage, 20);
      setComments((prev) => [...prev, ...response.comments]);
      setHasMore(response.hasMore);
      setPage(nextPage);
    } catch (error) {
      console.error('Error loading more comments:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  // Handle reply click
  const handleReply = (parentId: string, username: string) => {
    setReplyingTo({ id: parentId, username });
    setNewComment(`@${username} `);
    setMentions([]);
    inputRef.current?.focus();
  };

  // Cancel reply
  const cancelReply = () => {
    setReplyingTo(null);
    setNewComment('');
    setMentions([]);
  };

  // Search mentions
  const searchMentions = useCallback(async (query: string) => {
    if (query.length < 2) {
      setMentionResults([]);
      setShowMentionDropdown(false);
      return;
    }

    try {
      const results = await searchUsersForMention(query);
      setMentionResults(results);
      setShowMentionDropdown(results.length > 0);
    } catch (error) {
      console.error('Error searching mentions:', error);
    }
  }, []);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setNewComment(value);
    setSubmitError(null); // Clear error when user types

    // Detect @mention
    const lastAtIndex = value.lastIndexOf('@');
    if (lastAtIndex !== -1) {
      const textAfterAt = value.slice(lastAtIndex + 1);
      const spaceIndex = textAfterAt.indexOf(' ');
      const query = spaceIndex === -1 ? textAfterAt : '';

      if (query) {
        searchMentions(query);
      } else {
        setShowMentionDropdown(false);
      }
    } else {
      setShowMentionDropdown(false);
    }
  };

  // Insert mention
  const insertMention = (mentionUser: MentionUser) => {
    const lastAtIndex = newComment.lastIndexOf('@');
    const updatedComment = newComment.slice(0, lastAtIndex) + `@${mentionUser.username} `;
    setNewComment(updatedComment);
    setMentions([...mentions, mentionUser.id]);
    setShowMentionDropdown(false);
    inputRef.current?.focus();
  };

  // Submit comment
  const handleSubmit = async () => {
    if (!newComment.trim() || isSubmitting) return;
    if (!user) {
      setSubmitError('Please log in to add a comment.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const comment = await apiCreateComment(postId, newComment.trim(), replyingTo?.id, mentions);

      setComments((prev) => {
        if (replyingTo) {
          return prev.map((c) =>
            c.id === replyingTo.id ? { ...c, replyCount: (c.replyCount || 0) + 1 } : c
          );
        }
        const exists = prev.some((c) => c.id === comment.id);
        if (exists) return prev;
        return [comment, ...prev];
      });

      // Replies don't change the top-level comment count; the socket
      // 'comment:created' event carries the authoritative count anyway.
      if (!replyingTo) {
        onCommentCountChange?.(comments.length + 1);
      }
      setNewComment('');
      setMentions([]);
      setReplyingTo(null);
    } catch (error: unknown) {
      console.error('Error creating comment:', error);
      const message =
        error && typeof error === 'object' && 'response' in error
          ? (error as { response?: { data?: { error?: string } } }).response?.data?.error
          : null;
      setSubmitError(message || 'Failed to add comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <CommentsDialogView
      CommentItem={CommentItem}
      cancelReply={cancelReply}
      comments={comments}
      commentsContainerRef={commentsContainerRef}
      fetchComments={fetchComments}
      fetchError={fetchError}
      handleInputChange={handleInputChange}
      handleReply={handleReply}
      handleSubmit={handleSubmit}
      hasMore={hasMore}
      highlightCommentId={highlightCommentId}
      inputRef={inputRef}
      insertMention={insertMention}
      isSubmitting={isSubmitting}
      loadMore={loadMore}
      loading={loading}
      loadingMore={loadingMore}
      mentionResults={mentionResults}
      newComment={newComment}
      onClose={onClose}
      postId={postId}
      replyingTo={replyingTo}
      showMentionDropdown={showMentionDropdown}
      submitError={submitError}
      user={user}
    />
  );
}

export default Comments;
