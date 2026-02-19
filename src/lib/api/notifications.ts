// Notifications API - Complete API client for Notifications endpoints

import apiClient from './client';

// ============================================
// Types
// ============================================

export type NotificationType =
  | 'POST_LIKE'
  | 'POST_REACTION'
  | 'COMMENT'
  | 'COMMENT_LIKE'
  | 'MENTION'
  | 'CONNECTION_REQUEST'
  | 'CONNECTION_ACCEPTED'
  | 'POLL_VOTE'
  | 'POST_SHARE'
  | 'GROUP_INVITE'
  | 'GROUP_JOIN_REQUEST'
  | 'GROUP_JOIN_APPROVED';

export interface NotificationActor {
  id: string;
  username: string;
  name: string;
  profileImage: string | null;
}

export interface Notification {
  id: string;
  type: NotificationType;
  actor: NotificationActor | null;
  postId: string | null;
  commentId: string | null;
  groupId: string | null;
  reactionType: string | null;
  content: string | null;
  postPreview: string | null;
  isRead: boolean;
  createdAt: string;
}

export interface NotificationsResponse {
  notifications: Notification[];
  nextCursor: string | null;
  hasMore: boolean;
}

// ============================================
// Notification Endpoints
// ============================================

/**
 * Get notifications for the current user
 * @param cursor - Optional cursor for pagination
 * @param limit - Number of notifications per page (default: 20)
 * @param unreadOnly - Only return unread notifications
 */
export async function getNotifications(
  cursor?: string,
  limit: number = 20,
  unreadOnly: boolean = false
): Promise<NotificationsResponse> {
  const params: Record<string, any> = { limit };
  if (cursor) params.cursor = cursor;
  if (unreadOnly) params.unreadOnly = 'true';
  return apiClient.get('/notifications', { params });
}

/**
 * Get unread notification count
 */
export async function getUnreadNotificationCount(): Promise<{ count: number }> {
  return apiClient.get('/notifications/unread-count');
}

/**
 * Mark specific notifications as read
 * @param notificationIds - Array of notification IDs to mark as read
 */
export async function markNotificationsAsRead(notificationIds: string[]): Promise<{ success: boolean }> {
  return apiClient.post('/notifications/read', { notificationIds });
}

/**
 * Mark all notifications as read
 */
export async function markAllNotificationsAsRead(): Promise<{ success: boolean }> {
  return apiClient.post('/notifications/read-all');
}
