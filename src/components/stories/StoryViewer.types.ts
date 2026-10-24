import { type StoryGroup } from '@/lib/api/stories';

export interface StoryViewerProps {
  storyGroups: StoryGroup[];
  initialGroupIndex: number;
  initialStoryIndex?: number;
  onClose: () => void;
  onStoryEnd?: () => void;
}
