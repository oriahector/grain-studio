import React from 'react';
import clsx from 'clsx';
import type { ButtonProps } from '@/types';

const BASE_CLASSES =
  'relative inline-flex cursor-pointer items-center justify-center py-2 uppercase transition-all duration-300 focus:outline-none';

const VARIANT_CLASSES = {
  primary:
    'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full',
  secondary:
    'border-2 border-current transition-colors duration-300 hover:bg-current hover:text-[--color-bg]',
} as const;

const SIZE_CLASSES = {
  xs: 'text-sm md:text-base',
  sm: 'text-base md:text-lg',
  md: 'text-lg md:text-2xl',
  lg: 'text-xl md:text-3xl',
} as const;

export function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        BASE_CLASSES,
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
