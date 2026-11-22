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

export function PeopleYouKnowTabIcon(props: TabIconProps) {
  return (
    <BaseTabIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3.5" {...SOFT} />
      <circle cx="9" cy="11" r="2" />
      <path d="M5.8 16c.5-1.5 1.7-2.2 3.2-2.2s2.7.7 3.2 2.2" />
      <path d="M14.8 10h3.2M14.8 13.5h2.2" />
    </BaseTabIcon>
  );
}
