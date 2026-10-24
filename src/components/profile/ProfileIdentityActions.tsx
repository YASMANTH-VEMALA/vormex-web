'use client';
import { Button } from '@/components/ui/Button';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Camera,
  Check,
  Clock,
  Copy,
  Edit2,
  Flag,
  Loader2,
  MessageCircle,
  MoreHorizontal,
  Share2,
  Shield,
  UserCheck,
  UserMinus,
  UserPlus,
  X,
} from 'lucide-react';
import type * as React from 'react';

interface ProfileIdentityActionsProps {
  actionMenuRef: React.RefObject<HTMLDivElement | null>;
  connectionStatus: import('@/components/profile/ProfileHeader.types').ConnectionStatus;
  copied: boolean;
  errorFor: (userId: string) => string | undefined;
  failedIds: ReadonlySet<string>;
  handleAcceptRequest: () => void;
  handleCancelRequest: () => Promise<void>;
  handleConnect: () => void;
  handleCopyLink: () => void;
  handleFollowToggle: () => Promise<void>;
  handleMessage: () => Promise<void>;
  handleRemoveConnection: () => Promise<void> | undefined;
  isFollowing: boolean;
  isOwner: boolean;
  loadingConnection: boolean;
  loadingFollow: boolean;
  loadingMessage: boolean;
  messageError: string | null;
  onEditAvatar: (() => void) | undefined;
  onEditProfile: (() => void) | undefined;
  profileImageSrc: string | null;
  setShowBlockModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowConnectMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMoreMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowReportModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowShareMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showConnectMenu: boolean;
  showMoreMenu: boolean;
  showShareMenu: boolean;
  user: import('@/types/profile').ProfileUser;
}

