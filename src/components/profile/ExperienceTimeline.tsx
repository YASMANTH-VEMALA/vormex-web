'use client';

import { formatLocation } from '@/lib/utils/profileLocation';
import type { Experience } from '@/types/profile';
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react';
import { ProfileSection, SectionAddButton, SectionEmptyState } from './ProfileSection';
import { ShowcaseVisual, VerticalShowcase } from './VerticalShowcase';

interface ExperienceTimelineProps {
  experiences: Experience[];
  isOwner: boolean;
  onAddExperience?: () => void;
  onEditExperience?: (experience: Experience) => void;
}

export function ExperienceTimeline({
  experiences,
  isOwner,
  onAddExperience,
  onEditExperience,
}: ExperienceTimelineProps) {

  if (experiences.length === 0 && !isOwner) return null;

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });

  const calculateDuration = (start: string, end: string | null) => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    const months = Math.max(
      0,
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth())
    );
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) return `${years} yr ${remainingMonths} mo`;
    if (years > 0) return `${years} yr${years > 1 ? 's' : ''}`;
    return `${remainingMonths} mo`;
  };

  return (
    <ProfileSection
      icon={<Briefcase className="h-5 w-5" />}
      title="Experience"
      count={experiences.length}
      action={
        isOwner ? (
          <>
            {onAddExperience && (
              <SectionAddButton onClick={onAddExperience} label="Add Experience" />
            )}
          </>
        ) : undefined
      }
    >
      {experiences.length === 0 ? (
        <SectionEmptyState
          icon={<Briefcase className="h-5 w-5" />}
          message="No experience added yet."
          actionLabel={isOwner && onAddExperience ? 'Add Your First Experience' : undefined}
          onAction={isOwner && onAddExperience ? onAddExperience : undefined}
        />
      ) : (
        <VerticalShowcase
          label="Experience"
          items={experiences}
          isOwner={isOwner}
          onEdit={onEditExperience}
          getTitle={(experience) => experience.title}
          renderVisual={(experience) => (
            <ShowcaseVisual
              logo={experience.logo}
              label={experience.company}
              title={experience.company}
              subtitle={`${experience.type} · ${calculateDuration(experience.startDate, experience.endDate)}`}
              icon={<Building2 />}
            />
          )}
          renderDetail={(experience) => {
            const location = formatLocation(experience.location);
            return (
              <>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                  <span className="font-medium text-neutral-700 dark:text-neutral-200">
                    {experience.company}
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-600">·</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {experience.type}
                  </span>
                  {experience.isCurrent && (
                    <span className="rounded border border-neutral-200 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-500 dark:border-white/15 dark:text-neutral-400">
                      Current
                    </span>
                  )}
                </div>
                <div className="mt-2 flex flex-col gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    <span>
                      {formatDate(experience.startDate)} —{' '}
                      {experience.isCurrent
                        ? 'Present'
                        : experience.endDate
                          ? formatDate(experience.endDate)
                          : 'N/A'}
                    </span>
                    <span className="text-neutral-300 dark:text-neutral-600">·</span>
                    <span>{calculateDuration(experience.startDate, experience.endDate)}</span>
                  </div>
                  {location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span className="break-words">{location}</span>
                    </div>
                  )}
                </div>
                {experience.description && (
                  <p className="mt-3 line-clamp-6 whitespace-pre-wrap text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {experience.description}
                  </p>
                )}
                {experience.skills && experience.skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </>
            );
          }}
        />
      )}
    </ProfileSection>
  );
}
