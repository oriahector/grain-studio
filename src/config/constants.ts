// EmailJS Configuration
export const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
} as const;

// Services
export const SERVICES = [
  'Web Design',
  '& Development',
  'Brand Strategy',
  'Photography',
  'UGC Content',
] as const;

// Animation Durations (in milliseconds)
export const ANIMATION_DURATIONS = {
  PANEL: 520,
  OVERLAY: 320,
  FADE_IN: 1500,
  FAST: 150,
  NORMAL: 300,
  SLOW: 800,
  SLOWEST: 1500,
} as const;

// Animation Durations for Motion (in seconds)
export const MOTION_DURATIONS = {
  FAST: 0.15,
  NORMAL: 0.3,
  SLOW: 0.6,
  SLOWER: 0.8,
  SLOWEST: 1.5,
  LAYOUT: 2,
  FLOAT_X: 4,
  FLOAT_Y: 3,
} as const;
