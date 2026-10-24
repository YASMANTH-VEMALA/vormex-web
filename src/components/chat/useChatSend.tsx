'use client';
import { isTerminalSafetyError } from '@/lib/api/errors';
import { putChatOutboxEntry, type ChatOutboxEntry } from '@/lib/chat/outbox';
import React, { useCallback } from 'react';
import type { OptimisticMessage } from './ChatInput.types';

interface useChatSendOptions {
  audioBlob: Blob | null;
  conversationId: string;
  currentUserId: string | undefined;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
  message: string;
  messageLimitInfo: import('@/lib/api/chat').MessageLimitStatus | null;
  onCancelReply: (() => void) | undefined;
  onOptimisticMessage:
    ((message: import('@/components/chat/ChatInput.types').OptimisticMessage) => void) | undefined;
  onOptimisticMessageResolved: ((optimisticId: string) => void) | undefined;
  playVoiceSfx: () => void;
  replyTo: { id: string; content: string; senderName: string } | undefined;
  selectedFiles: import('@/components/chat/ChatInput.types').FilePreview[];
  selectedMessageEffect: 'confetti' | 'fireworks' | 'none';
  setAudioBlob: React.Dispatch<React.SetStateAction<Blob | null>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setMessageLimitInfo: React.Dispatch<
    React.SetStateAction<import('@/lib/api/chat').MessageLimitStatus | null>
  >;
  setRecordingDuration: React.Dispatch<React.SetStateAction<number>>;
  setSelectedFiles: React.Dispatch<
    React.SetStateAction<import('@/components/chat/ChatInput.types').FilePreview[]>
  >;
  setShowConnectionPrompt: React.Dispatch<React.SetStateAction<boolean>>;
  setUploadingMessages: React.Dispatch<
    React.SetStateAction<import('@/components/chat/ChatInput.types').UploadingMessage[]>
  >;
  stopTypingBroadcast: () => void;
  submitMessage: (
    data: {
      content: string;
      contentType?: string | undefined;
      mediaUrl?: string | undefined;
      mediaType?: string | undefined;
      fileName?: string | undefined;
      fileSize?: number | undefined;
      replyToId?: string | undefined;
      clientMessageId?: string | undefined;
    },
    options?:
      | {
          optimisticId?: string | undefined;
          onUploadProgress?: ((progress: number) => void) | undefined;
        }
      | undefined
  ) => Promise<import('@/lib/api/chat').Message>;
  triggerMessageEffect: (effect: 'confetti' | 'fireworks') => Promise<void>;
}
export function useChatSend({
  audioBlob,
  conversationId,
  currentUserId,
  inputRef,
  message,
  messageLimitInfo,
  onCancelReply,
  onOptimisticMessage,
  onOptimisticMessageResolved,
  playVoiceSfx,
  replyTo,
  selectedFiles,
  selectedMessageEffect,
  setAudioBlob,
  setMessage,
  setMessageLimitInfo,
  setRecordingDuration,
  setSelectedFiles,
  setShowConnectionPrompt,
  setUploadingMessages,
  stopTypingBroadcast,
  submitMessage,
  triggerMessageEffect,
}: useChatSendOptions) {
  const handleSend = useCallback(async () => {
    const trimmedMessage = message.trim();
    const hasFiles = selectedFiles.length > 0;
    const hasAudio = audioBlob !== null;

    if (!trimmedMessage && !hasFiles && !hasAudio) return;
    if (!currentUserId) return;

    // Check message limit before sending (for non-connected users)
    if (messageLimitInfo && !messageLimitInfo.isConnected && !messageLimitInfo.canSend) {
      setShowConnectionPrompt(true);
      return;
    }

    // Immediately clear typing state and stop broadcasting.
    stopTypingBroadcast();

    // Update local message limit tracking
    if (messageLimitInfo && !messageLimitInfo.isConnected) {
      setMessageLimitInfo((prev) =>
        prev
          ? {
              ...prev,
              messagesSent: prev.messagesSent + 1,
              messagesRemaining: Math.max(0, prev.messagesRemaining - 1),
              canSend: prev.messagesRemaining > 1,
            }
          : null
      );
    }

    // Clear input immediately for better UX
    const filesToUpload = [...selectedFiles];
    const audioToUpload = audioBlob;
    const textToSend = trimmedMessage;
    const currentReplyTo = replyTo;

    setMessage('');
    setSelectedFiles([]);
    setAudioBlob(null);
    setRecordingDuration(0);
    onCancelReply?.();
    inputRef.current?.focus();

    // Upload and send audio message if exists
    if (hasAudio && audioToUpload) {
      const uploadId = crypto.randomUUID();
      const createdAt = new Date().toISOString();
      const audioFile = new globalThis.File([audioToUpload], `voice-${Date.now()}.webm`, {
        type: 'audio/webm',
      });
      const content = '🎤 Voice message';

      try {
        await putChatOutboxEntry({
          clientMessageId: uploadId,
          ownerId: currentUserId!,
          conversationId,
          content,
          contentType: 'audio',
          fileName: audioFile.name,
          fileSize: audioFile.size,
          replyToId: currentReplyTo?.id,
          createdAt,
          attempts: 0,
          status: 'pending',
          localFile: audioFile,
          localFileType: 'audio',
        });
        setUploadingMessages((prev) => [
          ...prev,
          {
            id: uploadId,
            type: 'audio',
            fileName: 'Voice message',
            progress: 0,
          },
        ]);

        await submitMessage(
          {
            content,
            contentType: 'audio',
            fileName: audioFile.name,
            fileSize: audioFile.size,
            replyToId: currentReplyTo?.id,
            clientMessageId: uploadId,
          },
          {
            optimisticId: uploadId,
            onUploadProgress: (progress) => {
              setUploadingMessages((prev) =>
                prev.map((m) => (m.id === uploadId ? { ...m, progress } : m))
              );
            },
          }
        );
        setUploadingMessages((prev) => prev.filter((m) => m.id !== uploadId));
        playVoiceSfx();
      } catch (error) {
        setUploadingMessages((prev) => prev.filter((m) => m.id !== uploadId));
        if (isTerminalSafetyError(error)) {
          onOptimisticMessageResolved?.(uploadId);
          return;
        }
        onOptimisticMessage?.({
          id: uploadId,
          conversationId,
          senderId: currentUserId!,
          content,
          contentType: 'audio',
          fileName: audioFile.name,
          fileSize: audioFile.size,
          replyToId: currentReplyTo?.id,
          status: 'FAILED',
          createdAt,
        });
      }
    }

    // Upload files in parallel with optimistic UI
    if (hasFiles) {
      const uploadPromises = filesToUpload.map(async (filePreview, index) => {
        const uploadId = crypto.randomUUID();
        const createdAt = new Date().toISOString();
        const content =
          filePreview.type === 'image'
            ? '📷 Photo'
            : filePreview.type === 'video'
              ? '🎥 Video'
              : filePreview.type === 'document'
                ? `📄 ${filePreview.file.name}`
                : `📎 ${filePreview.file.name}`;

        try {
          const entry: ChatOutboxEntry = {
            clientMessageId: uploadId,
            ownerId: currentUserId!,
            conversationId,
            content,
            contentType: filePreview.type,
            fileName: filePreview.file.name,
            fileSize: filePreview.file.size,
            replyToId: index === 0 ? currentReplyTo?.id : undefined,
            createdAt,
            attempts: 0,
            status: 'pending',
            localFile: filePreview.file,
            localFileType: filePreview.type,
          };
          await putChatOutboxEntry(entry);
          setUploadingMessages((prev) => [
            ...prev,
            {
              id: uploadId,
              type: filePreview.type,
              preview: filePreview.preview,
              fileName: filePreview.file.name,
              progress: 0,
            },
          ]);

          await submitMessage(
            {
              content,
              contentType: filePreview.type,
              fileName: filePreview.file.name,
              fileSize: filePreview.file.size,
              replyToId: index === 0 ? currentReplyTo?.id : undefined,
              clientMessageId: uploadId,
            },
            {
              optimisticId: uploadId,
              onUploadProgress: (progress) => {
                setUploadingMessages((prev) =>
                  prev.map((m) => (m.id === uploadId ? { ...m, progress } : m))
                );
              },
            }
          );
          setUploadingMessages((prev) => prev.filter((m) => m.id !== uploadId));

          // Clean up preview URL
          if (filePreview.preview) {
            URL.revokeObjectURL(filePreview.preview);
          }
        } catch (error) {
          setUploadingMessages((prev) => prev.filter((m) => m.id !== uploadId));
          if (isTerminalSafetyError(error)) {
            onOptimisticMessageResolved?.(uploadId);
            return;
          }
          onOptimisticMessage?.({
            id: uploadId,
            conversationId,
            senderId: currentUserId!,
            content,
            contentType: filePreview.type,
            mediaUrl: filePreview.preview,
            fileName: filePreview.file.name,
            fileSize: filePreview.file.size,
            replyToId: index === 0 ? currentReplyTo?.id : undefined,
            status: 'FAILED',
            createdAt,
          });
        }
      });

      // Don't await - let uploads happen in background
      Promise.all(uploadPromises);
    }

    // Send text message immediately
    if (textToSend) {
      // Create optimistic message for immediate UI feedback
      const optimisticId = crypto.randomUUID();
      const createdAt = new Date().toISOString();
      const optimisticMsg: OptimisticMessage = {
        id: optimisticId,
        conversationId,
        senderId: currentUserId!,
        content: textToSend,
        contentType: 'text',
        replyToId: currentReplyTo?.id,
        replyTo: currentReplyTo
          ? {
              id: currentReplyTo.id,
              content: currentReplyTo.content,
              senderName: currentReplyTo.senderName,
            }
          : undefined,
        status: 'SENDING',
        createdAt,
      };

      // Render before IndexedDB and network work so the sender sees the
      // pending bubble in the same frame as the button/key press.
      onOptimisticMessage?.(optimisticMsg);

      try {
        await putChatOutboxEntry({
          clientMessageId: optimisticId,
          ownerId: currentUserId!,
          conversationId,
          content: textToSend,
          contentType: 'text',
          replyToId: currentReplyTo?.id,
          createdAt,
          attempts: 0,
          status: 'pending',
        });
        await submitMessage(
          {
            content: textToSend,
            contentType: 'text',
            replyToId: currentReplyTo?.id,
            clientMessageId: optimisticId,
          },
          { optimisticId }
        );

        if (selectedMessageEffect !== 'none') {
          triggerMessageEffect(selectedMessageEffect);
        }
      } catch (error) {
        if (isTerminalSafetyError(error)) {
          onOptimisticMessageResolved?.(optimisticId);
          return;
        }
        onOptimisticMessage?.({ ...optimisticMsg, status: 'FAILED' });
      }
    }
  }, [
    message,
    selectedFiles,
    audioBlob,
    currentUserId,
    messageLimitInfo,
    stopTypingBroadcast,
    replyTo,
    setMessage,
    setSelectedFiles,
    setAudioBlob,
    setRecordingDuration,
    onCancelReply,
    inputRef,
    setShowConnectionPrompt,
    setMessageLimitInfo,
    conversationId,
    setUploadingMessages,
    submitMessage,
    playVoiceSfx,
    onOptimisticMessage,
    onOptimisticMessageResolved,
    selectedMessageEffect,
    triggerMessageEffect,
  ]);
  return { handleSend };
}
