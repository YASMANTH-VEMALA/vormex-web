import { asApiError } from '../api/errors';

export type SessionResolution<T> =
  { status: 'authenticated'; user: T } | { status: 'expired' } | { status: 'unavailable' };

// An unavailable server does not establish that an existing session expired.
export async function resolveSession<T>(
  getCurrentUser: () => Promise<T>
): Promise<SessionResolution<T>> {
  try {
    return { status: 'authenticated', user: await getCurrentUser() };
  } catch (error) {
    const status = asApiError(error).response?.status;
    return {
      status: status === 401 || status === 403 || status === 404 ? 'expired' : 'unavailable',
    };
  }
}
