import React, { useRef, useState } from 'react';
import clsx from 'clsx';

interface Client {
  name: string;
  type: string;
}

interface Tooltip {
  visible: boolean;
  text: string;
  x: number;
  y: number;
}

const CLIENTS: Client[] = [
  { name: "Kiehl's", type: 'UGC Content' },
  { name: "Group L'Oreal", type: 'UGC Content' },
  { name: 'WETACA', type: 'UGC Content' },
  { name: 'Grosso Napoletano', type: 'Photography' },
  { name: 'Orna Group', type: 'Web Development' },
  { name: 'CIRCA Waste', type: 'Web Development' },
  { name: 'Tree Brothers', type: 'Web Development' },
  { name: 'ScandicGo', type: 'Photography' },
];

const MARQUEE_OFFSET = -50; // -50% because content is duplicated

export function Clients() {
  const [tooltip, setTooltip] = useState<Tooltip>({
    visible: false,
    text: '',
    x: 0,
    y: 0,
  });
  const tipRef = useRef<HTMLDivElement | null>(null);

  const handlePointerEnter = (e: React.PointerEvent, name: string) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setTooltip((prev) => ({ ...prev, visible: true, text: name }));
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const offsetY = -18;
    const offsetX = 18;
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX + offsetX,
      y: e.clientY + offsetY,
    }));
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
    try {
      (e.target as Element).releasePointerCapture?.(e.pointerId);
    } catch {
      // Ignore error
    }
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <section className="bg-white text-klein">
      <div className="overflow-hidden">
        <div className="relative">
          {/* Marquee Track */}
          <div
            className="inline-block whitespace-nowrap will-change-transform my-4"
            style={
              {
                animation: 'marquee 22s linear infinite',
                '--marquee-duration': '22s',
              } as React.CSSProperties
            }
            aria-hidden="false"
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
                    className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-klein"
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
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <div
        ref={tipRef}
        className={clsx(
          'pointer-events-none fixed z-50 transition-opacity duration-150',
          tooltip.visible ? 'opacity-100' : 'opacity-0'
        )}
        style={{ left: tooltip.x, top: tooltip.y }}
        role="tooltip"
        aria-hidden={!tooltip.visible}
      >
        <div className="rounded-md bg-black/60 px-3 py-1 text-sm font-semibold text-white shadow-lg backdrop-blur-md">
          {tooltip.text}
        </div>
      </div>

      {/* Marquee hover pause effect */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(${MARQUEE_OFFSET}%);
          }
        }

        [style*='animation: marquee']:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          [style*='animation: marquee'] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
