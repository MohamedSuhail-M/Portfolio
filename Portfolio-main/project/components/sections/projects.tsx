'use client';

import { Github, ArrowUpRight, BarChart3, BrainCircuit, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  category: 'BI' | 'ML';
  highlights?: string[];
  accent: string;
}

const ML_REPO = 'https://github.com/MohamedSuhail-M/ML-Projects';
const BI_REPO = 'https://github.com/MohamedSuhail-M/Power-BI-Projects';

const PROJECTS: Project[] = [
  {
    title: 'Educational Performance & Resource Allocation Dashboard',
    description:
      'Interactive Power BI dashboard for educational analytics across 50 schools, 4–5 states, and 10,000+ students.',
    tech: ['Power BI'],
    github: BI_REPO,
    category: 'BI',
    highlights: [
      '50 schools',
      '4–5 states',
      '10,000+ students',
      'Budget allocation',
      'Scholarship analysis',
      'Dropout prediction',
      'Demographics',
    ],
    accent: 'from-brand-blue/25 to-brand-orange/15',
  },
  {
    title: 'IPL Orange Cap & Purple Cap Dashboard',
    description:
      'Player and team performance analytics visualizing leading run-scorers and wicket-takers across the IPL season.',
    tech: ['Power BI'],
    github: BI_REPO,
    category: 'BI',
    accent: 'from-brand-orange/25 to-brand-blue/15',
  },
  {
    title: 'Amazon Sales Dashboard',
    description:
      'Sales and revenue analytics dashboard tracking performance, trends, and category breakdowns for Amazon data.',
    tech: ['Power BI'],
    github: BI_REPO,
    category: 'BI',
    accent: 'from-brand-blue/20 to-brand-orange/20',
  },
  {
    title: 'Student Performance Predictor',
    description:
      'Machine learning model predicting student performance from academic and demographic features with EDA and evaluation.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    github: ML_REPO,
    category: 'ML',
    accent: 'from-brand-orange/25 to-brand-blue/10',
  },
  {
    title: 'House Price Prediction',
    description:
      'Regression model estimating house prices from property attributes, with feature engineering and model comparison.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    github: ML_REPO,
    category: 'ML',
    accent: 'from-brand-blue/25 to-brand-orange/10',
  },
  {
    title: 'Loan Approval Prediction',
    description:
      'Classification model predicting loan approval outcomes from applicant financial and demographic data.',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    github: ML_REPO,
    category: 'ML',
    accent: 'from-brand-orange/20 to-brand-blue/15',
  },
  {
    title: 'Employee Attrition Prediction',
    description:
      'Classification model identifying employees likely to leave, supporting proactive retention decisions.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn'],
    github: ML_REPO,
    category: 'ML',
    accent: 'from-brand-blue/20 to-brand-orange/20',
  },
];

function ProjectImage({ project }: { project: Project }) {
  const Icon = project.category === 'ML' ? BrainCircuit : BarChart3;
  return (
    <div
      className={cn(
        'relative h-44 w-full overflow-hidden bg-gradient-to-br',
        project.accent
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(39,31,25,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(39,31,25,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="text-brand-blue/40" size={56} strokeWidth={1.2} />
      </div>
      <div className="absolute bottom-3 left-3 rounded-md border border-brand-blue/20 bg-[#fffaf2]/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-blue backdrop-blur">
        {project.category === 'ML' ? 'Machine Learning' : 'Power BI'}
      </div>
    </div>
  );
}

export function Projects() {
  const ref = useScrollReveal<HTMLDivElement>('[data-reveal]');

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work, built to prove capability"
          description="A mix of interactive BI dashboards and end-to-end machine learning projects — each solving a real analytical problem."
        />

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              data-reveal
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-blue/15 bg-[#fffaf2]/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-[0_24px_60px_-20px_rgba(183,94,35,0.4)]"
            >
              <div className="overflow-hidden">
                <div className="transition-transform duration-500 group-hover:scale-105">
                  <ProjectImage project={project} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-[22px] font-bold uppercase leading-snug tracking-tight text-[#271f19]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6c5d50]">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-md border border-brand-blue/15 bg-[#f5f1e9]/60 px-2 py-1 text-[11px] font-semibold text-[#6c5d50]"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-brand-orange/15 px-2.5 py-1 text-xs font-bold text-brand-blue ring-1 ring-inset ring-brand-blue/25"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-brand-blue/25 bg-[#fffaf2]/70 px-4 py-2 text-sm font-bold uppercase tracking-wide text-brand-blue transition-colors hover:border-brand-blue hover:bg-brand-orange/15"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-[#6c5d50] transition-colors hover:text-brand-blue"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
