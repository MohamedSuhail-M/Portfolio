'use client';

import { Briefcase, MapPin, CalendarDays, Database, BarChart3 } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const RESPONSIBILITIES = [
  'Data preprocessing',
  'Data cleaning',
  'Exploratory data analysis (EDA)',
  'Machine learning modeling',
  'SQL queries',
  'Power BI dashboards',
  'Data visualization',
  'Team collaboration',
];

export function Experience() {
  const ref = useScrollReveal<HTMLDivElement>('[data-reveal]');

  return (
    <section id="experience" className="section-pad relative overflow-hidden bg-[#ebe2d5]/50">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[360px] w-[360px] rounded-full bg-brand-orange/12 blur-[120px]" />
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've put the toolkit to work"
        />

        <div ref={ref} className="mx-auto mt-16 max-w-3xl">
          <div className="relative pl-8 sm:pl-0">
            {/* Vertical line */}
            <div
              data-reveal
              className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-brand-blue via-brand-orange to-transparent sm:left-1/2 sm:-translate-x-1/2"
            />

            <article
              data-reveal
              className="relative sm:mx-auto sm:w-1/2 sm:pl-12"
            >
              {/* Node */}
              <span className="absolute -left-[22px] top-1.5 flex h-4 w-4 items-center justify-center sm:left-0 sm:-translate-x-1/2">
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-brand-blue/40" />
                <span className="relative h-3 w-3 rounded-full bg-brand-blue ring-4 ring-[#f5f1e9]" />
              </span>

              <div className="glass-card rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#6c5d50]">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-orange/15 px-2.5 py-1 text-brand-blue ring-1 ring-inset ring-brand-blue/25">
                    <CalendarDays size={13} /> May 2026 – June 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#fffaf2]/70 px-2.5 py-1">
                    <MapPin size={13} /> Chennai
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-wide text-[#271f19]">
                  Data Scientist Intern
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#6c5d50]">
                  <Briefcase size={14} className="text-brand-blue" />
                  Big Bucks Innovation Pvt. Ltd.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {RESPONSIBILITIES.map((r, i) => (
                    <div
                      key={r}
                      className="flex items-center gap-2 text-sm text-[#6c5d50]"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-orange/15 text-brand-blue">
                        {i % 2 === 0 ? <Database size={11} /> : <BarChart3 size={11} />}
                      </span>
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
