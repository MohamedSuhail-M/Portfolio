import React from 'react';
import { X, Github, ExternalLink, Check, Layers, Cpu, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#F7F7F4] border-2 border-[#111111] shadow-[10px_10px_0px_#111111] p-6 sm:p-10 text-[#111111] space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-white border border-[#111111] hover:bg-[#F4D83D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5 text-[#111111]" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 border-b-2 border-[#111111] pb-6">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
            <span className="bg-[#F4D83D] text-[#111111] px-2 py-0.5 border border-[#111111]">
              PROJECT {project.number}
            </span>
            <span>/</span>
            <span>{project.category}</span>
          </div>

          <h2 id="modal-project-title" className="font-heading font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight">
            {project.title}
          </h2>
          <p className="font-mono text-xs sm:text-sm font-bold text-[#555555] uppercase mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Image Preview & Caption */}
        <div className="border-2 border-[#111111] bg-white p-2">
          <div className="relative aspect-[16/9] overflow-hidden bg-slate-900 border border-[#111111]">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover editorial-photo-filter"
            />
            <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#111111] text-[#F7F7F4] font-mono text-[10px] uppercase font-bold">
              PLATE {project.number}.0 · TELEMETRY
            </div>
          </div>
          <p className="font-mono text-[11px] text-[#555555] p-2 leading-relaxed">
            {project.valueProposition}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="p-3 bg-white border border-[#111111] shadow-[2px_2px_0px_#111111]">
              <span className="font-mono text-[10px] font-bold text-[#555555] uppercase block">
                {metric.label}
              </span>
              <span className="font-heading font-black text-lg sm:text-xl text-[#111111] block mt-0.5">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Overview & Scope */}
        <div className="p-5 bg-white border border-[#111111] space-y-3">
          <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#111111] flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#F4D83D] border border-[#111111]" />
            SPECIFICATIONS & HIGHLIGHTS
          </h3>
          <p className="text-sm font-sans text-[#333333] leading-relaxed">
            {project.description}
          </p>
          <ul className="space-y-1.5 pt-2 border-t border-[#111111]/10 text-xs font-mono text-[#333333]">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#111111] font-bold">»</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Details */}
        <div className="p-4 bg-[#F4D83D]/25 border border-[#111111] font-mono text-xs text-[#111111] space-y-1">
          <span className="font-bold uppercase tracking-wider block text-[#111111]">
            METHODOLOGY & DATA ARCHITECTURE:
          </span>
          <p className="leading-relaxed text-[#222222]">
            {project.architectureDetails}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-2">
            INSTRUMENTS & LIBRARIES:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-white border border-[#111111] text-xs font-mono font-semibold text-[#111111]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t-2 border-[#111111] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#555555]">
            RECORDS VERIFIED VIA GITHUB COMMITS
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#111111] hover:bg-black text-[#F7F7F4] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#F4D83D]"
            >
              <Github className="w-4 h-4 text-[#F4D83D]" />
              <span>INSPECT REPOSITORY</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-white border border-[#111111] text-xs font-mono font-bold uppercase text-[#111111] hover:bg-[#F7F7F4]"
            >
              CLOSE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
