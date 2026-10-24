'use client';
const EMPTY_POLL_OPTIONS: import('@/types/post').PollOption[] = [];
const EMPTY_REACTIONS: import('@/types/post').ReactionSummary[] = [];
import { useSyncedState } from '@/hooks/useSyncedState';
import type { PostCardProps } from './PostCard.types';
import { PostCardView } from './PostCardView';
import { usePostContent } from './usePostContent';
export type { PostCardProps } from './PostCard.types';

import { usePostImpression } from '@/hooks/usePostImpression';
import { deletePost, toggleLike, votePoll } from '@/lib/api/posts';
import { toggleSavePost } from '@/lib/api/saved';
import { useAuth } from '@/lib/auth/useAuth';
import type { ReactionSummary as ReactionSummaryType, ReactionType } from '@/types/post';
import { Globe, Lock, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/*
 * Shown only to the author. The audience is enforced server-side, but without
 * a marker an "Only me" post renders identically to a public one, leaving no
 * way to confirm the choice actually took effect. Other viewers never see this
 * — reaching them at all already means they are inside the audience.
 */
const VISIBILITY_BADGES = {
  PUBLIC: { icon: Globe, label: 'Anyone' },
  CONNECTIONS: { icon: Users, label: 'Connections only' },
  PRIVATE: { icon: Lock, label: 'Only me' },
} as const;

export function PostCard({
  post,
  onLikeUpdate,
  onPollUpdate,
  onDelete,
  onEdit,
  onUnsave,
  onCommentClick,
}: PostCardProps) {
  const { user } = useAuth();
  // Reports this post as seen once it is actually on screen, which is what
  // lets the backend ranker rotate already-seen posts down on the next load.
  const impressionRef = usePostImpression(post.id);
  const [isLiked, setIsLiked] = useSyncedState(post.isLiked);
  const [likesCount, setLikesCount] = useSyncedState(post.likesCount);
  const commentsCount = post.commentsCount;
  const [currentReaction, setCurrentReaction] = useSyncedState<ReactionType | null>(
    post.userReactionType || null
  );
  const [reactionSummary, setReactionSummary] = useSyncedState<ReactionSummaryType[]>(
    post.reactionSummary || EMPTY_REACTIONS
  );
  const [showReactionPicker, setShowReactionPicker] = useState(false);
  const [showLikeListModal, setShowLikeListModal] = useState(false);
  const [isSaved, setIsSaved] = useSyncedState(post.isSaved ?? false);
  const [showMenu, setShowMenu] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedPollOption, setSelectedPollOption] = useState<string | null>(
    post.userVotedOptionId ?? null
  );
  const [pollOptions, setPollOptions] = useSyncedState(post.pollOptions ?? EMPTY_POLL_OPTIONS);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMediaLightbox, setShowMediaLightbox] = useState(false);
  const [lightboxMediaType, setLightboxMediaType] = useState<'image' | 'video'>('image');

  // Video state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Guards against double-submitting engagement actions
  const reactionInFlightRef = useRef(false);
  const saveInFlightRef = useRef(false);

  const isOwnPost = user?.id === post.author.id;
  const visibilityBadge = post.visibility ? VISIBILITY_BADGES[post.visibility] : undefined;

  // Auto-play video when in view
  useEffect(() => {
    if (post.type !== 'VIDEO' || !videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [post.type]);

  // Quick tap on the Like button: removes the current reaction if there is
  // one (whatever its type), otherwise adds a LIKE.
  const handleLike = () => {
    handleReaction(currentReaction ?? 'LIKE');
  };

  // Handle reaction selection.
  // Server semantics: same reaction again → removed, different → switched,
  // none → added. One reaction per user is enforced by a DB unique constraint.
  const handleReaction = async (reactionType: ReactionType) => {
    if (reactionInFlightRef.current) return;
    reactionInFlightRef.current = true;

    const previous = {
      isLiked,
      likesCount,
      currentReaction,
      reactionSummary,
    };

    let newLiked: boolean;
    let newCount: number;
    let newReaction: ReactionType | null;

    if (currentReaction === reactionType) {
      // Remove reaction (clicking same reaction again)
      newLiked = false;
      newCount = Math.max(0, likesCount - 1);
      newReaction = null;
    } else if (currentReaction) {
      // Change reaction (already reacted, changing type)
      newLiked = true;
      newCount = likesCount; // Count stays same
      newReaction = reactionType;
    } else {
      // Add new reaction
      newLiked = true;
      newCount = likesCount + 1;
      newReaction = reactionType;
    }

    // Optimistically adjust the reaction summary
    let newSummary = [...reactionSummary];
    if (currentReaction) {
      newSummary = newSummary
        .map((s) => (s.type === currentReaction ? { ...s, count: Math.max(0, s.count - 1) } : s))
        .filter((s) => s.count > 0);
    }
    if (newReaction) {
      const existingIdx = newSummary.findIndex((s) => s.type === newReaction);
      if (existingIdx >= 0) {
        newSummary[existingIdx] = {
          ...newSummary[existingIdx],
          count: newSummary[existingIdx].count + 1,
        };
      } else {
        newSummary.push({ type: newReaction, count: 1 });
      }
      newSummary.sort((a, b) => b.count - a.count);
    }

    // Optimistic update
    setIsLiked(newLiked);
    setLikesCount(newCount);
    setCurrentReaction(newReaction);
    setReactionSummary(newSummary);
    onLikeUpdate?.(post.id, newLiked, newCount, newReaction, newSummary);

    try {
      // HTTP is the source of truth; the server broadcasts the change to
      // other clients over the socket. Reconcile with the server response.
      const res = await toggleLike(post.id, reactionType);
      const serverSummary = Array.isArray(res.reactionSummary) ? res.reactionSummary : newSummary;
      setIsLiked(res.liked);
      setLikesCount(res.likesCount);
      setCurrentReaction(res.reactionType ?? null);
      setReactionSummary(serverSummary);
      onLikeUpdate?.(post.id, res.liked, res.likesCount, res.reactionType ?? null, serverSummary);
    } catch (error) {
      // Revert on error
      console.error('Failed to react to post:', error);
      setIsLiked(previous.isLiked);
      setLikesCount(previous.likesCount);
      setCurrentReaction(previous.currentReaction);
      setReactionSummary(previous.reactionSummary);
      onLikeUpdate?.(
        post.id,
        previous.isLiked,
        previous.likesCount,
        previous.currentReaction,
        previous.reactionSummary
      );
    } finally {
      reactionInFlightRef.current = false;
    }
  };

  // Handle poll vote
  const handlePollVote = async (optionId: string) => {
    if (selectedPollOption) return;

    const previousOptions = pollOptions;
    setSelectedPollOption(optionId);

    // Optimistic update
    const updatedOptions = pollOptions.map((opt) => ({
      ...opt,
      votes: opt.id === optionId ? opt.votes + 1 : opt.votes,
    }));
    const totalVotes = updatedOptions.reduce((sum, opt) => sum + opt.votes, 0);
    const optionsWithPercentage = updatedOptions.map((opt) => ({
      ...opt,
      percentage: totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0,
    }));
    setPollOptions(optionsWithPercentage);
    onPollUpdate?.(post.id, optionsWithPercentage);

    try {
      const res = await votePoll(post.id, optionId);
      if (Array.isArray(res.pollOptions) && res.pollOptions.length > 0) {
        setPollOptions(res.pollOptions);
        onPollUpdate?.(post.id, res.pollOptions);
      }
    } catch (err) {
      // Revert on error so the user can vote again
      console.error('Error voting on poll:', err);
      setSelectedPollOption(null);
      setPollOptions(previousOptions);
      onPollUpdate?.(post.id, previousOptions);
    }
  };

  // Handle delete
  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      await deletePost(post.id);
      onDelete?.(post.id);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // Handle share - open share modal
  const handleShare = () => {
    setShowShareModal(true);
  };

  // Handle save/unsave — optimistic, reconciled with the server, reverted on error
  const handleSave = async () => {
    if (saveInFlightRef.current) return;
    saveInFlightRef.current = true;

    const wasSaved = isSaved;
    setIsSaved(!wasSaved);

    try {
      const response = await toggleSavePost(post.id);
      const saved = typeof response?.saved === 'boolean' ? response.saved : !wasSaved;
      setIsSaved(saved);
      if (!saved) onUnsave?.(post.id);
    } catch (error) {
      console.error('Error toggling save:', error);
      setIsSaved(wasSaved);
    } finally {
      saveInFlightRef.current = false;
    }
  };

  // Render content based on post type
  const { renderContent } = usePostContent({
    currentImageIndex,
    handlePollVote,
    isMuted,
    isPlaying,
    pollOptions,
    post,
    selectedPollOption,
    setCurrentImageIndex,
    setIsMuted,
    setIsPlaying,
    setLightboxMediaType,
    setShowMediaLightbox,
    videoRef,
  });

  return (
    <PostCardView
      commentsCount={commentsCount}
      currentImageIndex={currentImageIndex}
      currentReaction={currentReaction}
      handleDelete={handleDelete}
      handleLike={handleLike}
      handleReaction={handleReaction}
      handleSave={handleSave}
      handleShare={handleShare}
      impressionRef={impressionRef}
      isLiked={isLiked}
      isOwnPost={isOwnPost}
      isSaved={isSaved}
      lightboxMediaType={lightboxMediaType}
      likesCount={likesCount}
      onCommentClick={onCommentClick}
      onEdit={onEdit}
      post={post}
      reactionSummary={reactionSummary}
      renderContent={renderContent}
      setCurrentImageIndex={setCurrentImageIndex}
      setShowEditModal={setShowEditModal}
      setShowLikeListModal={setShowLikeListModal}
      setShowMediaLightbox={setShowMediaLightbox}
      setShowMenu={setShowMenu}
      setShowReactionPicker={setShowReactionPicker}
      setShowReportModal={setShowReportModal}
      setShowShareModal={setShowShareModal}
      showEditModal={showEditModal}
      showLikeListModal={showLikeListModal}
      showMediaLightbox={showMediaLightbox}
      showMenu={showMenu}
      showReactionPicker={showReactionPicker}
      showReportModal={showReportModal}
      showShareModal={showShareModal}
      visibilityBadge={visibilityBadge}
    />
  );
}

export default PostCard;
