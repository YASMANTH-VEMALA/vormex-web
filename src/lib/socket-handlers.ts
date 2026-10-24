import type { Socket } from 'socket.io-client';
import type { SocketEventHandlers } from './socket.types';

function bindSocketHandler<T extends (...args: never[]) => void>(
  sock: Socket,
  event: string,
  handler?: T
): void {
  if (!handler) {
    return;
  }

  const listener = handler as unknown as (...args: unknown[]) => void;
  sock.off(event, listener);
  sock.on(event, listener);
}

export function registerSocketHandlers(sock: Socket, handlers: SocketEventHandlers): void {
  bindSocketHandler(sock, 'connect', handlers.onConnect);
  bindSocketHandler(sock, 'disconnect', handlers.onDisconnect);

  bindSocketHandler(sock, 'error', handlers.onError);

  bindSocketHandler(sock, 'post:created', handlers.onPostCreated);
  bindSocketHandler(sock, 'post:liked', handlers.onPostLiked);
  bindSocketHandler(sock, 'post:reacted', handlers.onPostReacted);
  bindSocketHandler(sock, 'comment:created', handlers.onCommentCreated);
  bindSocketHandler(sock, 'comment:liked', handlers.onCommentLiked);
  bindSocketHandler(sock, 'poll:updated', handlers.onPollUpdated);
  bindSocketHandler(sock, 'notification:comment', handlers.onNotificationComment);
  bindSocketHandler(sock, 'notification:reaction', handlers.onNotificationReaction);
  bindSocketHandler(sock, 'notification:mention', handlers.onNotificationMention);
  bindSocketHandler(sock, 'notification:like', handlers.onNotificationLike);
  bindSocketHandler(sock, 'notification:comment_like', handlers.onNotificationCommentLike);
  bindSocketHandler(sock, 'user:online', handlers.onUserOnline);
  bindSocketHandler(sock, 'user:offline', handlers.onUserOffline);
  bindSocketHandler(sock, 'user:location_changed', handlers.onUserLocationChanged);
  bindSocketHandler(sock, 'location:request', handlers.onLocationRequest);
  bindSocketHandler(sock, 'story:created', handlers.onStoryCreated);
  bindSocketHandler(sock, 'story:deleted', handlers.onStoryDeleted);
  bindSocketHandler(sock, 'story:viewed', handlers.onStoryViewed);
  bindSocketHandler(sock, 'story:reaction', handlers.onStoryReaction);
  bindSocketHandler(sock, 'story:reply', handlers.onStoryReply);
  bindSocketHandler(sock, 'chat:new_message', handlers.onChatNewMessage);
  bindSocketHandler(sock, 'chat:notification', handlers.onChatNotification);
  bindSocketHandler(sock, 'chat:user_typing', handlers.onChatUserTyping);
  bindSocketHandler(sock, 'chat:messages_delivered', handlers.onChatMessagesDelivered);
  bindSocketHandler(sock, 'chat:messages_read', handlers.onChatMessagesRead);
  bindSocketHandler(sock, 'chat:message_deleted', handlers.onChatMessageDeleted);
  bindSocketHandler(sock, 'chat:message_edited', handlers.onChatMessageEdited);
  bindSocketHandler(sock, 'chat:message_reaction', handlers.onChatMessageReaction);
  bindSocketHandler(sock, 'chat:message_delivered', handlers.onChatMessageDelivered);
  bindSocketHandler(sock, 'reel:engagement_update', handlers.onReelEngagementUpdate);
  bindSocketHandler(sock, 'notification:new', handlers.onNotificationNew);
}
