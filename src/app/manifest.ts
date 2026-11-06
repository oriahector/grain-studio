import type { MetadataRoute } from 'next';
import { BRAND, SITE } from '@/config/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'Grain',
    description: SITE.description,
    start_url: '/',
    display: 'browser',
    background_color: BRAND.paper,
    theme_color: BRAND.klein,
    icons: [{ src: '/icon.png', sizes: '310x310', type: 'image/png' }],
  };
}
