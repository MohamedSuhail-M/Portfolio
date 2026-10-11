import React from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#111111]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Index Header */}
        <div className="flex items-baseline gap-4 pb-4 mb-12 border-b border-[#111111]">
          <span className="font-heading font-black text-4xl sm:text-5xl text-[#111111]">
            01
          </span>
          <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-[#555555]">
            / ABOUT THE RESEARCHER & ENGINEER
          </span>
        </div>

        {/* 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column (5 cols): Large Display Title & Key Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#555555] font-bold block mb-2">
                CORE PHILOSOPHY
              </span>
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-[0.95] tracking-tight uppercase mb-8">
                TURNING DATA<br />
                INTO<br />
                <span className="relative inline-block bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
                  DECISIONS.
                </span>
              </h2>
            </div>

            {/* Editorial Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#111111]/20">
              {PERSONAL_INFO.stats.map((stat) => (
                <div key={stat.label} className="p-4 bg-white border border-[#111111] shadow-[3px_3px_0px_#111111]">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-[#111111] block">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#555555] uppercase tracking-wider block mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Specialization Tag Box */}
            <div className="mt-6 p-4 bg-[#F4D83D]/30 border border-[#111111] font-mono text-xs text-[#111111] space-y-1.5">
              <div className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#111111]" />
                TARGET EMPLOYMENT PROFILES:
              </div>
              <p className="text-[#333333] leading-relaxed">
                Data Scientist · Machine Learning Engineer · AI Engineer · Data Analyst
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Narrative & Technical Competence */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Primary Narrative */}
            <div className="space-y-6 text-base sm:text-lg text-[#333333] font-sans leading-relaxed">
              <p className="border-l-2 border-[#111111] pl-4 sm:pl-6 text-[#111111] font-medium text-lg sm:text-xl leading-snug">
                {PERSONAL_INFO.aboutText1}
              </p>
              
              <p className="pl-4 sm:pl-6 text-[#555555]">
                {PERSONAL_INFO.aboutText2}
              </p>
            </div>

            {/* Key Deliverables & Rigor */}
            <div className="p-6 sm:p-8 bg-white border-2 border-[#111111] shadow-[6px_6px_0px_#111111] space-y-4">
              <h3 className="font-heading font-bold text-lg text-[#111111] uppercase tracking-tight flex items-center gap-2">
                <span className="w-3 h-3 bg-[#F4D83D] border border-[#111111]" />
                WHAT RECRUITERS & TECHNICAL LEADS CAN EXPECT:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#111111] text-[#F7F7F4] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-sans text-[#333333] leading-snug">
                    <strong>End-to-End ML:</strong> Data preprocessing, EDA, algorithm benchmarking, and cross-validation pipelines.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#111111] text-[#F7F7F4] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-sans text-[#333333] leading-snug">
                    <strong>Production Power BI:</strong> Star-schema dimensional modeling, DAX measure branching, and executive views.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#111111] text-[#F7F7F4] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-sans text-[#333333] leading-snug">
                    <strong>Relational SQL:</strong> Efficient aggregations, multi-table joins, subqueries, and structured schema hygiene.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#111111] text-[#F7F7F4] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-sans text-[#333333] leading-snug">
                    <strong>Statistical Storytelling:</strong> Transforming raw anomalies into quantified strategic business recommendations.
                  </span>
                </div>
              </div>
            </div>

            {/* Quick jump to skills */}
            <div className="pt-2">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#111111] hover:underline"
              >
                <span>EXPLORE TECHNICAL ARSENAL</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