export function ProfileIdentityActions({
  actionMenuRef,
  connectionStatus,
  copied,
  errorFor,
  failedIds,
  handleAcceptRequest,
  handleCancelRequest,
  handleConnect,
  handleCopyLink,
  handleFollowToggle,
  handleMessage,
  handleRemoveConnection,
  isFollowing,
  isOwner,
  loadingConnection,
  loadingFollow,
  loadingMessage,
  messageError,
  onEditAvatar,
  onEditProfile,
  profileImageSrc,
  setShowBlockModal,
  setShowConnectMenu,
  setShowMoreMenu,
  setShowReportModal,
  setShowShareMenu,
  showConnectMenu,
  showMoreMenu,
  showShareMenu,
  user,
}: ProfileIdentityActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      {/* ───────────────────────────────────────────────────────────────────
                  PROFILE AVATAR - Large, LinkedIn-style positioning
              ─────────────────────────────────────────────────────────────────── */}
      <div className="absolute -top-14 sm:relative sm:top-0 left-4 sm:left-0 sm:-mt-24 flex-shrink-0">
        <div className="relative">
          {/* Profile avatar */}
          <div className="relative">
            <div className="w-28 h-28 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-xl bg-white dark:bg-neutral-900">
              <UserAvatar
                imageSrc={profileImageSrc}
                name={user.name}
                className="h-full w-full rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white"
                fallbackClassName="text-4xl sm:text-6xl"
              />
            </div>
          </div>

          {/* Edit avatar button (owner only) */}
          {isOwner && (
            <button
              onClick={onEditAvatar}
              className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 p-1.5 sm:p-2 rounded-full bg-white dark:bg-neutral-800 shadow-md border border-gray-200 dark:border-neutral-700 text-gray-600 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
            >
              <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          )}
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
                  ACTION BUTTONS - High contrast, LinkedIn-style
              ─────────────────────────────────────────────────────────────────── */}
      <div
        ref={actionMenuRef}
        className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3 sm:pb-2"
      >
        {isOwner ? (
          <>
            <Button
              onClick={onEditProfile}
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all text-sm"
            >
              <Edit2 className="w-4 h-4" />
              Edit profile
            </Button>

            {/* Share dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2.5 rounded-full border-2 border-gray-300 dark:border-neutral-600 text-gray-600 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-800 hover:border-gray-400 dark:hover:border-neutral-500 transition-all"
              >
                <Share2 className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 8 }}
                    className="absolute right-0 mt-2 w-56 py-2 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-gray-200 dark:border-neutral-700 z-50"
                  >
                    <button
                      onClick={handleCopyLink}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      {copied ? 'Link copied!' : 'Copy profile link'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <>
            {/* ═══════════════════════════════════════════════════════════════
                        CONNECT BUTTON - LinkedIn-style with states
                    ═══════════════════════════════════════════════════════════════ */}
            <div className="relative">
              {connectionStatus === 'none' && (
                <Button
                  onClick={handleConnect}
                  title={failedIds.has(user.id) ? errorFor(user.id) : undefined}
                  className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all text-sm"
                >
                  <UserPlus className="w-4 h-4" />
                  {failedIds.has(user.id) ? 'Retry' : 'Connect'}
                </Button>
              )}

              {connectionStatus === 'pending_sent' && (
                <>
                  <Button
                    onClick={() => setShowConnectMenu(!showConnectMenu)}
                    className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 border border-gray-300 dark:border-neutral-600 rounded-full font-semibold transition-all text-sm hover:bg-gray-200 dark:hover:bg-neutral-700"
                  >
                    <Clock className="w-4 h-4" />
                    Pending
                  </Button>
                  <AnimatePresence>
                    {showConnectMenu && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 8 }}
                        className="absolute left-0 mt-2 w-48 py-2 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-gray-200 dark:border-neutral-700 z-50"
                      >
                        <button
                          onClick={handleCancelRequest}
                          disabled={loadingConnection}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
                        >
                          <X className="w-4 h-4" />
                          Cancel request
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}

              {connectionStatus === 'pending_received' && (
                <Button
                  onClick={handleAcceptRequest}
                  title={failedIds.has(user.id) ? errorFor(user.id) : undefined}
                  className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-all text-sm"
                >
                  <UserCheck className="w-4 h-4" />
                  {failedIds.has(user.id) ? 'Retry' : 'Accept Request'}
                </Button>
              )}

              {connectionStatus === 'connected' && (
                <>
                  <Button
                    onClick={() => setShowConnectMenu(!showConnectMenu)}
                    className="flex items-center gap-2 px-6 py-2.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 rounded-full font-semibold transition-all text-sm hover:bg-emerald-200 dark:hover:bg-emerald-900/50"
                  >
                    <UserCheck className="w-4 h-4" />
                    Connected
                  </Button>
                  <AnimatePresence>
                    {showConnectMenu && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 8 }}
                        className="absolute left-0 mt-2 w-48 py-2 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-gray-200 dark:border-neutral-700 z-50"
                      >
                        <button
                          onClick={handleRemoveConnection}
                          disabled={loadingConnection}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
                        >
                          <UserMinus className="w-4 h-4" />
                          Remove connection
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>

            {connectionStatus === 'blocked' ? (
              <Button
                disabled
                className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-neutral-400 border border-gray-300 dark:border-neutral-700 rounded-full font-semibold text-sm"
              >
                <Shield className="w-4 h-4" />
                Blocked
              </Button>
            ) : (
              <>
                <Button
                  onClick={handleMessage}
                  disabled={loadingMessage}
                  className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-950 rounded-full font-semibold transition-all text-sm"
                >
                  {loadingMessage ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <MessageCircle className="w-4 h-4" />
                  )}
                  Message
                </Button>

                <Button
                  onClick={handleFollowToggle}
                  disabled={loadingFollow}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all text-sm ${
                    isFollowing
                      ? 'bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 border border-gray-300 dark:border-neutral-600 hover:bg-red-50 hover:border-red-300 hover:text-red-600 dark:hover:bg-red-950/30 dark:hover:border-red-700 dark:hover:text-red-400'
                      : 'bg-transparent border-2 border-gray-300 dark:border-neutral-600 text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-800 hover:border-gray-400 dark:hover:border-neutral-500'
                  }`}
                >
                  {loadingFollow ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : isFollowing ? (
                    <UserCheck className="w-4 h-4" />
                  ) : (
                    <UserPlus className="w-4 h-4" />
                  )}
                  {isFollowing ? 'Following' : 'Follow'}
                </Button>
              </>
            )}

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowMoreMenu((open) => !open)}
                aria-label="Open profile actions"
                aria-haspopup="menu"
                aria-expanded={showMoreMenu}
                className="p-2.5 rounded-full border-2 border-gray-300 dark:border-neutral-600 text-gray-600 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all"
              >
                <MoreHorizontal className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {showMoreMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 8 }}
                    role="menu"
                    className="absolute right-0 mt-2 w-56 py-2 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-gray-200 dark:border-neutral-700 z-50"
                  >
                    <button
                      type="button"
                      role="menuitem"
                      onClick={handleCopyLink}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      {copied ? 'Link copied!' : 'Copy profile link'}
                    </button>
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setShowMoreMenu(false);
                        setShowReportModal(true);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
                    >
                      <Flag className="w-4 h-4" />
                      Report profile
                    </button>
                    {connectionStatus !== 'blocked' && (
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setShowMoreMenu(false);
                          setShowBlockModal(true);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
                      >
                        <Shield className="w-4 h-4" />
                        Block user
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {messageError && (
              <p className="basis-full text-center sm:text-right text-xs text-red-600 dark:text-red-400">
                {messageError}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
