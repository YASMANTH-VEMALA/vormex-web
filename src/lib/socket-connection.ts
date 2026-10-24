import { registerSocketHandlers } from './socket-handlers';
import { ChatSocketError, waitForSocketConnect, waitForSocketReady } from './socket-transport';
export { ChatSocketError } from './socket-transport';
export type {
  ChatSendAck,
  ChatSendPayload,
  ReactionSummary,
  ReactionType,
  SocketEventHandlers,
  SocketObject,
} from './socket.types';

import type { ChatSendAck, ChatSendPayload, SocketEventHandlers } from './socket.types';
// Socket.IO Client for Real-time Features

import { getSocketTicket, type SocketTicketResponse } from '@/lib/api/auth';
import type { Message } from '@/lib/api/chat';
import { SOCKET_URL } from '@/lib/utils/constants';
import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;
let lifecycleHandlersRegistered = false;
let socketAuthenticated = false;
let authenticatedUserId: string | null = null;
const joinedChatRooms = new Set<string>();
let feedRoomJoined = false;

const CHAT_SEND_ACK_TIMEOUT_MS = 3000;
const SOCKET_TICKET_REFRESH_SKEW_MS = 10_000;
const DELIVERED_ACK_CACHE_LIMIT = 200;
const acknowledgedDeliveredMessageIds = new Set<string>();
export const SAFETY_STATE_CHANGED_EVENT = 'vormex:safety-state-changed';
let cachedSocketTicket: SocketTicketResponse | null = null;
let socketTicketRequest: Promise<SocketTicketResponse> | null = null;

function hasUsableSocketTicket(
  ticket: SocketTicketResponse | null
): ticket is SocketTicketResponse {
  if (!ticket?.token || !ticket.expiresAt) {
    return false;
  }

  const expiresAt = Date.parse(ticket.expiresAt);
  return Number.isFinite(expiresAt) && expiresAt - Date.now() > SOCKET_TICKET_REFRESH_SKEW_MS;
}

async function resolveSocketTicket(): Promise<SocketTicketResponse> {
  if (hasUsableSocketTicket(cachedSocketTicket)) {
    return cachedSocketTicket;
  }

  if (!socketTicketRequest) {
    socketTicketRequest = getSocketTicket()
      .then((ticket) => {
        cachedSocketTicket = ticket;
        return ticket;
      })
      .finally(() => {
        socketTicketRequest = null;
      });
  }

  return socketTicketRequest;
}

/**
 * Acknowledge delivery of a chat message addressed to the authenticated user.
 * Deduped per messageId so reconnects/duplicate events don't re-emit.
 */
function acknowledgeMessageDelivered(
  sock: Socket,
  conversationId?: string,
  message?: Message
): void {
  if (!conversationId || !message?.id || !authenticatedUserId) {
    return;
  }

  if (message.receiverId !== authenticatedUserId || message.senderId === authenticatedUserId) {
    return;
  }

  if (acknowledgedDeliveredMessageIds.has(message.id)) {
    return;
  }

  acknowledgedDeliveredMessageIds.add(message.id);
  if (acknowledgedDeliveredMessageIds.size > DELIVERED_ACK_CACHE_LIMIT) {
    const first = acknowledgedDeliveredMessageIds.values().next().value;
    if (first !== undefined) acknowledgedDeliveredMessageIds.delete(first);
  }

  sock.emit('chat:delivered', { conversationId, messageId: message.id });
}

