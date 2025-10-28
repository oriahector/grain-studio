// EmailJS Configuration
export const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
} as const;

// Social Links
export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/wearegrainstudio',
    icon: 'InstagramIcon',
  },
] as const;

// Services
export const SERVICES = [
  'Web Design',
  '& Development',
  'Brand Strategy',
  'Photography',
  'UGC Content',
] as const;

// Animation Durations
export const ANIMATION_DURATIONS = {
  PANEL: 520,
  OVERLAY: 320,
  FADE_IN: 1500,
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;
