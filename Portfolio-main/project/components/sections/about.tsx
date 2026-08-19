'use client';

import Image from 'next/image';
import { GraduationCap, Target, Lightbulb } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const HIGHLIGHTS = [
  {
    Icon: Target,
    title: 'Pattern-driven',
    text: 'Finding signals in noisy data',
  },
  {
    Icon: Lightbulb,
    title: 'Insight-first',
    text: 'Turning analysis into decisions',
  },
  {
    Icon: GraduationCap,
    title: 'Always learning',
    text: 'Growing ML & BI expertise',
  },
];

export function About() {
  const ref = useScrollReveal<HTMLDivElement>('[data-reveal]');

  return (
    <section id="about" className="section-pad relative">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="About Me"
          title="A data mind built for real-world impact"
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Profile photo */}
          <div data-reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-brand-blue/20 shadow-[0_24px_60px_-30px_rgba(105,59,24,0.5)]">
              <Image
                src="/DSC00346_1.jpg.jpeg"
                alt="Mohamed Suhail M"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#f5f1e9]/50 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-brand-blue/15" />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7">
            <div data-reveal className="space-y-5 text-[16px] leading-relaxed text-[#6c5d50] sm:text-[18px]">
              <p>
                I&apos;m a Computer Science student with a growing passion for
                Data Science, Machine Learning, and Analytics. What excites me
                most is finding patterns in data and transforming them into
                insights that help solve practical problems. Over time, I&apos;ve
                built projects ranging from predictive machine learning models
                to interactive Power BI dashboards, strengthening my skills in
                Python, SQL, and data visualization.
              </p>
              <p>
                Right now, I&apos;m focused on improving my machine learning
                knowledge, building stronger end-to-end data projects, and
                preparing for opportunities where I can contribute to real
                business and AI-driven solutions while continuing to learn from
                industry experience.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {HIGHLIGHTS.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  data-reveal
                  className="glass-card rounded-xl p-4"
                >
                  <Icon className="mb-2 text-brand-blue" size={20} />
                  <p className="text-sm font-bold uppercase tracking-wide text-[#271f19]">{title}</p>
                  <p className="mt-0.5 text-xs text-[#6c5d50]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
