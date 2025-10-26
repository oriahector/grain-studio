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
    image: 'images/circa-waste/circa5.png',
    desc: "Full development of Orna Group's UK website, showcasing their circular process that transforms Christmas trees into eco-friendly products. Modern design with smooth animations and an intuitive user experience.",
    url: 'https://www.circawaste.com/',
    year: '2025',
    gallery: [
      { imgSrc: 'images/circa-waste/circa3.png', alt: 'Circa Waste' },
      { imgSrc: 'images/circa-waste/circa1.png', alt: 'Circa Waste' },
      { imgSrc: 'images/circa-waste/circa2.png', alt: 'Circa Waste' },
      { imgSrc: 'images/circa-waste/circa6.png', alt: 'Circa Waste' },
      { imgSrc: 'images/circa-waste/circa7.png', alt: 'Circa Waste' },
    ],
  },
  {
    title: 'TREE BROTHERS',
    tag: 'WEB DEVELOPMENT',
    image: 'images/tree-brothers/tree.jpg',
    desc: 'Developed the digital platform for Tree Brothers, highlighting their eco-friendly Christmas tree collection and recycling services. Focused on a warm, approachable design and a seamless customer journey.',
    url: 'https://www.treebrothersltd.com/',
    year: '2025',
    gallery: [
      { imgSrc: 'images/tree-brothers/tree1.png', alt: 'Tree ' },
      {
        imgSrc: 'images/tree-brothers/treebrothers.gif',
        alt: 'Tree Brothers Gif',
      },
      { imgSrc: 'images/tree-brothers/treeshop.png', alt: 'Tree ' },
      { imgSrc: 'images/tree-brothers/tree.jpg', alt: 'Tree ' },
      { imgSrc: 'images/tree-brothers/ornacirca.png', alt: 'Tree ' },
    ],
  },
  {
    title: 'ORNA Group',
    tag: 'WEB DEVELOPMENT',
    image: 'images/orna-group/orna_phone.png',
    desc: "Full development of Orna Group's UK website, showcasing their circular process that transforms Christmas trees into eco-friendly products. Modern design with smooth animations and an intuitive user experience.",
    url: 'https://www.ornagroup.com/',
    year: '2025',
    gallery: [
      { imgSrc: 'images/orna-group/orna2.png', alt: 'ORNA Group' },
      { imgSrc: 'images/orna-group/orna_phone.png', alt: 'ORNA Group' },
      { imgSrc: 'images/orna-group/orna.jpg', alt: 'ORNA Group' },
      { imgSrc: 'images/orna-group/orna1.png', alt: 'ORNA Group' },
    ],
  },
  {
    title: 'ScandicGo',
    tag: 'PHOTOGRAPHY',
    image: 'images/scandic-go/scandic.jpg',
    desc: "Content photography for Scandic Go Stockholm, reflecting the hotel's personality and the welcoming, contemporary style of the Scandic brand.",
    year: '2025',
    gallery: [
      { imgSrc: 'images/scandic-go/scandic1.png', alt: 'Scandic Go' },
      { imgSrc: 'images/scandic-go/scandic2.png', alt: 'Scandic Go' },
      { imgSrc: 'images/scandic-go/scandic3.png', alt: 'Scandic Go' },
      { imgSrc: 'images/scandic-go/scandic4.png', alt: 'Scandic Go' },
      { imgSrc: 'images/scandic-go/scandic5.png', alt: 'Scandic Go' },
    ],
  },
  {
    title: 'GROSSO NAPOLETANO',
    tag: 'PHOTOGRAPHY',
    image: 'images/grosso-napoletano/grosso.jpg',
    desc: "Event photography for Grosso Napoletano's unveiling of a limited-edition pizza. The session highlighted the craftsmanship, lively ambiance, and brand personality through candid and detail-rich shots.",
    year: '2024',
    gallery: [
      {
        imgSrc: 'images/grosso-napoletano/grosso1.png',
        alt: 'Grosso Napoletano 1',
      },
      {
        imgSrc: 'images/grosso-napoletano/grosso2.png',
        alt: 'Grosso Napoletano 2',
      },
      {
        imgSrc: 'images/grosso-napoletano/grosso3.png',
        alt: 'Grosso Napoletano 3',
      },
      {
        imgSrc: 'images/grosso-napoletano/grosso4.png',
        alt: 'Grosso Napoletano 4',
      },
    ],
  },
  {
    title: 'DONDE ÁLEX BARBERÍA',
    tag: 'PHOTOGRAPHY',
    image: 'images/donde-alex/alex.jpg',
    desc: "Lifestyle photoshoot for a men's barbershop, capturing the textures, precision, and character of the space to build engaging social media content.",
    year: '2025',
    gallery: [
      { imgSrc: 'images/donde-alex/alex1.png', alt: 'Donde Alex' },
      { imgSrc: 'images/donde-alex/alex2.png', alt: 'Donde Alex' },
      { imgSrc: 'images/donde-alex/alex3.png', alt: 'Donde Alex' },
      { imgSrc: 'images/donde-alex/alex4.png', alt: 'Donde Alex' },
    ],
  },
];
