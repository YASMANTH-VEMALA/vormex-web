'use client';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import 'canvas-confetti';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowLeft,
  Building2,
  CheckCircle2,
  Megaphone,
  Rocket,
  RotateCcw,
  TrendingUp,
  Trophy,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';
import { StartupPlayingView } from './StartupPlayingView';

interface StartupGameViewProps {
  INDUSTRIES: {
    id: string;
    name: string;
    icon: React.ForwardRefExoticComponent<
      Omit<import('lucide-react/dist/lucide-react').LucideProps, 'ref'> &
        React.RefAttributes<SVGSVGElement>
    >;
    color: string;
    bg: string;
  }[];
  achievedMilestone: import('@/app/more/games/startup/page.types').Milestone | null;
  continueMilestone: () => void;
  currentEvent: import('@/app/more/games/startup/page.types').GameEvent | null;
  formatMoney: (amount: number) => string;
  formatNumber: (num: number) => string;
  gamePhase: import('@/app/more/games/startup/page.types').GamePhase;
  gameSpeed: number;
  handleEventChoice: (choice: {
    id: string;
    text: string;
    effects: Partial<import('@/app/more/games/startup/page.types').StartupState>;
    xpReward: number;
  }) => void;
  invest: (area: 'tech' | 'marketing' | 'hiring') => void;
  isPaused: boolean;
  milestones: import('@/app/more/games/startup/page.types').Milestone[];
  resetGame: () => void;
  selectedIndustry: string | null;
  setGameSpeed: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedIndustry: React.Dispatch<React.SetStateAction<string | null>>;
  setStartupName: React.Dispatch<React.SetStateAction<string>>;
  startGame: () => void;
  startup: import('@/app/more/games/startup/page.types').StartupState;
  startupName: string;
  totalXpEarned: number;
}

export function StartupGameView({
  INDUSTRIES,
  achievedMilestone,
  continueMilestone,
  currentEvent,
  formatMoney,
  formatNumber,
  gamePhase,
  gameSpeed,
  handleEventChoice,
  invest,
  isPaused,
  milestones,
  resetGame,
  selectedIndustry,
  setGameSpeed,
  setIsPaused,
  setSelectedIndustry,
  setStartupName,
  startGame,
  startup,
  startupName,
  totalXpEarned,
}: StartupGameViewProps) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link
                  href="/more/games"
                  className="p-2 -ml-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </Link>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-rose-500" />
                  {gamePhase === 'setup' ? 'Startup Simulator' : startup.name}
                </h1>
              </div>

              {totalXpEarned > 0 && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    {totalXpEarned} XP
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-6">
          <AnimatePresence mode="wait">
            {/* Setup Phase */}
            {gamePhase === 'setup' && (
              <motion.div
                key="setup"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <Rocket className="w-16 h-16 text-rose-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Start Your Startup
                  </h2>
                  <p className="text-gray-500">Build your tech empire from scratch!</p>
                </div>

                {/* Startup Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Startup Name
                  </label>
                  <input
                    type="text"
                    value={startupName}
                    onChange={(e) => setStartupName(e.target.value)}
                    placeholder="Enter your startup name..."
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Industry Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Choose Your Industry
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {INDUSTRIES.map((industry) => (
                      <button
                        key={industry.id}
                        onClick={() => setSelectedIndustry(industry.id)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedIndustry === industry.id
                            ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300'
                        }`}
                      >
                        <div
                          className={`w-10 h-10 ${industry.bg} rounded-lg flex items-center justify-center mb-2`}
                        >
                          <industry.icon className={`w-5 h-5 ${industry.color}`} />
                        </div>
                        <p className="font-medium text-gray-900 dark:text-white">{industry.name}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Start Button */}
                <button
                  onClick={startGame}
                  disabled={!selectedIndustry || !startupName.trim()}
                  className="w-full py-4 bg-rose-600 hover:bg-rose-700 disabled:bg-gray-400 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  Launch Startup
                </button>
              </motion.div>
            )}

            {/* Playing Phase */}
            <StartupPlayingView
              formatMoney={formatMoney}
              formatNumber={formatNumber}
              gamePhase={gamePhase}
              gameSpeed={gameSpeed}
              invest={invest}
              isPaused={isPaused}
              milestones={milestones}
              setGameSpeed={setGameSpeed}
              setIsPaused={setIsPaused}
              startup={startup}
            />

            {/* Event Phase */}
            {gamePhase === 'event' && currentEvent && (
              <motion.div
                key="event"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="space-y-4"
              >
                <div
                  className={`p-6 rounded-xl border-2 ${
                    currentEvent.type === 'opportunity'
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                      : currentEvent.type === 'challenge'
                        ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                        : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    {currentEvent.type === 'opportunity' ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    ) : currentEvent.type === 'challenge' ? (
                      <AlertCircle className="w-6 h-6 text-red-500" />
                    ) : (
                      <Megaphone className="w-6 h-6 text-blue-500" />
                    )}
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {currentEvent.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {currentEvent.description}
                  </p>

                  <div className="space-y-3">
                    {currentEvent.choices.map((choice) => (
                      <button
                        key={choice.id}
                        onClick={() => handleEventChoice(choice)}
                        className="w-full p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-rose-500 transition-all text-left"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {choice.text}
                          </span>
                          <span className="text-sm text-purple-600">+{choice.xpReward} XP</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Milestone Phase */}
            {gamePhase === 'milestone' && achievedMilestone && (
              <motion.div
                key="milestone"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.5 }}
                >
                  <Trophy className="w-20 h-20 text-amber-500 mx-auto mb-4" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Milestone Achieved!
                </h2>
                <h3 className="text-xl text-rose-600 dark:text-rose-400 mb-2">
                  {achievedMilestone.title}
                </h3>
                <p className="text-gray-500 mb-6">{achievedMilestone.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-600">
                    +{achievedMilestone.xpReward} XP
                  </span>
                </div>
                <br />
                <button
                  onClick={continueMilestone}
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-semibold transition-colors"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {/* Ended Phase */}
            {gamePhase === 'ended' && (
              <motion.div
                key="ended"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {startup.cash < -100000 ? 'Game Over - Bankrupt!' : 'Simulation Complete!'}
                </h2>
                <p className="text-gray-500 mb-6">
                  {startup.name} ran for {Math.floor(startup.month / 12)} years and{' '}
                  {startup.month % 12} months
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {formatMoney(startup.valuation)}
                    </p>
                    <p className="text-sm text-gray-500">Final Valuation</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {formatNumber(startup.users)}
                    </p>
                    <p className="text-sm text-gray-500">Total Users</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {milestones.filter((m) => m.achieved).length}/{milestones.length}
                    </p>
                    <p className="text-sm text-gray-500">Milestones</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-2xl font-bold text-purple-600">+{totalXpEarned}</p>
                    <p className="text-sm text-gray-500">XP Earned</p>
                  </div>
                </div>

                <div className="flex gap-3 justify-center">
                  <button
                    onClick={resetGame}
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Play Again
                  </button>
                  <Link
                    href="/more/games"
                    className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-medium transition-colors"
                  >
                    Back to Games
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ProtectedRoute>
  );
}
