import React from 'react'
import { useSections } from '@/lib/sections'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const links = [
  { id: 'works', label: 'Works' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Let’s talk' },
] as const

export function NavBar() {
  const { ids } = useSections()
  const active = useScrollSpy(ids)

  return (
    <header className="sticky top-0 z-50 backdrop-blur  text-accent">
      <div className="container-px mx-auto flex h-16 items-center justify-between">
        {/* <a href="#hero" className="font-bold tracking-tight">GRAIN<span className="opacity-70">/</span>STUDIO</a> */}
        <nav className="flex gap-6 text-sm w-full justify-between">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={['transition-opacity hover:opacity-100', active === l.id ? 'opacity-100' : 'opacity-60'].join(' ')}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}