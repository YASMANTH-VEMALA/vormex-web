import { asApiError } from '@/lib/api/errors';

export function isSessionRefreshRejection(error: unknown): boolean {
  const status = asApiError(error).response?.status;
  return status === 400 || status === 401 || status === 403;
}
