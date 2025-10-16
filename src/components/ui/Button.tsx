import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className = '', ...props }: Props) {
  return (
    <button
      className={
        'inline-flex items-center justify-center rounded-[--radius-lg] px-4 py-2 font-medium ring-1 ring-white/15 shadow-sm hover:opacity-90 focus:outline-none focus-visible:ring-2 ' +
        'bg-[--color-accent] text-accent ' + className
      }
      {...props}
    />
  )
}