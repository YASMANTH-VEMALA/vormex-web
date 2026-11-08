'use client';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  Shield,
  Snowflake,
  Star,
  TrendingDown,
  Trophy,
} from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';

function HistoryEventIcon({ event }: { event: string }) {
  const common = 'h-5 w-5';
  switch (event) {
    case 'increment':
      return <Flame className={`${common} flex-shrink-0 text-orange-500`} aria-hidden="true" />;
    case 'milestone':
      return <Trophy className={`${common} flex-shrink-0 text-amber-500`} aria-hidden="true" />;
    case 'break':
      return <TrendingDown className={`${common} flex-shrink-0 text-red-500`} aria-hidden="true" />;
    case 'freeze_used':
      return <Snowflake className={`${common} flex-shrink-0 text-sky-500`} aria-hidden="true" />;
    case 'shield_saved':
      return <Shield className={`${common} flex-shrink-0 text-blue-500`} aria-hidden="true" />;
    default:
      return <Star className={`${common} flex-shrink-0 text-gray-400`} aria-hidden="true" />;
  }
}

interface StreaksDashboardViewProps {
  STREAK_TYPES: (
    | {
        key: 'connection';
        label: string;
        icon: React.ForwardRefExoticComponent<
          Omit<import('lucide-react/dist/lucide-react').LucideProps, 'ref'> &
            React.RefAttributes<SVGSVGElement>
        >;
        color: string;
        currentKey: 'connectionStreak';
        longestKey: 'longestConnectionStreak';
        description: string;
        bgLight: string;
        bgDark: string;
        textColor: string;
        ringColor: string;
      }
    | {
        key: 'login';
        label: string;
        icon: React.ForwardRefExoticComponent<
          Omit<import('lucide-react/dist/lucide-react').LucideProps, 'ref'> &
            React.RefAttributes<SVGSVGElement>
        >;
        color: string;
        currentKey: 'loginStreak';
        longestKey: 'longestLoginStreak';
        description: string;
        bgLight: string;
        bgDark: string;
        textColor: string;
        ringColor: string;
      }
    | {
        key: 'posting';
        label: string;
        icon: React.ForwardRefExoticComponent<
          Omit<import('lucide-react/dist/lucide-react').LucideProps, 'ref'> &
            React.RefAttributes<SVGSVGElement>
        >;
        color: string;
        currentKey: 'postingStreak';
        longestKey: 'longestPostingStreak';
        description: string;
        bgLight: string;
        bgDark: string;
        textColor: string;
        ringColor: string;
      }
    | {
        key: 'messaging';
        label: string;
        icon: React.ForwardRefExoticComponent<
          Omit<import('lucide-react/dist/lucide-react').LucideProps, 'ref'> &
            React.RefAttributes<SVGSVGElement>
        >;
        color: string;
        currentKey: 'messagingStreak';
        longestKey: 'longestMessagingStreak';
        description: string;
        bgLight: string;
        bgDark: string;
        textColor: string;
        ringColor: string;
      }
  )[];
  anyAtRisk: boolean;
  bestCurrentStreak: number;
  freezeLoading: boolean;
  getHistoryEventLabel: (event: string) => string;
  getStreakTypeLabel: (type: string) => string;
  handlePurchaseFreeze: () => Promise<void>;
  handleToggleShield: () => Promise<void>;
  handleToggleVisibility: () => Promise<void>;
  history: import('@/lib/api/engagement.types').StreakHistoryItem[];
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
  shieldLoading: boolean;
  showHistory: boolean;
  streak: import('@/lib/api/engagement.types').StreakData;
  toast: { message: string; type: 'success' | 'error' } | null;
  visibilityLoading: boolean;
  xpBalance: number;
}

