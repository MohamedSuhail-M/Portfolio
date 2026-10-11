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
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Context for scroll-triggered animations - Every content reveals with little blur & scroll-to-reveal concept
    const ctx = gsap.context(() => {
      // Content-level Scroll Reveal helper
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

          const blurAmount = options.blur ?? 4; // Little blur: 4px
          const baseRot = options.rotation ?? 1.2;
          const yOffset = options.y ?? 26;
          const triggerStart = options.start ?? 'top 88%';

          elements.forEach((el, index) => {
            const rotationAngle = index % 2 === 0 ? baseRot : -baseRot;

            gsap.fromTo(
              el,
              {
                opacity: 0,
                filter: `blur(${blurAmount}px)`,
                y: yOffset,
                rotate: rotationAngle,
                transformOrigin: '50% 50%',
                willChange: 'transform, opacity, filter',
              },
              {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                rotate: 0,
                duration: 0.75,
                ease: 'power3.out',
                onComplete: () => {
                  gsap.set(el, { clearProps: 'filter,willChange' });
                },
                scrollTrigger: {
                  trigger: el,
                  start: triggerStart,
                  toggleActions: 'play none none none',
                },
              }
            );
          });
        } catch {
          // Resilient fallback
        }
      };

      // 1. All Section Index Headers (01/ABOUT, 02/TECHNICAL ARSENAL, etc.)
      revealItems('section > div > div:first-child', { blur: 4, rotation: 1.2, y: 20 });

      // 2. Section Sub-headings & Headlines across all sections
      revealItems('#about h2, #skills h2, #projects h2, #experience h2, #hackathons h2, #education h2, #certifications h2, #contact h2', {
        blur: 4.5,
        rotation: 1.5,
        y: 25,
      });

      // 3. About Section Content (Philosophy Block, Stats, Narrative, Recruiter Checklist)
      revealItems('#about .lg\\:col-span-5 > div', { blur: 4, rotation: 1.2, y: 22 });
      revealItems('#about .grid-cols-2 > div', { blur: 4, rotation: 1.2, y: 25 });
      revealItems('#about .space-y-6 > p', { blur: 3.5, rotation: 1, y: 20 });
      revealItems('#about .lg\\:col-span-7 > div', { blur: 4, rotation: -1.2, y: 25 });

      // 4. Skills Section Content (Skill Category Cards, Guarantee Strip)
      revealItems('#skills .grid > div', { blur: 4.5, rotation: 1.5, y: 28 });
      revealItems('#skills .mt-12', { blur: 4, rotation: -1, y: 20 });

      // 5. Skills Logo Loop Ticker Container
      revealItems('#skills-loop, .skills-logo-loop-container', { blur: 3, rotation: 0.8, y: 20 });

      // 6. Projects Section Content (All Project Cards)
      revealItems('#projects article', { blur: 5, rotation: 1.5, y: 32 });

      // 7. Experience Timeline Cards
      revealItems('#experience .group', { blur: 4.5, rotation: -1.2, y: 28 });

      // 8. Hackathon Cards & Winner Badges
      revealItems('#hackathons .group, #hackathons .border-2', { blur: 4.5, rotation: 1.2, y: 28 });

      // 9. Education Dossier (GPA Score Box & Cards)
      revealItems('#education .lg\\:col-span-5', { blur: 4.5, rotation: -1.5, y: 30 });
      revealItems('#education .lg\\:col-span-7 > div', { blur: 4, rotation: 1.2, y: 25 });

      // 10. Certifications Rows
      revealItems('#certifications .border-t-2 > div', { blur: 3.5, rotation: 1, y: 20 });

      // 11. Contact Section (Contact info cards & message form)
      revealItems('#contact .lg\\:col-span-5 > div', { blur: 4.5, rotation: -1.2, y: 28 });
      revealItems('#contact .lg\\:col-span-7 > div', { blur: 4.5, rotation: 1.2, y: 28 });
    });

    // Active section spy
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const sections = ['about', 'skills', 'projects', 'experience', 'hackathons', 'education', 'certifications', 'contact'];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const allSections = ['home', ...sections];
    allSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      observer.disconnect();
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
          <About />
          <Skills />
          <SkillsLogoLoop />
          <Projects />
          <Experience />
          <Hackathons />
          <Education />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer 
          onOpenResume={() => setIsResumeOpen(true)} 
          avatarPhoto={avatarPhoto}
        />

        {/* Interactive Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ClickSpark>
  );
}
