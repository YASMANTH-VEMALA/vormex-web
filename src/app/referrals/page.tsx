'use client';
import { useAuth as useResourceAuth } from '@/lib/auth/useAuth';
import { useQuery } from '@tanstack/react-query';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import * as referralsAPI from '@/lib/api/referrals';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type ReferralStats = referralsAPI.ReferralStats;

interface ReferralMilestone {
  count: number;
  reward: number;
  completed: boolean;
}

interface LeaderboardEntry {
  rank: number;
  user: {
    id: string;
    username: string;
    name: string;
    profileImage?: string;
  };
  referralCount: number;
}

const milestones: ReferralMilestone[] = [
  { count: 1, reward: 100, completed: false },
  { count: 5, reward: 250, completed: false },
  { count: 10, reward: 500, completed: false },
  { count: 25, reward: 1000, completed: false },
  { count: 50, reward: 2500, completed: false },
  { count: 100, reward: 5000, completed: false },
];

export default function ReferralsPage() {
  const [initialStats] = useState<ReferralStats | null>(null);
  const [initialLeaderboard] = useState<LeaderboardEntry[]>([]);

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'leaderboard'>('overview');
  const resourceViewer = useResourceAuth().user;
  const loadDataResource = useQuery({
    queryKey: ['web-resource', 'referrals', resourceViewer?.id ?? 'anonymous'],
    queryFn: async () => {
      const [stats, leaderboard] = await Promise.all([
        referralsAPI.getReferralStats(),
        referralsAPI.getReferralLeaderboard(),
      ]);
      return { stats: stats || null, leaderboard: leaderboard || [] };
    },
    retry: false,
  });
  const stats = loadDataResource.data?.stats ?? initialStats;
  const leaderboard = loadDataResource.data?.leaderboard ?? initialLeaderboard;
  const loading = loadDataResource.isPending;

  const copyCode = () => {
    if (stats?.referralCode) {
      navigator.clipboard.writeText(stats.referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const copyLink = () => {
    if (stats?.referralCode) {
      const link = `${window.location.origin}/login?mode=signup&ref=${encodeURIComponent(stats.referralCode)}`;
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getMilestoneProgress = () => {
    if (!stats) return milestones;
    const completed = stats.activeReferrals ?? 0;
    return milestones.map((m) => ({
      ...m,
      completed: completed >= m.count,
    }));
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-950">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600 dark:border-neutral-700 dark:border-t-neutral-300" />
        </div>
      </ProtectedRoute>
    );
  }

  const referrals = stats?.activeReferrals || 0;

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white pb-28 text-gray-900 dark:bg-neutral-950 dark:text-white">
        <div className="mx-auto max-w-xl px-4 pt-6">
          {/* Header */}
          <div className="flex items-center gap-2">
            <Link
              href="/more"
              aria-label="Back to settings"
              className="-ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              <ChevronLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-bold">Invite friends</h1>
          </div>
          <p className="mt-3 text-sm text-gray-500 dark:text-neutral-400">
            Earn XP for every friend who joins with your code or invite link.
          </p>

          {/* Code */}
          <section aria-label="Your referral code" className="mt-6">
            <h2 className="text-xs font-semibold text-gray-500 dark:text-neutral-400">
              Your referral code
            </h2>
            <div className="mt-1 flex items-center justify-between gap-4 border-b border-gray-100 py-3 dark:border-neutral-800">
              <p className="font-mono text-base font-semibold tracking-wide">
                {stats?.referralCode || 'Loading...'}
              </p>
              <button
                onClick={copyCode}
                className="text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <button
              onClick={copyLink}
              className="mt-4 h-10 w-full rounded-lg bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700"
            >
              {copied ? 'Copied' : 'Copy invite link'}
            </button>
          </section>

          {/* Stats */}
          <dl className="mt-8 grid grid-cols-3 gap-4">
            <div>
              <dt className="text-xs text-gray-500 dark:text-neutral-400">Invited</dt>
              <dd className="mt-0.5 text-xl font-bold tabular-nums">{stats?.totalReferrals || 0}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 dark:text-neutral-400">Joined</dt>
              <dd className="mt-0.5 text-xl font-bold tabular-nums">{referrals}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 dark:text-neutral-400">XP earned</dt>
              <dd className="mt-0.5 text-xl font-bold tabular-nums">{stats?.totalXpEarned || 0}</dd>
            </div>
          </dl>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Referral sections"
            className="mt-8 flex border-b border-gray-200 dark:border-neutral-800"
          >
            {[
              { id: 'overview', label: 'Milestones' },
              { id: 'leaderboard', label: 'Leaderboard' },
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id as 'overview' | 'leaderboard')}
                className={`-mb-px flex-1 border-b-2 py-3 text-sm font-semibold ${
                  activeTab === tab.id
                    ? 'border-gray-900 text-gray-900 dark:border-white dark:text-white'
                    : 'border-transparent text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <ul className="divide-y divide-gray-100 dark:divide-neutral-800">
              {getMilestoneProgress().map((milestone) => (
                <li key={milestone.count} className="py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">
                        Refer {milestone.count} {milestone.count === 1 ? 'friend' : 'friends'}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                        {milestone.completed
                          ? 'Completed'
                          : `${Math.min(referrals, milestone.count)} of ${milestone.count} joined`}
                      </p>
                    </div>
                    <p
                      className={`shrink-0 text-sm font-semibold tabular-nums ${
                        milestone.completed
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      +{milestone.reward} XP
                    </p>
                  </div>
                  {!milestone.completed && (
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-gray-100 dark:bg-neutral-800">
                      <div
                        className="h-full rounded-full bg-blue-600 transition-all"
                        style={{ width: `${Math.min(100, (referrals / milestone.count) * 100)}%` }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'leaderboard' && (
            <>
              {leaderboard.length === 0 ? (
                <p className="py-12 text-center text-sm text-gray-500 dark:text-neutral-400">
                  No referrals yet. Be the first.
                </p>
              ) : (
                <ol className="divide-y divide-gray-100 dark:divide-neutral-800">
                  {leaderboard.map((entry) => (
                    <li key={entry.user.id} className="flex items-center gap-4 py-3">
                      <span className="w-5 text-sm tabular-nums text-gray-500 dark:text-neutral-400">
                        {entry.rank}
                      </span>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-800">
                        {entry.user.profileImage ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={entry.user.profileImage}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="text-sm font-semibold text-gray-700 dark:text-neutral-200">
                            {entry.user.name?.charAt(0) || entry.user.username?.charAt(0) || '?'}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">
                          {entry.user.name || entry.user.username}
                        </p>
                        <p className="truncate text-xs text-gray-500 dark:text-neutral-400">
                          @{entry.user.username}
                        </p>
                      </div>
                      <p className="text-sm font-semibold tabular-nums">
                        {entry.referralCount}
                        <span className="ml-1 text-xs font-normal text-gray-500 dark:text-neutral-400">
                          joined
                        </span>
                      </p>
                    </li>
                  ))}
                </ol>
              )}
            </>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