function ensureSocketLifecycle(sock: Socket): void {
  if (lifecycleHandlersRegistered) {
    return;
  }

  lifecycleHandlersRegistered = true;

  sock.on('connect', () => {
    socketAuthenticated = false;
    console.log('✅ Socket connected:', sock.id);

    if (feedRoomJoined) {
      sock.emit('feed:join');
    }
  });

  sock.on('socket:authenticated', (data?: { userId?: string }) => {
    socketAuthenticated = true;
    if (data?.userId) {
      authenticatedUserId = data.userId;
    }
    joinedChatRooms.forEach((conversationId) => {
      sock.emit('chat:join', { conversationId });
    });
  });

  // Delivered acks: whenever a message addressed to the current user arrives,
  // tell the server so the sender's ticks flip from SENT to DELIVERED.
  sock.on('chat:new_message', (data?: { conversationId?: string; message?: Message }) => {
    acknowledgeMessageDelivered(sock, data?.conversationId, data?.message);
  });

  sock.on('chat:notification', (data?: { conversationId?: string; message?: Message }) => {
    acknowledgeMessageDelivered(sock, data?.conversationId, data?.message);
  });

  sock.on('safety:state_changed', (data?: { reason?: string; occurredAt?: string }) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(SAFETY_STATE_CHANGED_EVENT, { detail: data ?? {} }));
    }
  });

  sock.on('socket:unauthenticated', () => {
    socketAuthenticated = false;
  });

  sock.on('disconnect', (reason) => {
    socketAuthenticated = false;
    console.log('❌ Socket disconnected:', reason);
  });

  sock.on('connect_error', (error) => {
    cachedSocketTicket = null;
    const message = (error?.message || '').toLowerCase();
    if (message.includes('timeout')) {
      console.warn('Socket connection timeout. Verify backend is running on:', SOCKET_URL);
      return;
    }
    console.error('Socket connection error:', error);
  });
}

function getOrCreateSocket(): Socket {
  if (!socket) {
    socket = io(SOCKET_URL, {
      withCredentials: true,
      // REST runs through vormex.in/api, while Socket.IO connects directly to
      // Render. Fetch a short-lived ticket through the authenticated API proxy
      // for every new Engine.IO session so the cross-origin handshake is valid.
      auth: async (callback) => {
        try {
          const ticket = await resolveSocketTicket();
          callback({ token: ticket.token });
        } catch (error) {
          console.error('Could not obtain realtime connection ticket:', error);
          callback({ token: '' });
        }
      },
      transports: ['websocket', 'polling'],
      upgrade: true,
      rememberUpgrade: true,
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      randomizationFactor: 0.25,
      timeout: 10000,
    });
    ensureSocketLifecycle(socket);
  } else {
    if (!socket.connected) {
      socket.connect();
    }
  }

  return socket;
}

/**
 * Initialize Socket.IO connection
 */
export function initializeSocket(handlers?: SocketEventHandlers): Socket {
  const sock = getOrCreateSocket();

  if (handlers) {
    registerSocketHandlers(sock, handlers);
  }

  return sock;
}

/**
 * True only when chat can be sent over realtime without any connect/auth wait.
 */
export function isChatSocketReady(): boolean {
  return Boolean(socket?.connected && socketAuthenticated);
}

/**
 * Get the current socket instance
 */
export function getSocket(): Socket | null {
  return socket;
}

/**
 * Remove specific event handlers from the socket
 */
export function removeSocketHandlers(eventNames: string[]): void {
  if (!socket) return;
  eventNames.forEach((event) => {
    socket?.off(event);
  });
}

/**
 * Disconnect socket
 */
export function disconnectSocket(): void {
  if (socket) {
    socket.disconnect();
    socket = null;
    lifecycleHandlersRegistered = false;
    socketAuthenticated = false;
    authenticatedUserId = null;
    cachedSocketTicket = null;
    socketTicketRequest = null;
    acknowledgedDeliveredMessageIds.clear();
    joinedChatRooms.clear();
  }
}

/**
 * Join the global feed room for scalable post fanout
 */
export function joinFeedRoom(): void {
  feedRoomJoined = true;
  getOrCreateSocket().emit('feed:join');
}

/**
 * Leave the global feed room
 */
export function leaveFeedRoom(): void {
  feedRoomJoined = false;
  getOrCreateSocket().emit('feed:leave');
}

// ============================================
// CHAT SOCKET FUNCTIONS
// ============================================

/**
 * Join a chat conversation room
 */
export function joinChatRoom(conversationId: string): void {
  joinedChatRooms.add(conversationId);
  const sock = getOrCreateSocket();
  if (sock.connected && socketAuthenticated) {
    sock.emit('chat:join', { conversationId });
  }
}

/**
 * Leave a chat conversation room
 */
export function leaveChatRoom(conversationId: string): void {
  joinedChatRooms.delete(conversationId);
  if (socket?.connected && socketAuthenticated) {
    socket.emit('chat:leave', { conversationId });
  }
}

/**
 * Send a chat message via WebSocket
 */
