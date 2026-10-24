'use client';

import { ArrowLeft, Check } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';

export const ONBOARDING_STEPS = [
  { title: 'About you' },
  { title: 'Interests' },
  { title: 'Ready to go' },
];
const HEADINGS = [
  {
    title: 'A little about you.',
    description: 'Start with your campus and one thing you’re here for.',
  },
  {
    title: 'What catches your interest?',
    description: 'Pick a couple of things you enjoy. We’ll take it from there.',
  },
  {
    title: 'You’re in good company.',
    description: 'Your profile is ready. Here are a few people to discover.',
  },
];

export function OnboardingFrame({
  step,
  onBack,
  saving,
  error,
  children,
}: {
  step: number;
  onBack: () => void;
  saving: boolean;
  error: string | null;
  children: ReactNode;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    headingRef.current?.focus({ preventScroll: true });
  }, [step]);
  return (
    <div className="onboarding-shell min-h-dvh bg-[#fcfaf7] text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <header className="mx-auto flex h-20 max-w-[1120px] items-center justify-between px-6 sm:h-24 sm:px-10">
        <div className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" className="h-8 w-8 object-contain dark:invert" />
          <span className="text-xl font-semibold tracking-tight">Vormex</span>
        </div>
        <span className="text-xs text-stone-500 sm:text-sm">Make yourself at home.</span>
      </header>
      <main className="mx-auto max-w-[680px] px-6 pb-12 pt-6 sm:px-8 sm:pt-10">
        <ol aria-label="Setup progress" className="mb-10 grid grid-cols-3 gap-3 sm:mb-12 sm:gap-5">
          {ONBOARDING_STEPS.map((item, index) => (
            <li key={item.title} aria-current={index === step ? 'step' : undefined}>
              <div
                className={
                  'mb-3 h-1 rounded-full ' +
                  (index <= step
                    ? 'bg-[#b65b3d] dark:bg-orange-400'
                    : 'bg-stone-200 dark:bg-stone-800')
                }
              />
              <span
                className={
                  'flex items-center gap-2 text-xs sm:text-sm ' +
                  (index === step
                    ? 'font-semibold text-stone-900 dark:text-white'
                    : 'text-stone-400')
                }
              >
                {index < step ? (
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <span className="text-[11px] tabular-nums">0{index + 1}</span>
                )}
                {item.title}
              </span>
            </li>
          ))}
        </ol>
        {step === 1 && (
          <button
            type="button"
            disabled={saving}
            onClick={onBack}
            className="mb-5 inline-flex min-h-10 items-center gap-2 text-sm text-stone-500 hover:text-stone-900 disabled:opacity-50 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        )}
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-[32px] font-semibold leading-tight tracking-[-0.035em] outline-none sm:text-[42px]"
        >
          {HEADINGS[step].title}
        </h1>
        <p className="mb-9 mt-3 max-w-lg text-base leading-7 text-stone-500 dark:text-stone-400">
          {HEADINGS[step].description}
        </p>
        {error && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300"
          >
            {error}
          </div>
        )}
        {children}
        <p className="mt-8 text-center text-xs leading-5 text-stone-400">
          No need to get it perfect. You can change these details later.
        </p>
      </main>
    </div>
  );
}
export const onboardingPrimaryButton =
  'inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-500 disabled:cursor-not-allowed disabled:bg-stone-200 disabled:text-stone-500 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white dark:disabled:bg-stone-800 dark:disabled:text-stone-500';
