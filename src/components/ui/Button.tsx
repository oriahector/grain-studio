import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className = '', ...props }: Props) {
  return (
    <button
      className={`
        relative inline-flex cursor-pointer items-center justify-center px-4 py-2 text-3xl focus:outline-none
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current 
        after:transition-all after:duration-300 after:ease-out hover:after:w-full uppercase
        ${className}
      `}
      {...props}
    />
  )
}