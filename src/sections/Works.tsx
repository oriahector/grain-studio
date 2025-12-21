import { useEffect, useRef, useState, useMemo } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Modal } from '@/components/ui/Modal';
import { Pill } from '@/components/ui/Pill';
import { TabGroup, type Tab } from '@/components/ui/TabGroup';
import { IconArrowUpRight } from '@tabler/icons-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Item, itemsData } from '../data/worksData';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { getTagIcon } from '@/config/tagIcons';
import { LAYOUT } from '@/config/layout';
import { ANIMATION_DURATIONS } from '@/config/constants';
import { getGalleryItemAnimation } from '@/utils/animations';
import { openUrl } from '@/utils/navigation';
import clsx from 'clsx';

// Tabs para filtrar works
const WORKS_TABS: Tab[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Development' },
  { id: 'photo', label: 'Photography' },
] as const;

type WorksTabId = 'all' | 'web' | 'photo';

// Helper function to detect video files
const isVideo = (url: string) => url.endsWith('.webm') || url.endsWith('.mp4');

// Gallery item component
const GalleryItem = ({
  src,
  alt,
  index,
}: {
  src: string;
  alt?: string;
  index: number;
}) => (
  <motion.div
    {...getGalleryItemAnimation(
      index,
      LAYOUT.ANIMATIONS.GALLERY_STAGGER_DELAY,
      LAYOUT.ANIMATIONS.GALLERY_INITIAL_DELAY
    )}
  >
    {isVideo(src) ? (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-lg"
      >
        Your browser does not support the video tag.
      </video>
    ) : (
      <OptimizedImage
        src={src}
        alt={alt || `Gallery image ${index + 1}`}
        className="w-full rounded-lg"
        loading="lazy"
      />
    )}
  </motion.div>
);

export function Works() {
  const [activeTab, setActiveTab] = useState<WorksTabId>('all');
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Item | null>(null);
  const closeTimer = useRef<number | null>(null);

  // Filtrar items según la pestaña activa
  const filteredItems = useMemo(() => {
    if (activeTab === 'all') return itemsData;
    if (activeTab === 'web')
      return itemsData.filter((item) => item.tag === 'WEB DEVELOPMENT');
    return itemsData.filter((item) => item.tag === 'PHOTOGRAPHY');
  }, [activeTab]);

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

  const closePanel = () => startClose();

  const canOpenPanel = (item: Item) =>
    Boolean(item.url || item.urlSecondary || item.gallery);

  const handleItemClick = (item: Item) => {
    if (canOpenPanel(item)) openPanel(item);
  };

  return (
    <section id="works" className="section bg-klein text-white">
      <div className="section-container">
        <SectionTitle
          size="heading-2"
          sectionId="works"
          className="pb-6 text-center"
        >
          WORKS
        </SectionTitle>

        {/* Tabs de filtrado */}
        <TabGroup
          tabs={WORKS_TABS}
          activeTab={activeTab}
          onChange={(tabId) => setActiveTab(tabId as WorksTabId)}
          className="mb-10"
        />

        <motion.div
          layout
          className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const h = LAYOUT.WORK.HEIGHTS[idx % LAYOUT.WORK.HEIGHTS.length];

              return (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid"
                >
                  <button
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className={clsx(
                      'group relative block w-full overflow-hidden text-left focus:outline-none',
                      canOpenPanel(item) && 'cursor-pointer'
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
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
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
              <div
                className={
                  selected.galleryColumns === 2
                    ? 'columns-1 gap-4 space-y-4 md:columns-2'
                    : 'flex flex-col gap-4'
                }
              >
                {selected.gallery?.map((item, index) => (
                  <div
                    key={index}
                    className={
                      selected.galleryColumns === 2 ? 'break-inside-avoid' : ''
                    }
                  >
                    <GalleryItem
                      src={item.imgSrc}
                      alt={item.alt}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </Modal>
    </section>
  );
}
