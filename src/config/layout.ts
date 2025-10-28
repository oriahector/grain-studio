/**
 * Layout Constants
 */
export const LAYOUT = {
  GRID: {
    CLIPS_PER_ROW: 4,
    ROWS: 3,
  },
  WORK: {
    HEIGHTS: [320, 420, 260, 360, 400, 300] as const,
  },
  ANIMATIONS: {
    STAGGER_DELAY: 0.1,
    GALLERY_STAGGER_DELAY: 0.08,
    GALLERY_INITIAL_DELAY: 0.15,
  },
  SCROLL: {
    SLOW_PROGRESS_MAX: 0.3,
    GRID_TRANSLATE: {
      ODD_START: '-20%',
      ODD_END: '-50%',
      EVEN_START: '-5%',
      EVEN_END: '20%',
    },
  },
} as const;
