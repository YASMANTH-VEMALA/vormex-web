'use client';
import { useAuth as useResourceAuth } from '@/lib/auth/useAuth';
import { useQuery } from '@tanstack/react-query';
import { JobDetailDialog } from './JobDetailDialog';
import { JobListings } from './JobListings';
import type { Application, Job, SavedJob } from './page.types';
export type { Application, Company, Job, SavedJob } from './page.types';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import * as jobsAPI from '@/lib/api/jobs';
import { extractList } from '@/lib/api/request';
import { AnimatePresence, motion } from 'framer-motion';
import { Bookmark, Briefcase, ChevronLeft, FileText } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const jobTypes = ['All', 'FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP', 'FREELANCE'];
const experienceLevels = ['All', 'ENTRY', 'MID', 'SENIOR', 'LEAD', 'EXECUTIVE'];

function JobsPage() {
  const [initialJobs] = useState<Job[]>([]);
  const [initialApplications] = useState<Application[]>([]);
  const [initialSavedJobs] = useState<SavedJob[]>([]);
  const [activeTab, setActiveTab] = useState<'browse' | 'saved' | 'applications'>('browse');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const [applying, setApplying] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>(
    {
      show: false,
      message: '',
      type: 'success',
    }
  );

  const resourceViewer = useResourceAuth().user;
  const loadDataResource = useQuery({
    queryKey: ['web-resource', 'jobs', resourceViewer?.id ?? 'anonymous'],
    queryFn: async () => {
      const [jobs, applications, savedJobs] = await Promise.all([
        jobsAPI.getJobs(),
        jobsAPI.getMyApplications(),
        jobsAPI.getSavedJobs(),
      ]);
      return {
        jobs: extractList<Job>(jobs, ['jobs']),
        applications: extractList<Application>(applications, ['applications']),
        savedJobs: extractList<SavedJob>(savedJobs, ['savedJobs']),
      };
    },
    retry: false,
  });
  const jobs = loadDataResource.data?.jobs ?? initialJobs;
  const applications = loadDataResource.data?.applications ?? initialApplications;
  const savedJobs = loadDataResource.data?.savedJobs ?? initialSavedJobs;
  const loading = loadDataResource.isPending;
  const loadData = () => loadDataResource.refetch();

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleApply = async (job: Job) => {
    try {
      setApplying(true);
      await jobsAPI.applyToJob(job.id, {});
      showToast(`Applied to ${job.title}!`, 'success');
      setSelectedJob(null);
      loadData();
    } catch (error) {
      console.error('Error applying:', error);
      showToast('Failed to apply', 'error');
    } finally {
      setApplying(false);
    }
  };

  const handleSaveJob = async (job: Job) => {
    try {
      const isSaved = savedJobs.some((s) => s.jobId === job.id);
      if (isSaved) {
        await jobsAPI.unsaveJob(job.id);
        showToast('Job removed from saved', 'success');
      } else {
        await jobsAPI.saveJob(job.id);
        showToast('Job saved!', 'success');
      }
      loadData();
    } catch (error) {
      console.error('Error saving job:', error);
      showToast('Failed to save job', 'error');
    }
  };

  const isJobSaved = (jobId: string) => savedJobs.some((s) => s.jobId === jobId);
  const hasApplied = (jobId: string) => applications.some((a) => a.jobId === jobId);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || job.type === selectedType;
    const matchesLevel = selectedLevel === 'All' || job.experienceLevel === selectedLevel;
    return matchesSearch && matchesType && matchesLevel;
  });

  const formatSalary = (min?: number, max?: number) => {
    if (!min && !max) return 'Competitive';
    if (min && max) return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`;
    if (min) return `From $${(min / 1000).toFixed(0)}k`;
    if (max) return `Up to $${(max / 1000).toFixed(0)}k`;
  };

  const formatJobType = (type: string) => {
    return type.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400';
      case 'REVIEWING':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      case 'INTERVIEW':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400';
      case 'OFFERED':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'REJECTED':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
      default:
        return 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400';
    }
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

      {/* Job Detail Modal */}
      <JobDetailDialog
        applying={applying}
        formatJobType={formatJobType}
        formatSalary={formatSalary}
        handleApply={handleApply}
        handleSaveJob={handleSaveJob}
        hasApplied={hasApplied}
        isJobSaved={isJobSaved}
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
      />

      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-neutral-800">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 px-4 py-3">
            <Link
              href="/more"
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </Link>
            <div>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Job Board</h1>
              <p className="text-xs text-gray-500">{jobs.length} opportunities available</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex px-4 gap-2 pb-3">
            {[
              { id: 'browse', label: 'Browse', icon: <Briefcase className="w-4 h-4" /> },
              { id: 'saved', label: 'Saved', icon: <Bookmark className="w-4 h-4" /> },
              { id: 'applications', label: 'Applications', icon: <FileText className="w-4 h-4" /> },
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
      <JobListings
        activeTab={activeTab}
        applications={applications}
        experienceLevels={experienceLevels}
        filteredJobs={filteredJobs}
        formatJobType={formatJobType}
        formatSalary={formatSalary}
        getStatusStyles={getStatusStyles}
        handleSaveJob={handleSaveJob}
        isJobSaved={isJobSaved}
        jobTypes={jobTypes}
        savedJobs={savedJobs}
        searchQuery={searchQuery}
        selectedLevel={selectedLevel}
        selectedType={selectedType}
        setActiveTab={setActiveTab}
        setSearchQuery={setSearchQuery}
        setSelectedJob={setSelectedJob}
        setSelectedLevel={setSelectedLevel}
        setSelectedType={setSelectedType}
        setShowFilters={setShowFilters}
        showFilters={showFilters}
      />
    </div>
  );
}

export default function JobsPageWrapper() {
  return (
    <ProtectedRoute>
      <JobsPage />
    </ProtectedRoute>
  );
}
