import { ArrowDownRight } from 'lucide-react';

export function Masthead() {
  return (
    <section
      aria-labelledby="studio-name"
      className="pt-6 pb-8 md:pt-6 md:pb-11"
    >
      <h1
        id="studio-name"
        className="flex items-center justify-between text-[clamp(2.75rem,10.5vw,12rem)] leading-[1.02] font-medium tracking-tight whitespace-nowrap"
      >
        Grain Studio
        <ArrowDownRight
          aria-hidden="true"
          strokeWidth={1.2}
          className="size-[0.7em] shrink-0 text-klein"
        />
      </h1>
      <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
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
