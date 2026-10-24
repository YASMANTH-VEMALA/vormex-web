'use client';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { GroupImageUploadModal } from '@/components/groups';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type * as React from 'react';
import { GroupGeneralSettings } from './GroupGeneralSettings';
import { GroupInvitationsPanel } from './GroupInvitationsPanel';
import { GroupJoinRequestsPanel } from './GroupJoinRequestsPanel';

interface GroupSettingsViewProps {
  activeTab: import('@/app/groups/[slug]/settings/page.types').SettingsTab;
  deleteConfirmText: string;
  deleting: boolean;
  error: string | null;
  formData: {
    name: string;
    description: string;
    rules: string;
    category: string;
    privacy: 'PUBLIC' | 'PRIVATE' | 'SECRET';
  };
  group: import('@/lib/api/groups.types').Group;
  handleCancelInvite: (inviteId: string) => Promise<void>;
  handleCoverUpdated: (imageUrl: string) => void;
  handleDeleteGroup: () => Promise<void>;
  handleIconUpdated: (imageUrl: string) => void;
  handleInviteUser: (userId: string) => Promise<void>;
  handleRemoveMember: (memberId: string) => Promise<void>;
  handleRequest: (requestId: string, action: 'approve' | 'reject') => Promise<void>;
  handleSaveGeneral: () => Promise<void>;
  handleUpdateRole: (memberId: string, newRole: 'ADMIN' | 'MODERATOR' | 'MEMBER') => Promise<void>;
  inviting: string | null;
  members: import('@/lib/api/groups.types').GroupMember[];
  pendingInvites: import('@/lib/api/groups.types').GroupInvite[];
  pendingRequests: import('@/lib/api/groups.types').GroupJoinRequest[];
  processingRequest: string | null;
  saving: boolean;
  searchQuery: string;
  searchResults: import('@/lib/api/people').SearchUser[];
  searching: boolean;
  setActiveTab: React.Dispatch<
    React.SetStateAction<import('@/app/groups/[slug]/settings/page.types').SettingsTab>
  >;
  setDeleteConfirmText: React.Dispatch<React.SetStateAction<string>>;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
      rules: string;
      category: string;
      privacy: 'PUBLIC' | 'PRIVATE' | 'SECRET';
    }>
  >;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setShowCoverModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowIconModal: React.Dispatch<React.SetStateAction<boolean>>;
  showCoverModal: boolean;
  showDeleteModal: boolean;
  showIconModal: boolean;
  successMessage: string | null;
  tabs: {
    id: import('@/app/groups/[slug]/settings/page.types').SettingsTab;
    label: string;
    icon: React.ReactNode;
    badge?: number | undefined;
    hidden?: boolean | undefined;
  }[];
}

