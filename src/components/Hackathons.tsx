import React, { useState } from 'react';
import { HACKATHON_EVENTS, HackathonEvent, HackathonProject } from '../data/hackathonData';
import { HackathonCaseStudyModal } from './HackathonCaseStudyModal';
import {
  Trophy,
  Award,
  Clock,
  MapPin,
  Calendar,
  Compass,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  Layers,
  FileText,
  CheckCircle2,
} from 'lucide-react';

export const Hackathons: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<{
    project: HackathonProject;
    eventName: string;
  } | null>(null);

  return (
    <section id="hackathons" className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#111111]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-4 pb-4 mb-12 border-b border-[#111111]">
          <span className="font-heading font-black text-4xl sm:text-5xl text-[#111111]">
            05
          </span>
          <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-[#555555]">
            / COMPETITIVE HACKATHONS & INNOVATION
          </span>
        </div>

        {/* Section Title & Subheading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#555555] font-bold block mb-2">
              RAPID PROTOTYPING UNDER CONSTRAINTS
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none tracking-tight uppercase">
              HACKATHONS &<br />
              <span className="relative inline-block bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
                INNOVATION.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs sm:text-sm text-[#444444] leading-relaxed border-l-2 border-[#111111] pl-4">
            Two verified offline hackathons, three competitive builds, and intense time-boxed development sprints. Evaluated by academic and industry juries.
          </p>
        </div>

        {/* The Two Hackathon Events */}
        <div className="space-y-16">
          {HACKATHON_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white border-2 border-[#111111] p-6 sm:p-10 shadow-[8px_8px_0px_#111111]"
            >
              {/* Event Header Banner */}
              <div className="pb-6 mb-8 border-b-2 border-[#111111] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-black uppercase tracking-wider bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
                      EVENT {event.indexNumber}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
                      {event.format}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight">
                    {event.eventName}
                  </h3>

                  <p className="font-mono text-xs sm:text-sm font-bold text-[#444444] mt-1">
                    {event.organizer}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs">
                  <div className="flex items-center gap-2 bg-[#F7F7F4] px-3 py-1.5 border border-[#111111]">
                    <MapPin className="w-3.5 h-3.5 text-[#111111]" />
                    <span className="font-bold text-[#111111]">{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#111111] text-[#F7F7F4] px-3 py-1 font-bold">
                    <Award className="w-3.5 h-3.5 text-[#F4D83D]" />
                    <span>{event.highlightTag}</span>
                  </div>
                </div>
              </div>

              {/* Projects Grid for this event */}
              <div
                className={`grid gap-6 ${
                  event.projects.length > 1
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 max-w-2xl'
                }`}
              >
                {event.projects.map((proj, pIdx) => (
                  <article
                    key={proj.id}
                    className="border-2 border-[#111111] bg-[#F7F7F4] p-6 sm:p-7 shadow-[4px_4px_0px_#111111] flex flex-col justify-between hover:shadow-[2px_2px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
                  >
                    <div>
                      {/* Project Stage & Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#111111]/20">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#555555]">
                          {proj.stageLabel}
                        </span>
                        <span
                          className={`font-mono text-[10px] font-black uppercase px-2 py-0.5 border ${
                            proj.progressionBadge.variant === 'success'
                              ? 'bg-[#F4D83D] text-[#111111] border-[#111111]'
                              : 'bg-white text-[#111111] border-[#111111]'
                          }`}
                        >
                          {proj.progressionBadge.text}
                        </span>
                      </div>

                      {/* Project Title & Subtitle */}
                      <h4 className="font-heading font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight mb-1 group-hover:text-[#555555] transition-colors">
                        {proj.name}
                      </h4>
                      {proj.subtitle && (
                        <p className="font-mono text-xs text-[#555555] font-bold mb-3">
                          {proj.subtitle}
                        </p>
                      )}

                      {/* Challenge / Theme Pill */}
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-1.5 bg-white border border-[#111111] px-2.5 py-1 text-xs font-mono font-bold text-[#111111]">
                          <Compass className="w-3.5 h-3.5 text-[#111111]" />
                          Challenge: {proj.challengeOrTheme}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="font-serif text-sm leading-relaxed text-[#333333] mb-5">
                        {proj.verifiedSummary}
                      </p>

                      {/* Key Verified Specs */}
                      <div className="space-y-2 mb-6 font-mono text-xs">
                        <div className="flex items-center gap-2 text-[#444444]">
                          <Clock className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                          <span className="font-bold text-[#111111]">Development Window:</span>
                          <span>{proj.developmentTime}</span>
                        </div>
                        <div className="flex items-start gap-2 text-[#444444]">
                          <Award className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-[#111111]">Outcome:</span>{' '}
                            <span>{proj.outcome}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* View Case Study Action Button */}
                    <div className="pt-4 border-t border-[#111111]/20">
                      <button
                        onClick={() =>
                          setSelectedProject({
                            project: proj,
                            eventName: event.eventName,
                          })
                        }
                        className="w-full flex items-center justify-between px-4 py-3 bg-white border-2 border-[#111111] font-mono text-xs font-black uppercase tracking-wider text-[#111111] group-hover:bg-[#F4D83D] transition-all shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5"
                      >
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#111111]" />
                          View Case Study
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Special Note for Multi-Stage Velsathon */}
              {event.projects.length > 1 && (
                <div className="mt-6 p-4 bg-[#F4D83D]/25 border border-[#111111] font-mono text-xs text-[#111111] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">VELSATHON Multi-Stage Verification Note:</span> EquiRisk (Day 1 Climate Mapping) and AquaGuard (Day 2 Water Equity) belong to the <span className="underline font-bold">same two-day hackathon event</span>. Advancing from Day 1 directly unlocked entry to develop the Day 2 solution.
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Information Notice on Anti-Fabrication */}
        <div className="mt-12 p-5 bg-white border border-[#111111] shadow-[3px_3px_0px_#111111] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2.5 text-[#333333]">
            <Sparkles className="w-4 h-4 text-[#111111] shrink-0" />
            <span>
              All hackathon achievements strictly reflect verified participation, shortlisted progression, and authentic certificates.
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#111111] underline hover:text-[#555555] shrink-0"
          >
            Request Full Source / Certificate Files
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      <HackathonCaseStudyModal
        project={selectedProject?.project || null}
        eventName={selectedProject?.eventName || ''}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
