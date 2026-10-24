'use client';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2, MessageCircle, Send, X } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface CommentsDialogViewProps {
  CommentItem: ({
    comment,
    postId,
    depth,
    highlightId,
    onReply,
  }: import('@/components/feed/Comments.types').CommentItemProps) => React.JSX.Element;
  cancelReply: () => void;
  comments: import('@/types/post').Comment[];
  commentsContainerRef: React.RefObject<HTMLDivElement | null>;
  fetchComments: () => Promise<void>;
  fetchError: string | null;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement, Element>) => void;
  handleReply: (parentId: string, username: string) => void;
  handleSubmit: () => Promise<void>;
  hasMore: boolean;
  highlightCommentId: string | undefined;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
  insertMention: (mentionUser: import('@/types/post').MentionUser) => void;
  isSubmitting: boolean;
  loadMore: () => Promise<void>;
  loading: boolean;
  loadingMore: boolean;
  mentionResults: import('@/types/post').MentionUser[];
  newComment: string;
  onClose: () => void;
  postId: string;
  replyingTo: { id: string; username: string } | null;
  showMentionDropdown: boolean;
  submitError: string | null;
  user: import('@/types/auth').User | null;
}

export function CommentsDialogView({
  CommentItem,
  cancelReply,
  comments,
  commentsContainerRef,
  fetchComments,
  fetchError,
  handleInputChange,
  handleReply,
  handleSubmit,
  hasMore,
  highlightCommentId,
  inputRef,
  insertMention,
  isSubmitting,
  loadMore,
  loading,
  loadingMore,
  mentionResults,
  newComment,
  onClose,
  postId,
  replyingTo,
  showMentionDropdown,
  submitError,
  user,
}: CommentsDialogViewProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const viewport = window.visualViewport;
    const update = () => {
      if (!viewport || Math.abs(viewport.scale - 1) > 0.05) return;
      overlay.style.setProperty('--comments-height', `${viewport.height}px`);
      overlay.style.setProperty('--comments-top', `${viewport.offsetTop}px`);
      overlay.style.setProperty(
        '--comments-safe-bottom',
        window.innerHeight - viewport.height > 120 ? '0px' : 'env(safe-area-inset-bottom,0px)'
      );
    };
    update();
    viewport?.addEventListener('resize', update);
    viewport?.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    return () => {
      document.body.style.overflow = previousOverflow;
      viewport?.removeEventListener('resize', update);
      viewport?.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-x-0 top-[var(--comments-top,0px)] z-[100] flex h-[var(--comments-height,100dvh)] items-end justify-center sm:items-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Panel */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Comments"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex h-[80%] max-h-full min-h-0 w-full flex-col rounded-t-2xl bg-white sm:h-[70%] sm:max-w-xl sm:rounded-b-2xl dark:bg-neutral-900"
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Comments</h2>
            <button
              aria-label="Close comments"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Comments List */}
          <div ref={commentsContainerRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4">
            {loading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
              </div>
            ) : fetchError ? (
              <div className="text-center py-8">
                <MessageCircle className="w-12 h-12 mx-auto text-red-400 dark:text-red-500 mb-2" />
                <p className="text-gray-700 dark:text-neutral-300 mb-2">{fetchError}</p>
                <button
                  onClick={fetchComments}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : comments.length === 0 ? (
              <div className="text-center py-8">
                <MessageCircle className="w-12 h-12 mx-auto text-gray-300 dark:text-neutral-600 mb-2" />
                <p className="text-gray-500 dark:text-neutral-400">No comments yet</p>
                <p className="text-sm text-gray-400 dark:text-neutral-500">
                  Be the first to comment!
                </p>
              </div>
            ) : (
              <>
                {comments.map((comment) => (
                  <CommentItem
                    key={comment.id}
                    comment={comment}
                    postId={postId}
                    depth={0}
                    highlightId={highlightCommentId}
                    onReply={handleReply}
                  />
                ))}

                {hasMore && (
                  <button
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="w-full py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                  >
                    {loadingMore ? (
                      <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                    ) : (
                      'Load more comments'
                    )}
                  </button>
                )}
              </>
            )}
          </div>

          {/* Reply indicator */}
          {replyingTo && (
            <div className="px-4 py-2 bg-gray-50 dark:bg-neutral-800/50 border-t border-gray-200 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-neutral-400">
                Replying to{' '}
                <span className="font-semibold text-gray-700 dark:text-neutral-300">
                  @{replyingTo.username}
                </span>
              </span>
              <button onClick={cancelReply} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Submit error */}
          {submitError && (
            <div className="px-4 py-2 bg-red-50 dark:bg-red-900/20 border-t border-red-200 dark:border-red-800">
              <p className="text-sm text-red-600 dark:text-red-400">{submitError}</p>
            </div>
          )}

          {/* Input - only show when user is logged in */}
          <div className="shrink-0 p-4 pb-[calc(1rem+var(--comments-safe-bottom,env(safe-area-inset-bottom,0px)))] border-t border-gray-200 dark:border-neutral-800">
            {!user ? (
              <p className="text-center text-sm text-gray-500 dark:text-neutral-400 py-2">
                Log in to add a comment
              </p>
            ) : (
              <div className="relative">
                {/* Mention Dropdown */}
                {showMentionDropdown && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 max-h-40 overflow-y-auto bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-lg z-10">
                    {mentionResults.map((mentionUser) => (
                      <button
                        key={mentionUser.id}
                        onClick={() => insertMention(mentionUser)}
                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
                      >
                        <UserAvatar
                          imageSrc={mentionUser.profileImage}
                          name={mentionUser.name}
                          className="h-8 w-8 bg-gray-200 text-sm font-bold text-gray-500 dark:bg-neutral-600"
                          fallbackClassName="text-sm"
                        />
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {mentionUser.name}
                          </p>
                          <p className="text-xs text-gray-500">@{mentionUser.username}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex items-end gap-2">
                  <UserAvatar
                    imageSrc={user?.profileImage}
                    name={user?.name}
                    className="h-8 w-8 flex-shrink-0 bg-gray-200 text-sm font-bold text-gray-500 dark:bg-neutral-700"
                    fallbackClassName="text-sm"
                  />

                  <textarea
                    ref={inputRef}
                    value={newComment}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit();
                      }
                    }}
                    placeholder="Write a comment..."
                    rows={1}
                    className="min-w-0 flex-1 px-4 py-2 text-base rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-500 resize-none outline-none focus:ring-2 focus:ring-blue-500 max-h-24"
                    style={{ minHeight: '40px' }}
                  />

                  <button
                    aria-label="Send comment"
                    onClick={handleSubmit}
                    disabled={!newComment.trim() || isSubmitting}
                    className="shrink-0 p-2 rounded-full bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
