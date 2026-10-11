import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechLogo } from './TechLogos';
import { ArrowUpRight } from 'lucide-react';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const categories = SKILL_CATEGORIES;
  const filteredCategories =
    filter === 'ALL'
      ? categories
      : categories.filter((c) => c.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#111111]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-4 pb-4 mb-12 border-b border-[#111111]">
          <span className="font-heading font-black text-4xl sm:text-5xl text-[#111111]">
            02
          </span>
          <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-[#555555]">
            / TECHNICAL ARSENAL & TOOLKIT
          </span>
        </div>

        {/* Title & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#555555] font-bold block mb-2">
              INSTRUMENTATION
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none tracking-tight uppercase">
              TOOLS I<br />
              <span className="relative inline-block bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
                WORK WITH.
              </span>
            </h2>
          </div>

          {/* Editorial Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {['ALL', 'DATA SCIENCE', 'VISUALIZATION', 'LANGUAGES'].map((catKey) => (
              <button
                key={catKey}
                onClick={() => setFilter(catKey)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                  filter === catKey
                    ? 'bg-[#111111] text-[#F7F7F4] border-[#111111]'
                    : 'bg-white text-[#111111] border-[#111111]/30 hover:border-[#111111]'
                }`}
              >
                {catKey}
              </button>
            ))}
          </div>
        </div>

        {/* Grouped Skills Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <div
              key={category.title}
              className="bg-white border-2 border-[#111111] p-6 sm:p-7 shadow-[5px_5px_0px_#111111] flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-[#111111]">
                  <h3 className="font-heading font-black text-base text-[#111111] tracking-tight uppercase">
                    {category.title}
                  </h3>
                  <span className="font-mono text-[11px] font-bold text-[#555555]">
                    [ {category.skills.length} ]
                  </span>
                </div>

                {/* Skills Badges / Pills with Official Logos */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 border text-xs font-mono font-semibold transition-transform hover:-translate-y-0.5 ${
                        skill.highlight
                          ? 'bg-[#F4D83D]/25 border-[#111111] text-[#111111] font-bold shadow-[2px_2px_0px_#111111]'
                          : 'bg-[#F7F7F4] border-[#111111]/30 text-[#222222] hover:border-[#111111]'
                      }`}
                    >
                      {skill.logoKey && (
                        <TechLogo name={skill.logoKey} className="w-4 h-4 shrink-0" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-6 pt-3 border-t border-[#111111]/10 flex items-center justify-between text-[10px] font-mono uppercase text-[#888888]">
                <span>CATEGORY REF: 0{idx + 1}</span>
                <span className="text-[#111111] font-bold">VERIFIED APPLIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Guarantee Strip */}
        <div className="mt-12 p-6 bg-white border border-[#111111] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#F4D83D] border border-[#111111]" />
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
              ALL REPOSITORIES FEATURE DOCUMENTED JUPYTER NOTEBOOKS, VIRTUAL ENVIRONMENTS & REPRODUCIBLE SCRIPTS.
            </p>
          </div>

          <a
            href="https://github.com/MohamedSuhail-M"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#111111] hover:underline shrink-0"
          >
            <span>INSPECT ON GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
