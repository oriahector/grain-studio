/**
 * Reusable animation configurations
 */
import { MOTION_DURATIONS } from '@/config/constants';

// Easing functions
export const easings = {
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  easeOutQuart: [0.22, 1, 0.36, 1] as const,
  easeInOut: [0.42, 0, 0.58, 1] as const,
};

// Common animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: MOTION_DURATIONS.SLOWER,
    ease: easings.easeOutExpo,
  },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: MOTION_DURATIONS.SLOW,
    ease: easings.easeOutExpo,
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: MOTION_DURATIONS.NORMAL,
    ease: easings.easeOutExpo,
  },
};

// Floating animation for logos/dots (reusable)
export const floatAnimation = {
  x: [0, 2, -2, 0],
  y: [0, -3, 1, 0],
  transition: {
    x: {
      duration: MOTION_DURATIONS.FLOAT_X,
      repeat: Infinity,
      ease: easings.easeInOut,
    },
    y: {
      duration: MOTION_DURATIONS.FLOAT_Y,
      repeat: Infinity,
      ease: easings.easeInOut,
    },
  },
};

// Stagger animation helper
export const getStaggerAnimation = (index: number, delay = 0.1) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: MOTION_DURATIONS.SLOWER,
    delay: index * delay,
    ease: easings.easeOutExpo,
  },
});

// Gallery item animation (used in Works modal)
export const getGalleryItemAnimation = (
  index: number,
  staggerDelay: number,
  initialDelay: number
) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: index * staggerDelay + initialDelay,
    duration: MOTION_DURATIONS.SLOW,
    ease: easings.easeOutQuart,
  },
});
