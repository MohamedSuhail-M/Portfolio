import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { SkillsLogoLoop } from './components/SkillsLogoLoop';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Hackathons } from './components/Hackathons';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import ClickSpark from './components/ClickSpark';
import ScrollReveal from './components/ScrollReveal';
import { PERSONAL_INFO } from './data/portfolioData';
import { setLenisInstance } from './utils/scrollToSection';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [avatarPhoto] = useState<string>('/whatsapp-profile.jpeg');
  const [userPhoto, setUserPhoto] = useState<string | null>('/suhail-portrait-trimmed.png');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const isMobileOrTouch =
      window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;

    // Prevent mobile URL bar show/hide from triggering jarring ScrollTrigger recalculations
    ScrollTrigger.config({ ignoreMobileResize: true });

    let lenis: Lenis | null = null;
    let updateLenis: ((time: number) => void) | null = null;

    if (!isMobileOrTouch) {
      // Desktop: Lenis Smooth Wheel Scrolling
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      setLenisInstance(lenis);

      lenis.on('scroll', ScrollTrigger.update);

      updateLenis = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }

    // Context for scroll-triggered animations - Every content reveals with subtle blur & scroll-to-reveal concept
    const ctx = gsap.context(() => {
      const revealItems = (
        selector: string,
        options: {
          blur?: number;
          rotation?: number;
          y?: number;
          start?: string;
        } = {}
      ) => {
        try {
          const elements = document.querySelectorAll(selector);
          if (!elements || elements.length === 0) return;

          const blurAmount = isMobileOrTouch
            ? Math.min(options.blur ?? 2.5, 2.5)
            : (options.blur ?? 4);
          const baseRot = isMobileOrTouch ? 0 : (options.rotation ?? 1.2);
          const yOffset = isMobileOrTouch
            ? Math.min(options.y ?? 16, 18)
            : (options.y ?? 26);
          const triggerStart = options.start ?? (isMobileOrTouch ? 'top 96%' : 'top 94%');
          const duration = isMobileOrTouch ? 0.45 : 0.62;

          elements.forEach((el, index) => {
            const rotationAngle = baseRot === 0 ? 0 : (index % 2 === 0 ? baseRot : -baseRot);

            gsap.fromTo(
              el,
              {
                opacity: 0,
                filter: `blur(${blurAmount}px)`,
                y: yOffset,
                rotate: rotationAngle,
                transformOrigin: '50% 50%',
                willChange: isMobileOrTouch ? 'transform, opacity' : 'transform, opacity, filter',
              },
              {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                rotate: 0,
                duration,
                ease: 'power2.out',
                clearProps: 'transform,filter,willChange',
                scrollTrigger: {
                  trigger: el,
                  start: triggerStart,
                  once: true,
                },
              }
            );
          });
        } catch {
          // Resilient fallback
        }
      };

      // 1. All Section Index Headers (excluding #home hero stage)
      revealItems('section:not(#home) > div > div:first-child', { blur: 3, rotation: 0.6, y: 14, start: 'top 98%' });

      // 2. Section Sub-headings & Headlines across all sections
      revealItems('#about h2, #skills h2, #projects h2, #experience h2, #hackathons h2, #education h2, #certifications h2, #contact h2', {
        blur: 3,
        rotation: 0.8,
        y: 18,
        start: 'top 96%',
      });

      // 3. About Section Content (Stats, Narrative, Recruiter Checklist - avoid nested double opacity)
      revealItems('#about .grid-cols-2 > div', { blur: 2.5, rotation: 0.8, y: 18, start: 'top 96%' });
      revealItems('#about .space-y-6 > p', { blur: 2.5, rotation: 0.6, y: 16, start: 'top 96%' });
      revealItems('#about .lg\\:col-span-7 > div:not(.space-y-6)', { blur: 3, rotation: -0.8, y: 18, start: 'top 96%' });

      // 4. Skills Section Content (Skill Category Cards, Guarantee Strip)
      revealItems('#skills .grid > div', { blur: 4, rotation: 1.2, y: 24 });
      revealItems('#skills .mt-12', { blur: 3.5, rotation: -0.8, y: 18 });

      // 5. Skills Logo Loop Ticker Container
      revealItems('#skills-loop, .skills-logo-loop-container', { blur: 2.5, rotation: 0.6, y: 18 });

      // 6. Projects Section Content (All Project Cards)
      revealItems('#projects article', { blur: 4, rotation: 1.2, y: 26 });

      // 7. Experience Timeline Cards
      revealItems('#experience .group', { blur: 4, rotation: -1, y: 24 });

      // 8. Hackathon Event Cards & Project Articles (avoid matching nested buttons/badges)
      revealItems('#hackathons article', { blur: 4, rotation: 1, y: 24 });

      // 9. Education Dossier (GPA Score Box & Cards)
      revealItems('#education .lg\\:col-span-5', { blur: 4, rotation: -1.2, y: 24 });
      revealItems('#education .lg\\:col-span-7 > div', { blur: 3.5, rotation: 1, y: 22 });

      // 10. Certifications Rows
      revealItems('#certifications .border-t-2 > div', { blur: 3, rotation: 0.8, y: 18 });

      // 11. Contact Section (Contact info cards & message form)
      revealItems('#contact .lg\\:col-span-5 > div', { blur: 4, rotation: -1, y: 24 });
      revealItems('#contact .lg\\:col-span-7 > div', { blur: 4, rotation: 1, y: 24 });
    });

    // Accurate scroll-position section spy (works seamlessly with sticky Hero curtain)
    const sectionIds = ['about', 'skills', 'projects', 'experience', 'hackathons', 'education', 'certifications', 'contact'];
    const updateActiveSection = () => {
      const threshold = window.innerHeight * 0.35;
      let current = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          current = id;
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      ctx.revert();
      if (lenis) {
        setLenisInstance(null);
        lenis.destroy();
      }
      if (updateLenis) gsap.ticker.remove(updateLenis);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to Home section', link: '#home' },
    { label: 'About', ariaLabel: 'Go to About section', link: '#about' },
    { label: 'Skills', ariaLabel: 'Go to Skills section', link: '#skills' },
    { label: 'Work', ariaLabel: 'Go to Projects section', link: '#projects' },
    { label: 'Experience', ariaLabel: 'Go to Experience section', link: '#experience' },
    { label: 'Hackathons', ariaLabel: 'Go to Hackathons section', link: '#hackathons' },
    { label: 'Education', ariaLabel: 'Go to Education section', link: '#education' },
    { label: 'Certifications', ariaLabel: 'Go to Certifications section', link: '#certifications' },
    { label: 'Contact', ariaLabel: 'Go to Contact section', link: '#contact' },
  ];

  const socialItems = [
    { label: 'GitHub', link: PERSONAL_INFO.github },
    { label: 'LinkedIn', link: PERSONAL_INFO.linkedin },
    { label: 'Email', link: `mailto:${PERSONAL_INFO.email}` },
    { label: 'Live Site', link: PERSONAL_INFO.portfolioLiveUrl },
  ];

  return (
    <ClickSpark
      sparkColor={isDark ? '#F4D83D' : '#111111'}
      sparkSize={10}
      sparkRadius={18}
      sparkCount={8}
      duration={400}
      easing="ease-out"
      extraScale={1.1}
    >
      <div className={isDark ? 'dark min-h-screen bg-[#0C0C0E] text-[#F4F4F5] selection:bg-[#F4D83D] selection:text-[#111111]' : 'min-h-screen bg-[#F7F7F4] text-[#111111] selection:bg-[#F4D83D] selection:text-[#111111]'}>
        {/* Top Navigation with integrated React Bits StaggeredMenu */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          activeSection={activeSection}
          avatarPhoto={avatarPhoto}
          userPhoto={avatarPhoto}
          menuItems={menuItems}
          socialItems={socialItems}
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />

        {/* Main Content Area */}
        <main id="main-content">
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            avatarPhoto={avatarPhoto}
            userPhoto={userPhoto}
          />
          <div
            id="content-curtain"
            className="relative z-10 bg-[#F7F7F4] shadow-[0_-16px_40px_rgba(0,0,0,0.06)]"
          >
            <About />
            <Skills />
            <SkillsLogoLoop />
            <Projects />
            <Experience />
            <Hackathons />
            <Education />
            <Certifications />
            <Contact />
            <Footer 
              onOpenResume={() => setIsResumeOpen(true)} 
              avatarPhoto={avatarPhoto}
            />
          </div>
        </main>

        {/* Interactive Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ClickSpark>
  );
}
