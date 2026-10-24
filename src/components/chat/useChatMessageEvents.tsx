'use client';
import { Message } from '@/lib/api/chat';
import { mergeMessages } from '@/lib/chat/messageCache';
import { initializeSocket, SAFETY_STATE_CHANGED_EVENT } from '@/lib/socket';
import React, { useEffect } from 'react';

interface useChatMessageEventsOptions {
  autoScrollEnabledRef: React.RefObject<boolean>;
  conversationId: string;
  currentUserId: string;
  onLastMessageUpdate: ((message: string) => void) | undefined;
  processedIncomingMessageIdsRef: React.RefObject<Set<string>>;
  setAutoScrollMode: React.Dispatch<
    React.SetStateAction<import('@/components/chat/ChatMessages.types').AutoScrollMode>
  >;
  setFetchError: React.Dispatch<React.SetStateAction<string | null>>;
  setMessages: React.Dispatch<React.SetStateAction<import('@/lib/api/chat').Message[]>>;
  setTypingUser: React.Dispatch<React.SetStateAction<string | null>>;
  syncReadState: () => Promise<void>;
}
export function useChatMessageEvents({
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
}: useChatMessageEventsOptions) {
  useEffect(() => {
    const socket = initializeSocket();

    const appendMessage = (incomingMessage: Message) => {
      autoScrollEnabledRef.current = true;
      setMessages((previousMessages) => mergeMessages(previousMessages, [incomingMessage]));
      setAutoScrollMode('smooth');
    };

    const handleNewMessage = (data: { conversationId: string; message: Message }) => {
      if (data.conversationId === conversationId) {
        if (data.message.id) {
          if (processedIncomingMessageIdsRef.current.has(data.message.id)) {
            return;
          }
          processedIncomingMessageIdsRef.current.add(data.message.id);
          if (processedIncomingMessageIdsRef.current.size > 100) {
            const first = processedIncomingMessageIdsRef.current.values().next().value;
            if (first) processedIncomingMessageIdsRef.current.delete(first);
          }
        }

        appendMessage(data.message);

        // Mark as read if from other user
        if (data.message.senderId !== currentUserId) {
          void syncReadState();
          // Update last received message for AI assistant
          if (data.message.content && onLastMessageUpdate) {
            onLastMessageUpdate(data.message.content);
          }
        }
      }
    };

    let typingExpiryTimer: ReturnType<typeof setTimeout> | null = null;

    const handleTyping = (data: { conversationId: string; userId: string; isTyping: boolean }) => {
      if (data.conversationId === conversationId && data.userId !== currentUserId) {
        if (typingExpiryTimer) {
          clearTimeout(typingExpiryTimer);
          typingExpiryTimer = null;
        }
        setTypingUser(data.isTyping ? data.userId : null);
        if (data.isTyping) {
          // The sender heartbeats "typing" every ~2s while active; if the
          // heartbeats stop (missed stop event, disconnect) the indicator
          // must expire on its own instead of sticking forever.
          typingExpiryTimer = setTimeout(() => setTypingUser(null), 4500);
        }
      }
    };

    const handleMessagesRead = (data: { conversationId: string; readBy: string; readAt: Date }) => {
      if (data.conversationId === conversationId && data.readBy !== currentUserId) {
        setMessages((prev) =>
          prev.map((m) =>
            m.senderId === currentUserId && m.status !== 'READ'
              ? { ...m, status: 'READ', readAt: new Date(data.readAt).toISOString() }
              : m
          )
        );
      }
    };

    const handleMessagesDelivered = (data: { conversationId: string; deliveredAt: Date }) => {
      if (data.conversationId === conversationId) {
        setMessages((prev) =>
          prev.map((m) =>
            m.senderId === currentUserId && m.status === 'SENT'
              ? { ...m, status: 'DELIVERED', deliveredAt: new Date(data.deliveredAt).toISOString() }
              : m
          )
        );
      }
    };

    const handleError = (data: unknown) => {
      const payload =
        typeof data === 'string'
          ? { message: data }
          : (data as {
              message?: string;
              error?: string;
              code?: string;
              retryable?: boolean;
            } | null);
      const message = payload?.message || payload?.error || 'Chat is temporarily unavailable.';
      if (payload?.code === 'user_blocked' || payload?.code === 'resource_unavailable') {
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
      setFetchError(message);
    };

    const handleMessageDeleted = (data: {
      messageId: string;
      conversationId: string;
      forEveryone: boolean;
    }) => {
      if (data.conversationId === conversationId) {
        if (data.forEveryone) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === data.messageId
                ? { ...m, isDeleted: true, content: 'This message was deleted' }
                : m
            )
          );
        } else {
          setMessages((prev) => prev.filter((m) => m.id !== data.messageId));
        }
      }
    };

    const handleMessageEdited = (data: {
      messageId: string;
      conversationId: string;
      content: string;
      editedAt: Date;
    }) => {
      if (data.conversationId === conversationId) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === data.messageId
              ? {
                  ...m,
                  content: data.content,
                  updatedAt: String(data.editedAt),
                  editedAt: String(data.editedAt),
                  isEdited: true,
                }
              : m
          )
        );
      }
    };

    const handleReaction = (data: {
      messageId: string;
      conversationId: string;
      userId: string;
      emoji: string;
      action: string;
    }) => {
      if (data.conversationId === conversationId) {
        setMessages((prev) =>
          prev.map((m) => {
            if (m.id !== data.messageId) return m;

            let reactions = [...(m.reactions || [])];

            if (data.action === 'removed') {
              reactions = reactions.filter((r) => !(r.userId === data.userId));
            } else if (data.action === 'added') {
              reactions.push({
                id: `temp-${Date.now()}`,
                userId: data.userId,
                emoji: data.emoji,
                user: { id: data.userId, username: '', name: '' },
              });
            } else if (data.action === 'updated') {
              const index = reactions.findIndex((r) => r.userId === data.userId);
              if (index >= 0) {
                reactions[index] = { ...reactions[index], emoji: data.emoji };
              }
            }

            return { ...m, reactions };
          })
        );
      }
    };

    // Handle chat:notification (sent to user's personal room as fallback)
    const handleChatNotification = (data: {
      type: string;
      conversationId: string;
      message: Message;
    }) => {
      if (data.type === 'new_message' && data.conversationId === conversationId) {
        if (data.message.id) {
          if (processedIncomingMessageIdsRef.current.has(data.message.id)) {
            return;
          }
          processedIncomingMessageIdsRef.current.add(data.message.id);
          if (processedIncomingMessageIdsRef.current.size > 100) {
            const first = processedIncomingMessageIdsRef.current.values().next().value;
            if (first) processedIncomingMessageIdsRef.current.delete(first);
          }
        }

        appendMessage(data.message);

        // Mark as read if from other user
        if (data.message.senderId !== currentUserId) {
          void syncReadState();
          if (data.message.content && onLastMessageUpdate) {
            onLastMessageUpdate(data.message.content);
          }
        }
      }
    };

    socket.on('chat:new_message', handleNewMessage);
    socket.on('chat:notification', handleChatNotification);
    socket.on('chat:user_typing', handleTyping);
    socket.on('chat:messages_read', handleMessagesRead);
    socket.on('chat:messages_delivered', handleMessagesDelivered);
    socket.on('chat:message_deleted', handleMessageDeleted);
    socket.on('chat:message_edited', handleMessageEdited);
    socket.on('chat:message_reaction', handleReaction);
    socket.on('error', handleError);

    return () => {
      if (typingExpiryTimer) {
        clearTimeout(typingExpiryTimer);
      }
      socket.off('chat:new_message', handleNewMessage);
      socket.off('chat:notification', handleChatNotification);
      socket.off('chat:user_typing', handleTyping);
      socket.off('chat:messages_read', handleMessagesRead);
      socket.off('chat:messages_delivered', handleMessagesDelivered);
      socket.off('chat:message_deleted', handleMessageDeleted);
      socket.off('chat:message_edited', handleMessageEdited);
      socket.off('chat:message_reaction', handleReaction);
      socket.off('error', handleError);
    };
  }, [
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
  ]);
}
