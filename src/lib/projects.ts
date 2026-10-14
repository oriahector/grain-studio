import imageSizes from './image-manifest.json';

export const CATEGORIES = ['Web development', 'Photography'] as const;
export type Category = (typeof CATEGORIES)[number];

export interface Media {
  src: string;
  alt: string;
  kind: 'image' | 'video';
  width?: number;
  height?: number;
}

export interface Project {
  slug: string;
  number: string;
  name: string;
  category: Category;
  year: string;
  description: string;
  url?: string;
  cover: Media;
  gallery: Media[];
  galleryColumns: 1 | 2;
}

type ProjectInput = Omit<Project, 'number' | 'cover' | 'gallery'> & {
  cover: string;
  gallery: string[];
};

const sizes: Record<string, { width: number; height: number }> = imageSizes;

const media = (name: string, src: string, index?: number): Media => ({
  src,
  alt: index === undefined ? name : `${name}, image ${index + 1}`,
  kind: /\.(webm|mp4)$/.test(src) ? 'video' : 'image',
  ...sizes[src],
});

const PROJECTS: ProjectInput[] = [
  {
    slug: 'columbia-zentir',
    name: 'Columbia × Zentir',
    category: 'Photography',
    year: '2025',
    description:
      'Photography session for Columbia x Zentir. Outdoor adventure through Chorreras de San Mamés in the Sierra de Madrid, organized by Columbia and Grupo Zentir. Capturing the energy, landscapes, and authentic moments of the trail experience.',
    galleryColumns: 2,
    cover: '/images/columbia-zentir/columbia1.webp',
    gallery: Array.from(
      { length: 12 },
      (_, i) => `/images/columbia-zentir/columbia${i + 1}.webp`
    ),
  },
  {
    slug: 'circa-waste',
    name: 'Circa Waste',
    category: 'Web development',
    year: '2025',
    // TODO: currently a copy of Orna Group's description — needs its own copy.
    description:
      "Full development of Orna Group's UK website, showcasing their circular process that transforms Christmas trees into eco-friendly products. Modern design with smooth animations and an intuitive user experience.",
    url: 'https://www.circawaste.com/',
    galleryColumns: 1,
    cover: '/images/circa-waste/circa5.webp',
    gallery: [3, 1, 2, 6, 7].map((n) => `/images/circa-waste/circa${n}.webp`),
  },
  {
    slug: 'tree-brothers',
    name: 'Tree Brothers',
    category: 'Web development',
    year: '2025',
    description:
      'Developed the digital platform for Tree Brothers, highlighting their eco-friendly Christmas tree collection and recycling services. Focused on a warm, approachable design and a seamless customer journey.',
    url: 'https://www.treebrothersltd.com/',
    galleryColumns: 1,
    cover: '/images/tree-brothers/tree.webp',
    gallery: [
      '/images/tree-brothers/tree1.webp',
      '/images/tree-brothers/treebrothers.webm',
      '/images/tree-brothers/treeshop.webp',
      '/images/tree-brothers/tree.webp',
      '/images/tree-brothers/ornacirca.webp',
    ],
  },
  {
    slug: 'orna-group',
    name: 'Orna Group',
    category: 'Web development',
    year: '2025',
    description:
      "Full development of Orna Group's UK website, showcasing their circular process that transforms Christmas trees into eco-friendly products. Modern design with smooth animations and an intuitive user experience.",
    url: 'https://www.ornagroup.com/',
    galleryColumns: 1,
    cover: '/images/orna-group/orna_phone.webp',
    gallery: ['orna2', 'orna_phone', 'orna', 'orna1'].map(
      (n) => `/images/orna-group/${n}.webp`
    ),
  },
  {
    slug: 'scandicgo',
    name: 'ScandicGo',
    category: 'Photography',
    year: '2025',
    description:
      "Content photography for Scandic Go Stockholm, reflecting the hotel's personality and the welcoming, contemporary style of the Scandic brand.",
    galleryColumns: 1,
    cover: '/images/scandic-go/scandic.webp',
    gallery: [1, 2, 3, 4, 5].map((n) => `/images/scandic-go/scandic${n}.webp`),
  },
  {
    slug: 'duplat',
    name: 'Duplat',
    category: 'Photography',
    year: '2025',
    description:
      'Photography session for Duplat, capturing the artisanal process and exquisite details of their handcrafted new ceramic pieces. Emphasized the textures, colors, and unique characteristics that define Duplat’s brand identity.',
    galleryColumns: 2,
    cover: '/images/duplat/duplat1.webp',
    gallery: [1, 2, 5, 7, 4, 3, 6, 8].map(
      (n) => `/images/duplat/duplat${n}.webp`
    ),
  },
  {
    slug: 'grosso-napoletano',
    name: 'Grosso Napoletano',
    category: 'Photography',
    year: '2025',
    description:
      "Event photography for Grosso Napoletano's unveiling of a limited-edition pizza. The session highlighted the craftsmanship, lively ambiance, and brand personality through candid and detail-rich shots.",
    galleryColumns: 1,
    cover: '/images/grosso-napoletano/grosso.webp',
    gallery: [1, 2, 3, 4].map(
      (n) => `/images/grosso-napoletano/grosso${n}.webp`
    ),
  },
  {
    slug: 'appetit-candle-lab',
    name: 'Appetit Candle Lab',
    category: 'Photography',
    year: '2025',
    description:
      'Photography session for Appetit Candle Lab, capturing the essence of their handcrafted candles. Focused on highlighting the textures, colors, and ambiance created by the candles to enhance brand storytelling.',
    galleryColumns: 2,
    cover: '/images/appetit/appetit.webp',
    gallery: ['', 6, 3, 2, 4, 5, 7, 8, 9, 10].map(
      (n) => `/images/appetit/appetit${n}.webp`
    ),
  },
  {
    slug: 'donde-alex',
    name: 'Donde Álex',
    category: 'Photography',
    year: '2025',
    description:
      "Lifestyle photoshoot for a men's barbershop, capturing the textures, precision, and character of the space to build engaging social media content.",
    galleryColumns: 1,
    cover: '/images/donde-alex/alex.webp',
    gallery: [1, 2, 3, 4].map((n) => `/images/donde-alex/alex${n}.webp`),
  },
];

export const projects: Project[] = PROJECTS.map((p, i) => ({
  ...p,
  number: String(i + 1).padStart(2, '0'),
  cover: media(p.name, p.cover),
  gallery: p.gallery.map((src, index) => media(p.name, src, index)),
}));

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
