'use client';
import { useAuth as useResourceAuth } from '@/lib/auth/useAuth';
import { useQuery } from '@tanstack/react-query';
import { LearningListings } from './LearningListings';
import { LearningPathDialog } from './LearningPathDialog';
import type { Enrollment, LearningPath, Lesson } from './page.types';
export type { Enrollment, LearningPath, Lesson, LessonProgress, Module } from './page.types';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import * as learningAPI from '@/lib/api/learning';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  CheckCircle,
  ChevronLeft,
  Clock,
  Code2,
  FileText,
  GraduationCap,
  Play,
  Star,
  Target,
  Trophy,
  Video,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const categories = ['All', 'PROGRAMMING', 'WEB_DEV', 'MOBILE', 'DATA_SCIENCE', 'DEVOPS', 'DESIGN'];
const difficulties = ['All', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'];

function LearningPage() {
  const [initialPaths] = useState<LearningPath[]>([]);
  const [initialEnrollments] = useState<Enrollment[]>([]);
  const [activeTab, setActiveTab] = useState<'explore' | 'my-paths' | 'completed'>('explore');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const [enrolling, setEnrolling] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>(
    {
      show: false,
      message: '',
      type: 'success',
    }
  );

  const resourceViewer = useResourceAuth().user;
  const loadDataResource = useQuery({
    queryKey: ['web-resource', 'learning', resourceViewer?.id ?? 'anonymous'],
    queryFn: async () => {
      const [paths, enrollments] = await Promise.all([
        learningAPI.getLearningPaths(),
        learningAPI.getMyEnrollments(),
      ]);
      return {
        paths: (paths || []) as LearningPath[],
        enrollments: (enrollments || []) as Enrollment[],
      };
    },
    retry: false,
  });
  const paths = loadDataResource.data?.paths ?? initialPaths;
  const enrollments = loadDataResource.data?.enrollments ?? initialEnrollments;
  const loading = loadDataResource.isPending;
  const loadData = () => loadDataResource.refetch();

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleEnroll = async (path: LearningPath) => {
    try {
      setEnrolling(true);
      await learningAPI.enrollInPath(path.id);
      showToast(`Enrolled in ${path.title}!`, 'success');
      loadData();
    } catch (error) {
      console.error('Error enrolling:', error);
      showToast('Failed to enroll', 'error');
    } finally {
      setEnrolling(false);
    }
  };

  const handleCompleteLesson = async (lessonId: string) => {
    try {
      await learningAPI.completeLesson(lessonId);
      showToast('Lesson completed! +XP earned', 'success');
      setSelectedLesson(null);
      loadData();
    } catch (error) {
      console.error('Error completing lesson:', error);
      showToast('Failed to complete lesson', 'error');
    }
  };

  const isEnrolled = (pathId: string) => enrollments.some((e) => e.pathId === pathId);
  const getEnrollment = (pathId: string) => enrollments.find((e) => e.pathId === pathId);

  const isLessonCompleted = (enrollment: Enrollment | undefined, lessonId: string) => {
    return enrollment?.lessonProgress?.some((lp) => lp.lessonId === lessonId) || false;
  };

  const filteredPaths = paths.filter((path) => {
    const matchesCategory = selectedCategory === 'All' || path.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === 'All' || path.difficulty === selectedDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  const myActivePaths = enrollments.filter((e) => !e.completedAt);
  const myCompletedPaths = enrollments.filter((e) => e.completedAt);

  const getDifficultyStyles = (difficulty: string) => {
    switch (difficulty) {
      case 'BEGINNER':
        return 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
      case 'INTERMEDIATE':
        return 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30';
      case 'ADVANCED':
        return 'text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30';
      case 'EXPERT':
        return 'text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800';
    }
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'VIDEO':
        return <Video className="w-4 h-4" />;
      case 'ARTICLE':
        return <FileText className="w-4 h-4" />;
      case 'EXERCISE':
        return <Code2 className="w-4 h-4" />;
      case 'QUIZ':
        return <Target className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTotalLessons = (path: LearningPath) => {
    return path.modules?.reduce((total, module) => total + (module.lessons?.length || 0), 0) || 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 pb-20">
      {/* Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg text-sm font-medium ${
              toast.type === 'success'
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lesson Viewer Modal */}
      <AnimatePresence>
        {selectedLesson && (
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
                    onClick={() => setSelectedLesson(null)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  <div className="flex items-center gap-2">
                    {getLessonIcon(selectedLesson.type)}
                    <h2 className="font-semibold text-gray-900 dark:text-white">
                      {selectedLesson.title}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 text-sm">
                  <Star className="w-4 h-4" />
                  <span>+{selectedLesson.xpReward} XP</span>
                </div>
              </div>

              {/* Lesson Content */}
              <div className="flex-1 overflow-y-auto p-5 bg-white dark:bg-neutral-900">
                {selectedLesson.type === 'VIDEO' && selectedLesson.videoUrl && (
                  <div className="aspect-video bg-gray-100 dark:bg-neutral-800 rounded-xl mb-5 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">Video Player</p>
                    </div>
                  </div>
                )}

                {selectedLesson.content && (
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                      {selectedLesson.content}
                    </p>
                  </div>
                )}

                {selectedLesson.duration && (
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Estimated time: {selectedLesson.duration} minutes</span>
                  </div>
                )}
              </div>

              {/* Complete Button */}
              <div className="bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 p-4 shrink-0">
                <button
                  onClick={() => handleCompleteLesson(selectedLesson.id)}
                  className="w-full py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Mark as Complete
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Path Detail Modal */}
      <LearningPathDialog
        enrolling={enrolling}
        getDifficultyStyles={getDifficultyStyles}
        getEnrollment={getEnrollment}
        getLessonIcon={getLessonIcon}
        getTotalLessons={getTotalLessons}
        handleEnroll={handleEnroll}
        isEnrolled={isEnrolled}
        isLessonCompleted={isLessonCompleted}
        selectedLesson={selectedLesson}
        selectedPath={selectedPath}
        setSelectedLesson={setSelectedLesson}
        setSelectedPath={setSelectedPath}
      />

      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-neutral-800">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Link
                href="/more"
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </Link>
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Learning Paths
                </h1>
                <p className="text-xs text-gray-500">{paths.length} paths available</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
                <BookOpen className="w-3.5 h-3.5" />
                {myActivePaths.length}
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                <Award className="w-3.5 h-3.5" />
                {myCompletedPaths.length}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex px-4 gap-2 pb-3">
            {[
              { id: 'explore', label: 'Explore', icon: <GraduationCap className="w-4 h-4" /> },
              { id: 'my-paths', label: 'My Paths', icon: <BookOpen className="w-4 h-4" /> },
              { id: 'completed', label: 'Completed', icon: <Trophy className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <LearningListings
        activeTab={activeTab}
        categories={categories}
        difficulties={difficulties}
        filteredPaths={filteredPaths}
        getDifficultyStyles={getDifficultyStyles}
        getEnrollment={getEnrollment}
        getTotalLessons={getTotalLessons}
        isEnrolled={isEnrolled}
        myActivePaths={myActivePaths}
        myCompletedPaths={myCompletedPaths}
        selectedCategory={selectedCategory}
        selectedDifficulty={selectedDifficulty}
        setActiveTab={setActiveTab}
        setSelectedCategory={setSelectedCategory}
        setSelectedDifficulty={setSelectedDifficulty}
        setSelectedPath={setSelectedPath}
      />
    </div>
  );
}

export default function LearningPageWrapper() {
  return (
    <ProtectedRoute>
      <LearningPage />
    </ProtectedRoute>
  );
}
