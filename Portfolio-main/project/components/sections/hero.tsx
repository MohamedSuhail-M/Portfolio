'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';
import { gsap, EASE } from '@/hooks/use-scroll-reveal';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/MohamedSuhail-M',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamedsuhail2101/',
    Icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:suhi6462@gmail.com',
    Icon: Mail,
  },
];

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      gsap.set(el.querySelectorAll('[data-hero]'), { opacity: 1, y: 0, filter: 'blur(0px)' });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: EASE } });
      tl.from('[data-hero="badge"]', { opacity: 0, y: 12, duration: 0.5 })
        .from('[data-hero="greeting"]', { opacity: 0, y: 12, duration: 0.4 }, '-=0.2')
        .from(
          '[data-hero="name"]',
          { opacity: 0, y: 24, filter: 'blur(12px)', duration: 0.7 },
          '-=0.15'
        )
        .from(
          '[data-hero="headline"]',
          { opacity: 0, y: 20, filter: 'blur(10px)', duration: 0.7 },
          '-=0.4'
        )
        .from('[data-hero="desc"]', { opacity: 0, y: 16, duration: 0.5, delay: 0.2 }, '-=0.3')
        .from('[data-hero="cta"]', { opacity: 0, y: 14, duration: 0.5 }, '-=0.2')
        .from('[data-hero="social"]', { opacity: 0, y: 10, duration: 0.4 }, '-=0.2');

      // Scroll-scrubbed zoom on the background image:
      // zooms IN as you scroll DOWN, zooms OUT as you scroll back UP.
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1 },
          {
            scale: 1.8,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background poster — scroll-scrubbed zoom (in on scroll down, out on scroll up) */}
      <div ref={bgRef} className="pointer-events-none absolute inset-0 -z-20 will-change-transform">
        <Image
          src="/ChatGPT_Image_Aug_9,_2026,_07_46_57_PM.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Warm wash overlay to harmonize with orange/white palette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#f5f1e9]/82" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#f5f1e9]/60 via-[#f5f1e9]/30 to-[#f5f1e9]/90" />

      {/* Soft brand glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-brand-orange/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[480px] w-[480px] rounded-full bg-brand-blue/15 blur-[120px]" />
      </div>

      <div className="container-portfolio grid grid-cols-1 items-center gap-12 lg:gap-8">
        {/* Full-width content column */}
        <div className="lg:col-span-12 max-w-3xl">
          <div
            data-hero="badge"
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue/35 bg-brand-orange/15 px-3.5 py-1.5 text-[14px] font-semibold text-brand-blue backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue" />
            </span>
            Available for AI &amp; Data Science Opportunities
          </div>

          <p data-hero="greeting" className="mt-6 text-[16px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
            Hi, I&apos;m
          </p>

          <h1
            data-hero="name"
            className="mt-1 font-heading text-[44px] font-bold uppercase leading-[0.95] tracking-tight text-[#271f19] sm:text-[56px] lg:text-[72px]"
          >
            Mohamed Suhail M
          </h1>

          <h2
            data-hero="headline"
            className="mt-5 max-w-2xl font-heading text-[24px] font-semibold leading-tight text-balance text-[#3a2c22] sm:text-[32px] lg:text-[40px]"
          >
            Building{' '}
            <span className="text-brand-blue">AI-powered, data-driven</span>{' '}
            solutions that transform raw data into meaningful decisions.
          </h2>

          <p
            data-hero="desc"
            className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#6c5d50] sm:text-[18px]"
          >
            I&apos;m a Computer Science student specializing in Artificial
            Intelligence with hands-on experience in Data Science, Machine
            Learning, Power BI, and SQL. I enjoy solving real-world problems
            through analytics, predictive modeling, and interactive dashboards
            while continuously expanding my expertise in AI and business
            intelligence.
          </p>

          <div
            data-hero="cta"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-[16px] font-bold uppercase tracking-wide text-[#fffaf2] transition-all hover:bg-brand-orange hover:shadow-[0_0_32px_-6px_rgba(183,94,35,0.8)]"
            >
              View Projects
              <ArrowDown
                size={18}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="/Mohamed_Suhail_M_-_Resume_(1)._(1)_(1).pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-blue/30 bg-[#fffaf2]/70 px-6 py-3.5 text-[16px] font-bold uppercase tracking-wide text-brand-blue backdrop-blur-sm transition-all hover:border-brand-blue hover:bg-[#fffaf2]"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>

          <div
            data-hero="social"
            className="mt-8 flex items-center gap-3"
          >
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-blue/25 bg-[#fffaf2]/60 text-brand-blue backdrop-blur-sm transition-all hover:border-brand-blue hover:bg-brand-orange/15 hover:shadow-[0_0_20px_-6px_rgba(183,94,35,0.6)]"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-brand-blue/30 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-brand-blue/50" />
        </div>
      </div>
    </section>
  );
}
