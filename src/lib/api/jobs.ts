import apiClient from './client';
import { deleteJson, getJson, postJson } from './request';

export interface Company {
  id: string;
  slug: string;
  name: string;
  logo?: string;
  website?: string;
  description?: string;
  industry?: string;
  size?: string;
  location?: string;
  isVerified: boolean;
  _count?: {
    jobs: number;
  };
}

export interface Job {
  id: string;
  companyId: string;
  company: Company;
  title: string;
  slug: string;
  description: string;
  type: string;
  location: string;
  isRemote: boolean;
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  skills: string[];
  experienceLevel: string;
  applicationUrl?: string;
  status: string;
  isFeatured: boolean;
  viewCount: number;
  applicationCount: number;
  expiresAt?: string;
  createdAt: string;
  isSaved?: boolean;
  hasApplied?: boolean;
}

export interface JobApplication {
  id: string;
  userId: string;
  jobId: string;
  job: Job;
  status: string;
  coverLetter?: string;
  resumeUrl?: string;
  appliedAt: string;
}

// Get all companies
export const getCompanies = async (): Promise<Company[]> => {
  const envelope = await getJson<{ data: Company[] }>('/jobs/companies');
  return envelope.data;
};

// Get company by slug
export const getCompany = async (slug: string): Promise<Company & { jobs: Job[] }> => {
  const envelope = await getJson<{ data: Company & { jobs: Job[] } }>(`/jobs/companies/${slug}`);
  return envelope.data;
};

export interface JobFilters {
  type?: string;
  location?: string;
  experienceLevel?: string;
  isRemote?: boolean;
  search?: string;
}

// Get all jobs
export const getJobs = async (filters?: JobFilters): Promise<Job[]> => {
  const response = (await apiClient.get('/jobs', { params: filters })) as unknown as {
    data: Job[];
  };
  return response.data;
};

// Get job by slug
export const getJob = async (slug: string): Promise<Job> => {
  const envelope = await getJson<{ data: Job }>(`/jobs/${slug}`);
  return envelope.data;
};

// Get featured jobs
export const getFeaturedJobs = async (limit?: number): Promise<Job[]> => {
  const response = (await apiClient.get('/jobs/featured', { params: { limit } })) as unknown as {
    data: Job[];
  };
  return response.data;
};

// Get job types
export const getJobTypes = async (): Promise<string[]> => {
  const envelope = await getJson<{ data: string[] }>('/jobs/types');
  return envelope.data;
};

export interface JobApplicationInput {
  coverLetter?: string;
  resumeUrl?: string;
}

// Apply to a job
export const applyToJob = async (jobId: string, data: JobApplicationInput): Promise<unknown> => {
  return postJson<unknown>(`/jobs/${jobId}/apply`, data);
};

// Get my applications
export const getMyApplications = async (): Promise<JobApplication[]> => {
  const envelope = await getJson<{ data: JobApplication[] }>('/jobs/applications/me');
  return envelope.data;
};

// Save a job
export const saveJob = async (jobId: string): Promise<unknown> => {
  return postJson<unknown>(`/jobs/${jobId}/save`);
};

// Unsave a job
export const unsaveJob = async (jobId: string): Promise<unknown> => {
  return deleteJson<unknown>(`/jobs/${jobId}/save`);
};

// Get saved jobs
export const getSavedJobs = async (): Promise<Job[]> => {
  const envelope = await getJson<{ data: Job[] }>('/jobs/saved');
  return envelope.data;
};
