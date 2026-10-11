import React, { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import './PillNav.css';

export interface PillNavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface PillNavProps {
  logo?: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

export const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items = [],
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#120F17',
  hoveredPillTextColor = '#120F17',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsWrapperRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Default pillTextColor to baseColor if not provided
  const resolvedPillTextColor = pillTextColor || baseColor;

  // Find index of the currently active href
  const activeIndex = items.findIndex((item) => {
    if (!activeHref) return false;
    const itemTarget = item.href.replace(/^#/, '').toLowerCase();
    const currentTarget = activeHref.replace(/^#/, '').toLowerCase();
    if (itemTarget === currentTarget) return true;
    if ((itemTarget === 'home' || itemTarget === '/') && (currentTarget === 'hero' || currentTarget === 'home' || currentTarget === '')) return true;
    if ((itemTarget === 'work' || itemTarget === 'projects') && (currentTarget === 'projects' || currentTarget === 'work')) return true;
    return false;
  });

  // Function to move the sliding pill to target index
  const movePill = useCallback(
    (index: number, immediate: boolean = false) => {
      const targetEl = itemRefs.current[index];
      const slider = sliderRef.current;
      const wrapper = itemsWrapperRef.current;

      if (!targetEl || !slider || !wrapper) {
        if (slider && index === -1) {
          gsap.to(slider, {
            opacity: 0,
            duration: immediate ? 0 : 0.25,
            ease,
          });
        }
        return;
      }

      const wrapperRect = wrapper.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();

      if (targetRect.width === 0 || targetRect.height === 0) return;

      const left = targetRect.left - wrapperRect.left;
      const top = targetRect.top - wrapperRect.top;
      const width = targetRect.width;
      const height = targetRect.height;

      if (immediate) {
        gsap.set(slider, {
          x: left,
          y: top,
          width,
          height,
          opacity: 1,
        });
      } else {
        gsap.to(slider, {
          x: left,
          y: top,
          width,
          height,
          opacity: 1,
          duration: 0.32,
          ease,
          overwrite: 'auto',
        });
      }
    },
    [ease]
  );

  // Position pill on activeIndex change
  useEffect(() => {
    if (hoveredIndex !== null) return;

    if (activeIndex !== -1) {
      movePill(activeIndex, false);
    } else if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        opacity: 0,
        duration: 0.25,
        ease,
      });
    }
  }, [activeIndex, hoveredIndex, movePill, ease]);

  // Handle window resizing & font loading
  useEffect(() => {
    const handleResize = () => {
      const targetIdx = hoveredIndex !== null ? hoveredIndex : (activeIndex !== -1 ? activeIndex : 0);
      if (targetIdx !== -1 && targetIdx !== null) {
        movePill(targetIdx, true);
      }
    };

    window.addEventListener('resize', handleResize);
    const initialTimer = setTimeout(handleResize, 100);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(initialTimer);
    };
  }, [hoveredIndex, activeIndex, movePill]);

  // Initial load entrance animation
  useEffect(() => {
    if (!containerRef.current) return;

    if (initialLoadAnimation) {
      gsap.fromTo(
        containerRef.current,
        {
          y: -16,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease,
          onComplete: () => {
            if (activeIndex !== -1) {
              movePill(activeIndex, true);
            }
          },
        }
      );
    } else if (activeIndex !== -1) {
      movePill(activeIndex, true);
    }
  }, [initialLoadAnimation, ease, activeIndex, movePill]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    movePill(index, false);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (activeIndex !== -1) {
      movePill(activeIndex, false);
    } else if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        opacity: 0,
        duration: 0.25,
        ease,
      });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#home' || href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Custom CSS variables for colors
  const styleVars = {
    '--pill-base-color': baseColor,
    '--pill-color': pillColor,
    '--pill-text-color': resolvedPillTextColor,
    '--pill-hovered-text-color': hoveredPillTextColor,
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className={`pill-nav-container ${className}`.trim()}
      style={styleVars}
      role="navigation"
      aria-label="Pill navigation"
    >
      {/* Optional Brand Logo */}
      {logo && (
        <a
          href={items[0]?.href || '#'}
          className="pill-nav-logo-link"
          aria-label={logoAlt}
          onClick={(e) => items[0]?.href && handleLinkClick(e, items[0].href)}
        >
          <img
            src={logo}
            alt={logoAlt}
            className="pill-nav-logo-img"
            loading="lazy"
          />
        </a>
      )}

      {/* Navigation Items with Sliding Active Pill */}
      <div
        ref={itemsWrapperRef}
        className="pill-nav-items-wrapper"
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated Sliding Pill Element */}
        <div ref={sliderRef} className="pill-nav-slider" aria-hidden="true" />

        {items.map((item, index) => {
          const isItemActive = activeIndex === index;
          const isItemHovered = hoveredIndex === index;

          return (
            <a
              key={item.label + item.href}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              href={item.href}
              className={`pill-nav-item ${isItemActive ? 'is-active' : ''} ${
                isItemHovered ? 'is-hovered' : ''
              }`}
              aria-label={item.ariaLabel || item.label}
              aria-current={isItemActive ? 'page' : undefined}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Optional Mobile Menu Toggle Button */}
      {onMobileMenuClick && (
        <button
          type="button"
          className="pill-nav-mobile-btn"
          onClick={onMobileMenuClick}
          aria-label="Open navigation menu"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default PillNav;
