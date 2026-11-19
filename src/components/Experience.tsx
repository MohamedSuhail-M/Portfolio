import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar, MapPin, Building, ArrowUpRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#111111]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-4 pb-4 mb-12 border-b border-[#111111]">
          <span className="font-heading font-black text-4xl sm:text-5xl text-[#111111]">
            03
          </span>
          <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-[#555555]">
            / PROFESSIONAL TRACK RECORD
          </span>
        </div>

        {/* Title */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#555555] font-bold block mb-2">
            INDUSTRY APPLIED WORK
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none tracking-tight uppercase">
            EXPERIENCE &<br />
            <span className="relative inline-block bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
              PRACTICE.
            </span>
          </h2>
        </div>

        {/* Editorial Timeline Container */}
        <div className="max-w-4xl border-l-2 border-[#111111] pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Indicator Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 bg-[#F4D83D] border-2 border-[#111111] shadow-[2px_2px_0px_#111111]" />

              {/* Experience Card */}
              <div className="bg-white border-2 border-[#111111] p-7 sm:p-9 shadow-[6px_6px_0px_#111111]">
                
                {/* Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-5 mb-5 border-b-2 border-[#111111]">
                  <div>
                    <span className="inline-block px-2 py-0.5 mb-2 bg-[#F7F7F4] border border-[#111111] text-[11px] font-mono font-bold uppercase tracking-wider text-[#111111]">
                      PRACTICUM / INTERNSHIP
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-base font-medium text-[#333333] mt-1">
                      <Building className="w-4 h-4 text-[#111111]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-[#555555]">
                    <div className="flex items-center gap-1.5 bg-[#F4D83D]/40 px-2.5 py-1 border border-[#111111] font-bold text-[#111111]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#555555] mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets List */}
                <div className="space-y-3 mb-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-2">
                    CORE DELIVERABLES & IMPACT:
                  </span>
                  <ul className="space-y-2.5 text-sm sm:text-base text-[#333333] font-sans">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 leading-relaxed">
                        <span className="w-2 h-2 bg-[#111111] shrink-0 mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Applied */}
                <div className="pt-4 border-t border-[#111111]/10">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-2">
                    INSTRUMENTS & TECHNOLOGIES:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-[#F7F7F4] border border-[#111111] text-xs font-mono font-semibold text-[#111111]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
