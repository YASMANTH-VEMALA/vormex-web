'use client';
import { useEffect, useRef, useState } from 'react';
import type { StoryMusic } from '@/lib/stories/music';
import { acquireStoryMusic } from '@/lib/stories/preparedMusic';
import { type MusicPlaybackStatus, type YouTubeClipPlayer } from '@/lib/stories/youtubeMusic';

export function useYouTubeMusic(
  clip: StoryMusic | null,
  key: string,
  isPaused: boolean,
  isMuted: boolean
) {
  const playerRef = useRef<YouTubeClipPlayer | null>(null);
  const songId = clip?.songId;
  const offset = clip?.startOffset ?? 0;
  const duration = clip?.duration ?? 15;
  const controlKey = useRef(key);
  const identity = `${key}:${clip?.songId}:${clip?.startOffset}`;
  const desired = useRef({ clip, key, identity, isPaused, isMuted });
  const active = clip !== null;
  const [playback, setPlayback] = useState<{ identity: string; status: MusicPlaybackStatus }>({
    identity: '',
    status: 'loading',
  });
  const status = playback.identity === identity ? playback.status : 'loading';

  useEffect(() => {
    desired.current = { clip, key, identity, isPaused, isMuted };
  }, [clip, key, identity, isPaused, isMuted]);

  // Keep the iframe alive across clip, song and story changes. Destroy it when its owner closes.
  useEffect(() => {
    const initial = desired.current.clip;
    if (!active || !initial) return;
    let disposed = false;
    const update = (next: MusicPlaybackStatus) => {
      if (disposed) return;
      if (next === 'playing' && desired.current.isPaused) {
        playerRef.current?.pause();
        return;
      }
      setPlayback({ identity: desired.current.identity, status: next });
    };
    const lease = acquireStoryMusic(initial, update);
    const activate = (player: YouTubeClipPlayer) => {
      if (disposed) return;
      playerRef.current = player;
      const current = desired.current;
      if (current.clip) player.setClip(current.clip);
      controlKey.current = current.key;
      player.muted = current.isMuted;
      if (!current.isPaused) player.play();
      else update('paused');
    };
    if (lease.player) activate(lease.player);
    else
      void lease.ready.then(activate).catch(() => {
        if (!disposed) update('error');
      });
    return () => {
      disposed = true;
      lease.dispose();
      playerRef.current = null;
    };
  }, [active]);

  useEffect(() => {
    const player = playerRef.current;
    const current = desired.current.clip;
    if (!player || !current) return;
    player.setClip(current, controlKey.current !== key);
    controlKey.current = key;
    player.muted = isMuted;
    if (isPaused) player.pause();
    else player.play();
  }, [songId, offset, duration, key, isPaused, isMuted]);

  const retry = () => {
    const player = playerRef.current;
    if (!player) return;
    player.muted = desired.current.isMuted;
    player.play();
  };
  return { playerRef, status, retry };
}
