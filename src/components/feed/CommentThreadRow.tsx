'use client';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { formatDistanceToNow } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, CornerDownRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface CommentThreadRowProps {
  CommentItem: ({
    comment,
    postId,
    depth,
    highlightId,
    onReply,
  }: import('@/components/feed/Comments.types').CommentItemProps) => React.JSX.Element;
  comment: import('@/types/post').Comment;
  commentRef: React.RefObject<HTMLDivElement | null>;
  depth: number;
  handleLike: () => Promise<void>;
  hasMoreReplies: boolean;
  highlightId: string | undefined;
  isHighlighted: boolean;
  isLiked: boolean;
  likesCount: number;
  loadReplies: () => Promise<void>;
  loadingReplies: boolean;
  onReply: (parentId: string, parentAuthor: string) => void;
  parseContent: (text: string) => React.JSX.Element[];
  postId: string;
  replies: import('@/types/post').Comment[];
  replyCount: number;
  setShowReplies: React.Dispatch<React.SetStateAction<boolean>>;
  showReplies: boolean;
}

export function CommentThreadRow({
  CommentItem,
  comment,
  commentRef,
  depth,
  handleLike,
  hasMoreReplies,
  highlightId,
  isHighlighted,
  isLiked,
  likesCount,
  loadReplies,
  loadingReplies,
  onReply,
  parseContent,
  postId,
  replies,
  replyCount,
  setShowReplies,
  showReplies,
}: CommentThreadRowProps) {
  return (
    <div
      ref={commentRef}
      className={`${depth > 0 ? 'ml-8 border-l-2 border-gray-100 dark:border-neutral-800 pl-4' : ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`py-3 transition-colors ${
          isHighlighted ? 'bg-yellow-50 dark:bg-yellow-900/20 -mx-2 px-2 rounded-lg' : ''
        }`}
      >
        <div className="flex gap-3">
          {/* Avatar */}
          <Link href={`/profile/${comment.author.username}`} className="flex-shrink-0">
            <UserAvatar
              imageSrc={comment.author.profileImage}
              name={comment.author.name}
              className="h-8 w-8 bg-gray-200 text-sm font-bold text-gray-500 dark:bg-neutral-700"
              fallbackClassName="text-sm"
            />
          </Link>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-gray-100 dark:bg-neutral-800 rounded-2xl px-4 py-2">
              <Link
                href={`/profile/${comment.author.username}`}
                className="inline-flex items-center gap-1 font-semibold text-sm text-gray-900 dark:text-white hover:underline"
              >
                <span>{comment.author.name}</span>
                <VerificationBadge
                  profileBadgeStyle={comment.author.profileBadgeStyle}
                  isPremium={comment.author.isPremium}
                  size="micro"
                />
              </Link>
              <p className="text-sm text-gray-700 dark:text-neutral-300 whitespace-pre-wrap">
                {parseContent(comment.content)}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mt-1 ml-2 text-xs">
              <span className="text-gray-500 dark:text-neutral-500">
                {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
              </span>

              <button
                onClick={handleLike}
                className={`font-semibold transition-colors ${
                  isLiked
                    ? 'text-red-500'
                    : 'text-gray-500 dark:text-neutral-400 hover:text-gray-700 dark:hover:text-neutral-300'
                }`}
              >
                Like{likesCount > 0 && ` (${likesCount})`}
              </button>

              <button
                onClick={() => onReply(comment.id, comment.author.username)}
                className="font-semibold text-gray-500 dark:text-neutral-400 hover:text-gray-700 dark:hover:text-neutral-300 transition-colors"
              >
                Reply
              </button>
            </div>

            {/* Replies toggle */}
            {replyCount > 0 && (
              <button
                onClick={() => {
                  setShowReplies(!showReplies);
                  if (!showReplies && replies.length === 0) {
                    loadReplies();
                  }
                }}
                className="flex items-center gap-1 mt-2 ml-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <CornerDownRight className="w-3 h-3" />
                {showReplies ? 'Hide' : 'View'} {replyCount}{' '}
                {replyCount === 1 ? 'reply' : 'replies'}
                {showReplies ? (
                  <ChevronUp className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Replies */}
        <AnimatePresence>
          {showReplies && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2"
            >
              {loadingReplies && replies.length === 0 ? (
                <div className="flex justify-center py-4">
                  <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                </div>
              ) : (
                replies.map((reply) => (
                  <CommentItem
                    key={reply.id}
                    comment={reply}
                    postId={postId}
                    depth={depth + 1}
                    highlightId={highlightId}
                    onReply={onReply}
                  />
                ))
              )}

              {hasMoreReplies && replies.length > 0 && (
                <button
                  onClick={loadReplies}
                  disabled={loadingReplies}
                  className="ml-8 mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700"
                >
                  {loadingReplies ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    'Load more replies'
                  )}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
