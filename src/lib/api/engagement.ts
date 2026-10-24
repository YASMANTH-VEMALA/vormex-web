import apiClient from './client';
import type {
  CelebrationData,
  ConnectionLimit,
  DailyMatchesResponse,
  EngagementDashboard,
  HiddenGemResponse,
  LeaderboardResponse,
  ProgressNudge,
  PublicStreakData,
  SessionSummary,
  StreakData,
  StreakFreezeResponse,
  StreakHistoryItem,
  StreakLeaderboardResponse,
  StreakShieldResponse,
  StreakType,
  StreakVisibilityResponse,
  WeeklyGoals,
  WrappedApiResponse,
} from './engagement.types';
export type {
  CelebrationData,
  ConnectionLimit,
  ConnectionReward,
  DailyMatch,
  DailyMatchesResponse,
  EngagementDashboard,
  HiddenGemResponse,
  LeaderboardEntry,
  LeaderboardResponse,
  LiveActivity,
  ProgressNudge,
  PublicStreakData,
  SessionSummary,
  StreakData,
  StreakFreezeResponse,
  StreakHistoryItem,
  StreakLeaderboardEntry,
  StreakLeaderboardResponse,
  StreakShieldResponse,
  StreakType,
  StreakVisibilityResponse,
  WeeklyGoals,
  WrappedApiResponse,
} from './engagement.types';

export function selectBestCurrentStreak(streak: {
  connectionStreak: number;
  loginStreak: number;
  postingStreak: number;
  messagingStreak: number;
}): number {
  return Math.max(
    streak.connectionStreak,
    streak.loginStreak,
    streak.postingStreak,
    streak.messagingStreak
  );
}

export function hasAtRiskStreak(
  streak: { isAtRisk?: Record<string, boolean> | null } | null | undefined
): boolean {
  if (!streak?.isAtRisk) return false;
  return Object.values(streak.isAtRisk).some(Boolean);
}

function unwrapApiData<T>(response: WrappedApiResponse<T>): T {
  if (
    response &&
    typeof response === 'object' &&
    'data' in response &&
    (response as { data?: T }).data !== undefined
  ) {
    return (response as { data: T }).data;
  }

  return response as T;
}

function getNumber(value: unknown, fallback: number = 0): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function getBoolean(value: unknown, fallback: boolean = false): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

function normalizeStreakData(raw: Partial<StreakData> | null | undefined): StreakData {
  return {
    connectionStreak: getNumber(raw?.connectionStreak),
    longestConnectionStreak: getNumber(raw?.longestConnectionStreak ?? raw?.connectionStreak),
    loginStreak: getNumber(raw?.loginStreak),
    longestLoginStreak: getNumber(raw?.longestLoginStreak ?? raw?.loginStreak),
    postingStreak: getNumber(raw?.postingStreak),
    longestPostingStreak: getNumber(raw?.longestPostingStreak ?? raw?.postingStreak),
    messagingStreak: getNumber(raw?.messagingStreak),
    longestMessagingStreak: getNumber(raw?.longestMessagingStreak ?? raw?.messagingStreak),
    overallBestStreak: getNumber(raw?.overallBestStreak),
    weeklyConnectionsMade: getNumber(raw?.weeklyConnectionsMade),
    weeklyConnectionsGoal: getNumber(raw?.weeklyConnectionsGoal),
    streakFreezes: getNumber(raw?.streakFreezes),
    streakShieldActive: getBoolean(raw?.streakShieldActive),
    totalFreezesUsed: getNumber(raw?.totalFreezesUsed),
    isAtRisk: raw?.isAtRisk ?? {},
    engagementScore: getNumber(raw?.engagementScore),
    showOnProfile: getBoolean(raw?.showOnProfile, true),
  };
}

