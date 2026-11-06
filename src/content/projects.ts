import imageSizes from '@/lib/image-manifest.json';

export const CATEGORIES = ['Web development', 'Photography'] as const;
export type Category = (typeof CATEGORIES)[number];

export interface Media {
  src: string;
  alt: string;
  kind: 'image' | 'video';
  width?: number;
  height?: number;
  /** Tiny base64 preview shown while the image loads */
  blur?: string;
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
  /**
   * Alt text per file name (no extension), shared by cover and gallery.
   * Describe what's in the frame; the page already names the project.
   */
  alt: Record<string, string>;
};

const images: Record<string, { width: number; height: number; blur: string }> =
  imageSizes;

// scripts/images.mjs only handles images; videos declare their size here so
// the page reserves their space before they load.
const videos: Record<string, { width: number; height: number }> = {
  '/videos/treebrothers.webm': { width: 1280, height: 720 },
};

const fileName = (src: string) => src.replace(/^.*\/|\.[^.]+$/g, '');

function media(src: string, alts: Record<string, string>): Media {
  const kind = /\.(webm|mp4)$/.test(src) ? 'video' : 'image';
  const size = kind === 'video' ? videos[src] : images[src];
  if (!size) {
    throw new Error(
      kind === 'video'
        ? `${src}: add its width and height to \`videos\` in src/content/projects.ts`
        : `${src}: not in the image manifest. Is it in assets${src}? Run \`pnpm images\`.`
    );
  }
  const alt = alts[fileName(src)];
  if (!alt)
    throw new Error(`${src}: add its alt text to the project's \`alt\``);
  return {
    src,
    alt,
    kind,
    ...size,
  };
}

