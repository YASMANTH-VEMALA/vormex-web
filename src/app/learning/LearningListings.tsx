'use client';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Clock, GraduationCap, Star, Trophy } from 'lucide-react';
import type * as React from 'react';

interface LearningListingsProps {
  activeTab: 'explore' | 'my-paths' | 'completed';
  categories: string[];
  difficulties: string[];
  filteredPaths: import('@/app/learning/page.types').LearningPath[];
  getDifficultyStyles: (
    difficulty: string
  ) =>
    | 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
    | 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30'
    | 'text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30'
    | 'text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30'
    | 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800';
  getEnrollment: (pathId: string) => import('@/app/learning/page.types').Enrollment | undefined;
  getTotalLessons: (path: import('@/app/learning/page.types').LearningPath) => number;
  isEnrolled: (pathId: string) => boolean;
  myActivePaths: import('@/app/learning/page.types').Enrollment[];
  myCompletedPaths: import('@/app/learning/page.types').Enrollment[];
  selectedCategory: string;
  selectedDifficulty: string;
  setActiveTab: React.Dispatch<React.SetStateAction<'explore' | 'my-paths' | 'completed'>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setSelectedDifficulty: React.Dispatch<React.SetStateAction<string>>;
  setSelectedPath: React.Dispatch<
    React.SetStateAction<import('@/app/learning/page.types').LearningPath | null>
  >;
}

export function LearningListings({
  activeTab,
  categories,
  difficulties,
  filteredPaths,
  getDifficultyStyles,
  getEnrollment,
  getTotalLessons,
  isEnrolled,
  myActivePaths,
  myCompletedPaths,
  selectedCategory,
  selectedDifficulty,
  setActiveTab,
  setSelectedCategory,
  setSelectedDifficulty,
  setSelectedPath,
}: LearningListingsProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-5">
      {activeTab === 'explore' && (
        <>
          {/* Filters */}
          <div className="space-y-2 mb-5">
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  {category === 'All' ? 'All' : category.replace('_', ' ')}
                </button>
              ))}
            </div>
            <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
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

          {/* Paths Grid */}
          {filteredPaths.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <GraduationCap className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                No paths found
              </h3>
              <p className="text-xs text-gray-500">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredPaths.map((path) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-all cursor-pointer"
                  onClick={() => setSelectedPath(path)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                          {path.title}
                        </h3>
                        {isEnrolled(path.id) && (
                          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mb-2 line-clamp-2">{path.description}</p>

                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-medium ${getDifficultyStyles(path.difficulty)}`}
                        >
                          {path.difficulty}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {path.estimatedHours}h
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <BookOpen className="w-3 h-3" />
                          {getTotalLessons(path)}
                        </span>
                      </div>

                      {/* Progress bar for enrolled paths */}
                      {isEnrolled(path.id) && (
                        <div className="mt-2">
                          <div className="h-1 bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gray-900 dark:bg-white rounded-full"
                              style={{ width: `${getEnrollment(path.id)?.progress || 0}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-medium">{path.xpReward}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === 'my-paths' && (
        <>
          {myActivePaths.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <BookOpen className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                No active paths
              </h3>
              <p className="text-xs text-gray-500 mb-3">Start learning by enrolling in a path</p>
              <button
                onClick={() => setActiveTab('explore')}
                className="px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Explore Paths
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {myActivePaths.map((enrollment) => (
                <motion.div
                  key={enrollment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800 cursor-pointer"
                  onClick={() => setSelectedPath(enrollment.path || null)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-0.5">
                        {enrollment.path?.title || 'Unknown Path'}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {enrollment.path?.category || 'Unknown'}
                      </p>

                      <div className="mb-1.5">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-500">Progress</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {enrollment.progress}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gray-900 dark:bg-white rounded-full"
                            style={{ width: `${enrollment.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="text-xs text-gray-500">
                        Started {new Date(enrollment.startedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === 'completed' && (
        <>
          {myCompletedPaths.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <Trophy className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                No completed paths yet
              </h3>
              <p className="text-xs text-gray-500">Complete learning paths to earn certificates</p>
            </div>
          ) : (
            <div className="space-y-3">
              {myCompletedPaths.map((enrollment) => (
                <motion.div
                  key={enrollment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-green-300 dark:border-green-800"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-0.5">
                        {enrollment.path?.title || 'Unknown Path'}
                      </h3>
                      <p className="text-xs text-green-600 dark:text-green-400 mb-2">Completed!</p>

                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5" />+{enrollment.path?.xpReward || 0} XP
                        </span>
                        <span>{new Date(enrollment.completedAt!).toLocaleDateString()}</span>
                      </div>
                    </div>
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
