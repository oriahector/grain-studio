export type Item = {
  title: string
  tag: string
  image: string
  url?: string
  urlSecondary?: string
  desc?: string
  year?: string
  gallery?: { imgSrc: string; alt?: string }[]
}

export const itemsData: Item[] = [
  {
    title: 'TREE BROTHERS',
    tag: 'WEB DEVELOPMENT',
    image: '/images/tree.jpg',
    desc: 'Developed the digital platform for Tree Brothers, highlighting their eco-friendly Christmas tree collection and recycling services. Focused on a warm, approachable design and a seamless customer journey.',
    url: 'https://www.treebrothersltd.com/',
    year: '2025',
    gallery: [
      { imgSrc: '/images/tree.jpg', alt: 'Tree ' },
      { imgSrc: '/images/treebrothers.gif', alt: 'Tree Brothers Gif' },
      { imgSrc: '/images/treeshop.png', alt: 'Tree ' },
      { imgSrc: '/images/ornacirca.png', alt: 'Tree ' },
    ]
  },
  {
    title: 'GROSSO NAPOLETANO',
    tag: 'PHOTOGRAPHY',
    image: '/images/grosso.jpg',
    desc: 'Event photography for Grosso Napoletano’s unveiling of a limited-edition pizza. The session highlighted the craftsmanship, lively ambiance, and brand personality through candid and detail-rich shots.',
    year: '2024',
    gallery: [
      { imgSrc: '/images/grosso.jpg', alt: 'Grosso Napoletano 1' },
      { imgSrc: '/images/grosso2.png', alt: 'Grosso Napoletano 1' },
      { imgSrc: '/images/grosso.jpg', alt: 'Grosso Napoletano 1' },
    ]
  },
  {
    title: 'ORNA & CIRCA',
    tag: 'WEB DEVELOPMENT',
    image: '/images/orna.jpg',
    desc: 'Full development of Orna Group’s UK website, showcasing their circular process that transforms Christmas trees into eco-friendly products. Modern design with smooth animations and an intuitive user experience.',
    url: 'https://www.ornagroup.com/',
    year: '2025',
    urlSecondary: 'https://www.circawaste.com/',
    gallery: [
      { imgSrc: '/images/orna.jpg', alt: 'Tree Brothers' },
      { imgSrc: '/images/circaorna.gif', alt: 'Tree Brothers Gif' },
      { imgSrc: '/images/orna.png', alt: 'Tree Brothers Gif' },
    
    ]
  },
  {
    title: 'DONDE ÁLEX BARBERÍA',
    tag: 'PHOTOGRAPHY',
    image: '/images/alex.jpg',
    desc: 'Lifestyle photoshoot for a men’s barbershop, capturing the textures, precision, and character of the space to build engaging social media content.',
    year: '2025',
  }
]