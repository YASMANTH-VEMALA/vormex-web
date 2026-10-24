import apiClient from './client';
import type {
  Group,
  GroupCategory,
  GroupInvite,
  GroupInviteStatus,
  GroupJoinRequest,
  GroupJoinRequestStatus,
  GroupMemberRole,
  GroupMembersResponse,
  GroupMessage,
  GroupPost,
  GroupPostsResponse,
  GroupPrivacy,
  GroupsResponse,
  GroupUser,
} from './groups.types';
export type {
  Group,
  GroupCategory,
  GroupInvite,
  GroupInviteStatus,
  GroupJoinRequest,
  GroupJoinRequestStatus,
  GroupMember,
  GroupMemberRole,
  GroupMembersResponse,
  GroupMessage,
  GroupMessageReaction,
  GroupPost,
  GroupPostComment,
  GroupPostsResponse,
  GroupPrivacy,
  GroupsResponse,
  GroupUser,
  PaginatedResponse,
} from './groups.types';

// ============================================
// Group CRUD
// ============================================

export async function createGroup(data: {
  name: string;
  description?: string;
  privacy?: GroupPrivacy;
  category?: string;
  tags?: string[];
  rules?: string[];
  coverImage?: string;
  iconImage?: string;
}): Promise<Group> {
  return apiClient.post('/groups', data);
}

export async function getGroup(identifier: string): Promise<Group> {
  return apiClient.get(`/groups/${identifier}`);
}

export async function updateGroup(
  groupId: string,
  data: Partial<{
    name: string;
    description: string;
    privacy: GroupPrivacy;
    category: string;
    tags: string[];
    rules: string[];
    coverImage: string;
    iconImage: string;
    allowMemberPosts: boolean;
    requirePostApproval: boolean;
  }>
): Promise<Group> {
  return apiClient.put(`/groups/${groupId}`, data);
}

export async function deleteGroup(groupId: string): Promise<{ success: boolean }> {
  return apiClient.delete(`/groups/${groupId}`);
}

// ============================================
// Group Discovery
// ============================================

export async function listGroups(options?: {
  search?: string;
  category?: string;
  privacy?: GroupPrivacy;
  page?: number;
  limit?: number;
}): Promise<GroupsResponse> {
  const params = new URLSearchParams();
  if (options?.search) params.append('search', options.search);
  if (options?.category) params.append('category', options.category);
  if (options?.privacy) params.append('privacy', options.privacy);
  if (options?.page) params.append('page', String(options.page));
  if (options?.limit) params.append('limit', String(options.limit));

  return apiClient.get(`/groups?${params.toString()}`);
}

export async function getMyGroups(page = 1, limit = 20): Promise<GroupsResponse> {
  return apiClient.get(`/groups/my?page=${page}&limit=${limit}`);
}

export async function discoverGroups(page = 1, limit = 20): Promise<GroupsResponse> {
  return apiClient.get(`/groups/discover?page=${page}&limit=${limit}`);
}

export async function getCategories(): Promise<GroupCategory[]> {
  return apiClient.get('/groups/categories');
}

// ============================================
// Membership
// ============================================

export async function joinGroup(
  groupId: string,
  message?: string
): Promise<{ status: 'joined' | 'pending'; message: string }> {
  return apiClient.post(`/groups/${groupId}/join`, { message });
}

export async function leaveGroup(groupId: string): Promise<{ success: boolean }> {
  return apiClient.post(`/groups/${groupId}/leave`);
}

export async function getGroupMembers(
  groupId: string,
  options?: {
    role?: GroupMemberRole;
    search?: string;
    page?: number;
    limit?: number;
  }
): Promise<GroupMembersResponse> {
  const params = new URLSearchParams();
  if (options?.role) params.append('role', options.role);
  if (options?.search) params.append('search', options.search);
  if (options?.page) params.append('page', String(options.page));
  if (options?.limit) params.append('limit', String(options.limit));

  return apiClient.get(`/groups/${groupId}/members?${params.toString()}`);
}

export async function updateMemberRole(
  groupId: string,
  userId: string,
  role: GroupMemberRole
): Promise<{ success: boolean }> {
  return apiClient.put(`/groups/${groupId}/members/${userId}`, { role });
}

export async function removeMember(groupId: string, userId: string): Promise<{ success: boolean }> {
  return apiClient.delete(`/groups/${groupId}/members/${userId}`);
}

// ============================================
// Join Requests
// ============================================

export async function getJoinRequests(
  groupId: string,
  status?: GroupJoinRequestStatus
): Promise<GroupJoinRequest[]> {
  const params = status ? `?status=${status}` : '';
  const response = (await apiClient.get(
    `/groups/${groupId}/join-requests${params}`
  )) as unknown as {
    requests: Array<{
      id: string;
      groupId: string;
      requesterId: string;
      requester: GroupUser;
      status: string;
      requestedAt: string;
      respondedAt: string | null;
    }>;
  };
  return response.requests.map((request) => ({
    id: request.id,
    groupId: request.groupId,
    userId: request.requesterId,
    user: request.requester,
    status: request.status.toUpperCase() as GroupJoinRequestStatus,
    message: null,
    reviewedById: null,
    reviewedBy: null,
    reviewedAt: request.respondedAt,
    createdAt: request.requestedAt,
  }));
}

