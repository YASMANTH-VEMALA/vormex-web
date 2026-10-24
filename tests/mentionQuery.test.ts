import assert from 'node:assert/strict';
import test from 'node:test';
import { getMentionQuery, replaceMention } from '../src/lib/feed/mentionQuery';

test('mentions search the text at the caret, including in the middle of a post', () => {
  assert.deepEqual(getMentionQuery('Hello @bo after', 9), { query: 'bo', start: 6, end: 9 });
  assert.equal(getMentionQuery('Hello @bo after', 15), null);
  assert.equal(getMentionQuery('mail@example.com', 16), null);
  assert.deepEqual(getMentionQuery('@', 1), { query: '', start: 0, end: 1 });
  assert.equal(getMentionQuery('@bo\nnext', 8), null);
});

test('selecting a mention preserves the rest of the post and restores the caret', () => {
  assert.deepEqual(replaceMention('Hello @bo after', 9, 'bolt_new'), {
    content: 'Hello @bolt_new  after',
    cursor: 16,
  });
  assert.deepEqual(replaceMention('@first hello @bo', 16, 'bolt_new'), {
    content: '@first hello @bolt_new ',
    cursor: 23,
  });
  assert.equal(replaceMention('No active mention', 17, 'bolt_new'), null);
});
