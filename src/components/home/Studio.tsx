import { Plus } from 'lucide-react';

const SERVICES = [
  {
    name: 'Web design & development',
    description:
      'Thoughtful digital experiences, from the first idea to the final interaction.',
  },
  {
    name: 'Brand strategy',
    description:
      'Finding the connection between your brand, your story and your audience.',
  },
  {
    name: 'Photography',
    description:
      'People, places and products. A considered eye for the details that make a brand.',
  },
  {
    name: 'UGC content',
    description:
      'Original, human content that brings brands closer to their communities.',
  },
];

const person = 'underline underline-offset-4 hover:text-klein';

export function Studio() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-heading"
      className="grid gap-2 border-t border-line pt-9 pb-12 md:grid-cols-[1fr_1.07fr] md:gap-10 md:pb-18 lg:gap-16"
    >
      <div className="reveal">
        <p className="eyebrow">The studio</p>
        <h2
          id="studio-heading"
          className="mt-6 max-w-[32rem] text-[42px] leading-[1.12] md:text-[50px]"
        >
          Small by design.
          <br />
          Connected by nature.
        </h2>
      </div>

      <div className="reveal">
        <p className="mt-5 mb-8 max-w-[31rem] text-[17px] leading-relaxed md:mt-10 md:text-[19px]">
          Behind Grain Studio are{' '}
          <a
            className={person}
            href="https://www.linkedin.com/in/hmartinezoria/"
            target="_blank"
            rel="noreferrer"
          >
            Héctor
          </a>{' '}
          and{' '}
          <a
            className={person}
            href="https://www.linkedin.com/in/clara-morrondo/"
            target="_blank"
            rel="noreferrer"
          >
            Clara
          </a>
          . Two perspectives, one shared approach: making thoughtful work that
          brings people and brands together.
        </p>

        <h3 className="sr-only">Services</h3>
        {/* Native disclosure: accessible and zero JS */}
        {SERVICES.map((service) => (
          <details
            key={service.name}
            name="services"
            className="service group border-b border-line"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between py-4.5 text-[17px] transition-colors hover:text-klein [&::-webkit-details-marker]:hidden">
              {service.name}
              <Plus
                aria-hidden="true"
                className="size-4 transition-[rotate] duration-200 ease-out group-open:rotate-45"
              />
            </summary>
            <p className="pb-4 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
