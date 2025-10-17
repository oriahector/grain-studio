import React from 'react'

const services = [
  'Web Design',
  '& Development',
  'Brand Strategy',
  'Photography',
  'UGC Content'
]

export function Services() {
  return (
    <section id="services" className="section container-px mx-auto py-20 md:py-36 text-center font-anton">
      <p className="mb-6 text-3xl font-medium tracking-widest">(SERVICES)</p>
      <ul className="font-extrabold leading-none text-[length:var(--title-size)] uppercase">
        {services.map((s) => (<li key={s}>{s}</li>))}
      </ul>
    </section>
  )
}