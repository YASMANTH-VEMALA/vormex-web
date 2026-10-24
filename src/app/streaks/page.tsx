'use client';
import { StreaksDashboardView } from './StreaksDashboardView';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import {
  invalidateGamificationQueries,
  useLiveStreakHistory,
  useLiveStreaks,
  useLiveWalletXpBalance,
} from '@/hooks/useLiveGamification';
import {
  hasAtRiskStreak,
  purchaseStreakFreeze,
  selectBestCurrentStreak,
  toggleStreakShield,
  toggleStreakVisibility,
} from '@/lib/api/engagement';
import { queryKeys } from '@/lib/queryKeys';
import { useQueryClient } from '@tanstack/react-query';
import { FileText, Flame, LogIn, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const STREAK_TYPES = [
  {
    key: 'connection' as const,
    label: 'Networking',
    icon: Flame,
    color: 'orange',
    currentKey: 'connectionStreak' as const,
    longestKey: 'longestConnectionStreak' as const,
    description: 'Connect with someone daily',
    bgLight: 'bg-orange-50',
    bgDark: 'dark:bg-orange-900/20',
    textColor: 'text-orange-500',
    ringColor: 'ring-orange-500/30',
  },
  {
    key: 'login' as const,
    label: 'Login',
    icon: LogIn,
    color: 'blue',
    currentKey: 'loginStreak' as const,
    longestKey: 'longestLoginStreak' as const,
    description: 'Log in every day',
    bgLight: 'bg-blue-50',
    bgDark: 'dark:bg-blue-900/20',
    textColor: 'text-blue-500',
    ringColor: 'ring-blue-500/30',
  },
  {
    key: 'posting' as const,
    label: 'Posting',
    icon: FileText,
    color: 'green',
    currentKey: 'postingStreak' as const,
    longestKey: 'longestPostingStreak' as const,
    description: 'Share a post every day',
    bgLight: 'bg-green-50',
    bgDark: 'dark:bg-green-900/20',
    textColor: 'text-green-500',
    ringColor: 'ring-green-500/30',
  },
  {
    key: 'messaging' as const,
    label: 'Messaging',
    icon: MessageCircle,
    color: 'purple',
    currentKey: 'messagingStreak' as const,
    longestKey: 'longestMessagingStreak' as const,
    description: 'Send a message every day',
    bgLight: 'bg-purple-50',
    bgDark: 'dark:bg-purple-900/20',
    textColor: 'text-purple-500',
    ringColor: 'ring-purple-500/30',
  },
];

function getHistoryEventEmoji(event: string): string {
  switch (event) {
    case 'increment':
      return '🔥';
    case 'milestone':
      return '🏆';
    case 'break':
      return '💔';
    case 'freeze_used':
      return '❄️';
    case 'shield_saved':
      return '🛡️';
    default:
      return '📌';
  }
}

function getHistoryEventLabel(event: string): string {
  switch (event) {
    case 'increment':
      return 'Streak extended';
    case 'milestone':
      return 'Milestone reached!';
    case 'break':
      return 'Streak broken';
    case 'freeze_used':
      return 'Freeze used';
    case 'shield_saved':
      return 'Shield saved streak';
    default:
      return event;
  }
}

function getStreakTypeLabel(type: string): string {
  switch (type) {
    case 'connection':
      return 'Networking';
    case 'login':
      return 'Login';
    case 'posting':
      return 'Posting';
    case 'messaging':
      return 'Messaging';
    default:
      return type;
  }
}

export default function StreaksPage() {
  const queryClient = useQueryClient();
  const [freezeLoading, setFreezeLoading] = useState(false);
  const [shieldLoading, setShieldLoading] = useState(false);
  const [visibilityLoading, setVisibilityLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const { data: streak, isLoading: streakLoading } = useLiveStreaks();
  const { data: history = [] } = useLiveStreakHistory(15);
  const { data: xpBalance = 0 } = useLiveWalletXpBalance();

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handlePurchaseFreeze = async () => {
    if (freezeLoading) return;
    setFreezeLoading(true);
    try {
      const result = await purchaseStreakFreeze();
      showToast(result.message, 'success');
      queryClient.setQueryData(queryKeys.streaks(), (prev: typeof streak) =>
        prev ? { ...prev, streakFreezes: result.freezesRemaining } : prev
      );
      await invalidateGamificationQueries(queryClient);
    } catch (error: unknown) {
      const responseData = (error as { response?: { data?: { message?: string; error?: string } } })
        ?.response?.data;
      const msg = responseData?.message || responseData?.error || 'Failed to purchase freeze';
      showToast(msg, 'error');
    } finally {
      setFreezeLoading(false);
    }
  };

  const handleToggleShield = async () => {
    if (shieldLoading) return;
    setShieldLoading(true);
    try {
      const result = await toggleStreakShield();
      showToast(result.message, 'success');
      queryClient.setQueryData(queryKeys.streaks(), (prev: typeof streak) =>
        prev ? { ...prev, streakShieldActive: result.shieldActive } : prev
      );
      await invalidateGamificationQueries(queryClient);
    } catch (error: unknown) {
      const msg =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        'Failed to toggle shield';
      showToast(msg, 'error');
    } finally {
      setShieldLoading(false);
    }
  };

  const handleToggleVisibility = async () => {
    if (visibilityLoading) return;
    setVisibilityLoading(true);
    try {
      const result = await toggleStreakVisibility();
      showToast(result.message, 'success');
      queryClient.setQueryData(queryKeys.streaks(), (prev: typeof streak) =>
        prev ? { ...prev, showOnProfile: result.showOnProfile } : prev
      );
      await invalidateGamificationQueries(queryClient);
    } catch (error: unknown) {
      const msg =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        'Failed to toggle visibility';
      showToast(msg, 'error');
    } finally {
      setVisibilityLoading(false);
    }
  };

  const anyAtRisk = hasAtRiskStreak(streak);
  const bestCurrentStreak = streak ? selectBestCurrentStreak(streak) : 0;

  if (streakLoading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-950">
          <div className="max-w-lg mx-auto px-4 py-8">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-neutral-800 rounded w-1/3" />
              <div className="h-40 bg-gray-200 dark:bg-neutral-800 rounded-xl" />
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-28 bg-gray-200 dark:bg-neutral-800 rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  if (!streak) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 flex items-center justify-center">
          <p className="text-gray-500 dark:text-neutral-400">Failed to load streak data.</p>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <StreaksDashboardView
      STREAK_TYPES={STREAK_TYPES}
      anyAtRisk={anyAtRisk}
      bestCurrentStreak={bestCurrentStreak}
      freezeLoading={freezeLoading}
      getHistoryEventEmoji={getHistoryEventEmoji}
      getHistoryEventLabel={getHistoryEventLabel}
      getStreakTypeLabel={getStreakTypeLabel}
      handlePurchaseFreeze={handlePurchaseFreeze}
      handleToggleShield={handleToggleShield}
      handleToggleVisibility={handleToggleVisibility}
      history={history}
      setShowHistory={setShowHistory}
      shieldLoading={shieldLoading}
      showHistory={showHistory}
      streak={streak}
      toast={toast}
      visibilityLoading={visibilityLoading}
      xpBalance={xpBalance}
    />
  );
}
