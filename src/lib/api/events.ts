import { buildPathWithQuery, getJson, postJson } from './request';

export interface CampusEvent {
  id: string;
  title: string;
  description: string;
  type: string;
  campus: string;
  venue: string | null;
  isOnline: boolean;
  meetingLink: string | null;
  startsAt: string;
  endsAt: string;
  maxAttendees: number | null;
  attendeesCount: number;
  organizerId: string;
  circleId: string | null;
  coverImageUrl: string | null;
  tags: string[];
  myStatus: string | null;
  circle?: { id: string; name: string; emoji: string; slug: string } | null;
  attendeesPreview?: { id: string; name: string; profileImage: string | null }[];
  _count?: { attendees: number };
  createdAt: string;
}

export interface EventAttendee {
  id: string;
  name: string;
  profileImage: string | null;
}

export const eventsAPI = {
  getEvents: async (params?: {
    campus?: string;
    type?: string;
    upcoming?: boolean;
    page?: number;
  }): Promise<{
    events: CampusEvent[];
    total: number;
    page: number;
    totalPages: number;
  }> => {
    return getJson<{
      events: CampusEvent[];
      total: number;
      page: number;
      totalPages: number;
    }>('/events', {
      campus: params?.campus,
      type: params?.type,
      upcoming: params?.upcoming ? true : undefined,
      page: params?.page || undefined,
    });
  },

  getUpcoming: async (campus?: string): Promise<{ events: CampusEvent[] }> => {
    return getJson<{ events: CampusEvent[] }>(buildPathWithQuery('/events/upcoming', { campus }));
  },

  getMyEvents: async (): Promise<{ events: CampusEvent[] }> => {
    return getJson<{ events: CampusEvent[] }>('/events/my');
  },

  getById: async (
    eventId: string
  ): Promise<{ event: CampusEvent & { attendeesList: EventAttendee[] } }> => {
    return getJson<{ event: CampusEvent & { attendeesList: EventAttendee[] } }>(
      `/events/${eventId}`
    );
  },

  create: async (data: {
    title: string;
    description: string;
    type: string;
    campus: string;
    venue?: string;
    isOnline?: boolean;
    meetingLink?: string;
    startsAt: string;
    endsAt: string;
    maxAttendees?: number;
    circleId?: string;
    tags?: string[];
  }): Promise<{ event: CampusEvent }> => {
    return postJson<{ event: CampusEvent }>('/events', data);
  },

  rsvp: async (
    eventId: string,
    status: 'going' | 'interested' | 'not_going'
  ): Promise<{ message: string; status: string }> => {
    return postJson<{ message: string; status: string }>(`/events/${eventId}/rsvp`, { status });
  },
};
