/**
 * Navigation utilities
 */

export function scrollToSection(id: string) {
  const element = document.querySelector(`#${id}`);
  element?.scrollIntoView({ behavior: 'smooth' });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function openUrl(url: string, target: '_blank' | '_self' = '_blank') {
  window.open(url, target, 'noopener,noreferrer');
}
