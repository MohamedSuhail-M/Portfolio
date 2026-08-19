'use client';

import {
  Code2,
  BrainCircuit,
  BarChart3,
  GitBranch,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface SkillGroup {
  Icon: LucideIcon;
  title: string;
  accent: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    Icon: Code2,
    title: 'Languages',
    accent: 'text-brand-blue',
    skills: ['Python', 'SQL', 'Java', 'HTML', 'CSS'],
  },
  {
    Icon: BrainCircuit,
    title: 'Data Science & Machine Learning',
    accent: 'text-brand-orange',
    skills: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'EDA',
      'Machine Learning',
      'Predictive Analytics',
      'Statistical Analysis',
      'Data Cleaning',
    ],
  },
  {
    Icon: BarChart3,
    title: 'Visualization & BI',
    accent: 'text-brand-blue',
    skills: ['Power BI', 'Matplotlib', 'Seaborn', 'Excel', 'Business Intelligence'],
  },
  {
    Icon: GitBranch,
    title: 'Development',
    accent: 'text-brand-orange',
    skills: ['Git', 'GitHub', 'Microsoft PowerPoint'],
  },
  {
    Icon: Users,
    title: 'Professional',
    accent: 'text-brand-blue',
    skills: [
      'Problem Solving',
      'Analytical Thinking',
      'Team Collaboration',
      'Communication',
      'Leadership',
      'Time Management',
    ],
  },
];

export function Skills() {
  const ref = useScrollReveal<HTMLDivElement>('[data-reveal]');

  return (
    <section id="skills" className="section-pad relative overflow-hidden bg-[#ebe2d5]/50">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-brand-orange/12 blur-[140px]" />
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind the work"
          description="A focused stack covering data, ML, visualization, and the collaborative skills that ship projects end-to-end."
        />

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SKILL_GROUPS.map(({ Icon, title, accent, skills }) => (
            <article
              key={title}
              data-reveal
              className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_0_40px_-12px_rgba(183,94,35,0.35)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-blue/20 bg-brand-orange/10">
                  <Icon className={accent} size={20} />
                </span>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-[#271f19]">
                  {title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="animate-float-slow rounded-lg border border-brand-blue/15 bg-[#fffaf2]/70 px-3 py-1.5 text-sm font-semibold text-[#3a2c22] transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
