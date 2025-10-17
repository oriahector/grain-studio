export function Hero() {
  return (
    <section id="hero" className="section relative container-px mx-auto flex min-h-screen flex-col items-start justify-end gap-6 pb-20">
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/images/video_final.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-white/30 to-white/20" />
      </div>
      <h1 className="max-w-3xl text-[length:var(--title-size)] ] font-anton tracking-tight leading-none text-right">
        GRAIN<br />
        STUDIO
      </h1>
    </section>
  )
}