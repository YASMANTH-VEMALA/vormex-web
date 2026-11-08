'use client';

/* eslint-disable @next/next/no-img-element */

import { ProfileLink } from '@/components/profile/ProfileLink';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import type { PersonCard as PersonCardType, PersonRelationship } from '@/lib/api/people';
import {
  canonicalPersonRelationship,
  productionDisplayName,
  productionPersonCardContent,
} from '@/lib/findPeoplePolicy';
import { resolveMediaUrl } from '@/lib/utils/media';
import { motion } from 'framer-motion';
import { GraduationCap, UsersRound } from 'lucide-react';
import { useMemo, useState } from 'react';
import { RelationshipActionButton } from './RelationshipActionButton';

interface PersonCardProps {
  person: PersonCardType;
  onConnectionChange?: (personId: string, relationship: PersonRelationship) => void;
  onProfileIntent?: (person: PersonCardType) => void;
  badgeLabel?: string;
}

function ProfileBanner({ imageSrc }: { imageSrc?: string | null }) {
  const resolvedSrc = useMemo(() => resolveMediaUrl(imageSrc), [imageSrc]);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = Boolean(resolvedSrc && failedSrc === resolvedSrc);

  return (
    <div className="relative h-16 shrink-0 overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-gray-100 dark:from-blue-950 dark:via-neutral-800 dark:to-neutral-900">
      {resolvedSrc && !failed && (
        <img
          src={resolvedSrc}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          onError={() => setFailedSrc(resolvedSrc)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export function PersonCard({
  person,
  onConnectionChange,
  onProfileIntent,
  badgeLabel,
}: PersonCardProps) {
  const displayName = productionDisplayName(person);
  const profileId = person.username || person.id;
  const handle = person.username?.trim() ? `@${person.username.trim()}` : '';
  const { headline, education, visibleTags, remainingTags } = productionPersonCardContent(person);

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group/card relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-900"
    >
      <ProfileBanner imageSrc={person.bannerImageUrl} />

      {badgeLabel && (
        <span className="absolute left-3 top-3 z-10 max-w-[60%] truncate rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-blue-700 shadow-sm backdrop-blur dark:bg-neutral-950/80 dark:text-blue-300">
          {badgeLabel}
        </span>
      )}

      <div className="flex min-h-0 flex-1 flex-col px-4 pb-4">
        <div className="-mt-8 flex items-end justify-between gap-3">
          <ProfileLink
            profileId={profileId}
            onClick={() => onProfileIntent?.(person)}
            className="relative z-10 h-16 w-16 shrink-0 rounded-full"
            aria-label={`Open ${displayName}'s profile`}
          >
            <UserAvatar
              imageSrc={person.profileImage}
              name={displayName}
              className="h-16 w-16 bg-gray-100 text-xl font-semibold text-gray-500 shadow-sm ring-4 ring-white dark:bg-neutral-800 dark:text-neutral-400 dark:ring-neutral-900"
              fallbackClassName="text-xl"
            />
            {person.isOnline && (
              <span
                className="absolute bottom-0.5 right-0.5 h-4 w-4 rounded-full bg-emerald-500 ring-[3px] ring-white dark:ring-neutral-900"
                title="Online"
              />
            )}
          </ProfileLink>
          {person.mutualConnections != null && person.mutualConnections > 0 && (
            <span className="mb-1 inline-flex max-w-[60%] items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
              <UsersRound className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{person.mutualConnections} mutual</span>
            </span>
          )}
        </div>

        <ProfileLink
          profileId={profileId}
          onClick={() => onProfileIntent?.(person)}
          className="group/name mt-3 flex min-w-0 max-w-full items-center gap-1.5"
        >
          <span className="min-w-0 truncate text-base font-bold text-gray-900 group-hover/name:text-blue-600 dark:text-white dark:group-hover/name:text-blue-400">
            {displayName}
          </span>
          <VerificationBadge
            profileBadgeStyle={person.profileBadgeStyle}
            isPremium={person.isPremium}
            size="small"
          />
        </ProfileLink>

        {handle && (
          <p className="max-w-full truncate text-xs text-gray-500 dark:text-neutral-400">{handle}</p>
        )}

        {headline ? (
          <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-700 dark:text-neutral-300">
            {headline}
          </p>
        ) : null}

        {education && (
          <div className="mt-2 flex max-w-full items-center gap-1.5 text-gray-500 dark:text-neutral-400">
            <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate text-xs font-medium">{education}</span>
          </div>
        )}

        {visibleTags.length > 0 && (
          <div className="mt-3 flex w-full min-w-0 flex-wrap items-center gap-1.5">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="max-w-full truncate rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-neutral-800 dark:text-neutral-200"
                title={tag}
              >
                {tag}
              </span>
            ))}
            {remainingTags > 0 && (
              <span className="shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-neutral-800 dark:text-neutral-300">
                +{remainingTags}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto w-full shrink-0 pt-4">
          <RelationshipActionButton
            portrait
            userId={person.id}
            relationship={canonicalPersonRelationship(person)}
            onChange={(next) => onConnectionChange?.(person.id, next)}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default PersonCard;
