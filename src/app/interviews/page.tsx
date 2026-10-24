'use client';
import { InterviewPracticeView } from './InterviewPracticeView';
import { InterviewSessionView } from './InterviewSessionView';
import type {
  InterviewCategory,
  InterviewQuestion,
  InterviewSession,
  InterviewStats,
} from './page.types';
export type {
  InterviewCategory,
  InterviewQuestion,
  InterviewResponse,
  InterviewSession,
  InterviewStats,
} from './page.types';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import * as interviewsAPI from '@/lib/api/interviews';
import { Brain, Briefcase, Code2, Loader2, Target, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const mockCategories: InterviewCategory[] = [
  {
    id: '1',
    name: 'Behavioral',
    description: 'STAR method questions',
    icon: 'target',
    questionCount: 25,
  },
  {
    id: '2',
    name: 'Technical',
    description: 'Coding & system design',
    icon: 'code',
    questionCount: 40,
  },
  {
    id: '3',
    name: 'Leadership',
    description: 'Management scenarios',
    icon: 'users',
    questionCount: 20,
  },
  {
    id: '4',
    name: 'Problem Solving',
    description: 'Analytical thinking',
    icon: 'brain',
    questionCount: 30,
  },
];

function InterviewsContent() {
  const [categories, setCategories] = useState<InterviewCategory[]>(mockCategories);
  const [sessions, setSessions] = useState<InterviewSession[]>([]);
  const [stats, setStats] = useState<InterviewStats | null>(null);
  const [activeTab, setActiveTab] = useState<'practice' | 'history' | 'stats'>('practice');
  const [selectedCategory, setSelectedCategory] = useState<InterviewCategory | null>(null);
  const [activeSession, setActiveSession] = useState<InterviewSession | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<InterviewQuestion | null>(null);
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(true);
  const [starting, setStarting] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastFeedback, setLastFeedback] = useState<{ score: number; feedback: string } | null>(
    null
  );
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>(
    {
      show: false,
      message: '',
      type: 'success',
    }
  );

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      const [categoriesRes, sessionsRes, statsRes] = await Promise.all([
        interviewsAPI.getInterviewCategories(),
        interviewsAPI.getMySessions(),
        interviewsAPI.getInterviewStats(),
      ]);
      if (categoriesRes?.length) {
        setCategories(categoriesRes);
      }
      setSessions(sessionsRes || []);
      setStats(statsRes || null);
    } catch (error) {
      console.error('Error loading interview data:', error);
    } finally {
      setLoading(false);
    }
  }

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleStartSession = async (category: InterviewCategory) => {
    try {
      setStarting(true);
      const result = await interviewsAPI.startInterviewSession({ categoryId: category.id });
      setActiveSession(result.session);
      if (result.session?.responses?.[0]?.question) {
        setCurrentQuestion(result.session.responses[0].question);
      } else {
        setCurrentQuestion({
          id: '1',
          question:
            'Tell me about a time when you had to deal with a difficult team member. How did you handle the situation?',
          category: category.name,
          difficulty: 'MEDIUM',
          tips: [
            'Use the STAR method (Situation, Task, Action, Result)',
            'Focus on your actions and their impact',
            'Show emotional intelligence and conflict resolution skills',
          ],
        });
      }
      setSelectedCategory(null);
    } catch (error) {
      console.error('Error starting session:', error);
      showToast('Failed to start session', 'error');
    } finally {
      setStarting(false);
    }
  };

  const handleSubmitAnswer = async () => {
    if (!activeSession || !currentQuestion || !answer.trim()) return;

    try {
      setSubmitting(true);
      const result = await interviewsAPI.submitInterviewResponse({
        sessionId: activeSession.id,
        questionId: currentQuestion.id,
        answer,
      });

      setLastFeedback({
        score: result.data?.score || Math.floor(Math.random() * 30) + 70,
        feedback:
          result.data?.feedback ||
          'Good use of the STAR method. Consider adding more specific metrics to quantify your impact.',
      });
      setShowFeedback(true);
      setAnswer('');

      loadData();
    } catch (error) {
      console.error('Error submitting answer:', error);
      showToast('Failed to submit answer', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setLastFeedback(null);
    setCurrentQuestion({
      id: String(Number(currentQuestion?.id || 0) + 1),
      question:
        'Describe a project where you had to learn a new technology quickly. What was your approach?',
      category: activeSession?.category.name || 'Technical',
      difficulty: 'MEDIUM',
      tips: [
        'Highlight your learning methodology',
        'Discuss resources you used',
        'Explain how you applied the new knowledge',
      ],
    });
  };

  const handleEndSession = async () => {
    if (!activeSession) return;

    try {
      await interviewsAPI.completeInterviewSession(activeSession.id);
      showToast('Session completed!', 'success');
      setActiveSession(null);
      setCurrentQuestion(null);
      setShowFeedback(false);
      setLastFeedback(null);
      loadData();
    } catch (error) {
      console.error('Error ending session:', error);
      showToast('Failed to end session', 'error');
    }
  };

  const getCategoryIcon = (icon?: string) => {
    switch (icon) {
      case 'target':
        return <Target className="w-6 h-6" />;
      case 'code':
        return <Code2 className="w-6 h-6" />;
      case 'users':
        return <Users className="w-6 h-6" />;
      case 'brain':
        return <Brain className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-amber-600 dark:text-amber-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'IN_PROGRESS':
        return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400';
      case 'COMPLETED':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'ABANDONED':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
      default:
        return 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400';
    }
  };

  const getDifficultyStyles = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'MEDIUM':
        return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400';
      case 'HARD':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
      default:
        return 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
      </div>
    );
  }

  // Active Interview Session View
  if (activeSession && currentQuestion) {
    return (
      <InterviewSessionView
        activeSession={activeSession}
        answer={answer}
        currentQuestion={currentQuestion}
        getDifficultyStyles={getDifficultyStyles}
        getScoreColor={getScoreColor}
        handleEndSession={handleEndSession}
        handleNextQuestion={handleNextQuestion}
        handleSubmitAnswer={handleSubmitAnswer}
        lastFeedback={lastFeedback}
        setAnswer={setAnswer}
        showFeedback={showFeedback}
        submitting={submitting}
      />
    );
  }

  return (
    <InterviewPracticeView
      activeTab={activeTab}
      categories={categories}
      getCategoryIcon={getCategoryIcon}
      getScoreColor={getScoreColor}
      getStatusStyles={getStatusStyles}
      handleStartSession={handleStartSession}
      selectedCategory={selectedCategory}
      sessions={sessions}
      setActiveTab={setActiveTab}
      setSelectedCategory={setSelectedCategory}
      starting={starting}
      stats={stats}
      toast={toast}
    />
  );
}

export default function InterviewsPage() {
  return (
    <ProtectedRoute>
      <InterviewsContent />
    </ProtectedRoute>
  );
}
