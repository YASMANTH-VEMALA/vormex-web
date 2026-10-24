import type { ChatUser, Message } from '@/lib/api/chat';

export type ReactionType = 'LIKE' | 'CELEBRATE' | 'SUPPORT' | 'INSIGHTFUL' | 'CURIOUS';

export interface ReactionSummary {
  type: ReactionType;
  count: number;
}

export type SocketObject = Record<string, unknown>;

export interface SocketEventHandlers {
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: { message: string }) => void;

  // Post events
  onPostCreated?: (data: { post: unknown }) => void;
  onPostLiked?: (data: {
    postId: string;
    userId: string;
    liked: boolean;
    likesCount: number;
    reactionType?: ReactionType | null;
    reactionSummary?: ReactionSummary[];
  }) => void;
  onPostReacted?: (data: {
    postId: string;
    userId: string;
    liked: boolean;
    reactionType: ReactionType | null;
    likesCount: number;
    reactionSummary: ReactionSummary[];
  }) => void;

  // Comment events
  onCommentCreated?: (data: { postId: string; comment: unknown; commentsCount: number }) => void;
  onCommentLiked?: (data: {
    commentId: string;
    userId: string;
    liked: boolean;
    likesCount: number;
  }) => void;

  // Poll events
  onPollUpdated?: (data: {
    postId: string;
    pollOptions: unknown[];
    voterId: string;
    votedOptionId?: string;
    totalVotes?: number;
  }) => void;

  // Notification events
  onNotificationComment?: (data: SocketObject) => void;
  onNotificationMention?: (data: SocketObject) => void;
  onNotificationLike?: (data: SocketObject) => void;
  onNotificationReaction?: (data: SocketObject) => void;
  onNotificationCommentLike?: (data: SocketObject) => void;

  // User events
  onUserOnline?: (data: { userId: string }) => void;
  onUserOffline?: (data: { userId: string }) => void;
  onUserLocationChanged?: (data: {
    userId: string;
    city: string;
    state: string;
    country: string;
  }) => void;

  // Location request
  onLocationRequest?: (data: { message: string; timestamp: Date }) => void;

  // Story events
  onStoryCreated?: (data: { story: unknown; author: unknown; timestamp: Date }) => void;
  onStoryDeleted?: (data: { storyId: string; authorId: string; timestamp: Date }) => void;
  onStoryViewed?: (data: {
    storyId: string;
    viewerId: string;
    viewCount: number;
    timestamp: Date;
  }) => void;
  onStoryReaction?: (data: {
    storyId: string;
    user: unknown;
    reaction: string;
    reactionCount: number;
    timestamp: Date;
  }) => void;
  onStoryReply?: (data: { storyId: string; reply: unknown; timestamp: Date }) => void;

  // Chat events
  onChatNewMessage?: (data: { conversationId: string; message: Message }) => void;
  onChatNotification?: (data: {
    type: string;
    conversationId: string;
    message: Message;
    sender: ChatUser;
  }) => void;
  onChatUserTyping?: (data: { conversationId: string; userId: string; isTyping: boolean }) => void;
  onChatMessagesDelivered?: (data: { conversationId: string; deliveredAt: Date }) => void;
  onChatMessagesRead?: (data: { conversationId: string; readBy: string; readAt: Date }) => void;
  onChatMessageDeleted?: (data: {
    messageId: string;
    conversationId: string;
    deletedBy?: string;
    forEveryone: boolean;
  }) => void;
  onChatMessageEdited?: (data: {
    messageId: string;
    conversationId: string;
    content: string;
    editedAt: Date;
  }) => void;
  onChatMessageReaction?: (data: {
    messageId: string;
    conversationId: string;
    userId: string;
    emoji: string;
    action: string;
  }) => void;
  onChatMessageDelivered?: (data: { messageId: string; deliveredAt: Date }) => void;

  // Reel events
  onReelEngagementUpdate?: (data: {
    reelId: string;
    type: 'like' | 'comment' | 'share';
    userId?: string;
    liked?: boolean;
    likesCount?: number;
    commentsCount?: number;
    sharesCount?: number;
    comment?: { id: string; author: unknown; content: string; parentId?: string };
  }) => void;

  // New notification event
  onNotificationNew?: (data: {
    id: string;
    type: string;
    title: string;
    body: string;
    actor: unknown;
    post?: unknown;
    reel?: unknown;
    data: SocketObject;
    isRead: boolean;
    createdAt: string;
  }) => void;
}

export interface ChatSendPayload {
  conversationId: string;
  content: string;
  contentType?: string;
  mediaUrl?: string;
  mediaType?: string;
  fileName?: string;
  fileSize?: number;
  replyToId?: string;
  clientMessageId?: string;
}

export interface ChatSendAck {
  ok?: boolean;
  message?: Message;
  error?: string;
  code?: string;
  retryable?: boolean;
}
