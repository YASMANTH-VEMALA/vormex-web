'use client';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  CornerDownLeft,
  Delete,
  HelpCircle,
  Share2,
  Target,
  Trophy,
  X,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';

interface WordleGameViewProps {
  KEYBOARD_ROWS: string[][];
  fetchWordle: () => Promise<void>;
  gameState: import('@/app/more/games/wordle/page.types').GameState;
  getKeyClass: (
    key: string
  ) =>
    | 'rounded-lg font-semibold transition-all active:scale-95 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-4 text-xs'
    | 'rounded-lg font-semibold transition-all active:scale-95 bg-green-500 text-white'
    | 'rounded-lg font-semibold transition-all active:scale-95 bg-amber-500 text-white'
    | 'rounded-lg font-semibold transition-all active:scale-95 bg-gray-500 text-white dark:bg-gray-600'
    | 'rounded-lg font-semibold transition-all active:scale-95 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600';
  guesses: import('@/app/more/games/wordle/page.types').GuessResult[];
  handleKeyPress: (key: string) => void;
  maxAttempts: number;
  message: string;
  renderGrid: () => React.JSX.Element[];
  revealedWord: string | null;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  shareResult: () => void;
  showHelp: boolean;
  xpEarned: number;
}

export function WordleGameView({
  KEYBOARD_ROWS,
  fetchWordle,
  gameState,
  getKeyClass,
  guesses,
  handleKeyPress,
  maxAttempts,
  message,
  renderGrid,
  revealedWord,
  setShowHelp,
  shareResult,
  showHelp,
  xpEarned,
}: WordleGameViewProps) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-2xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link
                  href="/more/games"
                  className="p-2 -ml-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </Link>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-500" />
                  Tech Wordle
                </h1>
              </div>

              <button
                onClick={() => setShowHelp(true)}
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <HelpCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          {/* Message */}
          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-24 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium z-50"
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading State */}
          {gameState === 'loading' && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" />
              <p className="mt-4 text-gray-500">Loading today&apos;s word...</p>
            </div>
          )}

          {/* Error State */}
          {gameState === 'error' && (
            <div className="text-center py-20">
              <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Couldn&apos;t load the game
              </h2>
              <button
                onClick={fetchWordle}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Already Played State */}
          {gameState === 'already-played' && (
            <div className="text-center py-10">
              <Trophy className="w-16 h-16 text-amber-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                You&apos;ve already played today!
              </h2>
              <p className="text-gray-500 mb-6">Come back tomorrow for a new word.</p>
              <Link
                href="/more/games"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors inline-block"
              >
                Try Other Games
              </Link>
            </div>
          )}

          {/* Game Grid */}
          {(gameState === 'playing' || gameState === 'won' || gameState === 'lost') && (
            <>
              {/* Grid */}
              <div className="space-y-1.5 py-4">{renderGrid()}</div>

              {/* Win/Lose Message */}
              {(gameState === 'won' || gameState === 'lost') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-6 rounded-xl text-center ${
                    gameState === 'won'
                      ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                  }`}
                >
                  {gameState === 'won' ? (
                    <>
                      <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">
                        🎉 Congratulations!
                      </h3>
                      <p className="text-green-600 dark:text-green-400 mb-4">
                        You guessed the word in {guesses.length}{' '}
                        {guesses.length === 1 ? 'try' : 'tries'}!
                      </p>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Zap className="w-5 h-5 text-purple-500" />
                        <span className="text-lg font-semibold text-purple-600">
                          +{xpEarned} XP
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-red-700 dark:text-red-300 mb-2">
                        Game Over
                      </h3>
                      <p className="text-red-600 dark:text-red-400 mb-4">
                        The word was:{' '}
                        <strong className="uppercase">{revealedWord || 'Unknown'}</strong>
                      </p>
                    </>
                  )}

                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={shareResult}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    <Link
                      href="/more/games"
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Back to Games
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* Keyboard */}
              {gameState === 'playing' && (
                <div className="space-y-1.5 pt-4">
                  {KEYBOARD_ROWS.map((row, i) => (
                    <div key={i} className="flex justify-center gap-1.5">
                      {row.map((key) => (
                        <button
                          key={key}
                          onClick={() => handleKeyPress(key)}
                          className={`${getKeyClass(key)} ${
                            key === 'ENTER' || key === 'DELETE'
                              ? 'w-auto'
                              : 'w-8 h-12 sm:w-10 sm:h-14'
                          }`}
                        >
                          {key === 'DELETE' ? (
                            <Delete className="w-5 h-5" />
                          ) : key === 'ENTER' ? (
                            <CornerDownLeft className="w-5 h-5" />
                          ) : (
                            key
                          )}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Help Modal */}
        <AnimatePresence>
          {showHelp && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              onClick={() => setShowHelp(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">How to Play</h2>
                  <button
                    onClick={() => setShowHelp(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>Guess the tech-related word in {maxAttempts} tries.</p>

                  <div className="space-y-3">
                    <p className="font-medium text-gray-900 dark:text-white">
                      After each guess, the tiles will change color:
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center text-white font-bold">
                        R
                      </div>
                      <span>Letter is in the correct spot</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center text-white font-bold">
                        E
                      </div>
                      <span>Letter is in the word but wrong spot</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center text-white font-bold">
                        A
                      </div>
                      <span>Letter is not in the word</span>
                    </div>
                  </div>

                  <p className="text-sm">A new word is available every day!</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ProtectedRoute>
  );
}
