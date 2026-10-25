import type { StoryMusic } from './music';

export type MusicPlaybackStatus = 'loading' | 'playing' | 'paused' | 'ended' | 'blocked' | 'error';
type Clip = Pick<StoryMusic, 'songId' | 'startOffset' | 'duration'>;
interface YouTubePlayer {
  loadVideoById(clip: { videoId: string; startSeconds: number; endSeconds: number }): void;
  cueVideoById(clip: { videoId: string; startSeconds: number; endSeconds: number }): void;
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  unMute(): void;
  getCurrentTime(): number;
  getPlayerState(): number;
  destroy(): void;
}
interface YouTubeAPI {
  loaded?: number;
  Player: new (
    element: HTMLElement | string,
    options: {
      width: number;
      height: number;
      videoId: string;
      playerVars: Record<string, string | number>;
      events: {
        onReady(event: { target: YouTubePlayer }): void;
        onStateChange(event: { data: number }): void;
        onAutoplayBlocked(): void;
        onError(): void;
      };
    }
  ) => YouTubePlayer;
}
type YouTubeWindow = Window & { YT?: YouTubeAPI; onYouTubeIframeAPIReady?: () => void };
let apiPromise: Promise<YouTubeAPI> | null = null;
let nextPlayerId = 0;

export function loadYouTubeMusicAPI(): Promise<YouTubeAPI> {
  const target = window as YouTubeWindow;
  if (target.YT?.Player && target.YT.loaded === 1) return Promise.resolve(target.YT);
  if (apiPromise) return apiPromise;
  apiPromise = new Promise<YouTubeAPI>((resolve, reject) => {
    const previousCallback = target.onYouTubeIframeAPIReady;
    const script = document.createElement('script');
    const fail = () => {
      window.clearTimeout(timeout);
      script.remove();
      if (target.onYouTubeIframeAPIReady === ready)
        target.onYouTubeIframeAPIReady = previousCallback;
      reject(new Error('YouTube player could not load'));
    };
    const ready = () => {
      window.clearTimeout(timeout);
      try {
        previousCallback?.();
      } finally {
        if (target.YT?.Player) resolve(target.YT);
        else fail();
      }
    };
    const timeout = window.setTimeout(fail, 20000);
    target.onYouTubeIframeAPIReady = ready;
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    script.onerror = fail;
    document.head.appendChild(script);
  }).catch((error: unknown) => {
    apiPromise = null;
    throw error;
  });
  return apiPromise;
}

// The story clock follows YouTube's actual playback position through this interface.
export class YouTubeClipPlayer {
  private started = false;
  private requestedPause = true;
  private pausePending = false;
  private transitioning = true;
  constructor(
    private player: YouTubePlayer,
    private clip: Clip
  ) {
    player.cueVideoById(this.video());
  }
  setClip(clip: Clip, restart = false) {
    if (
      !restart &&
      clip.songId === this.clip.songId &&
      clip.startOffset === this.clip.startOffset &&
      clip.duration === this.clip.duration
    )
      return;
    this.pause();
    this.clip = clip;
    this.started = false;
    this.transitioning = true;
    this.player.cueVideoById(this.video());
  }
  observeState(state: number) {
    if (state === 5) {
      // cueVideoById is asynchronous. A play sent before this acknowledgement can be ignored.
      if (this.started && !this.requestedPause && this.player.getPlayerState() !== 1) {
        this.player.playVideo();
      }
    } else if (state === 2) {
      const wasOurPause = this.pausePending;
      this.pausePending = false;
      // The previous story's pause acknowledgement can arrive after the next story requests play.
      if (wasOurPause && this.started && !this.requestedPause) this.player.playVideo();
    } else if (state === 1) {
      if (this.requestedPause) this.pause();
      else if (this.started) this.transitioning = false;
    }
  }
  private video() {
    return {
      videoId: this.clip.songId,
      startSeconds: this.clip.startOffset,
      endSeconds: this.clip.startOffset + this.clip.duration,
    };
  }
  get currentTime() {
    return this.transitioning ? this.clip.startOffset : this.player.getCurrentTime();
  }
  get paused() {
    return this.player.getPlayerState() !== 1;
  }
  get ended() {
    return this.started && this.player.getPlayerState() === 0;
  }
  get readyState() {
    return this.transitioning ? 0 : 2;
  }
  set muted(value: boolean) {
    if (value) this.player.mute();
    else this.player.unMute();
  }
  play() {
    if (this.ended) {
      this.player.cueVideoById(this.video());
      this.started = false;
      this.transitioning = true;
    }
    if (!this.requestedPause && this.started && this.player.getPlayerState() === 1) return;
    this.requestedPause = false;
    this.started = true;
    this.player.playVideo();
  }
  pause() {
    const alreadyPaused = this.requestedPause;
    this.requestedPause = true;
    if (alreadyPaused && (this.pausePending || this.player.getPlayerState() !== 1)) return;
    this.pausePending = true;
    this.player.pauseVideo();
  }
}

