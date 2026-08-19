'use client';

import { GraduationCap, CalendarDays, Award } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function Education() {
  const ref = useScrollReveal<HTMLDivElement>('[data-reveal]');

  return (
    <section id="education" className="section-pad relative">
      <div className="container-portfolio">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <div ref={ref} className="mx-auto mt-16 max-w-3xl">
          <article
            data-reveal
            className="glass-card relative overflow-hidden rounded-2xl p-8"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-orange/15 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-blue/20 bg-brand-orange/10">
                <GraduationCap className="text-brand-blue" size={28} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#6c5d50]">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-orange/15 px-2.5 py-1 text-brand-blue ring-1 ring-inset ring-brand-blue/25">
                    <CalendarDays size={13} /> June 2024 – May 2027
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-wide text-[#271f19]">
                  Bachelor of Science
                </h3>
                <p className="mt-1 text-base font-semibold text-[#6c5d50]">
                  Computer Science with Artificial Intelligence
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-wide text-brand-blue">
                  S.I.V.E.T College
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-xl border border-brand-blue/15 bg-[#fffaf2]/70 p-4">
                  <Award className="text-brand-orange" size={22} />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#6c5d50]">
                      Last Semester
                    </p>
                    <p className="font-heading text-2xl font-bold text-[#271f19]">
                      87<span className="text-lg text-[#6c5d50]">%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
