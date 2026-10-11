import React, { useState } from 'react';
import { HackathonProject } from '../data/hackathonData';
import {
  X,
  Clock,
  MapPin,
  Calendar,
  Layers,
  Cpu,
  Award,
  AlertCircle,
  FileQuestion,
  HelpCircle,
  CheckCircle2,
  Terminal,
  Compass,
  ArrowRight,
  ExternalLink,
  Code2,
  ShieldCheck,
  Globe,
  UserCheck,
  Activity,
  BarChart3,
  Flame,
  Users,
  ShieldAlert,
} from 'lucide-react';

interface HackathonCaseStudyModalProps {
  project: HackathonProject | null;
  eventName: string;
  onClose: () => void;
}

export const HackathonCaseStudyModal: React.FC<HackathonCaseStudyModalProps> = ({
  project,
  eventName,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'outcomes'>('overview');

  if (!project) return null;

  const { caseStudy } = project;
  const isFullyVerified = caseStudy.problemStatement.status === 'verified';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#F7F7F4] border-2 border-[#111111] shadow-[12px_12px_0px_#111111] p-5 sm:p-9 text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-white border-2 border-[#111111] hover:bg-[#F4D83D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] shadow-[2px_2px_0px_#111111] z-10"
          aria-label="Close case study modal"
        >
          <X className="w-5 h-5 text-[#111111]" />
        </button>

        {/* Modal Top Metadata */}
        <div className="pr-12 border-b-2 border-[#111111] pb-6 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-[11px] font-black uppercase tracking-wider bg-[#F4D83D] px-2.5 py-0.5 border border-[#111111]">
              {eventName}
            </span>
            <span className="font-mono text-xs text-[#555555]">/</span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
              {project.stageLabel}
            </span>
            {isFullyVerified ? (
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-black uppercase tracking-wider bg-[#E6F4EA] text-[#137333] border border-[#137333] px-2 py-0.5">
                <ShieldCheck className="w-3 h-3 text-[#137333]" />
                VERIFIED TECHNICAL SPECIFICATION
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-black uppercase tracking-wider bg-[#FFF9D2] text-[#885500] border border-[#885500] px-2 py-0.5">
                <AlertCircle className="w-3 h-3 text-[#885500]" />
                PARTIAL SPECIFICATION · AWAITING DETAILS
              </span>
            )}
          </div>

          <h2
            id="case-study-title"
            className="font-heading font-black text-2xl sm:text-4xl text-[#111111] uppercase tracking-tight"
          >
            {project.name}
          </h2>

          {project.subtitle && (
            <p className="font-mono text-xs sm:text-sm font-bold text-[#555555] mt-1">
              {project.subtitle}
            </p>
          )}

          {/* Quick Stats Grid */}
          <div className="mt-4 flex flex-wrap items-center gap-2.5 font-mono text-xs text-[#444444]">
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 border border-[#111111] font-bold text-[#111111]">
              <Clock className="w-3.5 h-3.5 text-[#111111]" />
              {project.developmentTime}
            </span>
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 border border-[#111111] font-bold text-[#111111]">
              <Compass className="w-3.5 h-3.5 text-[#111111]" />
              Track: {project.challengeOrTheme}
            </span>
            {project.geographicFocus && (
              <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 border border-[#111111] font-bold text-[#111111]">
                <Globe className="w-3.5 h-3.5 text-[#111111]" />
                {project.geographicFocus}
              </span>
            )}
            <span className="flex items-center gap-1.5 bg-[#111111] text-[#F7F7F4] px-2.5 py-1 font-bold">
              <Award className="w-3.5 h-3.5 text-[#F4D83D]" />
              {project.progressionBadge.text}
            </span>
          </div>

          {/* Project Type & Role Pills */}
          {(project.projectType || project.roleTitle) && (
            <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[11px]">
              {project.projectType && (
                <span className="bg-[#EFEFEA] px-2 py-0.5 border border-[#111111]/30 text-[#444444]">
                  <strong className="text-[#111111]">Domain:</strong> {project.projectType}
                </span>
              )}
              {project.roleTitle && (
                <span className="bg-[#EFEFEA] px-2 py-0.5 border border-[#111111]/30 text-[#444444]">
                  <strong className="text-[#111111]">Role:</strong> {project.roleTitle}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Nav Tabs for Clean Scannability */}
        <div className="flex gap-2 border-b-2 border-[#111111] pb-2 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider border transition-all ${
              activeTab === 'overview'
                ? 'bg-[#111111] text-[#F7F7F4] border-[#111111]'
                : 'bg-white text-[#111111] border-[#111111]/30 hover:border-[#111111]'
            }`}
          >
            1. Overview & Research Framing
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider border transition-all ${
              activeTab === 'technical'
                ? 'bg-[#111111] text-[#F7F7F4] border-[#111111]'
                : 'bg-white text-[#111111] border-[#111111]/30 hover:border-[#111111]'
            }`}
          >
            2. Features, Tech & Architecture
          </button>
          <button
            onClick={() => setActiveTab('outcomes')}
            className={`px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider border transition-all ${
              activeTab === 'outcomes'
                ? 'bg-[#111111] text-[#F7F7F4] border-[#111111]'
                : 'bg-white text-[#111111] border-[#111111]/30 hover:border-[#111111]'
            }`}
          >
            3. Process, Constraints & Outcome
          </button>
        </div>

        {/* TAB 1: OVERVIEW & RESEARCH FRAMING */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* 1. Project Overview */}
            <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-2">
                01 / PROJECT OVERVIEW
              </span>
              <p className="font-serif sm:text-base text-sm leading-relaxed text-[#222222]">
                {caseStudy.projectOverview}
              </p>
            </div>

            {/* 2. Problem Statement */}
            <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
                  02 / THE PROBLEM
                </span>
                {caseStudy.problemStatement.status === 'pending_details' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FFF9D2] border border-[#111111] text-[10px] font-mono font-bold text-[#885500]">
                    <AlertCircle className="w-3 h-3 text-[#885500]" />
                    Awaiting User Details
                  </span>
                )}
                {caseStudy.problemStatement.status === 'verified' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#E6F4EA] border border-[#137333] text-[10px] font-mono font-bold text-[#137333]">
                    <CheckCircle2 className="w-3 h-3 text-[#137333]" />
                    Verified Statement
                  </span>
                )}
              </div>
              <p className="text-sm font-mono text-[#222222] font-semibold leading-relaxed bg-[#F7F7F4] p-3 border border-[#111111]/30 mb-4">
                {caseStudy.problemStatement.content}
              </p>

              {/* Problem Challenges if available */}
              {caseStudy.problemStatement.challenges && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  {caseStudy.problemStatement.challenges.map((ch, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#FBFBFA] border border-[#111111] text-xs font-mono"
                    >
                      <span className="font-bold text-[#111111] block mb-1">
                        • {ch.title}
                      </span>
                      <p className="text-[#555555] leading-relaxed">{ch.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Design Challenge Callout */}
              {caseStudy.problemStatement.designChallenge && (
                <div className="p-3 bg-[#F4D83D]/20 border-l-4 border-[#111111] font-mono text-xs text-[#111111]">
                  <strong className="block mb-1 font-black uppercase tracking-wider">
                    THE DESIGN CHALLENGE:
                  </strong>
                  <p className="italic">{caseStudy.problemStatement.designChallenge}</p>
                </div>
              )}
            </div>

            {/* 3. Research & Problem Framing (Hazard, Exposure, Vulnerability) */}
            {caseStudy.researchAndFraming && (
              <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-1">
                  03 / RESEARCH & PROBLEM FRAMING (DIMENSIONS OF RISK)
                </span>
                <p className="font-mono text-xs text-[#444444] mb-4">
                  {caseStudy.researchAndFraming.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {caseStudy.researchAndFraming.dimensions.map((dim, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#F7F7F4] border-2 border-[#111111] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-heading font-black text-lg text-[#111111] uppercase tracking-tight">
                            {dim.title}
                          </span>
                          {idx === 0 && <Flame className="w-4 h-4 text-[#D9381E]" />}
                          {idx === 1 && <Users className="w-4 h-4 text-[#1A73E8]" />}
                          {idx === 2 && <ShieldAlert className="w-4 h-4 text-[#885500]" />}
                        </div>
                        <span className="font-mono text-[10px] font-bold uppercase text-[#777777] block mb-2">
                          {dim.tagline}
                        </span>
                        <p className="font-mono text-xs text-[#333333] leading-relaxed mb-3">
                          {dim.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#111111]/20">
                        <span className="font-mono text-[10px] font-bold uppercase text-[#555555] block mb-1">
                          Sample Indicators:
                        </span>
                        <ul className="space-y-0.5">
                          {dim.examples.map((ex, i) => (
                            <li
                              key={i}
                              className="font-mono text-[11px] text-[#444444] flex items-center gap-1.5"
                            >
                              <span className="text-[#111111]">•</span> {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Objectives */}
            <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
                  04 / OBJECTIVES
                </span>
                {caseStudy.objectives.status === 'pending_details' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FFF9D2] border border-[#111111] text-[10px] font-mono font-bold text-[#885500]">
                    <AlertCircle className="w-3 h-3 text-[#885500]" />
                    Awaiting User Verification
                  </span>
                )}
                {caseStudy.objectives.status === 'verified' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#E6F4EA] border border-[#137333] text-[10px] font-mono font-bold text-[#137333]">
                    <CheckCircle2 className="w-3 h-3 text-[#137333]" />
                    Verified Goals
                  </span>
                )}
              </div>
              <ul className="space-y-2 mt-2">
                {caseStudy.objectives.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#222222]">
                    <span className="font-mono text-xs font-bold bg-[#F4D83D] px-1.5 py-0.5 border border-[#111111] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-[#333333] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: FEATURES, TECH & ARCHITECTURE */}
        {activeTab === 'technical' && (
          <div className="space-y-6">
            {/* 5. Proposed Solution */}
            <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
                  05 / PROPOSED SOLUTION & GEOGRAPHIC WORKFLOW
                </span>
                {caseStudy.proposedSolution.status === 'pending_details' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FFF9D2] border border-[#111111] text-[10px] font-mono font-bold text-[#885500]">
                    <AlertCircle className="w-3 h-3 text-[#885500]" />
                    Awaiting Architecture Details
                  </span>
                )}
              </div>
              <p className="text-sm font-mono text-[#333333] leading-relaxed bg-[#F7F7F4] p-3 border border-[#111111]/30 mb-3">
                {caseStudy.proposedSolution.content}
              </p>

              {caseStudy.proposedSolution.workflowSteps && (
                <div className="mt-3 space-y-1.5">
                  <span className="font-mono text-xs font-bold uppercase text-[#555555] block">
                    Execution Workflow:
                  </span>
                  {caseStudy.proposedSolution.workflowSteps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 bg-white border border-[#111111] font-mono text-xs text-[#222222] flex items-start gap-2"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 6. Features Actually Implemented */}
            <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
                  06 / FEATURES ACTUALLY IMPLEMENTED
                </span>
                {caseStudy.featuresImplemented.status === 'pending_details' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FFF9D2] border border-[#111111] text-[10px] font-mono font-bold text-[#885500]">
                    <AlertCircle className="w-3 h-3 text-[#885500]" />
                    Awaiting Sprint Feature List
                  </span>
                )}
                {caseStudy.featuresImplemented.status === 'verified' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#E6F4EA] border border-[#137333] text-[10px] font-mono font-bold text-[#137333]">
                    <CheckCircle2 className="w-3 h-3 text-[#137333]" />
                    Verified Implementations
                  </span>
                )}
              </div>
              <ul className="space-y-2 mt-2">
                {caseStudy.featuresImplemented.items.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#222222]">
                    <span className="font-mono text-xs font-bold bg-[#111111] text-[#F7F7F4] px-1.5 py-0.5 shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-[#333333] leading-relaxed">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 7. Individual Contribution */}
            <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
                  07 / MY INDIVIDUAL CONTRIBUTION
                </span>
                {caseStudy.individualContribution.status === 'pending_details' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FFF9D2] border border-[#111111] text-[10px] font-mono font-bold text-[#885500]">
                    <AlertCircle className="w-3 h-3 text-[#885500]" />
                    Awaiting Personal Responsibilities
                  </span>
                )}
                {caseStudy.individualContribution.status === 'verified' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#E6F4EA] border border-[#137333] text-[10px] font-mono font-bold text-[#137333]">
                    <UserCheck className="w-3 h-3 text-[#137333]" />
                    Confirmed Engineering Role
                  </span>
                )}
              </div>
              <p className="text-sm font-mono text-[#222222] font-semibold leading-relaxed bg-[#F7F7F4] p-3 border border-[#111111]/30">
                {caseStudy.individualContribution.content}
              </p>
            </div>

            {/* 8. Technology Stack */}
            <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
                  08 / TECHNOLOGY STACK
                </span>
                {caseStudy.techStack.status === 'pending_details' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FFF9D2] border border-[#111111] text-[10px] font-mono font-bold text-[#885500]">
                    <AlertCircle className="w-3 h-3 text-[#885500]" />
                    Provide Stack Confirmation
                  </span>
                )}
                {caseStudy.techStack.status === 'verified' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#E6F4EA] border border-[#137333] text-[10px] font-mono font-bold text-[#137333]">
                    <Code2 className="w-3 h-3 text-[#137333]" />
                    Verified Tools & Libraries
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`font-mono text-xs font-bold px-3 py-1 border ${
                      tag.startsWith('[')
                        ? 'bg-[#FFF9D2] border-dashed border-[#885500] text-[#885500]'
                        : 'bg-[#F7F7F4] border-[#111111] text-[#111111]'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 9 & 10. Architecture & Data Sources */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-2">
                  09 / ARCHITECTURE & WORKFLOW
                </span>
                <p className="text-xs font-mono text-[#333333] bg-[#F7F7F4] p-3 border border-[#111111]/30 leading-relaxed">
                  {caseStudy.architectureAndWorkflow.content}
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-2">
                  10 / DATA SOURCES & INTEGRATIONS
                </span>
                <p className="text-xs font-mono text-[#333333] bg-[#F7F7F4] p-3 border border-[#111111]/30 leading-relaxed">
                  {caseStudy.dataSourcesAndIntegrations.content}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PROCESS, CHALLENGES, OUTCOMES */}
        {activeTab === 'outcomes' && (
          <div className="space-y-6">
            {/* 11. Development Process and Time Constraints */}
            <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-2">
                11 / DEVELOPMENT PROCESS & TIME CONSTRAINTS
              </span>
              <p className="font-serif sm:text-base text-sm leading-relaxed text-[#222222]">
                {caseStudy.developmentProcess}
              </p>
            </div>

            {/* 12. Challenges and Limitations */}
            <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-2">
                12 / CHALLENGES & LIMITATIONS
              </span>
              <ul className="space-y-2 mt-2">
                {caseStudy.challengesAndLimitations.items.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#222222]">
                    <span className="font-mono text-xs font-bold bg-[#F4D83D] px-1.5 py-0.5 border border-[#111111] shrink-0 mt-0.5">
                      !
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-[#333333] leading-relaxed">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 13. Outcome and Lessons Learned */}
            <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-2">
                13 / OUTCOME & LESSONS LEARNED
              </span>
              <div className="p-4 bg-[#F7F7F4] border-l-4 border-[#111111] space-y-2">
                <p className="font-mono text-xs sm:text-sm text-[#111111] leading-relaxed font-bold">
                  {caseStudy.outcomeAndLessonsLearned}
                </p>
              </div>
            </div>

            {/* 14. Artifacts, Certificates & Grounding Policy */}
            <div className="p-5 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-2">
                14 / GROUNDING, CERTIFICATES & ARTIFACTS
              </span>
              <div className="space-y-3 font-mono text-xs">
                {caseStudy.linksAndArtifacts.certificateAvailable && (
                  <div className="flex items-center gap-2 p-3 bg-[#E6F4EA] border border-[#137333] text-[#137333]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span className="font-bold">
                      {caseStudy.linksAndArtifacts.certificateNote}
                    </span>
                  </div>
                )}

                {caseStudy.linksAndArtifacts.authenticityPolicy && (
                  <div className="p-3 bg-[#F4D83D]/25 border border-[#111111] text-[#111111]">
                    <strong className="block mb-1">Authenticity & Fact-Checking Policy:</strong>
                    <span>{caseStudy.linksAndArtifacts.authenticityPolicy}</span>
                  </div>
                )}

                {!isFullyVerified && (
                  <div className="p-3 bg-[#F7F7F4] border border-dashed border-[#111111]/40 text-[#555555] space-y-1">
                    <p className="font-bold text-[#111111]">
                      Pending User Assets for this project:
                    </p>
                    <p>• GitHub repository link: [Awaiting URL confirmation from user]</p>
                    <p>• Live demo or prototype link: [Awaiting URL confirmation from user]</p>
                    <p>• Authentic project screenshots: [Ready to display when uploaded]</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t-2 border-[#111111] flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#555555]">
            <span className="font-bold text-[#111111]">ACCURACY POLICY:</span> Zero unsupported technical or metric claims.
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#111111] text-[#F7F7F4] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#F4D83D] hover:text-[#111111] transition-all border border-[#111111]"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
