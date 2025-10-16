import React from 'react'
import { useSections } from '@/lib/sections'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Button } from './Button'

const links = [
  { id: 'works', label: 'Works' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Let’s talk' },
] as const

export function NavBar() {
  const { ids } = useSections()
  const active = useScrollSpy(ids)
  const [hasScrolled, setHasScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setHasScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        hasScrolled ? 'bg-white text-accent' : 'text-accent'
      }`}>
      <div className="container-px mx-auto flex h-20 items-center justify-between">
        {/* <a href="#hero" className="font-bold tracking-tight">GRAIN<span className="opacity-70">/</span>STUDIO</a> */}
        <nav className="flex gap-6 text-3xl w-full justify-between font-extrabold uppercase">
          {links.map((l) => (
            <Button
              key={l.id}
              onClick={() => {
                document.querySelector(`#${l.id}`)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={[
                'transition-opacity hover:opacity-100 p-0',
              ].join(' ')}
            >
              {l.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}