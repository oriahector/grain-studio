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
    image: '/images/lunar.jpg',
  },
]

export function Works() {
  return (
    <section
      id="works"
      className="section container-px mx-auto py-28 text-[--color-fg] bg-[--color-bg]"
    >
      <h2 className="text-center text-6xl md:text-7xl font-black text-[--color-accent] tracking-tight mb-14">
        WORKS
      </h2>

      <ul className="flex flex-col gap-8">
        {items.map((it) => (
          <li
            key={it.title}
            className="group relative overflow-hidden rounded-xl bg-black"
          >
            <div className="relative aspect-[16/7] w-full overflow-hidden">
              <img
                src={it.image}
                alt={it.title}
                className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                  {it.title}
                </h3>
                <span className="text-xs md:text-sm text-[--color-accent] font-semibold tracking-widest">
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