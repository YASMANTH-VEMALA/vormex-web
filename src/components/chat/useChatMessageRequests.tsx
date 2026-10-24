'use client';
import { getMessages, MessagesResponse } from '@/lib/api/chat';
import { isTerminalSafetyError } from '@/lib/api/errors';
import { mergeMessages, normalizeMessage } from '@/lib/chat/messageCache';
import { SAFETY_STATE_CHANGED_EVENT } from '@/lib/socket';
import { handleApiError } from '@/lib/utils/errorHandler';
import type * as React from 'react';
import { useCallback } from 'react';
interface useChatMessageRequestsOptions {
  activeFetchKeyRef: React.RefObject<string | null>;
  autoScrollEnabledRef: React.RefObject<boolean>;
  prependMessages: (messages: import('@/lib/api/chat').Message[]) => void;
  conversationId: string;
  currentUserId: string;

  hasHydratedMessageCacheRef: React.RefObject<boolean>;
  hasMoreRef: React.RefObject<boolean>;
  messageCountRef: React.RefObject<number>;
  nextCursorRef: React.RefObject<string | undefined>;
  onLastMessageUpdate: ((message: string) => void) | undefined;
  setAutoScrollMode: React.Dispatch<
    React.SetStateAction<import('@/components/chat/ChatMessages.types').AutoScrollMode>
  >;
  setFetchError: React.Dispatch<React.SetStateAction<string | null>>;

  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingMore: React.Dispatch<React.SetStateAction<boolean>>;
  setMessages: React.Dispatch<React.SetStateAction<import('@/lib/api/chat').Message[]>>;
  setNextCursor: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export function useChatMessageRequests({
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
}: useChatMessageRequestsOptions) {
  const applyMessages = useCallback(
    async (result: MessagesResponse, cursor?: string) => {
      const normalizedMessages = result.messages.map(normalizeMessage);

      if (cursor) {
        prependMessages(normalizedMessages);
      } else {
        setMessages((previousMessages) => mergeMessages(previousMessages, normalizedMessages));
        hasHydratedMessageCacheRef.current = true;
        // Snap to the newest message unless the user already scrolled up to
        // read history while this fetch was in flight.
        if (autoScrollEnabledRef.current) {
          setAutoScrollMode('instant');
        }

        // Find the last message from the other user for AI assistant
        if (onLastMessageUpdate) {
          const lastFromOther = [...result.messages]
            .reverse()
            .find((m) => m.senderId !== currentUserId && m.content);
          if (lastFromOther) {
            onLastMessageUpdate(lastFromOther.content);
          }
        }
      }

      // An initial refresh contains only the newest page. If the browser cache
      // already holds older pages, retain its oldest cursor so upward paging
      // continues behind those cached rows instead of skipping history.
      const preserveCachedHistoryCursor =
        !cursor &&
        messageCountRef.current > normalizedMessages.length &&
        Boolean(nextCursorRef.current);
      setHasMore(preserveCachedHistoryCursor ? hasMoreRef.current : result.hasMore);
      setNextCursor(preserveCachedHistoryCursor ? nextCursorRef.current : result.nextCursor);
    },
    [
      autoScrollEnabledRef,
      currentUserId,
      hasHydratedMessageCacheRef,
      hasMoreRef,
      messageCountRef,
      nextCursorRef,
      onLastMessageUpdate,
      prependMessages,
      setAutoScrollMode,
      setHasMore,
      setMessages,
      setNextCursor,
    ]
  );

  const handleMessagesError = useCallback(
    (err: unknown, cursor?: string) => {
      if (isTerminalSafetyError(err)) {
        setFetchError('This conversation is unavailable.');
        window.dispatchEvent(
          new CustomEvent(SAFETY_STATE_CHANGED_EVENT, {
            detail: {
              reason: 'interaction_policy_changed',
              affectedConversationIds: [conversationId],
            },
          })
        );
        return;
      }
      setFetchError(handleApiError(err));
      if (cursor) setHasMore(false);
    },
    [conversationId, setFetchError, setHasMore]
  );

  const finishMessages = useCallback(() => {
    activeFetchKeyRef.current = null;
    setLoading(false);
    setLoadingMore(false);
  }, [activeFetchKeyRef, setLoading, setLoadingMore]);

  const fetchMessages = useCallback(
    async (cursor?: string) => {
      const fetchKey = cursor ?? '__initial__';
      if (activeFetchKeyRef.current === fetchKey) {
        return;
      }

      try {
        activeFetchKeyRef.current = fetchKey;
        setFetchError(null);

        if (cursor) {
          setLoadingMore(true);
        } else if (!hasHydratedMessageCacheRef.current || messageCountRef.current === 0) {
          setLoading(true);
        }

        const result = await getMessages(conversationId, 50, cursor);
        await applyMessages(result, cursor);
      } catch (err: unknown) {
        handleMessagesError(err, cursor);
      } finally {
        finishMessages();
      }
    },
    [
      activeFetchKeyRef,
      setFetchError,
      hasHydratedMessageCacheRef,
      messageCountRef,
      conversationId,
      applyMessages,
      setLoadingMore,
      setLoading,
      handleMessagesError,
      finishMessages,
    ]
  );
  return { applyMessages, fetchMessages, finishMessages, handleMessagesError };
}
