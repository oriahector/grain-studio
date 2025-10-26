import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Modal } from '@/components/ui/Modal';
import { Pill } from '@/components/ui/Pill';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Item, itemsData } from '../data/worksData';
import { motion } from 'motion/react';
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
              <div key={item.title} className="break-inside-avoid">
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
                    className="relative w-full overflow-hidden rounded-lg"
                    style={{ height: `${h}px` }}
                  >
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full transition-transform duration-300 group-hover:scale-105"
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
              </div>
            );
          })}
        </div>
      </div>

      {/* Works Modal */}
      <Modal isOpen={mounted && open} onClose={closePanel} title="GRAIN STUDIO">
        <div className="flex flex-col gap-6 md:flex-row md:relative">
          {/* Left Panel - Info */}
          <section className="flex flex-col gap-4 items-start md:sticky md:top-0 md:w-1/3 lg:w-1/4 md:self-start flex-shrink-0">
            <h2 className="font-anton text-xl text-klein md:text-2xl">
              {selected?.title}
              {selected?.year && (
                <span className="ml-2 font-normal">- {selected.year}</span>
              )}
            </h2>

            <Pill label={selected?.tag} variant="dark" size="sm" />

            <p className="text-gray-700 text-sm md:text-base">
              {selected?.desc}
            </p>

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

          {/* Right Panel - Gallery (Scrollable) */}
          <aside className="flex-1 md:pl-8">
            {selected && (
              <div className="flex flex-col gap-4">
                {selected.gallery?.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08 + 0.15,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1], // easeOutQuart
                    }}
                  >
                    <OptimizedImage
                      src={item.imgSrc}
                      alt={item.alt || `Gallery image ${index + 1}`}
                      className="w-full rounded-lg"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </Modal>
    </section>
  );
}
