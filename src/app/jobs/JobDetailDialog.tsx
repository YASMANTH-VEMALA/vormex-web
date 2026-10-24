'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Bookmark,
  BookmarkCheck,
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  MapPin,
  Send,
  X,
} from 'lucide-react';
import type * as React from 'react';

interface JobDetailDialogProps {
  applying: boolean;
  formatJobType: (type: string) => string;
  formatSalary: (min?: number | undefined, max?: number | undefined) => string | undefined;
  handleApply: (job: import('@/app/jobs/page.types').Job) => Promise<void>;
  handleSaveJob: (job: import('@/app/jobs/page.types').Job) => Promise<void>;
  hasApplied: (jobId: string) => boolean;
  isJobSaved: (jobId: string) => boolean;
  selectedJob: import('@/app/jobs/page.types').Job | null;
  setSelectedJob: React.Dispatch<React.SetStateAction<import('@/app/jobs/page.types').Job | null>>;
}

export function JobDetailDialog({
  applying,
  formatJobType,
  formatSalary,
  handleApply,
  handleSaveJob,
  hasApplied,
  isJobSaved,
  selectedJob,
  setSelectedJob,
}: JobDetailDialogProps) {
  return (
    <AnimatePresence>
      {selectedJob && (
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
                  Job Details
                </h2>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-5">
                {/* Company Info */}
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 font-medium shrink-0">
                    {selectedJob.company.logo ? (
                      <img
                        src={selectedJob.company.logo}
                        alt={selectedJob.company.name}
                        className="w-full h-full rounded-lg object-cover"
                      />
                    ) : (
                      <Building2 className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">
                      {selectedJob.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {selectedJob.company.name}
                    </p>
                    {selectedJob.company.isVerified && (
                      <span className="inline-flex items-center gap-1 text-xs text-green-600 dark:text-green-400 mt-1">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                </div>

                {/* Job Meta */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 p-2 rounded-lg bg-gray-50 dark:bg-neutral-800">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedJob.location || 'Remote'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 p-2 rounded-lg bg-gray-50 dark:bg-neutral-800">
                    <Briefcase className="w-4 h-4" />
                    <span>{formatJobType(selectedJob.type)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 p-2 rounded-lg bg-gray-50 dark:bg-neutral-800">
                    <DollarSign className="w-4 h-4" />
                    <span>{formatSalary(selectedJob.salaryMin, selectedJob.salaryMax)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 p-2 rounded-lg bg-gray-50 dark:bg-neutral-800">
                    <Clock className="w-4 h-4" />
                    <span>{selectedJob.experienceLevel || 'Any Level'}</span>
                  </div>
                </div>

                {selectedJob.isRemote && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium mb-5">
                    <Globe className="w-3.5 h-3.5" />
                    Remote Friendly
                  </div>
                )}

                {/* Description */}
                <div className="mb-5">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Description
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                    {selectedJob.description}
                  </p>
                </div>

                {/* Requirements */}
                {selectedJob.requirements && selectedJob.requirements.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Requirements
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedJob.requirements.map((req, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills */}
                {selectedJob.skills && selectedJob.skills.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedJob.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-neutral-800">
                  <button
                    onClick={() => handleSaveJob(selectedJob)}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
                      isJobSaved(selectedJob.id)
                        ? 'bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white'
                        : 'border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800'
                    }`}
                  >
                    {isJobSaved(selectedJob.id) ? (
                      <>
                        <BookmarkCheck className="w-4 h-4" />
                        Saved
                      </>
                    ) : (
                      <>
                        <Bookmark className="w-4 h-4" />
                        Save
                      </>
                    )}
                  </button>

                  {hasApplied(selectedJob.id) ? (
                    <div className="flex-1 py-2.5 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium flex items-center justify-center gap-1.5">
                      <CheckCircle className="w-4 h-4" />
                      Applied
                    </div>
                  ) : (
                    <button
                      onClick={() => handleApply(selectedJob)}
                      disabled={applying}
                      className="flex-1 py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-1.5"
                    >
                      {applying ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-current"></div>
                          Applying...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Apply Now
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
