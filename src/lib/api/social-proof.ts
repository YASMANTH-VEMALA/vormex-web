import apiClient from './client';
import { getJson, type QueryParams } from './request';

async function readSocialProof<T>(path: string, params?: QueryParams): Promise<T> {
  const response = await getJson<{ data: T }>(path, params);
  return response.data;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SOCIAL PROOF & FOMO TYPES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface LiveStats {
  activeNow: number;
  activeLastHour: number;
  connectionsToday: number;
  newUsersToday: number;
  postsToday: number;
  profileBrowsersNow: number;
  locationLabel: string;
  scope: string;
  timestamp: string;
}

export interface ProfileViewStats {
  viewsLastHour: number;
  viewsToday: number;
  viewsThisWeek: number;
  trendPercent: number;
  trendDirection: 'up' | 'down';
  totalViews: number;
  recentViewers: ProfileViewer[];
  viewerCount: number;
}

export interface ProfileViewer {
  id: string;
  viewedAt: string;
  source: string | null;
  viewer: {
    id: string;
    name: string;
    username: string;
    profileImage: string | null;
    college: string | null;
    headline: string | null;
  };
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  name: string;
  profileImage: string | null;
  college: string | null;
  currentCity: string | null;
  score: number;
  connectionCount: number;
  postCount: number;
  commentCount: number;
}

export interface LeaderboardResponse {
  period: string;
  scope: string;
  entries: LeaderboardEntry[];
  updatedAt: string;
  userRank: {
    rank: number;
    score: number;
    inTopList: boolean;
  } | null;
}

export interface GroupStats {
  groupId: string;
  groupName: string;
  totalMembers: number;
  recentJoins24h: number;
  recentJoinsWeek: number;
  onlineNow: number;
  mutualConnections: number;
  growthVelocity: number;
  isTrending: boolean;
}

export interface EventStats {
  eventId: string;
  rsvpCount: number;
  rsvpsLastHour: number;
  viewsToday: number;
  viewsLastHour: number;
  totalViews: number;
  mutualConnectionsAttending: number;
}

export interface ActivityFeedItem {
  id: string;
  type: string;
  label: string;
  timestamp: string;
  secondsAgo: number;
}

export interface TrendingItem {
  id: string;
  itemType: string;
  itemId: string;
  score: number;
  velocity: number;
  reason: string | null;
  city: string | null;
  college: string | null;
  isTrending: boolean;
  trendingAt: string;
}

export interface OnboardingStats {
  totalUsers: number;
  totalColleges: number;
  totalConnections: number;
  activeToday: number;
  scope: string;
  updatedAt: string;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// API CALLS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/** Get live activity stats (Bandwagon: "23 students networking now") */
export const getSocialProofLiveStats = async (
  city?: string,
  college?: string
): Promise<LiveStats> => {
  return readSocialProof<LiveStats>('/social-proof/live-stats', {
    ...(city && { city }),
    ...(college && { college }),
  });
};

/** Get profile view analytics ("47 views this week +32%") */
export const getProfileViewStats = async (userId: string): Promise<ProfileViewStats> => {
  return readSocialProof<ProfileViewStats>(`/social-proof/profile-views/${userId}`);
};

/** Get leaderboard ("Top 10 Most Connected Students") */
export const getSocialProofLeaderboard = async (
  period: 'daily' | 'weekly' | 'all_time' = 'weekly',
  scope: string = 'global',
  limit: number = 10
): Promise<LeaderboardResponse> => {
  return readSocialProof<LeaderboardResponse>('/social-proof/leaderboard', {
    period,
    scope,
    limit,
  });
};

/** Get group/circle stats ("48 joined in last 24 hours") */
export const getGroupSocialStats = async (groupId: string): Promise<GroupStats> => {
  return readSocialProof<GroupStats>(`/social-proof/group-stats/${groupId}`);
};

/** Get event stats ("89 going • 23 RSVPed in last hour") */
export const getEventSocialStats = async (eventId: string): Promise<EventStats> => {
  return readSocialProof<EventStats>(`/social-proof/event-stats/${eventId}`);
};

/** Track an event page view */
export const trackEventView = async (eventId: string): Promise<void> => {
  await apiClient.post('/social-proof/track-event-view', { eventId });
};

/** Get real-time activity feed */
export const getActivityFeed = async (
  limit: number = 20,
  minutes: number = 10
): Promise<ActivityFeedItem[]> => {
  return readSocialProof<ActivityFeedItem[]>('/social-proof/activity-feed', { limit, minutes });
};

/** Get trending items */
export const getTrendingItems = async (
  type?: string,
  city?: string,
  limit: number = 10
): Promise<TrendingItem[]> => {
  return readSocialProof<TrendingItem[]>('/social-proof/trending', {
    ...(type && { type }),
    ...(city && { city }),
    limit,
  });
};

/** Get onboarding social proof stats ("12,453 students networking") */
export const getOnboardingStats = async (college?: string): Promise<OnboardingStats> => {
  return readSocialProof<OnboardingStats>('/social-proof/onboarding-stats', {
    ...(college && { college }),
  });
};

/** Send heartbeat to update online presence */
export const sendHeartbeat = async (currentPage?: string): Promise<void> => {
  await apiClient.post('/social-proof/heartbeat', { currentPage });
};

/** Record a social activity event */
export const recordSocialActivity = async (
  activityType: string,
  metadata?: Record<string, unknown>
): Promise<void> => {
  await apiClient.post('/social-proof/record-activity', { activityType, metadata });
};