export async function sendChatMessage(data: ChatSendPayload): Promise<Message> {
  const existingSocket = socket;
  const sock = getOrCreateSocket();

  // Once the application has created its long-lived socket, do not put each
  // message behind another connection grace period. The durable outbox can
  // fail over to REST immediately while the socket reconnects in parallel.
  const ready = existingSocket
    ? sock.connected && socketAuthenticated
    : (await waitForSocketConnect(sock)) &&
      (await waitForSocketReady(sock, {
        get authenticated() {
          return socketAuthenticated;
        },
        set authenticated(value: boolean) {
          socketAuthenticated = value;
        },
      }));

  if (!ready) {
    throw new Error('Realtime connection unavailable');
  }

  return new Promise((resolve, reject) => {
    sock
      .timeout(CHAT_SEND_ACK_TIMEOUT_MS)
      .emit('chat:send_message', data, (error: Error | null, response?: ChatSendAck) => {
        if (error) {
          reject(new Error('Realtime send acknowledgement timed out'));
          return;
        }

        if (response?.ok && response.message) {
          resolve(response.message);
          return;
        }

        reject(
          new ChatSocketError(
            response?.error || 'Failed to send message',
            response?.code,
            response?.retryable
          )
        );
      });
  });
}

/**
 * Send typing indicator for chat
 */
export function sendChatTyping(conversationId: string, isTyping: boolean): void {
  const sock = getOrCreateSocket();
  if (sock.connected && socketAuthenticated) {
    sock.emit('chat:typing', { conversationId, isTyping });
  }
}

/**
 * Request fresh presence for a chat peer; server replies with `user:status`
 * to this socket only.
 */
export function checkUserStatus(userId: string): void {
  const sock = getOrCreateSocket();
  if (sock.connected && socketAuthenticated) {
    sock.emit('user:check_status', { userId });
  }
}

/**
 * Mark chat messages as read
 */
export function markChatAsRead(conversationId: string): void {
  const sock = getOrCreateSocket();
  if (sock.connected && socketAuthenticated) {
    sock.emit('chat:mark_read', { conversationId });
  }
}

/**
 * Delete a chat message
 */
export function deleteChatMessage(
  messageId: string,
  conversationId: string,
  forEveryone?: boolean
): void {
  getOrCreateSocket().emit('chat:delete_message', { messageId, conversationId, forEveryone });
}

/**
 * Edit a chat message
 */
export function editChatMessage(messageId: string, conversationId: string, content: string): void {
  getOrCreateSocket().emit('chat:edit_message', { messageId, conversationId, content });
}

/**
 * React to a chat message
 */
export function reactToChatMessage(messageId: string, conversationId: string, emoji: string): void {
  getOrCreateSocket().emit('chat:react', { messageId, conversationId, emoji });
}

// ============================================
// REEL SOCKET FUNCTIONS
// ============================================

/**
 * Join a reel room for real-time updates
 */
export function joinReelRoom(reelId: string): void {
  socket?.emit('reel:join', { reelId });
}

/**
 * Leave a reel room
 */
export function leaveReelRoom(reelId: string): void {
  socket?.emit('reel:leave', { reelId });
}

/**
 * Like a reel via WebSocket
 */
export function likeReel(reelId: string): void {
  socket?.emit('reel:like', { reelId });
}

/**
 * Create a reel comment via WebSocket
 */
export function createReelComment(
  reelId: string,
  content: string,
  parentId?: string,
  mentions?: string[]
): void {
  socket?.emit('reel:comment', { reelId, content, parentId, mentions });
}

// ============================================
// ARCADE SOCKET FUNCTIONS
// ============================================

/**
 * Join a social arcade room for live updates.
 */
export function joinArcadeRoomSocket(data: { roomId?: string; inviteCode?: string }): void {
  getOrCreateSocket().emit('arcade:join_room', data);
}

/**
 * Leave a social arcade room without abandoning the persisted room.
 */
export function leaveArcadeRoomSocket(roomId: string): void {
  getOrCreateSocket().emit('arcade:leave_room', { roomId });
}

/**
 * Toggle ready state over Socket.IO.
 */
export function sendArcadeReady(roomId: string, ready: boolean): void {
  getOrCreateSocket().emit('arcade:ready', { roomId, ready });
}

/**
 * Send gameplay input or compact state snapshots to the current arcade room.
 */
export function sendArcadeInput(roomId: string, type: string, data: unknown): void {
  getOrCreateSocket().emit('arcade:input', { roomId, type, data });
}
