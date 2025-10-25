import React from 'react';
import type { ButtonProps } from '@/types';

export function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    'py-2 relative inline-flex cursor-pointer items-center justify-center focus:outline-none uppercase transition-all duration-300';

  const variantClasses = {
    primary:
      'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full',
    secondary:
      'border-2 border-current hover:bg-current hover:text-[--color-bg] transition-colors duration-300',
  };

  const sizeClasses = {
    xs: 'text-md md:text-lg',
    sm: 'text-xl',
    md: 'text-lg md:text-2xl',
    lg: 'text-xl md:text-3xl',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
