import { SITE } from '@/config/site';
import type { Project } from './projects';

const ORG_ID = `${SITE.url}/#organization`;

export const projectUrl = (slug: string) => `${SITE.url}/work/${slug}/`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/icon.png`,
    image: `${SITE.url}/opengraph-image.png`,
    description: SITE.description,
    sameAs: [SITE.instagram],
    founder: [
      {
        '@type': 'Person',
        name: 'Héctor',
        sameAs: 'https://www.linkedin.com/in/hmartinezoria/',
      },
      {
        '@type': 'Person',
        name: 'Clara',
        sameAs: 'https://www.linkedin.com/in/clara-morrondo/',
      },
    ],
    knowsAbout: [
      'Web design',
      'Web development',
      'Brand strategy',
      'Photography',
      'UGC content',
    ],
  };
}

export function projectSchema(project: Project) {
  const url = projectUrl(project.slug);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${url}#work`,
        name: project.name,
        description: project.description,
        url,
        image: `${url}og.jpg`,
        dateCreated: project.year,
        genre: project.category,
        creator: { '@id': ORG_ID, '@type': 'Organization', name: SITE.name },
        ...(project.url && { sameAs: project.url }),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Work',
            item: `${SITE.url}/#work`,
          },
          { '@type': 'ListItem', position: 2, name: project.name, item: url },
        ],
      },
    ],
  };
}
