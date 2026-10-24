'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Feed } from '@/components/feed';
import { getFeedTheme } from '@/lib/utils/feedTheme';
import { useEffect, useState } from 'react';
import './community.css';

export default function FeedPage() {
  const [feedTheme, setFeedTheme] = useState<'default' | 'grid'>(() =>
    typeof window === 'undefined' ? 'default' : getFeedTheme()
  );
  useEffect(() => {
    const handleStorage = () => setFeedTheme(getFeedTheme());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);
  const isGrid = feedTheme === 'grid';
  return (
    <ProtectedRoute>
      <main
        className={`community-feed min-h-screen overflow-x-hidden bg-[#f7f8fa] text-[#172033] dark:bg-neutral-950 dark:text-neutral-100 ${isGrid ? 'relative' : ''}`}
      >
        {isGrid && (
          <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:20px_20px] dark:opacity-20" />
        )}
        <Feed />
      </main>
    </ProtectedRoute>
  );
}
