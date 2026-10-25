import type { StoryMusic } from './music';
import {
  createYouTubeMusicPlayer,
  type MusicPlaybackStatus,
  type YouTubeClipPlayer,
} from './youtubeMusic';

type Clip = Pick<StoryMusic, 'songId' | 'startOffset' | 'duration'>;
type Prepared = {
  controller: AbortController;
  ready: Promise<YouTubeClipPlayer>;
  player?: YouTubeClipPlayer;
  status: MusicPlaybackStatus;
  listener?: (status: MusicPlaybackStatus) => void;
  expiry?: ReturnType<typeof setTimeout>;
};
const prepared = new Map<string, Prepared>();
const released = new Map<string, Prepared>();
const clipKey = (clip: Clip) => `${clip.songId}:${clip.startOffset}:${clip.duration}`;
const MAX_PREPARED = 2;

function create(clip: Clip): Prepared {
  const controller = new AbortController();
  const entry: Prepared = {
    controller,
    status: 'loading',
    ready: createYouTubeMusicPlayer(clip, controller.signal, (status) => {
      entry.status = status;
      entry.listener?.(status);
    }).then((player) => {
      entry.player = player;
      return player;
    }),
  };
  // Speculative preparation must never create an unhandled rejection.
  void entry.ready.catch(() => {
    const key = clipKey(clip);
    if (prepared.get(key) === entry) {
      prepared.delete(key);
      dispose(entry);
    }
  });
  return entry;
}

function dispose(entry: Prepared) {
  clearTimeout(entry.expiry);
  entry.listener = undefined;
  entry.controller.abort();
}

export function prepareStoryMusic(clip: Clip): void {
  if (typeof window === 'undefined') return;
  const key = clipKey(clip);
  if (prepared.has(key) || released.has(key)) return;
  while (prepared.size >= MAX_PREPARED) {
    const oldest = prepared.keys().next().value!;
    dispose(prepared.get(oldest)!);
    prepared.delete(oldest);
  }
  const entry = create(clip);
  prepared.set(key, entry);
  entry.expiry = setTimeout(() => {
    if (prepared.get(key) === entry) {
      prepared.delete(key);
      dispose(entry);
    }
  }, 120000);
}

// Called in the click handler, preserving the browser's user activation.
export function startPreparedStoryMusic(clip: Clip): void {
  const key = clipKey(clip);
  const entry = released.get(key) ?? prepared.get(key);
  if (!entry?.player) {
    prepareStoryMusic(clip);
    return;
  }
  entry.player.muted = false;
  entry.player.play();
}

export function acquireStoryMusic(clip: Clip, onStatus: (status: MusicPlaybackStatus) => void) {
  const key = clipKey(clip);
  const warm = prepared.get(key);
  const entry = released.get(key) ?? warm ?? create(clip);
  if (warm && warm !== entry) dispose(warm);
  released.delete(key);
  prepared.delete(key);
  clearTimeout(entry.expiry);
  entry.listener = onStatus;
  if (entry.status !== 'loading') onStatus(entry.status);
  let returned = false;
  return {
    player: entry.player,
    ready: entry.ready,
    dispose: () => {
      if (returned) return;
      returned = true;
      entry.listener = undefined;
      entry.player?.pause();
      if (entry.status === 'error') {
        dispose(entry);
        return;
      }
      const previous = released.get(key);
      if (previous && previous !== entry) dispose(previous);
      // React Strict Mode immediately replays mount effects in development.
      // Allow that replay to reclaim the same player; a real close destroys it next tick.
      released.set(key, entry);
      entry.expiry = setTimeout(() => {
        if (released.get(key) === entry) {
          released.delete(key);
          dispose(entry);
        }
      }, 0);
    },
  };
}

export function clearPreparedStoryMusic(): void {
  for (const entry of prepared.values()) dispose(entry);
  prepared.clear();
  for (const entry of released.values()) dispose(entry);
  released.clear();
}
