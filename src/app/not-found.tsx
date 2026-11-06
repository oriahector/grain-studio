import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NAV_BACK } from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="container-page flex min-h-[60vh] flex-col justify-center gap-6 py-16">
        <p className="eyebrow text-muted">Error 404</p>
        <h1 className="text-display">Lost a grain.</h1>
        <Link
          href="/"
          transitionTypes={NAV_BACK}
          className="inline-flex items-center gap-1 self-start eyebrow text-mini text-klein hover:underline hover:underline-offset-4"
        >
          Back to the studio
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </Link>
      </main>
      <Footer />
    </>
  );
}
