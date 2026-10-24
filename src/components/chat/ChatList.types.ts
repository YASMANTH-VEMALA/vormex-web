import { type Conversation, type Message } from '@/lib/api/chat';
import React from 'react';

export interface ChatListProps {
  selectedConversationId?: string;
  onSelectConversation?: (conversation: Conversation) => void;
  currentUserId?: string;
  searchQuery?: string;
}

export type ConversationPreviewMessage = Pick<
  Message,
  | 'id'
  | 'conversationId'
  | 'senderId'
  | 'receiverId'
  | 'content'
  | 'contentType'
  | 'status'
  | 'createdAt'
  | 'updatedAt'
  | 'sender'
>;

export type PreviewInfo = {
  text: string;
  Icon?: React.ComponentType<{ className?: string }>;
};

export interface ConversationItemProps {
  conversation: Conversation;
  isSelected: boolean;
  currentUserId?: string;
  isTyping?: boolean;
  onClick: () => void;
}
