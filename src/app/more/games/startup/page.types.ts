import 'canvas-confetti';

export type GamePhase = 'setup' | 'playing' | 'event' | 'milestone' | 'ended';

export interface StartupState {
  name: string;
  industry: string;
  cash: number;
  revenue: number;
  users: number;
  employees: number;
  reputation: number;
  techLevel: number;
  marketingLevel: number;
  month: number;
  valuation: number;
}

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  type: 'opportunity' | 'challenge' | 'news';
  choices: {
    id: string;
    text: string;
    effects: Partial<StartupState>;
    xpReward: number;
  }[];
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  requirement: (state: StartupState) => boolean;
  xpReward: number;
  achieved: boolean;
}
