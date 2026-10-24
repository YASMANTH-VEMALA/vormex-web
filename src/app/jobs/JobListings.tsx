'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Bookmark,
  BookmarkCheck,
  Briefcase,
  Building2,
  Calendar,
  DollarSign,
  FileText,
  Filter,
  MapPin,
  Search,
} from 'lucide-react';
import type * as React from 'react';

interface JobListingsProps {
  activeTab: 'browse' | 'saved' | 'applications';
  applications: import('@/app/jobs/page.types').Application[];
  experienceLevels: string[];
  filteredJobs: import('@/app/jobs/page.types').Job[];
  formatJobType: (type: string) => string;
  formatSalary: (min?: number | undefined, max?: number | undefined) => string | undefined;
  getStatusStyles: (
    status: string
  ) =>
    | 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
    | 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
    | 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
    | 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400'
    | 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
    | 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400';
  handleSaveJob: (job: import('@/app/jobs/page.types').Job) => Promise<void>;
  isJobSaved: (jobId: string) => boolean;
  jobTypes: string[];
  savedJobs: import('@/app/jobs/page.types').SavedJob[];
  searchQuery: string;
  selectedLevel: string;
  selectedType: string;
  setActiveTab: React.Dispatch<React.SetStateAction<'browse' | 'saved' | 'applications'>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectedJob: React.Dispatch<React.SetStateAction<import('@/app/jobs/page.types').Job | null>>;
  setSelectedLevel: React.Dispatch<React.SetStateAction<string>>;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  showFilters: boolean;
}

export function JobListings({
  activeTab,
  applications,
  experienceLevels,
  filteredJobs,
  formatJobType,
  formatSalary,
  getStatusStyles,
  handleSaveJob,
  isJobSaved,
  jobTypes,
  savedJobs,
  searchQuery,
  selectedLevel,
  selectedType,
  setActiveTab,
  setSearchQuery,
  setSelectedJob,
  setSelectedLevel,
  setSelectedType,
  setShowFilters,
  showFilters,
}: JobListingsProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-5">
      {activeTab === 'browse' && (
        <>
          {/* Search */}
          <div className="flex gap-2 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs or companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 text-gray-900 dark:text-white text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-neutral-600"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2.5 rounded-lg transition-colors ${
                showFilters
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-gray-400'
              }`}
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-4"
              >
                <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800 space-y-4">
                  <div>
                    <label className="text-xs text-gray-500 mb-2 block">Job Type</label>
                    <div className="flex flex-wrap gap-1.5">
                      {jobTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                            selectedType === type
                              ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                              : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700'
                          }`}
                        >
                          {type === 'All' ? 'All Types' : formatJobType(type)}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-2 block">Experience Level</label>
                    <div className="flex flex-wrap gap-1.5">
                      {experienceLevels.map((level) => (
                        <button
                          key={level}
                          onClick={() => setSelectedLevel(level)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                            selectedLevel === level
                              ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                              : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700'
                          }`}
                        >
                          {level === 'All' ? 'All Levels' : level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Jobs List */}
          {filteredJobs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <Briefcase className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                No jobs found
              </h3>
              <p className="text-xs text-gray-500">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-all cursor-pointer"
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 shrink-0">
                      {job.company.logo ? (
                        <img
                          src={job.company.logo}
                          alt={job.company.name}
                          className="w-full h-full rounded-lg object-cover"
                        />
                      ) : (
                        <Building2 className="w-5 h-5" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-0.5">
                            {job.title}
                          </h3>
                          <p className="text-xs text-gray-500">{job.company.name}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSaveJob(job);
                          }}
                          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                          {isJobSaved(job.id) ? (
                            <BookmarkCheck className="w-4 h-4 text-gray-900 dark:text-white" />
                          ) : (
                            <Bookmark className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location || 'Remote'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {formatJobType(job.type)}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {formatSalary(job.salaryMin, job.salaryMax)}
                        </span>
                      </div>

                      {job.skills && job.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {job.skills.slice(0, 3).map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-0.5 rounded bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                          {job.skills.length > 3 && (
                            <span className="text-xs text-gray-400">+{job.skills.length - 3}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === 'saved' && (
        <>
          {savedJobs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <Bookmark className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                No saved jobs
              </h3>
              <p className="text-xs text-gray-500 mb-3">Save jobs to review them later</p>
              <button
                onClick={() => setActiveTab('browse')}
                className="px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Browse Jobs
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {savedJobs.map((saved) => (
                <motion.div
                  key={saved.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800 cursor-pointer"
                  onClick={() => setSelectedJob(saved.job)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-0.5">
                        {saved.job.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-1.5">{saved.job.company.name}</p>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" />
                        Saved {new Date(saved.savedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSaveJob(saved.job);
                      }}
                      className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <BookmarkCheck className="w-4 h-4 text-gray-900 dark:text-white" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === 'applications' && (
        <>
          {applications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <FileText className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                No applications yet
              </h3>
              <p className="text-xs text-gray-500 mb-3">Apply to jobs and track them here</p>
              <button
                onClick={() => setActiveTab('browse')}
                className="px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Find Jobs
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {applications.map((application) => (
                <motion.div
                  key={application.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-200 dark:border-neutral-800"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-0.5">
                        {application.job.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">{application.job.company.name}</p>

                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusStyles(application.status)}`}
                        >
                          {application.status}
                        </span>
                        <span className="text-xs text-gray-400">
                          Applied {new Date(application.appliedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
