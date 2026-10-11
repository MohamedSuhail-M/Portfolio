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
  const bgTypographyRef = useRef<HTMLDivElement>(null);
  const portraitStageRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLImageElement>(null);
  const yellowArchRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Mohamed Suhail M's authentic monochrome cutout portrait
  const activePhoto = userPhoto || '/suhail-portrait-trimmed.png';

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const posterStage = posterStageRef.current;
    if (!container || !posterStage) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(posterStage, { opacity: 1, scale: 1 });
        return;
      }

      // 1. Initial Load Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        posterStage,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.9 }
      )
      .fromTo(
        bgTypographyRef.current,
        { opacity: 0, scale: 0.94, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1 },
        '-=0.7'
      )
      .fromTo(
        yellowArchRef.current,
        { scaleY: 0, transformOrigin: 'bottom center' },
        { scaleY: 1, duration: 0.85, ease: 'power2.out' },
        '-=0.7'
      )
      .fromTo(
        portraitStageRef.current,
        { opacity: 0, y: 45, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        '-=0.6'
      )
      .fromTo(
        leftContentRef.current,
        { opacity: 0, x: -35 },
        { opacity: 1, x: 0, duration: 0.85 },
        '-=0.7'
      )
      .fromTo(
        rightContentRef.current,
        { opacity: 0, x: 35 },
        { opacity: 1, x: 0, duration: 0.85 },
        '-=0.7'
      )
      .fromTo(
        badgesRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.75 },
        '-=0.5'
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      );

      // 2. Cinematic Scroll-Driven Zoom toward the Centered Portrait
      // Scale: 1.00 -> 1.30 on desktop (1.15 on mobile)
      // Pin hero while scrub-based zoom occurs
      const isMobile = window.innerWidth < 768;
      const targetScale = isMobile ? 1.15 : 1.30;
      const zoomOrigin = 'center 46%';

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=130%',
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Entire 16:9 poster stage scales directly toward the centered portrait
      scrollTl.to(
        posterStage,
        {
          scale: targetScale,
          transformOrigin: zoomOrigin,
          ease: 'none',
        },
        0
      );

      // Oversized background SUHAIL typography progressively moves outward and fades slightly
      if (bgTypographyRef.current) {
        scrollTl.to(
          bgTypographyRef.current,
          {
            scale: 1.2,
            letterSpacing: '0.04em',
            opacity: 0.3,
            ease: 'none',
          },
          0
        );
      }

      // Centered portrait becomes increasingly dominant and immersive
      if (portraitStageRef.current) {
        scrollTl.to(
          portraitStageRef.current,
          {
            scale: 1.1,
            y: -12,
            ease: 'none',
          },
          0
        );
      }

      // Yellow geometric arch subtle parallax shift
      if (yellowArchRef.current) {
        scrollTl.to(
          yellowArchRef.current,
          {
            scale: 1.06,
            y: -6,
            ease: 'none',
          },
          0
        );
      }

      // Left content gently softens and slides outward to immerse into About
      if (leftContentRef.current) {
        scrollTl.to(
          leftContentRef.current,
          {
            opacity: 0.2,
            x: isMobile ? -15 : -50,
            ease: 'none',
          },
          0.3
        );
      }

      // Right content gently softens and slides outward
      if (rightContentRef.current) {
        scrollTl.to(
          rightContentRef.current,
          {
            opacity: 0.2,
            x: 50,
            ease: 'none',
          },
          0.3
        );
      }

      // Floating badges glide outward with subtle depth
      if (badgesRef.current) {
        scrollTl.to(
          badgesRef.current,
          {
            opacity: 0.1,
            scale: 0.92,
            ease: 'none',
          },
          0.2
        );
      }
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      data-section="hero"
      className="relative w-full min-h-[calc(100vh)] bg-[#F5F5F2] text-[#111111] overflow-hidden select-none flex flex-col justify-between border-b border-[#111111]/15 pt-20 sm:pt-24 lg:pt-24 pb-4 sm:pb-6 scroll-mt-24"
      style={{ isolation: 'isolate' }}
    >
      {/* Invisible anchor for backward-compatibility with #hero links */}
      <div id="hero" className="sr-only" aria-hidden="true" />

      {/* 
        ========================================================================
        16:9 EDITORIAL POSTER CANVAS CONTAINER
        Clean clearance beneath fixed navbar without overlapping
        ========================================================================
      */}
      <div
        ref={posterStageRef}
        className="relative w-full h-full flex-1 max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-14 flex flex-col justify-between overflow-hidden"
        style={{ willChange: 'transform' }}
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
          <div className="font-heading font-black text-[10vw] sm:text-[11vw] lg:text-[12vw] leading-[0.8] tracking-tighter text-[#111111]/[0.035] uppercase whitespace-nowrap -translate-y-[22%]">
            SUHAIL · DATA SCIENCE · ARTIFICIAL INTELLIGENCE · SUHAIL
          </div>

          {/* Primary Massive "SUHAIL" Centered Directly Behind Portrait */}
          <div className="font-heading font-black text-[22vw] sm:text-[25vw] lg:text-[27vw] leading-[0.7] tracking-tighter text-[#111111]/[0.08] uppercase whitespace-nowrap select-none">
            SUHAIL
          </div>

          {/* Bottom repeating line */}
          <div className="font-heading font-black text-[9vw] sm:text-[10vw] lg:text-[11vw] leading-[0.8] tracking-tighter text-[#111111]/[0.035] uppercase whitespace-nowrap translate-y-[22%]">
            MACHINE LEARNING · PREDICTIVE ANALYTICS · NEURAL NETWORKS
          </div>
        </div>

        {/* 
          ======================================================================
          TOP EDITORIAL POSTER HEADER (METADATA STRIP)
          Positioned below the fixed navbar with generous clearance
          ======================================================================
        */}
        <div className="relative z-30 w-full flex items-center justify-between pb-2.5 pt-1 border-b border-[#111111]/10 font-mono text-[10px] sm:text-xs font-bold text-[#111111]">
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
          - Center: Mohamed Suhail M Portrait (Centered Alignment)
          - Left Flank: Name, Role, Editorial Statement, CTAs
          - Right Flank: Core Competencies, Key Metas, Technical Pillars
          ======================================================================
        */}
        <div className="relative flex-1 w-full min-h-0 flex items-center justify-between my-auto py-2">
          
          {/* 
            LEFT COLUMN / WING (Z-25):
            - ASPIRING DATA SCIENTIST / ML ENGINEER
            - Bold Headline: MOHAMED SUHAIL M
            - Statement
            - Yellow & White Action CTAs
            - Tech stack pill tags
          */}
          <div
            ref={leftContentRef}
            className="z-25 flex flex-col justify-center space-y-3 sm:space-y-4 max-w-[340px] sm:max-w-[400px] lg:max-w-[430px] xl:max-w-[460px] pointer-events-auto"
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
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-[#111111] leading-[0.92] tracking-tight uppercase">
              MOHAMED<br />
              SUHAIL M
            </h1>

            {/* Role Highlight Bar */}
            <div className="inline-block self-start">
              <span className="font-heading font-extrabold text-xs sm:text-sm md:text-base text-[#111111] uppercase tracking-wide bg-[#F4D83D] px-2.5 py-1 border border-[#111111] shadow-[3px_3px_0px_#111111]">
                DATA SCIENTIST / ML ENGINEER
              </span>
            </div>

            {/* Editorial Statement */}
            <p className="text-xs sm:text-sm md:text-[14px] text-[#222222] leading-relaxed font-medium">
              Building AI-powered, data-driven solutions that transform raw data into meaningful decisions. Specialized in predictive machine learning, deep neural networks, and interactive analytics.
            </p>

            {/* Editorial Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {/* Primary Yellow CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-[#F4D83D] text-[#111111] hover:bg-[#ffe343] font-mono text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-[#111111] shadow-[4px_4px_0px_#111111] hover:shadow-[2px_2px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              >
                <span>VIEW PROJECTS</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </a>

              {/* Secondary Download Resume CTA */}
              <button
                onClick={() => downloadResumePdf()}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white text-[#111111] hover:bg-[#F5F5F2] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-[#111111] shadow-[4px_4px_0px_#111111] hover:shadow-[2px_2px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                title="Download official resume PDF"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </button>

              {/* CV Modal trigger */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-bold text-[#555555] hover:text-[#111111] uppercase tracking-wider hover:underline cursor-pointer"
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
            CENTER PIECE: MOHAMED SUHAIL M AUTHENTIC PORTRAIT (CENTER ALIGNMENT)
            - Center aligned across the entire editorial canvas
            - Yellow architectural arch / backdrop
            - Layered physically over the massive "SUHAIL" background typography
            - Floating editorial technical tags
            ====================================================================
          */}
          <div
            ref={portraitStageRef}
            className="absolute left-1/2 bottom-0 -translate-x-1/2 z-15 w-[300px] sm:w-[380px] md:w-[460px] lg:w-[520px] xl:w-[580px] h-[78%] sm:h-[84%] lg:h-[90%] flex items-end justify-center pointer-events-none"
          >
            {/* Relative wrapper holding arch, portrait, and badges */}
            <div className="relative w-full h-full flex items-end justify-center">
              
              {/* 
                YELLOW GEOMETRIC ARCH / BACKDROP
                Centered Swiss architectural element framing Suhail
              */}
              <div
                ref={yellowArchRef}
                className="absolute inset-x-[12%] bottom-0 top-[6%] bg-[#F4D83D] rounded-t-full border-2 border-[#111111] shadow-[8px_8px_0px_#111111] overflow-hidden z-0"
              >
                {/* Internal graphic stripes & typography inside arch */}
                <div className="absolute top-8 inset-x-0 text-center font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#111111]/15 tracking-widest uppercase">
                  SUHAIL
                </div>
                <div className="absolute bottom-5 inset-x-0 h-2 bg-[#111111]" />
                <div className="absolute bottom-9 inset-x-0 h-0.5 bg-[#111111]/30" />
              </div>

              {/* Horizontal Yellow Geometric Accent Bar */}
              <div className="absolute -left-6 top-[34%] w-24 h-3 bg-[#F4D83D] border border-[#111111] shadow-[2px_2px_0px_#111111] z-10 hidden sm:block" />

              {/* Small Geometric Squares */}
              <div className="absolute -right-3 bottom-[26%] w-5 h-5 bg-[#111111] border border-[#F4D83D] shadow-[2px_2px_0px_#F4D83D] z-10 hidden sm:block" />
              <div className="absolute right-6 top-[15%] w-4 h-4 bg-[#F4D83D] border border-[#111111] shadow-[2px_2px_0px_#111111] z-10 hidden sm:block" />

              {/* 
                CENTRAL VISUAL: MOHAMED SUHAIL M AUTHENTIC MONOCHROME PORTRAIT
                Cutout with subtle white separation outline, layered physically in front
              */}
              <div className="relative z-10 w-[84%] sm:w-[86%] h-full flex items-end justify-center">
                <img
                  ref={portraitImgRef}
                  src={activePhoto}
                  alt="Mohamed Suhail M — Aspiring Data Scientist & ML Engineer"
                  className="w-auto h-[98%] max-h-[105%] object-contain select-none transition-all duration-300 pointer-events-auto"
                  style={{
                    filter: 'grayscale(100%) contrast(110%) brightness(98%) drop-shadow(0 0 2px rgba(255,255,255,0.95)) drop-shadow(4px 4px 16px rgba(0,0,0,0.18))',
                  }}
                  loading="eager"
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
                Editorial tags symmetrically distributed around the centered portrait
              */}
              <div ref={badgesRef} className="absolute inset-0 pointer-events-none z-20 hidden md:block">
                {/* Python floating badge (Top Left) */}
                <div className="absolute top-[8%] left-[0%] bg-white px-2.5 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono text-[10px] sm:text-[11px] font-black text-[#111111] uppercase tracking-wider">
                  PYTHON 3.11
                </div>

                {/* Pandas & NumPy tag (Mid Left) */}
                <div className="absolute top-[28%] -left-[8%] bg-[#F4D83D] px-2.5 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono text-[10px] font-black text-[#111111] uppercase tracking-wider">
                  PANDAS & NUMPY
                </div>

                {/* TensorFlow / Deep Learning (Bottom Left) */}
                <div className="absolute bottom-[20%] -left-[4%] bg-white px-3 py-1.5 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono text-[10px] sm:text-[11px] font-black text-[#111111] uppercase tracking-wider">
                  TENSORFLOW // AI
                </div>

                {/* Machine Learning badge (Top Right) */}
                <div className="absolute top-[12%] right-[0%] bg-white px-2.5 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono text-[10px] font-black text-[#111111] uppercase tracking-wider">
                  MACHINE LEARNING
                </div>

                {/* SQL Queries tag (Bottom Mid Right) */}
                <div className="absolute bottom-[24%] -right-[6%] bg-[#F4D83D] px-2.5 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono text-[10px] sm:text-[11px] font-black text-[#111111] uppercase tracking-wider">
                  SQL & ETL
                </div>

                {/* Power BI badge (Bottom Right) */}
                <div className="absolute bottom-[8%] right-[4%] bg-white px-2.5 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono text-[10px] font-black text-[#111111] uppercase tracking-wider">
                  POWER BI // DAX
                </div>
              </div>

            </div>
          </div>

          {/* 
            RIGHT COLUMN / WING (Z-25):
            Editorial Competencies Dossier, Location Metadata & Vertical Rules
          */}
          <div
            ref={rightContentRef}
            className="z-25 hidden lg:flex flex-col items-end text-right space-y-4 max-w-[280px] xl:max-w-[320px] pointer-events-auto"
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

              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#111111]">01 PREDICTIVE ML</span>
                  <span className="text-[#111111]/50 text-[10px]">SCIKIT / XGB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#111111]">02 NEURAL NETWORKS</span>
                  <span className="text-[#111111]/50 text-[10px]">TF / KERAS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#111111]">03 SQL & DATA PIPELINE</span>
                  <span className="text-[#111111]/50 text-[10px]">ETL / SCHEMAS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#111111]">04 BI DASHBOARDS</span>
                  <span className="text-[#111111]/50 text-[10px]">POWER BI</span>
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
        <footer className="relative z-30 w-full flex items-center justify-between pt-2.5 border-t border-[#111111]/15 font-mono text-xs font-bold text-[#111111]">
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
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest font-black">
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
