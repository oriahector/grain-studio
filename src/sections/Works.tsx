import React, { useEffect, useRef, useState } from 'react'

type Item = {
  title: string
  tag: string
  image: string
  url: string
}

const itemsData: Item[] = [
  {
    title: 'TREE BROTHERS',
    tag: 'WEB DEVELOPMENT',
    image: '/images/tree.jpg',
    url: 'https://treebrothers.com'
  },
  {
    title: 'GROSSO NAPOLETANO',
    tag: 'PHOTOGRAPHY',
    image: '/images/grosso.jpg',
    url: 'https://www.instagram.com/p/DJZVlNEKySJ/?img_index=1'
  },
  {
    title: 'ORNA & CIRCA',
    tag: 'WEB DEVELOPMENT',
    image: '/images/orna.jpg',
    url: 'https://www.ornagroup.com/'
  },
  {
    title: 'BAR PIMENTEL',
    tag: 'PHOTOGRAPHY',
    image: '/images/pimentel.jpg',
    url: 'https://barpimentel.com'
  },
  {
    title: 'BUCLE CAFÉ',
    tag: 'PHOTOGRAPHY',
    image: '/images/bucle.jpg',
    url: 'https://www.instagram.com/p/DPL8RIvDNTP/?img_index=1'
  },
  {
    title: 'DONDE ÁLEX BARBERÍA',
    tag: 'PHOTOGRAPHY AND WEB DEVELOPMENT',
    image: '/images/alex.jpg',
    url: 'https://newproject.com'
  }
]

