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
      className="section font-anton relative bg-white text-center"
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
          {SERVICES.map((s, index) => (
            <ServiceItem key={s} label={s} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceItem({ label, index }: { label: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: false });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {label}
    </motion.li>
  );
}
