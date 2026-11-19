import type Lenis from 'lenis';

let activeLenis: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  activeLenis = instance;
}

export function scrollToSection(href: string) {
  if (href === '#home' || href === '#' || href === '#hero') {
    if (activeLenis) {
      activeLenis.scrollTo(0, { duration: 1.0 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  const target = document.querySelector<HTMLElement>(href);
  if (!target) return;

  if (activeLenis) {
    activeLenis.scrollTo(target, { offset: -68, duration: 1.0 });
  } else {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
