import React from 'react'

const services = [
  'Web Design & Development',
  'Brand Strategy',
  'Photography',
]

export function Services() {
  return (
    <section id="services" className="section container-px mx-auto py-24 text-center">
      <p className="mb-6 text-xs font-medium tracking-widest opacity-60">(SERVICES)</p>
      <ul className="space-y-4 text-5xl font-extrabold leading-tight md:text-7xl">
        {services.map((s) => (<li key={s}>{s}</li>))}
      </ul>
      <p className="mt-10 max-w-3xl text-sm opacity-70">
        From concept to code, we build meaningful digital presence. We believe that great design lives in
        the details, every pixel is considered, every line of code is crafted, delivering brands with
        cultural resonance that carry depth, texture, and soul.
      </p>
    </section>
  )
}