import { getSocket } from './socket-connection';
import type { ReactionType } from './socket.types';

export function joinPostRoom(postId: string): void {
  getSocket()?.emit('post:join', { postId });
}

export function leavePostRoom(postId: string): void {
  getSocket()?.emit('post:leave', { postId });
}

export function likePost(postId: string): void {
  getSocket()?.emit('post:like', { postId });
}

export function reactToPost(postId: string, reactionType: ReactionType): void {
  getSocket()?.emit('post:react', { postId, reactionType });
}

export function createComment(
  postId: string,
  content: string,
  parentId?: string,
  mentions?: string[]
): void {
  getSocket()?.emit('post:comment', { postId, content, parentId, mentions });
}

export function likeComment(commentId: string, postId: string): void {
  getSocket()?.emit('comment:like', { commentId, postId });
}

export function votePoll(postId: string, optionId: string): void {
  getSocket()?.emit('poll:vote', { postId, optionId });
}

export function updateLocation(data: {
  lat?: number;
  lng?: number;
  accuracy?: number;
  activity?: string;
}): void {
  getSocket()?.emit('location:update', data);
}

export function sendTypingIndicator(postId: string, isTyping: boolean): void {
  getSocket()?.emit('typing', { postId, isTyping });
}
