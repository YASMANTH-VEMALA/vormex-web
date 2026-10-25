'use client';

import { attachStoryVideoPlayback } from '@/lib/stories/videoPlayback';

import {
  useEffect,
  useRef,
  type Dispatch,
  type PointerEvent,
  type RefObject,
  type SetStateAction,
} from 'react';

export function useStoryMediaControls({
  isPaused,
  setIsPaused,
  videoRef,
  storyId,
}: {
  isPaused: boolean;
  setIsPaused: Dispatch<SetStateAction<boolean>>;
  videoRef: RefObject<HTMLVideoElement | null>;
  storyId: string;
}) {
  const holdRef = useRef<{ started: number; paused: boolean } | null>(null);
  const heldRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    return attachStoryVideoPlayback(video, isPaused);
  }, [isPaused, storyId, videoRef]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('button, input, a, textarea')) return;
    holdRef.current = { started: performance.now(), paused: isPaused };
    heldRef.current = false;
    setIsPaused(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerUp = () => {
    if (!holdRef.current) return;
    heldRef.current = performance.now() - holdRef.current.started > 180;
    setIsPaused(holdRef.current.paused);
    holdRef.current = null;
  };
  const onPointerCancel = () => {
    if (holdRef.current) setIsPaused(holdRef.current.paused);
    holdRef.current = null;
  };
  const consumeHold = () => {
    const held = heldRef.current;
    heldRef.current = false;
    return held;
  };
  return { onPointerDown, onPointerUp, onPointerCancel, consumeHold };
}
