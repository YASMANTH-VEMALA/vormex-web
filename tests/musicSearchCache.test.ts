import assert from 'node:assert/strict';
import test from 'node:test';
import apiClient from '../src/lib/api/client';
import { cachedMusicSearch, searchStoryMusic } from '../src/lib/api/music';

const song = {
  id: 'J7p4bzqLvCw',
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  thumbnail: 'https://example.com/art.jpg',
  duration: '3:22',
};

test('reopening a category reuses results and refreshes them after five minutes', async () => {
  const originalGet = apiClient.get;
  const originalNow = Date.now;
  let now = originalNow();
  let requests = 0;
  Date.now = () => now;
  apiClient.get = (async () => {
    requests++;
    return { data: { results: [song] } };
  }) as typeof apiClient.get;
  try {
    assert.deepEqual(await searchStoryMusic('Global Top 50 songs'), [song]);
    assert.deepEqual(await searchStoryMusic(' global top 50 songs '), [song]);
    assert.deepEqual(cachedMusicSearch('GLOBAL TOP 50 SONGS'), [song]);
    assert.equal(requests, 1, 'a category revisit must not issue another HTTP request');
    now += 5 * 60 * 1000 + 1;
    assert.equal(cachedMusicSearch('Global Top 50 songs'), undefined);
    await searchStoryMusic('Global Top 50 songs');
    assert.equal(requests, 2);
  } finally {
    apiClient.get = originalGet;
    Date.now = originalNow;
  }
});

test('failed catalog requests do not poison later retries', async () => {
  const originalGet = apiClient.get;
  let requests = 0;
  apiClient.get = (async () => {
    requests++;
    if (requests === 1) throw new Error('catalog temporarily offline');
    return { data: { results: [song] } };
  }) as typeof apiClient.get;
  try {
    await assert.rejects(searchStoryMusic('retry-cache-test'));
    assert.equal(cachedMusicSearch('retry-cache-test'), undefined);
    assert.deepEqual(await searchStoryMusic('retry-cache-test'), [song]);
    assert.equal(requests, 2);
  } finally {
    apiClient.get = originalGet;
  }
});
