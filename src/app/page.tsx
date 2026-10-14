import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/home/Masthead';
import { ProjectExplorer } from '@/components/home/ProjectExplorer';
import { Studio } from '@/components/home/Studio';
import { ClientMarquee } from '@/components/home/ClientMarquee';
import { Contact } from '@/components/home/Contact';
import { JsonLd } from '@/components/JsonLd';
import { projects } from '@/lib/projects';
import { organizationSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <Header showLogo={false} />
      <main className="container-page">
        <Masthead />
        <section
          id="work"
          aria-labelledby="work-heading"
          className="border-t border-line"
        >
          <ProjectExplorer projects={projects} />
        </section>
        <Studio />
        <ClientMarquee />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
