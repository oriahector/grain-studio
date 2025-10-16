import React from 'react'

const items = [
  { title: 'Orna Group', tag: 'Web Development' },
  { title: 'Grosso Napoletano', tag: 'Photography' },
  { title: 'Lunar', tag: 'Branding' },
]

export function Works() {
  return (
    <section id="works" className="section container-px mx-auto space-y-8 py-24">
      <h2 className="text-4xl font-extrabold text-center">Works</h2>
      <ul className="flex flex-col gap-6">
        {items.map((it) => (
          <li key={it.title} className="group rounded-xl border border-white/10 p-5">
            <div className="aspect-[16/10] rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors" />
            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-semibold">{it.title}</h3>
              <span className="text-xs opacity-60">{it.tag}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}