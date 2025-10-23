import React from 'react'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  size?: 'title' | 'heading-2' | 'heading-3'
}

export function SectionTitle({ 
  children, 
  className = '', 
  size = 'title' 
}: SectionTitleProps) {
  const sizeClasses = {
    title: 'text-title',
    'heading-2': 'text-heading-2',
    'heading-3': 'text-heading-3'
  }

  return (
    <h2 className={`${sizeClasses[size]} leading-none font-anton uppercase ${className}`}>
      {children}
    </h2>
  )
}
