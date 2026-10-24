import type { UserSkill } from '@/types/profile';
export interface AddSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSkillAdded: (skill: UserSkill) => void;
  onSkillUpdated?: (skill: UserSkill) => void;
  onSkillDeleted?: (skillId: string) => void;
  onInterestAdded?: (interest: string) => void;
  existingSkills: string[];
  existingInterests?: string[];
  skillToEdit?: UserSkill | null;
}
