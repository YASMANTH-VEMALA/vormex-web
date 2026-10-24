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
import {
  Check,
  ChevronLeft,
  Clock,
  Coins,
  Crown,
  Gift,
  MessageCircle,
  Package,
  Palette,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  X,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

const CATEGORY_ORDER = ['chat_customization', 'theme', 'frame', 'effect', 'badge', 'donation'];

const categoryIcons: Record<string, React.ReactNode> = {
  all: <ShoppingBag className="w-4 h-4" />,
  chat_customization: <MessageCircle className="w-4 h-4" />,
  theme: <Palette className="w-4 h-4" />,
  frame: <Crown className="w-4 h-4" />,
  effect: <Zap className="w-4 h-4" />,
  badge: <Star className="w-4 h-4" />,
  donation: <Sparkles className="w-4 h-4" />,
};

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

  const getItemIcon = (type: string, category?: string) => {
    if (category === 'chat_customization') return <MessageCircle className="w-6 h-6" />;

    switch (type) {
      case 'profile_theme':
      case 'card_style':
      case 'chat_theme_pack':
        return <Palette className="w-6 h-6" />;
      case 'profile_frame':
        return <Crown className="w-6 h-6" />;
      case 'exclusive_badge':
        return <Star className="w-6 h-6" />;
      case 'name_effect':
      case 'message_effect_pack':
      case 'chat_reaction_pack':
        return <Zap className="w-6 h-6" />;
      case 'donation':
        return <Sparkles className="w-6 h-6" />;
      default:
        return <Gift className="w-6 h-6" />;
    }
  };

  const isPurchased = (itemId: string) => {
    return purchases.some((p) => p.itemId === itemId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 pb-20">
      {/* Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg text-sm font-medium ${
              toast.type === 'success'
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
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
              className="bg-white dark:bg-neutral-900 rounded-xl p-5 max-w-sm w-full border border-gray-200 dark:border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                  {getItemIcon(selectedItem.type, selectedItem.category)}
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {selectedItem.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {selectedItem.description || 'No description available.'}
              </p>

              {getInrPrice(selectedItem) !== null && (
                <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-amber-100/70 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300">
                  <span className="text-xs font-semibold uppercase tracking-wide">Cash Pack</span>
                  <span className="text-sm font-bold">₹{getInrPrice(selectedItem)}</span>
                </div>
              )}

              <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-gray-100 dark:bg-neutral-800">
                <Coins className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {getItemCost(selectedItem).toLocaleString()} XP
                </span>
              </div>

              {selectedItem.stock !== undefined && selectedItem.stock !== null && (
                <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
                  <Package className="w-3.5 h-3.5" />
                  <span>{selectedItem.stock} remaining in stock</span>
                </div>
              )}

              {isPurchased(selectedItem.id) ? (
                <div className="w-full py-2.5 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  Already Owned
                </div>
              ) : (
                <button
                  onClick={() => handlePurchase(selectedItem)}
                  disabled={purchasing === selectedItem.id || xpBalance < getItemCost(selectedItem)}
                  className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                    xpBalance >= getItemCost(selectedItem)
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                      : 'bg-gray-200 dark:bg-neutral-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {purchasing === selectedItem.id ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-current"></div>
                      Purchasing...
                    </>
                  ) : xpBalance < getItemCost(selectedItem) ? (
                    <>
                      <Coins className="w-4 h-4" />
                      Need {(getItemCost(selectedItem) - xpBalance).toLocaleString()} more XP
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      Purchase Now
                    </>
                  )}
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-neutral-800">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Link
                href="/more"
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </Link>
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">XP Store</h1>
                <p className="text-xs text-gray-500">Spend your XP balance on rewards</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-neutral-800">
              <Coins className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {xpBalance.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex px-4 gap-2 pb-3">
            {[
              { id: 'shop', label: 'Shop', icon: <ShoppingBag className="w-4 h-4" /> },
              { id: 'inventory', label: 'My Items', icon: <Package className="w-4 h-4" /> },
              { id: 'history', label: 'History', icon: <Clock className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <StoreListings
        activeTab={activeTab}
        categories={categories}
        categoryIcons={categoryIcons}
        filteredItems={filteredItems}
        getInrPrice={getInrPrice}
        getItemCost={getItemCost}
        getItemIcon={getItemIcon}
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
