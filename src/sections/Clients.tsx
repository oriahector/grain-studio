export function Clients() {
    const clients = [
        "Kielh's",
        "Group L'Oreal",
        'WETACA',
        'Grosso Napoletano',
        'Orna Group',
        'CIRCA Waste',
        'Tree Brothers',
        'ScandicGo'
    ]

    return (
        <div>
            <div className="my-10 overflow-hidden">
                <div className="relative">
                    <div
                        className="marquee-track inline-block whitespace-nowrap will-change-transform"
                        aria-hidden="false"
                    >
                        <span className="inline-flex items-center">
                            {clients.map((c, i) => (
                                <span key={`a-${i}`} className="inline-flex items-center text-[28px] md:text-[120px] font-arimo">
                                    <span>{c}</span>
                                    <span className="mx-15">|</span>
                                </span>
                            ))}
                        </span>

                        <span className="inline-flex items-center" aria-hidden="true">
                            {clients.map((c, i) => (
                                <span key={`b-${i}`} className="inline-flex items-center text-[28px] md:text-[120px] font-arimo">
                                    <span>{c}</span>
                                    <span className="mx-15">|</span>
                                </span>
                            ))}
                        </span>
                    </div>
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

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* mueve la mitad porque el contenido está duplicado */
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
        </div>

    )
}