'use client';

import { useState, type MouseEvent } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { CATEGORIES, type Category, type Project } from '@/lib/projects';
import { ProjectMedia } from '@/components/ProjectMedia';
import { ProjectModal } from './ProjectModal';

type Filter = 'All' | Category;
const FILTERS: Filter[] = ['All', ...CATEGORIES];

/** Let cmd/ctrl/shift/middle clicks open the real project page */
const isPlainClick = (e: MouseEvent) =>
  e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('All');
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);

  const visible = projects.filter(
    (p) => filter === 'All' || p.category === filter
  );
  const active = visible.find((p) => p.slug === activeSlug) ?? visible[0];

  // Open the quick view and reflect it in the URL (/work/slug/), so the
  // address is shareable and back closes it. A reload renders the full page.
  const openModal = (e: MouseEvent, project: Project) => {
    if (!isPlainClick(e)) return;
    e.preventDefault();
    window.history.pushState(null, '', `/work/${project.slug}/`);
  };

  return (
    <>
      <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <h2 id="work-heading" className="eyebrow">
          Selected work{' '}
          <span className="text-muted">
            [01—{String(projects.length).padStart(2, '0')}]
          </span>
        </h2>
        <div
          role="group"
          aria-label="Filter projects"
          className="flex gap-5 md:gap-7"
        >
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className="inline-flex cursor-pointer items-center gap-1.5 eyebrow text-[11px] transition-colors hover:text-klein aria-pressed:text-klein"
            >
              {item}
              {filter === item && (
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-klein"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 pb-16 md:grid-cols-[1fr_1.07fr] md:gap-10 lg:gap-16 lg:pb-20">
        {active && (
          <figure>
            <Link
              href={`/work/${active.slug}`}
              onClick={(e) => openModal(e, active)}
              className="group relative block aspect-[4/5] overflow-hidden bg-wash md:aspect-auto md:h-[clamp(28rem,40vw,42rem)]"
            >
              {/* All covers stay mounted so hovering the list crossfades instantly */}
              {projects.map((p, i) => (
                <ProjectMedia
                  key={p.slug}
                  media={p.cover}
                  priority={i === 0}
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${
                    p.slug === active.slug ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <span className="absolute right-5 bottom-5 grid size-11 place-items-center rounded-full bg-paper transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight aria-hidden="true" className="size-5" />
                <span className="sr-only">View {active.name}</span>
              </span>
            </Link>
            <figcaption className="mt-3.5 flex justify-between gap-4 eyebrow">
              <span>{active.name}</span>
              <span className="text-muted">{active.category}</span>
            </figcaption>
          </figure>
        )}

        <div className="flex flex-col">
          <ul>
            {visible.map((p) => (
              <li key={p.slug} className="border-b border-line last:border-0">
                <Link
                  href={`/work/${p.slug}`}
                  aria-current={p.slug === active?.slug ? 'true' : undefined}
                  onMouseEnter={() => setActiveSlug(p.slug)}
                  onFocus={() => setActiveSlug(p.slug)}
                  onClick={(e) => openModal(e, p)}
                  className="group grid min-h-14 grid-cols-[2rem_minmax(0,1fr)_1.5rem] items-center gap-3 py-3 transition-colors hover:text-klein aria-[current]:text-klein xl:min-h-17"
                >
                  <span className="font-mono text-[10px] text-muted">
                    {p.number}
                  </span>
                  <span className="text-2xl leading-tight md:text-[27px] xl:text-[34px]">
                    {p.name}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="opacity-0 transition-opacity group-hover:opacity-100 group-aria-[current]:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-auto flex justify-between pt-6 eyebrow text-muted">
            <span>A selection of things we&apos;ve made.</span>
            <ArrowDown aria-hidden="true" className="size-3.5" />
          </p>
        </div>
      </div>

      <ProjectModal projects={projects} />
    </>
  );
}
