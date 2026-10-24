import type { Post } from '@/types/post';

export interface EditPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post;
  onPostUpdated?: (updatedPost: Post) => void;
}
