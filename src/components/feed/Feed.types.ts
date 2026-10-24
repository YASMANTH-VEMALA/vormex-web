import type { FeedResponse, Post } from '@/types/post';
import { InfiniteData } from '@tanstack/react-query';

export type FeedCache = InfiniteData<FeedResponse, unknown>;

export type FeedSocketReactionPayload = {
  postId: string;
  userId: string;
  liked: boolean;
  likesCount: number;
  reactionType: Post['userReactionType'];
  reactionSummary: Post['reactionSummary'];
};
