'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, Clock, Code2, Filter, Medal, Star, Target, Trophy, Zap } from 'lucide-react';
import type * as React from 'react';

interface ChallengeListingsProps {
  activeTab: 'challenges' | 'submissions' | 'leaderboard';
  categories: string[];
  difficulties: string[];
  filteredChallenges: import('@/app/challenges/page.types').Challenge[];
  getDifficultyStyles: (
    difficulty: string
  ) =>
    | 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
    | 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30'
    | 'text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30'
    | 'text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30'
    | 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800';
  getStatusStyles: (
    status: string
  ) =>
    | 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
    | 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30'
    | 'text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30'
    | 'text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30'
    | 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800'
    | 'text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30';
  isSolved: (challengeId: string) => boolean;
  leaderboard: import('@/app/challenges/page.types').LeaderboardEntry[];
  selectedCategory: string;
  selectedDifficulty: string;
  setActiveTab: React.Dispatch<React.SetStateAction<'challenges' | 'submissions' | 'leaderboard'>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setSelectedChallenge: React.Dispatch<
    React.SetStateAction<import('@/app/challenges/page.types').Challenge | null>
  >;
  setSelectedDifficulty: React.Dispatch<React.SetStateAction<string>>;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  showFilters: boolean;
  submissions: import('@/app/challenges/page.types').Submission[];
}

export function ChallengeListings({
  activeTab,
  categories,
  difficulties,
  filteredChallenges,
  getDifficultyStyles,
  getStatusStyles,
  isSolved,
  leaderboard,
  selectedCategory,
  selectedDifficulty,
  setActiveTab,
  setSelectedCategory,
  setSelectedChallenge,
  setSelectedDifficulty,
  setShowFilters,
  showFilters,
  submissions,
}: ChallengeListingsProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-5">
      {activeTab === 'challenges' && (
        <>
          {/* Filters Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium mb-4 transition-colors ${
              showFilters
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                : 'bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-4"
              >
                <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800 space-y-4">
                  <div>
                    <label className="text-xs text-gray-500 mb-2 block">Difficulty</label>
                    <div className="flex flex-wrap gap-1.5">
                      {difficulties.map((diff) => (
                        <button
                          key={diff}
                          onClick={() => setSelectedDifficulty(diff)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                            selectedDifficulty === diff
                              ? getDifficultyStyles(diff)
                              : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700'
                          }`}
                        >
                          {diff}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-2 block">Category</label>
                    <div className="flex flex-wrap gap-1.5">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                            selectedCategory === cat
                              ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                              : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Challenges List */}
          {filteredChallenges.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <Code2 className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                No challenges found
              </h3>
              <p className="text-xs text-gray-500">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredChallenges.map((challenge) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`bg-white dark:bg-neutral-900 rounded-xl p-4 border transition-all cursor-pointer ${
                    isSolved(challenge.id)
                      ? 'border-green-300 dark:border-green-800'
                      : 'border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700'
                  }`}
                  onClick={() => setSelectedChallenge(challenge)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        {isSolved(challenge.id) && (
                          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                        )}
                        <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                          {challenge.title}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                        {challenge.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-medium ${getDifficultyStyles(challenge.difficulty)}`}
                        >
                          {challenge.difficulty}
                        </span>
                        <span className="px-2 py-0.5 rounded text-xs bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400">
                          {challenge.category}
                        </span>
                        {challenge.timeLimit && (
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            {challenge.timeLimit}m
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 ml-3">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-medium">{challenge.points}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === 'submissions' && (
        <>
          {submissions.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <Target className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                No submissions yet
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Solve challenges to see your submissions here
              </p>
              <button
                onClick={() => setActiveTab('challenges')}
                className="px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Start Solving
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {submissions.map((submission) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-0.5">
                        {submission.challenge?.title || 'Unknown Challenge'}
                      </h3>
                      <p className="text-xs text-gray-500">{submission.language}</p>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusStyles(submission.status)}`}
                    >
                      {submission.status.replace('_', ' ')}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    {submission.executionTime && (
                      <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {submission.executionTime}ms
                      </span>
                    )}
                    {submission.score && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {submission.score} pts
                      </span>
                    )}
                    <span>{new Date(submission.submittedAt).toLocaleDateString()}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === 'leaderboard' && (
        <>
          {leaderboard.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <Trophy className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                Leaderboard coming soon
              </h3>
              <p className="text-xs text-gray-500">Be the first to solve challenges!</p>
            </div>
          ) : (
            <div className="space-y-2">
              {leaderboard.map((entry, index) => (
                <motion.div
                  key={entry.userId}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-neutral-900 rounded-xl p-3 border border-gray-200 dark:border-neutral-800 flex items-center gap-3"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                      index === 0
                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                        : index === 1
                          ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                          : index === 2
                            ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                            : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {index < 3 ? <Medal className="w-4 h-4" /> : entry.rank}
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 font-medium text-sm">
                    {entry.avatar ? (
                      <img
                        src={entry.avatar}
                        alt={entry.username || entry.user?.username || 'User'}
                        className="w-full h-full rounded-lg object-cover"
                      />
                    ) : (
                      (entry.username || entry.user?.username || 'U').charAt(0).toUpperCase()
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                      {entry.username || entry.user?.username || 'Unknown'}
                    </h3>
                    <p className="text-xs text-gray-500">{entry.solvedCount} solved</p>
                  </div>

                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                    <Trophy className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {entry.totalPoints.toLocaleString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
