'use client';
import { getFeedTheme, setFeedTheme } from '@/lib/utils/feedTheme';
import type * as React from 'react';

interface StoreListingsProps {
  activeTab: 'history' | 'shop' | 'inventory';
  categories: { id: string; name: string }[];
  filteredItems: import('@/lib/api/store').StoreItem[];
  getInrPrice: (item: import('@/lib/api/store').StoreItem) => number | null;
  getItemCost: (item: import('@/lib/api/store').StoreItem) => number;
  inventory: import('@/lib/api/store').UserInventory[];
  isPurchased: (itemId: string) => boolean;
  items: import('@/lib/api/store').StoreItem[];
  purchases: import('@/lib/api/store').StorePurchase[];
  router: import('next/dist/shared/lib/app-router-context.shared-runtime').AppRouterInstance;
  selectedCategory: string;
  setActiveTab: React.Dispatch<React.SetStateAction<'history' | 'shop' | 'inventory'>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setSelectedItem: React.Dispatch<React.SetStateAction<import('@/lib/api/store').StoreItem | null>>;
  setThemeKey: React.Dispatch<React.SetStateAction<number>>;
}

function Empty({ title, text, action }: { title: string; text: string; action?: React.ReactNode }) {
  return (
    <div className="py-16 text-center">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">{text}</p>
      {action}
    </div>
  );
}

export function StoreListings({
  activeTab,
  categories,
  filteredItems,
  getInrPrice,
  getItemCost,
  inventory,
  isPurchased,
  items,
  purchases,
  router,
  selectedCategory,
  setActiveTab,
  setSelectedCategory,
  setSelectedItem,
  setThemeKey,
}: StoreListingsProps) {
  const feedTheme = getFeedTheme();
  const themeOptions: { id: 'default' | 'grid'; label: string; hint: string }[] = [
    { id: 'default', label: 'Default', hint: 'Plain background' },
    { id: 'grid', label: 'Square grid', hint: 'Subtle grid pattern' },
  ];

  return (
    <div className="mx-auto max-w-xl px-4 py-5">
      {activeTab === 'shop' && (
        <>
          {/* Homepage feed theme (free) */}
          <section aria-label="Homepage feed theme" className="mb-8">
            <h2 className="text-base font-bold text-gray-900 dark:text-white">Homepage feed</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
              Choose a background for your feed. Free.
            </p>
            <div role="radiogroup" aria-label="Feed background" className="mt-2">
              {themeOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex cursor-pointer items-center justify-between gap-4 rounded-lg px-1 py-3 hover:bg-gray-50 dark:hover:bg-neutral-900"
                >
                  <span>
                    <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                      {option.label}
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-neutral-400">
                      {option.hint}
                    </span>
                  </span>
                  <input
                    type="radio"
                    name="feed-theme"
                    checked={feedTheme === option.id}
                    onChange={() => {
                      setFeedTheme(option.id);
                      setThemeKey((k) => k + 1);
                    }}
                    className="h-5 w-5 accent-blue-600"
                  />
                </label>
              ))}
            </div>
            <button
              type="button"
              onClick={() => router.push('/')}
              className="mt-1 px-1 text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
            >
              See it on Home
            </button>
          </section>

          {/* Categories */}
          <div className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                aria-pressed={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-lg px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {selectedCategory === 'all' &&
            items.some((item) => item.category === 'chat_customization') && (
              <div className="mb-2 flex items-center justify-between gap-3 py-2">
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Chat customization packs
                  </h3>
                  <p className="truncate text-xs text-gray-500 dark:text-neutral-400">
                    Animated reactions, themes and message effects from ₹29
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('chat_customization')}
                  className="shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  View
                </button>
              </div>
            )}

          {filteredItems.length === 0 ? (
            <Empty title="No items available" text="Check back later for new items." />
          ) : (
            <ul className="divide-y divide-gray-100 dark:divide-neutral-800">
              {filteredItems.map((item) => {
                const owned = isPurchased(item.id);
                const inr = getInrPrice(item);
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="flex w-full items-center gap-4 py-3.5 text-left hover:bg-gray-50 dark:hover:bg-neutral-900"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </p>
                        <p className="mt-0.5 line-clamp-2 text-xs text-gray-500 dark:text-neutral-400">
                          {item.description || 'No description available.'}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        {owned ? (
                          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                            Owned
                          </span>
                        ) : (
                          <>
                            <span className="block text-sm font-semibold tabular-nums text-gray-900 dark:text-white">
                              {getItemCost(item).toLocaleString()} XP
                            </span>
                            {inr !== null && (
                              <span className="block text-xs text-gray-500 dark:text-neutral-400">
                                or ₹{inr}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}

      {activeTab === 'inventory' && (
        <>
          {inventory.length === 0 ? (
            <Empty
              title="Nothing here yet"
              text="Items you buy will show up here."
              action={
                <button
                  type="button"
                  onClick={() => setActiveTab('shop')}
                  className="mt-4 h-9 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Browse the store
                </button>
              }
            />
          ) : (
            <ul className="divide-y divide-gray-100 dark:divide-neutral-800">
              {inventory.map((inv) => {
                const item = inv.item;
                if (!item) return null;
                return (
                  <li key={inv.id} className="flex items-center gap-4 py-3.5">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </p>
                      <p className="mt-0.5 line-clamp-2 text-xs text-gray-500 dark:text-neutral-400">
                        {item.description || 'No description available.'}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 text-sm font-semibold ${
                        inv.isEquipped
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-500 dark:text-neutral-400'
                      }`}
                    >
                      {inv.isEquipped ? 'Equipped' : 'Owned'}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}

      {activeTab === 'history' && (
        <>
          {purchases.length === 0 ? (
            <Empty title="No purchases yet" text="Your purchases will appear here." />
          ) : (
            <ul className="divide-y divide-gray-100 dark:divide-neutral-800">
              {purchases.map((purchase) => (
                <li key={purchase.id} className="flex items-center gap-4 py-3.5">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                      {purchase.item.name}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                      {purchase.purchasedAt
                        ? new Date(purchase.purchasedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })
                        : 'Unknown date'}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm tabular-nums text-gray-900 dark:text-white">
                    -{purchase.xpSpent.toLocaleString()} XP
                  </span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
