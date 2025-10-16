export function About() {
  return (
    <section
      id="about"
      className="section container-px mx-auto py-32 bg-accent font-mango"
    >
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-4 text-white">
            Art. Grain Studio, we are multidisciplinary developers
          </p>
          <p className="text-base leading-relaxed opacity-90 max-w-prose text-white">
            We believe in the intersection of design and code. Our philosophy is built around motion,
            rhythm, and interaction. From concept to launch, we craft digital experiences that merge
            design precision with technical depth.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-[9vw] md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
            ABOUT
          </h2>
        </div>
      </div>
    </section>
  )
}