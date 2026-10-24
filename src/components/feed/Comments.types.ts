import type { Comment } from '@/types/post';

export interface CommentsProps {
  postId: string;
  isOpen: boolean;
  onClose: () => void;
  highlightCommentId?: string;
  onCommentCountChange?: (count: number) => void;
}

export interface CommentItemProps {
  comment: Comment;
  postId: string;
  depth: number;
  highlightId?: string;
  onReply: (parentId: string, parentAuthor: string) => void;
}
