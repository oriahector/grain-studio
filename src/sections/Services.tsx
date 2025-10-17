import React from 'react'

const services = [
  'Web Design',
  '& Development',
  'Brand Strategy',
  'Photography',
]

export function Services() {
  return (
    <section id="services" className="section container-px mx-auto py-24 text-center font-anton">
      <p className="mb-6 text-3xl font-medium tracking-widest">(SERVICES)</p>
      <ul className="font-extrabold leading-none text-[length:var(--title-size)] uppercase">
        {services.map((s) => (<li key={s}>{s}</li>))}
      </ul>
      <p className="my-10 text-lg font-sans font-semibold max-w-3xl mx-auto">
        From concept to code, we build meaningful digital presence. We believe that great design lives in
        the details, every pixel is considered, every line of code is crafted, delivering brands with
        cultural resonance that carry depth, texture, and soul.
      </p>
    </section>
  )
}