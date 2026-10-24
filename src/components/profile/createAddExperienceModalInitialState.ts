import { formatLocation } from '@/lib/utils/profileLocation';
import type { ExperienceInput } from '@/types/profile';
import type { AddExperienceModalProps } from './AddExperienceModal.types';
export function createAddExperienceModalInitialState({
  experienceToEdit,
}: Pick<AddExperienceModalProps, 'experienceToEdit'>) {
  const values = {
    saving: false,
    error: null as string | null,
    skillInput: '',
    imageUploadOpen: false,
    formData: {
      title: '',
      company: '',
      type: 'Internship',
      location: '',
      startDate: '',
      endDate: '',
      isCurrent: false,
      description: '',
      skills: [],
      logo: '',
    } as ExperienceInput,
  };

  if (experienceToEdit) {
    values.formData = {
      title: experienceToEdit.title,
      company: experienceToEdit.company,
      type: experienceToEdit.type,
      location: formatLocation(experienceToEdit.location) || '',
      startDate: experienceToEdit.startDate.split('T')[0],
      endDate: experienceToEdit.endDate?.split('T')[0] || '',
      isCurrent: experienceToEdit.isCurrent,
      description: experienceToEdit.description || '',
      skills: experienceToEdit.skills || [],
      logo: experienceToEdit.logo || '',
    };
  } else {
    values.formData = {
      title: '',
      company: '',
      type: 'Internship',
      location: '',
      startDate: '',
      endDate: '',
      isCurrent: false,
      description: '',
      skills: [],
      logo: '',
    };
  }

  values.skillInput = '';
  values.error = null;

  return values;
}
