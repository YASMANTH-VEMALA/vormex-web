'use client';
import { getFeedTheme, setFeedTheme } from '@/lib/utils/feedTheme';
import { motion } from 'framer-motion';
import { Check, Clock, Coins, Layout, Package, Palette, ShoppingBag } from 'lucide-react';
import type * as React from 'react';

interface StoreListingsProps {
  activeTab: 'history' | 'shop' | 'inventory';
  categories: { id: string; name: string }[];
  categoryIcons: Record<string, React.ReactNode>;
  filteredItems: import('@/lib/api/store').StoreItem[];
  getInrPrice: (item: import('@/lib/api/store').StoreItem) => number | null;
  getItemCost: (item: import('@/lib/api/store').StoreItem) => number;
  getItemIcon: (type: string, category?: string | undefined) => React.JSX.Element;
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

export function StoreListings({
  activeTab,
  categories,
  categoryIcons,
  filteredItems,
  getInrPrice,
  getItemCost,
  getItemIcon,
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
  return (
    <div className="max-w-2xl mx-auto px-4 py-5">
      {activeTab === 'shop' && (
        <>
          {/* Homepage Feed Theme - Free */}
          <div className="mb-6 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-neutral-800">
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Palette className="w-4 h-4 text-pink-500" />
                Homepage Feed Theme
              </h3>
              <p className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                Choose a background for your feed · Free
              </p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setFeedTheme('default');
                    setThemeKey((k) => k + 1);
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
                    setThemeKey((k) => k + 1);
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
              <p className="text-xs text-gray-500 dark:text-neutral-400 mt-3 text-center">
                Go to Home to see your selected theme
              </p>
              <button
                onClick={() => router.push('/')}
                className="mt-3 w-full py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Go to Home
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700'
                }`}
              >
                {categoryIcons[category.id] || <ShoppingBag className="w-4 h-4" />}
                {category.name}
              </button>
            ))}
          </div>

          {selectedCategory === 'all' &&
            items.some((item) => item.category === 'chat_customization') && (
              <div className="mb-4 rounded-xl border border-amber-200 dark:border-amber-800/60 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                      New
                    </p>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Chat Customization Packs
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 truncate">
                      Animated reactions, premium themes, and message effects from ₹29
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCategory('chat_customization')}
                    className="px-3 py-1.5 rounded-lg bg-amber-600 text-white text-xs font-medium hover:bg-amber-700 transition-colors shrink-0"
                  >
                    Explore
                  </button>
                </div>
              </div>
            )}

          {/* Items Grid */}
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <ShoppingBag className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                No items available
              </h3>
              <p className="text-xs text-gray-500">Check back later for new items</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="w-full bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-all text-left"
                  >
                    {isPurchased(item.id) && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}

                    {getInrPrice(item) !== null && (
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-[10px] font-semibold">
                        ₹{getInrPrice(item)}
                      </div>
                    )}

                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-3">
                      {getItemIcon(item.type, item.category)}
                    </div>

                    <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-0.5 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                      {item.description || 'No description available.'}
                    </p>

                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Coins className="w-3.5 h-3.5" />
                      <span className="text-sm font-medium">
                        {getItemCost(item).toLocaleString()}
                      </span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === 'inventory' && (
        <>
          {inventory.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <Package className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                Your inventory is empty
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Purchase items from the store to add them here
              </p>
              <button
                onClick={() => setActiveTab('shop')}
                className="px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Browse Store
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {inventory.map((inv) => {
                const item = inv.item;
                if (!item) return null;

                return (
                  <motion.div
                    key={inv.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-3">
                      {getItemIcon(item.type, item.category)}
                    </div>

                    <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-0.5 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                      {item.description || 'No description available.'}
                    </p>

                    <span
                      className={`text-xs px-2 py-0.5 rounded font-medium ${
                        inv.isEquipped
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                          : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      }`}
                    >
                      {inv.isEquipped ? 'Equipped' : 'Owned'}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </>
      )}

      {activeTab === 'history' && (
        <>
          {purchases.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <Clock className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                No purchase history
              </h3>
              <p className="text-xs text-gray-500">Your purchases will appear here</p>
            </div>
          ) : (
            <div className="space-y-2">
              {purchases.map((purchase) => (
                <motion.div
                  key={purchase.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white dark:bg-neutral-900 rounded-xl p-3 border border-gray-200 dark:border-neutral-800 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 shrink-0">
                    {getItemIcon(purchase.item.type, purchase.item.category)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white truncate">
                      {purchase.item.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {purchase.purchasedAt
                        ? new Date(purchase.purchasedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })
                        : 'Unknown date'}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                    <Coins className="w-3.5 h-3.5" />
                    <span className="text-sm font-medium">
                      -{purchase.xpSpent.toLocaleString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
