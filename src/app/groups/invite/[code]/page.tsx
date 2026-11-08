'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { asApiError } from '@/lib/api/errors';
import { joinGroupByInviteLink, previewGroupInviteLink } from '@/lib/api/groups';
import type { GroupInviteLink } from '@/lib/api/groups';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

interface GroupInvitePageProps {
  params: Promise<{ code: string }>;
}

export default function GroupInvitePage({ params }: GroupInvitePageProps) {
  const { code } = use(params);
  const router = useRouter();
  const queryClient = useQueryClient();
  const [invite, setInvite] = useState<GroupInviteLink | null>(null);
  const [loading, setLoading] = useState(true);
  const [joining, setJoining] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [requested, setRequested] = useState(false);

  useEffect(() => {
    let cancelled = false;
    previewGroupInviteLink(code)
      .then((data) => {
        if (!cancelled) setInvite(data);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(asApiError(err).response?.data?.error || 'This invite link is invalid or expired');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [code]);

  const handleJoin = async () => {
    if (!invite) return;
    try {
      setJoining(true);
      setError(null);
      const result = await joinGroupByInviteLink(code);
      void queryClient.invalidateQueries({ queryKey: ['groups'] });
      if (result.status === 'pending') {
        setRequested(true);
      } else {
        router.push(`/groups/${invite.group.slug}`);
      }
    } catch (err: unknown) {
      setError(asApiError(err).response?.data?.error || 'Failed to join the group');
    } finally {
      setJoining(false);
    }
  };

  const group = invite?.group;
  const needsApproval = Boolean(invite?.requiresApproval);

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 text-center">
          {loading ? (
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto" />
          ) : !group ? (
            <>
              <p className="text-red-500 mb-4">{error || 'Invite link not found'}</p>
              <Link href="/groups" className="text-blue-600 hover:underline">
                Back to groups
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{group.name}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {group.privacy === 'PUBLIC' ? 'Public group' : 'Private group'} · {group.memberCount}{' '}
                {group.memberCount === 1 ? 'member' : 'members'}
              </p>
              {group.description && (
                <p className="mt-4 text-gray-600 dark:text-gray-300">{group.description}</p>
              )}

              {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

              {group.isMember ? (
                <Link
                  href={`/groups/${group.slug}`}
                  className="inline-block mt-6 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Open group
                </Link>
              ) : requested ? (
                <p className="mt-6 text-sm text-green-600 dark:text-green-400">
                  Request sent. You&apos;ll be notified when an admin approves it.
                </p>
              ) : (
                <button
                  onClick={handleJoin}
                  disabled={joining}
                  className="mt-6 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                  {joining ? 'Please wait...' : needsApproval ? 'Request to join' : 'Join group'}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
