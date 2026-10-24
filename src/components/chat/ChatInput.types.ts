import { type Message } from '@/lib/api/chat';

export interface UploadingMessage {
  id: string;
  type: 'image' | 'video' | 'document' | 'audio';
  preview?: string;
  fileName?: string;
  progress: number;
}

export interface OptimisticMessage {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  contentType: string;
  mediaUrl?: string;
  fileName?: string;
  fileSize?: number;
  replyToId?: string;
  replyTo?: {
    id: string;
    content: string;
    senderName: string;
  };
  status: 'SENDING' | 'FAILED';
  errorMessage?: string;
  createdAt: string;
}

export interface ChatInputProps {
  conversationId: string;
  currentUserId?: string;
  replyTo?: {
    id: string;
    content: string;
    senderName: string;
  };
  onCancelReply?: () => void;
  disabled?: boolean;
  onUploadingMessagesChange?: (messages: UploadingMessage[]) => void;
  onOptimisticMessage?: (message: OptimisticMessage) => void;
  onOptimisticMessageResolved?: (optimisticId: string) => void;
  onConfirmedMessage?: (message: Message) => void;
  // AI Assistant props
  otherUserId?: string;
  otherUserName?: string;
  lastReceivedMessage?: string;
  enabledMessageEffects?: {
    confetti: boolean;
    fireworks: boolean;
    voiceSfx: boolean;
  };
}

export interface FilePreview {
  file: File;
  preview: string;
  type: 'image' | 'video' | 'document' | 'audio';
}
