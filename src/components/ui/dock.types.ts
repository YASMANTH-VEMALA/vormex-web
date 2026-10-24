import { MotionValue, type SpringOptions } from 'framer-motion';

export type DockProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  panelHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

export type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  href?: string;
  isActive?: boolean;
  badge?: number;
};

export type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
  isHovered?: MotionValue<number>;
};

export type DockIconProps = {
  className?: string;
  children: React.ReactNode;
  width?: MotionValue<number>;
};

export type UserAvatarIconProps = {
  imageSrc?: string | null;
  name?: string | null;
  size?: 'full' | 'small';
};

export type DockContextType = {
  mouseX: MotionValue;
  spring: SpringOptions;
  magnification: number;
  distance: number;
};

export type DockProviderProps = {
  children: React.ReactNode;
  value: DockContextType;
};
