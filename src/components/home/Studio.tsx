import { Fragment } from 'react';
import { Plus } from 'lucide-react';
import { SITE } from '@/config/site';
import { SERVICES } from '@/content/services';

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
          className="mt-6 max-w-lg text-title md:text-title-lg"
        >
          Small by design.
          <br />
          Connected by nature.
        </h2>
      </div>

      <div className="reveal">
        <p className="mt-5 mb-8 max-w-124 text-body leading-relaxed md:mt-10 md:text-body-lg">
          Behind Grain Studio are{' '}
          {SITE.founders.map((founder, i) => (
            <Fragment key={founder.name}>
              {i > 0 && ' and '}
              <a
                className={person}
                href={founder.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {founder.name}
              </a>
            </Fragment>
          ))}
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
            <summary className="flex cursor-pointer list-none items-center justify-between py-4.5 text-body transition-colors hover:text-klein [&::-webkit-details-marker]:hidden">
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
