'use client';
import { GroupDetailContent } from './GroupDetailContent';
import type { GroupDetailPageProps, Tab } from './page.types';
export type { GroupDetailPageProps, Tab } from './page.types';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import '@/components/groups';
import { GroupHeader } from '@/components/groups';
import { asApiError } from '@/lib/api/errors';
import {
  getGroup,
  getGroupMembers,
  getGroupPosts,
  Group,
  GroupMember,
  GroupPost,
  joinGroup,
  leaveGroup,
  toggleGroupPostLike,
} from '@/lib/api/groups';
import { useAuth } from '@/lib/auth/useAuth';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

export default function GroupDetailPage({ params }: GroupDetailPageProps) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { user } = useAuth();
  const [group, setGroup] = useState<Group | null>(null);
  const [posts, setPosts] = useState<GroupPost[]>([]);
  const [members, setMembers] = useState<GroupMember[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>('posts');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch group data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const groupData = await getGroup(resolvedParams.slug);
        setGroup(groupData);

        // Fetch posts and members if member or public
        if (groupData.isMember || groupData.privacy !== 'SECRET') {
          const [postsData, membersData] = await Promise.all([
            getGroupPosts(groupData.id),
            getGroupMembers(groupData.id, { limit: 10 }),
          ]);
          setPosts(postsData.posts);
          setMembers(membersData.members);
        }
      } catch (err: unknown) {
        setError(asApiError(err).response?.data?.error || 'Failed to load group');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [resolvedParams.slug]);

  // Handle join
  const handleJoin = async () => {
    if (!group) return;

    try {
      setActionLoading(true);
      const result = await joinGroup(group.id);

      if (result.status === 'joined') {
        setGroup({ ...group, isMember: true, memberRole: 'MEMBER' });
        // Refetch data
        const [postsData, membersData] = await Promise.all([
          getGroupPosts(group.id),
          getGroupMembers(group.id, { limit: 10 }),
        ]);
        setPosts(postsData.posts);
        setMembers(membersData.members);
      } else {
        alert('Join request sent! You will be notified when approved.');
      }
    } catch (err: unknown) {
      alert(asApiError(err).response?.data?.error || 'Failed to join group');
    } finally {
      setActionLoading(false);
    }
  };

  // Handle leave
  const handleLeave = async () => {
    if (!group || !confirm('Are you sure you want to leave this group?')) return;

    try {
      setActionLoading(true);
      await leaveGroup(group.id);
      setGroup({ ...group, isMember: false, memberRole: null });
    } catch (err: unknown) {
      alert(asApiError(err).response?.data?.error || 'Failed to leave group');
    } finally {
      setActionLoading(false);
    }
  };

  // Handle like post
  const handleLikePost = async (postId: string) => {
    if (!group) return;

    try {
      const result = await toggleGroupPostLike(group.id, postId);
      setPosts((prev) =>
        prev.map((p) => {
          if (p.id === postId) {
            return {
              ...p,
              isLiked: result.liked,
              likesCount: result.liked ? p.likesCount + 1 : p.likesCount - 1,
            };
          }
          return p;
        })
      );
    } catch (error) {
      console.error('Failed to like post:', error);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </ProtectedRoute>
    );
  }

  if (error || !group) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error || 'Group not found'}</p>
            <button
              onClick={() => router.push('/groups')}
              className="text-blue-600 hover:underline"
            >
              Go back to groups
            </button>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
        <div className="max-w-5xl mx-auto px-4 py-6">
          {/* Header */}
          <GroupHeader
            group={group}
            onJoin={handleJoin}
            onLeave={handleLeave}
            isLoading={actionLoading}
          />

          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg my-6 w-fit">
            {(['posts', 'about', 'members'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-md transition-colors capitalize',
                  activeTab === tab
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <GroupDetailContent
            activeTab={activeTab}
            group={group}
            handleLikePost={handleLikePost}
            members={members}
            posts={posts}
            user={user}
          />
        </div>
      </div>
    </ProtectedRoute>
  );
}
