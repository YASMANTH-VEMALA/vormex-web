'use client';
import { ChevronDown, X } from 'lucide-react';
import { type ComponentType, type SVGProps } from 'react';
import type { FilterPanelProps, FilterSelectProps } from './FindPeople.types';
import { PeopleFiltersPanel } from './PeopleFiltersPanel';

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
      <label className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-neutral-300">
        <Icon className="h-3.5 w-3.5 text-gray-400 dark:text-neutral-500" />
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-10 w-full appearance-none rounded-xl border bg-gray-50 pl-3 pr-9 text-sm outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:bg-neutral-800 dark:focus:bg-neutral-900 ${
            value
              ? 'border-blue-500 bg-blue-50/60 font-medium text-gray-900 dark:bg-blue-950/30 dark:text-white'
              : 'border-gray-200 text-gray-700 dark:border-neutral-700 dark:text-neutral-300'
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
  hasActiveFilters,
  onClearAll,
}: FilterPanelProps) {
  return (
    <PeopleFiltersPanel
      FilterSelect={FilterSelect}
      filterOptions={filterOptions}
      hasActiveFilters={hasActiveFilters}
      onClearAll={onClearAll}
      selectedBranch={selectedBranch}
      selectedCollege={selectedCollege}
      selectedLocation={selectedLocation}
      selectedYear={selectedYear}
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
