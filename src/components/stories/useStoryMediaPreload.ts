'use client';
import { useEffect } from 'react';
import type { StoryGroup } from '@/lib/api/stories';

export function useStoryMediaPreload(groups: StoryGroup[], groupIndex: number, storyIndex: number) {
  const next = groups[groupIndex]?.stories[storyIndex + 1] ?? groups[groupIndex + 1]?.stories[0];
  const url = next?.mediaUrl;
  const type = next?.mediaType;
  useEffect(() => {
    if (!url) return;
    if (type === 'IMAGE') {
      const image = new window.Image();
      image.decoding = 'async';
      image.src = url;
      return () => {
        image.src = '';
      };
    }
    if (type === 'VIDEO') {
      // Fetch just the next video's metadata, not every story's full media file.
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.src = url;
      video.load();
      return () => {
        video.removeAttribute('src');
        video.load();
      };
    }
  }, [url, type]);
}
