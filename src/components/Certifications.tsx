import React, { useState } from 'react';
import { CERTIFICATIONS, Certification } from '../data/portfolioData';
import { Award, ArrowUpRight, Check, X, ShieldCheck, ExternalLink, Sparkles, GraduationCap } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#111111]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-4 pb-4 mb-12 border-b border-[#111111]">
          <span className="font-heading font-black text-4xl sm:text-5xl text-[#111111]">
            07
          </span>
          <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-[#555555]">
            / VALIDATED CREDENTIALS & SPECIALIZATIONS
          </span>
        </div>

        {/* Title */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#555555] font-bold block mb-2">
            INDUSTRY & ACADEMIC VERIFICATION
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none tracking-tight uppercase">
            CERTIFIED<br />
            <span className="relative inline-block bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
              COMPETENCIES.
            </span>
          </h2>
        </div>

        {/* Minimal Editorial List with Hover State */}
        <div className="border-t-2 border-[#111111] dark:border-[#3F3F46]">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="py-6 sm:py-8 border-b border-[#111111] dark:border-[#3F3F46] flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white dark:hover:bg-[#1A1A1E] hover:px-4 sm:hover:px-6 transition-all duration-200 group"
            >
              <div className="flex items-start md:items-center gap-4 sm:gap-6">
                <span className="font-mono text-sm sm:text-base font-bold text-[#888888] group-hover:text-[#111111] dark:group-hover:text-[#F4D83D] w-8 transition-colors">
                  0{index + 1}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#111111] bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
                      {cert.issuer}
                    </span>
                    {cert.badge && (
                      <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#F4D83D] bg-[#111111] px-2 py-0.5 border border-[#111111] flex items-center gap-1 shadow-[2px_2px_0px_#F4D83D]">
                        <Award className="w-3 h-3 text-[#F4D83D]" />
                        {cert.badge}
                      </span>
                    )}
                    {cert.session && (
                      <span className="hidden sm:inline-block font-mono text-[10px] font-semibold text-[#555555] dark:text-[#A1A1AA] bg-[#EFEFEA] dark:bg-[#27272A] px-2 py-0.5 border border-[#111111]/30 dark:border-[#3F3F46]">
                        {cert.session}
                      </span>
                    )}
                    {cert.credentialId && (
                      <span className="font-mono text-[11px] text-[#555555] dark:text-[#A1A1AA]">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-[#F4F4F5] group-hover:text-[#111111] dark:group-hover:text-[#F4D83D] uppercase tracking-tight group-hover:underline flex items-center gap-2 transition-colors">
                    <span>{cert.title}</span>
                  </h3>
                  
                  {cert.score && (
                    <div className="font-mono text-xs text-[#555555] dark:text-[#A1A1AA] font-semibold mt-1 flex items-center gap-2">
                      <span className="text-[#111111] dark:text-[#E4E4E7] font-bold">Consolidated Score: {cert.score}</span>
                      {cert.credits && <span>· {cert.credits}</span>}
                    </div>
                  )}
                </div>
              </div>

              {/* Skills Tags & Inspection Arrow */}
              <div className="flex items-center gap-3 md:gap-4 self-start md:self-auto pl-12 md:pl-0">
                <div className="hidden lg:flex flex-wrap gap-1.5 max-w-xs justify-end">
                  {cert.skills.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 bg-[#F7F7F4] dark:bg-[#27272A] border border-[#111111]/30 dark:border-[#3F3F46] text-[11px] font-mono font-medium text-[#111111] dark:text-[#E4E4E7]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1.5 bg-white dark:bg-[#18181B] border border-[#111111] dark:border-[#3F3F46] text-[11px] font-mono font-bold uppercase text-[#111111] dark:text-[#F4F4F5] hover:bg-[#F4D83D] dark:hover:bg-[#F4D83D] dark:hover:text-[#111111] transition-colors flex items-center gap-1.5 shrink-0 shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000]"
                    title={`Open verified credential on ${cert.issuer}`}
                  >
                    <span>VERIFY CREDENTIAL</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                <div className="w-9 h-9 border border-[#111111] dark:border-[#3F3F46] bg-white dark:bg-[#18181B] text-[#111111] dark:text-[#F4F4F5] group-hover:bg-[#111111] group-hover:text-[#F7F7F4] dark:group-hover:bg-[#F4D83D] dark:group-hover:text-[#111111] flex items-center justify-center transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Credential Inspection Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F7F7F4] border-2 border-[#111111] shadow-[10px_10px_0px_#111111] p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-1.5 bg-white border border-[#111111] hover:bg-[#F4D83D] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 text-[#111111]" />
            </button>

            {/* Modal Header */}
            <div className="border-b-2 border-[#111111] pb-4 pr-10">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
                  {selectedCert.issuer}
                </span>
                {selectedCert.badge && (
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#F4D83D] bg-[#111111] px-2.5 py-0.5 border border-[#111111] flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#F4D83D]" />
                    {selectedCert.badge}
                  </span>
                )}
                {selectedCert.session && (
                  <span className="font-mono text-[10px] font-semibold text-[#555555] bg-white px-2 py-0.5 border border-[#111111]/30">
                    {selectedCert.session}
                  </span>
                )}
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight">
                {selectedCert.title}
              </h3>
            </div>

            {/* Official NPTEL Certificate Authentic Card Simulation */}
            {selectedCert.id === 'nptel-python-for-data-science' && (
              <div className="p-5 sm:p-6 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111] space-y-4 font-sans relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#111111]/20 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#C92A2A] text-white text-[10px] font-heading font-black tracking-widest uppercase">
                      ELITE
                    </span>
                    <span className="font-heading font-bold text-xs sm:text-sm text-[#111111] tracking-wide uppercase">
                      NPTEL ONLINE CERTIFICATION
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#666666] font-bold">
                    Govt. of India / MoE Funded
                  </span>
                </div>

                <div className="text-center py-2 space-y-1">
                  <p className="text-xs font-serif italic text-[#555555]">This certificate is awarded to</p>
                  <h4 className="font-heading font-black text-xl sm:text-2xl text-[#111111] tracking-tight uppercase">
                    MOHAMED SUHAIL M
                  </h4>
                  <p className="text-xs text-[#555555]">for successfully completing the course</p>
                  <p className="font-heading font-extrabold text-base sm:text-lg text-[#111111] tracking-wide uppercase">
                    PYTHON FOR DATA SCIENCE
                  </p>
                  <p className="font-mono text-sm font-bold text-[#111111] pt-1">
                    with a consolidated score of <span className="bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">62%</span>
                  </p>
                </div>

                {/* Score breakdown table */}
                <div className="grid grid-cols-2 border border-[#111111] text-center font-mono text-xs">
                  <div className="p-2 border-r border-[#111111] bg-[#F7F7F4]">
                    <div className="text-[10px] text-[#555555] font-semibold">ONLINE ASSIGNMENTS</div>
                    <div className="font-black text-sm text-[#111111] mt-0.5">22.33 / 25</div>
                  </div>
                  <div className="p-2 bg-[#F7F7F4]">
                    <div className="text-[10px] text-[#555555] font-semibold">PROCTORED EXAM</div>
                    <div className="font-black text-sm text-[#111111] mt-0.5">39 / 75</div>
                  </div>
                </div>

                {/* Footnote details */}
                <div className="flex flex-wrap items-center justify-between text-[10px] font-mono text-[#555555] pt-2 border-t border-[#111111]/15">
                  <span>Indian Institute of Technology Madras</span>
                  <span>Jul–Aug 2026 (4 week course)</span>
                  <span className="font-bold text-[#111111]">Roll No: NPTEL26CS107S153502083</span>
                </div>
              </div>
            )}

            {/* Standard Verification Details Table */}
            <div className="p-4 bg-white border border-[#111111] space-y-2.5 font-mono text-xs">
              <div className="flex justify-between border-b border-[#111111]/15 pb-2">
                <span className="text-[#555555]">CREDENTIAL ID / ROLL NO:</span>
                <span className="font-bold text-[#111111]">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between border-b border-[#111111]/15 pb-2">
                <span className="text-[#555555]">CANDIDATE:</span>
                <span className="font-bold text-[#111111]">MOHAMED SUHAIL M</span>
              </div>
              {selectedCert.score && (
                <div className="flex justify-between border-b border-[#111111]/15 pb-2">
                  <span className="text-[#555555]">SCORE / DISTINCTION:</span>
                  <span className="font-bold text-[#111111]">{selectedCert.score}</span>
                </div>
              )}
              {selectedCert.examBreakdown && (
                <div className="flex justify-between border-b border-[#111111]/15 pb-2">
                  <span className="text-[#555555]">EXAM BREAKDOWN:</span>
                  <span className="font-bold text-[#111111]">{selectedCert.examBreakdown}</span>
                </div>
              )}
              {selectedCert.credits && (
                <div className="flex justify-between border-b border-[#111111]/15 pb-2">
                  <span className="text-[#555555]">ACADEMIC CREDITS:</span>
                  <span className="font-bold text-[#111111]">{selectedCert.credits}</span>
                </div>
              )}
              {selectedCert.session && (
                <div className="flex justify-between border-b border-[#111111]/15 pb-2">
                  <span className="text-[#555555]">SESSION:</span>
                  <span className="font-bold text-[#111111]">{selectedCert.session}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-[#555555]">VERIFICATION:</span>
                <span className="font-bold text-emerald-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> OFFICIAL ACCREDITED CURRICULUM
                </span>
              </div>
            </div>

            {/* Domains Tested */}
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-2">
                DOMAINS & COMPETENCIES TESTED:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 bg-white border border-[#111111] text-xs font-mono font-bold text-[#111111]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              {selectedCert.verificationUrl && (
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#F4D83D] text-[#111111] border-2 border-[#111111] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E7C82F] transition-all flex items-center justify-center gap-2 shadow-[3px_3px_0px_#111111] cursor-pointer"
                >
                  <span>VERIFY ON OFFICIAL PORTAL</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="w-full py-2.5 bg-[#111111] text-[#F7F7F4] font-mono text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
              >
                CLOSE INSPECTION
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
