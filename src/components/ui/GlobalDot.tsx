import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { IconPointFilled } from '@tabler/icons-react';
import { SECTION_IDS, type SectionId } from '@/lib/sections';
import { floatAnimation, easings } from '@/utils/animations';
import { MOTION_DURATIONS } from '@/config/constants';

const DOT_SIZE = {
  HERO: 70,
  DEFAULT: 50,
} as const;

export function GlobalDot() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [size, setSize] = useState<number>(DOT_SIZE.DEFAULT);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const setupObservers = () => {
      // Limpiar observers anteriores
      observers.forEach((o) => o.disconnect());
      observers.length = 0;

      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setSize(id === 'hero' ? DOT_SIZE.HERO : DOT_SIZE.DEFAULT);
              setActiveSection(id);
            }
          },
          { root: null, rootMargin: '-30% 0px -30% 0px', threshold: 0 }
        );
        obs.observe(el);
        observers.push(obs);
      });
    };

    // Setup inicial
    setupObservers();

    // Re-setup después de que los lazy components se carguen
    const timer = setTimeout(setupObservers, 500);

    return () => {
      clearTimeout(timer);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  if (!activeSection || !mounted) return null;

  const targetSpan = document.getElementById(
    `section-title-dot-${activeSection}`
  );

  if (!targetSpan) return null;

  return createPortal(
    <motion.div
      className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center"
      layoutId="global-dot"
      initial={false}
      transition={{
        layout: {
          duration: MOTION_DURATIONS.LAYOUT,
          ease: easings.easeOutExpo,
        },
      }}
    >
      <motion.div animate={floatAnimation} className="mx-0.5 inline-block">
        <IconPointFilled
          size={size}
          className={`drop-shadow-2xl ${activeSection === 'services' ? 'text-klein' : 'text-white'}`}
        />
      </motion.div>
    </motion.div>,
    targetSpan
  );
}
