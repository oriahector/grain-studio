import React, { useRef, useState } from 'react'

export function Clients() {
    const clients = [
        { name: "Kiehl's", type: 'UGC Content' },
        { name: "Group L'Oreal", type: 'UGC Content' },
        { name: "WETACA", type: 'UGC Content' },
        { name: "Grosso Napoletano", type: 'Photography' },
        { name: "Orna Group", type: 'Web Development' },
        { name: "CIRCA Waste", type: 'Web Development' },
        { name: "Tree Brothers", type: 'Web Development' },
        { name: "ScandicGo", type: 'Photography' },
    ]

    const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 })
    const tipRef = useRef<HTMLDivElement | null>(null)

    function handlePointerEnter(e: React.PointerEvent, name: string) {
        // capture pointer so we receive move/leave events even if animation moves the element
        ; (e.target as Element).setPointerCapture?.(e.pointerId)
        setTooltip((t) => ({ ...t, visible: true, text: name }))
    }

    function handlePointerMove(e: React.PointerEvent) {
        // position tooltip near pointer
        const offsetY = -18 // place slightly above cursor
        const offsetX = 18 // move to the right so it's not under the cursor
        setTooltip((t) => ({ ...t, x: e.clientX + offsetX, y: e.clientY + offsetY }))
    }

    function handlePointerLeave(e: React.PointerEvent) {
        try {
            ; (e.target as Element).releasePointerCapture?.(e.pointerId)
        } catch { }
        setTooltip((t) => ({ ...t, visible: false }))
    }

    return (
        <div className='bg-white text-klein' >
            <div className="overflow-hidden">
                <div className="relative">
                    <div
                        className="marquee-track inline-block whitespace-nowrap will-change-transform"
                        aria-hidden="false"
                    >
                        <span className="inline-flex items-center">
                            {clients.map((c, i) => (
                                <span key={`a-${i}`} className="inline-flex items-center text-2xl md:text-4xl  p-5">
                                    <span
                                        onPointerEnter={(e) => handlePointerEnter(e, c.type)}
                                        onPointerMove={handlePointerMove}
                                        onPointerLeave={handlePointerLeave}
                                        className="client-name"
                                    >
                                        {c.name}
                                    </span>
                                    <span className="mx-15">|</span>
                                </span>
                            ))}
                        </span>

                        <span className="inline-flex items-center" aria-hidden="true">
                            {clients.map((c, i) => (
                                <span key={`b-${i}`} className="inline-flex items-center text-2xl md:text-4xl  p-5">
                                    <span
                                        onPointerEnter={(e) => handlePointerEnter(e, c.type)}
                                        onPointerMove={handlePointerMove}
                                        onPointerLeave={handlePointerLeave}
                                        className="client-name"
                                    >
                                        {c.name}
                                    </span>
                                    <span className="mx-15">|</span>
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
            </div>

            {/* Tooltip element */}
            <div
                ref={tipRef}
                className={`pointer-events-none fixed z-50 ${tooltip.visible ? 'opacity-100' : 'opacity-0'}`}
                style={{ left: tooltip.x, top: tooltip.y }}
                aria-hidden={!tooltip.visible}
            >
                <div
                    className="px-3 py-1 rounded-md text-sm shadow-md"
                    style={{
                        whiteSpace: 'nowrap',
                        backgroundColor: 'rgba(8,10,20,0.6)',
                        color: 'rgba(255,255,255,0.98)',
                        boxShadow: '0 8px 30px rgba(2,6,23,0.7)',
                        backdropFilter: 'blur(6px)'
                    }}
                >
                    {tooltip.text}
                </div>
            </div>

            <style>{`
        :root { --marquee-duration: 22s; }

        .marquee-track {
          animation: marquee var(--marquee-duration) linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }

        .client-name { display: inline-block; }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* mueve la mitad porque el contenido está duplicado */
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
                @media (prefers-reduced-motion: reduce) {
                    .pointer-events-none { transition: none !important; }
                }
      `}</style>
        </div>

    )
}