export function Works() {
  const [items] = useState<Item[]>(itemsData)
  const [mounted, setMounted] = useState(false) // panel is in DOM
  const [open, setOpen] = useState(false) // panel visible (class toggle)
  const [selected, setSelected] = useState<Item | null>(null)
  const closeTimer = useRef<number | null>(null)

  // manage body scroll + escape key when panel mounted
  useEffect(() => {
    document.body.style.overflow = mounted ? 'hidden' : ''
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && mounted) startClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
    }
  }, [mounted])

  // open sequence: mount then toggle open to trigger CSS enter animation
  function openPanel(item: Item) {
    console.log('[Works] openPanel called ->', item?.title) // <-- debug
    setSelected(item)
    setMounted(true)
    // next frame toggle open so transitions run
    requestAnimationFrame(() => {
      setOpen(true)
      console.log('[Works] setOpen(true)') // <-- debug
    })
  }

  // start close animation, then unmount after duration
  function startClose() {
    console.log('[Works] startClose') // <-- debug
    setOpen(false)
    // match this timeout with CSS transition duration below (520ms)
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => {
      setMounted(false)
      setSelected(null)
      closeTimer.current = null
      console.log('[Works] unmounted') // <-- debug
    }, 520)
  }

  function closePanel() {
    startClose()
  }

  return (
    <section
      id="works"
      className="section container-px pt-20 md:pt-36 mx-auto text-[--color-fg] bg-[--color-bg]"
    >
      <h2 className="text-center text-[length:var(--title-size)] text-[--color-accent] tracking-tight font-anton">
        WORKS
      </h2>

      <ul className="flex flex-col gap-4 md:gap-8">
        {items.map((it) => (
          <li key={it.title}>
            <button
              type="button"
              onClick={() => { console.log('click item', it.title); openPanel(it) }} // <-- debug
              className="group relative overflow-hidden bg-black text-white block w-full text-left"
            >
              <div className="relative aspect-[16/4] w-full overflow-hidden min-h-40 md:min-h-auto max-h-60">
                <img
                  src={it.image}
                  alt={it.title}
                  className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 flex flex-col p-6 sm:p-10 bg-gradient-to-b from-black/80 via-black/40 to-black-10">
                  <h3 className="text-[length:var(--text-5xl)] md:text-[length:var(--text-7xl)] mb-1 leading-none">
                    {it.title}
                  </h3>
                  <span className="text-xs md:text-sm text-[--color-accent] font-semibold font-arimo">
                    {it.tag}
                  </span>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* panel mounted only when `mounted` true; `open` toggles classes for enter/exit */}
      {mounted && (
        <div
          aria-hidden={!open}
          className={`fixed inset-0 z-50 panel-container ${open ? 'open' : 'closing'}`}
        >
          {/* overlay */}
          <div
            onClick={closePanel}
            className="absolute inset-0 bg-black/60 overlay"
          />

          {/* panel (100% width) */}
          <aside
            role="dialog"
            aria-modal="true"
            className="fixed right-0 top-0 h-full w-full bg-white text-black shadow-xl panel"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="mb-4 flex items-center">
                 <button
                  aria-label="Cerrar"
                  onClick={closePanel}
                  className="close-btn mr-4"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <h3 className="text-2xl font-semibold">GRAIN STUDIO</h3>
               
              </div>

              <div className="flex-1 overflow-auto flex flex-col md:flex-row gap-6">
                <section className="panel-left w-full md:w-1/4 pr-0 md:pr-6 fixed bottom-0">
      
                  <h2 className="">{selected ? selected.title : ''}</h2>
                  <p className="text-m mb-4">2025</p>
                  <div className="prose max-w-none text-gray-700">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                      ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </p>
                    <p>
                      Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                      lacinia arcu eget nulla.
                    </p>
                  </div>
                  <h4 className="text-sm text-[--color-accent] font-light mb-10 mt-3">{selected?.tag}</h4>
                </section>

                <aside className="panel-right w-full md:w-3/4 flex flex-col items-stretch gap-4 md:ml-[25%]">
                  <div className="h-64 md:h-full bg-gray-100">
                    {selected ? (
                      <>
                      <img src={selected.image} alt={selected.title} className="object-cover w-full h-full" />
                       <img src={selected.image} alt={selected.title} className="object-cover w-full h-full" />
                        <img src={selected.image} alt={selected.title} className="object-cover w-full h-full" />
                         <img src={selected.image} alt={selected.title} className="object-cover w-full h-full" />
                         </>
                    ) : (
                      <div className="text-gray-400">Vista previa</div>
                    )}
                  </div>
                </aside>
              </div>
            </div>
          </aside>
        </div>
      )}

      <style>{`
        /* PANEL timings */
        :root {
          --panel-duration: 520ms;
          --overlay-duration: 320ms;
        }
        /* close button estilo (botón circular con chevron) */
        .close-btn {
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          background: #e9e9e9; /* gris claro del ejemplo */
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          color: #111827; /* color del chevron */
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease;
        }
        .close-btn:hover { transform: translateY(-3px) scale(1.03); background: #e0e0e0; box-shadow: 0 8px 22px rgba(0,0,0,0.10); }
        .close-btn:active { transform: translateY(0) scale(0.99); }
        .close-btn svg { display: block; }
        /* base */
        .panel-container { pointer-events: auto; }
        .overlay {
          opacity: 0;
          transition: opacity var(--overlay-duration) ease;
        }
        .panel {
          transform: translateX(100%);
          transition: transform var(--panel-duration) cubic-bezier(0.22,1,0.36,1), opacity 240ms ease;
          opacity: 0.99;
          will-change: transform, opacity;
        }

        /* ENTER (open) */
        .panel-container.open .overlay { opacity: 1; }
        .panel-container.open .panel { transform: translateX(0%); }

        /* EXIT (closing) - remove 'open' class, panel translates back */
        .panel-container.closing .overlay { opacity: 0; transition: opacity var(--overlay-duration) ease; }
        .panel-container.closing .panel { transform: translateX(100%); }

        /* staggered content */
        .panel-left {
          transform: translateX(-18px);
          opacity: 0;
          transition: transform 420ms cubic-bezier(0.22,1,0.36,1), opacity 320ms ease;
        }
        .panel-right {
          transform: translateY(12px) scale(0.98);
          opacity: 0;
          transition: transform 420ms cubic-bezier(0.22,1,0.36,1), opacity 320ms ease;
        }
        .panel-container.open .panel-left {
          transform: translateX(0);
          opacity: 1;
          transition-delay: 80ms;
        }
        .panel-container.open .panel-right {
          transform: translateY(0) scale(1);
          opacity: 1;
          transition-delay: 140ms;
        }

        /* reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .panel, .panel-left, .panel-right, .overlay {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  )
}