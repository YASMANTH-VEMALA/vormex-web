'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type * as React from 'react';

interface GroupInvitationsPanelProps {
  activeTab: import('@/app/groups/[slug]/settings/page.types').SettingsTab;
  group: import('@/lib/api/groups.types').Group;
  handleCancelInvite: (inviteId: string) => Promise<void>;
  handleInviteUser: (userId: string) => Promise<void>;
  inviting: string | null;
  pendingInvites: import('@/lib/api/groups.types').GroupInvite[];
  processingRequest: string | null;
  searchQuery: string;
  searchResults: import('@/lib/api/people').SearchUser[];
  searching: boolean;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export function GroupInvitationsPanel({
  activeTab,
  group,
  handleCancelInvite,
  handleInviteUser,
  inviting,
  pendingInvites,
  processingRequest,
  searchQuery,
  searchResults,
  searching,
  setSearchQuery,
}: GroupInvitationsPanelProps) {
  return (
    <>
      {activeTab === 'invites' && group.privacy === 'SECRET' && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Invite Members
          </h2>

          {/* Search to invite */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search users to invite
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or username..."
                className="w-full px-4 py-3 pl-10 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searching && (
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
            </div>

            {/* Search results */}
            {searchResults.length > 0 && (
              <div className="mt-2 border border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden">
                {searchResults.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                        {user.profileImage ? (
                          <Image
                            src={user.profileImage}
                            alt={user.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">@{user.username}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleInviteUser(user.id)}
                      disabled={inviting === user.id}
                      className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                      {inviting === user.id ? 'Sending...' : 'Invite'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pending invites */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              Pending Invites ({pendingInvites.length})
            </h3>
            <div className="space-y-3">
              {pendingInvites.map((invite) => (
                <div
                  key={invite.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                      {invite.invitedUser.profileImage ? (
                        <Image
                          src={invite.invitedUser.profileImage}
                          alt={invite.invitedUser.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
                          {invite.invitedUser.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {invite.invitedUser.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        @{invite.invitedUser.username}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Invited {new Date(invite.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCancelInvite(invite.id)}
                    disabled={processingRequest === invite.id}
                    className="px-3 py-1.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </div>
              ))}

              {pendingInvites.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    No pending invites. Search for users above to invite them.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
