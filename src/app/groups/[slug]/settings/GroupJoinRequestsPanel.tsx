'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GroupJoinRequestsPanelProps {
  activeTab: import('@/app/groups/[slug]/settings/page.types').SettingsTab;
  group: import('@/lib/api/groups.types').Group;
  handleRequest: (requestId: string, action: 'approve' | 'reject') => Promise<void>;
  pendingRequests: import('@/lib/api/groups.types').GroupJoinRequest[];
  processingRequest: string | null;
}

export function GroupJoinRequestsPanel({
  activeTab,
  group,
  handleRequest,
  pendingRequests,
  processingRequest,
}: GroupJoinRequestsPanelProps) {
  return (
    <>
      {activeTab === 'requests' && (group.privacy === 'PRIVATE' || group.privacy === 'SECRET') && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Pending Requests
          </h2>

          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                    {request.user.profileImage ? (
                      <Image
                        src={request.user.profileImage}
                        alt={request.user.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium text-lg">
                        {request.user.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{request.user.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      @{request.user.username}
                    </p>
                    {request.message && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 italic">
                        &ldquo;{request.message}&rdquo;
                      </p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">
                      Requested {new Date(request.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleRequest(request.id, 'approve')}
                    disabled={processingRequest === request.id}
                    className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {processingRequest === request.id ? (
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
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
                    ) : (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                    Approve
                  </button>
                  <button
                    onClick={() => handleRequest(request.id, 'reject')}
                    disabled={processingRequest === request.id}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors disabled:opacity-50"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}

            {pendingRequests.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 dark:text-gray-400">No pending requests</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                  When someone requests to join, they&apos;ll appear here
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}
