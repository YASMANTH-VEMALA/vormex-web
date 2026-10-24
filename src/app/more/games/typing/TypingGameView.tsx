'use client';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowLeft,
  Clock,
  Gauge,
  Keyboard,
  Play,
  RotateCcw,
  Target,
  Trophy,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';

interface TypingGameViewProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  currentCharIndex: number;
  currentText: import('@/lib/api/games.types').TypingText;
  currentTextIndex: number;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  elapsedSeconds: number;
  errors: Set<number>;
  fetchTexts: () => Promise<void>;
  gameState: import('@/app/more/games/typing/page.types').GameState;
  getDifficultyColor: (
    diff: string
  ) =>
    | 'bg-green-100 text-green-600 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
    | 'bg-amber-100 text-amber-600 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800'
    | 'bg-red-100 text-red-600 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800'
    | 'bg-gray-100 text-gray-600 border-gray-200';
  getWpmRating: (wpm: number) => { label: string; color: string };
  handleContainerClick: () => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  nextText: () => void;
  resetGame: () => void;
  setCurrentTextIndex: React.Dispatch<React.SetStateAction<number>>;
  setDifficulty: React.Dispatch<React.SetStateAction<'EASY' | 'MEDIUM' | 'HARD'>>;
  startGame: () => Promise<void>;
  stats: import('@/app/more/games/typing/page.types').TypingStats | null;
  texts: import('@/lib/api/games.types').TypingText[];
  userInput: string;
  xpEarned: number;
}

export function TypingGameView({
  containerRef,
  currentCharIndex,
  currentText,
  currentTextIndex,
  difficulty,
  elapsedSeconds,
  errors,
  fetchTexts,
  gameState,
  getDifficultyColor,
  getWpmRating,
  handleContainerClick,
  handleInput,
  inputRef,
  nextText,
  resetGame,
  setCurrentTextIndex,
  setDifficulty,
  startGame,
  stats,
  texts,
  userInput,
  xpEarned,
}: TypingGameViewProps) {
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
                  <Keyboard className="w-6 h-6 text-blue-500" />
                  Typing Race
                </h1>
              </div>

              {xpEarned > 0 && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    +{xpEarned} XP
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
          {/* Difficulty Selector */}
          <div className="flex items-center justify-center gap-2">
            {(['EASY', 'MEDIUM', 'HARD'] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => {
                  setDifficulty(diff);
                  setCurrentTextIndex(0);
                }}
                className={`px-4 py-2 rounded-xl font-medium transition-all border ${
                  difficulty === diff
                    ? getDifficultyColor(diff)
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {gameState === 'loading' && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
              <p className="mt-4 text-gray-500">Loading typing texts...</p>
            </div>
          )}

          {/* Error State */}
          {gameState === 'error' && (
            <div className="text-center py-20">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Couldn&apos;t load typing texts
              </h2>
              <button
                onClick={fetchTexts}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Ready State */}
          {gameState === 'ready' && currentText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Text Preview */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full border ${getDifficultyColor(currentText.difficulty)}`}
                  >
                    {currentText.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">
                    {currentText.content.length} characters
                  </span>
                </div>

                <p className="font-mono text-gray-700 dark:text-gray-300 leading-relaxed">
                  {currentText.content}
                </p>
              </div>

              {/* Start Button */}
              <button
                onClick={startGame}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Start Typing
              </button>

              {/* Text Selector */}
              <div className="flex items-center justify-center gap-2">
                {texts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTextIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTextIndex
                        ? 'bg-blue-600 scale-125'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Playing State */}
          {gameState === 'playing' && currentText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
              ref={containerRef}
              onClick={handleContainerClick}
            >
              {/* Timer */}
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="font-mono text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {elapsedSeconds}s
                  </span>
                </div>
              </div>

              {/* Typing Area */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-blue-500 p-6 cursor-text">
                <p className="font-mono text-lg leading-relaxed select-none">
                  {currentText.content.split('').map((char, index) => {
                    let className = 'text-gray-400 dark:text-gray-500';

                    if (index < currentCharIndex) {
                      if (errors.has(index)) {
                        className = 'text-red-500 bg-red-100 dark:bg-red-900/30';
                      } else {
                        className = 'text-green-600 dark:text-green-400';
                      }
                    } else if (index === currentCharIndex) {
                      className = 'bg-blue-500 text-white animate-pulse';
                    }

                    return (
                      <span
                        key={index}
                        className={`${className} ${char === ' ' && index === currentCharIndex ? 'px-0.5' : ''}`}
                      >
                        {char}
                      </span>
                    );
                  })}
                </p>

                {/* Hidden input for mobile keyboard */}
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={handleInput}
                  className="absolute opacity-0 pointer-events-none"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                />
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    {currentCharIndex} / {currentText.content.length}
                  </span>
                  <span>{Math.round((currentCharIndex / currentText.content.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all"
                    style={{ width: `${(currentCharIndex / currentText.content.length) * 100}%` }}
                  />
                </div>
              </div>

              <p className="text-center text-gray-500 text-sm">Click here and start typing...</p>
            </motion.div>
          )}

          {/* Completed State */}
          {gameState === 'completed' && stats && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              {/* Results */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-center">
                <div className="mb-6">
                  <Trophy className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                  <h2 className={`text-2xl font-bold ${getWpmRating(stats.wpm).color}`}>
                    {getWpmRating(stats.wpm).label}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Gauge className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-gray-500">Speed</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.wpm}</p>
                    <p className="text-sm text-gray-500">WPM</p>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-500">Accuracy</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
                      {stats.accuracy}%
                    </p>
                    <p className="text-sm text-gray-500">
                      {stats.correctChars}/{stats.totalChars} chars
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{(stats.time / 1000).toFixed(1)}s</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span>{stats.errors} errors</span>
                  </div>
                </div>

                {xpEarned > 0 && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-purple-600">+{xpEarned} XP Earned!</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={resetGame}
                  className="flex-1 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Try Again
                </button>
                <button
                  onClick={nextText}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Next Text
                  <Keyboard className="w-5 h-5" />
                </button>
              </div>

              <Link
                href="/more/games"
                className="block text-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                ← Back to Games
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
