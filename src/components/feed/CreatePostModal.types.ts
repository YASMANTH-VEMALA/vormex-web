export interface CreatePostModalProps {
  isOpen: boolean;
  initialPostType?: import('@/types/post').PostType;
  onClose: () => void;
  onPostCreated?: (post?: import('@/types/post').Post) => void;
}

export interface LinkPreview {
  image?: string | null;
  title?: string | null;
  description?: string | null;
  domain?: string | null;
}
