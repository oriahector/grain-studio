import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/projects';

const navLink =
  'eyebrow inline-flex items-center gap-1 text-[11px] transition-colors hover:text-klein';

export function Header() {
  return (
    <header className="container-page flex h-18 items-center justify-between md:h-22">
      <Link
        href="/"
        className="flex items-center gap-[0.3em] text-[17px] font-bold md:text-[22px]"
      >
        {/* The spaces collapse visually in flex but keep the name "grain studio" */}
        grain{' '}
        <span aria-hidden="true" className="size-1.5 rounded-full bg-klein" />{' '}
        studio
      </Link>

      <nav aria-label="Main" className="flex gap-4 md:gap-9">
        <Link href="/#work" className={navLink}>
          Work
          <span className="text-muted">
            ({String(projects.length).padStart(2, '0')})
          </span>
        </Link>
        <Link href="/#studio" className={navLink}>
          Studio
        </Link>
        <Link href="/#contact" className={navLink}>
          Let&apos;s talk
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </Link>
      </nav>
    </header>
  );
}
