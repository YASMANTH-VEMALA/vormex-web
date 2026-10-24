export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  estimatedHours: number;
  imageUrl?: string;
  thumbnail?: string;
  tags?: string[];
  xpReward: number;
  isPublished: boolean;
  isFeatured?: boolean;
  createdAt?: string;
  slug?: string;
  enrollmentCount?: number;
  completionCount?: number;
  modules?: Module[];
  enrollment?: {
    id: string;
    userId: string;
    pathId: string;
    progress: number;
    status: string;
    startedAt: string;
    completedAt?: string;
  };
  _count?: {
    enrollments: number;
  };
}

export interface Module {
  id: string;
  title: string;
  description?: string;
  order: number;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: string;
  content?: string;
  videoUrl?: string;
  duration?: number;
  order: number;
  xpReward: number;
}

export interface Enrollment {
  id: string;
  pathId: string;
  userId?: string;
  progress: number;
  status?: string;
  startedAt: string;
  completedAt?: string;
  path?: LearningPath;
  lessonProgress?: LessonProgress[];
}

export interface LessonProgress {
  lessonId: string;
  completedAt: string;
}
