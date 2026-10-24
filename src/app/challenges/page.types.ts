export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  points: number;
  timeLimit?: number;
  testCases?: TestCase[];
  starterCode?: Record<string, string>;
  solution?: string;
  hints?: string[];
  tags?: string[];
  isActive?: boolean;
  createdAt: string;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  isHidden?: boolean;
}

export interface Submission {
  id: string;
  challengeId: string;
  code: string;
  language: string;
  status: string;
  score?: number;
  executionTime?: number;
  memoryUsed?: number;
  testResults?: TestResult[] | Record<string, unknown>;
  submittedAt: string;
  challenge?: Challenge;
}

export interface TestResult {
  passed: boolean;
  input: string;
  expectedOutput: string;
  actualOutput?: string;
  error?: string;
}

export interface LeaderboardEntry {
  userId?: string;
  username?: string;
  avatar?: string;
  totalPoints: number;
  solvedCount: number;
  rank: number;
  user?: {
    id: string;
    name: string;
    username: string;
    profileImage?: string;
  };
}
