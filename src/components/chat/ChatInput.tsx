'use client';
import { useSyncedState } from '@/hooks/useSyncedState';
import { useQuery } from '@tanstack/react-query';
import type { ChatInputProps, FilePreview, UploadingMessage } from './ChatInput.types';
import { ChatInputView } from './ChatInputView';
import { useChatAttachments } from './useChatAttachments';
import { useChatMessageEffects } from './useChatMessageEffects';
import { useChatSend } from './useChatSend';
export type {
  ChatInputProps,
  FilePreview,
  OptimisticMessage,
  UploadingMessage,
} from './ChatInput.types';

import { fixGrammar } from '@/lib/api/ai-chat';
import { getMessageLimitStatus, sendMessage, type MessageLimitStatus } from '@/lib/api/chat';
import {
  getConnectionStatus,
  sendConnectionRequest,
  type ConnectionStatus,
} from '@/lib/api/connections';
import { isTerminalSafetyError } from '@/lib/api/errors';
import { attemptChatOutboxEntry } from '@/lib/chat/outbox';
import { initializeSocket, sendChatTyping } from '@/lib/socket';
import { handleApiError } from '@/lib/utils/errorHandler';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// File type configurations
const ALLOWED_FILE_TYPES = {
  image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  video: ['video/mp4', 'video/webm', 'video/quicktime'],
  document: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
  audio: ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/webm'],
};

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const MAX_VIDEO_DURATION = 60;

const AI_LEARNING_MESSAGE = 'ai model is learning please give it some time';
const TYPING_START_DELAY_MS = 600;
const TYPING_HEARTBEAT_MS = 2000;
const TYPING_IDLE_TIMEOUT_MS = 2500;

