import { z } from 'zod';

export const notificationPreferencesSchema = z.object({
  pushEnabled: z.boolean(),
  emailEnabled: z.boolean(),
  emailDigestFrequency: z.enum(['instant', 'daily', 'weekly', 'never']),
  connections: z.boolean(),
  messages: z.boolean(),
  likes: z.boolean(),
  comments: z.boolean(),
  mentions: z.boolean(),
  groups: z.boolean(),
  jobs: z.boolean(),
  learning: z.boolean(),
  achievements: z.boolean(),
  quietHoursEnabled: z.boolean(),
  quietHoursStart: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
  quietHoursEnd: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
});

export type NotificationPreferences = z.infer<typeof notificationPreferencesSchema>;
