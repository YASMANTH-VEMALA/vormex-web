import type { Education } from '@/types/profile';
export interface AddEducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEducationAdded: (education: Education) => void;
  educationToEdit?: Education | null;
  onEducationUpdated?: (education: Education) => void;
}
