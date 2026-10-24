'use client';
import { BookOpen, Briefcase, CalendarDays, GraduationCap, MapPin } from 'lucide-react';
import type * as React from 'react';
import { FilterChip } from './PeopleFilterControls';

interface ActivePeopleFiltersProps {
  openToOpportunities: boolean;
  selectedBranch: string;
  selectedCollege: string;
  selectedLocation: string;
  selectedYear: number | undefined;
  setOpenToOpportunities: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedBranch: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCollege: React.Dispatch<React.SetStateAction<string>>;
  setSelectedLocation: React.Dispatch<React.SetStateAction<string>>;
  setSelectedYear: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export function ActivePeopleFilters({
  openToOpportunities,
  selectedBranch,
  selectedCollege,
  selectedLocation,
  selectedYear,
  setOpenToOpportunities,
  setSelectedBranch,
  setSelectedCollege,
  setSelectedLocation,
  setSelectedYear,
}: ActivePeopleFiltersProps) {
  return (
    <>
      {selectedCollege && (
        <FilterChip
          Icon={GraduationCap}
          label={selectedCollege}
          onRemove={() => setSelectedCollege('')}
        />
      )}
      {selectedBranch && (
        <FilterChip Icon={BookOpen} label={selectedBranch} onRemove={() => setSelectedBranch('')} />
      )}
      {selectedYear && (
        <FilterChip
          Icon={CalendarDays}
          label={`Class of ${selectedYear}`}
          onRemove={() => setSelectedYear(undefined)}
        />
      )}
      {selectedLocation && (
        <FilterChip
          Icon={MapPin}
          label={selectedLocation}
          onRemove={() => setSelectedLocation('')}
        />
      )}
      {openToOpportunities && (
        <FilterChip
          Icon={Briefcase}
          label="Open to opportunities"
          onRemove={() => setOpenToOpportunities(false)}
        />
      )}
    </>
  );
}
