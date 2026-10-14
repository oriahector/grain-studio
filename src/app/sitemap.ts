import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';
import { projects } from '@/lib/projects';
import { projectUrl } from '@/lib/structured-data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/`, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((p) => ({
      url: projectUrl(p.slug),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
      images: [`${projectUrl(p.slug)}og.jpg`],
    })),
  ];
}
