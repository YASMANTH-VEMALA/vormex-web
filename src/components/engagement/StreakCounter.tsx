'use client';

import { useLiveStreaks } from '@/hooks/useLiveGamification';
import { hasAtRiskStreak, selectBestCurrentStreak } from '@/lib/api/engagement';
import * as Dialog from '@radix-ui/react-dialog';
import {
  ArrowUpRight,
  FileText,
  Flame,
  LogIn,
  MessageCircle,
  Trophy,
  Users,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function StreakCounter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data: streak, isLoading: loading } = useLiveStreaks();

  if (loading || !streak) return null;

  const bestCurrentStreak = selectBestCurrentStreak(streak);
  const hasStreak = bestCurrentStreak > 0;
  const anyAtRisk = hasAtRiskStreak(streak);
  const activities = [
    {
      label: 'Networking',
      value: streak.connectionStreak,
      longest: streak.longestConnectionStreak,
      icon: Users,
      riskKey: 'connection',
    },
    {
      label: 'Login',
      value: streak.loginStreak,
      longest: streak.longestLoginStreak,
      icon: LogIn,
      riskKey: 'login',
    },
    {
      label: 'Posting',
      value: streak.postingStreak,
      longest: streak.longestPostingStreak,
      icon: FileText,
      riskKey: 'posting',
    },
    {
      label: 'Messaging',
      value: streak.messagingStreak,
      longest: streak.longestMessagingStreak,
      icon: MessageCircle,
      riskKey: 'messaging',
    },
  ];

  return (
    <Dialog.Root open={isExpanded} onOpenChange={setIsExpanded}>
      <Dialog.Trigger asChild>
        <button
          aria-label={`View streaks: ${bestCurrentStreak} days${anyAtRisk ? ', some streaks at risk' : ''}`}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
            hasStreak
              ? 'bg-orange-50 text-orange-600 hover:bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400 dark:hover:bg-orange-900/30'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700'
          }`}
        >
          <Flame className="h-4 w-4" />
          <span>{bestCurrentStreak}</span>
          {anyAtRisk && hasStreak && <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />}
        </button>
      </Dialog.Trigger>
      {/* Portal escapes the sticky header's backdrop-filter containing block. */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] flex max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[420px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-2xl focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white">
          <div className="flex items-start justify-between gap-4 border-b border-gray-100 p-5 dark:border-neutral-800">
            <div>
              <Dialog.Title className="text-lg font-semibold tracking-tight">
                Your streaks
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
                Small steps. Steady progress.
              </Dialog.Description>
            </div>
            <Dialog.Close
              aria-label="Close streaks"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>
          <div className="overflow-y-auto p-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-neutral-800 dark:bg-neutral-800/50">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-neutral-400">
                  <Flame className="h-4 w-4 text-orange-500" />
                  Current streak
                </div>
                <p className="mt-2 text-2xl font-semibold tracking-tight">
                  {bestCurrentStreak}
                  <span className="ml-1.5 text-xs font-normal text-gray-500 dark:text-neutral-400">
                    days
                  </span>
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-neutral-800 dark:bg-neutral-800/50">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-neutral-400">
                  <Trophy className="h-4 w-4 text-amber-500" />
                  Personal best
                </div>
                <p className="mt-2 text-2xl font-semibold tracking-tight">
                  {streak.overallBestStreak}
                  <span className="ml-1.5 text-xs font-normal text-gray-500 dark:text-neutral-400">
                    days
                  </span>
                </p>
              </div>
            </div>
            <h4 className="mb-1 mt-5 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-neutral-400">
              Your activity
            </h4>
            <div className="divide-y divide-gray-100 dark:divide-neutral-800">
              {activities.map(({ label, value, longest, icon: Icon, riskKey }) => (
                <div key={riskKey} className="flex items-center gap-3 py-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-400">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{label}</p>
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                      Best: {longest} days
                    </p>
                  </div>
                  {streak.isAtRisk?.[riskKey] && (
                    <span className="rounded-md bg-amber-50 px-2 py-1 text-[10px] font-medium text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
                      At risk
                    </span>
                  )}
                  <span className="min-w-9 text-right text-base font-semibold tabular-nums">
                    {value}
                    <span className="ml-0.5 text-xs font-normal text-gray-400">d</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl bg-blue-50/70 p-3.5 dark:bg-blue-500/10">
              <div className="flex justify-between gap-3 text-xs">
                <span className="font-medium text-gray-700 dark:text-neutral-300">
                  Connections this week
                </span>
                <span className="font-semibold tabular-nums text-blue-600 dark:text-blue-400">
                  {streak.weeklyConnectionsMade} / {streak.weeklyConnectionsGoal}
                </span>
              </div>
              <div
                role="progressbar"
                aria-label="Weekly connections"
                aria-valuemin={0}
                aria-valuemax={Math.max(1, streak.weeklyConnectionsGoal)}
                aria-valuenow={Math.min(
                  Math.max(0, streak.weeklyConnectionsMade),
                  Math.max(1, streak.weeklyConnectionsGoal)
                )}
                className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-blue-100 dark:bg-neutral-700"
              >
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{
                    width: `${Math.min(100, Math.max(0, (streak.weeklyConnectionsMade / Math.max(1, streak.weeklyConnectionsGoal)) * 100))}%`,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 px-5 py-4 dark:border-neutral-800">
            <Link
              href="/streaks"
              onClick={() => setIsExpanded(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              View streak dashboard <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
