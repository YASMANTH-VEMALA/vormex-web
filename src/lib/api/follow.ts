import { deleteJson, getJson, postJson } from './request';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TYPES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface FollowUser {
  id: string;
  username: string;
  name: string;
  profileImage: string | null;
  headline: string | null;
  college: string | null;
  isOnline: boolean;
}

export interface FollowWithUser {
  id: string;
  createdAt: string;
  user: FollowUser;
}

export interface FollowersResponse {
  followers: FollowWithUser[];
  total: number;
  page: number;
  hasMore: boolean;
}

export interface FollowingResponse {
  following: FollowWithUser[];
  total: number;
  page: number;
  hasMore: boolean;
}

export interface FollowStatusResponse {
  isFollowing: boolean;
  isFollowedBy: boolean;
}

export interface MutualInfo {
  mutualConnections: FollowUser[];
  mutualFollowers: FollowUser[];
  mutualConnectionsCount: number;
  mutualFollowersCount: number;
}

export interface FollowCountsResponse {
  followersCount: number;
  followingCount: number;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// API FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Follow a user (instant, one-way)
 */
export interface FollowRecord {
  id: string;
  followerId?: string;
  followingId?: string;
  createdAt?: string;
  [key: string]: unknown;
}

export async function followUser(
  userId: string
): Promise<{ message: string; follow: FollowRecord }> {
  return postJson<{ message: string; follow: FollowRecord }>(`/follow/${userId}`);
}

/**
 * Unfollow a user
 */
export async function unfollowUser(userId: string): Promise<{ message: string }> {
  return deleteJson<{ message: string }>(`/follow/${userId}`);
}

/**
 * Get follow status between current user and target user
 */
export async function getFollowStatus(userId: string): Promise<FollowStatusResponse> {
  return getJson<FollowStatusResponse>(`/follow/status/${userId}`);
}

/**
 * Get followers of a user
 */
export async function getFollowers(
  userId: string,
  page: number = 1,
  limit: number = 20
): Promise<FollowersResponse> {
  return getJson<FollowersResponse>(`/follow/followers/${userId}`, { page, limit });
}

/**
 * Get who a user is following
 */
export async function getFollowing(
  userId: string,
  page: number = 1,
  limit: number = 20
): Promise<FollowingResponse> {
  return getJson<FollowingResponse>(`/follow/following/${userId}`, { page, limit });
}

/**
 * Get mutual connections and followers with a user
 */
export async function getMutualInfo(userId: string): Promise<MutualInfo> {
  return getJson<MutualInfo>(`/follow/mutual/${userId}`);
}

/**
 * Get follower/following counts for a user
 */
export async function getFollowCounts(userId: string): Promise<FollowCountsResponse> {
  return getJson<FollowCountsResponse>(`/follow/counts/${userId}`);
}
