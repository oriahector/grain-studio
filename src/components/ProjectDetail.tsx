import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';
import { ProjectMedia } from './ProjectMedia';

interface Props {
  project: Project;
  /** Heading level: h1 on the project page, h2 inside the home modal */
  as?: 'h1' | 'h2';
  headingId?: string;
}

export function ProjectDetail({
  project,
  as: Heading = 'h1',
  headingId,
}: Props) {
  const twoColumns = project.galleryColumns === 2;

  return (
    <article className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
      <div className="flex flex-col gap-6 md:sticky md:top-10 md:self-start">
        <p className="eyebrow text-muted">Selected work / {project.number}</p>
        <Heading
          id={headingId}
          className="text-4xl leading-tight font-medium md:text-5xl"
        >
          {project.name}
        </Heading>
        <dl className="grid grid-cols-2 gap-4 border-y border-line py-4 eyebrow">
          <div>
            <dt className="text-muted">Discipline</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt className="text-muted">Year</dt>
            <dd>{project.year}</dd>
          </div>
        </dl>
        <p className="text-base leading-relaxed md:text-lg">
          {project.description}
        </p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 self-start eyebrow text-[11px] text-klein hover:underline hover:underline-offset-4"
          >
            Visit site
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        )}
      </div>

      <div className={twoColumns ? 'gap-4 sm:columns-2' : undefined}>
        {project.gallery.map((media, index) => (
          <ProjectMedia
            key={media.src}
            media={media}
            priority={index === 0}
            sizes={
              twoColumns
                ? '(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw'
                : '(min-width: 768px) 66vw, 100vw'
            }
            className="mb-4 h-auto w-full break-inside-avoid bg-wash"
          />
        ))}
      </div>
    </article>
  );
}
