export interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPostCreated?: (post?: import('@/types/post').Post) => void;
}

export interface LinkPreview {
  image?: string | null;
  title?: string | null;
  description?: string | null;
  domain?: string | null;
}