export function GroupSettingsView({
  activeTab,
  deleteConfirmText,
  deleting,
  error,
  formData,
  group,
  handleCancelInvite,
  handleCoverUpdated,
  handleDeleteGroup,
  handleIconUpdated,
  handleInviteUser,
  handleRemoveMember,
  handleRequest,
  handleSaveGeneral,
  handleUpdateRole,
  inviting,
  members,
  pendingInvites,
  pendingRequests,
  processingRequest,
  saving,
  searchQuery,
  searchResults,
  searching,
  setActiveTab,
  setDeleteConfirmText,
  setFormData,
  setSearchQuery,
  setShowCoverModal,
  setShowDeleteModal,
  setShowIconModal,
  showCoverModal,
  showDeleteModal,
  showIconModal,
  successMessage,
  tabs,
}: GroupSettingsViewProps) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Link
                href={`/groups/${group.slug}`}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Group Settings</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">{group.name}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Messages */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl"
              >
                {error}
              </motion.div>
            )}
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl"
              >
                {successMessage}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Tabs */}
            <div className="md:w-64 shrink-0">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                {tabs
                  .filter((tab) => !tab.hidden)
                  .map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      } ${tab.id === 'danger' ? 'text-red-600 dark:text-red-400' : ''}`}
                    >
                      {tab.icon}
                      <span className="font-medium flex-1">{tab.label}</span>
                      {tab.badge !== undefined && tab.badge > 0 && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded-full">
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* General Settings */}
              <GroupGeneralSettings
                activeTab={activeTab}
                formData={formData}
                group={group}
                handleSaveGeneral={handleSaveGeneral}
                saving={saving}
                setFormData={setFormData}
                setShowCoverModal={setShowCoverModal}
                setShowIconModal={setShowIconModal}
              />

              {/* Members Management */}
              {activeTab === 'members' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
                >
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                    Manage Members
                  </h2>

                  <div className="space-y-4">
                    {members.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                            {member.user.profileImage || member.user.avatar ? (
                              <Image
                                src={member.user.profileImage || member.user.avatar || ''}
                                alt={member.user.name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
                                {member.user.name.charAt(0).toUpperCase()}
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {member.user.name}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              @{member.user.username}
                            </p>
                          </div>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              member.role === 'OWNER'
                                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                                : member.role === 'ADMIN'
                                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                  : member.role === 'MODERATOR'
                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                                    : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                            }`}
                          >
                            {member.role}
                          </span>
                        </div>

                        {member.role !== 'OWNER' &&
                          (group.memberRole === 'OWNER' || group.userRole === 'OWNER') && (
                            <div className="flex items-center gap-2">
                              <select
                                value={member.role}
                                onChange={(e) =>
                                  handleUpdateRole(
                                    member.id,
                                    e.target.value as 'ADMIN' | 'MODERATOR' | 'MEMBER'
                                  )
                                }
                                className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              >
                                <option value="ADMIN">Admin</option>
                                <option value="MODERATOR">Moderator</option>
                                <option value="MEMBER">Member</option>
                              </select>
                              <button
                                onClick={() => handleRemoveMember(member.id)}
                                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                title="Remove member"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          )}
                      </div>
                    ))}

                    {members.length === 0 && (
                      <div className="text-center py-8">
                        <p className="text-gray-500 dark:text-gray-400">No members found</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Join Requests (for Private/Secret groups) */}
              <GroupJoinRequestsPanel
                activeTab={activeTab}
                group={group}
                handleRequest={handleRequest}
                pendingRequests={pendingRequests}
                processingRequest={processingRequest}
              />

              {/* Invites (for Secret groups) */}
              <GroupInvitationsPanel
                activeTab={activeTab}
                group={group}
                handleCancelInvite={handleCancelInvite}
                handleInviteUser={handleInviteUser}
                inviting={inviting}
                pendingInvites={pendingInvites}
                processingRequest={processingRequest}
                searchQuery={searchQuery}
                searchResults={searchResults}
                searching={searching}
                setSearchQuery={setSearchQuery}
              />

              {/* Danger Zone */}
              {activeTab === 'danger' &&
                (group.memberRole === 'OWNER' || group.userRole === 'OWNER') && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border-2 border-red-200 dark:border-red-800"
                  >
                    <h2 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-6">
                      Danger Zone
                    </h2>

                    <div className="space-y-6">
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                        <h3 className="font-medium text-red-600 dark:text-red-400 mb-2">
                          Delete Group
                        </h3>
                        <p className="text-sm text-red-600/80 dark:text-red-400/80 mb-4">
                          Once you delete a group, there is no going back. All posts, messages, and
                          members will be permanently deleted.
                        </p>
                        <button
                          onClick={() => setShowDeleteModal(true)}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                          Delete Group
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
            </div>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {showDeleteModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={() => setShowDeleteModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Delete Group?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    This action cannot be undone. Type <strong>{group.name}</strong> to confirm.
                  </p>
                  <input
                    type="text"
                    value={deleteConfirmText}
                    onChange={(e) => setDeleteConfirmText(e.target.value)}
                    placeholder="Type group name to confirm"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setShowDeleteModal(false);
                      setDeleteConfirmText('');
                    }}
                    className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteGroup}
                    disabled={deleteConfirmText !== group.name || deleting}
                    className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {deleting ? 'Deleting...' : 'Delete Group'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Upload Modals */}
        <GroupImageUploadModal
          isOpen={showIconModal}
          onClose={() => setShowIconModal(false)}
          groupId={group.id}
          type="icon"
          currentImageUrl={group.iconImage}
          onImageUpdated={handleIconUpdated}
        />
        <GroupImageUploadModal
          isOpen={showCoverModal}
          onClose={() => setShowCoverModal(false)}
          groupId={group.id}
          type="cover"
          currentImageUrl={group.coverImage}
          onImageUpdated={handleCoverUpdated}
        />
      </div>
    </ProtectedRoute>
  );
}
