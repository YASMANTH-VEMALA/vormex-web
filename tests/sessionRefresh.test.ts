import assert from 'node:assert/strict';
import test from 'node:test';
import axios, { AxiosError } from 'axios';
import apiClient from '../src/lib/api/client';
import { resolveSession } from '../src/lib/auth/resolveSession';
import { isSessionRefreshRejection } from '../src/lib/auth/sessionRefreshPolicy';
import { sessionCookieOptions } from '../src/lib/auth/sessionCookies';

test('refresh failures distinguish rejected credentials from temporary outages', () => {
  for (const status of [400, 401, 403]) {
    assert.equal(isSessionRefreshRejection({ response: { status } }), true);
  }
  for (const status of [404, 429, 500, 502, 503]) {
    assert.equal(isSessionRefreshRejection({ response: { status } }), false);
  }
  assert.equal(isSessionRefreshRejection({ code: 'ECONNABORTED' }), false);
});

test('an expired access token followed by refresh outage does not expire the session', async (t) => {
  const adapter = apiClient.defaults.adapter;
  t.mock.method(axios, 'post', async () => {
    throw { response: { status: 503 } };
  });
  apiClient.defaults.adapter = async (config) => {
    throw new AxiosError('Expired access token', 'ERR_BAD_REQUEST', config, undefined, {
      data: {},
      status: 401,
      statusText: 'Unauthorized',
      headers: {},
      config,
    });
  };
  try {
    assert.deepEqual(await resolveSession(() => apiClient.get('/auth/me')), {
      status: 'unavailable',
    });
  } finally {
    apiClient.defaults.adapter = adapter;
  }
});

test('an expired access token is refreshed and the original request is retried', async (t) => {
  const adapter = apiClient.defaults.adapter;
  let requests = 0;
  const user = { id: 'session-user' };
  t.mock.method(axios, 'post', async () => ({
    data: { session: { expiresAt: '2030-01-01T00:00:00Z' } },
  }));
  apiClient.defaults.adapter = async (config) => {
    requests += 1;
    if (requests === 1)
      throw new AxiosError('Expired access token', 'ERR_BAD_REQUEST', config, undefined, {
        data: {},
        status: 401,
        statusText: 'Unauthorized',
        headers: {},
        config,
      });
    return { data: user, status: 200, statusText: 'OK', headers: {}, config };
  };
  try {
    assert.deepEqual(await resolveSession(() => apiClient.get('/auth/me')), {
      status: 'authenticated',
      user,
    });
    assert.equal(requests, 2);
  } finally {
    apiClient.defaults.adapter = adapter;
  }
});

test('browser cookies follow the server session expiry with a 30-day fallback', () => {
  assert.equal(sessionCookieOptions().expires, 30);
  assert.equal(sessionCookieOptions('invalid').expires, 30);
  assert.equal(
    (sessionCookieOptions('2030-01-01T00:00:00Z').expires as Date).toISOString(),
    '2030-01-01T00:00:00.000Z'
  );
});
