'use client';

import { motion } from 'framer-motion';
import { Music2 } from 'lucide-react';
import { useLayoutEffect, useRef, useState, type HTMLAttributes } from 'react';
import {
  DEFAULT_MUSIC_PLACEMENT,
  type StoryMusic,
  type StoryMusicPlacement,
} from '@/lib/stories/music';

// The sticker is designed for a story frame this wide and scales with the frame, so it looks the
// same in the small creator preview and the full-size viewer.
const REFERENCE_WIDTH = 390;

interface StoryMusicStickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  music: StoryMusic;
  playing: boolean;
  placement?: StoryMusicPlacement;
  /** Creator mode: the sticker receives pointer events so it can be dragged. */
  interactive?: boolean;
}

function Bars({ playing }: { playing: boolean }) {
  return (
    <div
      aria-label={playing ? 'Music playing' : 'Music paused'}
      className="flex h-5 shrink-0 items-center gap-0.5"
    >
      {playing ? (
        [0, 1, 2].map((bar) => (
          <motion.span
            key={bar}
            animate={{ scaleY: [0.3, 1, 0.5, 0.8, 0.3] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: bar * 0.15 }}
            className="h-5 w-1 rounded-full bg-white"
          />
        ))
      ) : (
        <Music2 className="h-4 w-4" />
      )}
    </div>
  );
}

function Disc({ music, playing, size }: { music: StoryMusic; playing: boolean; size: string }) {
  return (
    <motion.div
      animate={{ rotate: playing ? 360 : 0 }}
      transition={{ duration: 8, repeat: playing ? Infinity : 0, ease: 'linear' }}
      className={`${size} shrink-0 overflow-hidden rounded-full border-2 border-white/50`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={music.thumbnail} alt="" draggable={false} className="h-full w-full object-cover" />
    </motion.div>
  );
}

function StickerBody({
  music,
  playing,
  style,
}: {
  music: StoryMusic;
  playing: boolean;
  style: StoryMusicPlacement['style'];
}) {
  if (style === 'compact') {
    return (
      <div className="flex max-w-[260px] items-center gap-2 rounded-full border border-white/20 bg-black/50 py-1.5 pl-1.5 pr-3 text-white shadow-xl backdrop-blur-xl">
        <Disc music={music} playing={playing} size="h-8 w-8" />
        <p className="truncate text-xs font-bold">{music.title}</p>
        <Bars playing={playing} />
      </div>
    );
  }
  if (style === 'cover') {
    return (
      <div className="w-40 rounded-2xl bg-white p-2 text-neutral-900 shadow-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={music.thumbnail}
          alt=""
          draggable={false}
          className="aspect-square w-full rounded-xl object-cover"
        />
        <p className="mt-2 truncate text-sm font-bold">{music.title}</p>
        <p className="truncate text-xs text-neutral-500">{music.artist}</p>
      </div>
    );
  }
  if (style === 'minimal') {
    return (
      <div className="flex max-w-[300px] items-center gap-2 text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
        <Music2 className="h-5 w-5 shrink-0" />
        <p className="truncate text-base font-bold">
          {music.title} <span className="font-medium opacity-80">· {music.artist}</span>
        </p>
      </div>
    );
  }
  return (
    <div className="flex max-w-[320px] items-center gap-3 rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-white shadow-xl backdrop-blur-xl">
      <Disc music={music} playing={playing} size="h-11 w-11" />
      <div className="min-w-0">
        <p className="truncate text-sm font-bold">{music.title}</p>
        <p className="truncate text-xs text-white/70">{music.artist}</p>
      </div>
      <Bars playing={playing} />
    </div>
  );
}

export function StoryMusicSticker({
  music,
  playing,
  placement,
  interactive = false,
  className = '',
  style,
  ...rest
}: StoryMusicStickerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [factor, setFactor] = useState(1);
  const layout = placement ?? music.placement ?? DEFAULT_MUSIC_PLACEMENT;

  useLayoutEffect(() => {
    const frame = ref.current?.parentElement;
    if (!frame) return;
    const measure = () => setFactor(Math.min(1.25, frame.clientWidth / REFERENCE_WIDTH) || 1);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      {...rest}
      className={`absolute z-10 w-max ${interactive ? 'pointer-events-auto cursor-grab touch-none select-none active:cursor-grabbing' : 'pointer-events-none'} ${className}`}
      style={{
        ...style,
        left: `${layout.x * 100}%`,
        top: `${layout.y * 100}%`,
        transform: `translate(-50%, -50%) rotate(${layout.rotation}deg) scale(${layout.scale * factor})`,
      }}
    >
      <StickerBody music={music} playing={playing} style={layout.style} />
    </div>
  );
}
