'use client';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import React from 'react';
import type { VirtualMessageItem } from './ChatMessages.types';

interface ChatVirtualRowProps {
  item: VirtualMessageItem;
  MessageBubble: (
    props: import('@/components/chat/ChatMessages.types').MessageBubbleProps
  ) => React.JSX.Element;
  animatedBubbles: boolean;
  availableReactions: string[];
  conversationId: string;
  currentUserId: string;
  formatDateSeparator: (date: Date) => string;
  highlightedMessageId: string | null;
  onReply: ((message: { id: string; content: string; senderName: string }) => void) | undefined;
  onRetryMessage: ((clientMessageId: string) => void) | undefined;
  otherUser: {
    id: string;
    name: string;
    username: string;
    profileImage?: string | null | undefined;
    isOnline?: boolean | undefined;
  };
  registerMessageRef: (messageId: string, element: HTMLDivElement | null) => void;
  scrollToMessage: (messageId: string) => void;
  setViewingImage: React.Dispatch<React.SetStateAction<string | null>>;
  setViewingVideo: React.Dispatch<React.SetStateAction<string | null>>;
}
export function ChatVirtualRow({
  item,
  MessageBubble,
  animatedBubbles,
  availableReactions,
  conversationId,
  currentUserId,
  formatDateSeparator,
  highlightedMessageId,
  onReply,
  onRetryMessage,
  otherUser,
  registerMessageRef,
  scrollToMessage,
  setViewingImage,
  setViewingVideo,
}: ChatVirtualRowProps) {
  if (item.kind === 'date') {
    return (
      <div className="flex items-center justify-center my-4">
        <div className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-600 dark:text-gray-300">
          {formatDateSeparator(new Date(item.dateKey))}
        </div>
      </div>
    );
  }

  if (item.kind === 'message') {
    const message = item.message;
    return (
      <MessageBubble
        message={message}
        isOwn={message.senderId === currentUserId}
        showAvatar={item.showAvatar}
        otherUser={otherUser}
        conversationId={conversationId}
        isHighlighted={highlightedMessageId === message.id}
        onScrollToReply={scrollToMessage}
        registerRef={(element) => registerMessageRef(message.id, element)}
        onReply={
          onReply
            ? () =>
                onReply({
                  id: message.id,
                  content: message.content,
                  senderName: message.senderId === currentUserId ? 'You' : otherUser.name,
                })
            : undefined
        }
        onViewImage={setViewingImage}
        onViewVideo={setViewingVideo}
        availableReactions={availableReactions}
        animatedBubbles={animatedBubbles}
      />
    );
  }

  if (item.kind === 'optimistic') {
    const optimisticMessage = item.message;
    return (
      <div className="flex w-full min-w-0 max-w-full justify-end mb-2">
        <div className="min-w-0 max-w-[85%] sm:max-w-[70%]">
          {optimisticMessage.replyTo && (
            <div className="text-xs p-2 rounded-t-lg border-l-2 bg-blue-600/20 border-blue-400">
              <span className="text-gray-500 text-[10px]">↩ Replying to</span>
              <p className="truncate text-gray-700 dark:text-gray-300">
                {optimisticMessage.replyTo.content}
              </p>
            </div>
          )}
          <div
            className={cn(
              'bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-br-sm',
              optimisticMessage.status === 'FAILED' && 'bg-red-600',
              optimisticMessage.replyTo && 'rounded-t-none'
            )}
          >
            {optimisticMessage.mediaUrl && optimisticMessage.contentType === 'image' && (
              <img
                src={optimisticMessage.mediaUrl}
                alt={optimisticMessage.fileName || 'Failed upload'}
                className="mb-2 max-h-52 rounded-lg object-cover"
              />
            )}
            {optimisticMessage.mediaUrl && optimisticMessage.contentType === 'video' && (
              <video src={optimisticMessage.mediaUrl} className="mb-2 max-h-52 rounded-lg" muted />
            )}
            <p className="min-w-0 whitespace-pre-wrap [overflow-wrap:anywhere]">
              {optimisticMessage.content}
            </p>
          </div>
          <div
            className={cn(
              'text-xs text-gray-500 mt-1 flex items-center gap-1 justify-end',
              optimisticMessage.status === 'FAILED' && 'text-red-600 dark:text-red-400'
            )}
          >
            <span>{format(new Date(optimisticMessage.createdAt), 'HH:mm')}</span>
            {optimisticMessage.status === 'FAILED' ? (
              <button
                type="button"
                onClick={() => onRetryMessage?.(optimisticMessage.id)}
                className="font-semibold underline underline-offset-2"
                aria-label="Retry failed message"
              >
                Failed · Retry
              </button>
            ) : (
              <span className="animate-pulse">⏳</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (item.kind === 'uploading') {
    const uploadingMessage = item.message;
    return (
      <div className="flex w-full min-w-0 max-w-full justify-end mb-2">
        <div className="relative min-w-0 max-w-[85%] sm:max-w-[70%]">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-br-sm">
            {uploadingMessage.preview &&
              (uploadingMessage.type === 'image' || uploadingMessage.type === 'video') && (
                <div className="relative mb-2 rounded-lg overflow-hidden">
                  {uploadingMessage.type === 'image' ? (
                    <img
                      src={uploadingMessage.preview}
                      alt="Uploading"
                      className="max-w-full opacity-70 max-h-[200px]"
                    />
                  ) : (
                    <video
                      src={uploadingMessage.preview}
                      className="max-w-full opacity-70 max-h-[200px]"
                      muted
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <span className="rounded-full bg-black/40 px-2 py-1 text-xs font-medium">
                      {uploadingMessage.progress}%
                    </span>
                  </div>
                </div>
              )}
            {(uploadingMessage.type === 'audio' || uploadingMessage.type === 'document') && (
              <div className="flex items-center gap-3">
                <span className="text-xl">{uploadingMessage.type === 'audio' ? '🎤' : '📄'}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm">{uploadingMessage.fileName || 'Uploading...'}</p>
                  <p className="text-xs opacity-70">Sending... {uploadingMessage.progress}%</p>
                </div>
              </div>
            )}
            {(uploadingMessage.type === 'image' || uploadingMessage.type === 'video') && (
              <p className="text-sm">
                {uploadingMessage.type === 'image' ? '📷 Sending photo...' : '🎥 Sending video...'}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-gray-500 text-sm py-2">
      <div className="flex gap-1">
        <span className="animate-bounce">•</span>
        <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>
          •
        </span>
        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>
          •
        </span>
      </div>
      <span>{otherUser.name} is typing...</span>
    </div>
  );
}
