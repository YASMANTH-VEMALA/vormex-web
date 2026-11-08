'use client';
import { useSyncedState } from '@/hooks/useSyncedState';
import { useAuth as useResourceAuth } from '@/lib/auth/useAuth';
import { useQuery } from '@tanstack/react-query';
import { StoreListings } from './StoreListings';
import type { InventoryItem, StoreItem, StorePurchase } from './page.types';
export type { InventoryItem, StoreItem, StorePurchase } from './page.types';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { invalidateGamificationQueries, useLiveWalletXpBalance } from '@/hooks/useLiveGamification';
import * as storeAPI from '@/lib/api/store';
import { useQueryClient } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

const CATEGORY_ORDER = ['chat_customization', 'theme', 'frame', 'effect', 'badge', 'donation'];

function getCategoryLabel(category: string): string {
  if (category === 'chat_customization') return 'Chat Customization';
  return category
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function StorePage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [initialItems] = useState<StoreItem[]>([]);
  const [initialPurchases] = useState<StorePurchase[]>([]);
  const [initialInventory] = useState<InventoryItem[]>([]);

  const [activeTab, setActiveTab] = useState<'shop' | 'inventory' | 'history'>('shop');
  const [selectedCategory, setSelectedCategory] = useSyncedState('all', activeTab);

  const [purchasing, setPurchasing] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>(
    {
      show: false,
      message: '',
      type: 'success',
    }
  );
  const [, setThemeKey] = useState(0);
  const { data: xpBalance = 0 } = useLiveWalletXpBalance();

  const resourceViewer = useResourceAuth().user;
  const loadDataResource = useQuery({
    queryKey: ['web-resource', 'store', resourceViewer?.id ?? 'anonymous'],
    queryFn: async () => {
      const [items, purchases, inventory] = await Promise.all([
        storeAPI.getStoreItems(),
        storeAPI.getMyPurchases(),
        storeAPI.getMyInventory(),
      ]);
      return { items: items || [], purchases: purchases || [], inventory: inventory || [] };
    },
    retry: false,
  });
  const items = loadDataResource.data?.items ?? initialItems;
  const purchases = loadDataResource.data?.purchases ?? initialPurchases;
  const inventory = loadDataResource.data?.inventory ?? initialInventory;
  const loading = loadDataResource.isPending;
  const loadData = () => loadDataResource.refetch();

  function showToast(message: string, type: 'success' | 'error') {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  }

  const handlePurchase = async (item: StoreItem) => {
    const itemCost = item.xpCost;
    if (xpBalance < itemCost) {
      showToast('Not enough XP balance to purchase this item', 'error');
      return;
    }

    try {
      setPurchasing(item.id);
      await storeAPI.purchaseItem(item.slug ?? item.id);
      await invalidateGamificationQueries(queryClient);
      showToast(`Successfully purchased ${item.name}!`, 'success');
      setSelectedItem(null);
      void loadData();
    } catch (error) {
      console.error('Error purchasing item:', error);
      showToast('Failed to purchase item', 'error');
    } finally {
      setPurchasing(null);
    }
  };

  const categories = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.category).filter(Boolean)));

    const ordered = [
      ...CATEGORY_ORDER.filter((category) => unique.includes(category)),
      ...unique.filter((category) => !CATEGORY_ORDER.includes(category)),
    ];

    return [
      { id: 'all', name: 'All Items' },
      ...ordered.map((category) => ({
        id: category,
        name: getCategoryLabel(category),
      })),
    ];
  }, [items]);

  const filteredItems = items.filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  const getItemCost = (item: StoreItem): number => item.xpCost;

  const getInrPrice = (item: StoreItem): number | null => {
    const metadata = item.metadata as { priceInr?: unknown; currency?: unknown } | undefined;
    if (!metadata || metadata.currency !== 'INR' || typeof metadata.priceInr !== 'number') {
      return null;
    }
    return metadata.priceInr;
  };

  const isPurchased = (itemId: string) => {
    return purchases.some((p) => p.itemId === itemId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pb-20">
      {/* Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            role="status"
            className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-lg px-4 py-2.5 text-sm font-medium text-white ${
              toast.type === 'success' ? 'bg-gray-900 dark:bg-neutral-700' : 'bg-red-600'
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-sm rounded-xl bg-white p-5 dark:bg-neutral-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {selectedItem.name}
                </h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  aria-label="Close"
                  className="-mr-1.5 -mt-1 rounded-full p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-800"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <p className="mb-4 text-sm text-gray-600 dark:text-neutral-400">
                {selectedItem.description || 'No description available.'}
              </p>

              <dl className="mb-5 divide-y divide-gray-100 text-sm dark:divide-neutral-800">
                <div className="flex justify-between py-2.5">
                  <dt className="text-gray-500 dark:text-neutral-400">Price</dt>
                  <dd className="font-semibold tabular-nums text-gray-900 dark:text-white">
                    {getItemCost(selectedItem).toLocaleString()} XP
                  </dd>
                </div>
                {getInrPrice(selectedItem) !== null && (
                  <div className="flex justify-between py-2.5">
                    <dt className="text-gray-500 dark:text-neutral-400">Cash price</dt>
                    <dd className="font-semibold text-gray-900 dark:text-white">
                      ₹{getInrPrice(selectedItem)}
                    </dd>
                  </div>
                )}
                <div className="flex justify-between py-2.5">
                  <dt className="text-gray-500 dark:text-neutral-400">Your balance</dt>
                  <dd className="tabular-nums text-gray-900 dark:text-white">
                    {xpBalance.toLocaleString()} XP
                  </dd>
                </div>
                {selectedItem.stock !== undefined && selectedItem.stock !== null && (
                  <div className="flex justify-between py-2.5">
                    <dt className="text-gray-500 dark:text-neutral-400">In stock</dt>
                    <dd className="text-gray-900 dark:text-white">{selectedItem.stock}</dd>
                  </div>
                )}
              </dl>

              {isPurchased(selectedItem.id) ? (
                <p className="py-2 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  You own this item
                </p>
              ) : (
                <button
                  onClick={() => handlePurchase(selectedItem)}
                  disabled={purchasing === selectedItem.id || xpBalance < getItemCost(selectedItem)}
                  className="h-10 w-full rounded-lg bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 dark:disabled:bg-neutral-800"
                >
                  {purchasing === selectedItem.id
                    ? 'Purchasing...'
                    : xpBalance < getItemCost(selectedItem)
                      ? `Need ${(getItemCost(selectedItem) - xpBalance).toLocaleString()} more XP`
                      : 'Buy'}
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="mx-auto max-w-xl px-4 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/more"
              aria-label="Back to settings"
              className="-ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              <ChevronLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">XP Store</h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Balance{' '}
            <span className="font-semibold tabular-nums text-gray-900 dark:text-white">
              {xpBalance.toLocaleString()} XP
            </span>
          </p>
        </div>

        <div role="tablist" aria-label="Store sections" className="mt-4 flex border-b border-gray-200 dark:border-neutral-800">
          {[
            { id: 'shop', label: 'Shop' },
            { id: 'inventory', label: 'My items' },
            { id: 'history', label: 'History' },
          ].map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`-mb-px flex-1 border-b-2 py-3 text-sm font-semibold ${
                activeTab === tab.id
                  ? 'border-gray-900 text-gray-900 dark:border-white dark:text-white'
                  : 'border-transparent text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <StoreListings
        activeTab={activeTab}
        categories={categories}
        filteredItems={filteredItems}
        getInrPrice={getInrPrice}
        getItemCost={getItemCost}
        inventory={inventory}
        isPurchased={isPurchased}
        items={items}
        purchases={purchases}
        router={router}
        selectedCategory={selectedCategory}
        setActiveTab={setActiveTab}
        setSelectedCategory={setSelectedCategory}
        setSelectedItem={setSelectedItem}
        setThemeKey={setThemeKey}
      />
    </div>
  );
}

export default function StorePageWrapper() {
  return (
    <ProtectedRoute>
      <StorePage />
    </ProtectedRoute>
  );
}
