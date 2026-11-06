export const SITE = {
  name: 'Grain Studio',
  url: 'https://wearegrainstudio.com',
  title: 'Grain Studio — Digital experiences & photography',
  description:
    'Independent creative studio by Héctor and Clara. Web design & development, brand strategy, photography and UGC content — grain by grain, with rhythm & precision.',
  instagram: 'https://www.instagram.com/wearegrainstudio/',
  founders: [
    { name: 'Héctor', linkedin: 'https://www.linkedin.com/in/hmartinezoria/' },
    { name: 'Clara', linkedin: 'https://www.linkedin.com/in/clara-morrondo/' },
  ],
} as const;

/**
 * sRGB versions of the color tokens in globals.css, for what can't read CSS:
 * theme-color, the web manifest and the generated OG images.
 */
export const BRAND = {
  paper: '#f8f7f5',
  ink: '#1c1c1b',
  muted: '#6f6f6c',
  klein: '#002fa7',
} as const;
