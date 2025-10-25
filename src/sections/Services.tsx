import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SERVICES } from '@/config/constants';

export function Services() {
  const sectionRef = useRef(null);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section relative bg-white py-20 text-center font-anton md:py-36"
    >
      <div className="section-container">
        <p className="mb-6 text-3xl font-medium tracking-widest text-klein">
          (SERVICES)
        </p>

        <ul className="space-y-8 text-5xl font-extrabold uppercase leading-none text-klein md:text-9xl">
          {SERVICES.map((s) => (
            <ServiceItem key={s} label={s} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceItem({ label }: { label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4, once: false });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0.3, scale: 0.9 }}
      animate={
        inView ? { opacity: 1, scale: 1.05 } : { opacity: 0.3, scale: 0.9 }
      }
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      }}
      className="transition-transform duration-300 will-change-transform"
    >
      {label}
    </motion.li>
  );
}
