import assert from 'node:assert/strict';
import test from 'node:test';
import { attachStoryVideoPlayback } from '../src/lib/stories/videoPlayback';

class Video extends EventTarget {
  paused = true;
  playCalls = 0;
  pauseCalls = 0;
  abortFirstPlay = false;
  play() {
    this.playCalls++;
    if (this.abortFirstPlay) {
      this.abortFirstPlay = false;
      return Promise.reject(new DOMException('Video source changed', 'AbortError'));
    }
    this.paused = false;
    return Promise.resolve();
  }
  pause() {
    this.pauseCalls++;
    this.paused = true;
  }
}

test('a new video retries an aborted play when media becomes ready, without a manual toggle', async () => {
  const video = new Video();
  video.abortFirstPlay = true;
  const detach = attachStoryVideoPlayback(video as unknown as HTMLVideoElement, false);
  await Promise.resolve();
  assert.equal(video.paused, true);
  video.dispatchEvent(new Event('loadeddata'));
  assert.equal(video.paused, false);
  assert.equal(video.playCalls, 2);
  video.dispatchEvent(new Event('canplay'));
  assert.equal(video.playCalls, 2, 'ready events must not interrupt an already playing video');
  detach();
  assert.equal(video.paused, true);
  video.dispatchEvent(new Event('canplay'));
  assert.equal(video.playCalls, 2, 'an old story must not restart after navigation');
});

test('user pause wins over loaded-data and late playing events', () => {
  const video = new Video();
  const detach = attachStoryVideoPlayback(video as unknown as HTMLVideoElement, true);
  video.dispatchEvent(new Event('canplay'));
  video.paused = false;
  video.dispatchEvent(new Event('playing'));
  assert.equal(video.paused, true);
  assert.equal(video.playCalls, 0);
  detach();
});
