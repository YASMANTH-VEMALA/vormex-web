import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createYouTubeMusicPlayer,
  loadYouTubeMusicAPI,
  YouTubeClipPlayer,
} from '../src/lib/stories/youtubeMusic';
import {
  acquireStoryMusic,
  clearPreparedStoryMusic,
  prepareStoryMusic,
  startPreparedStoryMusic,
} from '../src/lib/stories/preparedMusic';
import { buildSecurityHeaders } from '../next.config';

class FakePlayer {
  state = 5;
  time = 30;
  muted = false;
  destroyed = false;
  playCalls = 0;
  loads: unknown[] = [];
  cues: unknown[] = [];
  loadVideoById(clip: unknown) {
    this.loads.push(clip);
    this.state = 1;
  }
  cueVideoById(clip: unknown) {
    this.cues.push(clip);
    this.state = 5;
  }
  playVideo() {
    this.playCalls++;
    this.state = 1;
  }
  pauseVideo() {
    this.state = 2;
  }
  mute() {
    this.muted = true;
  }
  unMute() {
    this.muted = false;
  }
  getCurrentTime() {
    return this.time;
  }
  getPlayerState() {
    return this.state;
  }
  destroy() {
    this.destroyed = true;
  }
}
const clip = { songId: 'J7p4bzqLvCw', startOffset: 30, duration: 15 };

test('five music stories start without pause/resume when cue and pause acknowledgements arrive late', () => {
  type Selection = { videoId: string; startSeconds: number; endSeconds: number };
  class QueuedPlayer extends FakePlayer {
    commands: (() => void)[] = [];
    waitingForCue = false;
    onState: (state: number) => void = () => {};
    cueVideoById(selection: Selection) {
      this.cues.push(selection);
      this.waitingForCue = true;
      this.commands.push(() => {
        this.waitingForCue = false;
        this.time = selection.startSeconds;
        this.state = 5;
        this.onState(5);
      });
    }
    pauseVideo() {
      this.commands.push(() => {
        this.state = 2;
        this.onState(2);
      });
    }
    playVideo() {
      this.playCalls++;
      if (this.waitingForCue) return; // The initial play is ignored while YouTube switches songs.
      this.state = 1;
      this.onState(1);
    }
    flush() {
      while (this.commands.length) this.commands.shift()!();
    }
  }
  const raw = new QueuedPlayer();
  const player = new YouTubeClipPlayer(raw, clip);
  raw.onState = (state) => player.observeState(state);
  raw.flush();
  player.play();
  for (let index = 1; index < 5; index++) {
    if (index % 2 === 0) {
      raw.state = 0;
      player.observeState(0);
    }
    player.pause();
    const next = {
      ...clip,
      songId: index < 2 ? clip.songId : 'plnfIj7dkJE',
      startOffset: index * 10,
    };
    player.setClip(next, true);
    player.play();
    raw.flush();
    assert.equal(raw.state, 1, `story ${index + 1} must start without a manual toggle`);
    assert.equal(player.paused, false);
    assert.equal(player.readyState, 2);
    assert.equal(player.currentTime, next.startOffset);
  }
  player.pause();
  player.setClip({ ...clip, startOffset: 80 }, true);
  player.play();
  const latePause = raw.commands.shift()!;
  raw.flush();
  assert.equal(raw.state, 1);
  latePause();
  assert.equal(raw.state, 1, 'the previous pause must not stop an already-started new story');
  player.pause();
  raw.flush();
  assert.equal(raw.state, 2, 'an explicit user pause must stay paused');
  player.setClip({ ...clip, startOffset: 90 }, true);
  raw.flush();
  assert.equal(raw.state, 5, 'a cue arriving during a user pause must not autoplay');
  raw.state = 1;
  player.observeState(1);
  raw.flush();
  assert.equal(raw.state, 2, 'a late playing event must respect the user pause');
});

