import React, { useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Download, 
  FileText,
  ChevronDown
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { downloadResumePdf } from '../utils/downloadResume';
import { EDUCATION } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  avatarPhoto?: string | null;
  userPhoto?: string | null;
  onPhotoUpload?: (photoUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenResume, 
  avatarPhoto,
  userPhoto
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const posterStageRef = useRef<HTMLDivElement>(null);
  const topStripRef = useRef<HTMLDivElement>(null);
  const bgTypographyRef = useRef<HTMLDivElement>(null);
  const portraitStageRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLImageElement>(null);
  const yellowArchRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Mohamed Suhail M's authentic monochrome cutout portrait
  const activePhoto = userPhoto || '/suhail-portrait-trimmed.png';

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const posterStage = posterStageRef.current;
    if (!container || !posterStage) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions || {};

        // Ensure all Hero elements start cleanly visible
        const heroEls = [
          posterStage,
          topStripRef.current,
          footerRef.current,
          bgTypographyRef.current,
          yellowArchRef.current,
          portraitStageRef.current,
          leftContentRef.current,
          rightContentRef.current,
          badgesRef.current,
        ].filter(Boolean);

        gsap.set(heroEls, { clearProps: 'opacity,visibility,transform' });

        if (reduceMotion) {
          return;
        }

        // 1. Clean Initial Load Entrance (does not touch child opacity so ScrollTrigger stays 100% synced)
        const entranceTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        entranceTl.from(posterStage, {
          opacity: 0,
          y: isDesktop ? 10 : 8,
          duration: isDesktop ? 0.55 : 0.4,
          clearProps: 'opacity,transform',
        });

        if (yellowArchRef.current) {
          entranceTl.from(
            yellowArchRef.current,
            {
              scaleY: 0.85,
              transformOrigin: 'bottom center',
              duration: isDesktop ? 0.6 : 0.45,
              ease: 'power2.out',
              clearProps: 'transform',
            },
            '<'
          );
        }

        if (isDesktop) {
          // 2. Desktop-only Curtain-Reveal Portrait Zoom
          // Hero stays sticky behind #content-curtain (zero pin-spacer blank void!).
          // As #about glides up from the bottom of the viewport (0% -> 100%),
          // every Hero text layer fades cleanly to opacity: 0 before midpoint while the portrait zooms.
          const curtainEl = document.getElementById('content-curtain');
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: curtainEl || container,
              start: curtainEl ? 'top bottom' : 'top top',
              end: curtainEl ? 'top 68px' : 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

          if (topStripRef.current) {
            scrollTl.to(topStripRef.current, { opacity: 0, y: -12, duration: 0.38, ease: 'power1.in' }, 0);
          }

          if (footerRef.current) {
            scrollTl.to(footerRef.current, { opacity: 0, y: 12, duration: 0.32, ease: 'power1.in' }, 0);
          }

          if (leftContentRef.current) {
            scrollTl.to(leftContentRef.current, { opacity: 0, x: -45, duration: 0.42, ease: 'power1.in' }, 0.02);
          }

          if (rightContentRef.current) {
            scrollTl.to(rightContentRef.current, { opacity: 0, x: 45, duration: 0.42, ease: 'power1.in' }, 0.02);
          }

          if (badgesRef.current) {
            scrollTl.to(badgesRef.current, { opacity: 0, scale: 0.92, duration: 0.38, ease: 'power1.in' }, 0.02);
          }

          if (bgTypographyRef.current) {
            scrollTl.to(bgTypographyRef.current, { opacity: 0, scale: 1.1, duration: 0.42, ease: 'power1.in' }, 0.02);
          }

          if (yellowArchRef.current) {
            scrollTl.to(yellowArchRef.current, { scale: 1.06, y: -8, duration: 0.85, ease: 'none' }, 0);
          }

          if (portraitStageRef.current) {
            scrollTl
              .to(portraitStageRef.current, { scale: 1.14, y: -16, duration: 0.75, ease: 'none' }, 0)
              .to(portraitStageRef.current, { opacity: 0, duration: 0.25, ease: 'power1.in' }, 0.65);
          }

          scrollTl.to(posterStage, { opacity: 0, duration: 0.12, ease: 'none' }, 0.88);
        }
      }
    );

    const refreshOnFonts = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refreshOnFonts).catch(() => {});

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      data-section="hero"
      className="relative md:sticky md:top-0 z-0 w-full min-h-[100svh] md:h-[100dvh] md:min-h-[650px] md:max-h-[1000px] bg-[#F5F5F2] text-[#111111] overflow-hidden select-none flex flex-col justify-between border-b border-[#111111]/15 pt-18 sm:pt-20 md:pt-[84px] lg:pt-[88px] pb-3 sm:pb-4 scroll-mt-20"
      style={{ isolation: 'isolate' }}
    >
      {/* Invisible anchor for backward-compatibility with #hero links */}
      <div id="hero" className="sr-only" aria-hidden="true" />

      {/* 
        ========================================================================
        EDITORIAL POSTER CANVAS CONTAINER
        Clean clearance beneath fixed navbar without overlapping
        ========================================================================
      */}
      <div
        ref={posterStageRef}
        className="relative w-full h-full flex-1 min-h-0 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 flex flex-col justify-between overflow-hidden"
      >
        {/* 
          ======================================================================
          OVERSIZED BACKGROUND TYPOGRAPHY: "SUHAIL"
          Extends beyond viewport boundaries and sits strictly BEHIND the portrait
          ======================================================================
        */}
        <div
          ref={bgTypographyRef}
          className="absolute inset-0 pointer-events-none select-none flex flex-col justify-center items-center overflow-hidden z-0"
          aria-hidden="true"
        >
          {/* Top repeating line */}
          <div className="font-heading font-black text-[10vw] sm:text-[11vw] lg:text-[9.5rem] leading-[0.8] tracking-tighter text-[#111111]/[0.035] uppercase whitespace-nowrap -translate-y-[22%]">
            SUHAIL · DATA SCIENCE · ARTIFICIAL INTELLIGENCE · SUHAIL
          </div>

          {/* Primary Massive "SUHAIL" Centered Directly Behind Portrait */}
          <div className="font-heading font-black text-[22vw] sm:text-[24vw] lg:text-[19rem] xl:text-[22rem] leading-[0.72] tracking-tighter text-[#111111]/[0.075] uppercase whitespace-nowrap select-none">
            SUHAIL
          </div>

          {/* Bottom repeating line */}
          <div className="font-heading font-black text-[9vw] sm:text-[10vw] lg:text-[8.5rem] leading-[0.8] tracking-tighter text-[#111111]/[0.035] uppercase whitespace-nowrap translate-y-[22%]">
            MACHINE LEARNING · PREDICTIVE ANALYTICS · NEURAL NETWORKS
          </div>
        </div>

        {/* 
          ======================================================================
          TOP EDITORIAL POSTER HEADER (METADATA STRIP)
          Positioned below the fixed navbar with generous clearance
          ======================================================================
        */}
        <div
          ref={topStripRef}
          className="relative z-30 shrink-0 w-full flex items-center justify-between pb-2.5 pt-1 border-b border-[#111111]/10 font-mono text-[10px] sm:text-xs font-bold text-[#111111]"
        >
          <div className="flex items-center gap-3">
            <span className="bg-[#111111] text-[#F5F5F2] px-2 py-0.5 uppercase tracking-widest text-[9px] sm:text-[10px]">
              ISSUE // 2026
            </span>
            <span className="tracking-wider uppercase text-[#111111]/70 hidden sm:inline">
              MOHAMED SUHAIL M · EDITORIAL DOSSIER
            </span>
          </div>

          <div className="flex items-center gap-3 text-right">
            <span className="text-[#111111]/60 font-mono text-[10px] sm:text-[11px] hidden md:inline">
              13.0827° N, 80.2707° E // CHENNAI, INDIA
            </span>
            <span className="bg-[#F4D83D] text-[#111111] px-2 py-0.5 border border-[#111111] font-bold shadow-[2px_2px_0px_#111111] uppercase tracking-wider text-[9px] sm:text-[10px]">
              AVAILABLE FOR HIRE
            </span>
          </div>
        </div>

        {/* 
          ======================================================================
          MAIN EDITORIAL POSTER BODY
          Responsive 1-col mobile -> 2-col tablet -> 3-col desktop grid
          Guarantees zero collisions between wings and center portrait
          ======================================================================
        */}
        <div className="relative flex-1 w-full min-h-0 flex flex-col md:grid md:grid-rows-[minmax(0,1fr)] md:grid-cols-[minmax(0,1.08fr)_minmax(260px,0.92fr)] lg:grid-cols-[minmax(0,1.05fr)_minmax(290px,360px)_minmax(0,0.85fr)] xl:grid-cols-[minmax(0,1.05fr)_minmax(340px,420px)_minmax(0,0.85fr)] 2xl:grid-cols-[minmax(0,1fr)_440px_minmax(0,0.9fr)] items-center lg:items-stretch justify-between gap-4 md:gap-6 xl:gap-8 pt-3 pb-0 md:py-0">
          
          {/* 
            LEFT COLUMN / WING (Z-20):
            - ASPIRING DATA SCIENTIST / ML ENGINEER
            - Bold Headline: MOHAMED SUHAIL M
            - Statement
            - Yellow & White Action CTAs
            - Tech stack pill tags
          */}
          <div
            ref={leftContentRef}
            className="relative z-20 w-full self-center flex flex-col justify-center space-y-2.5 sm:space-y-3 lg:space-y-3.5 max-w-full sm:max-w-[440px] lg:max-w-none pointer-events-auto md:py-4"
          >
            {/* Aspiring Subtitle Badge */}
            <div className="flex items-center gap-2">
              <span className="bg-[#F4D83D] text-[#111111] px-2.5 py-0.5 border border-[#111111] font-mono text-[10px] sm:text-xs font-black tracking-widest uppercase shadow-[2px_2px_0px_#111111]">
                ASPIRING
              </span>
              <span className="font-mono text-[11px] font-bold text-[#111111]/70 tracking-wider">
                // DATA SCIENCE & AI
              </span>
            </div>

            {/* Giant Bold Headline: MOHAMED SUHAIL M */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[2.85rem] xl:text-[3.5rem] 2xl:text-[3.85rem] text-[#111111] leading-[0.92] tracking-tight uppercase">
              MOHAMED<br />
              SUHAIL M
            </h1>

            {/* Role Highlight Bar */}
            <div className="inline-block self-start">
              <span className="font-heading font-extrabold text-xs sm:text-sm md:text-[15px] text-[#111111] uppercase tracking-wide bg-[#F4D83D] px-2.5 py-1 border border-[#111111] shadow-[3px_3px_0px_#111111]">
                DATA SCIENTIST / ML ENGINEER
              </span>
            </div>

            {/* Editorial Statement */}
            <p className="text-xs sm:text-sm md:text-[13.5px] xl:text-[14.5px] text-[#222222] leading-relaxed font-medium max-w-[44ch]">
              Building AI-powered, data-driven solutions that transform raw data into meaningful decisions. Specialized in predictive machine learning, deep neural networks, and interactive analytics.
            </p>

            {/* Editorial Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {/* Primary Yellow CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 lg:py-2.5 xl:py-3 bg-[#F4D83D] text-[#111111] hover:bg-[#ffe343] font-mono text-xs sm:text-[13px] font-black uppercase tracking-wider border-2 border-[#111111] shadow-[4px_4px_0px_#111111] hover:shadow-[2px_2px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>VIEW PROJECTS</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </a>

              {/* Secondary Download Resume CTA */}
              <button
                onClick={() => downloadResumePdf()}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 lg:py-2.5 xl:py-3 bg-white text-[#111111] hover:bg-[#F5F5F2] font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider border-2 border-[#111111] shadow-[4px_4px_0px_#111111] hover:shadow-[2px_2px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
                title="Download official resume PDF"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </button>

              {/* CV Modal trigger */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-bold text-[#555555] hover:text-[#111111] uppercase tracking-wider hover:underline cursor-pointer whitespace-nowrap"
                title="View interactive resume"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>[ CV ]</span>
              </button>
            </div>

            {/* Small Technical Stack Tags Strip */}
            <div className="pt-0.5 flex flex-wrap gap-1.5">
              {['PYTHON', 'SQL', 'MACHINE LEARNING', 'POWER BI'].map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 border border-[#111111] font-mono text-[9px] sm:text-[10px] font-bold text-[#111111] uppercase tracking-wider shadow-[2px_2px_0px_#111111]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 
            ====================================================================
            CENTER PIECE: MOHAMED SUHAIL M AUTHENTIC PORTRAIT (CENTER GRID TRACK)
            - Dedicated middle column in md/lg+ grid so it never overlaps wings
            - Grounded cleanly at the bottom edge above the hero footer
            ====================================================================
          */}
          <div
            ref={portraitStageRef}
            className="relative z-15 justify-self-center self-end w-[240px] sm:w-[290px] md:w-full md:max-w-[340px] lg:max-w-none h-[250px] sm:h-[300px] md:h-[min(58vh,460px)] lg:h-[92%] xl:h-[94%] flex items-end justify-center pointer-events-none mt-auto md:mt-0 shrink-0"
          >
            {/* Relative wrapper holding arch, portrait, and badges */}
            <div className="relative w-full h-full flex items-end justify-center">
              
              {/* 
                YELLOW GEOMETRIC ARCH / BACKDROP
                Centered Swiss architectural element framing Suhail cleanly
              */}
              <div
                ref={yellowArchRef}
                className="absolute inset-x-[10%] bottom-0 top-[6%] bg-[#F4D83D] rounded-t-full border-2 border-[#111111] shadow-[8px_8px_0px_#111111] overflow-hidden z-0"
              />

              {/* 
                CENTRAL VISUAL: MOHAMED SUHAIL M AUTHENTIC MONOCHROME PORTRAIT
                Grounded to the base with bottom fade mask to eliminate horizontal cut lines
              */}
              <div className="relative z-10 w-[86%] h-full flex items-end justify-center pointer-events-none">
                <img
                  ref={portraitImgRef}
                  src={activePhoto}
                  alt="Mohamed Suhail M — Aspiring Data Scientist & ML Engineer"
                  className="w-auto h-full max-h-full object-contain object-bottom select-none transition-all duration-300 pointer-events-auto"
                  style={{
                    filter: 'grayscale(100%) contrast(110%) brightness(98%) drop-shadow(0 0 2.5px rgba(255,255,255,0.95)) drop-shadow(4px 4px 16px rgba(0,0,0,0.18))',
                    maskImage: 'linear-gradient(to bottom, black calc(100% - 12px), transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black calc(100% - 12px), transparent 100%)',
                  }}
                  loading="eager"
                  onLoad={() => ScrollTrigger.refresh()}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.indexOf('whatsapp-profile') === -1) {
                      target.src = '/whatsapp-profile.jpeg';
                    }
                  }}
                />
              </div>

              {/* 
                FLOATING TECHNICAL PILL BADGES
                Contained cleanly within the center portrait column bounds
              */}
              <div ref={badgesRef} className="absolute inset-0 pointer-events-none z-20 hidden xl:block">
                {/* Python floating badge (Top Left) */}
                <div className="absolute top-[11%] left-0 bg-white px-2.5 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono text-[10px] font-black text-[#111111] uppercase tracking-wider whitespace-nowrap">
                  PYTHON 3.11
                </div>

                {/* Pandas & NumPy tag (Mid Left) */}
                <div className="absolute top-[37%] -left-3 bg-[#F4D83D] px-2.5 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono text-[10px] font-black text-[#111111] uppercase tracking-wider whitespace-nowrap">
                  PANDAS & NUMPY
                </div>

                {/* TensorFlow / Deep Learning (Bottom Left) */}
                <div className="absolute bottom-[18%] -left-1 bg-white px-2.5 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono text-[10px] font-black text-[#111111] uppercase tracking-wider whitespace-nowrap">
                  TENSORFLOW // AI
                </div>

                {/* Machine Learning badge (Top Right) */}
                <div className="absolute top-[13%] right-0 bg-white px-2.5 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono text-[10px] font-black text-[#111111] uppercase tracking-wider whitespace-nowrap">
                  MACHINE LEARNING
                </div>

                {/* SQL Queries tag (Bottom Mid Right) */}
                <div className="absolute top-[43%] -right-3 bg-[#F4D83D] px-2.5 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono text-[10px] font-black text-[#111111] uppercase tracking-wider whitespace-nowrap">
                  SQL & ETL
                </div>

                {/* Power BI badge (Bottom Right) */}
                <div className="absolute bottom-[16%] right-0 bg-white px-2.5 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono text-[10px] font-black text-[#111111] uppercase tracking-wider whitespace-nowrap">
                  POWER BI // DAX
                </div>
              </div>

            </div>
          </div>

          {/* 
            RIGHT COLUMN / WING (Z-20):
            Editorial Competencies Dossier, Location Metadata & Vertical Rules
          */}
          <div
            ref={rightContentRef}
            className="relative z-20 hidden lg:flex self-center justify-self-end flex-col items-end text-right space-y-3.5 w-full max-w-[280px] xl:max-w-[310px] pointer-events-auto md:py-4"
          >
            {/* Small vertical text block */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#111111]/60">
                DISCIPLINE // METRICS
              </span>
              <div className="w-8 h-0.5 bg-[#111111]" />
            </div>

            {/* Editorial Focus Areas Card */}
            <div className="bg-white border-2 border-[#111111] p-3.5 shadow-[4px_4px_0px_#111111] text-left w-full space-y-2.5">
              <div className="flex items-center justify-between border-b border-[#111111]/15 pb-1.5 font-mono text-[10px] font-black uppercase tracking-wider text-[#111111]">
                <span>CORE PILLARS</span>
                <span className="bg-[#F4D83D] px-1.5 py-0.2 border border-[#111111]">04 UNITS</span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px] xl:text-xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-[#111111]">01 PREDICTIVE ML</span>
                  <span className="text-[#111111]/50 text-[10px] shrink-0">SCIKIT / XGB</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-[#111111]">02 NEURAL NETWORKS</span>
                  <span className="text-[#111111]/50 text-[10px] shrink-0">TF / KERAS</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-[#111111]">03 SQL & DATA PIPELINE</span>
                  <span className="text-[#111111]/50 text-[10px] shrink-0">ETL / SCHEMAS</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-[#111111]">04 BI DASHBOARDS</span>
                  <span className="text-[#111111]/50 text-[10px] shrink-0">POWER BI</span>
                </div>
              </div>
            </div>

            {/* Academic Credential badge */}
            <div className="bg-[#F4D83D] border border-[#111111] p-2.5 shadow-[3px_3px_0px_#111111] text-right w-full">
              <div className="font-mono text-[10px] font-black uppercase text-[#111111] tracking-wider">
                {EDUCATION.degree}
              </div>
              <div className="font-mono text-[11px] font-extrabold text-[#111111] uppercase">
                {EDUCATION.major}
              </div>
              <div className="text-[10px] font-mono text-[#111111]/80 font-bold uppercase mt-0.5">
                {EDUCATION.institution}, {EDUCATION.location}
              </div>
            </div>

            {/* Editorial stamp */}
            <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-[#111111]/60">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span>CHENNAI METROPOLITAN AREA</span>
            </div>
          </div>

        </div>

        {/* 
          ======================================================================
          BOTTOM FOOTER OF THE HERO POSTER
          - Social Links (GitHub, LinkedIn, Email) on Left
          - Center Interactive Scroll-to-Zoom Indicator
          - Right Location & Academic Specialization
          ======================================================================
        */}
        <footer
          ref={footerRef}
          className="relative z-30 shrink-0 w-full flex items-center justify-between pt-2.5 border-t border-[#111111]/15 font-mono text-xs font-bold text-[#111111]"
        >
          {/* Social Links on bottom left */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative w-6 h-6 bg-[#E8E8E2] border border-[#111111] overflow-hidden flex items-center justify-center shadow-[1px_1px_0px_#111111] shrink-0" title="Mohamed Suhail M">
              <img
                src={avatarPhoto || '/whatsapp-profile.jpeg'}
                alt="Mohamed Suhail M"
                className="w-full h-full object-cover grayscale contrast-115"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/whatsapp-profile.jpeg';
                }}
              />
            </div>
            <a
              href="https://github.com/MohamedSuhail-M"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:underline"
            >
              GITHUB
            </a>
            <span className="text-[#111111]/30">/</span>
            <a
              href="https://www.linkedin.com/in/mohamedsuhail2101/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:underline"
            >
              LINKEDIN
            </a>
            <span className="text-[#111111]/30">/</span>
            <a
              href="mailto:my.mohamedsuhail@gmail.com"
              className="hover:text-black hover:underline"
            >
              EMAIL
            </a>
          </div>

          {/* Mouse Scroll Indicator (Center) */}
          <div
            ref={scrollIndicatorRef}
            className="flex items-center gap-2 text-[#111111]/75"
          >
            <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border-2 border-[#111111] flex items-start justify-center p-1">
              <span className="w-1 h-2 rounded-full bg-[#111111] animate-bounce" />
            </div>
            <span className="md:hidden font-mono text-[9px] uppercase tracking-widest font-black">
              SCROLL
            </span>
            <span className="hidden md:inline font-mono text-[10px] uppercase tracking-widest font-black">
              SCROLL TO ZOOM INTO PORTRAIT
            </span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>

          {/* Right vertical metadata / Location info */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#111111]/60">
            <span className="font-bold">BACHELOR OF SCIENCE · CS WITH AI</span>
            <span>·</span>
            <span>S.I.V.E.T COLLEGE, CHENNAI</span>
          </div>
        </footer>

      </div>
    </section>
  );
};
