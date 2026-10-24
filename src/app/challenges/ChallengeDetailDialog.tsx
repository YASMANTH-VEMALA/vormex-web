'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ChevronLeft, Play, Star, Timer } from 'lucide-react';
import type * as React from 'react';

interface ChallengeDetailDialogProps {
  code: string;
  currentHint: number;
  getDifficultyStyles: (
    difficulty: string
  ) =>
    | 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
    | 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30'
    | 'text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30'
    | 'text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30'
    | 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800';
  handleSubmit: () => Promise<void>;
  languages: string[];
  selectedChallenge: import('@/app/challenges/page.types').Challenge | null;
  selectedLanguage: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setCurrentHint: React.Dispatch<React.SetStateAction<number>>;
  setSelectedChallenge: React.Dispatch<
    React.SetStateAction<import('@/app/challenges/page.types').Challenge | null>
  >;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
  setShowHints: React.Dispatch<React.SetStateAction<boolean>>;
  showHints: boolean;
  submitting: boolean;
}

export function ChallengeDetailDialog({
  code,
  currentHint,
  getDifficultyStyles,
  handleSubmit,
  languages,
  selectedChallenge,
  selectedLanguage,
  setCode,
  setCurrentHint,
  setSelectedChallenge,
  setSelectedLanguage,
  setShowHints,
  showHints,
  submitting,
}: ChallengeDetailDialogProps) {
  return (
    <AnimatePresence>
      {selectedChallenge && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-gray-50 dark:bg-neutral-950"
        >
          <div className="h-full flex flex-col">
            {/* Modal Header */}
            <div className="bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedChallenge(null)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-white">
                    {selectedChallenge.title}
                  </h2>
                  <div className="flex items-center gap-2 text-xs mt-0.5">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${getDifficultyStyles(selectedChallenge.difficulty)}`}
                    >
                      {selectedChallenge.difficulty}
                    </span>
                    <span className="text-gray-500">{selectedChallenge.category}</span>
                    <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Star className="w-3 h-3" />
                      {selectedChallenge.points} pts
                    </span>
                  </div>
                </div>
              </div>
              {selectedChallenge.timeLimit && (
                <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                  <Timer className="w-4 h-4" />
                  {selectedChallenge.timeLimit} min
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
              {/* Problem Description */}
              <div className="lg:w-1/2 overflow-y-auto p-4 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Problem Description
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line mb-5">
                  {selectedChallenge.description}
                </p>

                {/* Test Cases */}
                {selectedChallenge.testCases &&
                  selectedChallenge.testCases.filter((t) => !t.isHidden).length > 0 && (
                    <div className="mb-5">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Example Test Cases
                      </h4>
                      <div className="space-y-2">
                        {selectedChallenge.testCases
                          .filter((t) => !t.isHidden)
                          .map((testCase, index) => (
                            <div
                              key={index}
                              className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-3 border border-gray-200 dark:border-neutral-700"
                            >
                              <div className="mb-2">
                                <span className="text-xs text-gray-500">Input:</span>
                                <pre className="text-sm text-gray-900 dark:text-white font-mono mt-1">
                                  {testCase.input}
                                </pre>
                              </div>
                              <div>
                                <span className="text-xs text-gray-500">Expected Output:</span>
                                <pre className="text-sm text-gray-900 dark:text-white font-mono mt-1">
                                  {testCase.expectedOutput}
                                </pre>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                {/* Hints */}
                {selectedChallenge.hints && selectedChallenge.hints.length > 0 && (
                  <div>
                    <button
                      onClick={() => setShowHints(!showHints)}
                      className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-sm mb-2"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {showHints ? 'Hide Hints' : `Show Hints (${selectedChallenge.hints.length})`}
                    </button>
                    <AnimatePresence>
                      {showHints && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                            <p className="text-sm text-amber-800 dark:text-amber-300">
                              Hint {currentHint + 1}: {selectedChallenge.hints[currentHint]}
                            </p>
                            {selectedChallenge.hints.length > 1 && (
                              <div className="flex gap-1.5 mt-2">
                                {selectedChallenge.hints.map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentHint(index)}
                                    className={`w-5 h-5 rounded text-xs font-medium ${
                                      currentHint === index
                                        ? 'bg-amber-600 text-white'
                                        : 'bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200'
                                    }`}
                                  >
                                    {index + 1}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Tags */}
                {selectedChallenge.tags && selectedChallenge.tags.length > 0 && (
                  <div className="mt-5">
                    <h4 className="text-xs text-gray-500 mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedChallenge.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 rounded bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Code Editor */}
              <div className="lg:w-1/2 flex flex-col overflow-hidden">
                {/* Language Selector */}
                <div className="bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 p-3 flex items-center gap-2 shrink-0">
                  <span className="text-xs text-gray-500">Language:</span>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white text-sm rounded-lg px-2.5 py-1 border border-gray-200 dark:border-neutral-700 focus:outline-none"
                  >
                    {languages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang.charAt(0).toUpperCase() + lang.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Code Area */}
                <div className="flex-1 overflow-hidden">
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Write your solution here..."
                    className="w-full h-full bg-gray-900 dark:bg-neutral-950 text-gray-100 font-mono text-sm p-4 resize-none focus:outline-none"
                    spellCheck={false}
                  />
                </div>

                {/* Submit Button */}
                <div className="bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 p-4 shrink-0">
                  <button
                    onClick={handleSubmit}
                    disabled={submitting || !code.trim()}
                    className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                      code.trim()
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                        : 'bg-gray-200 dark:bg-neutral-800 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-current"></div>
                        Running Tests...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Submit Solution
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
