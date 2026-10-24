'use client';

import { useRef } from 'react';

export function useThrottledCallback<Args extends unknown[]>(
  callback: (...args: Args) => void,
  waitMs: number
): (...args: Args) => void {
  const lastRunRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  return (...args: Args) => {
    const now = Date.now();
    const remaining = waitMs - (now - lastRunRef.current);

    if (remaining <= 0) {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      lastRunRef.current = now;
      callback(...args);
      return;
    }

    if (!timeoutRef.current) {
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
        lastRunRef.current = Date.now();
        callback(...args);
      }, remaining);
    }
  };
}
