'use client';
import { initializeSocket } from '@/lib/socket';
import React, { useEffect } from 'react';

interface useConversationTypingOptions {
  TYPING_INDICATOR_TIMEOUT_MS: 4000;
  currentUserId: string | undefined;
  setConversationState: (
    updater:
      | import('@/lib/api/chat').Conversation[]
      | ((
          previousConversations: import('@/lib/api/chat').Conversation[]
        ) => import('@/lib/api/chat').Conversation[]),
    overrides?:
      Pick<import('@/lib/api/chat').ConversationsResponse, 'hasMore' | 'nextCursor'> | undefined
  ) => void;
  setTypingConversationIds: React.Dispatch<React.SetStateAction<Set<string>>>;
  typingTimeoutsRef: React.RefObject<Map<string, NodeJS.Timeout>>;
}
export function useConversationTyping({
  TYPING_INDICATOR_TIMEOUT_MS,
  currentUserId,
  setConversationState,
  setTypingConversationIds,
  typingTimeoutsRef,
}: useConversationTypingOptions) {
  useEffect(() => {
    const socket = initializeSocket();
    const typingTimeouts = typingTimeoutsRef.current;

    const clearTypingTimeout = (conversationId: string) => {
      const timeout = typingTimeouts.get(conversationId);
      if (timeout) {
        clearTimeout(timeout);
        typingTimeouts.delete(conversationId);
      }
    };

    const stopTyping = (conversationId: string) => {
      clearTypingTimeout(conversationId);
      setTypingConversationIds((previousIds) => {
        if (!previousIds.has(conversationId)) {
          return previousIds;
        }
        const nextIds = new Set(previousIds);
        nextIds.delete(conversationId);
        return nextIds;
      });
    };

    const handleUserTyping = (data: {
      conversationId: string;
      userId: string;
      isTyping: boolean;
    }) => {
      if (!data?.conversationId || data.userId === currentUserId) {
        return;
      }

      if (!data.isTyping) {
        stopTyping(data.conversationId);
        return;
      }

      // Safety timeout in case the stop event never arrives
      clearTypingTimeout(data.conversationId);
      typingTimeouts.set(
        data.conversationId,
        setTimeout(() => stopTyping(data.conversationId), TYPING_INDICATOR_TIMEOUT_MS)
      );

      setTypingConversationIds((previousIds) => {
        if (previousIds.has(data.conversationId)) {
          return previousIds;
        }
        const nextIds = new Set(previousIds);
        nextIds.add(data.conversationId);
        return nextIds;
      });
    };

    const applyPresence = (userId: string, isOnline: boolean, lastActiveAt?: string) => {
      setConversationState((previousConversations) => {
        let changed = false;
        const nextConversations = previousConversations.map((conversation) => {
          const other = conversation.otherParticipant;
          if (other?.id !== userId || other.isOnline === isOnline) {
            return conversation;
          }
          changed = true;
          return {
            ...conversation,
            otherParticipant: {
              ...other,
              isOnline,
              lastActiveAt: lastActiveAt ?? other.lastActiveAt,
            },
          };
        });
        return changed ? nextConversations : previousConversations;
      });
    };

    const handleUserOnline = (data: { userId: string; lastActiveAt?: string }) => {
      applyPresence(data.userId, true, data.lastActiveAt);
    };

    const handleUserOffline = (data: { userId: string; lastActiveAt?: string }) => {
      applyPresence(data.userId, false, data.lastActiveAt);
    };

    socket.on('chat:user_typing', handleUserTyping);
    socket.on('user:online', handleUserOnline);
    socket.on('user:offline', handleUserOffline);

    return () => {
      socket.off('chat:user_typing', handleUserTyping);
      socket.off('user:online', handleUserOnline);
      socket.off('user:offline', handleUserOffline);
      typingTimeouts.forEach((timeout) => clearTimeout(timeout));
      typingTimeouts.clear();
    };
  }, [
    TYPING_INDICATOR_TIMEOUT_MS,
    currentUserId,
    setConversationState,
    setTypingConversationIds,
    typingTimeoutsRef,
  ]);
}
