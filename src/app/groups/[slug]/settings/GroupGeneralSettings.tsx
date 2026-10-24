'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type * as React from 'react';

interface GroupGeneralSettingsProps {
  activeTab: import('@/app/groups/[slug]/settings/page.types').SettingsTab;
  formData: {
    name: string;
    description: string;
    rules: string;
    category: string;
    privacy: 'PUBLIC' | 'PRIVATE' | 'SECRET';
  };
  group: import('@/lib/api/groups.types').Group;
  handleSaveGeneral: () => Promise<void>;
  saving: boolean;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
      rules: string;
      category: string;
      privacy: 'PUBLIC' | 'PRIVATE' | 'SECRET';
    }>
  >;
  setShowCoverModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowIconModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function GroupGeneralSettings({
  activeTab,
  formData,
  group,
  handleSaveGeneral,
  saving,
  setFormData,
  setShowCoverModal,
  setShowIconModal,
}: GroupGeneralSettingsProps) {
  return (
    <>
      {activeTab === 'general' && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            General Settings
          </h2>

          <div className="space-y-6">
            {/* Group Images */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Group Images</h3>

              {/* Cover Image */}
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Cover Image
                </label>
                <div className="relative">
                  <div className="w-full h-32 rounded-xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                    {group.coverImage && (
                      <Image
                        src={group.coverImage}
                        alt="Group cover"
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <button
                    onClick={() => setShowCoverModal(true)}
                    className="absolute bottom-2 right-2 px-3 py-1.5 bg-white/90 dark:bg-gray-800/90 text-sm font-medium rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 inline mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Change Cover
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Click to upload and crop. Recommended: 1200x400 pixels
                </p>
              </div>

              {/* Icon Image */}
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Group Icon
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    {group.iconImage ? (
                      <Image src={group.iconImage} alt="Group icon" fill className="object-cover" />
                    ) : (
                      <span className="text-2xl font-bold text-white">
                        {group.name.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div>
                    <button
                      onClick={() => setShowIconModal(true)}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Change Icon
                    </button>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Click to upload and crop. Square image recommended
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Group Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter group name"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="What is this group about?"
              />
            </div>

            {/* Rules */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Group Rules
              </label>
              <textarea
                value={formData.rules}
                onChange={(e) => setFormData({ ...formData, rules: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Enter group rules (one per line)"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Separate each rule with a new line
              </p>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Technology, Sports, Art"
              />
            </div>

            {/* Privacy */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Privacy
              </label>
              <div className="space-y-3">
                {[
                  { value: 'PUBLIC', label: 'Public', desc: 'Anyone can find and join' },
                  {
                    value: 'PRIVATE',
                    label: 'Private',
                    desc: 'Anyone can find, but must request to join',
                  },
                  {
                    value: 'SECRET',
                    label: 'Secret',
                    desc: 'Only members can find and invite others',
                  },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                      formData.privacy === option.value
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <input
                      type="radio"
                      name="privacy"
                      value={option.value}
                      checked={formData.privacy === option.value}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          privacy: e.target.value as 'PUBLIC' | 'PRIVATE' | 'SECRET',
                        })
                      }
                      className="mt-1"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{option.label}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{option.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4">
              <button
                onClick={handleSaveGeneral}
                disabled={saving}
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
