import { useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'motion/react';
import { CLIENTS } from '@/config/clients';
import { useTooltip } from '@/hooks/useTooltip';
import { MOTION_DURATIONS } from '@/config/constants';

const MARQUEE_SPEED = -50; // pixels per second

export function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const {
    tooltip,
    tipRef,
    handlePointerEnter,
    handlePointerMove,
    handlePointerLeave,
  } = useTooltip();

  useAnimationFrame((_, delta) => {
    if (!containerRef.current || isPaused) return;

    const currentX = parseFloat(
      containerRef.current.style.transform
        .replace('translateX(', '')
        .replace('px)', '') || '0'
    );
    const newX = currentX + (MARQUEE_SPEED * delta) / 1000;

    // Reset position when scrolled past half the content (seamless loop)
    const scrollWidth = containerRef.current.scrollWidth;
    if (Math.abs(newX) >= scrollWidth / 2) {
      containerRef.current.style.transform = 'translateX(0px)';
    } else {
      containerRef.current.style.transform = `translateX(${newX}px)`;
    }
  });

  return (
    <section className="text-klein bg-white">
      <div className="overflow-hidden">
        <div className="relative">
          {/* Marquee Track */}
          <motion.div
            ref={containerRef}
            className="my-4 inline-flex whitespace-nowrap"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-hidden="false"
            style={{ willChange: 'transform' }}
          >
            {/* First set of clients */}
            <div className="inline-flex items-center">
              {CLIENTS.map((client, i) => (
                <div
                  key={`a-${i}`}
                  className="inline-flex items-center gap-15 px-5 text-2xl md:text-4xl"
                >
                  <button
                    type="button"
                    onPointerEnter={(e) => handlePointerEnter(e, client.type)}
                    onPointerMove={handlePointerMove}
                    onPointerLeave={handlePointerLeave}
                    className="focus:ring-klein block focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    aria-label={`${client.name} - ${client.type}`}
                  >
                    {client.name}
                  </button>
                  <span className="select-none">|</span>
                </div>
              ))}
            </div>

            {/* Duplicated set for seamless loop */}
            <div className="inline-flex items-center" aria-hidden="true">
              {CLIENTS.map((client, i) => (
                <div
                  key={`b-${i}`}
                  className="inline-flex items-center gap-15 px-5 text-2xl md:text-4xl"
                >
                  <span className="block" aria-hidden="true">
                    {client.name}
                  </span>
                  <span className="select-none">|</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tooltip */}
      <motion.div
        ref={tipRef}
        className="pointer-events-none fixed z-50"
        role="tooltip"
        aria-hidden={!tooltip.visible}
        initial={{ opacity: 0 }}
        animate={{
          opacity: tooltip.visible ? 1 : 0,
          x: tooltip.x,
          y: tooltip.y,
        }}
        transition={{
          opacity: { duration: MOTION_DURATIONS.FAST },
          x: { duration: 0 },
          y: { duration: 0 },
        }}
      >
        <motion.div
          className="rounded-md bg-black/60 px-3 py-1 text-sm font-semibold text-white shadow-lg backdrop-blur-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: tooltip.visible ? 1 : 0.9,
            opacity: tooltip.visible ? 1 : 0,
          }}
          transition={{ duration: MOTION_DURATIONS.FAST }}
        >
          {tooltip.text}
        </motion.div>
      </motion.div>
    </section>
  );
}
