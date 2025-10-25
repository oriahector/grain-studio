import { motion } from 'motion/react';

export function Hero() {
  return (
    <>
      <section
        id="hero"
        className="section reveal container-px mx-auto flex flex-col h-[70vh] items-start justify-end gap-6 mt-20  mb-10 md:my-20 bg-klein"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1], // curva de suavizado
            scale: { type: 'spring', stiffness: 80, damping: 20 },
          }}
        >
          <div className="flex flex-col space-between items-end md:flex-row gap-2">
            <p className="text-5xl md:text-7xl md:w-4/6 text-white font-anton uppercase text-right md:text-left">
              <motion.img
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity }}
                src="images/grain.svg"
                alt="icon"
                className="object-contain float-left mr-4"
              />
              We build websites and visual systems that move with rhythm and
              precision
            </p>

            <p className=" text-xl md:text-sm  md:w-2/6 text-right md:text-left">
              Behind Grain Studio are{' '}
              <a
                className="underline"
                href="https://www.linkedin.com/in/hmartinezoria/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Héctor
              </a>{' '}
              and{' '}
              <a
                className="underline"
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
      </section>
      <section id="hero-video" className="section md:px-10 container-px">
        <div className="relative w-full h-auto">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover block"
          >
            <source src="images/video_hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
        </div>
      </section>
    </>
  );
}
