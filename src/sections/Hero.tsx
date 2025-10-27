import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Hero() {
  const heroRef = useRef(null);
  const videoGridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(heroRef, { amount: 0.3, once: false });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Number of clips per row (adjust as needed)
  const clipsPerRow = 5;
  const rows = 4;

  // Mixed media assets (videos, images, and text)
  const mediaAssets = [
    { type: 'image', url: '/images/circa-waste/circa1.webp' },
    { type: 'video', url: '/videos/tram.mp4' },
    { type: 'text', text: 'We build webs that' },
    { type: 'image', url: '/images/general/disney2.webp' },
    { type: 'image', url: '/images/donde-alex/alex.webp' },
    // 2nd row
    { type: 'text', text: 'move with rhythm' },
    { type: 'image', url: '/images/tree-brothers/tree.webp' },
    { type: 'image', url: '/images/general/bucle.webp' },
    { type: 'video', url: '/videos/people.mp4' },
    { type: 'image', url: '/images/tree-brothers/treeshop.webp' },
    //3rd row
    { type: 'image', url: '/images/scandic-go/scandic2.webp' },

    { type: 'video', url: '/videos/tram.mp4' },
    { type: 'text', text: 'and precision' },
    { type: 'video', url: '/videos/metro.mp4' },

    { type: 'image', url: '/images/general/bucle.webp' },
  ];

  // Generate media clips for each row
  const rowMedia = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: clipsPerRow }, (_, colIndex) => {
      const assetIndex =
        (rowIndex * clipsPerRow + colIndex) % mediaAssets.length;
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
        className="section bg-klein relative mt-20 flex min-h-[70vh] flex-col items-start justify-end gap-6 py-10 md:py-20"
      >
        <div className="section-container w-full">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 30, scale: 0.98 }
            }
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.6 },
            }}
            className="w-full"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:gap-8">
              {/* Main Heading */}
              <SectionTitle
                size="heading-2"
                sectionId="hero"
                className="text-right leading-tight md:w-2/3 md:text-left"
              >
                <span className="ml-4">
                  We build websites and visual systems that move with rhythm and
                </span>
                &nbsp;precision
              </SectionTitle>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-md text-right md:w-1/3 md:text-left md:text-lg"
              >
                Behind Grain Studio are{' '}
                <a
                  className="underline transition-opacity hover:opacity-80"
                  href="https://www.linkedin.com/in/hmartinezoria/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Héctor
                </a>{' '}
                and{' '}
                <a
                  className="underline transition-opacity hover:opacity-80"
                  href="https://www.linkedin.com/in/clara-morrondo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clara
                </a>
                , two developers who share a belief that design and code should
                coexist seamlessly.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Video Grid Section */}
      <section
        ref={containerRef}
        id="hero-video"
        className="section relative overflow-hidden py-10"
      >
        <div className="section-container">
          <div ref={videoGridRef} className="flex flex-col gap-2 md:gap-4">
            {rowMedia.map((row, rowIndex) => {
              const isOdd = rowIndex % 2 === 0;
              const baseTranslate = useTransform(
                scrollYProgress,
                [0, 1],
                isOdd ? ['0%', '-50%'] : ['0%', '50%']
              );

              return (
                <motion.div
                  key={`row-${rowIndex}`}
                  style={{ x: baseTranslate }}
                  className="flex gap-2 md:gap-4"
                >
                  {/* Duplicate the row to create seamless loop */}
                  {[...row, ...row].map((media, mediaIndex) => (
                    <motion.div
                      key={`${media.id}-${mediaIndex}`}
                      className="relative aspect-video w-[180px] flex-shrink-0 overflow-hidden rounded-lg md:w-[400px]"
                    >
                      {media.type === 'text' ? (
                        <div className="flex h-full w-full items-center justify-center bg-white">
                          <span className="font-anton text-klein text-3xl font-bold uppercase md:text-5xl">
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
