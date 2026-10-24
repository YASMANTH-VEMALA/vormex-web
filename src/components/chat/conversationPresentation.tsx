'use client';
import { type ChatUser, type Conversation } from '@/lib/api/chat';
import { format, isThisWeek, isThisYear, isToday } from 'date-fns';
import { FileText, Film, Image as ImageIcon, Mic, Paperclip } from 'lucide-react';
import type { ConversationPreviewMessage, PreviewInfo } from './ChatList.types';

export function fallbackChatUser(userId: string): ChatUser {
  return {
    id: userId,
    username: '',
    name: '',
    profileImage: null,
    isOnline: false,
    lastActiveAt: null,
  };
}

export function buildInstantConversationFromMessage(
  conversationId: string,
  message: ConversationPreviewMessage,
  currentUserId?: string,
  selectedConversationId?: string
): Conversation | null {
  if (!currentUserId) {
    return null;
  }

  const sender = message.sender || fallbackChatUser(message.senderId);
  const otherParticipant =
    message.senderId === currentUserId ? fallbackChatUser(message.receiverId) : sender;
  const participant1Id =
    message.senderId === currentUserId
      ? message.senderId
      : message.receiverId === currentUserId
        ? message.receiverId
        : currentUserId;
  const participant2Id =
    participant1Id === message.senderId ? message.receiverId : message.senderId;

  return {
    id: conversationId,
    participant1Id,
    participant2Id,
    participant1: participant1Id === sender.id ? sender : fallbackChatUser(participant1Id),
    participant2: participant2Id === sender.id ? sender : fallbackChatUser(participant2Id),
    otherParticipant,
    lastMessage: {
      id: message.id,
      content: message.content,
      contentType: message.contentType,
      senderId: message.senderId,
      status: message.status,
      createdAt: message.createdAt,
    },
    lastMessageAt: message.createdAt,
    unreadCount:
      message.senderId !== currentUserId && conversationId !== selectedConversationId ? 1 : 0,
    createdAt: message.createdAt,
    updatedAt: message.updatedAt,
  };
}

export function formatConversationTime(dateString: string): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return '';
  if (isToday(date)) return format(date, 'h:mm a');
  if (isThisWeek(date, { weekStartsOn: 1 })) return format(date, 'EEE');
  if (isThisYear(date)) return format(date, 'MMM d');
  return format(date, 'MMM d, yyyy');
}

export function getMessagePreview(
  lastMessage: NonNullable<Conversation['lastMessage']>
): PreviewInfo {
  switch (lastMessage.contentType) {
    case 'image':
      return { text: 'Photo', Icon: ImageIcon };
    case 'file':
      return { text: 'Attachment', Icon: Paperclip };
    case 'voice':
      return { text: 'Voice message', Icon: Mic };
    case 'reel':
    case 'video':
      return { text: 'Video', Icon: Film };
    case 'post':
    case 'application/x-shared-post':
      return { text: 'Shared a post', Icon: FileText };
  }

  const content = lastMessage.content?.trim() ?? '';
  if (content.startsWith('{')) {
    try {
      const data = JSON.parse(content);
      if (data?.type === 'shared_post') return { text: 'Shared a post', Icon: FileText };
      if (data?.type === 'shared_reel' || data?.reelId) return { text: 'Video', Icon: Film };
    } catch {
      // Not JSON — fall through to raw content
    }
  }

  return { text: content };
}
