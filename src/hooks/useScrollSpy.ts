import { useEffect, useState } from 'react';
import type { SectionId } from '@/lib/sections';

export function useScrollSpy(
  ids: SectionId[],
  rootMargin = '0px 0px -60% 0px'
) {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { root: null, rootMargin, threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids, rootMargin]);

  return active;
}
