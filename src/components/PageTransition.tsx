import { ViewTransition, type ReactNode } from 'react';

/** Transition types that links pass through `transitionTypes` */
export const NAV_FORWARD = ['nav-forward'];
export const NAV_BACK = ['nav-back'];

// Only links tagged with a direction slide; anything else (browser back,
// hash links, the quick view) swaps instantly as before.
const DIRECTIONAL = {
  'nav-forward': 'nav-forward',
  'nav-back': 'nav-back',
  default: 'none',
};

/**
 * Slides page content in the direction of travel (styles in globals.css).
 * Goes in each page, not the layout: layouts persist, so they never enter
 * or exit. Key it by the route param so same-route pages swap too.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter={DIRECTIONAL} exit={DIRECTIONAL} default="none">
      {children}
    </ViewTransition>
  );
}
