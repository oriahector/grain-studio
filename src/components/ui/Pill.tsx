import clsx from 'clsx';
import { IconTag } from '@tabler/icons-react';

interface PillProps {
  label?: string | null;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

const VARIANT_CLASSES = {
  light: 'border-white text-white',
  dark: 'border-klein text-klein',
} as const;

const SIZE_CLASSES = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
} as const;

export function Pill({
  label,
  variant = 'light',
  size = 'sm',
  className,
  icon,
}: PillProps) {
  if (!label) return null;

  return (
    <span
      className={clsx(
        'inline-flex w-fit items-center gap-1 rounded-full border bg-transparent font-semibold tracking-wider uppercase',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className
      )}
    >
      {icon}
      {label}
    </span>
  );
}
