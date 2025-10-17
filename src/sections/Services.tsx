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
      {/* <p className="my-10 text-xl md:text-2xl font-arimo max-w-3xl mx-auto">
        From concept to code, we build meaningful digital presence. We believe that great design lives in
        the details, every pixel is considered, every line of code is crafted, delivering brands with
        cultural resonance that carry depth, texture, and soul.
        <h">
      </p> */}
      {/* <h3  className="my-10 text-xl md:text-2xl font-arimo max-w-3xl mx-auto">Kielh's | WETACA | Grosso Napoletano | Orna Group | CIRCA Waste | Tree Brothers | Donde Álex</h3> */}
    </section>
  )
}