'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart3,
  CheckCircle,
  ChevronLeft,
  Clock,
  Lightbulb,
  Loader2,
  MessageSquare,
  Play,
  Star,
  Target,
  ThumbsUp,
} from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';

interface InterviewPracticeViewProps {
  activeTab: 'practice' | 'history' | 'stats';
  categories: import('@/app/interviews/page.types').InterviewCategory[];
  getCategoryIcon: (icon?: string | undefined) => React.JSX.Element;
  getScoreColor: (
    score: number
  ) =>
    | 'text-green-600 dark:text-green-400'
    | 'text-amber-600 dark:text-amber-400'
    | 'text-red-600 dark:text-red-400';
  getStatusStyles: (
    status: string
  ) =>
    | 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
    | 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
    | 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
    | 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400';
  handleStartSession: (
    category: import('@/app/interviews/page.types').InterviewCategory
  ) => Promise<void>;
  selectedCategory: import('@/app/interviews/page.types').InterviewCategory | null;
  sessions: import('@/app/interviews/page.types').InterviewSession[];
  setActiveTab: React.Dispatch<React.SetStateAction<'practice' | 'history' | 'stats'>>;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<import('@/app/interviews/page.types').InterviewCategory | null>
  >;
  starting: boolean;
  stats: import('@/app/interviews/page.types').InterviewStats | null;
  toast: { show: boolean; message: string; type: 'success' | 'error' };
}

export function InterviewPracticeView({
  activeTab,
  categories,
  getCategoryIcon,
  getScoreColor,
  getStatusStyles,
  handleStartSession,
  selectedCategory,
  sessions,
  setActiveTab,
  setSelectedCategory,
  starting,
  stats,
  toast,
}: InterviewPracticeViewProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 pb-20">
      {/* Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg font-medium text-sm ${
              toast.type === 'success'
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Selection Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-neutral-900 rounded-xl max-w-md w-full border border-gray-200 dark:border-neutral-800 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                    {getCategoryIcon(selectedCategory.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {selectedCategory.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedCategory.description}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Questions available</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {selectedCategory.questionCount || 20}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white">What to expect:</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      AI-powered feedback on each answer
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Tips and improvement suggestions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Track your progress over time
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="flex-1 py-2.5 rounded-lg border border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleStartSession(selectedCategory)}
                    disabled={starting}
                    className="flex-1 py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    {starting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Starting...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Start Practice
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
        <div className="flex items-center gap-3 px-4 py-4">
          <Link
            href="/more"
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Mock Interviews</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Practice with AI feedback</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex px-4 gap-1 pb-3">
          {[
            { id: 'practice', label: 'Practice', icon: <MessageSquare className="w-4 h-4" /> },
            { id: 'history', label: 'History', icon: <Clock className="w-4 h-4" /> },
            { id: 'stats', label: 'Stats', icon: <BarChart3 className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 max-w-2xl mx-auto">
        {activeTab === 'practice' && (
          <>
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
              Choose a Category
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedCategory(category)}
                  className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-colors text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-3">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {category.description}
                  </p>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {category.questionCount || 20} questions
                  </span>
                </motion.button>
              ))}
            </div>

            {/* STAR Method Tips */}
            <div className="mt-6 bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5">
              <h3 className="font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                STAR Method
              </h3>
              <div className="space-y-3">
                {[
                  { letter: 'S', title: 'Situation', desc: 'Set the context for your story' },
                  { letter: 'T', title: 'Task', desc: 'Describe your responsibility' },
                  { letter: 'A', title: 'Action', desc: 'Explain what you did' },
                  { letter: 'R', title: 'Result', desc: 'Share the outcome' },
                ].map((item) => (
                  <div key={item.letter} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {item.letter}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'history' && (
          <>
            {sessions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  No practice sessions yet
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Start practicing to see your history
                </p>
                <button
                  onClick={() => setActiveTab('practice')}
                  className="px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  Start Practice
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {sessions.map((session, index) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                          {getCategoryIcon(session.category.icon)}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {session.category.name}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {session.answeredQuestions} / {session.totalQuestions} questions
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusStyles(session.status)}`}
                      >
                        {session.status.replace('_', ' ')}
                      </span>
                    </div>

                    {session.score !== undefined && (
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-4 h-4 text-amber-500" />
                        <span className={`font-semibold ${getScoreColor(session.score)}`}>
                          {session.score}/100
                        </span>
                      </div>
                    )}

                    <div className="text-xs text-gray-400 dark:text-gray-500">
                      {new Date(session.startedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === 'stats' && (
          <>
            {!stats || stats.totalSessions === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">No stats yet</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Complete practice sessions to see your stats
                </p>
                <button
                  onClick={() => setActiveTab('practice')}
                  className="px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  Start Practice
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Overview Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stats.totalSessions}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Total Sessions</p>
                  </div>
                  <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800">
                    <div
                      className={`text-2xl font-bold mb-1 ${getScoreColor(stats.averageScore ?? stats.avgScore ?? 0)}`}
                    >
                      {Math.round(stats.averageScore ?? stats.avgScore ?? 0)}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Average Score</p>
                  </div>
                  <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stats.totalQuestions ?? 0}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Questions Answered</p>
                  </div>
                  <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                      {stats.strongAreas?.length || 0}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Strong Areas</p>
                  </div>
                </div>

                {/* Strong Areas */}
                {stats.strongAreas && stats.strongAreas.length > 0 && (
                  <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4 text-green-500" />
                      Strong Areas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {stats.strongAreas.map((area, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Weak Areas */}
                {stats.weakAreas && stats.weakAreas.length > 0 && (
                  <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-amber-500" />
                      Areas to Improve
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {stats.weakAreas.map((area, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