test('YouTube clips preserve the exact selection when loading, resuming, and replaying', () => {
  const raw = new FakePlayer();
  const player = new YouTubeClipPlayer(raw, clip);
  const selection = { videoId: clip.songId, startSeconds: 30, endSeconds: 45 };
  assert.deepEqual(raw.cues, [selection]);
  player.play();
  player.observeState(1);
  assert.equal(raw.playCalls, 1);
  assert.equal(raw.loads.length, 0, 'first playback must use the already-cued clip');
  raw.time = 36;
  assert.equal(player.currentTime, 36);
  player.pause();
  assert.equal(player.paused, true);
  player.play();
  assert.equal(raw.loads.length, 0, 'resume must not reload the clip from the beginning');
  assert.equal(player.currentTime, 36);
  player.muted = true;
  assert.equal(raw.muted, true);
  player.muted = false;
  assert.equal(raw.muted, false);
  raw.state = 0;
  assert.equal(player.ended, true);
  player.play();
  assert.deepEqual(raw.cues, [selection, selection]);
  assert.equal(raw.loads.length, 0);
});

test('resume sends play even while the iframe has not acknowledged an earlier pause', () => {
  const raw = new FakePlayer();
  const player = new YouTubeClipPlayer(raw, clip);
  player.play();
  player.observeState(1);
  raw.pauseVideo = () => {}; // Iframe commands and state reports cross an asynchronous message channel.
  player.pause();
  assert.equal(raw.state, 1);
  player.play();
  assert.equal(raw.playCalls, 2, 'a queued pause must be followed by a resume command');
});

test('changing songs and trim positions reuses the player without reading stale progress', () => {
  const raw = new FakePlayer();
  const player = new YouTubeClipPlayer(raw, clip);
  player.play();
  player.observeState(1);
  raw.time = 39;
  player.setClip({ ...clip, startOffset: 60 });
  assert.equal(raw.destroyed, false);
  assert.equal(player.readyState, 0);
  assert.equal(player.currentTime, 60, 'old playback time must not advance the new story');
  player.play();
  player.observeState(1);
  raw.time = 61;
  assert.equal(player.readyState, 2);
  assert.equal(player.currentTime, 61);
  player.setClip({ ...clip, songId: 'plnfIj7dkJE' });
  player.play();
  player.observeState(1);
  assert.deepEqual(raw.cues.at(-1), { videoId: 'plnfIj7dkJE', startSeconds: 30, endSeconds: 45 });
  assert.equal(raw.destroyed, false);
  const count = raw.cues.length;
  player.setClip({ ...clip, songId: 'plnfIj7dkJE' });
  assert.equal(raw.cues.length, count, 'ordinary rerenders must not rec cue the same clip');
  player.setClip({ ...clip, songId: 'plnfIj7dkJE' }, true);
  assert.equal(
    raw.cues.length,
    count + 1,
    'a different story may reuse the same song from its start'
  );
});

