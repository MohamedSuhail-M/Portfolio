'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  start?: string;
  end?: string;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.15,
  baseRotation = 1.5,
  blurStrength = 2.5,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  start,
  end,
  as: Component = 'div',
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const isTextMode = typeof children === 'string';

  const splitText = useMemo(() => {
    if (!isTextMode) {
      return null;
    }
    const text = children as string;
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children, isTextMode]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const ctx = gsap.context(() => {
      if (isTextMode) {
        // Text mode: Animate container rotation and split words
        gsap.fromTo(
          el,
          { transformOrigin: '0% 50%', rotate: baseRotation },
          {
            ease: 'none',
            rotate: 0,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: start || 'top bottom',
              end: end || rotationEnd,
              scrub: true,
            },
          }
        );

        const wordElements = el.querySelectorAll('.word');
        if (wordElements.length > 0) {
          gsap.fromTo(
            wordElements,
            { opacity: baseOpacity, willChange: 'opacity' },
            {
              ease: 'none',
              opacity: 1,
              stagger: 0.05,
              scrollTrigger: {
                trigger: el,
                scroller,
                start: start || 'top bottom-=20%',
                end: end || wordAnimationEnd,
                scrub: true,
              },
            }
          );

          if (enableBlur) {
            gsap.fromTo(
              wordElements,
              { filter: `blur(${blurStrength}px)` },
              {
                ease: 'none',
                filter: 'blur(0px)',
                stagger: 0.05,
                scrollTrigger: {
                  trigger: el,
                  scroller,
                  start: start || 'top bottom-=20%',
                  end: end || wordAnimationEnd,
                  scrub: true,
                },
              }
            );
          }
        }
      } else {
        // Section / Page mode: Smooth scroll reveal for entire page blocks
        const triggerStart = start || 'top 95%';
        const triggerEnd = end || (rotationEnd !== 'bottom bottom' ? rotationEnd : 'top 65%');

        gsap.fromTo(
          el,
          {
            transformOrigin: '50% 20%',
            rotate: baseRotation,
            opacity: baseOpacity,
            y: 30,
            filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
            willChange: 'transform, opacity, filter',
          },
          {
            ease: 'power2.out',
            rotate: 0,
            opacity: 1,
            y: 0,
            filter: enableBlur ? 'blur(0px)' : 'none',
            scrollTrigger: {
              trigger: el,
              scroller,
              start: triggerStart,
              end: triggerEnd,
              scrub: 0.8,
              onLeave: () => {
                // Clear filter property when settled for razor-sharp text clarity
                gsap.set(el, { clearProps: 'filter,willChange' });
              },
              onEnterBack: () => {
                if (enableBlur) {
                  gsap.set(el, { filter: 'blur(0px)', willChange: 'transform, opacity, filter' });
                }
              },
            },
          }
        );
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
    isTextMode,
    start,
    end,
  ]);

  if (isTextMode) {
    return (
      <h2
        ref={containerRef as React.RefObject<HTMLHeadingElement>}
        className={`scroll-reveal scroll-reveal-text-mode ${containerClassName}`.trim()}
      >
        <p className={`scroll-reveal-text ${textClassName}`.trim()}>{splitText}</p>
      </h2>
    );
  }

  const Tag = Component;

  return (
    <Tag
      ref={containerRef}
      className={`scroll-reveal ${containerClassName}`.trim()}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
