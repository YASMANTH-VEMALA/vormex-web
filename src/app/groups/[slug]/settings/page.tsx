'use client';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { useQuery } from '@tanstack/react-query';
import { GroupSettingsView } from './GroupSettingsView';
import type { GroupSettingsPageProps, SettingsTab } from './page.types';
export type { GroupSettingsPageProps, SettingsTab } from './page.types';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { asApiError } from '@/lib/api/errors';
import {
  cancelInvite,
  deleteGroup,
  getGroup,
  getGroupInvites,
  getGroupMembers,
  getJoinRequests,
  Group,
  GroupInvite,
  GroupJoinRequest,
  GroupMember,
  handleJoinRequest,
  inviteToGroup,
  removeMember,
  updateGroup,
  updateMemberRole,
} from '@/lib/api/groups';
import { searchUsers } from '@/lib/api/people';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

export default function GroupSettingsPage({ params }: GroupSettingsPageProps) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [group, setGroup] = useState<Group | null>(null);
  const [members, setMembers] = useState<GroupMember[]>([]);
  const [pendingRequests, setPendingRequests] = useState<GroupJoinRequest[]>([]);
  const [pendingInvites, setPendingInvites] = useState<GroupInvite[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<SettingsTab>('general');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [processingRequest, setProcessingRequest] = useState<string | null>(null);

  // Invite state
  const [searchQuery, setSearchQuery] = useState('');

  const [inviting, setInviting] = useState<string | null>(null);

  // Image upload modal state
  const [showIconModal, setShowIconModal] = useState(false);
  const [showCoverModal, setShowCoverModal] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    rules: '',
    category: '',
    privacy: 'PUBLIC' as 'PUBLIC' | 'PRIVATE' | 'SECRET',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [groupData, membersData] = await Promise.all([
          getGroup(resolvedParams.slug),
          getGroupMembers(resolvedParams.slug),
        ]);

        // Check if user is admin/owner
        const userRole = groupData.memberRole || groupData.userRole;
        if (userRole !== 'OWNER' && userRole !== 'ADMIN') {
          router.push(`/groups/${resolvedParams.slug}`);
          return;
        }

        setGroup(groupData);
        setMembers(membersData.members || []);
        setFormData({
          name: groupData.name,
          description: groupData.description || '',
          rules: Array.isArray(groupData.rules)
            ? groupData.rules.join('\n')
            : groupData.rules || '',
          category: groupData.category || '',
          privacy: groupData.privacy,
        });

        // Fetch pending join requests for private groups
        if (groupData.privacy === 'PRIVATE') {
          try {
            const requests = await getJoinRequests(groupData.id, 'PENDING');
            setPendingRequests(requests);
          } catch {
            // Silently fail
          }
        }

        // Fetch pending invites for secret groups
        if (groupData.privacy === 'SECRET') {
          try {
            const { invites } = await getGroupInvites(groupData.id, 'PENDING');
            setPendingInvites(invites);
          } catch {
            // Silently fail
          }
        }
      } catch (err: unknown) {
        setError(asApiError(err).response?.data?.error || 'Failed to load group settings');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [resolvedParams.slug, router]);

  const debouncedSearch = useDebouncedValue(searchQuery, 300);
  const inviteSearch = useQuery({
    queryKey: ['group-invite-search', group?.id, debouncedSearch],
    queryFn: () => searchUsers(debouncedSearch),
    enabled: debouncedSearch.trim().length >= 2,
  });
  const searching = inviteSearch.isFetching;
  const searchResults =
    searchQuery.trim().length < 2
      ? []
      : (inviteSearch.data ?? []).filter(
          (user) =>
            !members.some((member) => member.user.id === user.id) &&
            !pendingInvites.some((invite) => invite.invitedUserId === user.id)
        );

  const handleSaveGeneral = async () => {
    if (!group) return;

    try {
      setSaving(true);
      setError(null);
      // Convert rules string back to array
      const rulesArray = formData.rules
        .split('\n')
        .map((r) => r.trim())
        .filter((r) => r);
      await updateGroup(group.id, {
        ...formData,
        rules: rulesArray,
      });
      setSuccessMessage('Settings saved successfully!');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err: unknown) {
      setError(asApiError(err).response?.data?.error || 'Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const handleIconUpdated = (imageUrl: string) => {
    if (group) {
      setGroup({ ...group, iconImage: imageUrl });
      setSuccessMessage('Group icon updated successfully!');
      setTimeout(() => setSuccessMessage(null), 3000);
    }
  };

  const handleCoverUpdated = (imageUrl: string) => {
    if (group) {
      setGroup({ ...group, coverImage: imageUrl });
      setSuccessMessage('Group cover updated successfully!');
      setTimeout(() => setSuccessMessage(null), 3000);
    }
  };

  const handleUpdateRole = async (memberId: string, newRole: 'ADMIN' | 'MODERATOR' | 'MEMBER') => {
    if (!group) return;

    try {
      await updateMemberRole(group.id, memberId, newRole);
      setMembers((prev) => prev.map((m) => (m.id === memberId ? { ...m, role: newRole } : m)));
    } catch (err: unknown) {
      setError(asApiError(err).response?.data?.error || 'Failed to update role');
    }
  };

  const handleRemoveMember = async (memberId: string) => {
    if (!group || !confirm('Are you sure you want to remove this member?')) return;

    try {
      await removeMember(group.id, memberId);
      setMembers((prev) => prev.filter((m) => m.id !== memberId));
    } catch (err: unknown) {
      setError(asApiError(err).response?.data?.error || 'Failed to remove member');
    }
  };

  const handleRequest = async (requestId: string, action: 'approve' | 'reject') => {
    if (!group) return;

    try {
      setProcessingRequest(requestId);
      setError(null);
      await handleJoinRequest(group.id, requestId, action);

      // Remove the request from the list
      setPendingRequests((prev) => prev.filter((r) => r.id !== requestId));

      if (action === 'approve') {
        setSuccessMessage('Member approved successfully!');
        // Refresh members list
        const membersData = await getGroupMembers(group.id);
        setMembers(membersData.members || []);
      } else {
        setSuccessMessage('Request rejected');
      }
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err: unknown) {
      setError(asApiError(err).response?.data?.error || `Failed to ${action} request`);
    } finally {
      setProcessingRequest(null);
    }
  };

  const handleInviteUser = async (userId: string) => {
    if (!group) return;

    try {
      setInviting(userId);
      setError(null);
      await inviteToGroup(group.id, userId);

      // Refresh invites list
      const { invites } = await getGroupInvites(group.id, 'PENDING');
      setPendingInvites(invites);

      // Clear search
      setSearchQuery('');

      setSuccessMessage('Invite sent successfully!');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err: unknown) {
      setError(asApiError(err).response?.data?.error || 'Failed to send invite');
    } finally {
      setInviting(null);
    }
  };

  const handleCancelInvite = async (inviteId: string) => {
    if (!group) return;

    try {
      setProcessingRequest(inviteId);
      await cancelInvite(group.id, inviteId);
      setPendingInvites((prev) => prev.filter((i) => i.id !== inviteId));
      setSuccessMessage('Invite cancelled');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err: unknown) {
      setError(asApiError(err).response?.data?.error || 'Failed to cancel invite');
    } finally {
      setProcessingRequest(null);
    }
  };

  const handleDeleteGroup = async () => {
    if (!group || deleteConfirmText !== group.name) return;

    try {
      setDeleting(true);
      await deleteGroup(group.id);
      router.push('/groups');
    } catch (err: unknown) {
      setError(asApiError(err).response?.data?.error || 'Failed to delete group');
      setDeleting(false);
    }
  };

  const tabs: {
    id: SettingsTab;
    label: string;
    icon: React.ReactNode;
    badge?: number;
    hidden?: boolean;
  }[] = [
    {
      id: 'general',
      label: 'General',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 'members',
      label: 'Members',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      id: 'requests',
      label: 'Requests',
      badge: pendingRequests.length,
      hidden: group?.privacy !== 'PRIVATE', // Only for PRIVATE groups
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
    },
    {
      id: 'invites',
      label: 'Invites',
      badge: pendingInvites.length,
      hidden: group?.privacy !== 'SECRET', // Only for SECRET groups
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 'danger',
      label: 'Danger Zone',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
  ];

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </ProtectedRoute>
    );
  }

  if (!group) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <p className="text-red-500 mb-4">Group not found or you don&apos;t have permission</p>
            <Link href="/groups" className="text-blue-600 hover:underline">
              Go back to groups
            </Link>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <GroupSettingsView
      activeTab={activeTab}
      deleteConfirmText={deleteConfirmText}
      deleting={deleting}
      error={error}
      formData={formData}
      group={group}
      handleCancelInvite={handleCancelInvite}
      handleCoverUpdated={handleCoverUpdated}
      handleDeleteGroup={handleDeleteGroup}
      handleIconUpdated={handleIconUpdated}
      handleInviteUser={handleInviteUser}
      handleRemoveMember={handleRemoveMember}
      handleRequest={handleRequest}
      handleSaveGeneral={handleSaveGeneral}
      handleUpdateRole={handleUpdateRole}
      inviting={inviting}
      members={members}
      pendingInvites={pendingInvites}
      pendingRequests={pendingRequests}
      processingRequest={processingRequest}
      saving={saving}
      searchQuery={searchQuery}
      searchResults={searchResults}
      searching={searching}
      setActiveTab={setActiveTab}
      setDeleteConfirmText={setDeleteConfirmText}
      setFormData={setFormData}
      setSearchQuery={setSearchQuery}
      setShowCoverModal={setShowCoverModal}
      setShowDeleteModal={setShowDeleteModal}
      setShowIconModal={setShowIconModal}
      showCoverModal={showCoverModal}
      showDeleteModal={showDeleteModal}
      showIconModal={showIconModal}
      successMessage={successMessage}
      tabs={tabs}
    />
  );
}
