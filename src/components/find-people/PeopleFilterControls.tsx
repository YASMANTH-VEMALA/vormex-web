'use client';
import { ChevronDown, X } from 'lucide-react';
import { type ComponentType, type SVGProps } from 'react';
import type { FilterPanelProps, FilterSelectProps, TabItem, TabType } from './FindPeople.types';
import {
  AllPeopleTabIcon,
  ForYouTabIcon,
  NearbyTabIcon,
  PeopleYouKnowTabIcon,
  SameCampusTabIcon,
  SmartMatchesTabIcon,
} from './FindPeopleTabIcons';
import { PeopleFiltersPanel } from './PeopleFiltersPanel';

export const tabItems: TabItem[] = [
  { id: 'all', label: 'All People', Icon: AllPeopleTabIcon },
  { id: 'smart', label: 'Smart Matches', Icon: SmartMatchesTabIcon },
  { id: 'known', label: 'People You Know', Icon: PeopleYouKnowTabIcon },
  { id: 'suggestions', label: 'For You', Icon: ForYouTabIcon },
  { id: 'college', label: 'Same Campus', Icon: SameCampusTabIcon },
  { id: 'nearby', label: 'Nearby', Icon: NearbyTabIcon },
];

export function getActiveTabFromParam(tabParam: string | null): TabType {
  switch (tabParam) {
    case 'known':
      return 'known';
    case 'smart':
      return 'smart';
    case 'suggestions':
      return 'suggestions';
    case 'college':
      return 'college';
    case 'nearby':
      return 'nearby';
    case 'all':
    default:
      return 'all';
  }
}

export function FilterSelect({
  label,
  Icon,
  value,
  onChange,
  placeholder,
  children,
}: FilterSelectProps) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-neutral-400 mb-1.5">
        <Icon className="w-3.5 h-3.5" />
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none pl-3 pr-9 py-2 rounded-lg border text-sm bg-white dark:bg-neutral-900 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
            value
              ? 'border-blue-500 text-gray-900 dark:text-white font-medium'
              : 'border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-neutral-300'
          }`}
        >
          <option value="">{placeholder}</option>
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
}

export function FilterPanel({
  filterOptions,
  userCollege,
  selectedCollege,
  setSelectedCollege,
  selectedBranch,
  setSelectedBranch,
  selectedYear,
  setSelectedYear,
  selectedLocation,
  setSelectedLocation,
  openToOpportunities,
  setOpenToOpportunities,
  hasActiveFilters,
  onClearAll,
}: FilterPanelProps) {
  return (
    <PeopleFiltersPanel
      FilterSelect={FilterSelect}
      filterOptions={filterOptions}
      hasActiveFilters={hasActiveFilters}
      onClearAll={onClearAll}
      openToOpportunities={openToOpportunities}
      selectedBranch={selectedBranch}
      selectedCollege={selectedCollege}
      selectedLocation={selectedLocation}
      selectedYear={selectedYear}
      setOpenToOpportunities={setOpenToOpportunities}
      setSelectedBranch={setSelectedBranch}
      setSelectedCollege={setSelectedCollege}
      setSelectedLocation={setSelectedLocation}
      setSelectedYear={setSelectedYear}
      userCollege={userCollege}
    />
  );
}

export function FilterChip({
  Icon,
  label,
  onRemove,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  onRemove: () => void;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-semibold">
      <Icon className="w-3.5 h-3.5" />
      {label}
      <button
        onClick={onRemove}
        className="p-0.5 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/60"
        aria-label={`Remove ${label} filter`}
      >
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}
