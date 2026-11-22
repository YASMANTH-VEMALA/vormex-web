'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Pencil } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { ProfileEntryLogo } from './ProfileEntryLogo';

interface VerticalShowcaseProps<T extends { id: string }> {
  label: string;
  items: T[];
  isOwner: boolean;
  onEdit?: (item: T) => void;
  getTitle: (item: T) => string;
  renderDetail: (item: T) => ReactNode;
  renderVisual: (item: T) => ReactNode;
  /** Extra buttons shown next to the edit pencil for the active item. */
  renderActions?: (item: T) => ReactNode;
}

const variants = {
  enter: (dir: number) => ({ y: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  center: { zIndex: 1, y: 0, opacity: 1 },
  exit: (dir: number) => ({ zIndex: 0, y: dir > 0 ? '100%' : '-100%', opacity: 0 }),
};

/**
 * Shared vertical-tabs layout (adapted from the 21st.dev "Vertical Tabs"
 * component): list of entries on the left, a large visual for the active entry
 * on the right. On small screens the visual sits above the list.
 */
export function VerticalShowcase<T extends { id: string }>({
  label,
  items,
  isOwner,
  onEdit,
  getTitle,
  renderDetail,
  renderVisual,
  renderActions,
}: VerticalShowcaseProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const safeIndex = Math.min(activeIndex, Math.max(items.length - 1, 0));
  const active = items[safeIndex];
  if (!active) return null;

  const goTo = (index: number) => {
    if (index === safeIndex) return;
    setDirection(index > safeIndex ? 1 : -1);
    setActiveIndex(index);
  };
  const step = (delta: number) => goTo((safeIndex + delta + items.length) % items.length);

  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="order-1 lg:order-2 lg:col-span-7">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-white/10 dark:bg-white/5 lg:aspect-[16/11]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={active.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: 'spring', stiffness: 260, damping: 32 },
                opacity: { duration: 0.35 },
              }}
              className="absolute inset-0"
            >
              {renderVisual(active)}
            </motion.div>
          </AnimatePresence>

          {items.length > 1 && (
            <div className="absolute bottom-3 right-3 z-20 flex gap-2">
              {[
                { name: 'Previous', delta: -1, Icon: ArrowLeft },
                { name: 'Next', delta: 1, Icon: ArrowRight },
              ].map(({ name, delta, Icon }) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => step(delta)}
                  aria-label={`${name} ${label.toLowerCase()}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-transform hover:bg-black/60 active:scale-90"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div role="tablist" aria-label={label} className="order-2 min-w-0 lg:order-1 lg:col-span-5">
        {items.map((item, index) => {
          const isActive = index === safeIndex;
          return (
            <div
              key={item.id}
              className="relative border-t border-neutral-200 first:border-0 dark:border-white/10"
            >
              <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-neutral-200 dark:bg-white/10">
                <motion.div
                  className="absolute left-0 top-0 w-full origin-top bg-neutral-900 dark:bg-white"
                  initial={false}
                  animate={{ height: isActive ? '100%' : '0%' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => goTo(index)}
                className={cn(
                  'flex w-full items-start gap-3 py-4 pl-5 pr-1 text-left transition-colors',
                  isActive
                    ? 'text-neutral-900 dark:text-white'
                    : 'text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white'
                )}
              >
                <span className="mt-1.5 text-[10px] font-medium tabular-nums opacity-60">
                  /{String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1 break-words text-xl font-medium tracking-tight sm:text-2xl">
                  {getTitle(item)}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pl-[3.25rem] pr-1">
                      {renderDetail(item)}
                      {((isOwner && onEdit) || renderActions) && (
                        <div className="mt-4 flex items-center gap-2">
                          {renderActions?.(item)}
                          {isOwner && onEdit && (
                            <button
                              type="button"
                              onClick={() => onEdit(item)}
                              title="Edit"
                              aria-label={`Edit ${getTitle(item)}`}
                              className="rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-white/10 dark:hover:text-white"
                            >
                              <Pencil className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface ShowcaseVisualProps {
  /** A real picture (certificate scan etc). Shown full-panel when present. */
  image?: string | null;
  /** Organisation logo, used when there is no picture. */
  logo?: string | null;
  label: string;
  title: string;
  subtitle?: string;
  icon: ReactNode;
}

/** Right-hand panel: the entry's picture if it has one, otherwise logo + name. */
export function ShowcaseVisual({ image, logo, label, title, subtitle, icon }: ShowcaseVisualProps) {
  const [failedImage, setFailedImage] = useState<string | null>(null);
  if (image && failedImage !== image) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-neutral-100 p-3 dark:bg-white/5">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-lg object-contain"
          onError={() => setFailedImage(image)}
        />
      </div>
    );
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-neutral-100 to-neutral-200 p-6 text-center dark:from-white/[0.07] dark:to-white/[0.02]">
      <ProfileEntryLogo
        logo={logo}
        label={label}
        fallback={<span className="text-neutral-400 [&>svg]:h-10 [&>svg]:w-10">{icon}</span>}
        className="h-24 w-24 rounded-2xl bg-white/60 text-2xl dark:bg-white/10 sm:h-28 sm:w-28"
      />
      <div className="min-w-0">
        <p className="break-words text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">
          {title}
        </p>
        {subtitle && (
          <p className="mt-1 break-words text-sm text-neutral-500 dark:text-neutral-400">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
