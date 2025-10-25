import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Modal } from '@/components/ui/Modal';
import { Pill } from '@/components/ui/Pill';
import { Item, itemsData } from '../data/worksData';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/Button';
import clsx from 'clsx';

export function Works() {
  const [items] = useState<Item[]>(itemsData);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Item | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = mounted ? 'hidden' : '';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mounted) {
        startClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, [mounted]);

  const openPanel = (item: Item) => {
    setSelected(item);
    setMounted(true);
    requestAnimationFrame(() => {
      setOpen(true);
    });
  };

  const startClose = () => {
    setOpen(false);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setMounted(false);
      setSelected(null);
      closeTimer.current = null;
    }, 520);
  };

  const closePanel = () => {
    startClose();
  };

  const heights = [320, 420, 260, 360, 400, 300];

  return (
    <section
      id="works"
      className="section bg-klein pb-20 pt-10 text-fg md:pt-24"
    >
      <div className="section-container">
        <SectionTitle className="pb-10 text-center text-5xl tracking-tight text-fg md:text-7xl">
          WORKS
        </SectionTitle>

        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {items.map((item, idx) => {
            const h = heights[idx % heights.length];

            return (
              <motion.div
                key={item.title}
                layoutId={`work-${item.title}`}
                className="break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (item.url || item.urlSecondary || item.gallery) {
                      openPanel(item);
                    }
                  }}
                  className={clsx(
                    'group relative block w-full overflow-hidden text-left',
                    (item.url || item.urlSecondary || item.gallery) &&
                      'cursor-pointer'
                  )}
                >
                  {/* Image Container */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ height: `${h}px` }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Tag */}
                  <div className="mt-2">
                    <h3 className="mb-2 text-base text-fg md:text-lg">
                      {item.title}
                    </h3>
                    <Pill label={item.tag} variant="light" size="sm" />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Works Modal */}
      <Modal isOpen={mounted && open} onClose={closePanel} title="GRAIN STUDIO">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Left Panel - Info */}
          <section className="flex flex-col gap-4 md:fixed md:bottom-0 md:mb-6 md:w-1/4 md:pr-6 items-start">
            <h2 className="font-anton text-xl text-klein">
              {selected?.title}
              {selected?.year && (
                <span className="ml-2 font-normal">- {selected.year}</span>
              )}
            </h2>

            <Pill label={selected?.tag} variant="dark" size="sm" />

            <p className="leading-relaxed text-black">{selected?.desc}</p>

            {selected?.url && (
              <Button
                size="xs"
                className="font-anton text-klein"
                onClick={() => window.open(selected.url, '_blank')}
              >
                Visit site
              </Button>
            )}
          </section>

          {/* Right Panel - Gallery */}
          <aside className="flex flex-col gap-4 md:absolute md:right-0 md:top-0 md:h-full md:w-3/4 md:overflow-scroll md:ml-[25%]">
            <AnimatePresence>
              {selected && (
                <motion.div
                  layoutId={`work-${selected.title}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col gap-4"
                >
                  {selected.gallery?.map((item, index) => (
                    <motion.img
                      key={index}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: (index * 80 + 120) / 1000,
                        duration: 0.3,
                        ease: 'easeOut',
                      }}
                      src={item.imgSrc}
                      alt={item.alt || `Gallery image ${index + 1}`}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </aside>
        </div>
      </Modal>
    </section>
  );
}
