import assert from 'node:assert/strict';
import test from 'node:test';
import { resolveSession } from '../src/lib/auth/resolveSession';

test('a backend outage leaves session verification unavailable, not signed out', async () => {
  for (const error of [
    new Error('Connection refused'),
    { code: 'ECONNABORTED' },
    { response: { status: 502 } },
    { response: { status: 503 } },
  ]) {
    assert.deepEqual(
      await resolveSession(async () => {
        throw error;
      }),
      { status: 'unavailable' }
    );
  }
});

test('an explicit session rejection is distinguished from an unavailable backend', async () => {
  for (const status of [401, 403, 404]) {
    assert.deepEqual(
      await resolveSession(async () => {
        throw { response: { status } };
      }),
      { status: 'expired' }
    );
  }
});

test('retrying verification can recover the same session after a backend outage', async () => {
  let calls = 0;
  const user = { id: 'existing-session-user' };
  const getCurrentUser = async () => {
    calls += 1;
    if (calls === 1) throw { response: { status: 503 } };
    return user;
  };
  assert.deepEqual(await resolveSession(getCurrentUser), { status: 'unavailable' });
  assert.equal(calls, 1);
  assert.deepEqual(await resolveSession(getCurrentUser), { status: 'authenticated', user });
  assert.equal(calls, 2);
});
