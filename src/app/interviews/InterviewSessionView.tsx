'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Lightbulb, Loader2, Send, ThumbsUp, Timer, X } from 'lucide-react';
import type * as React from 'react';

interface InterviewSessionViewProps {
  activeSession: import('@/app/interviews/page.types').InterviewSession;
  answer: string;
  currentQuestion: import('@/app/interviews/page.types').InterviewQuestion;
  getDifficultyStyles: (
    difficulty: string
  ) =>
    | 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
    | 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
    | 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
    | 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400';
  getScoreColor: (
    score: number
  ) =>
    | 'text-green-600 dark:text-green-400'
    | 'text-amber-600 dark:text-amber-400'
    | 'text-red-600 dark:text-red-400';
  handleEndSession: () => Promise<void>;
  handleNextQuestion: () => void;
  handleSubmitAnswer: () => Promise<void>;
  lastFeedback: { score: number; feedback: string } | null;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  showFeedback: boolean;
  submitting: boolean;
}

export function InterviewSessionView({
  activeSession,
  answer,
  currentQuestion,
  getDifficultyStyles,
  getScoreColor,
  handleEndSession,
  handleNextQuestion,
  handleSubmitAnswer,
  lastFeedback,
  setAnswer,
  showFeedback,
  submitting,
}: InterviewSessionViewProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 flex flex-col">
      {/* Session Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleEndSession}
              className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">
                {activeSession.category.name} Interview
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Question {(activeSession.answeredQuestions || 0) + 1} of{' '}
                {activeSession.totalQuestions || 0}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Timer className="w-4 h-4" />
            <span className="text-sm">In Progress</span>
          </div>
        </div>
      </div>

      {/* Question & Answer Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <AnimatePresence mode="wait">
          {showFeedback && lastFeedback ? (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-6 mb-4">
                <div className="flex items-center justify-center mb-6">
                  <div className={`text-5xl font-bold ${getScoreColor(lastFeedback.score)}`}>
                    {lastFeedback.score}
                  </div>
                  <span className="text-xl text-gray-400 ml-1">/100</span>
                </div>

                <h3 className="font-medium text-gray-900 dark:text-white mb-2 text-center">
                  AI Feedback
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                  {lastFeedback.feedback}
                </p>

                <div className="flex gap-4 justify-center mb-6">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">Good structure</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                    <Lightbulb className="w-4 h-4" />
                    <span className="text-sm">Add more details</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleEndSession}
                    className="flex-1 py-3 rounded-lg border border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    End Session
                  </button>
                  <button
                    onClick={handleNextQuestion}
                    className="flex-1 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    Next Question
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              {/* Question */}
              <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-6 mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 text-xs font-medium">
                    {typeof currentQuestion.category === 'string'
                      ? currentQuestion.category
                      : currentQuestion.category?.name || 'General'}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${getDifficultyStyles(currentQuestion.difficulty)}`}
                  >
                    {currentQuestion.difficulty}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {currentQuestion.question}
                </h3>

                {currentQuestion.tips && currentQuestion.tips.length > 0 && (
                  <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Tips
                    </h4>
                    <ul className="space-y-1">
                      {currentQuestion.tips.map((tip, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-gray-400 dark:text-gray-500">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Answer Input */}
              <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Your Answer</h4>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Type your answer here... Use the STAR method for behavioral questions."
                  className="w-full h-40 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg p-4 resize-none border border-gray-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
                />

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {answer.length} characters
                  </span>

                  <button
                    onClick={handleSubmitAnswer}
                    disabled={submitting || !answer.trim()}
                    className={`px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                      answer.trim()
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                        : 'bg-gray-100 dark:bg-neutral-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Answer
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
