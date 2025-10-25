import { motion } from 'motion/react';

export function Hero() {
  return (
    <>
      {/* Hero Title Section */}
      <section
        id="hero"
        className="section relative flex min-h-[70vh] flex-col items-start justify-end gap-6 bg-klein py-20 md:mt-20"
      >
        <div className="section-container w-full">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
              scale: { type: 'spring', stiffness: 80, damping: 20 },
            }}
            className="w-full"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:gap-8">
              {/* Main Heading */}
              <p className="text-right font-anton text-5xl uppercase leading-tight text-white md:w-2/3 md:text-left md:text-7xl">
                <motion.img
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
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
              <p className="text-right text-xl md:w-1/3 md:text-left md:text-sm">
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
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Video Section */}
      <section id="hero-video" className="section relative bg-klein py-10">
        <div className="section-container">
          <div className="relative aspect-video w-full overflow-hidden">
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
