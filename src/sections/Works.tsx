import { useEffect, useRef, useState } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Modal } from '@/components/ui/Modal'
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
      className="section container-px pb-20 pt-20 md:pt-36 mx-auto text-fg bg-accent"
    >
      <SectionTitle className="text-center text-fg tracking-tight text-5xl md:text-7xl pb-10">
        WORKS
      </SectionTitle>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((it, idx) => {
          // larger heights so images appear bigger
          const heights = [320, 420, 260, 360, 400, 300]
          const h = heights[idx % heights.length]
          return (
            <div key={it.title} className="break-inside-avoid mb-6">
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
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mt-2 px-0">
                  <h3 className="text-base md:text-lg text-fg mb-1">
                    {it.title}
                  </h3>
                  <span className="inline-block text-[10px] md:text-xs text-white font-semibold font-arimo uppercase tracking-wider px-2 py-0.5 rounded-full border border-white bg-transparent">
                    {it.tag}
                  </span>
                </div>
              </button>
            </div>
          )
        })}
      </div>
      <Modal 
        isOpen={mounted && open} 
        onClose={closePanel}
        title="GRAIN STUDIO"
      >
        <div className="flex-1 overflow-auto flex flex-col md:flex-row gap-6">
          <section className="panel-left w-full md:w-1/4 pr-0 md:pr-6 md:fixed bottom-0">
            <h2>{selected ? selected.title : ''}</h2>
            <p className="text-m mb-4">{selected?.year}</p>
            <div className="max-w-none text-gray-700">
              <p className='font-sans leading-none mb-4'>{selected?.desc}</p>
            </div>
            <h4 className="text-sm text-accent mb-10 mt-3">{selected?.tag}</h4>

            <div className="flex flex-col gap-1 mb-6">
              {selected?.url && (
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-accent hover:underline font-sans"
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
                  className="inline-flex items-center text-xs text-accent hover:underline font-sans"
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
                    style={{ ['--i' as string]: index }}
                  />
                )))
              }
            </div>
          </aside>
        </div>
      </Modal>

    </section>
  )
}