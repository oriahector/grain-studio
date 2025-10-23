// EmailJS Configuration
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_jal7ujh',
  TEMPLATE_ID: 'template_z527x3l',
  PUBLIC_KEY: '_3QOseFGEi4azjh7v'
} as const

// Social Links
export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/wearegrainstudio',
    icon: 'InstagramIcon'
  }
] as const

// Services
export const SERVICES = [
  'Web Design',
  '& Development',
  'Brand Strategy',
  'Photography',
  'UGC Content'
] as const

// Animation Durations
export const ANIMATION_DURATIONS = {
  PANEL: 520,
  OVERLAY: 320,
  FADE_IN: 1500
} as const

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
} as const
