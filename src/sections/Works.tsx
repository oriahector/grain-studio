import { useEffect, useRef, useState } from 'react'
import { Item, itemsData } from '../data/worksData'


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
    setSelected(item)
    setMounted(true)
    // next frame toggle open so transitions run
    requestAnimationFrame(() => {
      setOpen(true)
    })
  }

  // start close animation, then unmount after duration
  function startClose() {
    setOpen(false)
    // match this timeout with CSS transition duration below (520ms)
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => {
      setMounted(false)
      setSelected(null)
      closeTimer.current = null
    }, 520)
  }

  function closePanel() {
    startClose()
  }

  return (
    <section
      id="works"
      className="section container-px pb-20 pt-20 md:pt-36 mx-auto text-[--color-fg] bg-[--color-bg]"
    >
      <h2 className="text-center text-[length:var(--title-size)] text-[--color-accent] tracking-tight font-anton">
        WORKS
      </h2>

      <ul className="works-masonry">
        {items.map((it, idx) => {
          // larger heights so images appear bigger
          const heights = [320, 420, 260, 360, 400, 300]
          const h = heights[idx % heights.length]
          return (
            <li key={it.title} className="works-item">
              <button
                type="button"
                onClick={() => {
                if (it.url || it.urlSecondary || it.gallery) {
                  openPanel(it)
                }}}
                className="group relative overflow-hidden block w-full text-left cursor-pointer"
              >
                <div className="relative w-full overflow-hidden" style={{ height: `${h}px` }}>
                  <img
                    src={it.image}
                    alt={it.title}
                    className="h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="meta mt-2 px-0">
                  <h3 className="text-base md:text-lg font-semibold text-[--color-fg] mb-1">
                    {it.title}
                  </h3>
                  <span className="inline-block text-[10px] md:text-xs text-[--color-accent] font-semibold font-arimo uppercase tracking-wider px-2 py-0.5 rounded-full border border-[--color-accent] bg-transparent">
                    {it.tag}
                  </span>
                </div>
              </button>
            </li>
          )
        })}
      </ul>
      {mounted && (
        <div
          aria-hidden={!open}
          className={`fixed inset-0 z-50 panel-container ${open ? 'open' : 'closing'}`}
        >
          <div
            onClick={closePanel}
            className="absolute inset-0 bg-black/60 overlay"
          />

          <aside
            role="dialog"
            aria-modal="true"
            className="fixed right-0 top-0 h-full w-full bg-white text-accent shadow-xl panel"
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

              <div className="flex-1 overflow-auto flex flex-col md:flex-row gap-6 ">
                <section className="panel-left w-full md:w-1/4 pr-0 md:pr-6 md:fixed bottom-0">
                  <h2>{selected ? selected.title : ''}</h2>
                  <p className="text-m mb-4">{selected?.year}</p>
                  <div className="max-w-none text-gray-700">
                    <p className='font-sans leading-none mb-4'>{selected?.desc}</p>
                  </div>
                  <h4 className="text-sm text-[--color-accent] mb-10 mt-3">{selected?.tag}</h4>

                  <div className="flex flex-col gap-1 mb-6">
                    {selected?.url && (
                      <a
                        href={selected.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-[--color-accent] hover:underline font-sans"
                      >
                        Visit Site
                        <svg className="ml-1" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                          <path d="M5 12h14M13 5l6 7-6 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}

                    {selected?.urlSecondary && (
                      <a
                        href={selected.urlSecondary}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-[--color-accent] hover:underline font-sans"
                      >
                        Visit Site
                        <svg className="ml-1" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                          <path d="M5 12h14M13 5l6 7-6 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
                  </div>
                </section>

                <aside className="panel-right w-full md:w-3/4 flex flex-col items-stretch gap-4 md:ml-[25%] md:absolute top-0 h-full md:overflow-scroll">
                  <div className="h-64 md:h-full">
                    {selected && (
                      selected?.gallery?.map((item, index) => (
                        <img
                          key={index}
                          src={item.imgSrc}
                          alt={item.alt || `Gallery image ${index + 1}`}
                          className='mb-4 panel-gallery-img'
                          style={{ ['--i' as any]: index }}
                        />
                      )))
                    }
                  </div>
                </aside>
              </div>
            </div>
          </aside>
        </div>
      )}

      <style>{`
        /* Masonry using CSS columns */
        .works-masonry {
          column-gap: 1.5rem;
          column-fill: balance;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        /* responsive column count */
        .works-masonry { column-count: 1; }
        @media (min-width: 768px) { .works-masonry { column-count: 2; } }
        @media (min-width: 1024px) { .works-masonry { column-count: 3; } }

        .works-item {
          display: inline-block;
          width: 100%;
          break-inside: avoid;
          margin: 0 0 1.5rem;
        }

        /* ensure images scale within column flow */
        .works-item img { display: block; width: 100%; height: 100%; }

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

        /* PANEL reveal using clip-path wipe from right -> left */
        .panel {
          clip-path: inset(0 100% 0 0);
          transition: clip-path var(--panel-duration) cubic-bezier(0.22,1,0.36,1), opacity 240ms ease;
          opacity: 0.99;
          will-change: clip-path, opacity;
        }

        /* ENTER (open) */
        .panel-container.open .overlay { opacity: 1; }
        .panel-container.open .panel { clip-path: inset(0 0 0 0); }

        /* EXIT (closing) - remove 'open' class, panel wipes back */
        .panel-container.closing .overlay { opacity: 0; transition: opacity var(--overlay-duration) ease; }
        .panel-container.closing .panel { clip-path: inset(0 100% 0 0); }

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

        /* staggered gallery images when panel opens */
        .panel-gallery-img {
          opacity: 0;
          transform: translateY(8px) scale(0.995);
          transition: transform 420ms cubic-bezier(0.22,1,0.36,1), opacity 320ms ease;
        }
        .panel-container.open .panel-gallery-img {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition-delay: calc(var(--i) * 80ms + 120ms);
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