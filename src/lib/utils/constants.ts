function normalizeApiUrl(input: string): string {
  const trimmed = input.trim().replace(/\/+$/, '');
  return trimmed.endsWith('/api') ? trimmed : `${trimmed}/api`;
}

function normalizeOriginUrl(input: string): string {
  return input.trim().replace(/\/+$/, '');
}

function isAbsoluteUrl(input: string): boolean {
  return /^https?:\/\//i.test(input.trim());
}

// Next.js only inlines direct NEXT_PUBLIC_* property reads into browser code.
// Passing process.env itself leaves an empty runtime shim in the client bundle.
const publicBuildEnv = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  NEXT_PUBLIC_SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
  NODE_ENV: process.env.NODE_ENV,
};

export function resolveApiUrl(env: Partial<NodeJS.ProcessEnv> = publicBuildEnv): string {
  const publicApiUrl = env.NEXT_PUBLIC_API_URL;
  if (publicApiUrl) {
    return normalizeApiUrl(publicApiUrl);
  }

  const publicBackendUrl = env.NEXT_PUBLIC_BACKEND_URL;
  if (publicBackendUrl) {
    return normalizeApiUrl(publicBackendUrl);
  }

  // Production uses the same-origin Next.js rewrite so HttpOnly auth cookies
  // stay first-party. Local development can override this in .env.local.
  return '/api';
}

export const API_URL = resolveApiUrl();
export const BACKEND_ORIGIN = API_URL.replace(/\/api$/, '');

export function resolveSocketUrl(env: Partial<NodeJS.ProcessEnv> = publicBuildEnv): string {
  const explicitSocketUrl = env.NEXT_PUBLIC_SOCKET_URL;
  if (explicitSocketUrl) {
    return normalizeOriginUrl(explicitSocketUrl);
  }

  const backendUrl = env.NEXT_PUBLIC_BACKEND_URL;
  if (backendUrl && isAbsoluteUrl(backendUrl)) {
    return normalizeOriginUrl(backendUrl);
  }

  const apiUrl = env.NEXT_PUBLIC_API_URL;
  if (apiUrl && isAbsoluteUrl(apiUrl)) {
    return normalizeOriginUrl(apiUrl.replace(/\/api\/?$/, ''));
  }

  return env.NODE_ENV === 'production'
    ? 'https://vormex-backend.onrender.com'
    : 'http://localhost:5000';
}

export const SOCKET_URL = resolveSocketUrl();
export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';
