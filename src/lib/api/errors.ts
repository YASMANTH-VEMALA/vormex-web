export type StructuredApiError = {
  status?: number;
  code?: string;
  retryable?: boolean;
  message: string;
};

/** API gateways may wrap errors as { error: { code, message } }. */
export function readApiErrorMessage(payload: unknown): string | undefined {
  if (!payload || typeof payload !== 'object') return undefined;
  const data = payload as { error?: unknown; message?: unknown };
  if (typeof data.error === 'string' && data.error.trim()) return data.error;
  if (data.error && typeof data.error === 'object') {
    const message = (data.error as { message?: unknown }).message;
    if (typeof message === 'string' && message.trim()) return message;
  }
  return typeof data.message === 'string' && data.message.trim() ? data.message : undefined;
}

export function getStructuredApiError(error: unknown): StructuredApiError {
  const candidate = error as {
    message?: unknown;
    status?: number;
    code?: string;
    retryable?: boolean;
    response?: {
      status?: number;
      data?: { error?: unknown; message?: unknown; code?: string; retryable?: boolean };
    };
  };
  const data = candidate?.response?.data;
  const code = candidate?.code ?? data?.code;
  const retryable =
    code === 'user_blocked' || code === 'resource_unavailable'
      ? false
      : (candidate?.retryable ?? data?.retryable);
  return {
    status: candidate?.status ?? candidate?.response?.status,
    code,
    retryable,
    message: readApiErrorMessage(data) || readApiErrorMessage(candidate) || 'Request failed',
  };
}

export function isTerminalSafetyError(error: unknown): boolean {
  const structured = getStructuredApiError(error);
  return (
    structured.retryable === false ||
    structured.code === 'user_blocked' ||
    structured.code === 'resource_unavailable'
  );
}

const TIMEOUT_ERROR_CODES = new Set(['ECONNABORTED', 'ETIMEDOUT']);

export function isTimeoutErrorCode(code: unknown): boolean {
  return typeof code === 'string' && TIMEOUT_ERROR_CODES.has(code);
}

/**
 * Best-effort message extraction for non-Axios call sites.
 * Axios-specific status handling lives in `handleApiError`.
 */
export function getApiErrorMessage(error: unknown, fallback = 'Request failed'): string {
  return getStructuredApiError(error).message || fallback;
}

export interface ApiErrorData {
  error?: string;
  message?: string;
  code?: string;
  retryable?: boolean;
  [key: string]: unknown;
}

export interface ApiErrorShape {
  response?: {
    status?: number;
    data?: ApiErrorData;
  };
  message?: string;
  code?: string | number;
}

/**
 * Narrow an unknown catch value to the API error shape without changing
 * runtime semantics: property reads behave exactly like the previous `any`
 * accesses, except a nullish thrown value yields `undefined` reads instead of
 * throwing inside the catch block.
 */
export function asApiError(error: unknown): ApiErrorShape {
  return (error ?? {}) as ApiErrorShape;
}