function normalizePublicStreakData(
  raw: Record<string, unknown> | null | undefined
): PublicStreakData {
  const streaks = {
    connection: {
      current: getNumber(raw?.connectionStreak),
      longest: getNumber(raw?.longestConnectionStreak ?? raw?.connectionStreak),
    },
    login: {
      current: getNumber(raw?.loginStreak),
      longest: getNumber(raw?.longestLoginStreak ?? raw?.loginStreak),
    },
    posting: {
      current: getNumber(raw?.postingStreak),
      longest: getNumber(raw?.longestPostingStreak ?? raw?.postingStreak),
    },
    messaging: {
      current: getNumber(raw?.messagingStreak),
      longest: getNumber(raw?.longestMessagingStreak ?? raw?.messagingStreak),
    },
  };

  const bestCurrentStreak = Math.max(
    streaks.connection.current,
    streaks.login.current,
    streaks.posting.current,
    streaks.messaging.current
  );
  const overallBestStreak = Math.max(
    streaks.connection.longest,
    streaks.login.longest,
    streaks.posting.longest,
    streaks.messaging.longest
  );

  return {
    visible: getBoolean(raw?.visible ?? raw?.showOnProfile, true),
    bestCurrentStreak: bestCurrentStreak > 0 ? bestCurrentStreak : null,
    overallBestStreak: overallBestStreak > 0 ? overallBestStreak : null,
    streaks,
    engagementScore: typeof raw?.engagementScore === 'number' ? raw.engagementScore : null,
  };
}

