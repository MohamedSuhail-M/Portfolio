import React, { useState, useEffect } from 'react';
import { ArrowUpRight, FileText, Download, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/downloadResume';
import StaggeredMenu, { StaggeredMenuItem, StaggeredMenuSocialItem } from './StaggeredMenu';
import PillNav, { PillNavItem } from './PillNav';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
  avatarPhoto?: string | null;
  userPhoto?: string | null;
  onPhotoUpload?: (photoUrl: string) => void;
  menuItems?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  isDark?: boolean;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenResume, 
  activeSection, 
  avatarPhoto,
  userPhoto,
  menuItems: propMenuItems,
  socialItems: propSocialItems,
  isDark = false,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const resolvedAvatar =
    avatarPhoto ||
    (userPhoto && !userPhoto.includes('trimmed') && !userPhoto.includes('cutout')
      ? userPhoto
      : '/whatsapp-profile.jpeg');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillNavItems: PillNavItem[] = [
    { label: 'Home', href: '#home', ariaLabel: 'Go to Home / Hero' },
    { label: 'About', href: '#about', ariaLabel: 'About Mohamed Suhail M' },
    { label: 'Skills', href: '#skills', ariaLabel: 'Skills and technical toolkit' },
    { label: 'Work', href: '#projects', ariaLabel: 'Key projects and systems' },
    { label: 'Experience', href: '#experience', ariaLabel: 'Experience and leadership' },
    { label: 'Hackathons', href: '#hackathons', ariaLabel: 'Hackathons and competitions' },
    { label: 'Certificates', href: '#certifications', ariaLabel: 'Certificates and verified credentials' },
    { label: 'Contact', href: '#contact', ariaLabel: 'Contact Mohamed Suhail M' },
  ];

  // Comprehensive drawer links
  const defaultMenuItems: StaggeredMenuItem[] = [
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

  const defaultSocialItems: StaggeredMenuSocialItem[] = [
    { label: 'GitHub', link: PERSONAL_INFO.github },
    { label: 'LinkedIn', link: PERSONAL_INFO.linkedin },
    { label: 'Email', link: `mailto:${PERSONAL_INFO.email}` },
    { label: 'Portfolio', link: PERSONAL_INFO.portfolioLiveUrl },
  ];

  const menuItems = propMenuItems || defaultMenuItems;
  const socialItems = propSocialItems || defaultSocialItems;

  const handleNavClick = (href: string) => {
    if (href === '#home' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 h-16 sm:h-[68px] transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F7F7F4]/95 backdrop-blur-md border-b border-[#111111]/15 shadow-sm'
          : 'bg-[#F7F7F4]/90 backdrop-blur-md border-b border-[#111111]/10'
      }`}
    >
      {/* Scroll Progress Bar for engagement */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-[#F4D83D] transition-all duration-100 ease-out z-50 border-b border-[#111111]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        
        {/* Left: Brand Identity & Avatar */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="Mohamed Suhail M - Portfolio Top"
          >
            {/* PFP Avatar Icon */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 bg-[#E8E8E2] border-2 border-[#111111] overflow-hidden flex items-center justify-center shadow-[2px_2px_0px_#111111] shrink-0 group-hover:shadow-[3px_3px_0px_#111111] group-hover:border-[#111111] transition-all">
              <img
                src={resolvedAvatar}
                alt="Mohamed Suhail M"
                className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.indexOf('whatsapp-profile') === -1) {
                    target.src = '/whatsapp-profile.jpeg';
                  }
                }}
              />
            </div>

            {/* Name & Active Status Indicator */}
            <div className="flex flex-col">
              <span className="font-heading font-black text-xs sm:text-sm tracking-tight text-[#111111] group-hover:underline uppercase leading-none">
                {PERSONAL_INFO.brandName}
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-[9px] sm:text-[10px] font-mono text-[#555555] font-semibold uppercase tracking-wider whitespace-nowrap">
                  DATA SCIENCE & AI
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Center: React Bits PillNav with smooth sliding active pill */}
        <div className="hidden lg:flex items-center justify-center">
          <PillNav
            items={pillNavItems}
            activeHref={`#${activeSection}`}
            ease="power3.easeOut"
            baseColor={isDark ? '#18181B' : '#FFFFFF'}
            pillColor={isDark ? '#F4D83D' : '#111111'}
            hoveredPillTextColor={isDark ? '#111111' : '#FFFFFF'}
            pillTextColor={isDark ? '#A1A1AA' : '#444444'}
            initialLoadAnimation={true}
          />
        </div>

        {/* Right: Clean, balanced action group */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Dark / Light Mode Toggle Button */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-white text-[#111111] border-2 border-[#111111] hover:bg-[#F4D83D] hover:text-[#111111] transition-all shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer shrink-0"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-500 stroke-[2.5]" />
              ) : (
                <Moon className="w-4 h-4 text-[#111111] stroke-[2.5]" />
              )}
            </button>
          )}

          {/* High-visibility Neo-brutalist Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-black uppercase tracking-wider text-[#111111] bg-[#F4D83D] border-2 border-[#111111] hover:bg-[#ffe343] transition-all shadow-[2px_2px_0px_#111111] hover:shadow-[3px_3px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer shrink-0"
            title="View & Download Official CV / Resume"
            aria-label="View & Download Official Resume"
          >
            <FileText className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>RESUME</span>
          </button>

          {/* React Bits StaggeredMenu Component (Animated Menu Trigger & Full Dossier Drawer) */}
          <StaggeredMenu
            logoUrl={resolvedAvatar}
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor={isDark ? '#F4F4F5' : '#111111'}
            openMenuButtonColor="#F4D83D"
            changeMenuColorOnOpen={true}
            colors={['#18181B', '#F4D83D', '#2563EB']}
            accentColor="#F4D83D"
            isFixed={true}
          />
        </div>

      </div>
    </header>
  );
};
