export interface InterviewCategory {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  questionCount?: number;
}

export interface InterviewSession {
  id: string;
  categoryId: string;
  status: string;
  startedAt: string;
  completedAt?: string;
  totalQuestions?: number;
  answeredQuestions?: number;
  score?: number;
  feedback?: string;
  category: InterviewCategory;
  responses?: InterviewResponse[];
  // API fields
  userId?: string;
  difficulty?: string;
  duration?: number;
  overallScore?: number;
  strengths?: string[];
  improvements?: string[];
}

export interface InterviewResponse {
  id: string;
  questionId: string;
  answer?: string;
  score?: number;
  feedback?: string;
  createdAt?: string;
  answeredAt?: string;
  duration?: number;
  sessionId?: string;
  question: InterviewQuestion;
}

export interface InterviewQuestion {
  id: string;
  question: string;
  category?: string | InterviewCategory;
  categoryId?: string;
  difficulty: string;
  expectedAnswer?: string;
  sampleAnswer?: string;
  tips?: string[];
  hints?: string[];
  followUps?: string[];
  tags?: string[];
}

export interface InterviewStats {
  totalSessions: number;
  averageScore?: number;
  avgScore?: number;
  totalQuestions?: number;
  strongAreas?: string[];
  weakAreas?: string[];
  passedSessions?: number;
  passRate?: number;
  categoryStats?: Record<
    string,
    {
      count: number;
      avgScore: number;
      passed: number;
    }
  >;
}
