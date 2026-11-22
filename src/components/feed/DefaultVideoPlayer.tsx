'use client';
import type { DefaultPostVideo } from '@/lib/defaultVideos';
import { findDefaultPostVideo } from '@/lib/defaultVideos';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';

// Loaded only when a post actually carries a default video, so the
// dotLottie player (~500 KB) never weighs on plain text/image feeds.
const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false }
);

interface DotLottieInstance {
  play: () => void;
  pause: () => void;
}

interface DefaultVideoPlayerProps {
  video: DefaultPostVideo;
  /** `feed` loops while on screen; `preview` stays on the first frame (picker rows). */
  mode?: 'feed' | 'preview';
  className?: string;
}

/**
 * Mirrors Android's DefaultPostVideoPlayer: Fit scaling, catalog background
 * color when defined, looping playback. Feed mode autoplays only while the
 * player is in view and honors prefers-reduced-motion.
 */
function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      media.addEventListener('change', onStoreChange);
      return () => media.removeEventListener('change', onStoreChange);
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false
  );
}

export function DefaultVideoPlayer({ video, mode = 'feed', className }: DefaultVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<DotLottieInstance | null>(null);
  const [inView, setInView] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (mode !== 'feed' || !containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => setInView(entries[0]?.isIntersecting ?? false),
      { threshold: 0.3 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [mode]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player || mode !== 'feed') return;
    if (inView && !reducedMotion) player.play();
    else player.pause();
  }, [inView, mode, reducedMotion]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={`${video.title} animation`}
      className={className ?? 'h-[220px] w-full overflow-hidden'}
      style={video.backgroundColor ? { background: video.backgroundColor } : undefined}
    >
      <DotLottieReact
        src={video.src}
        loop
        autoplay={false}
        dotLottieRefCallback={(instance) => {
          playerRef.current = instance as unknown as DotLottieInstance | null;
          if (mode === 'feed' && inView && !reducedMotion) instance?.play();
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

/** Convenience wrapper for callers that only hold the stored id. */
export function DefaultVideoById({
  defaultVideoId,
  mode,
  className,
}: {
  defaultVideoId?: string | null;
  mode?: 'feed' | 'preview';
  className?: string;
}) {
  const video = findDefaultPostVideo(defaultVideoId);
  if (!video) return null;
  return <DefaultVideoPlayer video={video} mode={mode} className={className} />;
}
