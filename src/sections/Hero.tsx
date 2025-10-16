import React from 'react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section id="hero" className="section container-px mx-auto flex min-h-[80dvh] flex-col items-start justify-end gap-6 pb-20 pt-24">
      <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight md:text-7xl">
        GRAIN <span className="text-[--color-accent]">STUDIO</span>
      </h1>
      <p className="max-w-2xl text-balance text-lg opacity-80">
        Web design & development, brand strategy, and photography crafted with precision.
      </p>
      <div className="flex gap-3 text-accent">
        <a href="#contact"><Button>Start a project</Button></a>
      </div>
    </section>
  )
}