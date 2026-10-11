import React, { useState } from 'react';
import { CERTIFICATIONS, Certification } from '../data/portfolioData';
import { Award, ArrowUpRight, Check, X, ShieldCheck } from 'lucide-react';

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
            INDUSTRY VERIFICATION
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none tracking-tight uppercase">
            CERTIFIED<br />
            <span className="relative inline-block bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
              COMPETENCIES.
            </span>
          </h2>
        </div>

        {/* Minimal Editorial List with Hover State */}
        <div className="border-t-2 border-[#111111]">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="py-6 sm:py-8 border-b border-[#111111] flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white hover:px-4 sm:hover:px-6 transition-all duration-200 group"
            >
              <div className="flex items-start md:items-center gap-4 sm:gap-6">
                <span className="font-mono text-sm sm:text-base font-bold text-[#888888] group-hover:text-[#111111] w-8">
                  0{index + 1}
                </span>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#111111] bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
                      {cert.issuer}
                    </span>
                    {cert.credentialId && (
                      <span className="font-mono text-[11px] text-[#555555]">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#111111] uppercase tracking-tight group-hover:underline">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Skills Tags & Inspection Arrow */}
              <div className="flex items-center gap-3 md:gap-4 self-start md:self-auto pl-12 md:pl-0">
                <div className="hidden lg:flex flex-wrap gap-1.5 max-w-xs justify-end">
                  {cert.skills.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 bg-[#F7F7F4] border border-[#111111]/30 text-[11px] font-mono font-medium text-[#111111]"
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
                    className="px-2.5 py-1.5 bg-white border border-[#111111] text-[11px] font-mono font-bold uppercase text-[#111111] hover:bg-[#F4D83D] transition-colors flex items-center gap-1 shrink-0"
                    title={`Open verified credential on ${cert.issuer}`}
                  >
                    <span>VERIFY LINK</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}

                <div className="w-9 h-9 border border-[#111111] bg-white group-hover:bg-[#111111] group-hover:text-[#F7F7F4] flex items-center justify-center transition-colors shrink-0">
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
            className="relative w-full max-w-lg bg-[#F7F7F4] border-2 border-[#111111] shadow-[8px_8px_0px_#111111] p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-1.5 bg-white border border-[#111111] hover:bg-[#F4D83D] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 text-[#111111]" />
            </button>

            <div className="border-b-2 border-[#111111] pb-4 pr-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] bg-[#F4D83D] px-2 py-0.5 border border-[#111111] inline-block mb-2">
                {selectedCert.issuer}
              </span>
              <h3 className="font-heading font-black text-2xl text-[#111111] uppercase tracking-tight">
                {selectedCert.title}
              </h3>
            </div>

            <div className="p-4 bg-white border border-[#111111] space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-[#111111]/15 pb-2">
                <span className="text-[#555555]">CREDENTIAL ID:</span>
                <span className="font-bold text-[#111111]">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between border-b border-[#111111]/15 pb-2">
                <span className="text-[#555555]">CANDIDATE:</span>
                <span className="font-bold text-[#111111]">MOHAMED SUHAIL M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#555555]">VERIFICATION:</span>
                <span className="font-bold text-emerald-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED CURRICULUM
                </span>
              </div>
            </div>

            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block mb-2">
                DOMAINS TESTED:
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

            <div className="pt-2 space-y-2">
              {selectedCert.verificationUrl && (
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#F4D83D] text-[#111111] border-2 border-[#111111] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E7C82F] transition-all flex items-center justify-center gap-2 shadow-[3px_3px_0px_#111111]"
                >
                  <span>OPEN OFFICIAL VERIFIED CREDENTIAL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-2.5 bg-[#111111] text-[#F7F7F4] font-mono text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
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
