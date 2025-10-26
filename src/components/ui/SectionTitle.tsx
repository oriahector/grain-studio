import React from 'react';
import clsx from 'clsx';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'title' | 'heading-2' | 'heading-3';
  sectionId?: string;
}

const SIZE_CLASSES = {
  title: 'text-title',
  'heading-2': 'text-5xl md:text-7xl',
  'heading-3': 'text-xl md:text-3xl',
} as const;

export function SectionTitle({
  children,
  className,
  size = 'title',
  sectionId,
}: SectionTitleProps) {
  return (
    <h2
      className={clsx(
        'font-anton relative leading-none uppercase',
        SIZE_CLASSES[size],
        className
      )}
    >
      <span
        id={sectionId ? `section-title-dot-${sectionId}` : undefined}
        data-section-id={sectionId}
        className={clsx(
          'relative inline-block h-[70px] w-[70px] align-middle',
          sectionId !== 'hero' && '-ml-[70px]'
        )}
      />
      {children}
    </h2>
  );
}