export function StreaksDashboardView({
  STREAK_TYPES,
  anyAtRisk,
  bestCurrentStreak,
  freezeLoading,
  getHistoryEventLabel,
  getStreakTypeLabel,
  handlePurchaseFreeze,
  handleToggleShield,
  handleToggleVisibility,
  history,
  setShowHistory,
  shieldLoading,
  showHistory,
  streak,
  toast,
  visibilityLoading,
  xpBalance,
}: StreaksDashboardViewProps) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white dark:bg-neutral-950 pb-24">
        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed left-1/2 top-4 z-[200] -translate-x-1/2 rounded-lg px-4 py-2.5 text-sm font-medium text-white ${
                toast.type === 'success' ? 'bg-gray-900 dark:bg-neutral-700' : 'bg-red-600'
              }`}
            >
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mx-auto max-w-xl px-4 py-6">
          {/* Header */}
          <div className="mb-6 flex items-center gap-2">
            <Link
              href="/more"
              aria-label="Back to settings"
              className="-ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              <ChevronLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Streaks</h1>
          </div>

          {/* Summary */}
          <section aria-label="Summary" className="mb-8">
            <p className="text-5xl font-bold tabular-nums text-gray-900 dark:text-white">
              {bestCurrentStreak}
              <span className="ml-2 text-base font-normal text-gray-500 dark:text-neutral-400">
                day best active streak
              </span>
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
              Overall best: {streak.overallBestStreak} days · Engagement score{' '}
              {streak.engagementScore} · Weekly connections {streak.weeklyConnectionsMade}/
              {streak.weeklyConnectionsGoal}
            </p>
            {anyAtRisk && (
              <p role="status" className="mt-3 text-sm font-semibold text-amber-600 dark:text-amber-400">
                Some streaks are at risk. Take action today.
              </p>
            )}
          </section>

          {/* Streak types */}
          <section aria-label="Your streaks" className="mb-8">
            <h2 className="pb-1 text-xs font-semibold text-gray-500 dark:text-neutral-400">
              Your streaks
            </h2>
            <ul className="divide-y divide-gray-100 dark:divide-neutral-800">
              {STREAK_TYPES.map((type) => {
                const current = streak[type.currentKey];
                const longest = streak[type.longestKey];
                const atRisk = streak.isAtRisk?.[type.key] ?? false;
                return (
                  <li key={type.key} className="flex items-center gap-4 py-3.5">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {type.label}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                        Best: {longest} days
                        {atRisk && (
                          <span className="ml-2 font-semibold text-amber-600 dark:text-amber-400">
                            At risk
                          </span>
                        )}
                      </p>
                    </div>
                    <p className="text-lg font-bold tabular-nums text-gray-900 dark:text-white">
                      {current}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Protection */}
          <section aria-label="Protection" className="mb-8">
            <div className="flex items-baseline justify-between pb-1">
              <h2 className="text-xs font-semibold text-gray-500 dark:text-neutral-400">
                Protection
              </h2>
              <span className="text-xs text-gray-500 dark:text-neutral-400">
                XP balance {xpBalance.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center gap-4 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Streak freezes
                </p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                  {streak.streakFreezes} available · {streak.totalFreezesUsed} used · 100 XP each
                </p>
              </div>
              <button
                onClick={handlePurchaseFreeze}
                disabled={freezeLoading}
                className="h-8 shrink-0 rounded-lg bg-gray-100 px-4 text-sm font-semibold text-gray-900 hover:bg-gray-200 disabled:opacity-50 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
              >
                {freezeLoading ? '...' : 'Buy'}
              </button>
            </div>

            <div className="flex items-center gap-4 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Streak shield
                </p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                  {streak.streakShieldActive
                    ? 'On. Your streaks are protected.'
                    : 'Off. Turn on for protection.'}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={streak.streakShieldActive}
                aria-label="Streak shield"
                onClick={handleToggleShield}
                disabled={shieldLoading}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors disabled:opacity-50 ${
                  streak.streakShieldActive ? 'bg-blue-600' : 'bg-gray-300 dark:bg-neutral-700'
                }`}
              >
                <span
                  className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                    streak.streakShieldActive ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </section>

          {/* More */}
          <section aria-label="More" className="mb-6">
            <h2 className="pb-1 text-xs font-semibold text-gray-500 dark:text-neutral-400">More</h2>

            <Link
              href="/streaks/leaderboard"
              className="flex items-center gap-4 py-3.5 hover:bg-gray-50 dark:hover:bg-neutral-900"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Leaderboard</p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                  See top streakers
                </p>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400 dark:text-neutral-600" />
            </Link>

            <div className="flex items-center gap-4 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Show on profile
                </p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                  {streak.showOnProfile ? 'Visible to others' : 'Hidden from your profile'}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={streak.showOnProfile}
                aria-label="Show streaks on profile"
                onClick={handleToggleVisibility}
                disabled={visibilityLoading}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors disabled:opacity-50 ${
                  streak.showOnProfile ? 'bg-blue-600' : 'bg-gray-300 dark:bg-neutral-700'
                }`}
              >
                <span
                  className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                    streak.showOnProfile ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <button
              onClick={() => setShowHistory(!showHistory)}
              aria-expanded={showHistory}
              className="flex w-full items-center gap-4 py-3.5 text-left hover:bg-gray-50 dark:hover:bg-neutral-900"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Streak history
                </p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                  {history?.length || 0} recent events
                </p>
              </div>
              <ChevronRight
                className={`h-4 w-4 text-gray-400 transition-transform dark:text-neutral-600 ${
                  showHistory ? 'rotate-90' : ''
                }`}
              />
            </button>
          </section>

          {/* History Timeline */}
          <AnimatePresence>
            {showHistory && history.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden mb-6"
              >
                <div className="divide-y divide-gray-100 dark:divide-neutral-800">
                  {history.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 px-4 py-3">
                      <HistoryEventIcon event={item.event} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 dark:text-white">
                          {getHistoryEventLabel(item.event)}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-neutral-400">
                          {getStreakTypeLabel(item.streakType)} · {item.streakBefore}→
                          {item.streakAfter}
                          {item.xpEarned > 0 && ` · +${item.xpEarned} XP`}
                        </p>
                      </div>
                      <span className="text-[11px] text-gray-400 dark:text-neutral-500 flex-shrink-0">
                        {new Date(item.createdAt).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ProtectedRoute>
  );
}
