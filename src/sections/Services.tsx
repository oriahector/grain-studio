import React from 'react'
import { SERVICES } from '@/config/constants'

export function Services() {
  return (
    <section id="services" className="section md:container-px mx-auto py-20 md:py-36 text-center font-anton bg-white">
      <p className="mb-6 text-3xl font-medium tracking-widest text-accent">(SERVICES)</p>
      <ul className="font-extrabold leading-none uppercase text-accent text-5xl md:text-9xl">
        {SERVICES.map((s) => (<li key={s}>{s}</li>))}
      </ul>
    </section>
  )
}