'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  GraduationCap,
  Lock,
  Play,
  Star,
  Users,
  X,
} from 'lucide-react';
import type * as React from 'react';

interface LearningPathDialogProps {
  enrolling: boolean;
  getDifficultyStyles: (
    difficulty: string
  ) =>
    | 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
    | 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30'
    | 'text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30'
    | 'text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30'
    | 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800';
  getEnrollment: (pathId: string) => import('@/app/learning/page.types').Enrollment | undefined;
  getLessonIcon: (type: string) => React.JSX.Element;
  getTotalLessons: (path: import('@/app/learning/page.types').LearningPath) => number;
  handleEnroll: (path: import('@/app/learning/page.types').LearningPath) => Promise<void>;
  isEnrolled: (pathId: string) => boolean;
  isLessonCompleted: (
    enrollment: import('@/app/learning/page.types').Enrollment | undefined,
    lessonId: string
  ) => boolean;
  selectedLesson: import('@/app/learning/page.types').Lesson | null;
  selectedPath: import('@/app/learning/page.types').LearningPath | null;
  setSelectedLesson: React.Dispatch<
    React.SetStateAction<import('@/app/learning/page.types').Lesson | null>
  >;
  setSelectedPath: React.Dispatch<
    React.SetStateAction<import('@/app/learning/page.types').LearningPath | null>
  >;
}

export function LearningPathDialog({
  enrolling,
  getDifficultyStyles,
  getEnrollment,
  getLessonIcon,
  getTotalLessons,
  handleEnroll,
  isEnrolled,
  isLessonCompleted,
  selectedLesson,
  selectedPath,
  setSelectedLesson,
  setSelectedPath,
}: LearningPathDialogProps) {
  return (
    <AnimatePresence>
      {selectedPath && !selectedLesson && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60"
        >
          <div className="min-h-screen p-4 flex items-start justify-center pt-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="bg-white dark:bg-neutral-900 rounded-xl max-w-lg w-full border border-gray-200 dark:border-neutral-800"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 p-4 rounded-t-xl flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                  Learning Path
                </h2>
                <button
                  onClick={() => setSelectedPath(null)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-5">
                {/* Path Header */}
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-3">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {selectedPath.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {selectedPath.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${getDifficultyStyles(selectedPath.difficulty)}`}
                    >
                      {selectedPath.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      {selectedPath.estimatedHours}h
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <BookOpen className="w-3.5 h-3.5" />
                      {getTotalLessons(selectedPath)} lessons
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                      <Star className="w-3.5 h-3.5" />
                      {selectedPath.xpReward} XP
                    </span>
                  </div>

                  {selectedPath._count && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Users className="w-3.5 h-3.5" />
                      {selectedPath._count.enrollments.toLocaleString()} enrolled
                    </div>
                  )}
                </div>

                {/* Progress (if enrolled) */}
                {isEnrolled(selectedPath.id) && (
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-gray-500">Progress</span>
                      <span className="text-xs font-medium text-gray-900 dark:text-white">
                        {getEnrollment(selectedPath.id)?.progress || 0}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gray-900 dark:bg-white rounded-full transition-all"
                        style={{ width: `${getEnrollment(selectedPath.id)?.progress || 0}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Modules & Lessons */}
                {selectedPath.modules && selectedPath.modules.length > 0 && (
                  <div className="space-y-3 mb-5">
                    {selectedPath.modules
                      .sort((a, b) => a.order - b.order)
                      .map((module, moduleIndex) => (
                        <div
                          key={module.id}
                          className="bg-gray-50 dark:bg-neutral-800 rounded-lg overflow-hidden"
                        >
                          <div className="p-3 border-b border-gray-200 dark:border-neutral-700">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                              Module {moduleIndex + 1}: {module.title}
                            </h4>
                          </div>

                          {module.lessons && module.lessons.length > 0 && (
                            <div className="divide-y divide-gray-200 dark:divide-neutral-700">
                              {module.lessons
                                .sort((a, b) => a.order - b.order)
                                .map((lesson) => {
                                  const enrollment = getEnrollment(selectedPath.id);
                                  const isCompleted = isLessonCompleted(enrollment, lesson.id);
                                  const canAccess = isEnrolled(selectedPath.id);

                                  return (
                                    <button
                                      key={lesson.id}
                                      onClick={() => canAccess && setSelectedLesson(lesson)}
                                      disabled={!canAccess}
                                      className={`w-full p-2.5 flex items-center gap-2.5 transition-colors ${
                                        canAccess
                                          ? 'hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer'
                                          : 'opacity-50 cursor-not-allowed'
                                      }`}
                                    >
                                      <div
                                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                          isCompleted
                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                                            : canAccess
                                              ? 'bg-gray-200 dark:bg-neutral-700 text-gray-600 dark:text-gray-400'
                                              : 'bg-gray-200 dark:bg-neutral-800 text-gray-400'
                                        }`}
                                      >
                                        {isCompleted ? (
                                          <CheckCircle className="w-3.5 h-3.5" />
                                        ) : canAccess ? (
                                          getLessonIcon(lesson.type)
                                        ) : (
                                          <Lock className="w-3.5 h-3.5" />
                                        )}
                                      </div>
                                      <div className="flex-1 text-left">
                                        <h5
                                          className={`text-xs font-medium ${isCompleted ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}
                                        >
                                          {lesson.title}
                                        </h5>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                          <span>{lesson.type}</span>
                                          {lesson.duration && (
                                            <>
                                              <span>·</span>
                                              <span>{lesson.duration}m</span>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                      {canAccess && (
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                      )}
                                    </button>
                                  );
                                })}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                )}

                {/* Tags */}
                {selectedPath.tags && selectedPath.tags.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-xs text-gray-500 mb-2">Topics</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedPath.tags.map((tag, index) => (
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

                {/* Enroll Button */}
                <div className="pt-4 border-t border-gray-200 dark:border-neutral-800">
                  {isEnrolled(selectedPath.id) ? (
                    <div className="w-full py-2.5 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium text-center flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Enrolled
                    </div>
                  ) : (
                    <button
                      onClick={() => handleEnroll(selectedPath)}
                      disabled={enrolling}
                      className="w-full py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                    >
                      {enrolling ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-current"></div>
                          Enrolling...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          Start Learning
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
