import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectDetail } from '@/components/ProjectDetail';
import { JsonLd } from '@/components/JsonLd';
import { SITE } from '@/config/site';
import { getProject, projects } from '@/lib/projects';
import { projectSchema } from '@/lib/structured-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/work/[slug]'>): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  const title = `${project.name} — ${project.category}`;
  const url = `/work/${project.slug}/`;
  return {
    title,
    description: project.description,
    alternates: { canonical: url },
    // Replaces the layout's openGraph entirely, so repeat the shared fields
    openGraph: {
      type: 'article',
      siteName: SITE.name,
      locale: 'en',
      url,
      title,
      description: project.description,
      images: [
        { url: `${url}og.jpg`, width: 1200, height: 630, alt: project.name },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.description,
      images: [`${url}og.jpg`],
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<'/work/[slug]'>) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const next = projects[(projects.indexOf(project) + 1) % projects.length]!;

  return (
    <>
      <JsonLd data={projectSchema(project)} />
      <Header />
      <main className="container-page pt-6 pb-16">
        <Link
          href="/#work"
          className="mb-10 inline-flex items-center gap-1.5 eyebrow text-[11px] hover:text-klein"
        >
          <ArrowLeft aria-hidden="true" className="size-3.5" />
          All work
        </Link>

        <ProjectDetail project={project} />

        <Link
          href={`/work/${next.slug}`}
          className="group mt-16 flex items-center justify-between border-t border-line pt-6 hover:text-klein"
        >
          <span>
            <span className="block eyebrow text-muted">Next project</span>
            <span className="text-3xl md:text-5xl">{next.name}</span>
          </span>
          <ArrowRight
            aria-hidden="true"
            strokeWidth={1.2}
            className="size-10 transition-[translate] duration-200 ease-out group-hover:translate-x-2 md:size-16"
          />
        </Link>
      </main>
      <Footer />
    </>
  );
}
