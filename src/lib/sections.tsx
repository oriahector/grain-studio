export const SECTION_IDS = [
  'hero',
  'works',
  'services',
  'clients',
  'contact',
] as const;
export type SectionId = (typeof SECTION_IDS)[number];
