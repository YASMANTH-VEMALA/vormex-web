'use client';

import { Reel, reelsApi } from '@/lib/api/reels';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseReelPreloadOptions {
  reels: Reel[];
  activeIndex: number;
  preloadCount?: number;
}

export function useReelPreload({ reels, activeIndex, preloadCount = 3 }: UseReelPreloadOptions) {
  const [preloadedCount, setPreloadedCount] = useState(0);
  const preloadedUrls = useRef<Set<string>>(new Set());
  const preloadedImages = useRef<Set<string>>(new Set());

  const preloadHls = useCallback(async (url: string) => {
    if (preloadedUrls.current.has(url)) return;

    try {
      await fetch(url, { method: 'HEAD' });
      preloadedUrls.current.add(url);
      setPreloadedCount(preloadedUrls.current.size);
    } catch {
      // Ignore errors
    }
  }, []);

  const preloadThumbnail = useCallback((url: string) => {
    if (preloadedImages.current.has(url)) return;

    const img = new Image();
    img.src = url;
    img.onload = () => {
      preloadedImages.current.add(url);
    };
  }, []);

  useEffect(() => {
    const reelsToPreload = reels.slice(activeIndex + 1, activeIndex + 1 + preloadCount);

    reelsToPreload.forEach((reel) => {
      if (reel.hlsUrl) {
        preloadHls(reel.hlsUrl);
      }
      if (reel.thumbnailUrl) {
        preloadThumbnail(reel.thumbnailUrl);
      }
    });
  }, [activeIndex, reels, preloadCount, preloadHls, preloadThumbnail]);

  const preloadReel = useCallback(
    async (reelId: string) => {
      try {
        const data = await reelsApi.getPreloadData(reelId);
        const preloadData = data as unknown as { hlsUrl: string; thumbnailUrl: string };
        if (preloadData.hlsUrl) {
          preloadHls(preloadData.hlsUrl);
        }
        if (preloadData.thumbnailUrl) {
          preloadThumbnail(preloadData.thumbnailUrl);
        }
      } catch {
        // Ignore errors
      }
    },
    [preloadHls, preloadThumbnail]
  );

  const clearCache = useCallback(() => {
    preloadedUrls.current.clear();
    preloadedImages.current.clear();
    setPreloadedCount(0);
  }, []);

  return {
    preloadReel,
    clearCache,
    preloadedCount,
  };
}
