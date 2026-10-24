export interface GroupSettingsPageProps {
  params: Promise<{ slug: string }>;
}

export type SettingsTab = 'general' | 'members' | 'requests' | 'invites' | 'danger';