function ChatInputSession({
  conversationId,
  currentUserId,
  replyTo,
  onCancelReply,
  disabled = false,
  onUploadingMessagesChange,
  onOptimisticMessage,
  onOptimisticMessageResolved,
  onConfirmedMessage,
  otherUserId,
  otherUserName,
  lastReceivedMessage,
  enabledMessageEffects,
}: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [isFixingGrammar, setIsFixingGrammar] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FilePreview[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [uploadingMessages, setUploadingMessages] = useState<UploadingMessage[]>([]);

  // Message limit state
  const accessResource = useQuery({
    queryKey: ['chat-access', currentUserId, otherUserId],
    queryFn: async () => {
      const [limit, state] = await Promise.all([
        getMessageLimitStatus(otherUserId!),
        getConnectionStatus(otherUserId!),
      ]);
      return {
        limit: { ...limit, isConnected: limit.isConnected || state.status === 'connected' },
        status: state.status,
      };
    },
    enabled: !!otherUserId,
  });
  const [messageLimitInfo, setMessageLimitInfo] = useSyncedState<MessageLimitStatus | null>(
    accessResource.data?.limit ?? null
  );
  const [showConnectionPrompt, setShowConnectionPrompt] = useSyncedState(
    !!accessResource.data &&
      !accessResource.data.limit.isConnected &&
      !accessResource.data.limit.canSend
  );
  const [isSendingConnectionRequest, setIsSendingConnectionRequest] = useState(false);
  const [connectionStatus, setConnectionStatus] = useSyncedState<ConnectionStatus>(
    accessResource.data?.status ?? 'none'
  );
  const [selectedMessageEffect, setSelectedMessageEffect] = useState<
    'none' | 'confetti' | 'fireworks'
  >('none');

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const typingStartTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const typingStopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const typingActiveRef = useRef(false);
  const lastTypingEmitRef = useRef(0);
  const attachMenuRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const connectionRequestSent = connectionStatus === 'pending_sent';
  const hasPendingIncomingRequest = connectionStatus === 'pending_received';

  const syncChatAccessState = accessResource.refetch;

  // Keep chat access state up to date when connection notifications arrive in real time
  useEffect(() => {
    if (!otherUserId) return;

    const socket = initializeSocket();
    const handleConnectionAccepted = (data: { otherUser?: { id?: string } }) => {
      if (data?.otherUser?.id === otherUserId) {
        void syncChatAccessState();
      }
    };
    const handleNotification = (data: { type?: string; actor?: { id?: string } }) => {
      const actorId = data?.actor?.id;
      if (actorId !== otherUserId) return;

      if (data.type === 'connection_request' || data.type === 'connection_accepted') {
        void syncChatAccessState();
      }
    };

    socket.on('connection:accepted', handleConnectionAccepted);
    socket.on('notification:new', handleNotification);

    return () => {
      socket.off('connection:accepted', handleConnectionAccepted);
      socket.off('notification:new', handleNotification);
    };
  }, [otherUserId, syncChatAccessState]);

  const availableMessageEffects = useMemo<Array<'confetti' | 'fireworks'>>(
    () => [
      ...(enabledMessageEffects?.confetti ? ['confetti' as const] : []),
      ...(enabledMessageEffects?.fireworks ? ['fireworks' as const] : []),
    ],
    [enabledMessageEffects?.confetti, enabledMessageEffects?.fireworks]
  );

  const { cycleMessageEffect, playVoiceSfx, triggerMessageEffect } = useChatMessageEffects({
    availableMessageEffects,
    enabledMessageEffects,
    selectedMessageEffect,
    setSelectedMessageEffect,
  });

  // Handle sending connection request
  const handleSendConnectionRequest = async () => {
    if (!otherUserId || isSendingConnectionRequest) return;

    setIsSendingConnectionRequest(true);
    try {
      await sendConnectionRequest(otherUserId);
      setConnectionStatus('pending_sent');
      // Don't close prompt, show success message
    } catch (error: unknown) {
      if (isTerminalSafetyError(error)) {
        setConnectionStatus('none');
        return;
      }

      const errorMessage = handleApiError(error).toLowerCase();
      if (
        errorMessage.includes('already') ||
        errorMessage.includes('pending') ||
        errorMessage.includes('connected')
      ) {
        await syncChatAccessState();
      } else {
        alert(handleApiError(error));
      }
    } finally {
      setIsSendingConnectionRequest(false);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  }, [message]);

  // Close attachment menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (attachMenuRef.current && !attachMenuRef.current.contains(event.target as Node)) {
        setShowAttachMenu(false);
      }
    };

    if (showAttachMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAttachMenu]);

  const stopTypingBroadcast = useCallback(() => {
    if (typingStartTimeoutRef.current) {
      clearTimeout(typingStartTimeoutRef.current);
      typingStartTimeoutRef.current = null;
    }
    if (typingStopTimeoutRef.current) {
      clearTimeout(typingStopTimeoutRef.current);
      typingStopTimeoutRef.current = null;
    }

    if (typingActiveRef.current) {
      typingActiveRef.current = false;
      sendChatTyping(conversationId, false);
    }
    lastTypingEmitRef.current = 0;
  }, [conversationId]);

  // Wait briefly before broadcasting typing so a single tap (or a message
  // sent immediately after one character) does not flash the indicator. Once
  // active, heartbeat while the user keeps typing so reconnects self-heal.
  const handleTyping = useCallback(
    (hasContent: boolean) => {
      if (!hasContent) {
        stopTypingBroadcast();
        return;
      }

      const now = Date.now();
      if (typingActiveRef.current && now - lastTypingEmitRef.current >= TYPING_HEARTBEAT_MS) {
        lastTypingEmitRef.current = now;
        sendChatTyping(conversationId, true);
      }

      if (!typingActiveRef.current && !typingStartTimeoutRef.current) {
        typingStartTimeoutRef.current = setTimeout(() => {
          typingStartTimeoutRef.current = null;
          typingActiveRef.current = true;
          lastTypingEmitRef.current = Date.now();
          sendChatTyping(conversationId, true);
        }, TYPING_START_DELAY_MS);
      }

      if (typingStopTimeoutRef.current) {
        clearTimeout(typingStopTimeoutRef.current);
      }
      typingStopTimeoutRef.current = setTimeout(stopTypingBroadcast, TYPING_IDLE_TIMEOUT_MS);
    },
    [conversationId, stopTypingBroadcast]
  );

  // Stop a live indicator when switching conversations or unmounting.
  useEffect(() => {
    return stopTypingBroadcast;
  }, [stopTypingBroadcast]);

  // Get file type category
  const getFileType = (file: File): 'image' | 'video' | 'document' | 'audio' | null => {
    for (const [type, mimes] of Object.entries(ALLOWED_FILE_TYPES)) {
      if (mimes.includes(file.type)) {
        return type as 'image' | 'video' | 'document' | 'audio';
      }
    }
    return null;
  };

  // Check video duration
  const {
    cancelRecording,
    formatDuration,
    handleFileSelect,
    openFilePicker,
    removeFile,
    startRecording,
    stopRecording,
  } = useChatAttachments({
    MAX_FILE_SIZE,
    MAX_VIDEO_DURATION,
    audioChunksRef,
    fileInputRef,
    getFileType,
    isRecording,
    mediaRecorderRef,
    onUploadingMessagesChange,
    recordingIntervalRef,
    setAudioBlob,
    setIsRecording,
    setRecordingDuration,
    setSelectedFiles,
    setShowAttachMenu,
    uploadingMessages,
  });

  const submitMessage = useCallback(
    async (
      data: Parameters<typeof sendMessage>[1],
      options?: { optimisticId?: string; onUploadProgress?: (progress: number) => void }
    ) => {
      const clientMessageId = data.clientMessageId || options?.optimisticId;
      if (!clientMessageId) throw new Error('clientMessageId is required for durable sending');

      const sentMessage = await attemptChatOutboxEntry(clientMessageId, {
        onUploadProgress: options?.onUploadProgress,
      });

      onConfirmedMessage?.(sentMessage);
      if (options?.optimisticId) {
        onOptimisticMessageResolved?.(options.optimisticId);
      }
      return sentMessage;
    },
    [onConfirmedMessage, onOptimisticMessageResolved]
  );

  const { handleSend } = useChatSend({
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
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextMessage = e.target.value;
    setMessage(nextMessage);
    handleTyping(Boolean(nextMessage.trim()));
  };

  const handleEmojiClick = (emoji: string) => {
    setMessage((prev) => prev + emoji);
    setShowEmoji(false);
    inputRef.current?.focus();
  };

  // Quick grammar fix function
  const handleQuickGrammarFix = async () => {
    if (!message.trim() || isFixingGrammar) return;

    setIsFixingGrammar(true);
    try {
      const response = await fixGrammar(message);
      setMessage(response.corrected);
      inputRef.current?.focus();
    } catch (error) {
      console.error('Grammar fix error:', error);
      alert(AI_LEARNING_MESSAGE);
    } finally {
      setIsFixingGrammar(false);
    }
  };

  const commonEmojis = [
    '😀',
    '😂',
    '❤️',
    '👍',
    '🔥',
    '🎉',
    '😊',
    '🙏',
    '💯',
    '✨',
    '😍',
    '🤔',
    '👀',
    '🙌',
    '💪',
  ];

  return (
    <ChatInputView
      attachMenuRef={attachMenuRef}
      audioBlob={audioBlob}
      availableMessageEffects={availableMessageEffects}
      cancelRecording={cancelRecording}
      commonEmojis={commonEmojis}
      connectionRequestSent={connectionRequestSent}
      conversationId={conversationId}
      cycleMessageEffect={cycleMessageEffect}
      disabled={disabled}
      fileInputRef={fileInputRef}
      formatDuration={formatDuration}
      handleChange={handleChange}
      handleEmojiClick={handleEmojiClick}
      handleFileSelect={handleFileSelect}
      handleKeyDown={handleKeyDown}
      handleQuickGrammarFix={handleQuickGrammarFix}
      handleSend={handleSend}
      handleSendConnectionRequest={handleSendConnectionRequest}
      hasPendingIncomingRequest={hasPendingIncomingRequest}
      inputRef={inputRef}
      isFixingGrammar={isFixingGrammar}
      isRecording={isRecording}
      isSendingConnectionRequest={isSendingConnectionRequest}
      lastReceivedMessage={lastReceivedMessage}
      message={message}
      messageLimitInfo={messageLimitInfo}
      onCancelReply={onCancelReply}
      openFilePicker={openFilePicker}
      otherUserId={otherUserId}
      otherUserName={otherUserName}
      recordingDuration={recordingDuration}
      removeFile={removeFile}
      replyTo={replyTo}
      selectedFiles={selectedFiles}
      selectedMessageEffect={selectedMessageEffect}
      setAudioBlob={setAudioBlob}
      setMessage={setMessage}
      setRecordingDuration={setRecordingDuration}
      setShowAIAssistant={setShowAIAssistant}
      setShowAttachMenu={setShowAttachMenu}
      setShowConnectionPrompt={setShowConnectionPrompt}
      setShowEmoji={setShowEmoji}
      showAIAssistant={showAIAssistant}
      showAttachMenu={showAttachMenu}
      showConnectionPrompt={showConnectionPrompt}
      showEmoji={showEmoji}
      startRecording={startRecording}
      stopRecording={stopRecording}
    />
  );
}

export default function ChatInput(props: ChatInputProps) {
  return (
    <ChatInputSession key={props.conversationId + ':' + (props.otherUserId ?? '')} {...props} />
  );
}
