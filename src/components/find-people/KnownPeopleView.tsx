'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  RefreshCw,
  Share2,
  ShieldCheck,
  Trash2,
  Users,
} from 'lucide-react';
import type * as React from 'react';
import { PersonCard } from './PersonCard';
import { PersonCardSkeleton } from './PersonCardSkeleton';

interface KnownPeopleViewProps {
  data: import('@/lib/api/people').PeopleYouKnowResponse;
  error: string | null;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleClear: () => Promise<void>;
  handleConnectionChange: (
    personId: string,
    relationship: import('@/lib/api/people').PersonRelationship
  ) => void;
  handleFileSelected: (event: React.ChangeEvent<HTMLInputElement, Element>) => Promise<void>;
  handleInvite: (invite: import('@/lib/api/people').PeopleYouKnowInvite) => Promise<void>;
  handlePickerContinue: () => Promise<void>;
  hasMoreSavedResults: boolean;
  hasSavedResults: boolean;
  isClearing: boolean;
  isDiscovering: boolean;
  isGateOpen: boolean;
  isLoading: boolean;
  justFoundCount: number | null;
  loadMoreRef: React.RefObject<HTMLDivElement | null>;
  processingInviteId: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setIsGateOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
  supportsContactPicker: boolean;
  visibleCount: number;
}

export function KnownPeopleView({
  data,
  error,
  fileInputRef,
  handleClear,
  handleConnectionChange,
  handleFileSelected,
  handleInvite,
  handlePickerContinue,
  hasMoreSavedResults,
  hasSavedResults,
  isClearing,
  isDiscovering,
  isGateOpen,
  isLoading,
  justFoundCount,
  loadMoreRef,
  processingInviteId,
  setError,
  setIsGateOpen,
  setVisibleCount,
  supportsContactPicker,
  visibleCount,
}: KnownPeopleViewProps) {
  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv,text/csv"
        className="hidden"
        onChange={handleFileSelected}
      />

      <Dialog.Root open={isGateOpen} onOpenChange={setIsGateOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <Dialog.Content className="fixed inset-x-4 bottom-4 z-50 rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 sm:inset-x-auto sm:left-1/2 sm:top-1/2 sm:bottom-auto sm:w-full sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2">
            <Dialog.Title className="text-2xl font-semibold text-gray-900 dark:text-white">
              Find people you already know
            </Dialog.Title>
            <div className="mt-4 space-y-3 text-sm text-gray-600 dark:text-neutral-300">
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span>See friends already on Vormex</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span>Discover mutual connections</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span>You&apos;re always in control</span>
              </div>
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-gray-400 dark:text-neutral-500">
              No spam
            </p>

            {error && (
              <div className="mt-4 flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setIsGateOpen(false)}
                className="rounded-2xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                Skip
              </button>
              <button
                type="button"
                onClick={handlePickerContinue}
                disabled={isDiscovering}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                {isDiscovering ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Continue
              </button>
            </div>

            {!supportsContactPicker && (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-4 text-sm font-medium text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Use a file instead
              </button>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {error && !isGateOpen && (
        <div className="flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {!hasSavedResults && !isLoading && (
        <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
          <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950">
            <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              People You Know
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
              You might already know people on Vormex
            </h3>
            <p className="mt-2 max-w-xl text-sm text-gray-600 dark:text-neutral-300">
              See who&apos;s already here and connect instantly.
            </p>
            <button
              type="button"
              onClick={() => {
                setError(null);
                setIsGateOpen(true);
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              <Users className="h-4 w-4" />
              Find them
            </button>
          </div>
        </div>
      )}

      {hasSavedResults && (
        <div className="flex flex-col gap-3 rounded-[28px] border border-gray-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 dark:text-neutral-500">
              People You Know
            </p>
            <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
              Discover people you already know
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
              You&apos;re in control.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setError(null);
                setIsGateOpen(true);
              }}
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
            <button
              type="button"
              onClick={handleClear}
              disabled={isClearing}
              className="inline-flex items-center gap-2 rounded-2xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-70 dark:border-red-900/50 dark:text-red-300 dark:hover:bg-red-950/30"
            >
              {isClearing ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4" />
              )}
              Clear list
            </button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {justFoundCount !== null && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-start gap-3 rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-200"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-sm font-medium">
              {justFoundCount} people from your contacts are on Vormex
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoading && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <PersonCardSkeleton key={index} />
          ))}
        </div>
      )}

      {!isLoading && hasSavedResults && data.matched.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400 dark:text-neutral-500">
                On Vormex
              </h4>
              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-300">
                See who you already know and connect instantly.
              </p>
            </div>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-neutral-800 dark:text-neutral-300">
              {data.stats.matchedCount}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.matched.slice(0, visibleCount).map((person) => (
              <PersonCard
                key={person.id}
                person={person}
                badgeLabel="In your contacts"
                onConnectionChange={handleConnectionChange}
              />
            ))}
          </div>
        </section>
      )}

      {!isLoading && hasSavedResults && data.matched.length === 0 && (
        <div className="rounded-[28px] border border-gray-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-900">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            No one from your contacts is on Vormex yet
          </h4>
          <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
            Bring your people in and start the network yourself.
          </p>
        </div>
      )}

      {!isLoading && hasSavedResults && data.invites.length > 0 && (
        <section className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400 dark:text-neutral-500">
              Invite to Vormex
            </h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-300">
              Bring the people you know with you.
            </p>
          </div>

          <div className="space-y-3">
            {data.invites.slice(0, visibleCount).map((invite) => {
              const invited = Boolean(invite.invitedAt);
              const isProcessing = processingInviteId === invite.id;

              return (
                <div
                  key={invite.id}
                  className="flex items-center justify-between gap-4 rounded-3xl border border-gray-200 bg-white px-4 py-4 dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                      {invite.contactName || 'Someone you know'}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
                      {invited ? 'Invite sent' : 'Share your Vormex link'}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleInvite(invite)}
                    disabled={invited || isProcessing}
                    className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500"
                  >
                    {isProcessing ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : invited ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Share2 className="h-4 w-4" />
                    )}
                    {invited ? 'Invited' : 'Bring to Vormex'}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {hasMoreSavedResults && (
        <div ref={loadMoreRef} className="flex justify-center py-6">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + 50)}
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-600 dark:border-neutral-700 dark:text-neutral-300"
          >
            Load next 50
          </button>
        </div>
      )}
    </div>
  );
}