function normalizeStreakHistoryItem(item: Record<string, unknown>): StreakHistoryItem {
  if ('event' in item && 'streakAfter' in item && 'createdAt' in item) {
    return {
      id: String(item.id ?? item.streakId ?? item.createdAt ?? 'history-item'),
      streakId: String(item.streakId ?? item.id ?? ''),
      userId: String(item.userId ?? ''),
      streakType: String(item.streakType ?? 'login'),
      event: String(item.event ?? 'increment'),
      streakBefore: getNumber(item.streakBefore),
      streakAfter: getNumber(item.streakAfter),
      milestoneDay: typeof item.milestoneDay === 'number' ? item.milestoneDay : null,
      badgeSlug: typeof item.badgeSlug === 'string' ? item.badgeSlug : null,
      xpEarned: getNumber(item.xpEarned),
      createdAt: String(item.createdAt),
    };
  }

  const streakAfter = getNumber(item.streakCount);
  const event = getBoolean(item.usedFreeze)
    ? 'freeze_used'
    : getBoolean(item.wasAtRisk)
      ? 'shield_saved'
      : 'increment';
  const rawDate = typeof item.date === 'string' ? item.date : null;
  const createdAt = rawDate
    ? new Date(`${rawDate}T00:00:00.000Z`).toISOString()
    : new Date().toISOString();

  return {
    id: String(item.id ?? `${item.type ?? 'streak'}-${rawDate ?? 'unknown'}`),
    streakId: String(item.id ?? ''),
    userId: '',
    streakType: String(item.type ?? item.streakType ?? 'login'),
    event,
    streakBefore: Math.max(streakAfter - 1, 0),
    streakAfter,
    milestoneDay: null,
    badgeSlug: null,
    xpEarned: getNumber(item.xpEarned),
    createdAt,
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// API CALLS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const getEngagementDashboard = async (): Promise<EngagementDashboard> => {
  const res = await apiClient.get('/engagement/dashboard');
  return unwrapApiData(res);
};

export const getStreaks = async (): Promise<StreakData> => {
  const res = await apiClient.get('/engagement/streaks');
  return normalizeStreakData(unwrapApiData(res));
};

export const recordLogin = async (): Promise<void> => {
  await apiClient.post('/engagement/login');
};

export const getDailyMatches = async (): Promise<DailyMatchesResponse> => {
  const res = await apiClient.get('/engagement/daily-matches');
  return unwrapApiData(res);
};

export const getHiddenGem = async (): Promise<HiddenGemResponse> => {
  const res = await apiClient.get('/engagement/hidden-gem');
  return unwrapApiData(res);
};

export const getLeaderboard = async (
  period: 'weekly' | 'monthly' = 'weekly',
  limit: number = 10
): Promise<LeaderboardResponse> => {
  const res = await apiClient.get('/engagement/leaderboard', {
    params: { period, limit },
  });
  // Backend returns { data: { period, leaderboard, updatedAt } }; apiClient returns response.data
  const payload = (res as { data?: LeaderboardResponse }).data ?? res;
  return payload as LeaderboardResponse;
};

export const getNudges = async (): Promise<ProgressNudge[]> => {
  const res = await apiClient.get('/engagement/nudges');
  return unwrapApiData(res);
};

export const getWeeklyGoals = async (): Promise<WeeklyGoals> => {
  const res = await apiClient.get('/engagement/weekly-goals');
  return unwrapApiData(res);
};

export const getConnectionLimit = async (): Promise<ConnectionLimit> => {
  const res = await apiClient.get('/engagement/connection-limit');
  return unwrapApiData(res);
};

export const getSessionSummary = async (): Promise<SessionSummary> => {
  const res = await apiClient.get('/engagement/session-summary');
  return unwrapApiData(res);
};

export const getConnectionCelebration = async (
  connectionId: string
): Promise<CelebrationData | null> => {
  const res = await apiClient.get(`/engagement/celebration/${connectionId}`);
  return unwrapApiData(res);
};

export const getRecentJoins = async (
  groupId?: string
): Promise<{ count: number; label: string }> => {
  const res = await apiClient.get('/engagement/recent-joins', {
    params: groupId ? { groupId } : {},
  });
  return unwrapApiData(res);
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// STREAK API CALLS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const getPublicStreaks = async (userId: string): Promise<PublicStreakData> => {
  const res = await apiClient.get(`/engagement/streaks/${userId}`);
  return normalizePublicStreakData(unwrapApiData(res) as Record<string, unknown>);
};

export const purchaseStreakFreeze = async (): Promise<StreakFreezeResponse> => {
  const res = await apiClient.post('/engagement/streaks/freeze');
  const payload = unwrapApiData(res) as Record<string, unknown>;
  return {
    message: typeof payload.message === 'string' ? payload.message : 'Streak freeze purchased!',
    freezesRemaining: getNumber(payload.freezesRemaining ?? payload.streakFreezes),
    xpSpent: getNumber(payload.xpSpent ?? payload.xpCost),
  };
};

export const toggleStreakShield = async (): Promise<StreakShieldResponse> => {
  const res = await apiClient.post('/engagement/streaks/shield');
  const payload = unwrapApiData(res) as Record<string, unknown>;
  return {
    message: typeof payload.message === 'string' ? payload.message : 'Streak shield updated!',
    shieldActive: getBoolean(payload.shieldActive ?? payload.streakShieldActive),
  };
};

export const getStreakHistory = async (limit: number = 20): Promise<StreakHistoryItem[]> => {
  const res = await apiClient.get('/engagement/streaks/history', {
    params: { limit },
  });
  const payload = unwrapApiData<unknown[]>(res);
  if (!Array.isArray(payload)) {
    return [];
  }

  return payload.map((item) => normalizeStreakHistoryItem((item ?? {}) as Record<string, unknown>));
};

export const getStreakLeaderboard = async (
  type: StreakType = 'connection',
  limit: number = 20
): Promise<StreakLeaderboardResponse> => {
  const res = await apiClient.get('/engagement/streaks/leaderboard', {
    params: { type, limit },
  });
  const payload = unwrapApiData(res) as Partial<StreakLeaderboardResponse> & {
    type?: string;
  };

  return {
    streakType: payload.streakType ?? payload.type ?? type,
    leaderboard: Array.isArray(payload.leaderboard) ? payload.leaderboard : [],
    updatedAt: payload.updatedAt ?? null,
  };
};

export const toggleStreakVisibility = async (): Promise<StreakVisibilityResponse> => {
  const res = await apiClient.post('/engagement/streaks/visibility');
  const payload = unwrapApiData(res) as Record<string, unknown>;
  return {
    message: typeof payload.message === 'string' ? payload.message : 'Streak visibility updated!',
    showOnProfile: getBoolean(payload.showOnProfile, true),
  };
};
