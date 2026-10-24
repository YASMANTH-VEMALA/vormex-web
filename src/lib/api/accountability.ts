import { z } from 'zod';
import { apiGet, apiPost } from './request';

const userSummarySchema = z.object({
  id: z.string(),
  name: z.string(),
  username: z.string(),
  profileImage: z.string().nullable(),
  headline: z.string().nullable(),
});

const partnerSummarySchema = userSummarySchema.extend({
  college: z.string().nullable(),
});

export const accountabilityPairSchema = z.object({
  id: z.string(),
  user1Id: z.string().optional(),
  user2Id: z.string().optional(),
  goal: z.string(),
  status: z.string().optional(),
  sharedStreak: z.number(),
  bestStreak: z.number(),
  lastCheckIn: z.string().nullable(),
  checkInsCompleted: z.number(),
  partner: partnerSummarySchema,
});

export type AccountabilityPair = z.infer<typeof accountabilityPairSchema>;

export const mentorshipMatchSchema = z.object({
  id: z.string(),
  skill: z.string(),
  status: z.string(),
  sessionsCompleted: z.number(),
  rating: z.number().nullable(),
  role: z.enum(['mentor', 'mentee']),
  partner: partnerSummarySchema,
});

export type MentorshipMatch = z.infer<typeof mentorshipMatchSchema>;

export const accountabilityPartnersResponseSchema = z.object({
  partners: z.array(accountabilityPairSchema),
});

const mentorshipsResponseSchema = z.object({
  mentorships: z.array(mentorshipMatchSchema),
});

const checkInResponseSchema = z.object({
  streak: z.number(),
  bestStreak: z.number(),
  checkInsCompleted: z.number(),
});

export const accountabilityAPI = {
  getPartners: (): Promise<z.infer<typeof accountabilityPartnersResponseSchema>> => {
    return apiGet('/accountability/partners', accountabilityPartnersResponseSchema);
  },

  checkIn: (pairId: string): Promise<z.infer<typeof checkInResponseSchema>> => {
    return apiPost(`/accountability/partners/${pairId}/check-in`, undefined, checkInResponseSchema);
  },

  getMentorships: (
    role?: 'mentor' | 'mentee'
  ): Promise<z.infer<typeof mentorshipsResponseSchema>> => {
    return apiGet('/accountability/mentorships', mentorshipsResponseSchema, { role });
  },
};
