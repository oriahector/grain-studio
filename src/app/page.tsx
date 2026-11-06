import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/home/Masthead';
import { ProjectExplorer } from '@/components/home/ProjectExplorer';
import { Studio } from '@/components/home/Studio';
import { ClientMarquee } from '@/components/home/ClientMarquee';
import { Contact } from '@/components/home/Contact';
import { JsonLd } from '@/components/JsonLd';
import { PageTransition } from '@/components/PageTransition';
import { projects } from '@/content/projects';
import { organizationSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// The quick view (a client component) needs every project's gallery, so it
// all travels in the home's HTML. Gallery blur placeholders aren't worth
// those bytes there; covers and the project pages keep theirs.
const explorerProjects = projects.map((p) => ({
  ...p,
  gallery: p.gallery.map(({ blur: _blur, ...media }) => media),
}));

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <Header showLogo={false} />
      <PageTransition>
        <main className="container-page">
          <Masthead />
          <section
            id="work"
            aria-labelledby="work-heading"
            className="border-t border-line"
          >
            <ProjectExplorer projects={explorerProjects} />
          </section>
          <Studio />
          <ClientMarquee />
          <Contact />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
