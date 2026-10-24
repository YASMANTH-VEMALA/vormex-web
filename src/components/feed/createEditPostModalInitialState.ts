import type { MentionUser, PostVisibility } from '@/types/post';
import type { EditPostModalProps } from './EditPostModal.types';
export function createEditPostModalInitialState({ post }: Pick<EditPostModalProps, 'post'>) {
  const values = {
    content: post.content || '',
    visibility: post.visibility as PostVisibility,
    showVisibilityDropdown: false,
    isSubmitting: false,
    error: null as string | null,
    mentionQuery: '',
    mentionResults: [] as MentionUser[],
    showMentionDropdown: false,
    showColorPicker: false,
  };

  values.content = post.content || '';
  values.visibility = post.visibility;

  return values;
}
