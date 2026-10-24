import { useState } from 'react';
import { mergeProfileDraft } from '@/lib/utils/profileForm';
import type { ProfileUpdateData } from '@/types/profile';

export function useProfileForm(source: ProfileUpdateData, session: string) {
  const signature = JSON.stringify(source);
  const [snapshot, setSnapshot] = useState({ source, signature, session, value: source });
  const value =
    snapshot.session !== session
      ? source
      : snapshot.signature !== signature
        ? mergeProfileDraft(snapshot.value, snapshot.source, source)
        : snapshot.value;
  if (snapshot.session !== session || snapshot.signature !== signature) {
    setSnapshot({ source, signature, session, value });
  }
  const setValue = (update: React.SetStateAction<ProfileUpdateData>) =>
    setSnapshot((current) => ({
      ...current,
      value: typeof update === 'function' ? update(current.value) : update,
    }));
  return [value, setValue] as const;
}
