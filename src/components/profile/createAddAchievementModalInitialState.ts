import type { AchievementInput } from '@/types/profile';
import type { AddAchievementModalProps } from './AddAchievementModal.types';
export function createAddAchievementModalInitialState({
  achievementToEdit,
}: Pick<AddAchievementModalProps, 'achievementToEdit'>) {
  const values = {
    loading: false,
    uploading: false,
    error: null as string | null,
    title: '',
    type: 'Award' as AchievementInput['type'],
    organization: '',
    date: '',
    description: '',
    certificateUrl: '',
    certificateFile: null as File | null,
    certificatePreview: null as string | null,
    uploadMethod: 'file' as 'url' | 'file',
  };

  if (achievementToEdit) {
    values.title = achievementToEdit.title;
    values.type = achievementToEdit.type;
    values.organization = achievementToEdit.organization;
    values.date = achievementToEdit.date.split('T')[0];
    values.description = achievementToEdit.description || '';
    values.certificateUrl = achievementToEdit.certificateUrl || '';

    if (achievementToEdit.certificateUrl) {
      if (
        achievementToEdit.certificateUrl.match(/\.(jpeg|jpg|png|webp)/i) ||
        achievementToEdit.certificateUrl.includes('bunnycdn')
      ) {
        values.certificatePreview = achievementToEdit.certificateUrl;
        values.uploadMethod = 'file';
      } else {
        values.uploadMethod = 'url';
      }
    } else {
      values.uploadMethod = 'file';
    }
  } else {
    {
      values.title = '';
      values.type = 'Award';
      values.organization = '';
      values.date = '';
      values.description = '';
      values.certificateUrl = '';
      values.certificateFile = null;
      values.certificatePreview = null;
      values.uploadMethod = 'file';
      values.error = null;
    }
  }
  values.error = null;

  return values;
}
