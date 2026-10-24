export interface StoryCreatorProps {
  isOpen: boolean;
  onClose: () => void;
  onStoryCreated?: () => void;
}

export type StoryType = 'image' | 'video' | 'text';

export type CreatorStep = 'select-type' | 'upload-media' | 'edit' | 'details';
