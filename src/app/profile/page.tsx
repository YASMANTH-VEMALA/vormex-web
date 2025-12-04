'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { useAuth } from '@/lib/auth/useAuth';

function ProfileContent() {
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const profileId = searchParams.get('id') || user?.id;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md dark:shadow-neutral-800 p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Profile
          </h1>
          {profileId && (
            <p className="text-gray-600 dark:text-gray-400">
              Profile ID: {profileId}
            </p>
          )}
          {user && (
            <div className="mt-4 space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                Name: {user.name}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Email: {user.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <Suspense
        fallback={
          <div className="min-h-screen bg-white dark:bg-neutral-950 p-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md dark:shadow-neutral-800 p-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Profile
                </h1>
                <p className="text-gray-600 dark:text-gray-400">Loading...</p>
              </div>
            </div>
          </div>
        }
      >
        <ProfileContent />
      </Suspense>
    </ProtectedRoute>
  );
}

