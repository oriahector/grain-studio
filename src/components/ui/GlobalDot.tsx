import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { IconPointFilled } from '@tabler/icons-react';

const SECTIONS = ['hero', 'works', 'services', 'contact'] as const;

export function GlobalDot() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [size, setSize] = useState(50);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSize(id === 'hero' ? 70 : 50);
            setActiveSection(id);
          }
        },
        { root: null, rootMargin: '-30% 0px -30% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
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
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
    >
      <motion.div
        animate={{
          x: [0, 2, -2, 0],
          y: [0, -3, 1, 0],
        }}
        transition={{
          x: {
            duration: 4,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          },
        }}
        className="mx-0.5 inline-block"
      >
        <IconPointFilled
          size={size}
          className={`drop-shadow-2xl ${activeSection === 'services' ? 'text-klein' : 'text-white'}`}
        />
      </motion.div>
    </motion.div>,
    targetSpan
  );
}
