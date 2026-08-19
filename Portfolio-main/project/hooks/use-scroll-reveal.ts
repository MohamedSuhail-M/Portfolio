'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

/**
 * Reveals children of a container on scroll using GSAP + ScrollTrigger.
 * Pass a scope ref and a selector for the items to animate.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  selector: string = '[data-reveal]'
) {
  const scopeRef = useRef<T | null>(null);

  useEffect(() => {
    const el = scopeRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const items = gsap.utils.toArray<HTMLElement>(el.querySelectorAll(selector));

    if (prefersReduced) {
      gsap.set(items, { opacity: 1, y: 0, filter: 'blur(0px)' });
      return;
    }

    const ctx = gsap.context(() => {
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.6,
            ease: EASE,
            delay: (i % 4) * 0.08,
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, [selector]);

  return scopeRef;
}

export { EASE, gsap };
