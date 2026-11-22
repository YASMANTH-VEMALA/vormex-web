'use client';

import type { Education } from '@/types/profile';
import { Award, Calendar, GraduationCap, School } from 'lucide-react';
import { ProfileSection, SectionAddButton, SectionEmptyState } from './ProfileSection';
import { ShowcaseVisual, VerticalShowcase } from './VerticalShowcase';

interface EducationTimelineProps {
  education: Education[];
  isOwner: boolean;
  onAddEducation?: () => void;
  onEditEducation?: (education: Education) => void;
}

export function EducationTimeline({
  education,
  isOwner,
  onAddEducation,
  onEditEducation,
}: EducationTimelineProps) {

  if (education.length === 0 && !isOwner) return null;

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });

  return (
    <ProfileSection
      icon={<GraduationCap className="h-5 w-5" />}
      title="Education"
      count={education.length}
      action={
        isOwner ? (
          <>
            {onAddEducation && <SectionAddButton onClick={onAddEducation} label="Add Education" />}
          </>
        ) : undefined
      }
    >
      {education.length === 0 ? (
        <SectionEmptyState
          icon={<GraduationCap className="h-5 w-5" />}
          message="No education added yet."
          actionLabel={isOwner && onAddEducation ? 'Add Your First Education' : undefined}
          onAction={isOwner && onAddEducation ? onAddEducation : undefined}
        />
      ) : (
        <VerticalShowcase
          label="Education"
          items={education}
          isOwner={isOwner}
          onEdit={onEditEducation}
          getTitle={(edu) => edu.school}
          renderVisual={(edu) => (
            <ShowcaseVisual
              logo={edu.logo}
              label={edu.school}
              title={edu.school}
              subtitle={[edu.degree, edu.fieldOfStudy].filter(Boolean).join(' · ')}
              icon={<School />}
            />
          )}
          renderDetail={(edu) => (
            <>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-700 dark:text-neutral-200">
                <span className="font-medium">{edu.degree}</span>
                {edu.fieldOfStudy && (
                  <>
                    <span className="text-neutral-300 dark:text-neutral-600">·</span>
                    <span className="break-words text-xs text-neutral-500 dark:text-neutral-400">
                      {edu.fieldOfStudy}
                    </span>
                  </>
                )}
                {edu.isCurrent && (
                  <span className="rounded border border-neutral-200 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-500 dark:border-white/15 dark:text-neutral-400">
                    Current
                  </span>
                )}
              </div>
              <div className="mt-2 flex flex-col gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  <span>
                    {formatDate(edu.startDate)} —{' '}
                    {edu.isCurrent ? 'Present' : edu.endDate ? formatDate(edu.endDate) : 'N/A'}
                  </span>
                </div>
                {edu.grade && (
                  <div className="flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 shrink-0" />
                    <span>Grade: {edu.grade}</span>
                  </div>
                )}
              </div>
              {edu.description && (
                <p className="mt-3 line-clamp-6 whitespace-pre-wrap text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {edu.description}
                </p>
              )}
              {edu.activities && (
                <div className="mt-3 border-t border-neutral-100 pt-3 dark:border-white/10">
                  <span className="mb-1 block text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                    Activities & Societies
                  </span>
                  <p className="line-clamp-4 whitespace-pre-wrap text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {edu.activities}
                  </p>
                </div>
              )}
            </>
          )}
        />
      )}
    </ProfileSection>
  );
}
