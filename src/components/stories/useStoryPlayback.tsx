'use client';
import React, { useEffect } from 'react';

interface useStoryPlaybackOptions {
  currentStory: import('@/lib/api/stories').Story;
  goToNextStory: () => Promise<void>;
  goToPreviousStory: () => Promise<void>;
  handleClose: () => Promise<void>;
  isPaused: boolean;
  progressIntervalRef: React.RefObject<NodeJS.Timeout | null>;
  progressValueRef: React.RefObject<number>;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setShowViewers: React.Dispatch<React.SetStateAction<boolean>>;
  showViewers: boolean;
  wasPausedBeforeViewersRef: React.RefObject<boolean>;
}
export function useStoryPlayback({
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
}: useStoryPlaybackOptions) {
  useEffect(() => {
    if (!currentStory || isPaused) return;

    const duration =
      currentStory.mediaType === 'VIDEO'
        ? currentStory.duration || 15000
        : currentStory.duration || 5000;

    const interval = 50; // Update every 50ms for smooth progress
    const increment = (100 / duration) * interval;

    progressIntervalRef.current = setInterval(() => {
      const nextProgress = progressValueRef.current + increment;
      if (nextProgress >= 100) {
        progressValueRef.current = 0;
        void goToNextStory();
        return;
      }
      progressValueRef.current = nextProgress;
      setProgress(nextProgress);
    }, interval);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [currentStory, isPaused, goToNextStory, progressIntervalRef, progressValueRef, setProgress]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showViewers) {
        if (e.key === 'Escape') {
          setShowViewers(false);
          setIsPaused(wasPausedBeforeViewersRef.current);
        }
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          void goToPreviousStory();
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          void goToNextStory();
          break;
        case ' ':
          e.preventDefault();
          setIsPaused((prev) => !prev);
          break;
        case 'Escape':
          void handleClose();
          break;
        case 'm':
          setIsMuted((prev) => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    goToNextStory,
    goToPreviousStory,
    handleClose,
    setIsMuted,
    setIsPaused,
    setShowViewers,
    showViewers,
    wasPausedBeforeViewersRef,
  ]);
}
