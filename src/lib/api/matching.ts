import { getJson } from './request';

export interface SmartMatch {
  user: {
    id: string;
    name: string;
    username: string;
    profileImage: string | null;
    headline: string | null;
    college: string | null;
    branch: string | null;
    graduationYear: number | null;
    interests: string[];
    bio: string | null;
    githubConnected: boolean;
    verified?: boolean;
    isVerified?: boolean;
    profileBadgeStyle?: string | null;
    isPremium?: boolean;
    skills: { name: string; proficiency: string | null }[];
    onboarding: {
      primaryGoal: string | null;
      lookingFor: string[];
    } | null;
    stats: {
      connectionsCount: number;
      xp: number;
      level: number;
    } | null;
  };
  score: number;
  matchPercentage: number;
  reasons: string[];
  tags: string[];
}

export interface IceBreaker {
  iceBreakers: string[];
  actions: { type: string; label: string; icon: string }[];
  context: {
    sharedInterests: string[];
    sameCampus: boolean;
    sharedGoal: boolean;
  };
}

export interface MatchingCardUser {
  id: string;
  name: string;
  username: string;
  profileImage: string | null;
  headline: string | null;
  college: string | null;
  graduationYear?: number | null;
  verified?: boolean;
  isVerified?: boolean;
  profileBadgeStyle?: string | null;
  isPremium?: boolean;
}

export const matchingAPI = {
  getSmartMatches: async (params?: {
    type?: 'all' | 'same_campus' | 'same_goal' | 'mentor' | 'mentee';
    page?: number;
    limit?: number;
  }): Promise<{
    matches: SmartMatch[];
    total: number;
    page: number;
    totalPages: number;
    hasMore: boolean;
  }> => {
    return getJson<{
      matches: SmartMatch[];
      total: number;
      page: number;
      totalPages: number;
      hasMore: boolean;
    }>('/matching/smart', {
      type: params?.type || undefined,
      page: params?.page || undefined,
      limit: params?.limit || undefined,
    });
  },

  getMentorMatches: async (): Promise<{
    mentors: {
      user: MatchingCardUser;
      teachableSkills: string[];
      xp: number;
      level: number;
    }[];
  }> => {
    return getJson<{
      mentors: {
        user: MatchingCardUser;
        teachableSkills: string[];
        xp: number;
        level: number;
      }[];
    }>('/matching/mentors');
  },

  getAccountabilityMatches: async (): Promise<{
    matches: {
      user: MatchingCardUser;
      sharedGoal: string | null;
      availability: string | null;
    }[];
  }> => {
    return getJson<{
      matches: {
        user: MatchingCardUser;
        sharedGoal: string | null;
        availability: string | null;
      }[];
    }>('/matching/accountability');
  },

  getIceBreakers: async (targetUserId: string): Promise<IceBreaker> => {
    return getJson<IceBreaker>(`/matching/ice-breakers/${targetUserId}`);
  },
};
