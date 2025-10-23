export function Hero() {
  return (
    <>
      <section id="hero" className="section reveal container-px mx-auto flex flex-col h-[70vh] items-start justify-end gap-6 mt-20  mb-10 md:my-20 bg-accent">
        <div className="flex flex-col space-between items-end md:flex-row gap-2">
          <p className="text-5xl md:text-7xl md:w-4/6 text-white font-anton uppercase transform  animate-fadeIn text-right md:text-left">
            <img src="images/grain.svg" alt="icon" className="object-contain float-left  spin-organic" />
            We build websites and visual systems that move with rhythm and precision
          </p>          
          <p className=" text-xl md:text-sm font-arimo md:w-2/6 text-right md:text-left">
              Behind Grain Studio are <a className="underline" href="https://www.linkedin.com/in/hmartinezoria/" target="_blank" rel="noopener noreferrer">Héctor</a> and <a className="underline" href="https://www.linkedin.com/in/clara-morrondo/" target="_blank" rel="noopener noreferrer">Clara</a>, two developers who share a belief that design and code should coexist seamlessly.
          </p>
        </div>
      </section>
          <section id="hero-video" className="section md:px-10 container-px">
            <div className="relative w-full h-auto">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover block"
              >
                <source src="images/video_final.mov" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
            </div>
          </section>
    </>
  )
}
