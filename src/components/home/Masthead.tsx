export function Masthead() {
  return (
    <section
      aria-labelledby="studio-name"
      className="pt-6 pb-8 md:pt-6 md:pb-11"
    >
      {/* First-paint entrance, staggered ~80ms per piece. Seen once per visit,
          so it can afford a little more time than UI feedback. */}
      <h1
        id="studio-name"
        className="flex items-center gap-[0.12em] text-[clamp(2.75rem,10.5vw,12rem)] leading-[1.02] font-medium tracking-tight whitespace-nowrap"
      >
        {/* The spaces collapse visually in flex but keep the name "Grain Studio" */}
        <span className="animate-rise">Grain</span>{' '}
        <span
          aria-hidden="true"
          className="animate-rise [animation-delay:80ms]"
        >
          <span className="block size-[0.16em] animate-float rounded-full bg-klein motion-reduce:animate-none" />
        </span>{' '}
        <span className="animate-rise [animation-delay:160ms]">Studio</span>
      </h1>
      <div className="mt-6 flex animate-rise flex-col gap-5 [animation-delay:280ms] md:flex-row md:items-end md:justify-between">
        <p className="eyebrow">
          Independent creative studio
          <br />
          <span className="text-muted">Digital experiences & photography</span>
        </p>
        <p className="max-w-[23rem] text-[15px] leading-normal md:text-base">
          We build digital experiences grain by grain, crafting connections
          between people and brands — with rhythm & precision.
        </p>
      </div>
    </section>
  );
}
