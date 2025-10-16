import React from 'react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section id="hero" className="section relative container-px mx-auto flex min-h-screen flex-col items-start justify-end gap-6 pb-20">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bici.jpg"
          alt="Background"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>
      <h1 className="max-w-3xl text-15xl font-anton tracking-tight leading-none text-right">
        GRAIN<br />
        STUDIO
      </h1>
      <div className="ml-auto flex gap-3 text-accent">
        <a href="#contact"><Button>Start a project</Button></a>
      </div>
    </section>
  )
}