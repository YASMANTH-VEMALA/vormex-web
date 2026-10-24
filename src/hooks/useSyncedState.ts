'use client';

import { useCallback, useState, type Dispatch, type SetStateAction } from 'react';

/** Local optimistic edits reset when the authoritative value changes.
 * React retries this guarded update before committing, avoiding an effect that
 * briefly paints the previous prop value. Pass a stable value, not a fresh object.
 */
export function useSyncedState<T>(
  source: T,
  resetKey: unknown = source
): [T, Dispatch<SetStateAction<T>>] {
  const [snapshot, setSnapshot] = useState(() => ({ source: resetKey, value: source }));
  const setValue = useCallback<Dispatch<SetStateAction<T>>>((action) => {
    setSnapshot((previous) => ({
      source: previous.source,
      value: typeof action === 'function' ? (action as (value: T) => T)(previous.value) : action,
    }));
  }, []);
  if (!Object.is(snapshot.source, resetKey)) {
    setSnapshot({ source: resetKey, value: source });
    return [source, setValue];
  }
  return [snapshot.value, setValue];
}
