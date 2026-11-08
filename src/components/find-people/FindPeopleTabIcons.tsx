import type { SVGProps } from 'react';

type TabIconProps = SVGProps<SVGSVGElement>;

/*
 * Duotone tab icons on a 24px grid: a soft filled shape (currentColor at low
 * opacity) behind a 1.7px outline, so they read clearly at 16px and pick up
 * the tab's active colour automatically.
 */
function BaseTabIcon(props: TabIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

const SOFT = { fill: 'currentColor', fillOpacity: 0.14 } as const;

export function AllPeopleTabIcon(props: TabIconProps) {
  return (
    <BaseTabIcon {...props}>
      <circle cx="9" cy="8" r="3.2" {...SOFT} />
      <path d="M3.5 19c0-3.1 2.5-5.4 5.5-5.4s5.5 2.3 5.5 5.4" />
      <path d="M16 5.3a3 3 0 0 1 0 5.6" />
      <path d="M17.5 14c2 .5 3.5 2.3 3.5 5" />
    </BaseTabIcon>
  );
}

export function SmartMatchesTabIcon(props: TabIconProps) {
  return (
    <BaseTabIcon {...props}>
      <path d="M13 2.8 5 13.2h6l-1 8 8-10.6h-6l1-7.8Z" {...SOFT} />
    </BaseTabIcon>
  );
}

export function PeopleYouKnowTabIcon(props: TabIconProps) {
  return (
    <BaseTabIcon {...props}>
      <circle cx="9.5" cy="8" r="3.2" {...SOFT} />
      <path d="M3.5 19c0-3.1 2.7-5.4 6-5.4 1.4 0 2.7.4 3.7 1.1" />
      <path d="m15.5 18 2 2 4-4.5" />
    </BaseTabIcon>
  );
}

export function ForYouTabIcon(props: TabIconProps) {
  return (
    <BaseTabIcon {...props}>
      <path d="m11 3.5 1.9 5.1 5.1 1.9-5.1 1.9-1.9 5.1-1.9-5.1L4 10.5l5.1-1.9L11 3.5Z" {...SOFT} />
      <path d="m18.5 15.5.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </BaseTabIcon>
  );
}

export function SameCampusTabIcon(props: TabIconProps) {
  return (
    <BaseTabIcon {...props}>
      <path d="M12 4 2.5 9 12 14l9.5-5L12 4Z" {...SOFT} />
      <path d="M6 11.5v4.2c0 1.3 2.7 3 6 3s6-1.7 6-3v-4.2" />
      <path d="M21.5 9v6" />
    </BaseTabIcon>
  );
}

export function NearbyTabIcon(props: TabIconProps) {
  return (
    <BaseTabIcon {...props}>
      <path d="M12 21c3.8-3.6 6-6.9 6-9.6a6 6 0 1 0-12 0c0 2.7 2.2 6 6 9.6Z" {...SOFT} />
      <circle cx="12" cy="11" r="2.2" />
    </BaseTabIcon>
  );
}
