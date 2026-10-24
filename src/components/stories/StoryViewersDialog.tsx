'use client';
import { ProfileLink } from '@/components/profile/ProfileLink';
import { AnimatePresence, motion } from 'framer-motion';
import { Eye, Loader2, X } from 'lucide-react';
import Image from 'next/image';

interface StoryViewersDialogProps {
  currentViewsCount: number;
  formatTimeAgo: (date: Date) => string;
  handleCloseViewers: () => void;
  isOwnStory: boolean;
  isViewersLoading: boolean;
  loadStoryViewers: (cursor?: string | undefined, append?: boolean) => Promise<void>;
  showViewers: boolean;
  viewers: import('@/lib/api/stories').StoryViewer[];
  viewersCursor: string | null;
  viewersError: string | null;
  viewersHasMore: boolean;
}

export function StoryViewersDialog({
  currentViewsCount,
  formatTimeAgo,
  handleCloseViewers,
  isOwnStory,
  isViewersLoading,
  loadStoryViewers,
  showViewers,
  viewers,
  viewersCursor,
  viewersError,
  viewersHasMore,
}: StoryViewersDialogProps) {
  return (
    <AnimatePresence>
      {showViewers && isOwnStory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-30 flex items-end justify-center bg-black/55"
          onClick={(event) => {
            event.stopPropagation();
            handleCloseViewers();
          }}
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="flex max-h-[70dvh] w-full max-w-lg flex-col rounded-t-3xl border-t border-white/10 bg-neutral-950 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="px-4 pb-3 pt-2">
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/25" />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold">Story viewers</h2>
                  <p className="text-xs text-white/55">
                    {currentViewsCount} {currentViewsCount === 1 ? 'person' : 'people'} viewed this
                    story
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCloseViewers}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"
                  aria-label="Close story viewers"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="min-h-28 flex-1 overflow-y-auto border-t border-white/10 px-3 py-2">
              {isViewersLoading && viewers.length === 0 ? (
                <div className="flex h-28 items-center justify-center">
                  <Loader2 className="h-5 w-5 animate-spin text-white/65" />
                </div>
              ) : viewersError && viewers.length === 0 ? (
                <div className="flex h-32 flex-col items-center justify-center gap-3 text-center">
                  <p className="text-sm text-white/65">{viewersError}</p>
                  <button
                    type="button"
                    onClick={() => void loadStoryViewers()}
                    className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black"
                  >
                    Try again
                  </button>
                </div>
              ) : viewers.length === 0 ? (
                <div className="flex h-32 flex-col items-center justify-center gap-2 text-center text-white/55">
                  <Eye className="h-6 w-6" />
                  <p className="text-sm">No viewers yet</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {viewers.map(
                    (viewer) =>
                      viewer.user && (
                        <ProfileLink
                          key={viewer.id}
                          profileId={viewer.user.id}
                          className="flex items-center gap-3 rounded-2xl px-2 py-2.5 transition-colors hover:bg-white/5"
                        >
                          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-white/10">
                            {viewer.user.profileImage ? (
                              <Image
                                src={viewer.user.profileImage}
                                alt={viewer.user.name}
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-bold">
                                {viewer.user.name.charAt(0).toUpperCase()}
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold">{viewer.user.name}</p>
                            <p className="truncate text-xs text-white/55">
                              @{viewer.user.username}
                            </p>
                          </div>
                          <span className="flex-shrink-0 text-[11px] text-white/45">
                            {formatTimeAgo(new Date(viewer.viewedAt))}
                          </span>
                        </ProfileLink>
                      )
                  )}

                  {viewersHasMore && viewersCursor && (
                    <button
                      type="button"
                      disabled={isViewersLoading}
                      onClick={() => void loadStoryViewers(viewersCursor, true)}
                      className="mx-auto mt-2 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium disabled:opacity-60"
                    >
                      {isViewersLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                      Load more
                    </button>
                  )}
                </div>
              )}
            </div>
            <div className="h-[env(safe-area-inset-bottom)]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
