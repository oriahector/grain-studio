/**
 * Work Tags Constants
 */
export const WORK_TAGS = {
  PHOTOGRAPHY: 'PHOTOGRAPHY',
  WEB_DEVELOPMENT: 'WEB DEVELOPMENT',
} as const;

export type WorkTag = (typeof WORK_TAGS)[keyof typeof WORK_TAGS];
