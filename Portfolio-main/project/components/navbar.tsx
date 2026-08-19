'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    ) as Element[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-brand-blue/15 bg-[#f5f1e9]/85 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <nav className="container-portfolio flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          className="group relative h-10 w-10 overflow-hidden rounded-xl border border-brand-blue/30 bg-[#fffaf2]/60 backdrop-blur-sm transition-all hover:border-brand-blue hover:shadow-[0_0_20px_-6px_rgba(183,94,35,0.6)]"
          aria-label="Mohamed Suhail M — home"
        >
          <Image
            src="/images/profile/WhatsApp_Image_2026-07-19_at_7.52.57_PM_(1) copy.jpeg"
            alt="Mohamed Suhail M"
            fill
            sizes="40px"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
          />
          <span className="pointer-events-none absolute inset-0 rounded-xl bg-brand-orange/0 transition-colors group-hover:bg-brand-orange/15" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'relative rounded-lg px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors',
                    isActive
                      ? 'text-brand-blue'
                      : 'text-[#6c5d50] hover:text-brand-blue'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#fffaf2] transition-all hover:bg-brand-orange hover:shadow-[0_0_24px_-6px_rgba(183,94,35,0.7)] md:inline-flex"
        >
          Get in touch
        </a>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-blue/25 bg-[#fffaf2]/60 text-brand-blue backdrop-blur-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-brand-blue/15 bg-[#f5f1e9]/95 backdrop-blur-xl transition-all duration-300 md:hidden',
          open ? 'max-h-[420px]' : 'max-h-0'
        )}
      >
        <ul className="container-portfolio flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-lg px-4 py-3 text-base font-bold uppercase tracking-wide transition-colors',
                  active === link.href
                    ? 'bg-brand-orange/15 text-brand-blue'
                    : 'text-[#6c5d50] hover:text-brand-blue'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-brand-blue px-4 py-3 text-center text-base font-bold uppercase tracking-wide text-[#fffaf2]"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
