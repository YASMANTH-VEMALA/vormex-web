'use client';
import type { Story } from '@/lib/api/stories';
import { isStoryMusic } from '@/lib/stories/music';
import { useYouTubeMusic } from './useYouTubeMusic';
export function useStoryMusic(story: Story | undefined, isPaused: boolean, isMuted: boolean) {
  return useYouTubeMusic(
    isStoryMusic(story?.music) ? story.music : null,
    story?.id ?? '',
    isPaused,
    isMuted
  );
}
