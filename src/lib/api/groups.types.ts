export type GroupPrivacy = 'PUBLIC' | 'PRIVATE' | 'SECRET';

export type GroupMemberRole = 'OWNER' | 'ADMIN' | 'MODERATOR' | 'MEMBER';

export type GroupJoinRequestStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface GroupUser {
  id: string;
  name: string;
  username: string;
  profileImage: string | null;
  avatar?: string | null; // Alias for profileImage
  headline?: string | null;
  verified?: boolean;
  isVerified?: boolean;
  profileBadgeStyle?: string | null;
  isPremium?: boolean;
}

export interface Group {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  coverImage: string | null;
  iconImage: string | null;
  privacy: GroupPrivacy;
  category: string | null;
  tags: string[];
  rules: string[];
  createdById: string;
  createdBy: GroupUser;
  memberCount: number;
  postCount: number;
  allowMemberPosts: boolean;
  requirePostApproval: boolean;
  createdAt: string;
  updatedAt: string;
  isMember: boolean;
  memberRole: GroupMemberRole | null;
  userRole?: GroupMemberRole | null; // Alias for memberRole
  joinedAt?: string;
  members?: GroupMember[];
  _count?: {
    members: number;
    posts: number;
    messages?: number;
  };
}

export interface GroupMember {
  id: string;
  groupId: string;
  userId: string;
  user: GroupUser;
  role: GroupMemberRole;
  joinedAt: string;
  mutedUntil: string | null;
}

export interface GroupJoinRequest {
  id: string;
  groupId: string;
  userId: string;
  user: GroupUser;
  status: GroupJoinRequestStatus;
  message: string | null;
  reviewedById: string | null;
  reviewedBy: GroupUser | null;
  reviewedAt: string | null;
  createdAt: string;
}

export type GroupInviteStatus = 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED';

export interface GroupInvite {
  id: string;
  groupId: string;
  invitedUserId: string;
  invitedUser: GroupUser;
  invitedById: string;
  invitedBy: GroupUser;
  status: GroupInviteStatus;
  message: string | null;
  respondedAt: string | null;
  createdAt: string;
  group?: {
    id: string;
    name: string;
    slug: string;
    iconImage: string | null;
    privacy: GroupPrivacy;
    memberCount: number;
  };
}

export interface GroupPost {
  id: string;
  groupId: string;
  authorId: string;
  author: GroupUser;
  content: string | null;
  mediaUrls: string[];
  mediaType: string | null;
  likesCount: number;
  commentsCount: number;
  isPinned: boolean;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
  isLiked?: boolean;
  _count?: {
    likes: number;
    comments: number;
  };
}

export interface GroupPostComment {
  id: string;
  postId: string;
  authorId: string;
  author: GroupUser;
  parentId: string | null;
  content: string;
  likesCount: number;
  createdAt: string;
  updatedAt: string;
  replies?: GroupPostComment[];
}

export interface GroupMessage {
  id: string;
  groupId: string;
  senderId: string;
  sender: GroupUser;
  content: string;
  contentType: string;
  mediaUrl: string | null;
  mediaType: string | null;
  fileName: string | null;
  fileSize: number | null;
  replyToId: string | null;
  replyTo: GroupMessage | null;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  reactions: GroupMessageReaction[];
}

export interface GroupMessageReaction {
  id: string;
  messageId: string;
  userId: string;
  user: GroupUser;
  emoji: string;
  createdAt: string;
}

export interface PaginatedResponse {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface GroupsResponse extends PaginatedResponse {
  groups: Group[];
}

export interface GroupMembersResponse extends PaginatedResponse {
  members: GroupMember[];
}

export interface GroupPostsResponse extends PaginatedResponse {
  posts: GroupPost[];
}

export interface GroupCategory {
  name: string;
  count: number;
}
