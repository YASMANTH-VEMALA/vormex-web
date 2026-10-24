import assert from 'node:assert/strict';
import test from 'node:test';
import {
  accountabilityPartnersResponseSchema,
  mentorshipMatchSchema,
} from '../src/lib/api/accountability';
import { notificationPreferencesSchema } from '../src/lib/api/notificationPreferences';

// These projections match the server controller responses, including the fields
// it deliberately omits. Do not invent extra fields just to satisfy a schema.
const partner = {
  id: 'user-2',
  name: 'Jane',
  username: 'jane',
  profileImage: null,
  headline: null,
  college: null,
};

test('non-empty accountability responses accept the backend projection', () => {
  const parsed = accountabilityPartnersResponseSchema.parse({
    partners: [
      {
        id: 'pair-1',
        partner,
        goal: 'Study',
        sharedStreak: 1,
        bestStreak: 2,
        lastCheckIn: null,
        checkInsCompleted: 3,
        startedAt: '2026-10-22T00:00:00.000Z',
      },
    ],
  });
  assert.equal(parsed.partners[0].partner.id, 'user-2');
  assert.throws(() => accountabilityPartnersResponseSchema.parse({ partners: [{ id: 'pair-1' }] }));
});

test('mentorship responses use role and partner rather than fabricated user objects', () => {
  const parsed = mentorshipMatchSchema.parse({
    id: 'match-1',
    skill: 'TypeScript',
    status: 'active',
    sessionsCompleted: 2,
    rating: null,
    role: 'mentee',
    partner,
  });
  assert.equal(parsed.role, 'mentee');
  assert.equal(parsed.partner.username, 'jane');
});

test('notification settings strip legacy aliases before a canonical update', () => {
  const settings = notificationPreferencesSchema.parse({
    pushEnabled: true,
    emailEnabled: true,
    emailDigestFrequency: 'daily',
    connections: true,
    messages: true,
    likes: true,
    comments: true,
    mentions: true,
    groups: true,
    jobs: true,
    learning: true,
    achievements: true,
    quietHoursEnabled: false,
    quietHoursStart: '22:00',
    quietHoursEnd: '08:00',
    likesEnabled: false,
  });
  assert.equal('likesEnabled' in settings, false);
  assert.equal(settings.likes, true);
});
