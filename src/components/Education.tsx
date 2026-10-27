import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, Check } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#111111]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-4 pb-4 mb-12 border-b border-[#111111]">
          <span className="font-heading font-black text-4xl sm:text-5xl text-[#111111]">
            06
          </span>
          <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-[#555555]">
            / ACADEMIC FOUNDATION & RIGOR
          </span>
        </div>

        {/* Title */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#555555] font-bold block mb-2">
            UNDERGRADUATE STUDIES
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none tracking-tight uppercase">
            EDUCATION &<br />
            <span className="relative inline-block bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
              SCHOLARSHIP.
            </span>
          </h2>
        </div>

        {/* 12-Column Editorial Education Block */}
        <div className="bg-white border-2 border-[#111111] p-8 sm:p-12 shadow-[8px_8px_0px_#111111] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Degree & Institution (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 bg-[#F4D83D] border border-[#111111] font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                  DEGREE CANDIDATE
                </span>
                <span className="font-mono text-xs text-[#555555]">
                  JUNE 2024 – MAY 2027
                </span>
              </div>

              <h3 className="font-heading font-black text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight">
                {EDUCATION.degree}
              </h3>
              <h4 className="font-heading font-bold text-xl sm:text-2xl text-[#555555] uppercase tracking-tight mt-1">
                {EDUCATION.major}
              </h4>
              <p className="font-mono text-base font-bold text-[#111111] mt-2">
                {EDUCATION.institution}, {EDUCATION.location}
              </p>
            </div>

            {/* Bullets */}
            <div className="pt-4 border-t border-[#111111]/15 space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block">
                CURRICULAR FOCUS:
              </span>
              <ul className="space-y-2 text-sm sm:text-base font-sans text-[#333333]">
                {EDUCATION.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#111111] font-bold">»</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Giant 87% Prominence Callout (5 cols) */}
          <div className="lg:col-span-5 bg-[#F7F7F4] border-2 border-[#111111] p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_#111111]">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#555555] block mb-2">
                EVALUATION BENCHMARK
              </span>
              
              <div className="font-heading font-black text-6xl sm:text-8xl text-[#111111] leading-none tracking-tighter">
                {EDUCATION.performance}
              </div>

              <span className="inline-block mt-3 px-3 py-1 bg-[#F4D83D] border border-[#111111] font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111111]">
                {EDUCATION.performanceLabel}
              </span>
            </div>

            <div className="mt-8 pt-6 border-t border-[#111111]/20 font-mono text-xs text-[#555555] space-y-1">
              <p className="font-bold text-[#111111]">TOP DECILE PERFORMANCE</p>
              <p>Consistently demonstrated exceptional mastery in AI theory, predictive programming, and discrete mathematical structures.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
