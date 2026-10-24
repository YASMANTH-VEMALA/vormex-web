import '@/components/groups';

export type Tab = 'posts' | 'about' | 'members';

export interface GroupDetailPageProps {
  params: Promise<{ slug: string }>;
}
