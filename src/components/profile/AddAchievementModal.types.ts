import type { Achievement } from '@/types/profile';
export interface AddAchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAchievementAdded: (achievement: Achievement) => void;
  achievementToEdit?: Achievement | null;
  onAchievementUpdated?: (achievement: Achievement) => void;
}
