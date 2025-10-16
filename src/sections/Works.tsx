import React from 'react'

const items = [
  {
    title: 'ORNA GROUP',
    tag: 'WEB DEVELOPMENT',
    image: '/images/orna.jpg',
  },
  {
    title: 'GROSSO NAPOLETANO',
    tag: 'PHOTOGRAPHY',
    image: '/images/grosso.jpg',
  },
  {
    title: 'LUNAR',
    tag: 'BRANDING',
    image: '/images/bici.jpg',
  },
]

export function Works() {
  return (
    <section
      id="works"
      className="section container-px mx-auto text-[--color-fg] bg-[--color-bg]"
    >
      <h2 className="text-center text-15xl text-[--color-accent] tracking-tight font-anton">
        WORKS
      </h2>

      <ul className="flex flex-col gap-8">
        {items.map((it) => (
          <li
            key={it.title}
            className="group relative overflow-hidden bg-black text-white"
          >
            <div className="relative aspect-[16/4] w-full overflow-hidden">
              <img
                src={it.image}
                alt={it.title}
                className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 flex flex-col p-6 sm:p-10 bg-gradient-to-b from-black/90 via-black/50 to-black-10">
                <h3 className="text-5xl md:text-7xl mb-1">
                  {it.title}
                </h3>
                <span className="text-xs md:text-sm text-[--color-accent] font-semibold font-sans">
                  {it.tag}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}