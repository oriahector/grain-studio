// Secciones que tienen SectionTitle con dot
export const SECTION_IDS = [
  'hero',
  'works',
  'services',
  'contact',
] as const;
export type SectionId = (typeof SECTION_IDS)[number];
