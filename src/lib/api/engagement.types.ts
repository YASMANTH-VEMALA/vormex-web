export interface StreakData {
  connectionStreak: number;
  longestConnectionStreak: number;
  loginStreak: number;
  longestLoginStreak: number;
  postingStreak: number;
  longestPostingStreak: number;
  messagingStreak: number;
  longestMessagingStreak: number;
  overallBestStreak: number;
  weeklyConnectionsMade: number;
  weeklyConnectionsGoal: number;
  streakFreezes: number;
  streakShieldActive: boolean;
  totalFreezesUsed: number;
  isAtRisk: Record<string, boolean>;
  engagementScore: number;
  showOnProfile: boolean;
}

export interface PublicStreakData {
  visible: boolean;
  bestCurrentStreak: number | null;
  overallBestStreak: number | null;
  streaks: {
    connection: { current: number; longest: number };
    login: { current: number; longest: number };
    posting: { current: number; longest: number };
    messaging: { current: number; longest: number };
  } | null;
  engagementScore: number | null;
}

export interface StreakHistoryItem {
  id: string;
  streakId: string;
  userId: string;
  streakType: string;
  event: string;
  streakBefore: number;
  streakAfter: number;
  milestoneDay: number | null;
  badgeSlug: string | null;
  xpEarned: number;
  createdAt: string;
}

export type StreakType = 'connection' | 'login' | 'posting' | 'messaging';

export interface StreakLeaderboardEntry {
  rank: number;
  user: {
    id: string;
    username: string;
    name: string;
    profileImage: string | null;
    college: string | null;
    bio: string | null;
  };
  currentStreak: number;
  longestStreak: number;
}

export interface StreakLeaderboardResponse {
  streakType: string;
  leaderboard: StreakLeaderboardEntry[];
  updatedAt: string | null;
}

export interface StreakFreezeResponse {
  message: string;
  freezesRemaining: number;
  xpSpent: number;
}

export interface StreakShieldResponse {
  message: string;
  shieldActive: boolean;
}

export interface StreakVisibilityResponse {
  message: string;
  showOnProfile: boolean;
}

export interface ConnectionReward {
  animationType: string;
  showConfetti: boolean;
  celebrationMessage: string;
  receiverReplyRate: number;
  replyRateMessage: string;
}

export interface DailyMatch {
  id: string;
  username: string;
  name: string;
  profileImage: string | null;
  headline: string | null;
  college: string | null;
  /**
   * Optional: the daily-matches and hidden-gem endpoints do not include this
   * field in their response mappings at all, so it is undefined in practice.
   * It was previously typed as a required `string[]`, which let callers write
   * `match.interests.slice(...)` and crash at runtime.
   */
  interests?: string[];
  isOnline: boolean;
  /**
   * Optional, and currently NOT a measured value — the backend fills it with
   * `Math.random()`. Do not build new UI on it. See engagement.controller.ts.
   */
  replyRate?: number;
  verified?: boolean;
  isVerified?: boolean;
  profileBadgeStyle?: string | null;
  isPremium?: boolean;
}

export interface DailyMatchesResponse {
  matches: DailyMatch[];
  matchCount: number;
  surpriseMessage?: string;
}

export type HiddenGemResponse = {
  match: DailyMatch;
  message: string;
} | null;

export interface LiveActivity {
  activeUsersNow: number;
  connectionsToday: number;
  newUsersToday: number;
  locationLabel: string;
}

export interface LeaderboardEntry {
  id: string;
  username: string;
  name: string;
  profileImage: string | null;
  college: string | null;
  connectionCount: number;
}

export interface LeaderboardResponse {
  period: string;
  leaderboard: LeaderboardEntry[];
  updatedAt: string;
}

export interface ProgressNudge {
  type: string;
  message: string;
  progress: number;
  target: number;
  icon: string;
}

export interface WeeklyGoals {
  id: string;
  weekStart: string;
  connectionsTarget: number;
  postsTarget: number;
  messagesTarget: number;
  connectionsMade: number;
  postsMade: number;
  messagesSent: number;
  isCompleted: boolean;
  xpEarned: number;
  connectionsProgress: number;
  postsProgress: number;
  messagesProgress: number;
}

export interface ConnectionLimit {
  canSend: boolean;
  remaining: number;
  limit: number;
  resetsAt: string;
}

export interface SessionSummary {
  connectionsAccepted: number;
  newPosts: number;
  messagesCount: number;
  message: string;
  emoji: string;
}

export interface CelebrationData {
  otherUser: {
    name: string;
    profileImage: string | null;
    username: string;
  };
  mutualConnections: number;
  celebrationMessage: string;
  showConfetti: boolean;
}

export interface EngagementDashboard {
  streaks: StreakData;
  weeklyGoals: WeeklyGoals;
  nudges: ProgressNudge[];
  connectionLimit: ConnectionLimit;
  liveActivity: LiveActivity;
  trending: {
    isActive: boolean;
    message?: string;
    viewCount?: number;
  };
}

export type WrappedApiResponse<T> = T | { data?: T } | null | undefined;
