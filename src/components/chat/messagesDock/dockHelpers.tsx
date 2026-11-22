import { UserAvatar } from '@/components/ui/UserAvatar';
import type { Conversation } from '@/lib/api/chat';
import { cn } from '@/lib/utils';
import { format, isToday, isYesterday } from 'date-fns';

export type View = 'closed' | 'list' | 'chat';
export type Filter = 'all' | 'unread' | 'online';

export const HIDDEN_PREFIXES = [
  '/login',
  '/forgot-password',
  '/reset-password',
  '/verify-email',
  '/onboarding',
  '/messages',
  '/vormex-delete-account',
  '/privacy',
  '/terms',
  '/support',
  '/reels',
];

export function shortTime(iso?: string | null) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isToday(d)) return format(d, 'h:mm a');
  if (isYesterday(d)) return 'Yesterday';
  const diff = Date.now() - d.getTime();
  if (diff < 7 * 864e5) return format(d, 'EEE');
  return format(d, 'd MMM');
}

export function previewOf(c: Conversation, meId?: string) {
  const m = c.lastMessage;
  if (!m) return 'Say hi 👋';
  const mine = m.senderId === meId;
  const text =
    m.contentType && m.contentType.toUpperCase() !== 'TEXT'
      ? mine
        ? 'You sent an attachment'
        : 'Sent an attachment'
      : m.content;
  return mine && (!m.contentType || m.contentType.toUpperCase() === 'TEXT') ? `You: ${text}` : text;
}

export function sortConversations(list: Conversation[]) {
  return [...list].sort(
    (a, b) =>
      new Date(b.lastMessageAt || b.updatedAt).getTime() -
      new Date(a.lastMessageAt || a.updatedAt).getTime()
  );
}

export function Avatar({
  user,
  size = 'md',
  showStatus = true,
}: {
  user: Conversation['otherParticipant'];
  size?: 'sm' | 'md';
  showStatus?: boolean;
}) {
  const dim = size === 'sm' ? 'h-9 w-9' : 'h-12 w-12';
  return (
    <div className={cn('relative flex-shrink-0', dim)}>
      <UserAvatar imageSrc={user.profileImage} name={user.name} className={cn(dim, 'text-sm')} />
      {showStatus && user.isOnline && (
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-card" />
      )}
    </div>
  );
}
