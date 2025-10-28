import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Modal } from '@/components/ui/Modal';
import { Pill } from '@/components/ui/Pill';
import { IconArrowUpRight } from '@tabler/icons-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Item, itemsData } from '../data/worksData';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { getTagIcon } from '@/config/tagIcons';
import { LAYOUT } from '@/config/layout';
import { ANIMATION_DURATIONS } from '@/config/constants';
import { getGalleryItemAnimation } from '@/utils/animations';
import { openUrl } from '@/utils/navigation';
import clsx from 'clsx';

export function Works() {
  const [items] = useState<Item[]>(itemsData);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Item | null>(null);
  const closeTimer = useRef<number | null>(null);

  const startClose = () => {
    setOpen(false);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setMounted(false);
      setSelected(null);
      closeTimer.current = null;
    }, ANIMATION_DURATIONS.PANEL);
  };

  useEffect(() => {
    document.body.style.overflow = mounted ? 'hidden' : '';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mounted) {
        startClose();
      }
    };

    if (mounted) {
      window.addEventListener('keydown', onKeyDown);
    }

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

  const closePanel = () => {
    startClose();
  };

  return (
    <section id="works" className="section bg-klein mt-20 text-white">
      <div className="section-container">
        <SectionTitle
          size="heading-2"
          sectionId="works"
          className="pb-10 text-center"
        >
          WORKS
        </SectionTitle>

        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {items.map((item, idx) => {
            const h = LAYOUT.WORK.HEIGHTS[idx % LAYOUT.WORK.HEIGHTS.length];

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
                    'group relative block w-full overflow-hidden text-left focus:outline-none',
                    (item.url || item.urlSecondary || item.gallery) &&
                      'cursor-pointer'
                  )}
                >
                  {/* Image Container */}
                  <div
                    className="relative w-full overflow-hidden rounded-lg"
                    style={{ height: `${h}px` }}
                  >
                    <div
                      className="h-full w-full transition-transform group-hover:scale-105"
                      style={{
                        transitionDuration: `${ANIMATION_DURATIONS.NORMAL}ms`,
                      }}
                    >
                      <OptimizedImage
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div className="mt-2">
                    <h3 className="mb-2 text-base text-white uppercase md:text-lg">
                      {item.title}
                    </h3>
                    <Pill
                      label={item.tag}
                      variant="light"
                      size="sm"
                      icon={getTagIcon(item.tag)}
                    />
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Works Modal */}
      <Modal isOpen={mounted && open} onClose={closePanel} title="GRAIN STUDIO">
        <div className="flex flex-col gap-6 md:relative md:flex-row">
          {/* Left Panel - Info */}
          <section className="flex flex-shrink-0 flex-col items-start gap-4 md:sticky md:top-0 md:w-1/3 md:self-start lg:w-1/4">
            <h2 className="font-anton text-klein text-xl md:text-2xl">
              {selected?.title}
              {selected?.year && (
                <span className="ml-2 font-normal">- {selected.year}</span>
              )}
            </h2>

            <Pill
              label={selected?.tag}
              variant="dark"
              size="sm"
              icon={selected?.tag ? getTagIcon(selected.tag) : undefined}
            />

            <p className="text-sm text-gray-900 md:text-base">
              {selected?.desc}
            </p>

            {selected?.url && (
              <Button
                size="xs"
                className="group font-anton text-klein flex items-center gap-1"
                onClick={() => openUrl(selected.url!)}
              >
                Visit site
                <IconArrowUpRight
                  size={24}
                  stroke={1}
                  className="transition-transform group-hover:rotate-45"
                  style={{
                    transitionDuration: `${ANIMATION_DURATIONS.NORMAL}ms`,
                  }}
                />
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
                    {...getGalleryItemAnimation(
                      index,
                      LAYOUT.ANIMATIONS.GALLERY_STAGGER_DELAY,
                      LAYOUT.ANIMATIONS.GALLERY_INITIAL_DELAY
                    )}
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
