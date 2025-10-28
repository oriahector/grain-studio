import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { LAYOUT } from '@/config/layout';
import { MOTION_DURATIONS } from '@/config/constants';
import { easings } from '@/utils/animations';

export function Hero() {
  const heroRef = useRef(null);
  const videoGridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(heroRef, { amount: 0.3, once: false });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Slow down the scroll transformation - maps scroll to a slower range
  const slowScrollProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, LAYOUT.SCROLL.SLOW_PROGRESS_MAX]
  );

  const { CLIPS_PER_ROW, ROWS } = LAYOUT.GRID;

  // Mixed media assets (videos, images, and text)
  const mediaAssets = [
    { type: 'image', url: '/images/circa-waste/circa5.webp' },
    { type: 'video', url: '/videos/tram.mp4' },
    { type: 'text', text: 'with' },
    { type: 'image', url: '/images/general/disney2.webp' },
    { type: 'image', url: '/images/donde-alex/alex.webp' },
    // 2nd row

    { type: 'image', url: '/images/tree-brothers/tree.webp' },
    { type: 'text', text: 'rhythm &' },
    { type: 'image', url: '/images/general/bucle.webp' },
    { type: 'video', url: '/videos/people.mp4' },
    { type: 'image', url: '/images/tree-brothers/treeshop.webp' },
    //3rd row
    { type: 'image', url: '/images/scandic-go/scandic2.webp' },
    { type: 'video', url: '/videos/tram.mp4' },
    { type: 'text', text: 'precision' },
    { type: 'video', url: '/videos/metro.mp4' },
    { type: 'image', url: '/images/general/bucle.webp' },
  ];

  // Generate media clips for each row
  const rowMedia = Array.from({ length: ROWS }, (_, rowIndex) =>
    Array.from({ length: CLIPS_PER_ROW }, (_, colIndex) => {
      const assetIndex =
        (rowIndex * CLIPS_PER_ROW + colIndex) % mediaAssets.length;
      return {
        id: `media-${rowIndex}-${colIndex}`,
        ...mediaAssets[assetIndex],
      };
    })
  );

  return (
    <>
      {/* Hero Title Section */}
      <section
        id="hero"
        ref={heroRef}
        className="section relative mt-20 flex min-h-[60vh] items-end py-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.98 }
          }
          transition={{
            duration: MOTION_DURATIONS.SLOWER,
            ease: easings.easeOutExpo,
            opacity: { duration: MOTION_DURATIONS.SLOW },
          }}
          className="section-container"
        >
          <SectionTitle
            size="heading-2"
            sectionId="hero"
            className="text-right leading-tight md:w-2/3 md:text-left"
          >
            We build digital experiences grain by grain, crafting connections
            between people and brands.
          </SectionTitle>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section
        ref={containerRef}
        id="hero-video"
        className="relative overflow-hidden pt-10"
      >
        <div className="section-container">
          <div ref={videoGridRef} className="flex flex-col gap-2 md:gap-4">
            {rowMedia.map((row, rowIndex) => {
              const isOdd = rowIndex % 2 === 0;
              const baseTranslate = useTransform(
                slowScrollProgress,
                [0, 1],
                isOdd
                  ? [
                      LAYOUT.SCROLL.GRID_TRANSLATE.ODD_START,
                      LAYOUT.SCROLL.GRID_TRANSLATE.ODD_END,
                    ]
                  : [
                      LAYOUT.SCROLL.GRID_TRANSLATE.EVEN_START,
                      LAYOUT.SCROLL.GRID_TRANSLATE.EVEN_END,
                    ]
              );

              return (
                <motion.div
                  key={`row-${rowIndex}`}
                  style={{ x: baseTranslate }}
                  className="flex gap-2 md:gap-4"
                >
                  {[...row, ...row].map((media, mediaIndex) => (
                    <motion.div
                      key={`${media.id}-${mediaIndex}`}
                      className="aspect-video w-[180px] flex-shrink-0 overflow-hidden rounded-lg md:w-[400px]"
                    >
                      {media.type === 'text' ? (
                        <div className="flex h-full w-full items-center justify-center bg-white">
                          <span className="text-klein text-2xl md:text-4xl">
                            {media.text}
                          </span>
                        </div>
                      ) : media.type === 'video' ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-cover"
                        >
                          <source src={media.url} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={media.url}
                          alt="Project showcase"
                          className="h-full w-full object-cover"
                        />
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
