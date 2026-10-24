'use client';
import { FEED_SURFACE } from '@/components/feed/surface';
import { ProfileLink } from '@/components/profile/ProfileLink';
import ReportModal from '@/components/reports/ReportModal';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { formatDistanceToNow } from 'date-fns';
import { motion } from 'framer-motion';
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Copy,
  Flag,
  MessageCircle,
  MoreHorizontal,
  Pencil,
  Share2,
  ThumbsUp,
  Trash2,
  X,
} from 'lucide-react';
import React from 'react';
import { EditPostModal } from './EditPostModal';
import { FormattedContent } from './FormattedContent';
import { LikeListModal } from './LikeListModal';
import { ReactionPicker, ReactionSummaryDisplay, getReactionConfig } from './ReactionPicker';
import { ShareModal } from './ShareModal';

interface PostCardViewProps {
  commentsCount: number;
  currentImageIndex: number;
  currentReaction: import('@/types/post').ReactionType | null;
  handleDelete: () => Promise<void>;
  handleLike: () => void;
  handleReaction: (reactionType: import('@/types/post').ReactionType) => Promise<void>;
  handleSave: () => Promise<void>;
  handleShare: () => void;
  impressionRef: React.RefObject<HTMLDivElement | null>;
  isLiked: boolean;
  isOwnPost: boolean;
  isSaved: boolean;
  lightboxMediaType: 'video' | 'image';
  likesCount: number;
  onCommentClick: (() => void) | undefined;
  onEdit: ((postId: string, updatedPost: import('@/types/post').Post) => void) | undefined;
  post: import('@/types/post').Post;
  reactionSummary: import('@/types/post').ReactionSummary[];
  renderContent: () => React.JSX.Element | null;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLikeListModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMediaLightbox: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowReactionPicker: React.Dispatch<React.SetStateAction<boolean>>;
  setShowReportModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowShareModal: React.Dispatch<React.SetStateAction<boolean>>;
  showEditModal: boolean;
  showLikeListModal: boolean;
  showMediaLightbox: boolean;
  showMenu: boolean;
  showReactionPicker: boolean;
  showReportModal: boolean;
  showShareModal: boolean;
  visibilityBadge:
    | {
        readonly icon: React.ForwardRefExoticComponent<
          Omit<import('lucide-react/dist/lucide-react').LucideProps, 'ref'> &
            React.RefAttributes<SVGSVGElement>
        >;
        readonly label: 'Anyone';
      }
    | {
        readonly icon: React.ForwardRefExoticComponent<
          Omit<import('lucide-react/dist/lucide-react').LucideProps, 'ref'> &
            React.RefAttributes<SVGSVGElement>
        >;
        readonly label: 'Connections only';
      }
    | {
        readonly icon: React.ForwardRefExoticComponent<
          Omit<import('lucide-react/dist/lucide-react').LucideProps, 'ref'> &
            React.RefAttributes<SVGSVGElement>
        >;
        readonly label: 'Only me';
      }
    | undefined;
}

