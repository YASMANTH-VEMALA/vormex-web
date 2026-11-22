'use client';

import { useRef, type PointerEvent } from 'react';
import {
  DEFAULT_MUSIC_PLACEMENT,
  MUSIC_STICKER_STYLES,
  type StoryMusic,
  type StoryMusicPlacement,
} from '@/lib/stories/music';
import { StoryMusicSticker } from './StoryMusicSticker';

export interface StoryBackdrop {
  type: 'image' | 'video' | 'text';
  src?: string | null;
  background?: string;
  text?: string;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/** Instagram-style placement: drag the sticker over the story, tap it to change its look. */
export function StoryMusicPlacementEditor({
  music,
  backdrop,
  playing,
  onChange,
}: {
  music: StoryMusic;
  backdrop?: StoryBackdrop;
  playing: boolean;
  onChange: (placement: StoryMusicPlacement) => void;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const placement = music.placement ?? DEFAULT_MUSIC_PLACEMENT;
  const drag = useRef<{ dx: number; dy: number; moved: boolean; sx: number; sy: number } | null>(
    null
  );

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current?.getBoundingClientRect();
    if (!frame) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      dx: (event.clientX - frame.left) / frame.width - placement.x,
      dy: (event.clientY - frame.top) / frame.height - placement.y,
      moved: false,
      sx: event.clientX,
      sy: event.clientY,
    };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    const frame = frameRef.current?.getBoundingClientRect();
    if (!state || !frame) return;
    if (Math.hypot(event.clientX - state.sx, event.clientY - state.sy) > 4) state.moved = true;
    if (!state.moved) return;
    onChange({
      ...placement,
      x: clamp((event.clientX - frame.left) / frame.width - state.dx, 0.1, 0.9),
      y: clamp((event.clientY - frame.top) / frame.height - state.dy, 0.06, 0.94),
    });
  };

  const onPointerUp = () => {
    const state = drag.current;
    drag.current = null;
    if (state && !state.moved) {
      const next =
        MUSIC_STICKER_STYLES[(MUSIC_STICKER_STYLES.indexOf(placement.style) + 1) % 4] ?? 'classic';
      onChange({ ...placement, style: next });
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        ref={frameRef}
        className="relative aspect-[9/16] h-[min(52dvh,460px)] overflow-hidden rounded-2xl bg-black"
        style={backdrop?.type === 'text' ? { background: backdrop.background } : undefined}
      >
        {backdrop?.type === 'image' && backdrop.src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={backdrop.src} alt="" draggable={false} className="h-full w-full object-cover" />
        )}
        {backdrop?.type === 'video' && backdrop.src && (
          <video src={backdrop.src} muted playsInline className="h-full w-full object-cover" />
        )}
        {backdrop?.type === 'text' && (
          <p className="absolute inset-0 flex items-center justify-center p-6 text-center text-xl font-bold text-white">
            {backdrop.text}
          </p>
        )}
        <StoryMusicSticker
          music={music}
          placement={placement}
          playing={playing}
          interactive
          role="button"
          aria-label="Music sticker. Drag to move, tap to change style."
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (drag.current = null)}
        />
      </div>
      <p className="text-xs text-neutral-500">Drag to move · Tap to change style</p>
      <label className="flex w-full max-w-xs items-center gap-3 text-xs">
        Size
        <input
          type="range"
          min={0.6}
          max={1.6}
          step={0.05}
          value={placement.scale}
          onChange={(event) => onChange({ ...placement, scale: Number(event.target.value) })}
          className="w-full accent-neutral-800 dark:accent-neutral-200"
        />
      </label>
    </div>
  );
}
