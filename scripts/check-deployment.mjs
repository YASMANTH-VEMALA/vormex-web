import { pathToFileURL } from 'node:url';

// Probe without credentials: a registered, protected music route must return
// the API's 401 JSON response, rather than an old deployment's 404 or host HTML.
/**
 * @param {string} baseUrl
 * @param {(url: URL, options: RequestInit) => Promise<Response>} request
 */
export async function verifyBackend(baseUrl, request = fetch) {
  const origin = new URL(baseUrl);
  if (!['http:', 'https:'].includes(origin.protocol) || origin.username || origin.password) {
    throw new Error('BACKEND_URL must be an HTTP(S) origin without credentials.');
  }
  const checks = [
    ['/api/music/search?q=Trending%20songs', 401],
    ['/api/health/ready', 200],
  ];
  for (const [path, expected] of checks) {
    let response;
    try {
      response = await request(new URL(path, origin), {
        redirect: 'manual',
        signal: AbortSignal.timeout(60_000),
      });
    } catch {
      throw new Error(`Backend ${origin.origin}${path} could not be reached.`);
    }
    const body = await response.json().catch(() => null);
    if (
      response.status !== expected ||
      (expected === 401 ? body?.code !== 'unauthorized' : body?.status !== 'ok')
    ) {
      throw new Error(
        `Backend ${origin.origin}${path} returned HTTP ${response.status}; expected ${expected} from the Vormex API. ` +
          (response.status === 404
            ? 'Deploy the backend with the music route, or correct BACKEND_URL.'
            : 'Check backend runtime logs, database, Redis, and required workers before deploying the web app.')
      );
    }
  }
}

async function main() {
  if (process.argv.includes('--if-production') && process.env.VERCEL_ENV !== 'production') return;
  const { loadEnvConfig } = await import('@next/env');
  loadEnvConfig(process.cwd());
  const { resolveBackendUrl } = await import('../next.config.ts');
  await verifyBackend(resolveBackendUrl());
  console.log('Backend readiness and protected music route verified.');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(`Deployment check failed: ${error.message}`);
    process.exitCode = 1;
  });
}
