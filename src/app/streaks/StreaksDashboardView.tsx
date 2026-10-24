'use client';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowLeft,
  ChevronRight,
  Crown,
  Eye,
  EyeOff,
  Flame,
  History,
  Shield,
  Snowflake,
  Star,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';

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
  getHistoryEventEmoji: (event: string) => string;
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
  getHistoryEventEmoji,
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
      <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 pb-24">
        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-4 left-1/2 -translate-x-1/2 z-[200] px-4 py-2.5 rounded-lg text-sm font-medium shadow-lg ${
                toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
              }`}
            >
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-lg mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/more"
              className="p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-neutral-400" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Your Streaks</h1>
          </div>

          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600 p-6 mb-6 text-white"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <Flame className="w-full h-full" />
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-5xl font-black tabular-nums"
                >
                  {bestCurrentStreak}
                </motion.div>
              </div>
              <div>
                <p className="text-base font-semibold text-white/90">Best Active Streak</p>
                <p className="text-sm text-white/70">
                  Overall best: {streak.overallBestStreak} days
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                <span className="font-medium">{streak.engagementScore} score</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4" />
                <span>
                  {streak.weeklyConnectionsMade}/{streak.weeklyConnectionsGoal} weekly
                </span>
              </div>
            </div>

            {anyAtRisk && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 flex items-center gap-2 px-3 py-2 bg-white/15 backdrop-blur-sm rounded-lg text-sm"
              >
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>Some streaks are at risk — take action today!</span>
              </motion.div>
            )}
          </motion.div>

          {/* Streak Type Cards */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {STREAK_TYPES.map((type, index) => {
              const current = streak[type.currentKey];
              const longest = streak[type.longestKey];
              const atRisk = streak.isAtRisk?.[type.key] ?? false;
              const Icon = type.icon;

              return (
                <motion.div
                  key={type.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 ${
                    atRisk ? 'ring-2 ring-amber-400/50' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`w-8 h-8 rounded-lg ${type.bgLight} ${type.bgDark} flex items-center justify-center`}
                    >
                      <Icon className={`w-4 h-4 ${type.textColor}`} />
                    </div>
                    {atRisk && (
                      <span className="ml-auto px-1.5 py-0.5 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-[10px] rounded font-medium">
                        At risk
                      </span>
                    )}
                  </div>

                  <p className="text-2xl font-bold text-gray-900 dark:text-white leading-none">
                    {current}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-neutral-400 mt-1">{type.label}</p>
                  <p className="text-[10px] text-gray-400 dark:text-neutral-500 mt-0.5">
                    Best: {longest} days
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Protection Section */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-sm font-semibold text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
                Protection
              </h2>
              <span className="text-xs font-medium text-gray-500 dark:text-neutral-400">
                XP Balance: {xpBalance.toLocaleString()}
              </span>
            </div>

            {/* Streak Freeze */}
            <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center">
                  <Snowflake className="w-5 h-5 text-cyan-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Streak Freezes
                  </p>
                  <p className="text-xs text-gray-500 dark:text-neutral-400">
                    {streak.streakFreezes} available · {streak.totalFreezesUsed} used total · costs
                    100 XP
                  </p>
                </div>
                <button
                  onClick={handlePurchaseFreeze}
                  disabled={freezeLoading}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors disabled:opacity-50"
                >
                  {freezeLoading ? '...' : 'Buy 100 XP'}
                </button>
              </div>
            </div>

            {/* Streak Shield */}
            <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    streak.streakShieldActive
                      ? 'bg-green-50 dark:bg-green-900/20'
                      : 'bg-gray-100 dark:bg-neutral-800'
                  }`}
                >
                  <Shield
                    className={`w-5 h-5 ${
                      streak.streakShieldActive
                        ? 'text-green-500'
                        : 'text-gray-400 dark:text-neutral-500'
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Streak Shield
                  </p>
                  <p className="text-xs text-gray-500 dark:text-neutral-400">
                    {streak.streakShieldActive
                      ? 'Active — your streaks are protected'
                      : 'Inactive — enable for protection'}
                  </p>
                </div>
                <button
                  onClick={handleToggleShield}
                  disabled={shieldLoading}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors disabled:opacity-50 ${
                    streak.streakShieldActive
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30'
                      : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  {shieldLoading ? '...' : streak.streakShieldActive ? 'On' : 'Off'}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3 mb-6">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-neutral-400 uppercase tracking-wider px-1">
              More
            </h2>

            {/* Leaderboard Link */}
            <Link
              href="/streaks/leaderboard"
              className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Leaderboard</p>
                <p className="text-xs text-gray-500 dark:text-neutral-400">See top streakers</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 dark:text-neutral-500" />
            </Link>

            {/* Visibility Toggle */}
            <button
              onClick={handleToggleVisibility}
              disabled={visibilityLoading}
              className="w-full flex items-center gap-3 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors disabled:opacity-50 text-left"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  streak.showOnProfile
                    ? 'bg-blue-50 dark:bg-blue-900/20'
                    : 'bg-gray-100 dark:bg-neutral-800'
                }`}
              >
                {streak.showOnProfile ? (
                  <Eye className="w-5 h-5 text-blue-500" />
                ) : (
                  <EyeOff className="w-5 h-5 text-gray-400 dark:text-neutral-500" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Show on Profile
                </p>
                <p className="text-xs text-gray-500 dark:text-neutral-400">
                  {streak.showOnProfile ? 'Visible to others' : 'Hidden from profile'}
                </p>
              </div>
              <div
                className={`w-9 h-5 rounded-full relative transition-colors ${
                  streak.showOnProfile ? 'bg-blue-500' : 'bg-gray-300 dark:bg-neutral-600'
                }`}
              >
                <motion.div
                  animate={{ x: streak.showOnProfile ? 16 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"
                />
              </div>
            </button>

            {/* History Toggle */}
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="w-full flex items-center gap-3 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                <History className="w-5 h-5 text-indigo-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Streak History
                </p>
                <p className="text-xs text-gray-500 dark:text-neutral-400">
                  {history?.length || 0} recent events
                </p>
              </div>
              <motion.div
                animate={{ rotate: showHistory ? 90 : 0 }}
                transition={{ duration: 0.15 }}
              >
                <ChevronRight className="w-4 h-4 text-gray-400 dark:text-neutral-500" />
              </motion.div>
            </button>
          </div>

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
                <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 divide-y divide-gray-100 dark:divide-neutral-800">
                  {history.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 px-4 py-3">
                      <span className="text-lg flex-shrink-0">
                        {getHistoryEventEmoji(item.event)}
                      </span>
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
