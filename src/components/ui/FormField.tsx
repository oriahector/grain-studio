import React from 'react'

interface FormFieldProps {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder: string
  error: boolean
  errorMessage: string
  type?: 'text' | 'email'
  textarea?: boolean
  rows?: number
  className?: string
}

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
  className = ''
}: FormFieldProps) {
  const baseClasses = "form-input border-b-3 border-white p-3 w-full focus:outline-none uppercase"
  const errorClasses = error ? 'error' : 'border-bg/40'
  
  const inputClasses = `${baseClasses} ${errorClasses} ${className}`
  
  return (
    <div className="relative w-full">
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={inputClasses}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
      {error && (
        <span className="absolute right-0 top-1/2 -translate-y-1/2 uppercase text-red-700">
          {errorMessage}
        </span>
      )}
    </div>
  )
}
