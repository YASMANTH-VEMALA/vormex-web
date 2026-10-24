'use client';
import { useAuth as useResourceAuth } from '@/lib/auth/useAuth';
import { useQuery } from '@tanstack/react-query';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import {
  getStreakLeaderboard,
  type StreakLeaderboardEntry,
  type StreakLeaderboardResponse,
  type StreakType,
} from '@/lib/api/engagement';
import { extractEnvelopeData } from '@/lib/api/request';
import { motion } from 'framer-motion';
import { ArrowLeft, Crown, FileText, Flame, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './leaderboard-cards.module.css';

const POLL_INTERVAL_MS = 30_000; // Refetch every 30 seconds

const TAB_CONFIG: Array<{
  key: StreakType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  activeClass: string;
}> = [
  {
    key: 'connection',
    label: 'Networking',
    icon: Flame,
    color: 'text-orange-500',
    activeClass: 'bg-orange-500 text-white',
  },
  {
    key: 'login',
    label: 'Login',
    icon: LogIn,
    color: 'text-blue-500',
    activeClass: 'bg-blue-500 text-white',
  },
  {
    key: 'posting',
    label: 'Posting',
    icon: FileText,
    color: 'text-green-500',
    activeClass: 'bg-green-500 text-white',
  },
];

function LeaderboardCard({
  entry,
  profilePath,
}: {
  entry: StreakLeaderboardEntry;
  profilePath: string;
}) {
  const isTopThree = entry.rank <= 3;
  const bio = entry.user.bio || (entry.user.college ? `${entry.user.college}` : '');
  return (
    <li className={styles.card}>
      <Link href={profilePath} className="block no-underline cursor-pointer">
        {isTopThree && <span className={styles.topBadge}>#{entry.rank}</span>}
        <div className={styles.thumb}>
          {entry.user.profileImage ? (
            <img src={entry.user.profileImage} alt={entry.user.name} className={styles.thumbImg} />
          ) : (
            <div className={styles.thumbPlaceholder}>{entry.user.name.charAt(0)}</div>
          )}
        </div>
        <h3 className={styles.name}>{entry.user.name}</h3>
        <div className={styles.description}>
          <p className={styles.descriptionContent}>{bio || 'No bio yet.'}</p>
          <span className={styles.handle}>@{entry.user.username}</span>
          <span className={styles.streakBadge}>
            {entry.currentStreak} day{entry.currentStreak !== 1 ? 's' : ''} - best:{' '}
            {entry.longestStreak}
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function StreakLeaderboardPage() {
  const [activeTab, setActiveTab] = useState<StreakType>('connection');
  const resourceViewer = useResourceAuth().user;
  const leaderboardResource = useQuery({
    queryKey: ['streak-leaderboard', resourceViewer?.id, activeTab],
    queryFn: async () => {
      const result = extractEnvelopeData(
        await getStreakLeaderboard(activeTab, 20)
      ) as StreakLeaderboardResponse & { type?: string };
      return {
        streakType: result.type ?? result.streakType ?? activeTab,
        leaderboard: result.leaderboard ?? [],
        updatedAt: result.updatedAt ?? null,
      };
    },
    refetchInterval: POLL_INTERVAL_MS,
    enabled: !!resourceViewer?.id,
  });
  const data = leaderboardResource.data;
  const loading = leaderboardResource.isPending;
  const error = leaderboardResource.isError
    ? 'Failed to load leaderboard. Please try again.'
    : null;

  const fetchLeaderboard = (_type?: StreakType, _showLoading = true) =>
    leaderboardResource.refetch();

  const handleTabChange = (type: StreakType) => {
    if (type !== activeTab) {
      setActiveTab(type);
    }
  };

  const leaderboard = data?.leaderboard ?? [];

  return (
    <ProtectedRoute>
      <div
        className="min-h-screen pb-24"
        style={{ background: 'linear-gradient(90deg, #131417, #2f313a 35% 65%, #131417)' }}
      >
        <div className={`${styles.content} mx-auto px-4 py-6`}>
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/streaks"
              className="p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white/80" />
            </Link>
            <h1 className="text-xl font-bold text-white">Streak Leaderboard</h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide">
            {TAB_CONFIG.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? tab.activeClass
                      : 'bg-white/10 text-white/80 border border-white/20 hover:bg-white/20'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-white/80'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Loading */}
          {loading && (
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="animate-pulse h-24 bg-white/10 rounded-lg" />
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12 px-4 rounded-xl bg-red-900/30 border border-red-500/50">
              <p className="text-sm text-red-200 mb-3">{error}</p>
              <button
                onClick={() => fetchLeaderboard(activeTab)}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && data && leaderboard.length === 0 && (
            <div className="text-center py-16">
              <Crown className="w-12 h-12 text-white/40 mx-auto mb-3" />
              <p className="text-sm text-white/70">No leaderboard data yet</p>
              <p className="text-xs text-white/50 mt-1">Be the first to start a streak!</p>
            </div>
          )}

          {/* Team-style cards (alternating zigzag layout) */}
          {!loading && leaderboard.length > 0 && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={styles.teamList}
            >
              {leaderboard.map((entry) => {
                const profilePath = entry.user.username
                  ? `/profile/${entry.user.username}`
                  : `/profile/${entry.user.id}`;
                return (
                  <LeaderboardCard key={entry.user.id} entry={entry} profilePath={profilePath} />
                );
              })}
            </motion.ul>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