test('YouTube API loads once and cancelled players release their iframe hosts', async () => {
  const previousWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
  const scripts: unknown[] = [];
  const hosts: { removed: boolean }[] = [];
  const rawPlayers: FakePlayer[] = [];
  const fakeWindow = {
    setTimeout,
    clearTimeout,
    location: { origin: 'http://localhost:3000' },
    YT: undefined as unknown,
    onYouTubeIframeAPIReady: undefined as (() => void) | undefined,
  };
  const documentMock = {
    createElement: () => ({
      style: {},
      dataset: {},
      removed: false,
      setAttribute() {},
      appendChild() {},
      remove() {
        this.removed = true;
      },
    }),
    head: { appendChild: (element: unknown) => scripts.push(element) },
    body: { appendChild: (element: { removed: boolean }) => hosts.push(element) },
  };
  Object.defineProperty(globalThis, 'window', { configurable: true, value: fakeWindow });
  Object.defineProperty(globalThis, 'document', { configurable: true, value: documentMock });
  try {
    const first = loadYouTubeMusicAPI();
    const second = loadYouTubeMusicAPI();
    assert.equal(first, second);
    assert.equal(scripts.length, 1);
    fakeWindow.YT = {
      Player: class extends FakePlayer {
        constructor(
          _element: unknown,
          options: { events: { onReady: (event: { target: FakePlayer }) => void } }
        ) {
          super();
          rawPlayers.push(this);
          queueMicrotask(() => options.events.onReady({ target: this }));
        }
      },
    };
    fakeWindow.onYouTubeIframeAPIReady?.();
    await first;
    const controller = new AbortController();
    const player = await createYouTubeMusicPlayer(clip, controller.signal, () => {});
    player.play();
    controller.abort();
    assert.equal(rawPlayers[0].destroyed, true);
    assert.equal(hosts[0].removed, true);
    const cancelled = new AbortController();
    cancelled.abort();
    await assert.rejects(
      createYouTubeMusicPlayer(clip, cancelled.signal, () => {}),
      { name: 'AbortError' }
    );
    assert.equal(hosts.length, 1, 'an abandoned load must not create another host');
    prepareStoryMusic(clip);
    await new Promise<void>((resolve) => setImmediate(resolve));
    const warmRaw = rawPlayers.at(-1)!;
    const created = rawPlayers.length;
    assert.equal(warmRaw.playCalls, 0, 'preparation must not start background playback');
    startPreparedStoryMusic(clip);
    assert.equal(warmRaw.playCalls, 1, 'a ready player starts synchronously in the click handler');
    const lease = acquireStoryMusic(clip, () => {});
    assert.ok(lease.player, 'the viewer must receive the already-ready player immediately');
    assert.equal(await lease.ready, lease.player);
    lease.player.play();
    assert.equal(
      warmRaw.playCalls,
      1,
      'mounting the viewer must not restart a playing prepared clip'
    );
    assert.equal(rawPlayers.length, created, 'handoff must not construct another iframe');
    lease.dispose();
    const replayedLease = acquireStoryMusic(clip, () => {});
    assert.equal(
      replayedLease.player,
      lease.player,
      'Strict Mode effect replay must reclaim the same iframe'
    );
    assert.equal(rawPlayers.length, created);
    replayedLease.player!.play();
    assert.equal(warmRaw.cues.length, 1, 'effect replay must not reload the selected clip');
    replayedLease.dispose();
    await new Promise<void>((resolve) => setTimeout(resolve, 5));
    assert.equal(warmRaw.destroyed, true);

    prepareStoryMusic(clip);
    const pendingLease = acquireStoryMusic(clip, () => {});
    await pendingLease.ready;
    assert.equal(rawPlayers.length, created + 1, 'an in-flight warmup must also be reused');
    pendingLease.dispose();
    for (const offset of [40, 50, 60]) {
      prepareStoryMusic({ ...clip, startOffset: offset });
      await new Promise<void>((resolve) => setImmediate(resolve));
    }
    assert.equal(
      rawPlayers.at(-3)!.destroyed,
      true,
      'the speculative pool is bounded to two players'
    );
    clearPreparedStoryMusic();
    assert.ok(rawPlayers.slice(-3).every((raw) => raw.destroyed));
    const firstOwner = acquireStoryMusic(clip, () => {});
    const secondOwner = acquireStoryMusic(clip, () => {});
    await Promise.all([firstOwner.ready, secondOwner.ready]);
    firstOwner.dispose();
    secondOwner.dispose();
    await new Promise<void>((resolve) => setTimeout(resolve, 5));
    assert.ok(
      rawPlayers.slice(-2).every((raw) => raw.destroyed),
      'same-song owners must not leak a replaced release'
    );
  } finally {
    clearPreparedStoryMusic();
    if (previousWindow) Object.defineProperty(globalThis, 'window', previousWindow);
    else Reflect.deleteProperty(globalThis, 'window');
    if (previousDocument) Object.defineProperty(globalThis, 'document', previousDocument);
    else Reflect.deleteProperty(globalThis, 'document');
  }
});

test('the security policy permits YouTube scripts and embedded playback', () => {
  const csp =
    buildSecurityHeaders().find((header) => header.key === 'Content-Security-Policy')?.value || '';
  const directives = csp.split('; ');
  assert.match(
    directives.find((value) => value.startsWith('script-src')) || '',
    /https:\/\/www\.youtube\.com/
  );
  assert.match(
    directives.find((value) => value.startsWith('script-src')) || '',
    /https:\/\/s\.ytimg\.com/
  );
  assert.match(
    directives.find((value) => value.startsWith('frame-src')) || '',
    /https:\/\/www\.youtube\.com/
  );
});
