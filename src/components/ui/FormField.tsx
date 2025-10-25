import React from 'react';
import clsx from 'clsx';

interface FormFieldProps {
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  error: boolean;
  errorMessage: string;
  type?: 'text' | 'email';
  textarea?: boolean;
  rows?: number;
  className?: string;
}

const BASE_CLASSES =
  'w-full border-b-2 border-white/40 bg-transparent p-3 uppercase transition-colors duration-300 focus:border-white focus:outline-none';

export function FormField({
  name,
  value,
  onChange,
  placeholder,
  error,
  errorMessage,
  type = 'text',
  textarea = false,
  rows = 5,
  className,
}: FormFieldProps) {
  const inputClasses = clsx(BASE_CLASSES, error && 'border-red-500', className);

  return (
    <div className="relative w-full">
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          aria-invalid={error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={inputClasses}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={inputClasses}
        />
      )}

      {error && (
        <span
          id={`${name}-error`}
          role="alert"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-sm font-semibold uppercase text-red-500"
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
}
