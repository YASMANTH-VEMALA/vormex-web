import { z } from 'zod';
import apiClient from './client';

export type QueryValue = string | number | boolean | null | undefined;
export type QueryParams = Record<string, QueryValue>;

export function buildPathWithQuery(path: string, params?: QueryParams): string {
  if (!params) {
    return path;
  }

  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === '') {
      continue;
    }

    searchParams.set(key, String(value));
  }

  const queryString = searchParams.toString();
  return queryString ? `${path}?${queryString}` : path;
}

async function parseResponse<T>(request: Promise<unknown>, schema: z.ZodType<T>): Promise<T> {
  return schema.parse(await request);
}

/**
 * Envelope used by endpoints that wrap payloads as `{ data: T }`.
 * Kept separate from unwrapped endpoints so callers preserve exact runtime shape.
 */
export type ApiDataEnvelope<T> = {
  data: T;
};

/**
 * Unwrap `{ data: T }` without changing behavior for already-unwrapped payloads.
 * Only use where the backend contract is ambiguous; prefer exact types otherwise.
 * New code should use this shared helper instead of adding local unwrappers.
 */
export function extractEnvelopeData<T>(payload: T | ApiDataEnvelope<T> | null | undefined): T {
  if (
    payload !== null &&
    payload !== undefined &&
    typeof payload === 'object' &&
    !Array.isArray(payload) &&
    'data' in payload &&
    (payload as ApiDataEnvelope<T>).data !== undefined
  ) {
    return (payload as ApiDataEnvelope<T>).data;
  }
  return payload as T;
}

/**
 * Typed wrappers around the shared axios instance.
 * The response interceptor already unwraps `response.data`, so these cast
 * the resolved value instead of re-wrapping it. No validation is performed,
 * which keeps runtime behavior identical while removing loose casts at call sites.
 */
export function getJson<T>(path: string, params?: QueryParams): Promise<T> {
  return apiClient.get(buildPathWithQuery(path, params)) as unknown as Promise<T>;
}

export function postJson<TResponse, TBody = unknown>(
  path: string,
  body?: TBody,
  params?: QueryParams
): Promise<TResponse> {
  return apiClient.post(buildPathWithQuery(path, params), body) as unknown as Promise<TResponse>;
}

export function putJson<TResponse, TBody = unknown>(
  path: string,
  body?: TBody,
  params?: QueryParams
): Promise<TResponse> {
  return apiClient.put(buildPathWithQuery(path, params), body) as unknown as Promise<TResponse>;
}

export function patchJson<TResponse, TBody = unknown>(
  path: string,
  body?: TBody,
  params?: QueryParams
): Promise<TResponse> {
  return apiClient.patch(buildPathWithQuery(path, params), body) as unknown as Promise<TResponse>;
}

export function deleteJson<TResponse>(path: string, params?: QueryParams): Promise<TResponse> {
  return apiClient.delete(buildPathWithQuery(path, params)) as unknown as Promise<TResponse>;
}

/**
 * Normalize list payloads that may arrive either as a bare array or wrapped
 * in an object (for example `{ jobs: [...] }`). Returns `[]` otherwise.
 * Preserves existing call-site fallbacks without throwing.
 */
export function extractList<T>(payload: unknown, keys: string[] = []): T[] {
  if (Array.isArray(payload)) return payload as T[];
  if (typeof payload === 'object' && payload !== null) {
    const record = payload as Record<string, unknown>;
    for (const key of keys) {
      const value = record[key];
      if (Array.isArray(value)) return value as T[];
    }
    if (Array.isArray(record.data)) return record.data as T[];
  }
  return [];
}

export function apiGet<T>(path: string, schema: z.ZodType<T>, params?: QueryParams): Promise<T> {
  return parseResponse(apiClient.get(buildPathWithQuery(path, params)) as Promise<unknown>, schema);
}

export function apiPost<TResponse, TBody = undefined>(
  path: string,
  body: TBody,
  schema: z.ZodType<TResponse>,
  params?: QueryParams
): Promise<TResponse> {
  return parseResponse(
    apiClient.post(buildPathWithQuery(path, params), body) as Promise<unknown>,
    schema
  );
}
