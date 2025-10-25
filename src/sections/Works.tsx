import { useEffect, useRef, useState } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Modal } from '@/components/ui/Modal'
import { Item, itemsData } from '../data/worksData'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/Button'

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
      className="section container-px pb-20 pt-20 md:pt-36 mx-auto text-fg bg-klein"
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
            <motion.div 
              key={it.title} 
              layoutId={`work-${it.title}`} 
              className="break-inside-avoid mb-6"
            >
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
                  <span className="inline-block text-[10px] md:text-xs text-white font-semibold  uppercase tracking-wider px-2 py-0.5 rounded-full border border-white bg-transparent">
                    {it.tag}
                  </span>
                </div>
              </button>
            </motion.div>
          )
        })}
      </div>
      <Modal 
        isOpen={mounted && open} 
        onClose={closePanel}
        title="GRAIN STUDIO"
      >
        <div className="flex-1 overflow-auto flex flex-col md:flex-row gap-6">
          <section className="panel-left w-full md:w-1/4 pr-0 md:pr-6 md:fixed bottom-0 mb-6 flex flex-col gap-4 items-start text-klein">
          <h2 className="text-xl font-anton">{selected ? selected.title : ''} - {selected?.year}</h2>
          <span className="inline-block text-2xs md:text-xs -mt-2 text-klein uppercase tracking-wider px-2 py-0.5 rounded-full border border-klein bg-transparent">
                    {selected?.tag}
                  </span>
            
          
            <p className='leading-none text-black'>{selected?.desc}</p>
     
              {selected?.url && (
                <Button size="xs" className='text-klein object-contain font-anton' ><a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer">Visit site</a></Button>
              )}
          </section>

          <aside className="panel-right w-full md:w-3/4 flex flex-col items-stretch gap-4 md:ml-[25%] md:absolute top-0 h-full md:overflow-scroll">
            <AnimatePresence>
              {selected && (
                <motion.div
                  layoutId={`work-${selected.title}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                 
                  className="h-64 md:h-full"
                >
                  {selected.gallery?.map((item, index) => (
                    <img
                      key={index}
                      src={item.imgSrc}
                      alt={item.alt || `Gallery image ${index + 1}`}
                      className="mb-4 panel-gallery-img"
                      style={{ ['--i' as string]: index }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </aside>
        </div>
      </Modal>

    </section>
  )
}