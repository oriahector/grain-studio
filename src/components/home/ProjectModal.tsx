'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import type { Project } from '@/lib/projects';
import { ProjectDetail } from '@/components/ProjectDetail';

/**
 * Quick view for a project on the home page. Open state lives in the URL:
 * ProjectExplorer pushes /work/slug/ and Next syncs usePathname with it,
 * so back/forward open and close the dialog for free.
 */
export function ProjectModal({ projects }: { projects: Project[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const slug = /^\/work\/([^/]+)/.exec(pathname)?.[1];
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  const close = () => router.back();

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={project ? `project-${project.slug}` : undefined}
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      className="m-0 size-full max-h-none max-w-none bg-paper p-0 text-ink backdrop:bg-ink/40 open:animate-[dialog-in_300ms_ease-out] md:m-auto md:h-[90dvh] md:w-[min(1400px,92vw)]"
    >
      {project && (
        <div className="container-page py-6 md:py-8">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href={`/work/${project.slug}`}
              className="eyebrow text-[11px] text-muted hover:text-klein"
            >
              Open project page
            </Link>
            <button
              type="button"
              onClick={close}
              className="grid size-10 cursor-pointer place-items-center rounded-full border border-line transition-colors hover:border-klein hover:text-klein"
            >
              <X aria-hidden="true" className="size-5" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          <ProjectDetail
            project={project}
            as="h2"
            headingId={`project-${project.slug}`}
          />
        </div>
      )}
    </dialog>
  );
}
