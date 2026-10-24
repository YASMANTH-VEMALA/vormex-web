'use client';
import 'canvas-confetti';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Code,
  DollarSign,
  Megaphone,
  Pause,
  Play,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from 'lucide-react';
import type * as React from 'react';

interface StartupPlayingViewProps {
  formatMoney: (amount: number) => string;
  formatNumber: (num: number) => string;
  gamePhase: import('@/app/more/games/startup/page.types').GamePhase;
  gameSpeed: number;
  invest: (area: 'tech' | 'marketing' | 'hiring') => void;
  isPaused: boolean;
  milestones: import('@/app/more/games/startup/page.types').Milestone[];
  setGameSpeed: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  startup: import('@/app/more/games/startup/page.types').StartupState;
}

export function StartupPlayingView({
  formatMoney,
  formatNumber,
  gamePhase,
  gameSpeed,
  invest,
  isPaused,
  milestones,
  setGameSpeed,
  setIsPaused,
  startup,
}: StartupPlayingViewProps) {
  return (
    <>
      {gamePhase === 'playing' && (
        <motion.div
          key="playing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-4"
        >
          {/* Game Controls */}
          <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Month {startup.month}</span>
              <span className="text-xs text-gray-400">
                ({Math.floor(startup.month / 12)} years, {startup.month % 12} months)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                {isPaused ? (
                  <Play className="w-5 h-5 text-green-500" />
                ) : (
                  <Pause className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <button
                onClick={() => setGameSpeed(gameSpeed === 1 ? 2 : gameSpeed === 2 ? 3 : 1)}
                className="px-2 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 rounded-lg"
              >
                {gameSpeed}x
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="w-4 h-4 text-green-500" />
                <span className="text-xs text-gray-500">Cash</span>
              </div>
              <p
                className={`text-lg font-bold ${startup.cash < 0 ? 'text-red-500' : 'text-gray-900 dark:text-white'}`}
              >
                {formatMoney(startup.cash)}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-gray-500">Users</span>
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {formatNumber(startup.users)}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-purple-500" />
                <span className="text-xs text-gray-500">Revenue/mo</span>
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {formatMoney(startup.revenue)}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-amber-500" />
                <span className="text-xs text-gray-500">Valuation</span>
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {formatMoney(startup.valuation)}
              </p>
            </div>
          </div>

          {/* Levels */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">Company Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Tech Level</span>
                </div>
                <div className="flex items-center gap-2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-4 rounded-sm ${
                        i < startup.techLevel ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Megaphone className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-4 rounded-sm ${
                        i < startup.marketingLevel
                          ? 'bg-orange-500'
                          : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Reputation</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {startup.reputation}/100
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Employees</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {startup.employees}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => invest('tech')}
              disabled={startup.cash < 30000}
              className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Code className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-xs font-medium text-gray-900 dark:text-white">Upgrade Tech</p>
              <p className="text-xs text-gray-500">$30K</p>
            </button>
            <button
              onClick={() => invest('marketing')}
              disabled={startup.cash < 20000}
              className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Megaphone className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xs font-medium text-gray-900 dark:text-white">Marketing</p>
              <p className="text-xs text-gray-500">$20K</p>
            </button>
            <button
              onClick={() => invest('hiring')}
              disabled={startup.cash < 50000}
              className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Users className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <p className="text-xs font-medium text-gray-900 dark:text-white">Hire</p>
              <p className="text-xs text-gray-500">$50K</p>
            </button>
          </div>

          {/* Milestones */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              Milestones
            </h3>
            <div className="space-y-2">
              {milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className={`flex items-center justify-between p-2 rounded-lg ${
                    milestone.achieved
                      ? 'bg-green-50 dark:bg-green-900/20'
                      : 'bg-gray-50 dark:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {milestone.achieved ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Target className="w-5 h-5 text-gray-400" />
                    )}
                    <span
                      className={`text-sm ${
                        milestone.achieved
                          ? 'text-green-700 dark:text-green-300'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {milestone.title}
                    </span>
                  </div>
                  <span className="text-xs text-purple-600 dark:text-purple-400">
                    +{milestone.xpReward} XP
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
