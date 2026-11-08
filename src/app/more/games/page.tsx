'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import {
  useLiveGameLeaderboard,
  useLiveGameStats,
  useLiveStreaks,
  useLiveWalletXpBalance,
} from '@/hooks/useLiveGamification';
import { Brain, ChevronLeft, Code, Keyboard, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface GameCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  color: string;
  bgGradient: string;
  xpReward: string;
  difficulty?: string;
  badge?: string;
}

export default function GamesPage() {
  const { data: xpBalance = 0, isLoading: xpLoading } = useLiveWalletXpBalance();
  const { data: streakData, isLoading: streakLoading } = useLiveStreaks();
  const { data: gameStatsData, isLoading: statsLoading } = useLiveGameStats();
  const { data: leaderboardData, isLoading: leaderboardLoading } = useLiveGameLeaderboard(
    'all',
    'alltime',
    5
  );

  const leaderboard = leaderboardData?.leaderboard ?? [];
  const activeStreak = streakData
    ? Math.max(
        streakData.connectionStreak,
        streakData.loginStreak,
        streakData.postingStreak,
        streakData.messagingStreak
      )
    : 0;
  const totalGamesPlayed = gameStatsData?.stats.totalGamesPlayed ?? 0;
  const totalGameXpEarned = gameStatsData?.stats.totalXpEarned ?? 0;
  const isLoading = xpLoading || streakLoading || statsLoading || leaderboardLoading;

  const games: GameCard[] = [
    {
      id: 'trivia',
      title: 'Daily Trivia',
      description: 'Test your tech knowledge with daily questions',
      icon: Brain,
      href: '/more/games/trivia',
      color: 'text-blue-500',
      bgGradient: 'bg-blue-500/10',
      xpReward: '10-50 XP',
      difficulty: 'Varies',
      badge: 'Daily',
    },
    {
      id: 'wordle',
      title: 'Tech Wordle',
      description: 'Guess the tech term in 6 tries',
      icon: Target,
      href: '/more/games/wordle',
      color: 'text-green-500',
      bgGradient: 'bg-green-500/10',
      xpReward: '20-100 XP',
      difficulty: 'Medium',
      badge: 'Daily',
    },
    {
      id: 'typing',
      title: 'Typing Race',
      description: 'Test your typing speed with code snippets',
      icon: Keyboard,
      href: '/more/games/typing',
      color: 'text-blue-500',
      bgGradient: 'bg-blue-500/10',
      xpReward: '15-75 XP',
      difficulty: 'All Levels',
      badge: 'Multiplayer',
    },
    {
      id: 'coding',
      title: 'Coding Puzzles',
      description: 'Solve algorithmic challenges',
      icon: Code,
      href: '/more/games/coding',
      color: 'text-orange-500',
      bgGradient: 'bg-orange-500/10',
      xpReward: '50-200 XP',
      difficulty: 'Hard',
    },
    {
      id: 'startup',
      title: 'Startup Simulator',
      description: 'Build your tech empire from scratch',
      icon: TrendingUp,
      href: '/more/games/startup',
      color: 'text-rose-500',
      bgGradient: 'bg-rose-500/10',
      xpReward: '10-500 XP',
      difficulty: 'Strategy',
      badge: 'New',
    },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white pb-28 dark:bg-neutral-950">
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
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Games & XP</h1>
          </div>
          <p className="mt-3 text-sm text-gray-500 dark:text-neutral-400">
            Play games, grow your XP balance and climb the leaderboard.
          </p>

          {/* Stats */}
          <dl className="mt-6 grid grid-cols-2 gap-y-5 sm:grid-cols-4">
            <div>
              <dt className="text-xs text-gray-500 dark:text-neutral-400">XP balance</dt>
              <dd className="mt-0.5 text-xl font-bold tabular-nums text-gray-900 dark:text-white">
                {isLoading ? '...' : xpBalance.toLocaleString()}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 dark:text-neutral-400">Active streak</dt>
              <dd className="mt-0.5 text-xl font-bold tabular-nums text-gray-900 dark:text-white">
                {activeStreak}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 dark:text-neutral-400">Games played</dt>
              <dd className="mt-0.5 text-xl font-bold tabular-nums text-gray-900 dark:text-white">
                {totalGamesPlayed}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 dark:text-neutral-400">Game XP earned</dt>
              <dd className="mt-0.5 text-xl font-bold tabular-nums text-gray-900 dark:text-white">
                {totalGameXpEarned.toLocaleString()}
              </dd>
            </div>
          </dl>

          {/* Games */}
          <section aria-label="Games" className="mt-8">
            <h2 className="pb-1 text-xs font-semibold text-gray-500 dark:text-neutral-400">
              Play and earn
            </h2>
            <ul className="divide-y divide-gray-100 dark:divide-neutral-800">
              {games.map((game) => (
                <li key={game.id}>
                  <Link
                    href={game.href}
                    className="flex items-center gap-4 py-3.5 hover:bg-gray-50 dark:hover:bg-neutral-900"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {game.title}
                        {game.badge && (
                          <span className="ml-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                            {game.badge}
                          </span>
                        )}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-gray-500 dark:text-neutral-400">
                        {game.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {game.xpReward}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-400">
                        {game.difficulty}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Leaderboard */}
          <section aria-label="Top players" className="mt-8">
            <h2 className="pb-1 text-xs font-semibold text-gray-500 dark:text-neutral-400">
              Top players
            </h2>
            {isLoading ? (
              <p className="py-6 text-sm text-gray-500">Loading...</p>
            ) : leaderboard.length === 0 ? (
              <p className="py-6 text-sm text-gray-500 dark:text-neutral-400">
                Be the first to earn XP.
              </p>
            ) : (
              <ol className="divide-y divide-gray-100 dark:divide-neutral-800">
                {leaderboard.map((entry, index) => (
                  <li key={entry.user.id} className="flex items-center gap-4 py-3">
                    <span className="w-5 text-sm tabular-nums text-gray-500 dark:text-neutral-400">
                      {index + 1}
                    </span>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700 dark:bg-neutral-800 dark:text-neutral-200">
                      {entry.user.name?.charAt(0).toUpperCase() ||
                        entry.user.username?.charAt(0).toUpperCase() ||
                        '?'}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                        {entry.user.name || entry.user.username || 'Anonymous'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-400">
                        {entry.gamesPlayed} games played
                      </p>
                    </div>
                    <p className="text-sm font-semibold tabular-nums text-gray-900 dark:text-white">
                      {entry.xp.toLocaleString()} XP
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </section>

          {/* How it works */}
          <section aria-label="How XP works" className="mt-8">
            <h2 className="pb-1 text-xs font-semibold text-gray-500 dark:text-neutral-400">
              How XP balance works
            </h2>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-neutral-300">
              <li>Play daily games to add spendable XP to your balance.</li>
              <li>Your balance is what the store and streak protection spend.</li>
              <li>Profile levels use separate Level XP tied to your overall activity.</li>
              <li>
                Leaderboards rank game XP earned, so you can compete without affecting profile
                level pacing.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </ProtectedRoute>
  );
}
