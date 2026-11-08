'use client';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DownloadAppCard } from '@/components/settings/DownloadAppCard';
import { GitHubIntegration, MentionsDashboard } from '@/components/settings';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { getFeedTheme, setFeedTheme } from '@/lib/utils/feedTheme';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Layout, Lock, Moon, Sun, Zap } from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';

interface MoreDashboardViewProps {
  activeSection: import('@/app/more/page.types').Section;
  handleLogout: () => void;
  isDark: boolean;
  menuItems: import('@/app/more/page.types').MenuItem[];
  router: import('next/dist/shared/lib/app-router-context.shared-runtime').AppRouterInstance;
  setActiveSection: React.Dispatch<React.SetStateAction<import('@/app/more/page.types').Section>>;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  setThemeApplied: React.Dispatch<React.SetStateAction<boolean>>;
  themeApplied: boolean;
  user: import('@/types/auth').User | null;
  xpBalance: number;
}

export function MoreDashboardView({
  activeSection,
  handleLogout,
  isDark,
  menuItems,
  router,
  setActiveSection,
  setIsDark,
  setThemeApplied,
  themeApplied,
  user,
  xpBalance,
}: MoreDashboardViewProps) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white pb-28 dark:bg-neutral-950">
        {/* Header */}
        <div className="mx-auto max-w-xl px-4 pt-6">
          <div className="flex items-center gap-2">
            {activeSection !== 'main' && (
              <button
                onClick={() => setActiveSection('main')}
                aria-label="Back"
                className="-ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {activeSection === 'main' && 'Settings'}
              {activeSection === 'integrations' && 'Connected apps'}
              {activeSection === 'mentions' && 'Mentions'}
              {activeSection === 'appearance' && 'Appearance'}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-xl px-4 py-4">
          {activeSection === 'main' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {/* Account summary */}
              {user && (
                <div className="flex items-center gap-3">
                  <UserAvatar
                    imageSrc={user.profileImage}
                    name={user.name}
                    className="h-12 w-12 bg-gray-200 text-lg font-semibold text-gray-700"
                    fallbackClassName="text-lg"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                      {user.name}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-neutral-400">
                      @{user.username}
                    </p>
                  </div>
                  <Link
                    href="/profile"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
                  >
                    View profile
                  </Link>
                </div>
              )}

              <div className="flex items-center justify-between text-sm">
                <p className="text-gray-500 dark:text-neutral-400">
                  XP balance{' '}
                  <span className="font-semibold tabular-nums text-gray-900 dark:text-white">
                    {xpBalance.toLocaleString()}
                  </span>
                </p>
                <Link
                  href="/store"
                  className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  Store
                </Link>
              </div>

              {/* Menu sections */}
              {(() => {
                const SECTIONS: { title: string; ids: string[] }[] = [
                  {
                    title: 'How you use Vormex',
                    ids: ['appearance', 'notifications', 'integrations', 'mentions'],
                  },
                  {
                    title: 'Privacy and safety',
                    ids: ['discovery-privacy', 'privacy', 'blocked'],
                  },
                  {
                    title: 'Your account',
                    ids: ['profile', 'premium', 'saved', 'connections', 'rewards', 'badges', 'referrals'],
                  },
                  {
                    title: 'Learn and grow',
                    ids: [
                      'vormex-ai',
                      'courses',
                      'learning',
                      'skill-passport',
                      'skill-swap',
                      'accountability',
                      'games',
                      'talk',
                    ],
                  },
                  {
                    title: 'Community and opportunities',
                    ids: [
                      'hackathons',
                      'events',
                      'college-communities',
                      'jobs',
                      'challenges',
                      'interviews',
                    ],
                  },
                  { title: 'More info and support', ids: ['help', 'terms', 'report'] },
                ];
                const placed = new Set(SECTIONS.flatMap((section) => section.ids));
                const leftovers = menuItems.filter((item) => !placed.has(item.id));
                const sections = [
                  ...SECTIONS.map((section) => ({
                    title: section.title,
                    items: section.ids
                      .map((id) => menuItems.find((item) => item.id === id))
                      .filter((item): item is (typeof menuItems)[number] => Boolean(item)),
                  })),
                  ...(leftovers.length ? [{ title: 'More', items: leftovers }] : []),
                ].filter((section) => section.items.length > 0);

                return sections.map((section) => (
                  <section key={section.title} aria-label={section.title}>
                    <h2 className="px-3 pb-1 text-xs font-semibold text-gray-500 dark:text-neutral-400">
                      {section.title}
                    </h2>
                    <div>
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        const content = (
                          <div
                            className={`flex items-center gap-4 rounded-lg px-3 py-3 ${
                              item.locked
                                ? 'cursor-not-allowed opacity-50'
                                : 'hover:bg-gray-100 dark:hover:bg-neutral-900'
                            }`}
                          >
                            <Icon className="h-6 w-6 shrink-0 text-gray-900 [stroke-width:1.5] dark:text-white" />
                            <div className="min-w-0 flex-1">
                              <span className="block text-sm text-gray-900 dark:text-white">
                                {item.label}
                              </span>
                              {item.subtext && (
                                <span className="block truncate text-xs text-gray-500 dark:text-neutral-400">
                                  {item.subtext}
                                </span>
                              )}
                            </div>
                            {item.badge && item.badge > 0 ? (
                              <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                                {item.badge > 99 ? '99+' : item.badge}
                              </span>
                            ) : null}
                            {item.locked ? (
                              <Lock
                                className="h-4 w-4 text-gray-400"
                                aria-label="Locked"
                                strokeWidth={1.5}
                              />
                            ) : (
                              <ChevronRight
                                className="h-4 w-4 text-gray-400 dark:text-neutral-600"
                                strokeWidth={1.5}
                              />
                            )}
                          </div>
                        );

                        if (item.locked) {
                          return <div key={item.id}>{content}</div>;
                        }
                        if (item.onClick) {
                          return (
                            <button
                              key={item.id}
                              onClick={item.onClick}
                              className="block w-full text-left"
                            >
                              {content}
                            </button>
                          );
                        }
                        return (
                          <Link key={item.id} href={item.href!} className="block">
                            {content}
                          </Link>
                        );
                      })}
                    </div>
                  </section>
                ));
              })()}

              <DownloadAppCard />

              {/* Sign out and delete */}
              <div className="border-t border-gray-200 pt-4 dark:border-neutral-800">
                <button
                  onClick={handleLogout}
                  className="block w-full rounded-lg px-3 py-3 text-left text-sm font-semibold text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-neutral-900"
                >
                  Log out
                </button>
                <Link
                  href="/vormex-delete-account"
                  className="block rounded-lg px-3 py-3 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-neutral-900"
                >
                  Delete account
                </Link>
              </div>

              <p className="text-center text-xs text-gray-400 dark:text-neutral-600">
                Vormex v1.0.0
              </p>
            </motion.div>
          )}

          {activeSection === 'integrations' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <GitHubIntegration />

              {/* More integrations placeholder */}
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-gray-200 dark:border-neutral-800 text-center">
                <Zap className="w-8 h-8 text-gray-300 dark:text-neutral-700 mx-auto mb-2" />
                <p className="text-gray-500 dark:text-neutral-400 text-sm">
                  More integrations coming soon
                </p>
              </div>
            </motion.div>
          )}

          {activeSection === 'mentions' && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <MentionsDashboard />
            </motion.div>
          )}

          {activeSection === 'appearance' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {/* Light/Dark mode */}
              <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-neutral-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Theme</h3>
                </div>
                <div className="p-4">
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        document.documentElement.classList.remove('dark');
                        localStorage.setItem('theme', 'light');
                        setIsDark(false);
                      }}
                      className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-colors ${
                        !isDark
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600'
                      }`}
                    >
                      <Sun className={`w-6 h-6 ${!isDark ? 'text-blue-500' : 'text-gray-400'}`} />
                      <span
                        className={`text-sm font-medium ${!isDark ? 'text-blue-600' : 'text-gray-600 dark:text-neutral-400'}`}
                      >
                        Light
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        document.documentElement.classList.add('dark');
                        localStorage.setItem('theme', 'dark');
                        setIsDark(true);
                      }}
                      className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-colors ${
                        isDark
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600'
                      }`}
                    >
                      <Moon className={`w-6 h-6 ${isDark ? 'text-blue-500' : 'text-gray-400'}`} />
                      <span
                        className={`text-sm font-medium ${isDark ? 'text-blue-400' : 'text-gray-600 dark:text-neutral-400'}`}
                      >
                        Dark
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Homepage UI / Feed Background */}
              <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-neutral-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Homepage Feed</h3>
                  <p className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                    Choose a background for your feed
                  </p>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        setFeedTheme('default');
                        setThemeApplied(true);
                      }}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-colors ${
                        getFeedTheme() === 'default'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600'
                      }`}
                    >
                      <Layout
                        className={`w-8 h-8 ${getFeedTheme() === 'default' ? 'text-blue-500' : 'text-gray-400'}`}
                      />
                      <span
                        className={`text-sm font-medium ${getFeedTheme() === 'default' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-neutral-400'}`}
                      >
                        Default
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setFeedTheme('grid');
                        setThemeApplied(true);
                      }}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-colors ${
                        getFeedTheme() === 'grid'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600'
                      }`}
                    >
                      <div className="w-8 h-8 grid grid-cols-2 gap-0.5 p-1 rounded">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className={`w-full h-full rounded-sm ${getFeedTheme() === 'grid' ? 'bg-blue-500' : 'bg-gray-400'}`}
                          />
                        ))}
                      </div>
                      <span
                        className={`text-sm font-medium ${getFeedTheme() === 'grid' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-neutral-400'}`}
                      >
                        Square Grid
                      </span>
                    </button>
                  </div>
                  {themeApplied && (
                    <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">
                        Theme applied!
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-0.5">
                        Go to the Home page to see your new background.
                      </p>
                      <button
                        onClick={() => {
                          router.push('/');
                          setThemeApplied(false);
                        }}
                        className="mt-3 w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition-colors"
                      >
                        Go to Home
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
