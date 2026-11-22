'use client';
import { BookOpen, CalendarDays, GraduationCap, MapPin } from 'lucide-react';
import React from 'react';

interface PeopleFiltersPanelProps {
  FilterSelect: ({
    label,
    Icon,
    value,
    onChange,
    placeholder,
    children,
  }: import('@/components/find-people/FindPeople.types').FilterSelectProps) => React.JSX.Element;
  filterOptions: import('@/lib/api/people').FilterOptions | null;
  hasActiveFilters: boolean;
  onClearAll: () => void;
  selectedBranch: string;
  selectedCollege: string;
  selectedLocation: string;
  selectedYear: number | undefined;
  setSelectedBranch: (v: string) => void;
  setSelectedCollege: (v: string) => void;
  setSelectedLocation: (v: string) => void;
  setSelectedYear: (v: number | undefined) => void;
  userCollege: string | null | undefined;
}

export function PeopleFiltersPanel({
  FilterSelect,
  filterOptions,
  hasActiveFilters,
  onClearAll,
  selectedBranch,
  selectedCollege,
  selectedLocation,
  selectedYear,
  setSelectedBranch,
  setSelectedCollege,
  setSelectedLocation,
  setSelectedYear,
  userCollege,
}: PeopleFiltersPanelProps) {
  const activeCount = [selectedCollege, selectedBranch, selectedYear, selectedLocation].filter(
    Boolean
  ).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3 dark:border-neutral-800">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
          Filters{activeCount > 0 ? ` (${activeCount})` : ''}
        </h2>
        {hasActiveFilters && (
          <button
            onClick={onClearAll}
            className="text-xs font-medium text-gray-500 underline-offset-2 hover:text-gray-900 hover:underline dark:text-neutral-400 dark:hover:text-white"
          >
            Clear all
          </button>
        )}
      </div>

      {((filterOptions?.colleges?.length ?? 0) > 0 || userCollege) && (
        <FilterSelect
          label="College"
          Icon={GraduationCap}
          value={selectedCollege}
          onChange={setSelectedCollege}
          placeholder="All colleges"
        >
          {userCollege && <option value={userCollege}>My campus ({userCollege})</option>}
          {filterOptions?.colleges
            ?.filter((c) => c !== userCollege)
            .map((college) => (
              <option key={college} value={college}>
                {college}
              </option>
            ))}
        </FilterSelect>
      )}

      {filterOptions?.branches && filterOptions.branches.length > 0 && (
        <FilterSelect
          label="Branch"
          Icon={BookOpen}
          value={selectedBranch}
          onChange={setSelectedBranch}
          placeholder="All branches"
        >
          {filterOptions.branches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </FilterSelect>
      )}

      {filterOptions?.graduationYears && filterOptions.graduationYears.length > 0 && (
        <FilterSelect
          label="Graduation year"
          Icon={CalendarDays}
          value={selectedYear?.toString() ?? ''}
          onChange={(v) => setSelectedYear(v ? parseInt(v) : undefined)}
          placeholder="All years"
        >
          {[...filterOptions.graduationYears]
            .sort((a, b) => b - a)
            .map((year) => (
              <option key={year} value={year}>
                Class of {year}
              </option>
            ))}
        </FilterSelect>
      )}

      {filterOptions?.locations && filterOptions.locations.length > 0 && (
        <FilterSelect
          label="Location"
          Icon={MapPin}
          value={selectedLocation}
          onChange={setSelectedLocation}
          placeholder="Anywhere"
        >
          {filterOptions.locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </FilterSelect>
      )}
    </div>
  );
}
