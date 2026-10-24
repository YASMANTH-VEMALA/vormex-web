'use client';
import {
  BookOpen,
  Briefcase,
  CalendarDays,
  GraduationCap,
  MapPin,
  RotateCcw,
  SlidersHorizontal,
} from 'lucide-react';
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
  openToOpportunities: boolean;
  selectedBranch: string;
  selectedCollege: string;
  selectedLocation: string;
  selectedYear: number | undefined;
  setOpenToOpportunities: (v: boolean) => void;
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
  userCollege,
}: PeopleFiltersPanelProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
          <SlidersHorizontal className="w-4 h-4 text-gray-500 dark:text-neutral-400" />
          Filters
        </h2>
        {hasActiveFilters && (
          <button
            onClick={onClearAll}
            className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <RotateCcw className="w-3 h-3" />
            Reset all
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

      <label className="flex items-center justify-between gap-3 cursor-pointer select-none pt-1">
        <span className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-neutral-300">
          <Briefcase className="w-4 h-4 text-gray-500 dark:text-neutral-400" />
          Open to opportunities
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={openToOpportunities}
          onClick={() => setOpenToOpportunities(!openToOpportunities)}
          className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
            openToOpportunities ? 'bg-blue-600' : 'bg-gray-300 dark:bg-neutral-700'
          }`}
        >
          <span
            className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
              openToOpportunities ? 'translate-x-[18px]' : 'translate-x-1'
            }`}
          />
        </button>
      </label>
    </div>
  );
}
