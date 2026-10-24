import { type FilterOptions, type PersonCard as PersonCardType } from '@/lib/api/people';
import React, { type ComponentType, type SVGProps } from 'react';

export type TabType = 'known' | 'all' | 'smart' | 'suggestions' | 'college' | 'nearby';

export interface FindPeopleInitialCache {
  people: PersonCardType[];
  total: number;
  hasMore: boolean;
  nextCursor?: string | null;
  suggestions: PersonCardType[];
  suggestionsHasMore?: boolean;
  colleaguePeople: PersonCardType[];
  colleagueHasMore?: boolean;
}

export type TabItem = {
  id: TabType;
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export interface FilterSelectProps {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  children: React.ReactNode;
}

export interface FilterPanelProps {
  filterOptions: FilterOptions | null;
  userCollege?: string | null;
  selectedCollege: string;
  setSelectedCollege: (v: string) => void;
  selectedBranch: string;
  setSelectedBranch: (v: string) => void;
  selectedYear: number | undefined;
  setSelectedYear: (v: number | undefined) => void;
  selectedLocation: string;
  setSelectedLocation: (v: string) => void;
  openToOpportunities: boolean;
  setOpenToOpportunities: (v: boolean) => void;
  hasActiveFilters: boolean;
  onClearAll: () => void;
}
