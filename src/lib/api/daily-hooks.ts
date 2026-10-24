import { getJson } from './request';

export interface DailyHook {
  id: string;
  type: string;
  title: string;
  action: { label: string; href: string };
  emoji: string;
  priority: number;
  data?: Record<string, unknown>;
}

export const dailyHooksAPI = {
  getHooks: async (): Promise<{ hooks: DailyHook[]; date: string }> => {
    return getJson<{ hooks: DailyHook[]; date: string }>('/daily-hooks');
  },
};
