import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Github, Eye, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'Power BI' | 'Machine Learning'>('ALL');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#111111]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-4 pb-4 mb-12 border-b border-[#111111]">
          <span className="font-heading font-black text-4xl sm:text-5xl text-[#111111]">
            04
          </span>
          <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-[#555555]">
            / SELECTED WORK & REPOSITORIES
          </span>
        </div>

        {/* Title & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#555555] font-bold block mb-2">
              APPLIED PORTFOLIO
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none tracking-tight uppercase">
              PROJECTS THAT TURN<br />
              <span className="relative inline-block bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
                DATA INTO INSIGHT.
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                filter === 'ALL'
                  ? 'bg-[#111111] text-[#F7F7F4] border-[#111111]'
                  : 'bg-white text-[#111111] border-[#111111]/30 hover:border-[#111111]'
              }`}
            >
              ALL WORK (07)
            </button>

            <button
              onClick={() => setFilter('Machine Learning')}
              className={`px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                filter === 'Machine Learning'
                  ? 'bg-[#111111] text-[#F7F7F4] border-[#111111]'
                  : 'bg-white text-[#111111] border-[#111111]/30 hover:border-[#111111]'
              }`}
            >
              MACHINE LEARNING (04)
            </button>

            <button
              onClick={() => setFilter('Power BI')}
              className={`px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                filter === 'Power BI'
                  ? 'bg-[#111111] text-[#F7F7F4] border-[#111111]'
                  : 'bg-white text-[#111111] border-[#111111]/30 hover:border-[#111111]'
              }`}
            >
              POWER BI ANALYTICS (03)
            </button>
          </div>
        </div>

        {/* Compact Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white border-2 border-[#111111] shadow-[6px_6px_0px_#111111] flex flex-col justify-between hover:shadow-[3px_3px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
            >
              <div>
                
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] bg-[#111111] border-b-2 border-[#111111] overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover editorial-photo-filter group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Corner Index Tag */}
                  <div className="absolute top-3 left-3 bg-[#111111] text-[#F7F7F4] font-mono text-xs font-bold px-2 py-0.5 border border-white">
                    {project.number}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-3 right-3 bg-[#F4D83D] text-[#111111] font-mono text-[11px] font-bold px-2 py-0.5 border border-[#111111]">
                    {project.category.toUpperCase()}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  
                  {/* Subtitle / Scope */}
                  <span className="font-mono text-[11px] font-bold text-[#555555] uppercase tracking-wider block mb-2">
                    {project.subtitle}
                  </span>

                  {/* Title (28–42px) */}
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#111111] leading-tight uppercase tracking-tight mb-3 group-hover:text-[#555555] transition-colors">
                    {project.title}
                  </h3>

                  {/* Value Proposition */}
                  <p className="text-sm font-sans text-[#444444] leading-relaxed mb-6 line-clamp-3">
                    {project.valueProposition}
                  </p>

                  {/* Key Metrics Badge Row */}
                  <div className="grid grid-cols-2 gap-2 mb-6 p-3 bg-[#F7F7F4] border border-[#111111]">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <span className="font-mono text-[10px] text-[#555555] font-bold uppercase block">
                          {m.label}
                        </span>
                        <span className="font-heading font-black text-sm text-[#111111] block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Labels */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#F7F7F4] border border-[#111111]/40 text-[11px] font-mono font-medium text-[#111111]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-[#111111]/15 flex items-center justify-between gap-3 mt-4">
                <button
                  onClick={() => setActiveProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white border border-[#111111] text-xs font-mono font-bold uppercase tracking-wider text-[#111111] hover:bg-[#F7F7F4] transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>INSPECT DETAILS</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#111111] hover:bg-black text-[#F7F7F4] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-[2px_2px_0px_#F4D83D]"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <Github className="w-3.5 h-3.5 text-[#F4D83D]" />
                  <span>CODE</span>
                  <ArrowUpRight className="w-3 h-3 opacity-80" />
                </a>
              </div>

            </article>
          ))}
        </div>

        {/* Global Repositories Strip */}
        <div className="mt-16 p-8 bg-white border-2 border-[#111111] shadow-[6px_6px_0px_#111111] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-heading font-extrabold text-xl text-[#111111] uppercase tracking-tight">
              ALL SOURCE CODES & DATASETS VERIFIABLE ON GITHUB
            </h4>
            <p className="font-mono text-xs text-[#555555]">
              Contains full exploratory Jupyter notebooks, Power BI .pbix archives, and reproducible model weights.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/mohamedsuhailmsivetai-create/Power-BI-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#F7F7F4] border border-[#111111] text-xs font-mono font-bold uppercase text-[#111111] hover:bg-[#F4D83D] transition-colors flex items-center gap-2"
            >
              <span>POWER-BI-PROJECTS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/mohamedsuhailmsivetai-create/ML-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#F7F7F4] border border-[#111111] text-xs font-mono font-bold uppercase text-[#111111] hover:bg-[#F4D83D] transition-colors flex items-center gap-2"
            >
              <span>ML-PROJECTS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
