import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useAnimationFrame } from 'motion/react';
import { CLIENTS } from '@/config/clients';
import { useTooltip } from '@/hooks/useTooltip';
import { MOTION_DURATIONS } from '@/config/constants';

const MARQUEE_SPEED = -50; // pixels per second

function ClientItem({
  client,
  showTooltip,
  moveTooltip,
  hideTooltip,
}: {
  client: (typeof CLIENTS)[number];
  showTooltip: (text: string, x: number, y: number) => void;
  moveTooltip: (x: number, y: number) => void;
  hideTooltip: () => void;
}) {
  return (
    <div className="inline-flex items-center gap-15 px-5 text-2xl md:text-4xl">
      <button
        type="button"
        onMouseEnter={(e) => showTooltip(client.type, e.clientX, e.clientY)}
        onMouseMove={(e) => moveTooltip(e.clientX, e.clientY)}
        onMouseLeave={hideTooltip}
        className="focus:ring-klein block focus:ring-2 focus:ring-offset-2 focus:outline-none"
        aria-label={`${client.name} - ${client.type}`}
      >
        {client.name}
      </button>
      <span className="select-none">|</span>
    </div>
  );
}

export function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { tooltip, showTooltip, hideTooltip, moveTooltip } = useTooltip();

  useAnimationFrame((_, delta) => {
    if (!containerRef.current || isPaused) return;

    const currentX = parseFloat(
      containerRef.current.style.transform
        .replace('translateX(', '')
        .replace('px)', '') || '0'
    );
    const newX = currentX + (MARQUEE_SPEED * delta) / 1000;

    const scrollWidth = containerRef.current.scrollWidth;
    if (Math.abs(newX) >= scrollWidth / 2) {
      containerRef.current.style.transform = 'translateX(0px)';
    } else {
      containerRef.current.style.transform = `translateX(${newX}px)`;
    }
  });

  return (
    <>
      <section className="text-klein bg-white">
        <div className="overflow-hidden">
          <motion.div
            ref={containerRef}
            className="my-4 inline-flex whitespace-nowrap"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicamos para loop infinito */}
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <ClientItem
                key={`client-${i}`}
                client={client}
                showTooltip={showTooltip}
                moveTooltip={moveTooltip}
                hideTooltip={hideTooltip}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {tooltip.visible &&
        createPortal(
          <motion.div
            className="pointer-events-none fixed z-[9999]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: MOTION_DURATIONS.FAST }}
            style={{
              left: tooltip.x,
              top: tooltip.y,
              transform: 'translate(-50%, -100%)',
            }}
          >
            <div className="bg-klein rounded-md px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-white shadow-lg">
              {tooltip.text}
            </div>
          </motion.div>,
          document.body
        )}
    </>
  );
}
