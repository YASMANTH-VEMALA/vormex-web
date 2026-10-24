import type { EducationInput } from '@/types/profile';
import type { AddEducationModalProps } from './AddEducationModal.types';
export function createAddEducationModalInitialState({
  educationToEdit,
}: Pick<AddEducationModalProps, 'educationToEdit'>) {
  const values = {
    saving: false,
    error: null as string | null,
    imageUploadOpen: false,
    formData: {
      school: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      isCurrent: false,
      grade: '',
      activities: '',
      description: '',
      logo: '',
    } as EducationInput,
  };

  if (educationToEdit) {
    values.formData = {
      school: educationToEdit.school,
      degree: educationToEdit.degree,
      fieldOfStudy: educationToEdit.fieldOfStudy,
      startDate: educationToEdit.startDate.split('T')[0],
      endDate: educationToEdit.endDate?.split('T')[0] || '',
      isCurrent: educationToEdit.isCurrent,
      grade: educationToEdit.grade || '',
      activities: educationToEdit.activities || '',
      description: educationToEdit.description || '',
      logo: educationToEdit.logo || '',
    };
  } else {
    values.formData = {
      school: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      isCurrent: false,
      grade: '',
      activities: '',
      description: '',
      logo: '',
    };
  }

  values.error = null;

  return values;
}
