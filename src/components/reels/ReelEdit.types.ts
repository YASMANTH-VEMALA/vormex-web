import { Reel } from '@/lib/api/reels';
export interface ReelEditProps {
  reel: Reel;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedReel: Reel) => void;
}
export type Visibility = 'public' | 'followers' | 'private';