export async function createYouTubeMusicPlayer(
  clip: Clip,
  signal: AbortSignal,
  onStatus: (status: MusicPlaybackStatus) => void
): Promise<YouTubeClipPlayer> {
  const api = await loadYouTubeMusicAPI();
  if (signal.aborted) throw new DOMException('Playback cancelled', 'AbortError');
  return new Promise((resolve, reject) => {
    const host = document.createElement('div');
    host.dataset.storyMusicPlayer = clip.songId;
    host.dataset.playerReady = 'false';
    host.setAttribute('aria-hidden', 'true');
    Object.assign(host.style, {
      position: 'fixed',
      bottom: '-500px',
      left: '-500px',
      width: '200px',
      height: '200px',
      opacity: '0.01',
      pointerEvents: 'none',
    });
    const mount = document.createElement('div');
    mount.id = `story-yt-player-${++nextPlayerId}`;
    host.appendChild(mount);
    document.body.appendChild(host);
    let raw: YouTubePlayer | undefined;
    let clipPlayer: YouTubeClipPlayer | undefined;
    let settled = false;
    let readinessPoll: ReturnType<typeof setInterval> | undefined;
    const cleanup = () => {
      window.clearTimeout(timeout);
      clearInterval(readinessPoll);
      signal.removeEventListener('abort', abort);
      raw?.destroy();
      host.remove();
    };
    const abort = () => {
      cleanup();
      if (!settled) reject(new DOMException('Playback cancelled', 'AbortError'));
    };
    const fail = () => {
      if (signal.aborted) return;
      onStatus('error');
      if (!settled) {
        cleanup();
        reject(new Error('YouTube player could not initialize'));
      }
    };
    const finishReady = (target: YouTubePlayer) => {
      if (signal.aborted || settled) return;
      try {
        const player = new YouTubeClipPlayer(target, clip);
        clipPlayer = player;
        settled = true;
        host.dataset.playerReady = 'true';
        window.clearTimeout(timeout);
        clearInterval(readinessPoll);
        resolve(player);
      } catch {
        fail();
      }
    };
    const timeout = window.setTimeout(fail, 20000);
    signal.addEventListener('abort', abort, { once: true });
    try {
      raw = new api.Player(mount.id, {
        width: 200,
        height: 200,
        videoId: clip.songId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          playsinline: 1,
          disablekb: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: ({ target }) => finishReady(target),
          onStateChange: ({ data }) => {
            if (signal.aborted) return;
            host.dataset.playbackState = String(data);
            clipPlayer?.observeState(data);
            const status = ({ 0: 'ended', 1: 'playing', 2: 'paused', 3: 'loading' } as const)[
              data as 0 | 1 | 2 | 3
            ];
            if (status) onStatus(status);
          },
          onAutoplayBlocked: () => {
            if (!signal.aborted) onStatus('blocked');
          },
          onError: fail,
        },
      });
      // An existing player can finish its handshake before a wrapper forwards onReady.
      if (!settled)
        readinessPoll = setInterval(() => {
          try {
            if (
              raw &&
              typeof raw.getPlayerState === 'function' &&
              typeof raw.getPlayerState() === 'number'
            )
              finishReady(raw);
          } catch {
            /* Initialization timeout handles a player whose methods are not ready. */
          }
        }, 100);
    } catch {
      fail();
    }
  });
}
