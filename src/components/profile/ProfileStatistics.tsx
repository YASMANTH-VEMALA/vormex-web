'use client';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { UserPlus, Users } from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';

interface ProfileStatisticsProps {
  StatItem: ({
    value,
    label,
    isClickable,
    onClick,
  }: import('@/components/profile/ProfileHeader.types').StatItemProps) => React.JSX.Element;
  formatNumber: (num: number) => string;
  isFollowedBy: boolean;
  isOwner: boolean;
  mutualInfo: import('@/lib/api/follow').MutualInfo | null;
  mutualSectionRef: React.RefObject<HTMLDivElement | null>;
  router: import('next/dist/shared/lib/app-router-context.shared-runtime').AppRouterInstance;
  stats: import('@/types/profile').ProfileStats;
  user: import('@/types/profile').ProfileUser;
}

export function ProfileStatistics({
  StatItem,
  formatNumber,
  isFollowedBy,
  isOwner,
  mutualInfo,
  mutualSectionRef,
  router,
  stats,
  user,
}: ProfileStatisticsProps) {
  return (
    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 dark:border-neutral-800">
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 md:gap-8">
        <StatItem
          value={formatNumber(stats.connectionsCount)}
          label="connections"
          isClickable
          onClick={() => router.push(`/profile/${user.id}/network?tab=connections`)}
        />
        <StatItem
          value={formatNumber(stats.followersCount)}
          label="followers"
          isClickable
          onClick={() => router.push(`/profile/${user.id}/network?tab=followers`)}
        />
        <StatItem value={formatNumber(stats.totalPosts)} label="posts" />
        <StatItem value={formatNumber(stats.totalArticles)} label="articles" />
        <StatItem value={formatNumber(stats.totalLikesReceived)} label="likes" />
        {!isOwner && stats.replyRate !== undefined && (
          <StatItem value={`${stats.replyRate}%`} label="reply rate" />
        )}
      </div>

      {/* Gamification - Subtle, Professional */}
      <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
        {/* Level indicator */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400">
              {stats.level}
            </span>
          </div>
          <div className="text-xs sm:text-sm">
            <span className="text-gray-500 dark:text-neutral-400">Lvl</span>
            <span className="text-gray-400 dark:text-neutral-500 mx-0.5 sm:mx-1">·</span>
            <span className="text-gray-700 dark:text-neutral-300 font-medium">
              {stats.xp.toLocaleString()} Level XP
            </span>
          </div>
        </div>

        {/* Streak indicator */}
        {stats.currentStreak > 0 && (
          <Link
            href="/streaks"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm hover:opacity-80 transition-opacity"
          >
            <span className="text-orange-500">🔥</span>
            <span className="text-gray-700 dark:text-neutral-300 font-medium">
              {stats.currentStreak} day streak
            </span>
          </Link>
        )}

        {/* Active days */}
        <div className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
          {stats.totalActiveDays} active days
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
                  MUTUAL CONNECTIONS & FOLLOWERS - LinkedIn style
              ═══════════════════════════════════════════════════════════════════════ */}
      {!isOwner && <div ref={mutualSectionRef} className="h-px" aria-hidden="true" />}
      {!isOwner &&
        mutualInfo &&
        (mutualInfo.mutualConnectionsCount > 0 || mutualInfo.mutualFollowersCount > 0) && (
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-neutral-800">
            {/* Mutual Connections */}
            {mutualInfo.mutualConnectionsCount > 0 && (
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-gray-400 dark:text-neutral-500" />
                <div className="flex items-center gap-1">
                  {/* Avatar stack */}
                  <div className="flex -space-x-2 mr-2">
                    {mutualInfo.mutualConnections.slice(0, 3).map((connection, idx) => (
                      <div
                        key={connection.id}
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-neutral-900 overflow-hidden bg-gray-200 dark:bg-neutral-700"
                        style={{ zIndex: 3 - idx }}
                      >
                        <UserAvatar
                          imageSrc={connection.profileImage}
                          name={connection.name}
                          className="h-full w-full rounded-full text-xs font-medium"
                          fallbackClassName="text-xs"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-neutral-400">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {mutualInfo.mutualConnections[0]?.name}
                    </span>
                    {mutualInfo.mutualConnectionsCount > 1 && (
                      <>
                        {' '}
                        and{' '}
                        <span className="font-medium text-gray-900 dark:text-white">
                          {mutualInfo.mutualConnectionsCount - 1} other
                          {mutualInfo.mutualConnectionsCount > 2 ? 's' : ''}
                        </span>
                      </>
                    )}{' '}
                    mutual connection{mutualInfo.mutualConnectionsCount !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            )}

            {/* Mutual Followers */}
            {mutualInfo.mutualFollowersCount > 0 && (
              <div
                className={`flex items-center gap-3 ${mutualInfo.mutualConnectionsCount > 0 ? 'mt-3' : ''}`}
              >
                <UserPlus className="w-4 h-4 text-gray-400 dark:text-neutral-500" />
                <div className="flex items-center gap-1">
                  {/* Avatar stack */}
                  <div className="flex -space-x-2 mr-2">
                    {mutualInfo.mutualFollowers.slice(0, 3).map((follower, idx) => (
                      <div
                        key={follower.id}
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-neutral-900 overflow-hidden bg-gray-200 dark:bg-neutral-700"
                        style={{ zIndex: 3 - idx }}
                      >
                        <UserAvatar
                          imageSrc={follower.profileImage}
                          name={follower.name}
                          className="h-full w-full rounded-full text-xs font-medium"
                          fallbackClassName="text-xs"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-neutral-400">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {mutualInfo.mutualFollowers[0]?.name}
                    </span>
                    {mutualInfo.mutualFollowersCount > 1 && (
                      <>
                        {' '}
                        and{' '}
                        <span className="font-medium text-gray-900 dark:text-white">
                          {mutualInfo.mutualFollowersCount - 1} other
                          {mutualInfo.mutualFollowersCount > 2 ? 's' : ''}
                        </span>
                      </>
                    )}{' '}
                    also follow{mutualInfo.mutualFollowersCount === 1 ? 's' : ''} this user
                  </span>
                </div>
              </div>
            )}

            {/* "Follows you" indicator */}
            {isFollowedBy && (
              <div
                className={`flex items-center gap-2 ${mutualInfo.mutualConnectionsCount > 0 || mutualInfo.mutualFollowersCount > 0 ? 'mt-3' : ''}`}
              >
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                  Follows you
                </span>
              </div>
            )}
          </div>
        )}

      {/* "Follows you" indicator (when no mutual info) */}
      {!isOwner &&
        isFollowedBy &&
        (!mutualInfo ||
          (mutualInfo.mutualConnectionsCount === 0 && mutualInfo.mutualFollowersCount === 0)) && (
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-neutral-800">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
              Follows you
            </span>
          </div>
        )}
    </div>
  );
}
