// Mentions API - Track and manage @mentions

import apiClient from './client';

// ============================================
// Types
// ============================================

export interface MentionUser {
  id: string;
  name: string;
  username: string;
  avatar: string | null;
  headline: string | null;
}

export interface Mention {
  id: string;
  type: 'POST' | 'COMMENT';
  postId: string | null;
  commentId: string | null;
  mentionedBy: MentionUser;
  post?: {
    id: string;
    content: string;
    type: string;
  };
  comment?: {
    id: string;
    content: string;
  };
  isRead: boolean;
  createdAt: string;
}

// ============================================
// API Functions
// ============================================

/**
 * Search users for @mention autocomplete
 */
export async function searchUsersForMention(
  query: string,
  limit: number = 10
): Promise<MentionUser[]> {
  return apiClient.get('/mentions/search', {
    params: { q: query, limit },
  });
}

/**
 * Get unread mentions
 */
export async function getUnreadMentions(): Promise<Mention[]> {
  return apiClient.get('/mentions/unread');
}

/**
 * Get unread mention count
 */
export async function getUnreadMentionCount(): Promise<{ count: number }> {
  return apiClient.get('/mentions/count');
}

/**
 * Mark mentions as read
 */
export async function markMentionsAsRead(
  mentionIds: string[]
): Promise<{ message: string }> {
  return apiClient.post('/mentions/read', { mentionIds });
}
