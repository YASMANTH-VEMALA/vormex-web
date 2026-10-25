import assert from 'node:assert/strict';
import test from 'node:test';
import { clipTime, musicSearchResults, songDurationSeconds } from '../src/lib/stories/music';

test('catalog durations bound a complete 15-second clip, including hour-long songs', () => {
  assert.equal(songDurationSeconds('3:22') - 15, 187);
  assert.equal(songDurationSeconds('1:02:03'), 3723);
  assert.equal(songDurationSeconds('unknown'), 0);
  assert.equal(songDurationSeconds('-1:30'), 0);
  assert.equal(clipTime(187), '3:07');
  assert.equal(clipTime(202), '3:22');
});

test('catalog results tolerate malformed records and show repeated songs once', () => {
  const song = {
    id: 'J7p4bzqLvCw',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    thumbnail: 'https://example.com/art.jpg',
    duration: '3:22',
  };
  assert.deepEqual(
    musicSearchResults([
      null,
      {},
      song,
      { ...song },
      { ...song, id: 'too-short' },
      { ...song, duration: '0:14' },
    ]),
    [song]
  );
  assert.deepEqual(musicSearchResults({ error: 'not an array' }), []);
});