export function PostCardView({
  commentsCount,
  currentImageIndex,
  currentReaction,
  handleDelete,
  handleLike,
  handleReaction,
  handleSave,
  handleShare,
  impressionRef,
  isLiked,
  isOwnPost,
  isSaved,
  lightboxMediaType,
  likesCount,
  onCommentClick,
  onEdit,
  post,
  reactionSummary,
  renderContent,
  setCurrentImageIndex,
  setShowEditModal,
  setShowLikeListModal,
  setShowMediaLightbox,
  setShowMenu,
  setShowReactionPicker,
  setShowReportModal,
  setShowShareModal,
  showEditModal,
  showLikeListModal,
  showMediaLightbox,
  showMenu,
  showReactionPicker,
  showReportModal,
  showShareModal,
  visibilityBadge,
}: PostCardViewProps) {
  return (
    <motion.div
      ref={impressionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={FEED_SURFACE}
    >
      {/* Header */}
      <div className="flex items-start justify-between p-4">
        <ProfileLink profileId={post.author.username} className="flex items-center gap-3">
          <UserAvatar
            imageSrc={post.author.profileImage}
            name={post.author.name}
            className="h-12 w-12 bg-gray-200 text-lg font-bold text-gray-500 dark:bg-neutral-700"
            fallbackClassName="text-lg"
          />
          <div>
            <p className="flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white hover:underline">
              <span className="truncate">{post.author.name}</span>
              <VerificationBadge
                profileBadgeStyle={post.author.profileBadgeStyle}
                isPremium={post.author.isPremium}
                size="small"
              />
            </p>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              {post.author.headline || `@${post.author.username}`}
            </p>
            <p className="flex items-center gap-1 text-xs text-gray-400 dark:text-neutral-500">
              <span>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</span>
              {isOwnPost && visibilityBadge && (
                <>
                  <span aria-hidden="true">·</span>
                  <span
                    className="inline-flex items-center gap-1"
                    title={`Visible to: ${visibilityBadge.label}`}
                  >
                    <visibilityBadge.icon className="h-3 w-3" aria-hidden="true" />
                    <span>{visibilityBadge.label}</span>
                  </span>
                </>
              )}
            </p>
          </div>
        </ProfileLink>

        {/* Menu */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-full mt-1 w-48 py-1 rounded-lg bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-lg z-10">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/post/${post.id}`);
                  setShowMenu(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
              >
                <Copy className="w-4 h-4" />
                Copy link
              </button>

              {isOwnPost && (
                <>
                  <button
                    onClick={() => {
                      setShowEditModal(true);
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
                  >
                    <Pencil className="w-4 h-4" />
                    Edit post
                  </button>
                  <button
                    onClick={() => {
                      handleDelete();
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-neutral-700"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete post
                  </button>
                </>
              )}

              {!isOwnPost && (
                <button
                  onClick={() => {
                    setShowReportModal(true);
                    setShowMenu(false);
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
                >
                  <Flag className="w-4 h-4" />
                  Report
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-2">
        {post.content && (
          <FormattedContent content={post.content} className="text-gray-900 dark:text-white" />
        )}
        {renderContent()}
      </div>

      {/* Engagement Stats */}
      <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-500 dark:text-neutral-400 border-t border-gray-100 dark:border-neutral-800">
        <div className="flex items-center gap-4">
          {likesCount > 0 && (
            <ReactionSummaryDisplay
              reactionSummary={reactionSummary}
              totalCount={likesCount}
              onClick={() => setShowLikeListModal(true)}
            />
          )}
        </div>
        <div className="flex items-center gap-4">
          {commentsCount > 0 && (
            <button onClick={onCommentClick} className="hover:underline">
              {commentsCount} comment{commentsCount !== 1 ? 's' : ''}
            </button>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="px-4 py-2 flex items-center justify-between border-t border-gray-100 dark:border-neutral-800">
        {/* Reaction Button with Picker */}
        <div
          className="relative"
          onMouseEnter={() => setShowReactionPicker(true)}
          onMouseLeave={() => setShowReactionPicker(false)}
        >
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isLiked && currentReaction
                ? `${getReactionConfig(currentReaction).color} ${getReactionConfig(currentReaction).bgColor}`
                : 'text-gray-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800'
            }`}
          >
            {currentReaction ? (
              <>
                {React.createElement(getReactionConfig(currentReaction).icon, {
                  className: `w-5 h-5 ${isLiked ? 'fill-current' : ''}`,
                })}
                <span className="text-sm font-medium">
                  {getReactionConfig(currentReaction).label}
                </span>
              </>
            ) : (
              <>
                <ThumbsUp className="w-5 h-5" />
                <span className="text-sm font-medium">Like</span>
              </>
            )}
          </button>

          <ReactionPicker
            isOpen={showReactionPicker}
            currentReaction={currentReaction}
            onSelect={handleReaction}
            onClose={() => setShowReactionPicker(false)}
          />
        </div>

        <button
          onClick={onCommentClick}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Comment</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <Share2 className="w-5 h-5" />
          <span className="text-sm font-medium">Share</span>
        </button>

        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            isSaved
              ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20'
              : 'text-gray-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800'
          }`}
        >
          <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
          <span className="text-sm font-medium hidden sm:inline">Save</span>
        </button>
      </div>

      {/* Like List Modal */}
      <LikeListModal
        isOpen={showLikeListModal}
        onClose={() => setShowLikeListModal(false)}
        postId={post.id}
        totalCount={likesCount}
      />

      {/* Edit Post Modal */}
      <EditPostModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        post={post}
        onPostUpdated={(updatedPost) => {
          onEdit?.(post.id, updatedPost);
        }}
      />

      {/* Report Modal */}
      <ReportModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        type="post"
        targetId={post.id}
        targetName={`Post by ${post.author.name}`}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        postId={post.id}
        postPreview={post.content || undefined}
        postAuthor={{
          name: post.author.name,
          username: post.author.username,
          profileImage: post.author.profileImage,
        }}
        postMediaUrl={post.mediaUrls?.[0] || post.videoUrl || null}
      />

      {/* Fullscreen Media Lightbox */}
      {showMediaLightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          onClick={() => setShowMediaLightbox(false)}
        >
          <button
            onClick={() => setShowMediaLightbox(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="max-w-[95vw] max-h-[95vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxMediaType === 'image' && post.mediaUrls && post.mediaUrls.length > 0 ? (
              <div className="relative">
                <img
                  src={post.mediaUrls[currentImageIndex]}
                  alt=""
                  className="max-w-full max-h-[95vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
                {post.mediaUrls.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? post.mediaUrls!.length - 1 : prev - 1
                        );
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) =>
                          prev === post.mediaUrls!.length - 1 ? 0 : prev + 1
                        );
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
                      {currentImageIndex + 1} / {post.mediaUrls.length}
                    </div>
                  </>
                )}
              </div>
            ) : lightboxMediaType === 'video' && post.videoUrl ? (
              <video
                src={post.videoUrl}
                controls
                autoPlay
                className="max-w-full max-h-[95vh]"
                onClick={(e) => e.stopPropagation()}
              />
            ) : null}
          </div>
        </div>
      )}
    </motion.div>
  );
}
