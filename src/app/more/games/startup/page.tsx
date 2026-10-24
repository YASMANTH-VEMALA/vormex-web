'use client';
import { StartupGameView } from './StartupGameView';
import type { GameEvent, GamePhase, Milestone, StartupState } from './page.types';
export type { GameEvent, GamePhase, Milestone, StartupState } from './page.types';

import 'canvas-confetti';
import { Code, Cpu, DollarSign, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

const INDUSTRIES = [
  {
    id: 'saas',
    name: 'SaaS',
    icon: Code,
    color: 'text-blue-500',
    bg: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    id: 'fintech',
    name: 'Fintech',
    icon: DollarSign,
    color: 'text-green-500',
    bg: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    id: 'ai',
    name: 'AI/ML',
    icon: Cpu,
    color: 'text-purple-500',
    bg: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    icon: Shield,
    color: 'text-red-500',
    bg: 'bg-red-100 dark:bg-red-900/30',
  },
];

const GAME_EVENTS: GameEvent[] = [
  {
    id: 'investor',
    title: 'Investor Interest',
    description: 'A VC firm wants to invest $500K for 15% equity. Do you accept?',
    type: 'opportunity',
    choices: [
      {
        id: 'accept',
        text: 'Accept the deal',
        effects: { cash: 500000, reputation: 10 },
        xpReward: 20,
      },
      {
        id: 'negotiate',
        text: 'Negotiate for better terms',
        effects: { cash: 350000, reputation: 15 },
        xpReward: 30,
      },
      { id: 'decline', text: 'Decline and bootstrap', effects: { reputation: 5 }, xpReward: 10 },
    ],
  },
  {
    id: 'competitor',
    title: 'Competitor Launches',
    description: 'A well-funded competitor just launched a similar product. How do you respond?',
    type: 'challenge',
    choices: [
      {
        id: 'innovate',
        text: 'Accelerate innovation',
        effects: { cash: -50000, techLevel: 2 },
        xpReward: 25,
      },
      {
        id: 'marketing',
        text: 'Double down on marketing',
        effects: { cash: -30000, marketingLevel: 2, users: 5000 },
        xpReward: 20,
      },
      {
        id: 'niche',
        text: 'Focus on niche market',
        effects: { users: 2000, reputation: 10 },
        xpReward: 15,
      },
    ],
  },
  {
    id: 'viral',
    title: 'Viral Moment',
    description: 'Your product just went viral on social media! Quick, capitalize on it!',
    type: 'opportunity',
    choices: [
      {
        id: 'scale',
        text: 'Scale servers immediately',
        effects: { cash: -100000, users: 50000 },
        xpReward: 40,
      },
      {
        id: 'press',
        text: 'Hire PR firm',
        effects: { cash: -50000, reputation: 30, users: 20000 },
        xpReward: 30,
      },
      { id: 'wait', text: 'Wait and see', effects: { users: 10000 }, xpReward: 10 },
    ],
  },
  {
    id: 'talent',
    title: 'Key Hire Available',
    description: 'A senior engineer from a FAANG company wants to join. Salary: $200K/year',
    type: 'opportunity',
    choices: [
      {
        id: 'hire',
        text: 'Make the hire',
        effects: { cash: -200000, employees: 1, techLevel: 3 },
        xpReward: 35,
      },
      {
        id: 'equity',
        text: 'Offer more equity, less cash',
        effects: { cash: -100000, employees: 1, techLevel: 2 },
        xpReward: 25,
      },
      { id: 'pass', text: 'Pass on this one', effects: {}, xpReward: 5 },
    ],
  },
  {
    id: 'bug',
    title: 'Critical Bug Found',
    description: 'Users discovered a major security vulnerability. How do you handle it?',
    type: 'challenge',
    choices: [
      {
        id: 'transparent',
        text: 'Be transparent, fix immediately',
        effects: { cash: -50000, reputation: 20 },
        xpReward: 40,
      },
      {
        id: 'quiet',
        text: 'Fix quietly',
        effects: { cash: -20000, reputation: -10 },
        xpReward: 10,
      },
      {
        id: 'downplay',
        text: 'Downplay the issue',
        effects: { reputation: -30, users: -10000 },
        xpReward: 0,
      },
    ],
  },
  {
    id: 'acquisition',
    title: 'Acquisition Offer',
    description: 'A big tech company wants to acquire you for $5M. Your current valuation is $3M.',
    type: 'opportunity',
    choices: [
      { id: 'sell', text: 'Accept the offer', effects: { cash: 5000000 }, xpReward: 100 },
      { id: 'counter', text: 'Counter with $8M', effects: { reputation: 10 }, xpReward: 20 },
      {
        id: 'decline',
        text: 'Decline, keep building',
        effects: { reputation: 15, techLevel: 1 },
        xpReward: 30,
      },
    ],
  },
];

const MILESTONES: Omit<Milestone, 'achieved'>[] = [
  {
    id: 'first-revenue',
    title: 'First Revenue',
    description: 'Generate your first $1,000',
    requirement: (s) => s.revenue >= 1000,
    xpReward: 50,
  },
  {
    id: 'first-users',
    title: '1K Users',
    description: 'Reach 1,000 users',
    requirement: (s) => s.users >= 1000,
    xpReward: 50,
  },
  {
    id: 'team-growth',
    title: 'Growing Team',
    description: 'Hire 5 employees',
    requirement: (s) => s.employees >= 5,
    xpReward: 75,
  },
  {
    id: 'profitable',
    title: 'Profitable',
    description: 'Achieve positive cash flow',
    requirement: (s) => s.revenue > 0 && s.cash > 100000,
    xpReward: 100,
  },
  {
    id: 'unicorn',
    title: 'Unicorn Status',
    description: 'Reach $1B valuation',
    requirement: (s) => s.valuation >= 1000000000,
    xpReward: 500,
  },
];

export default function StartupSimulatorPage() {
  const [gamePhase, setGamePhase] = useState<GamePhase>('setup');
  const [startup, setStartup] = useState<StartupState>({
    name: '',
    industry: '',
    cash: 50000,
    revenue: 0,
    users: 0,
    employees: 1,
    reputation: 50,
    techLevel: 1,
    marketingLevel: 1,
    month: 1,
    valuation: 50000,
  });
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [startupName, setStartupName] = useState('');
  const [currentEvent, setCurrentEvent] = useState<GameEvent | null>(null);
  const [milestones, setMilestones] = useState<Milestone[]>(
    MILESTONES.map((m) => ({ ...m, achieved: false }))
  );
  const [totalXpEarned, setTotalXpEarned] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(1);
  const [achievedMilestone, setAchievedMilestone] = useState<Milestone | null>(null);

  // Game tick - simulate monthly progress
  useEffect(() => {
    if (gamePhase !== 'playing' || isPaused) return;

    const tickInterval = 3000 / gameSpeed; // 3 seconds per month at 1x speed

    const interval = setInterval(() => {
      setStartup((prev) => {
        // Calculate monthly changes
        const userGrowth = Math.floor(prev.users * 0.1 * prev.marketingLevel + prev.reputation * 2);
        const monthlyRevenue = Math.floor(prev.users * 0.5 * prev.techLevel);
        const monthlyCosts =
          prev.employees * 8000 + prev.marketingLevel * 5000 + prev.techLevel * 3000;
        const newCash = prev.cash + monthlyRevenue - monthlyCosts;

        // Calculate valuation
        const newValuation = Math.max(
          50000,
          prev.users * 100 + prev.revenue * 12 + prev.techLevel * 50000 + prev.reputation * 10000
        );

        return {
          ...prev,
          month: prev.month + 1,
          users: prev.users + userGrowth,
          revenue: monthlyRevenue,
          cash: newCash,
          valuation: newValuation,
        };
      });

      // Random event chance
      if (Math.random() < 0.3) {
        const randomEvent = GAME_EVENTS[Math.floor(Math.random() * GAME_EVENTS.length)];
        setCurrentEvent(randomEvent);
        setGamePhase('event');
      }
    }, tickInterval);

    return () => clearInterval(interval);
  }, [gamePhase, isPaused, gameSpeed]);

  // Derive transitions before committing a tick. Keep XP awards outside state
  // updater callbacks, which React can replay in development.
  const nextMilestone =
    gamePhase === 'playing'
      ? milestones.find((m) => !m.achieved && m.requirement(startup))
      : undefined;
  if (nextMilestone) {
    setMilestones((previous) =>
      previous.map((m) => (m.id === nextMilestone.id ? { ...m, achieved: true } : m))
    );
    setAchievedMilestone(nextMilestone);
    setTotalXpEarned((previous) => previous + nextMilestone.xpReward);
    setGamePhase('milestone');
  }
  if (gamePhase === 'playing' && (startup.cash < -100000 || startup.month >= 60))
    setGamePhase('ended');

  const startGame = () => {
    if (!selectedIndustry || !startupName.trim()) return;

    setStartup((prev) => ({
      ...prev,
      name: startupName,
      industry: selectedIndustry,
    }));
    setGamePhase('playing');
  };

  const handleEventChoice = (choice: GameEvent['choices'][0]) => {
    setStartup((prev) => ({
      ...prev,
      ...Object.entries(choice.effects).reduce((acc, [key, value]) => {
        const currentValue = prev[key as keyof StartupState];
        if (typeof currentValue === 'number' && typeof value === 'number') {
          return { ...acc, [key]: currentValue + value };
        }
        return { ...acc, [key]: value };
      }, {}),
    }));
    setTotalXpEarned((prev) => prev + choice.xpReward);
    setCurrentEvent(null);
    setGamePhase('playing');
  };

  const continueMilestone = () => {
    setAchievedMilestone(null);
    setGamePhase('playing');
  };

  const resetGame = () => {
    setStartup({
      name: '',
      industry: '',
      cash: 50000,
      revenue: 0,
      users: 0,
      employees: 1,
      reputation: 50,
      techLevel: 1,
      marketingLevel: 1,
      month: 1,
      valuation: 50000,
    });
    setMilestones(MILESTONES.map((m) => ({ ...m, achieved: false })));
    setTotalXpEarned(0);
    setSelectedIndustry(null);
    setStartupName('');
    setCurrentEvent(null);
    setAchievedMilestone(null);
    setGamePhase('setup');
  };

  const invest = (area: 'tech' | 'marketing' | 'hiring') => {
    const costs = { tech: 30000, marketing: 20000, hiring: 50000 };
    if (startup.cash < costs[area]) return;

    setStartup((prev) => ({
      ...prev,
      cash: prev.cash - costs[area],
      ...(area === 'tech' && { techLevel: prev.techLevel + 1 }),
      ...(area === 'marketing' && { marketingLevel: prev.marketingLevel + 1 }),
      ...(area === 'hiring' && { employees: prev.employees + 1 }),
    }));
  };

  const formatMoney = (amount: number) => {
    if (amount >= 1000000000) return `$${(amount / 1000000000).toFixed(1)}B`;
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
    if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`;
    return `$${amount.toFixed(0)}`;
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <StartupGameView
      INDUSTRIES={INDUSTRIES}
      achievedMilestone={achievedMilestone}
      continueMilestone={continueMilestone}
      currentEvent={currentEvent}
      formatMoney={formatMoney}
      formatNumber={formatNumber}
      gamePhase={gamePhase}
      gameSpeed={gameSpeed}
      handleEventChoice={handleEventChoice}
      invest={invest}
      isPaused={isPaused}
      milestones={milestones}
      resetGame={resetGame}
      selectedIndustry={selectedIndustry}
      setGameSpeed={setGameSpeed}
      setIsPaused={setIsPaused}
      setSelectedIndustry={setSelectedIndustry}
      setStartupName={setStartupName}
      startGame={startGame}
      startup={startup}
      startupName={startupName}
      totalXpEarned={totalXpEarned}
    />
  );
}
