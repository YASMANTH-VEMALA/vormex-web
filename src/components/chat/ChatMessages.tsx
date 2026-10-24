'use client';
import { formatDateSeparator, MessageBubble } from './MessageBubble';
import { useChatMessageRequests } from './useChatMessageRequests';
import { useMessageTimeline } from './useMessageTimeline';

import type { AutoScrollMode, ChatMessagesProps, VirtualMessageItem } from './ChatMessages.types';
import { ChatVirtualRow } from './createChatRowRenderer';
import { useChatMessageEvents } from './useChatMessageEvents';
import { VirtualChatTimeline } from './VirtualChatTimeline';
export type {
  AutoScrollMode,
  ChatMessagesProps,
  MessageBubbleProps,
  VirtualMessageItem,
} from './ChatMessages.types';

import {
  getMessages,
  markAsRead as markConversationAsRead,
  Message,
  MessagesResponse,
  type ChatSyncResponse,
} from '@/lib/api/chat';
import { readCachedMessages, writeCachedMessages } from '@/lib/chat/browserCache';
import { DEFAULT_CHAT_REACTIONS } from '@/lib/chat/customization';
import { mergeMessages, normalizeMessage } from '@/lib/chat/messageCache';
import { queryKeys } from '@/lib/queryKeys';
import { joinChatRoom, leaveChatRoom, markChatAsRead } from '@/lib/socket';
import { cn } from '@/lib/utils';
import { useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { type VirtuosoHandle } from 'react-virtuoso';
import { CHAT_SYNC_EVENT } from './ChatOutboxCoordinator';
import { WALLPAPER_OPTIONS } from './ChatSettingsPanel';

const INITIAL_FIRST_ITEM_INDEX = 100_000;

function ChatMessagesSession({
  conversationId,
  currentUserId,
  otherUser,
  wallpaper = 'default',
  availableReactions = DEFAULT_CHAT_REACTIONS,
  animatedBubbles = false,
  onReply,
  uploadingMessages = [],
  optimisticMessages = [],
  confirmedMessages = [],
  onLastMessageUpdate,
  onRetryMessage,
}: ChatMessagesProps) {
  const queryClient = useQueryClient();
  const messagesQueryKey = useMemo(
    () => queryKeys.chatMessages(currentUserId, conversationId),
    [conversationId, currentUserId]
  );
  const cachedMessagesResponse =
    queryClient.getQueryData<MessagesResponse>(messagesQueryKey) ??
    readCachedMessages(currentUserId, conversationId)?.value;
  const { messages, setMessages, prependMessages, firstItemIndex } = useMessageTimeline(
    cachedMessagesResponse?.messages.map(normalizeMessage) ?? [],
    confirmedMessages,
    INITIAL_FIRST_ITEM_INDEX
  );
  const [loading, setLoading] = useState(() => !cachedMessagesResponse);
  const [loadingMore, setLoadingMore] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(() => cachedMessagesResponse?.hasMore ?? false);
  const [nextCursor, setNextCursor] = useState<string | undefined>(
    () => cachedMessagesResponse?.nextCursor
  );
  const [typingUser, setTypingUser] = useState<string | null>(null);
  const [highlightedMessageId, setHighlightedMessageId] = useState<string | null>(null);
  const [viewingImage, setViewingImage] = useState<string | null>(null);
  const [viewingVideo, setViewingVideo] = useState<string | null>(null);

  const virtuosoRef = useRef<VirtuosoHandle>(null);
  const messageRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const virtualItemIndexByMessageIdRef = useRef<Map<string, number>>(new Map());
  const [autoScrollMode, setAutoScrollMode] = useState<AutoScrollMode>('instant');

  const firstItemIndexRef = useRef(INITIAL_FIRST_ITEM_INDEX);
  const autoScrollEnabledRef = useRef(true);
  const activeFetchKeyRef = useRef<string | null>(null);
  const optimisticCountRef = useRef(optimisticMessages.length);
  const uploadingCountRef = useRef(uploadingMessages.length);
  const hasHydratedMessageCacheRef = useRef(Boolean(cachedMessagesResponse));
  const messageCountRef = useRef(messages.length);
  const hasMoreRef = useRef(hasMore);
  const nextCursorRef = useRef(nextCursor);
  const processedIncomingMessageIdsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    firstItemIndexRef.current = firstItemIndex;
  }, [firstItemIndex]);

  useEffect(() => {
    messageCountRef.current = messages.length;
  }, [messages.length]);

  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);

  useEffect(() => {
    nextCursorRef.current = nextCursor;
  }, [nextCursor]);

  useEffect(() => {
    if (loading) {
      return;
    }

    const nextResponse = {
      messages,
      hasMore,
      nextCursor,
    };

    queryClient.setQueryData<MessagesResponse>(messagesQueryKey, nextResponse);
    writeCachedMessages(currentUserId, conversationId, nextResponse);
  }, [
    conversationId,
    currentUserId,
    hasMore,
    loading,
    messages,
    messagesQueryKey,
    nextCursor,
    queryClient,
  ]);

  // Scroll to a specific message and highlight it
  const scrollToMessage = useCallback((messageId: string) => {
    const messageElement = messageRefs.current.get(messageId);
    if (messageElement) {
      messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      const itemIndex = virtualItemIndexByMessageIdRef.current.get(messageId);
      if (itemIndex !== undefined) {
        virtuosoRef.current?.scrollToIndex({
          index: firstItemIndexRef.current + itemIndex,
          align: 'center',
          behavior: 'smooth',
        });
      }
    }
    setHighlightedMessageId(messageId);
    setTimeout(() => setHighlightedMessageId(null), 1500);
  }, []);

  // Register message ref
  const registerMessageRef = useCallback((messageId: string, element: HTMLDivElement | null) => {
    if (element) {
      messageRefs.current.set(messageId, element);
    } else {
      messageRefs.current.delete(messageId);
    }
  }, []);

  const syncReadState = useCallback(async () => {
    try {
      await markConversationAsRead(conversationId);
      void queryClient.invalidateQueries({ queryKey: queryKeys.chatUnreadCount(currentUserId) });
    } catch (error) {
      const status =
        typeof error === 'object' && error !== null && 'response' in error
          ? (error as { response?: { status?: number } }).response?.status
          : undefined;
      console.warn(
        status
          ? `Read receipt REST sync failed with ${status}; falling back to socket sync.`
          : 'Read receipt REST sync failed; falling back to socket sync.'
      );
      markChatAsRead(conversationId);
    }
  }, [conversationId, currentUserId, queryClient]);

  const { applyMessages, fetchMessages, finishMessages, handleMessagesError } =
    useChatMessageRequests({
      activeFetchKeyRef,
      autoScrollEnabledRef,
      prependMessages,
      conversationId,
      currentUserId,
      hasHydratedMessageCacheRef,
      hasMoreRef,
      messageCountRef,
      nextCursorRef,
      onLastMessageUpdate,
      setAutoScrollMode,
      setFetchError,
      setHasMore,
      setLoading,
      setLoadingMore,
      setMessages,
      setNextCursor,
    });

  // Initial load and join room
  useEffect(() => {
    if (!queryClient.getQueryData<MessagesResponse>(messagesQueryKey)) {
      const browserCache = readCachedMessages(currentUserId, conversationId);
      if (browserCache) {
        queryClient.setQueryData(messagesQueryKey, browserCache.value, {
          updatedAt: browserCache.savedAt,
        });

        hasHydratedMessageCacheRef.current = true;
      }
    }

    // Always revalidate against the server. A cached thread can be missing
    // messages that arrived while this conversation was closed (the socket
    // may have been down, or the events consumed elsewhere), so "fresh by
    // timestamp" does not mean "complete". Cached messages still paint
    // instantly; this fetch merges anything newer without a spinner.
    let active = true;
    void getMessages(conversationId, 50)
      .then(async (result) => {
        if (active) await applyMessages(result);
      })
      .catch((err) => {
        if (active) handleMessagesError(err);
      })
      .finally(() => {
        if (active) finishMessages();
      });

    joinChatRoom(conversationId);
    void syncReadState();

    return () => {
      active = false;
      leaveChatRoom(conversationId);
    };
  }, [
    conversationId,
    currentUserId,
    applyMessages,
    handleMessagesError,
    finishMessages,
    messagesQueryKey,
    queryClient,
    syncReadState,
  ]);

  // Socket event listeners
  useChatMessageEvents({
    autoScrollEnabledRef,
    conversationId,
    currentUserId,
    onLastMessageUpdate,
    processedIncomingMessageIdsRef,
    setAutoScrollMode,
    setFetchError,
    setMessages,
    setTypingUser,
    syncReadState,
  });

  useEffect(() => {
    if (confirmedMessages.length === 0) return;

    autoScrollEnabledRef.current = true;
    const frame = requestAnimationFrame(() => {
      virtuosoRef.current?.scrollToIndex({ index: 'LAST', align: 'end', behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(frame);
  }, [confirmedMessages]);

  useEffect(() => {
    const handleChatSync = (event: Event) => {
      const response = (event as CustomEvent<ChatSyncResponse>).detail;
      const syncedMessages = (response?.messages ?? []).filter(
        (message) => message.conversationId === conversationId
      );
      const changedMessages = [...syncedMessages, ...(response?.statusChanges ?? [])].filter(
        (message) => message.conversationId === conversationId
      );
      if (changedMessages.length === 0) return;

      if (syncedMessages.length > 0) {
        autoScrollEnabledRef.current = true;
        setAutoScrollMode('smooth');
      }
      setMessages((previousMessages) => mergeMessages(previousMessages, changedMessages));
    };

    window.addEventListener(CHAT_SYNC_EVENT, handleChatSync);
    return () => window.removeEventListener(CHAT_SYNC_EVENT, handleChatSync);
  }, [conversationId, currentUserId, setMessages]);

  useEffect(() => {
    const optimisticCountIncreased = optimisticMessages.length > optimisticCountRef.current;
    const uploadingCountIncreased = uploadingMessages.length > uploadingCountRef.current;

    optimisticCountRef.current = optimisticMessages.length;
    uploadingCountRef.current = uploadingMessages.length;

    if (optimisticCountIncreased || uploadingCountIncreased) {
      autoScrollEnabledRef.current = true;
      setAutoScrollMode('smooth');
    }
  }, [optimisticMessages.length, uploadingMessages.length]);

  useEffect(() => {
    if (!autoScrollMode) return;
    const frame = requestAnimationFrame(() => {
      virtuosoRef.current?.scrollToIndex({
        index: 'LAST',
        align: 'end',
        behavior: autoScrollMode === 'smooth' ? 'smooth' : 'auto',
      });
      setAutoScrollMode(null);
    });
    return () => cancelAnimationFrame(frame);
  }, [
    autoScrollMode,
    messages.length,
    optimisticMessages.length,
    uploadingMessages.length,
    typingUser,
  ]);

  const confirmedClientMessageIds = new Set(
    messages
      .map((message) => message.clientMessageId)
      .filter((clientMessageId): clientMessageId is string => Boolean(clientMessageId))
  );
  const uploadingMessageIds = new Set(uploadingMessages.map((message) => message.id));
  const visibleOptimisticMessages = optimisticMessages.filter(
    (optimisticMessage) =>
      !confirmedClientMessageIds.has(optimisticMessage.id) &&
      !uploadingMessageIds.has(optimisticMessage.id)
  );
  const virtualItems = useMemo<VirtualMessageItem[]>(() => {
    const items: VirtualMessageItem[] = [];

    let previousDate = '';
    let previousMessage: Message | null = null;

    messages.forEach((message) => {
      const dateKey = format(new Date(message.createdAt), 'yyyy-MM-dd');
      if (dateKey !== previousDate) {
        items.push({ kind: 'date', dateKey });
        previousDate = dateKey;
        previousMessage = null;
      }

      items.push({
        kind: 'message',
        message,
        showAvatar: !previousMessage || previousMessage.senderId !== message.senderId,
      });
      previousMessage = message;
    });
    visibleOptimisticMessages.forEach((message) => items.push({ kind: 'optimistic', message }));
    uploadingMessages.forEach((message) => items.push({ kind: 'uploading', message }));
    if (typingUser) items.push({ kind: 'typing' });

    return items;
  }, [messages, typingUser, uploadingMessages, visibleOptimisticMessages]);

  useEffect(() => {
    const indexes = new Map<string, number>();
    virtualItems.forEach((item, index) => {
      if (item.kind === 'message') indexes.set(item.message.id, index);
    });
    virtualItemIndexByMessageIdRef.current = indexes;
  }, [virtualItems]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (fetchError && messages.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
        <p className="text-sm text-red-600 dark:text-red-400">{fetchError}</p>
        <button
          type="button"
          onClick={() => void fetchMessages()}
          className="rounded-full border border-blue-600 px-5 py-1.5 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/40"
        >
          Retry
        </button>
      </div>
    );
  }

  // Get wallpaper styles
  const wallpaperOption = WALLPAPER_OPTIONS.find((w) => w.id === wallpaper) || WALLPAPER_OPTIONS[0];
  const wallpaperClasses = cn(wallpaperOption.color, wallpaperOption.pattern);

  const renderVirtualItem = (_index: number, item: VirtualMessageItem) => (
    <ChatVirtualRow
      item={item}
      MessageBubble={MessageBubble}
      animatedBubbles={animatedBubbles}
      availableReactions={availableReactions}
      conversationId={conversationId}
      currentUserId={currentUserId}
      formatDateSeparator={formatDateSeparator}
      highlightedMessageId={highlightedMessageId}
      onReply={onReply}
      onRetryMessage={onRetryMessage}
      otherUser={otherUser}
      registerMessageRef={registerMessageRef}
      scrollToMessage={scrollToMessage}
      setViewingImage={setViewingImage}
      setViewingVideo={setViewingVideo}
    />
  );

  return (
    <VirtualChatTimeline
      activeFetchKeyRef={activeFetchKeyRef}
      autoScrollEnabledRef={autoScrollEnabledRef}
      conversationId={conversationId}
      fetchMessages={fetchMessages}
      firstItemIndex={firstItemIndex}
      hasMore={hasMore}
      loadingMore={loadingMore}
      nextCursor={nextCursor}
      renderVirtualItem={renderVirtualItem}
      setViewingImage={setViewingImage}
      setViewingVideo={setViewingVideo}
      syncReadState={syncReadState}
      viewingImage={viewingImage}
      viewingVideo={viewingVideo}
      virtualItems={virtualItems}
      virtuosoRef={virtuosoRef}
      wallpaperClasses={wallpaperClasses}
    />
  );
}

export default function ChatMessages(props: ChatMessagesProps) {
  return (
    <ChatMessagesSession
      key={(props.currentUserId ?? '') + ':' + props.conversationId}
      {...props}
    />
  );
}
