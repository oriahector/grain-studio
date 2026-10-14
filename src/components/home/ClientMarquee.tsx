import { CLIENTS } from '@/config/clients';

function ClientList({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-baseline gap-x-12 gap-y-3 pr-12 motion-reduce:shrink motion-reduce:flex-wrap md:gap-x-16 md:pr-16 ${
        hidden ? 'motion-reduce:hidden' : ''
      }`}
    >
      {CLIENTS.map((client) => (
        <li
          key={client.name}
          className="flex items-baseline gap-2 whitespace-nowrap"
        >
          <span className="text-base font-medium md:text-[19px]">
            {client.name}
          </span>
          <span className="eyebrow text-muted">{client.type}</span>
        </li>
      ))}
    </ul>
  );
}

/** CSS-only marquee: the list is rendered twice and shifted by half its width */
export function ClientMarquee() {
  return (
    <section
      aria-label="Selected clients"
      className="flex reveal flex-col gap-4 border-y border-line py-7 md:flex-row md:items-center md:gap-10"
    >
      <p className="shrink-0 eyebrow text-muted">In good company</p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:[mask-image:none]">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none">
          <ClientList />
          <ClientList hidden />
        </div>
      </div>
    </section>
  );
}
