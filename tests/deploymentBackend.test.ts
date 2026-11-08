import assert from 'node:assert/strict';
import test from 'node:test';
import { verifyBackend } from '../scripts/check-deployment.mjs';

test('deployment check verifies the protected music route and dependency readiness', async () => {
  const paths: string[] = [];
  await verifyBackend('https://api.example.com', async (url: URL) => {
    paths.push(url.pathname);
    return url.pathname === '/api/music/search'
      ? Response.json({ code: 'unauthorized' }, { status: 401 })
      : Response.json({ status: 'ok' });
  });
  assert.deepEqual(paths, ['/api/music/search', '/api/health/ready']);
});

test('an older backend missing music cannot pass deployment checks', async () => {
  await assert.rejects(
    verifyBackend('https://api.example.com', async () =>
      Response.json({ status: 'not_found' }, { status: 404 })
    ),
    /Deploy the backend with the music route/
  );
});

test('a crashed backend, host login page, and unhealthy dependencies fail deployment', async () => {
  for (const response of [
    new Response('FUNCTION_INVOCATION_FAILED', { status: 500 }),
    new Response('<html>Sign in</html>', { status: 401 }),
    new Response(null, { status: 302, headers: { location: '/login' } }),
  ]) {
    await assert.rejects(verifyBackend('https://api.example.com', async () => response));
  }
  await assert.rejects(
    verifyBackend('https://api.example.com', async (url: URL) =>
      url.pathname === '/api/music/search'
        ? Response.json({ code: 'unauthorized' }, { status: 401 })
        : Response.json({ status: 'error' }, { status: 503 })
    ),
    /Redis/
  );
});

test('deployment probes never send credentials and reject credential URLs', async () => {
  await assert.rejects(verifyBackend('https://user:secret@api.example.com'), /without credentials/);
  await assert.rejects(
    verifyBackend('https://api.example.com', async (_url: URL, options: RequestInit) => {
      assert.equal(options.headers, undefined);
      assert.equal(options.redirect, 'manual');
      throw new Error('network unavailable');
    }),
    /could not be reached/
  );
});
