import type {
  PollOption,
  Post,
  ReactionSummary as ReactionSummaryType,
  ReactionType,
} from '@/types/post';

export interface PostCardProps {
  post: Post;
  onLikeUpdate?: (
    postId: string,
    liked: boolean,
    count: number,
    reactionType?: ReactionType | null,
    reactionSummary?: ReactionSummaryType[]
  ) => void;
  onPollUpdate?: (postId: string, options: PollOption[]) => void;
  onDelete?: (postId: string) => void;
  onEdit?: (postId: string, updatedPost: Post) => void;
  onUnsave?: (postId: string) => void;
  onCommentClick?: () => void;
  highlightCommentId?: string;
}
