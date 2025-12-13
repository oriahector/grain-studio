import { lazy, Suspense } from 'react';
import { NavBar } from '@/components/ui/NavBar';
import { Footer } from '@/components/ui/Footer';
import { GlobalDot } from '@/components/ui/GlobalDot';
import { Hero } from '@/sections/Hero';

// Lazy load sections below the fold para mejor performance
const Works = lazy(() => import('@/sections/Works').then(m => ({ default: m.Works })));
const Services = lazy(() => import('@/sections/Services').then(m => ({ default: m.Services })));
const Clients = lazy(() => import('@/sections/Clients').then(m => ({ default: m.Clients })));
const Contact = lazy(() => import('@/sections/Contact').then(m => ({ default: m.Contact })));

// Loading fallback minimalista para lazy loaded components
const SectionLoader = () => (
  <div className="section" aria-label="Loading section">
    <div className="section-container">
      <div className="h-20" />
    </div>
  </div>
);

export default function App() {
  return (
    <>
      <GlobalDot />
      <NavBar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Works />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Clients />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
