import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SERVICES } from '@/config/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Services() {
  const sectionRef = useRef(null);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section font-anton relative bg-white py-20 text-center md:py-36"
    >
      <div className="section-container">
        <SectionTitle
          size="heading-3"
          sectionId="services"
          className="text-klein"
        >
          (SERVICES)
        </SectionTitle>

        <ul className="text-klein space-y-4 text-5xl leading-none font-extrabold uppercase md:space-y-8 md:text-9xl">
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
      initial={{ opacity: 0.2, scale: 0.96, y: 20 }}
      animate={
        inView
          ? { opacity: 1, scale: 1.01, y: 0 }
          : { opacity: 0.2, scale: 0.96, y: 20 }
      }
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // easeOutQuart - suave y elegante
        opacity: { duration: 0.6 },
        scale: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        y: { duration: 0.6 },
      }}
      className="will-change-transform"
    >
      {label}
    </motion.li>
  );
}
