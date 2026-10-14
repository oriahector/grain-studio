import { ArrowUpRight } from 'lucide-react';
import { SITE } from '@/config/site';

export function Footer() {
  return (
    <footer className="container-page">
      <div className="flex flex-wrap justify-between gap-5 border-t border-line py-5.5 eyebrow">
        <span>© {new Date().getFullYear()} Grain Studio</span>
        <span className="text-muted">With rhythm & precision.</span>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 hover:text-klein"
        >
          Instagram
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </a>
      </div>
    </footer>
  );
}
