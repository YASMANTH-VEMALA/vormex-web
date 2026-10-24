'use client';
import { type ChatSyncResponse } from '@/lib/api/chat';
import { initializeSocket } from '@/lib/socket';
import React, { useEffect } from 'react';
import type { ConversationPreviewMessage } from './ChatList.types';
import { CHAT_SYNC_EVENT } from './ChatOutboxCoordinator';

interface useConversationSocketEventsOptions {
  buildInstantConversationFromMessage: (
    conversationId: string,
    message: import('@/components/chat/ChatList.types').ConversationPreviewMessage,
    currentUserId?: string | undefined,
    selectedConversationId?: string | undefined
  ) => import('@/lib/api/chat').Conversation | null;
  currentUserId: string | undefined;
  fetchConversations: (cursor?: string | undefined, background?: boolean) => Promise<void>;
  selectedConversationId: string | undefined;
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
}
export function useConversationSocketEvents({
  buildInstantConversationFromMessage,
  currentUserId,
  fetchConversations,
  selectedConversationId,
  setConversationState,
  setTypingConversationIds,
}: useConversationSocketEventsOptions) {
  useEffect(() => {
    const socket = initializeSocket();

    // Track recently processed message IDs to prevent duplicates
    const processedMessageIds = new Set<string>();

    const handleNewMessage = (data: {
      conversationId: string;
      message: ConversationPreviewMessage;
    }) => {
      // Deduplicate: skip if already processed
      if (processedMessageIds.has(data.message.id)) {
        return;
      }
      processedMessageIds.add(data.message.id);
      // Keep set bounded
      if (processedMessageIds.size > 50) {
        const first = processedMessageIds.values().next().value;
        if (first !== undefined) processedMessageIds.delete(first);
      }

      setConversationState((previousConversations) => {
        const existingIndex = previousConversations.findIndex(
          (conversation) => conversation.id === data.conversationId
        );

        if (existingIndex >= 0) {
          // Check if this is truly a new message (not already displayed)
          const existingConv = previousConversations[existingIndex];
          if (existingConv.lastMessage?.id === data.message.id) {
            return previousConversations; // Same message, skip update
          }

          // Update existing conversation and move to top
          const updated = [...previousConversations];
          const conv = { ...updated[existingIndex] };
          conv.lastMessage = {
            id: data.message.id,
            content: data.message.content,
            contentType: data.message.contentType,
            senderId: data.message.senderId,
            status: data.message.status,
            createdAt: data.message.createdAt,
          };
          conv.lastMessageAt = data.message.createdAt;

          // Increment unread if not the sender
          if (
            data.message.senderId !== currentUserId &&
            data.conversationId !== selectedConversationId
          ) {
            conv.unreadCount = (conv.unreadCount || 0) + 1;
          }

          updated.splice(existingIndex, 1);
          return [conv, ...updated];
        }

        const instantConversation = buildInstantConversationFromMessage(
          data.conversationId,
          data.message,
          currentUserId,
          selectedConversationId
        );

        // Refresh in the background for complete participant metadata, but do not
        // make the user wait for REST before the new chat appears.
        void fetchConversations(undefined, true);
        return instantConversation
          ? [instantConversation, ...previousConversations]
          : previousConversations;
      });
    };

    // Handle chat:notification which has a slightly different structure
    const handleChatNotification = (data: {
      type: string;
      conversationId: string;
      message: ConversationPreviewMessage;
    }) => {
      if (data.type === 'new_message') {
        handleNewMessage({ conversationId: data.conversationId, message: data.message });
      }
    };

    const handleMessagesRead = (data: { conversationId: string; readBy?: string }) => {
      if (data.readBy && data.readBy !== currentUserId) {
        return;
      }

      setConversationState((previousConversations) =>
        previousConversations.map((c) =>
          c.id === data.conversationId ? { ...c, unreadCount: 0 } : c
        )
      );
    };

    const handleConfirmedMessage = (event: Event) => {
      const detail = (
        event as CustomEvent<{
          conversationId: string;
          message: ConversationPreviewMessage;
        }>
      ).detail;

      if (!detail?.conversationId || !detail?.message) {
        return;
      }

      handleNewMessage(detail);
    };

    const handleChatSync = (event: Event) => {
      const response = (event as CustomEvent<ChatSyncResponse>).detail;
      if (!response) return;
      const unavailableIds = new Set(response.unavailableConversationIds ?? []);
      if (unavailableIds.size > 0) {
        setConversationState((previousConversations) =>
          previousConversations.filter((conversation) => !unavailableIds.has(conversation.id))
        );
        setTypingConversationIds((previousIds) => {
          const nextIds = new Set(previousIds);
          unavailableIds.forEach((conversationId) => nextIds.delete(conversationId));
          return nextIds;
        });
      }
      const authoritativeConversationIds = new Set(
        response.conversations.map((conversation) => conversation.id)
      );

      if (response.conversations.length > 0 || response.statusChanges.length > 0) {
        setConversationState((previousConversations) => {
          const conversationMap = new Map(
            previousConversations
              .filter((conversation) => !unavailableIds.has(conversation.id))
              .map((conversation) => [conversation.id, conversation])
          );
          response.conversations.forEach((conversation) => {
            conversationMap.set(conversation.id, conversation);
          });
          response.statusChanges.forEach((message) => {
            const conversation = conversationMap.get(message.conversationId);
            if (conversation?.lastMessage?.id === message.id) {
              conversationMap.set(message.conversationId, {
                ...conversation,
                lastMessage: { ...conversation.lastMessage, status: message.status },
              });
            }
          });
          return Array.from(conversationMap.values()).sort(
            (left, right) =>
              Date.parse(right.lastMessageAt || right.updatedAt) -
              Date.parse(left.lastMessageAt || left.updatedAt)
          );
        });
      }

      response.messages.forEach((message) => {
        if (!authoritativeConversationIds.has(message.conversationId)) {
          handleNewMessage({ conversationId: message.conversationId, message });
        }
      });
    };

    socket.on('chat:new_message', handleNewMessage);
    socket.on('chat:notification', handleChatNotification);
    socket.on('chat:messages_read', handleMessagesRead);
    window.addEventListener(
      'vormex:chat-message-confirmed',
      handleConfirmedMessage as EventListener
    );
    window.addEventListener(CHAT_SYNC_EVENT, handleChatSync);

    return () => {
      socket.off('chat:new_message', handleNewMessage);
      socket.off('chat:notification', handleChatNotification);
      socket.off('chat:messages_read', handleMessagesRead);
      window.removeEventListener(
        'vormex:chat-message-confirmed',
        handleConfirmedMessage as EventListener
      );
      window.removeEventListener(CHAT_SYNC_EVENT, handleChatSync);
    };
  }, [
    buildInstantConversationFromMessage,
    currentUserId,
    fetchConversations,
    selectedConversationId,
    setConversationState,
    setTypingConversationIds,
  ]);
}
