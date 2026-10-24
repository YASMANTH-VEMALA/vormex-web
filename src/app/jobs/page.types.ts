export interface Company {
  id: string;
  name: string;
  logo?: string;
  description?: string;
  website?: string;
  location?: string;
  industry?: string;
  size?: string;
  isVerified: boolean;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  requirements?: string[];
  type: string;
  location?: string;
  salaryMin?: number;
  salaryMax?: number;
  isRemote: boolean;
  experienceLevel?: string;
  skills?: string[];
  isActive: boolean;
  createdAt: string;
  expiresAt?: string;
  company: Company;
}

export interface Application {
  id: string;
  jobId: string;
  status: string;
  appliedAt: string;
  job: Job;
}

export interface SavedJob {
  id: string;
  jobId: string;
  savedAt: string;
  job: Job;
}