const PROJECTS: ProjectInput[] = [
  {
    slug: 'columbia-zentir',
    name: 'Columbia × Zentir',
    category: 'Photography',
    year: '2025',
    description:
      'Photography session for Columbia x Zentir. Outdoor adventure through Chorreras de San Mamés in the Sierra de Madrid, organized by Columbia and Grupo Zentir. Capturing the energy, landscapes, and authentic moments of the trail experience.',
    galleryColumns: 2,
    alt: {
      columbia1: 'Hand setting an orange Columbia water bottle down on a rock',
      columbia2:
        'Hiker in an orange cap walking through a snow-dusted pine forest',
      columbia3: 'Boot prints pressed into fresh snow beside the trail',
      columbia4:
        'Hiker in a wide-brimmed hat crouching on the snowy trail to take a photo',
      columbia5:
        'Patterned trousers and hiking boots stepping down a snowy slope',
      columbia6:
        'Two hikers in beanies at a viewpoint over the valleys of the Sierra de Madrid',
      columbia7: 'Group of hikers crossing a snowy stream among tall pines',
      columbia8: 'Line of hikers on the trail, seen through pine branches',
      columbia9:
        'Hikers crossing an open meadow, framed by the bare branches of an oak',
      columbia10: 'Tall pine trunks rising from a snow-covered forest floor',
      columbia11:
        'Hiker seen from behind with a Columbia backpack and orange trekking poles',
      columbia12: 'Looking down at a hiker’s trainers on a snowy, grassy path',
    },
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
    alt: {
      circa1:
        'CIRCA brand overview: the wordmark on black and on white, and the circular arrow symbol',
      circa2: 'Desktop pages of the CIRCA website laid out side by side',
      circa3: 'CIRCA homepage with its oversized green wordmark',
      circa5:
        'Grid of CIRCA website screens: home, services, partners, about and contact',
      circa6:
        'Four phones showing the CIRCA mobile site: home, testimonials, partners and footer',
      circa7:
        'CIRCA livery on a green tipper truck and a set of business cards',
    },
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
    alt: {
      tree: 'Heap of collected Christmas trees in the corner of a white room',
      tree1:
        'Two Tree Brothers web pages: “Removing and Recycling Christmas trees” and the team',
      treebrothers:
        'Animated loop: two figures placing a star on a Christmas tree, then the CIRCA and ORNA logos',
      treeshop:
        'Laptop showing the Tree Brothers “Order now” page with tree sizes and prices',
      ornacirca:
        'Close-up of pine needles next to a decorated Christmas tree at an outdoor market',
    },
    cover: '/images/tree-brothers/tree.webp',
    gallery: [
      '/images/tree-brothers/tree1.webp',
      '/videos/treebrothers.webm',
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
    alt: {
      orna: 'Soft-focus yellow flowers and pine needles, imagery from the Orna Group site',
      orna1:
        'Orna Group visuals: a motion-blurred pine forest, green streaks and a botanical shape on orange',
      orna2:
        'Discarded Christmas trees heaped in a white gallery, and a hand holding a ball of pressed needles',
      orna_phone:
        'Hand holding a phone showing the Orna Group homepage: “Optimised Reused Natural Assets”',
    },
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
    alt: {
      scandic: 'Carpet in red, orange and slate-blue stripes and blocks',
      scandic1:
        'Hotel lounge with a wavy mirror, a striped carpet and a reading lamp',
      scandic2:
        'Orange prize wheel above a red foosball table, and a close-up of the foosball players',
      scandic3:
        'Hotel signage: room 009 in a dark corridor, a lit Scandic Go sign and a “Chat box” sign',
      scandic4:
        'Brass pendant lamps against an orange wall and a ribbed glass partition',
      scandic5:
        'Yellow neon sign above stools on an orange wall, and a sculptural yellow coat hook',
    },
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
    alt: {
      duplat1:
        'Hands arranging platters painted with tinned-fish labels among grapes and lemons',
      duplat2:
        'White plate painted with a golf cart, on grass beside golf balls',
      duplat3:
        'Place setting with a plate painted with a golf flag on a linen tablecloth',
      duplat4:
        'Platters painted with anchovy and mussel tins on a wooden board with lemons and grapes',
      duplat5:
        'Plate painted with a ski lift on a woven placemat, with artichokes and chestnuts',
      duplat6:
        'Round wooden table set with Duplat ceramics in a bright room with a checkerboard floor',
      duplat7:
        'Christmas trays painted with a nutcracker, a carousel, a sweet and ice skaters on a tartan cloth',
      duplat8:
        'Hand placing a tray painted with “Feliz Navidad” among other Christmas ceramics',
    },
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
    alt: {
      grosso: 'Server carrying a pizza through the crowd at the launch party',
      grosso1:
        'A pizza served to the crowd, and a pizzaiolo passing a pizza out of the open kitchen',
      grosso2:
        'Pink cocktails with mint, a red neon sign reading “Non passare” and a DJ at the decks',
      grosso3: 'Staff T-shirt printed with “Fraternitas Secretum Napoletana”',
      grosso4:
        'Guests taking slices from a plate, and a pizzaiolo at the wood-fired oven',
    },
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
    alt: {
      appetit:
        'Hand holding a lit candle in a ceramic vessel with an embossed bee lid',
      appetit2:
        'Workshop tray with a pouring jug, thermometer, scale and a bowl of wax',
      appetit3:
        'Glass of wax flakes being weighed on a scale on a branded tray',
      appetit4: 'Pan of melted wax on a digital scale reading 100.1',
      appetit5:
        'Overhead view of finished candles in colourful sculpted vessels',
      appetit6:
        'Textured candle vessels in muted colours around the workshop menu card',
      appetit7:
        'Hand lifting the scalloped lilac lid off a candle among other finished pieces',
      appetit8: 'Workshop guest stirring pink pigment into wax',
      appetit9: 'Workshop guest holding a cream ceramic vessel over the table',
      appetit10:
        'Workshop guest measuring fragrance with a syringe into a glass on a scale',
    },
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
    alt: {
      alex: 'Red neon straight-razor sign on a teal wall',
      alex1:
        'Barber trimming a client’s neckline, and a patterned cape draped over the chair',
      alex2:
        'Drawing of a house on a teal chair, a shelf of vinyl records and the neon razor sign',
      alex3:
        'Tattooed barber using clippers on a client in a pink printed cape',
      alex4:
        'A haircut in the teal barbershop, seen in the mirror and through the window',
    },
    cover: '/images/donde-alex/alex.webp',
    gallery: [1, 2, 3, 4].map((n) => `/images/donde-alex/alex${n}.webp`),
  },
];

export const projects: Project[] = PROJECTS.map(({ alt, ...p }, i) => {
  const used = new Set([p.cover, ...p.gallery].map(fileName));
  const stale = Object.keys(alt).filter((name) => !used.has(name));
  if (stale.length) {
    throw new Error(
      `${p.slug}: alt text for unused files: ${stale.join(', ')}`
    );
  }
  return {
    ...p,
    number: String(i + 1).padStart(2, '0'),
    cover: media(p.cover, alt),
    gallery: p.gallery.map((src) => media(src, alt)),
  };
});

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
