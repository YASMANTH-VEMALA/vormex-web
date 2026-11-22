'use client';

import { motion } from 'framer-motion';

/**
 * Loading state for the assistant: a nib draws three lines of "handwriting" with
 * stroke animation instead of a generic spinner. Paths are hand-set so each line
 * has a slightly different length and curve.
 */
const LINES = [
  { d: 'M10 14c6-4 10 4 16 0s9 3 15-1 10 3 16-1', delay: 0 },
  { d: 'M10 26c5-3 9 3 14 0s9 3 14-1 8 2 12-1', delay: 0.5 },
  { d: 'M10 38c7-3 11 3 18 0s8 2 12-1', delay: 1.0 },
];

export function WritingIndicator({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-3 py-7"
    >
      <svg
        viewBox="0 0 90 50"
        className="h-14 w-24 text-neutral-800 dark:text-neutral-100"
        fill="none"
        aria-hidden="true"
      >
        {LINES.map((line, index) => (
          <motion.path
            key={index}
            d={line.d}
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={
              reduceMotion ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0.9 }
            }
            animate={
              reduceMotion ? undefined : { pathLength: [0, 1, 1, 0], opacity: [0.9, 0.9, 0.35, 0] }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 2.2,
                    delay: line.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    times: [0, 0.55, 0.85, 1],
                  }
            }
          />
        ))}
      </svg>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">Writing options</p>
    </div>
  );
}
