export type Section = 'main' | 'integrations' | 'mentions' | 'appearance';

export type MenuItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  href?: string;
  onClick?: () => void;
  badge?: number;
  locked?: boolean;
  subtext?: string;
};
