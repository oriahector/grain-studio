import React from 'react';
import clsx from 'clsx';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'title' | 'heading-2' | 'heading-3';
}

const SIZE_CLASSES = {
  title: 'text-title',
  'heading-2': 'text-5xl md:text-7xl',
  'heading-3': 'text-3xl md:text-5xl',
} as const;

export function SectionTitle({
  children,
  className,
  size = 'title',
}: SectionTitleProps) {
  return (
    <h2
      className={clsx(
        'font-anton uppercase leading-none',
        SIZE_CLASSES[size],
        className
      )}
    >
      {children}
    </h2>
  );
}
