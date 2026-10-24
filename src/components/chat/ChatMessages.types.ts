import { Message } from '@/lib/api/chat';
import type { OptimisticMessage, UploadingMessage } from './ChatInput';

export type AutoScrollMode = 'instant' | 'smooth' | null;

export type VirtualMessageItem =
  | { kind: 'date'; dateKey: string }
  | { kind: 'message'; message: Message; showAvatar: boolean }
  | { kind: 'optimistic'; message: OptimisticMessage }
  | { kind: 'uploading'; message: UploadingMessage }
  | { kind: 'typing' };

export interface ChatMessagesProps {
  conversationId: string;
  currentUserId: string;
  otherUser: {
    id: string;
    name: string;
    username: string;
    profileImage?: string | null;
    isOnline?: boolean;
  };
  wallpaper?: string;
  availableReactions?: string[];
  animatedBubbles?: boolean;
  onReply?: (message: { id: string; content: string; senderName: string }) => void;
  uploadingMessages?: UploadingMessage[];
  optimisticMessages?: OptimisticMessage[];
  confirmedMessages?: Message[];
  onLastMessageUpdate?: (message: string) => void;
  onRetryMessage?: (clientMessageId: string) => void;
}

export interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
  showAvatar: boolean;
  otherUser: {
    name: string;
    profileImage?: string | null;
  };
  conversationId: string;
  isHighlighted?: boolean;
  onScrollToReply?: (messageId: string) => void;
  registerRef?: (el: HTMLDivElement | null) => void;
  onReply?: () => void;
  onViewImage?: (url: string) => void;
  onViewVideo?: (url: string) => void;
  availableReactions?: string[];
  animatedBubbles?: boolean;
}
