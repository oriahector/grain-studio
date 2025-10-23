export function Hero() {
  return (
    <>
      <section id="hero" className="section reveal container-px mx-auto flex flex-col h-[70vh] items-start justify-end gap-6 mb-20 bg-accent">
        <div className="flex space-between items-end flex-col md:flex-row">
          <p className="md:mr-8 text-5xl md:text-7xl md:w-3/4 text-white font-anton uppercase opacity-0 transform translate-y-10 animate-fadeIn mb-8 text-right md:text-left">
            <img src="images/grain.svg" alt="icon" className="w-16 h-16 object-contain float-left mr-10 spin-organic" />
            We build websites and visual systems that move with rhythm and precision
          </p>          
          <p className="mt-6 text-xl md:text-sm font-arimo md:w-1/4 text-right md:text-left">
              Behind Grain Studio are <a className="underline" href="https://www.linkedin.com/in/hmartinezoria/" target="_blank" rel="noopener noreferrer">Héctor</a> and <a className="underline" href="https://www.linkedin.com/in/clara-morrondo/" target="_blank" rel="noopener noreferrer">Clara</a>, two developers who share a belief that design and code should coexist seamlessly.
          </p>
        </div>
      </section>
          <section id="hero-video" className="section reveal relative md:h-screen overflow-hidden bg-accent">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto  object-cover block mx-auto"
            >
              <source src="images/video_final.mov" type="video/mp4" />
            </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
          </section>
    </>
  )
}
