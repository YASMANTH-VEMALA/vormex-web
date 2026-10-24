'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  badge?: number;
  menuItems?: NavItem[];
}

interface BottomNavigationProps {
  items: NavItem[];
  className?: string;
}

export function BottomNavigation({ items, className }: BottomNavigationProps) {
  const router = useRouter();
  const [openMenuHref, setOpenMenuHref] = useState<string | null>(null);

  const handleVibrate = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  const prefetchRoute = (href: string) => {
    if (!href || href === '#create') return;
    router.prefetch(href);
  };

  const closeMenu = () => setOpenMenuHref(null);

  return (
    <>
      <AnimatePresence>
        {openMenuHref && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-40 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className="fixed bottom-[calc(6rem+env(safe-area-inset-bottom,0px))] left-1/2 z-50 w-[calc(100vw-24px)] max-w-[380px] -translate-x-1/2 rounded-[22px] border border-gray-200 bg-white/95 p-4 shadow-xl shadow-gray-900/10 backdrop-blur-xl dark:border-neutral-700 dark:bg-[#1c1f27]/95"
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900 dark:text-neutral-100">
                  Quick Access
                </p>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="rounded-full px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {items
                  .find((item) => item.href === openMenuHref)
                  ?.menuItems?.map((menuItem, index) => (
                    <Link
                      key={menuItem.href + index}
                      href={menuItem.href}
                      onClick={() => {
                        handleVibrate();
                        closeMenu();
                        menuItem.onClick?.();
                      }}
                      className="flex min-h-20 flex-col items-start justify-between rounded-2xl bg-gray-50 p-3 text-left transition-colors hover:bg-indigo-50 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                        <div className="h-5 w-5">{menuItem.icon}</div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-neutral-100">
                          {menuItem.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-neutral-400">
                          Open {menuItem.title}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <nav
        aria-label="Mobile navigation"
        className={cn(
          'fixed inset-x-0 bottom-0 z-50',
          'flex h-[calc(72px+env(safe-area-inset-bottom,0px))] w-full items-center rounded-t-[24px] px-2 pb-[env(safe-area-inset-bottom,0px)]',
          'border-t border-gray-200/90 bg-white shadow-[0_-4px_24px_rgba(23,32,51,0.08)]',
          'dark:border-neutral-700 dark:bg-[#1c1f27]',
          className
        )}
      >
        {items.map((item) => {
          const isHighlighted = item.isActive || openMenuHref === item.href;
          const isCreate = item.href === '#create';
          const controlClass = cn(
            'flex min-h-12 w-full flex-col items-center justify-center gap-1 rounded-2xl py-1.5',
            'outline-offset-2 focus-visible:outline-2 focus-visible:outline-indigo-500',
            isHighlighted
              ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300'
              : 'text-gray-500 hover:bg-gray-50 hover:text-indigo-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-indigo-300'
          );
          const content = (
            <>
              <motion.span
                whileTap={{ scale: 0.92 }}
                className={cn(
                  'relative flex h-7 w-10 items-center justify-center rounded-xl',
                  isCreate && 'bg-[#5b5fef] text-white shadow-sm'
                )}
              >
                <span className="h-5 w-5">{item.icon}</span>
                {typeof item.badge === 'number' && item.badge > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#5b5fef] px-1 text-[10px] font-bold text-white ring-2 ring-white dark:ring-[#1c1f27]">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </motion.span>
              <span className="text-[10px] font-semibold leading-3">{item.title}</span>
            </>
          );
          return (
            <div key={item.href} className="flex min-w-0 flex-1 px-0.5">
              {item.onClick || item.menuItems?.length ? (
                <button
                  type="button"
                  aria-label={item.title}
                  aria-expanded={item.menuItems?.length ? openMenuHref === item.href : undefined}
                  aria-haspopup={item.menuItems?.length ? true : undefined}
                  className={controlClass}
                  onClick={() => {
                    handleVibrate();
                    if (item.menuItems?.length) {
                      setOpenMenuHref((current) => (current === item.href ? null : item.href));
                    } else {
                      closeMenu();
                      item.onClick?.();
                    }
                  }}
                >
                  {content}
                </button>
              ) : (
                <Link
                  href={item.href}
                  aria-label={item.title}
                  aria-current={item.isActive ? 'page' : undefined}
                  className={controlClass}
                  onMouseEnter={() => prefetchRoute(item.href)}
                  onFocus={() => prefetchRoute(item.href)}
                  onTouchStart={() => prefetchRoute(item.href)}
                  onClick={() => {
                    handleVibrate();
                    closeMenu();
                  }}
                >
                  {content}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
