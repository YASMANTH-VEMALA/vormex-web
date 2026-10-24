'use client';
import { StoryMediaView } from './StoryMediaView';
import type { StoryViewerProps } from './StoryViewer.types';
import { StoryViewersDialog } from './StoryViewersDialog';
import { useStoryPlayback } from './useStoryPlayback';
export type { StoryViewerProps } from './StoryViewer.types';

import { getStructuredApiError, isTerminalSafetyError } from '@/lib/api/errors';
import {
  archiveStory,
  deleteStory,
  getStoryViewers,
  reactToStory,
  removeReaction,
  replyToStory,
  viewStory,
  type StoryGroup,
  type StoryViewer as StoryViewerRecord,
} from '@/lib/api/stories';
import { useAuth } from '@/lib/auth/useAuth';
import { getSocket, SAFETY_STATE_CHANGED_EVENT } from '@/lib/socket';
import { clearCachedStories } from '@/lib/stories/browserCache';
import { useQueryClient } from '@tanstack/react-query';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import { Archive, Trash2 } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const REACTIONS = ['🔥', '❤️', '👏', '😮', '😂', '💡'];

export function StoryViewer({
  storyGroups,
  initialGroupIndex,
  initialStoryIndex = 0,
  onClose,
  onStoryEnd,
}: StoryViewerProps) {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [currentGroupIndex, setCurrentGroupIndex] = useState(initialGroupIndex);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showReactions, setShowReactions] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState<string | null>(
    () => storyGroups[initialGroupIndex]?.stories[initialStoryIndex]?.userReaction ?? null
  );
  const [showViewers, setShowViewers] = useState(false);
  const [viewers, setViewers] = useState<StoryViewerRecord[]>([]);
  const [viewersCursor, setViewersCursor] = useState<string | null>(null);
  const [viewersHasMore, setViewersHasMore] = useState(false);
  const [isViewersLoading, setIsViewersLoading] = useState(false);
  const [viewersError, setViewersError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressValueRef = useRef(0);
  const viewStartTimeRef = useRef(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const unavailableCloseTimerRef = useRef<number | null>(null);
  const wasPausedBeforeViewersRef = useRef(false);

  const currentGroup = storyGroups[currentGroupIndex];
  const [storiesWithViews, setStoriesWithViews] = useState<Record<string, number>>({});
  const currentStory = currentGroup?.stories[currentStoryIndex];
  const currentStoryId = currentStory?.id;
  const currentViewsCount =
    storiesWithViews[currentStory?.id ?? ''] ?? currentStory?.viewsCount ?? 0;
  const isOwnStory = currentGroup?.isOwnStory;
  const currentStoryOwnerId = currentGroup?.user.id;
  const currentUserId = user?.id;

  const handleStoryActionError = useCallback(
    (error: unknown): boolean => {
      const structured = getStructuredApiError(error);
      const unavailable =
        isTerminalSafetyError(error) || structured.status === 403 || structured.status === 404;
      setActionError(unavailable ? 'This story is unavailable.' : structured.message);

      if (!unavailable) return false;

      if (currentUserId) {
        clearCachedStories(currentUserId);
        queryClient.setQueryData<StoryGroup[]>(
          ['stories', currentUserId],
          (previous) =>
            previous?.filter((group) => group.user.id !== currentStoryOwnerId) ?? previous
        );
        void queryClient.invalidateQueries({ queryKey: ['stories', currentUserId] });
      }
      window.dispatchEvent(
        new CustomEvent(SAFETY_STATE_CHANGED_EVENT, {
          detail: { reason: 'interaction_policy_changed' },
        })
      );
      if (unavailableCloseTimerRef.current !== null) {
        window.clearTimeout(unavailableCloseTimerRef.current);
      }
      unavailableCloseTimerRef.current = window.setTimeout(onClose, 900);
      return true;
    },
    [currentStoryOwnerId, currentUserId, onClose, queryClient]
  );

  useEffect(
    () => () => {
      if (unavailableCloseTimerRef.current !== null) {
        window.clearTimeout(unavailableCloseTimerRef.current);
      }
    },
    []
  );

  const loadStoryViewers = useCallback(
    async (cursor?: string, append = false) => {
      if (!currentStoryId || !isOwnStory) return;

      setIsViewersLoading(true);
      setViewersError(null);
      try {
        const result = await getStoryViewers(currentStoryId, cursor, 30);
        setViewers((previous) => (append ? [...previous, ...result.viewers] : result.viewers));
        setViewersCursor(result.nextCursor);
        setViewersHasMore(result.hasMore);
        setStoriesWithViews((previous) => ({
          ...previous,
          [currentStoryId]: result.totalCount,
        }));
      } catch (error) {
        if (!handleStoryActionError(error)) {
          setViewersError('Could not load viewers. Please try again.');
        }
      } finally {
        setIsViewersLoading(false);
      }
    },
    [currentStoryId, handleStoryActionError, isOwnStory]
  );

  const handleOpenViewers = (event: React.MouseEvent) => {
    event.stopPropagation();
    wasPausedBeforeViewersRef.current = isPaused;
    setIsPaused(true);
    setShowViewers(true);
    void loadStoryViewers();
  };

  const handleCloseViewers = () => {
    setShowViewers(false);
    setIsPaused(wasPausedBeforeViewersRef.current);
  };

  // Live view count updates for own stories
  useEffect(() => {
    if (!isOwnStory || !currentStoryId) return;
    const socket = getSocket();
    if (!socket) return;

    const handleStoryViewed = ({
      storyId,
      viewsCount,
    }: {
      storyId: string;
      viewsCount: number;
    }) => {
      if (storyId === currentStoryId) {
        setStoriesWithViews((prev) => ({ ...prev, [storyId]: viewsCount }));
        if (showViewers) {
          void loadStoryViewers();
        }
      }
    };

    socket.on('story:viewed', handleStoryViewed);
    return () => {
      socket.off('story:viewed', handleStoryViewed);
    };
  }, [isOwnStory, currentStoryId, showViewers, loadStoryViewers]);

  // Record view duration when leaving story
  const recordView = useCallback(async () => {
    if (currentStoryId && !isOwnStory) {
      const duration = Date.now() - viewStartTimeRef.current;

      // Use socket for real-time view tracking
      const socket = getSocket();
      if (socket) {
        socket.emit('story:view', { storyId: currentStoryId, duration });
      } else {
        // Fallback to HTTP
        try {
          await viewStory(currentStoryId, duration);
        } catch (error) {
          handleStoryActionError(error);
        }
      }
    }
  }, [currentStoryId, handleStoryActionError, isOwnStory]);

  const handleClose = useCallback(async () => {
    await recordView();
    onClose();
  }, [onClose, recordView]);

  const selectStory = useCallback(
    (groupIndex: number, storyIndex: number) => {
      const nextStory = storyGroups[groupIndex]?.stories[storyIndex];
      progressValueRef.current = 0;
      setProgress(0);
      setSelectedReaction(nextStory?.userReaction ?? null);
      setCurrentGroupIndex(groupIndex);
      setCurrentStoryIndex(storyIndex);
    },
    [storyGroups]
  );

  const goToNextStory = useCallback(async () => {
    await recordView();

    if (currentStoryIndex < currentGroup.stories.length - 1) {
      selectStory(currentGroupIndex, currentStoryIndex + 1);
    } else if (currentGroupIndex < storyGroups.length - 1) {
      selectStory(currentGroupIndex + 1, 0);
    } else {
      onClose();
      onStoryEnd?.();
    }
  }, [
    currentStoryIndex,
    currentGroupIndex,
    currentGroup,
    storyGroups.length,
    recordView,
    selectStory,
    onClose,
    onStoryEnd,
  ]);

  const goToPreviousStory = useCallback(async () => {
    await recordView();

    if (currentStoryIndex > 0) {
      selectStory(currentGroupIndex, currentStoryIndex - 1);
    } else if (currentGroupIndex > 0) {
      const previousGroupIndex = currentGroupIndex - 1;
      const previousStoryIndex = storyGroups[previousGroupIndex].stories.length - 1;
      selectStory(previousGroupIndex, previousStoryIndex);
    }
  }, [currentStoryIndex, currentGroupIndex, storyGroups, recordView, selectStory]);

  // Mark story as viewed on mount and story change.
  useEffect(() => {
    if (!currentStoryId || isOwnStory) return;

    viewStartTimeRef.current = Date.now();
    const socket = getSocket();
    if (socket) {
      socket.emit('story:view', { storyId: currentStoryId });
    }
  }, [currentStoryId, isOwnStory]);

  // Progress timer
  useStoryPlayback({
    currentStory,
    goToNextStory,
    goToPreviousStory,
    handleClose,
    isPaused,
    progressIntervalRef,
    progressValueRef,
    setIsMuted,
    setIsPaused,
    setProgress,
    setShowViewers,
    showViewers,
    wasPausedBeforeViewersRef,
  });

  // Swipe handling for vertical navigation
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    const velocity = 500;

    if (info.offset.y < -threshold || info.velocity.y < -velocity) {
      goToNextStory();
    } else if (info.offset.y > threshold || info.velocity.y > velocity) {
      goToPreviousStory();
    }
  };

  const handleReaction = async (reaction: string) => {
    if (!currentStory) return;

    try {
      setActionError(null);
      if (selectedReaction === reaction) {
        await removeReaction(currentStory.id);
        setSelectedReaction(null);
      } else {
        await reactToStory(currentStory.id, reaction);
        setSelectedReaction(reaction);
      }

      // Also emit via socket for real-time updates
      const socket = getSocket();
      if (socket) {
        socket.emit('story:react', { storyId: currentStory.id, reaction });
      }
    } catch (error) {
      handleStoryActionError(error);
    }
    setShowReactions(false);
  };

  const handleSendReply = async () => {
    if (!currentStory || !replyText.trim()) return;

    try {
      setActionError(null);
      // The authenticated endpoint persists the reply and performs realtime
      // delivery to the story owner after the database write succeeds.
      await replyToStory(currentStory.id, replyText.trim());

      setReplyText('');
      setShowReplyInput(false);
      // Show success toast or animation
    } catch (error) {
      handleStoryActionError(error);
    }
  };

  const handleDeleteStory = async () => {
    if (!currentStory) return;

    try {
      await deleteStory(currentStory.id);
      goToNextStory();
    } catch (error) {
      console.error('Error deleting story:', error);
    }
    setShowMenu(false);
  };

  const handleArchiveStory = async () => {
    if (!currentStory) return;

    try {
      await archiveStory(currentStory.id);
      // Show success message
    } catch (error) {
      console.error('Error archiving story:', error);
    }
    setShowMenu(false);
  };

  if (!currentGroup || !currentStory) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black"
      >
        <AnimatePresence>
          {actionError && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              role="status"
              className="absolute left-1/2 top-16 z-[130] -translate-x-1/2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-xl"
            >
              {actionError}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Main Content Container */}
        <StoryMediaView
          REACTIONS={REACTIONS}
          containerRef={containerRef}
          currentGroup={currentGroup}
          currentStory={currentStory}
          currentStoryIndex={currentStoryIndex}
          currentViewsCount={currentViewsCount}
          formatTimeAgo={formatTimeAgo}
          goToNextStory={goToNextStory}
          goToPreviousStory={goToPreviousStory}
          handleClose={handleClose}
          handleDragEnd={handleDragEnd}
          handleOpenViewers={handleOpenViewers}
          handleReaction={handleReaction}
          handleSendReply={handleSendReply}
          isMuted={isMuted}
          isOwnStory={isOwnStory}
          isPaused={isPaused}
          progress={progress}
          replyText={replyText}
          selectedReaction={selectedReaction}
          setIsMuted={setIsMuted}
          setIsPaused={setIsPaused}
          setReplyText={setReplyText}
          setShowMenu={setShowMenu}
          setShowReactions={setShowReactions}
          setShowReplyInput={setShowReplyInput}
          showReactions={showReactions}
          showReplyInput={showReplyInput}
          videoRef={videoRef}
        />

        {/* Private viewer list, available only to the story owner */}
        <StoryViewersDialog
          currentViewsCount={currentViewsCount}
          formatTimeAgo={formatTimeAgo}
          handleCloseViewers={handleCloseViewers}
          isOwnStory={isOwnStory}
          isViewersLoading={isViewersLoading}
          loadStoryViewers={loadStoryViewers}
          showViewers={showViewers}
          viewers={viewers}
          viewersCursor={viewersCursor}
          viewersError={viewersError}
          viewersHasMore={viewersHasMore}
        />

        {/* Menu Modal */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 bg-black/50 flex items-end justify-center"
              onClick={() => setShowMenu(false)}
            >
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                className="w-full max-w-lg bg-neutral-900 rounded-t-3xl p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-12 h-1 bg-neutral-700 rounded-full mx-auto mb-4" />

                {isOwnStory && (
                  <>
                    <button
                      onClick={handleDeleteStory}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-800 transition-colors text-red-500"
                    >
                      <Trash2 className="w-5 h-5" />
                      <span>Delete Story</span>
                    </button>
                    <button
                      onClick={handleArchiveStory}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-800 transition-colors text-white"
                    >
                      <Archive className="w-5 h-5" />
                      <span>Save to Archive</span>
                    </button>
                  </>
                )}

                <button
                  onClick={() => setShowMenu(false)}
                  className="w-full mt-2 py-3 bg-neutral-800 rounded-xl text-white font-medium"
                >
                  Cancel
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return '1d ago';
}
