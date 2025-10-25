import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export function Hero() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { amount: 0.3, once: false });

  return (
    <>
      {/* Hero Title Section */}
      <section
        id="hero"
        ref={heroRef}
        className="section relative flex min-h-[70vh] flex-col items-start justify-end gap-6 bg-klein py-20 md:mt-20"
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
              ease: [0.16, 1, 0.3, 1], // easeOutExpo - más suave y profesional
              opacity: { duration: 0.6 },
            }}
            className="w-full"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:gap-8">
              {/* Main Heading */}
              <p className="text-right font-anton text-5xl uppercase leading-tight text-white md:w-2/3 md:text-left md:text-7xl">
                <motion.img
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { rotate: 360, opacity: 1 }
                      : { rotate: 0, opacity: 0 }
                  }
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    opacity: {
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                  src="images/grain.svg"
                  alt="Grain Studio icon"
                  className="float-left inline object-contain size-14 mt-4"
                />
                <span className="ml-4">
                  We build websites and visual systems that move with rhythm and
                </span>
                precision
              </p>

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
                className="text-right text-xl md:w-1/3 md:text-left md:text-sm"
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

      {/* Hero Video Section */}
      <section id="hero-video" className="section relative bg-klein py-10">
        <div className="section-container">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="images/video_hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}
