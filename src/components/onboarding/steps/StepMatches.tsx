'use client';

import { onboardingAPI, type MatchResult } from '@/lib/api/onboarding';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { ArrowRight, Check, Loader2, RefreshCw, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { onboardingPrimaryButton } from '../OnboardingFrame';

export default function StepMatches({ onFinish }: { onFinish: () => void }) {
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    onboardingAPI
      .getInitialMatches()
      .then((data) => {
        if (active) setMatches(data.matches.slice(0, 5));
      })
      .catch(() => {
        if (active) setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [attempt]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 rounded-xl border border-stone-100 bg-stone-50/60 p-4 dark:border-stone-900 dark:bg-stone-500/10">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-stone-600 dark:bg-stone-800 dark:text-stone-300">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-stone-900 dark:text-white">
            Your profile is ready
          </p>
          <p className="mt-1 text-xs leading-5 text-stone-500 dark:text-stone-400">
            You’re ready to explore your community.
          </p>
        </div>
      </div>

      {loading ? (
        <div role="status" className="flex min-h-56 flex-col items-center justify-center gap-4">
          <Loader2 className="h-7 w-7 animate-spin text-stone-600" aria-hidden="true" />
          <p className="text-sm text-stone-500">Finding people with shared interests…</p>
        </div>
      ) : error ? (
        <div
          role="alert"
          className="rounded-xl border border-stone-200 p-6 text-center dark:border-stone-700"
        >
          <p className="text-sm font-semibold">Your recommendations couldn’t load</p>
          <p className="mt-2 text-sm leading-6 text-stone-500">
            Your profile is saved. Try again, or explore Vormex to find people yourself.
          </p>
          <button
            type="button"
            onClick={() => {
              setError(false);
              setLoading(true);
              setAttempt((value) => value + 1);
            }}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-stone-600"
          >
            <RefreshCw className="h-4 w-4" /> Try again
          </button>
        </div>
      ) : matches.length === 0 ? (
        <div className="flex flex-col items-center rounded-xl border border-stone-200 px-6 py-10 text-center dark:border-stone-700">
          <Users className="h-8 w-8 text-stone-400" aria-hidden="true" />
          <h2 className="mt-4 text-lg font-semibold">Your community starts with you</h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-stone-500 dark:text-stone-400">
            Explore people and circles across Vormex. Recommendations will grow as more people join
            and you connect.
          </p>
        </div>
      ) : (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold">People to discover</h2>
            <span className="text-xs text-stone-500">{matches.length} recommendations</span>
          </div>
          <div className="space-y-3">
            {matches.map((match) => (
              <div
                key={match.user.id}
                className="flex items-start gap-3 rounded-xl border border-stone-200 p-4 sm:gap-4 dark:border-stone-700"
              >
                <UserAvatar
                  imageSrc={match.user.profileImage}
                  name={match.user.name}
                  className="h-12 w-12 shrink-0 rounded-full bg-stone-100 text-stone-500 dark:bg-stone-800"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{match.user.name}</p>
                  <p className="mt-1 truncate text-xs text-stone-500 dark:text-stone-400">
                    {match.user.college || match.user.headline}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {match.reasons.slice(0, 2).map((reason) => (
                      <span
                        key={reason}
                        className="rounded-md bg-stone-50 px-2 py-1 text-xs text-stone-500 dark:bg-stone-800 dark:text-stone-400"
                      >
                        {reason}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-stone-100 pt-6 sm:flex-row dark:border-stone-800">
        <span className="text-xs text-stone-400">Your network is yours to build.</span>
        <button type="button" onClick={onFinish} className={onboardingPrimaryButton}>
          Explore Vormex <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