export async function handleJoinRequest(
  groupId: string,
  requestId: string,
  action: 'approve' | 'reject'
): Promise<{ success: boolean }> {
  return apiClient.post(`/groups/${groupId}/join-requests/${requestId}/respond`, {
    action: action === 'approve' ? 'accept' : 'decline',
  });
}

// ============================================
// Group Invites
// ============================================

export async function inviteToGroup(
  groupId: string,
  userId: string,
  message?: string
): Promise<{ success: boolean; message: string }> {
  return apiClient.post(`/groups/${groupId}/invites`, { userId, message });
}

export async function getGroupInvites(
  groupId: string,
  status?: GroupInviteStatus
): Promise<{ invites: GroupInvite[] }> {
  const params = status ? `?status=${status}` : '';
  return apiClient.get(`/groups/${groupId}/invites${params}`);
}

export async function getUserPendingInvites(): Promise<{ invites: GroupInvite[] }> {
  return apiClient.get('/groups/invites/pending');
}

export async function respondToInvite(
  inviteId: string,
  action: 'accept' | 'decline'
): Promise<{ success: boolean; message: string; groupSlug?: string }> {
  return apiClient.post(`/groups/invites/${inviteId}/respond`, { action });
}

export async function cancelInvite(
  groupId: string,
  inviteId: string
): Promise<{ success: boolean }> {
  return apiClient.delete(`/groups/${groupId}/invites/${inviteId}`);
}

// ============================================
// Group Posts
// ============================================

export async function createGroupPost(
  groupId: string,
  data: {
    content?: string;
    mediaUrls?: string[];
    mediaType?: string;
  }
): Promise<GroupPost> {
  return apiClient.post(`/groups/${groupId}/posts`, data);
}

export async function getGroupPosts(
  groupId: string,
  options?: {
    page?: number;
    limit?: number;
    pinnedFirst?: boolean;
  }
): Promise<GroupPostsResponse> {
  const params = new URLSearchParams();
  if (options?.page) params.append('page', String(options.page));
  if (options?.limit) params.append('limit', String(options.limit));
  if (options?.pinnedFirst !== undefined) params.append('pinnedFirst', String(options.pinnedFirst));

  return apiClient.get(`/groups/${groupId}/posts?${params.toString()}`);
}

export async function toggleGroupPostLike(
  groupId: string,
  postId: string,
  reactionType = 'like'
): Promise<{ liked: boolean }> {
  return apiClient.post(`/groups/${groupId}/posts/${postId}/like`, { reactionType });
}

export async function pinGroupPost(
  groupId: string,
  postId: string,
  isPinned: boolean
): Promise<GroupPost> {
  return apiClient.put(`/groups/${groupId}/posts/${postId}/pin`, { isPinned });
}

export async function deleteGroupPost(
  groupId: string,
  postId: string
): Promise<{ success: boolean }> {
  return apiClient.delete(`/groups/${groupId}/posts/${postId}`);
}

// ============================================
// Group Chat
// ============================================

export async function getGroupMessages(
  groupId: string,
  options?: {
    before?: string;
    limit?: number;
  }
): Promise<GroupMessage[]> {
  const params = new URLSearchParams();
  if (options?.before) params.append('before', options.before);
  if (options?.limit) params.append('limit', String(options.limit));

  return apiClient.get(`/groups/${groupId}/messages?${params.toString()}`);
}

export async function sendGroupMessage(
  groupId: string,
  data: {
    content: string;
    contentType?: string;
    mediaUrl?: string;
    mediaType?: string;
    fileName?: string;
    fileSize?: number;
    replyToId?: string;
  }
): Promise<GroupMessage> {
  return apiClient.post(`/groups/${groupId}/messages`, data);
}

export async function addGroupMessageReaction(
  groupId: string,
  messageId: string,
  emoji: string
): Promise<{ action: 'added' | 'updated' | 'removed' }> {
  return apiClient.post(`/groups/${groupId}/messages/${messageId}/reactions`, { emoji });
}

export async function deleteGroupMessage(
  groupId: string,
  messageId: string
): Promise<{ success: boolean }> {
  return apiClient.delete(`/groups/${groupId}/messages/${messageId}`);
}

// ============================================
// Group Image Uploads
// ============================================

/**
 * Upload group icon/profile image
 * Uses /upload/group-icon (groupId in body) - works when /groups/:id/upload/icon returns 404
 */
export async function uploadGroupIcon(groupId: string, file: File): Promise<{ iconUrl: string }> {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('groupId', groupId);
  return apiClient.post('/upload/group-icon', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

/**
 * Upload group cover/banner image
 * Uses /upload/group-cover (groupId in body) - works when /groups/:id/upload/cover returns 404
 */
export async function uploadGroupCover(groupId: string, file: File): Promise<{ coverUrl: string }> {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('groupId', groupId);
  return apiClient.post('/upload/group-cover', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}
