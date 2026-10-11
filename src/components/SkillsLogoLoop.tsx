import React from 'react';
import LogoLoop, { LogoItem } from './LogoLoop';
import {
  SiPython,
  SiGit,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiGithub,
  SiHtml5,
  SiCss,
  SiJupyter,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { TechLogo } from './TechLogos';

export const SkillsLogoLoop: React.FC = () => {
  // Curated toolkit logos matching Mohamed Suhail's actual skillset:
  // Python, Git, NumPy, Pandas, Scikit-learn, Power BI, SQL, GitHub, Jupyter, VS Code, HTML5, CSS3, Java
  const techLogos: LogoItem[] = [
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <SiPython className="text-[#3776AB] w-6 h-6" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#111111] uppercase">Python</span>
        </div>
      ),
      title: 'Python',
      ariaLabel: 'Python Programming',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <SiNumpy className="text-[#013243] w-6 h-6" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#111111] uppercase">NumPy</span>
        </div>
      ),
      title: 'NumPy',
      ariaLabel: 'NumPy Numerical Computing',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <SiPandas className="text-[#150458] w-6 h-6" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#111111] uppercase">Pandas</span>
        </div>
      ),
      title: 'Pandas',
      ariaLabel: 'Pandas Data Analysis',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <SiScikitlearn className="text-[#F7931E] w-6 h-6" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#111111] uppercase">Scikit-Learn</span>
        </div>
      ),
      title: 'Scikit-learn',
      ariaLabel: 'Scikit-Learn Machine Learning',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-[#F4D83D]/25 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <TechLogo name="powerbi" className="w-6 h-6" />
          <span className="font-mono text-xs font-black tracking-wider text-[#111111] uppercase">Power BI</span>
        </div>
      ),
      title: 'Power BI',
      ariaLabel: 'Microsoft Power BI',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <TechLogo name="sql" className="w-6 h-6 text-[#111111]" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#111111] uppercase">SQL / DBMS</span>
        </div>
      ),
      title: 'SQL',
      ariaLabel: 'SQL Databases',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <SiGit className="text-[#F05032] w-6 h-6" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#111111] uppercase">Git</span>
        </div>
      ),
      title: 'Git',
      ariaLabel: 'Git Version Control',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <SiGithub className="text-[#111111] w-6 h-6" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#111111] uppercase">GitHub</span>
        </div>
      ),
      title: 'GitHub',
      ariaLabel: 'GitHub',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <SiJupyter className="text-[#F37626] w-6 h-6" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#111111] uppercase">Jupyter</span>
        </div>
      ),
      title: 'Jupyter',
      ariaLabel: 'Jupyter Notebooks',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <TbBrandVscode className="text-[#007ACC] w-6 h-6" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#111111] uppercase">VS Code</span>
        </div>
      ),
      title: 'VS Code',
      ariaLabel: 'Visual Studio Code',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <TechLogo name="java" className="w-6 h-6" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#111111] uppercase">Java</span>
        </div>
      ),
      title: 'Java',
      ariaLabel: 'Java Programming',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <SiHtml5 className="text-[#E34F26] w-6 h-6" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#111111] uppercase">HTML5</span>
        </div>
      ),
      title: 'HTML5',
      ariaLabel: 'HTML5 Markup',
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] transition-transform hover:-translate-y-1">
          <SiCss className="text-[#1572B6] w-6 h-6" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#111111] uppercase">CSS3</span>
        </div>
      ),
      title: 'CSS3',
      ariaLabel: 'CSS3 Styling',
    },
  ];

  return (
    <div className="relative py-8 bg-[#EFEFEA] border-y-2 border-[#111111] overflow-hidden">
      {/* Editorial Label Tag */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 bg-[#F4D83D] border border-[#111111]" />
          <span className="font-mono text-xs uppercase tracking-widest font-black text-[#111111]">
            CONTINUOUS PIPELINE // ACTIVE TECH STACK & LIBRARIES
          </span>
        </div>
        <span className="hidden sm:inline-block font-mono text-[11px] font-bold text-[#666666] uppercase tracking-wider">
          HOVER TO PAUSE · HARDWARE-ACCELERATED STREAM
        </span>
      </div>

      {/* Infinite LogoLoop marquee */}
      <div className="py-2">
        <LogoLoop
          logos={techLogos}
          speed={65}
          direction="left"
          logoHeight={38}
          gap={20}
          hoverSpeed={0}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#EFEFEA"
          ariaLabel="Mohamed Suhail technical skillset and tools marquee"
        />
      </div>
    </div>
  );
};

export default SkillsLogoLoop;
