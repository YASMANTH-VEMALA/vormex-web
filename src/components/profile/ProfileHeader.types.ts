import type { ProfileStats, ProfileUser, ProfileViewerContext } from '@/types/profile';

export interface ProfileHeaderProps {
  user: ProfileUser;
  stats: ProfileStats;
  viewerContext?: ProfileViewerContext;
  isOwner: boolean;
  onEditProfile?: () => void;
  onEditBanner?: () => void;
  onEditAvatar?: () => void;
  onViewerContextChange?: (patch: Partial<ProfileViewerContext>, followersDelta?: number) => void;
  onProfileUnavailable?: () => void;
}

export type ConnectionStatus =
  'none' | 'pending_sent' | 'pending_received' | 'connected' | 'blocked';

export interface StatItemProps {
  value: string;
  label: string;
  isClickable?: boolean;
  onClick?: () => void;
}
