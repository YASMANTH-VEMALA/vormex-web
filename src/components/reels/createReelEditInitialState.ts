import type { ReelEditProps, Visibility } from './ReelEdit.types';
export function createReelEditInitialState({ reel }: Pick<ReelEditProps, 'reel'>) {
  const values = {
    title: reel.title || '',
    caption: reel.caption || '',
    mentions: (reel.mentions || []) as string[],
    hashtags: (reel.hashtags || []) as string[],
    hashtagInput: '',
    visibility: ((reel.visibility as Visibility) || 'public') as Visibility,
    allowComments: reel.allowComments,
    allowDuets: reel.allowDuets,
    allowStitch: reel.allowStitch,
    allowDownload: reel.allowDownload,
    allowSharing: reel.allowSharing,
    isSaving: false,
    error: null as string | null,
  };

  values.title = reel.title || '';
  values.caption = reel.caption || '';
  values.mentions = reel.mentions || [];
  values.hashtags = reel.hashtags || [];
  values.visibility = (reel.visibility as Visibility) || 'public';
  values.allowComments = reel.allowComments;
  values.allowDuets = reel.allowDuets;
  values.allowStitch = reel.allowStitch;
  values.allowDownload = reel.allowDownload;
  values.allowSharing = reel.allowSharing;
  values.error = null;

  return values;
}
