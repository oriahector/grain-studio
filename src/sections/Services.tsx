import { memo, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SERVICES } from '@/config/constants';
import { LAYOUT } from '@/config/layout';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { getStaggerAnimation } from '@/utils/animations';

export function Services() {
  return (
    <section
      id="services"
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

const ServiceItem = memo(function ServiceItem({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: false });

  const animation = getStaggerAnimation(index, LAYOUT.ANIMATIONS.STAGGER_DELAY);

  return (
    <motion.li
      ref={ref}
      initial={animation.initial}
      animate={inView ? animation.animate : animation.initial}
      transition={animation.transition}
    >
      {label}
    </motion.li>
  );
});
