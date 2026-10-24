import type { Experience } from '@/types/profile';
export interface AddExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExperienceAdded: (experience: Experience) => void;
  experienceToEdit?: Experience | null;
  onExperienceUpdated?: (experience: Experience) => void;
}
