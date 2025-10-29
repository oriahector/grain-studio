export type Item = {
  title: string;
  tag: string;
  image: string;
  url?: string;
  urlSecondary?: string;
  desc?: string;
  year?: string;
  gallery?: { imgSrc: string; alt?: string }[];
};

export const itemsData: Item[] = [
  {
    title: 'Circa Waste',
    tag: 'WEB DEVELOPMENT',
    image: 'images/circa-waste/circa5.webp',
    desc: "Full development of Orna Group's UK website, showcasing their circular process that transforms Christmas trees into eco-friendly products. Modern design with smooth animations and an intuitive user experience.",
    url: 'https://www.circawaste.com/',
    year: '2025',
    gallery: [
      { imgSrc: 'images/circa-waste/circa3.webp', alt: 'Circa Waste' },
      { imgSrc: 'images/circa-waste/circa1.webp', alt: 'Circa Waste' },
      { imgSrc: 'images/circa-waste/circa2.webp', alt: 'Circa Waste' },
      { imgSrc: 'images/circa-waste/circa6.webp', alt: 'Circa Waste' },
      { imgSrc: 'images/circa-waste/circa7.webp', alt: 'Circa Waste' },
    ],
  },
  {
    title: 'Tree Brothers',
    tag: 'WEB DEVELOPMENT',
    image: 'images/tree-brothers/tree.webp',
    desc: 'Developed the digital platform for Tree Brothers, highlighting their eco-friendly Christmas tree collection and recycling services. Focused on a warm, approachable design and a seamless customer journey.',
    url: 'https://www.treebrothersltd.com/',
    year: '2025',
    gallery: [
      { imgSrc: 'images/tree-brothers/tree1.webp', alt: 'Tree ' },
      {
        imgSrc: 'images/tree-brothers/treebrothers.gif',
        alt: 'Tree Brothers Gif',
      },
      { imgSrc: 'images/tree-brothers/treeshop.webp', alt: 'Tree Shop' },
      { imgSrc: 'images/tree-brothers/tree.webp', alt: 'Tree Brothers' },
      { imgSrc: 'images/tree-brothers/ornacirca.webp', alt: 'Orna Circa' },
    ],
  },
  {
    title: 'ORNA Group',
    tag: 'WEB DEVELOPMENT',
    image: 'images/orna-group/orna_phone.webp',
    desc: "Full development of Orna Group's UK website, showcasing their circular process that transforms Christmas trees into eco-friendly products. Modern design with smooth animations and an intuitive user experience.",
    url: 'https://www.ornagroup.com/',
    year: '2025',
    gallery: [
      { imgSrc: 'images/orna-group/orna2.webp', alt: 'ORNA Group' },
      { imgSrc: 'images/orna-group/orna_phone.webp', alt: 'ORNA Group' },
      { imgSrc: 'images/orna-group/orna.webp', alt: 'ORNA Group' },
      { imgSrc: 'images/orna-group/orna1.webp', alt: 'ORNA Group' },
    ],
  },
  {
    title: 'ScandicGo',
    tag: 'PHOTOGRAPHY',
    image: 'images/scandic-go/scandic.webp',
    desc: "Content photography for Scandic Go Stockholm, reflecting the hotel's personality and the welcoming, contemporary style of the Scandic brand.",
    year: '2025',
    gallery: [
      { imgSrc: 'images/scandic-go/scandic1.webp', alt: 'Scandic Go' },
      { imgSrc: 'images/scandic-go/scandic2.webp', alt: 'Scandic Go' },
      { imgSrc: 'images/scandic-go/scandic3.webp', alt: 'Scandic Go' },
      { imgSrc: 'images/scandic-go/scandic4.webp', alt: 'Scandic Go' },
      { imgSrc: 'images/scandic-go/scandic5.webp', alt: 'Scandic Go' },
    ],
  },
  {
    title: 'Grosso Napoletano',
    tag: 'PHOTOGRAPHY',
    image: 'images/grosso-napoletano/grosso.webp',
    desc: "Event photography for Grosso Napoletano's unveiling of a limited-edition pizza. The session highlighted the craftsmanship, lively ambiance, and brand personality through candid and detail-rich shots.",
    year: '2025',
    gallery: [
      {
        imgSrc: 'images/grosso-napoletano/grosso1.webp',
        alt: 'Grosso Napoletano 1',
      },
      {
        imgSrc: 'images/grosso-napoletano/grosso2.webp',
        alt: 'Grosso Napoletano 2',
      },
      {
        imgSrc: 'images/grosso-napoletano/grosso3.webp',
        alt: 'Grosso Napoletano 3',
      },
      {
        imgSrc: 'images/grosso-napoletano/grosso4.webp',
        alt: 'Grosso Napoletano 4',
      },
    ],
  },
  {
    title: 'Donde Álex Barbería',
    tag: 'PHOTOGRAPHY',
    image: 'images/donde-alex/alex.webp',
    desc: "Lifestyle photoshoot for a men's barbershop, capturing the textures, precision, and character of the space to build engaging social media content.",
    year: '2025',
    gallery: [
      { imgSrc: 'images/donde-alex/alex1.webp', alt: 'Donde Alex' },
      { imgSrc: 'images/donde-alex/alex2.webp', alt: 'Donde Alex' },
      { imgSrc: 'images/donde-alex/alex3.webp', alt: 'Donde Alex' },
      { imgSrc: 'images/donde-alex/alex4.webp', alt: 'Donde Alex' },
    ],
  },
];
