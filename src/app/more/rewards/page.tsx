'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { useLiveWalletXpBalance } from '@/hooks/useLiveGamification';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ITEMS = [
  {
    href: '/streaks',
    title: 'Streaks',
    description: 'Keep your daily streaks going and protect them with freezes.',
  },
  {
    href: '/progress',
    title: 'Progress',
    description: 'Your level, XP, coins and how to earn more.',
  },
  {
    href: '/store',
    title: 'XP Store',
    description: 'Spend your XP on themes, frames and badges.',
  },
];

export default function RewardsPage() {
  const { data: xpBalance = 0 } = useLiveWalletXpBalance();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white pb-28 text-gray-900 dark:bg-neutral-950 dark:text-white">
        <div className="mx-auto max-w-xl px-4 pt-6">
          <div className="flex items-center gap-2">
            <Link
              href="/more"
              aria-label="Back to settings"
              className="-ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              <ChevronLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-bold">Rewards</h1>
          </div>

          <p className="mt-3 text-sm text-gray-500 dark:text-neutral-400">
            XP balance{' '}
            <span className="font-semibold tabular-nums text-gray-900 dark:text-white">
              {xpBalance.toLocaleString()}
            </span>
          </p>

          <ul className="mt-4 divide-y divide-gray-100 dark:divide-neutral-800">
            {ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-4 py-4 hover:bg-gray-50 dark:hover:bg-neutral-900"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 dark:text-neutral-600" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ProtectedRoute>
  );
}
