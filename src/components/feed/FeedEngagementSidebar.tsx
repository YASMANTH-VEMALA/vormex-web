import { Leaderboard, PeopleFromYourCollege, ProgressNudges } from '@/components/engagement';
import { SidebarAdCard } from './SidebarAdCard';

export function FeedEngagementSidebar({ sessionId }: { sessionId: string }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[76px] space-y-4 pt-6">
        <ProgressNudges compact />
        <SidebarAdCard sessionId={sessionId} />
        <PeopleFromYourCollege />
        <details className="group rounded-2xl border border-gray-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <summary className="cursor-pointer text-sm font-semibold text-gray-600 dark:text-neutral-300">
            Community leaderboard
          </summary>
          <div className="pt-4">
            <Leaderboard />
          </div>
        </details>
        <p className="px-2 text-xs leading-relaxed text-gray-500 dark:text-neutral-400">
          Make a connection. Share an idea. Grow together.
        </p>
      </div>
    </aside>
  );
}
