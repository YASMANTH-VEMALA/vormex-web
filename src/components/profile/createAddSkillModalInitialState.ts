import type { SkillInput } from '@/types/profile';
import type { AddSkillModalProps } from './AddSkillModal.types';
export function createAddSkillModalInitialState({
  skillToEdit,
}: Pick<AddSkillModalProps, 'skillToEdit'>) {
  const values = {
    mode: 'SKILL' as 'SKILL' | 'INTEREST',
    saving: false,
    deleting: false,
    error: null as string | null,
    searchQuery: '',
    selectedCategory: 'Tech' as string | null,
    formData: {
      skillName: '',
      proficiency: 'Intermediate',
      yearsOfExp: 1,
    } as SkillInput,
  };

  if (skillToEdit) {
    values.mode = 'SKILL';
    values.formData = {
      skillName: skillToEdit.skill.name,
      proficiency: skillToEdit.proficiency ?? 'Intermediate',
      yearsOfExp: skillToEdit.yearsOfExp || 1,
    };
    values.searchQuery = skillToEdit.skill.name;
  } else {
    // Reset
    values.formData = {
      skillName: '',
      proficiency: 'Intermediate',
      yearsOfExp: 1,
    };
    values.searchQuery = '';
  }

  return values;
}
