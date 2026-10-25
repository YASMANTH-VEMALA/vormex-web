'use client';

import { motion } from 'framer-motion';
import { Music2 } from 'lucide-react';
import type { StoryMusic } from '@/lib/stories/music';

export function StoryMusicSticker({ music, playing }: { music: StoryMusic; playing: boolean }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-28 z-10 flex max-w-[85%] -translate-x-1/2 -rotate-3 items-center gap-3 rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-white shadow-xl backdrop-blur-xl">
      <motion.div
        animate={{ rotate: playing ? 360 : 0 }}
        transition={{ duration: 8, repeat: playing ? Infinity : 0, ease: 'linear' }}
        className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white/50"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={music.thumbnail} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold">{music.title}</p>
        <p className="truncate text-xs text-white/70">{music.artist}</p>
      </div>
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
    </div>
  );
}
