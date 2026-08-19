'use client';

import { Github, Linkedin, ArrowUp } from 'lucide-react';

const GITHUB = 'https://github.com/MohamedSuhail-M';
const LINKEDIN = 'https://www.linkedin.com/in/mohamedsuhail2101/';

export function Footer() {
  return (
    <footer className="relative border-t border-brand-blue/15 bg-[#ebe2d5]/60 py-12">
      <div className="container-portfolio">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="font-heading text-lg font-bold uppercase tracking-wide text-brand-blue"
            >
              Mohamed Suhail M
            </a>
            <p className="mt-1 text-sm font-semibold text-[#6c5d50]">
              © 2026 Mohamed Suhail M. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-[#6c5d50]/70">
              Built with Next.js, Tailwind CSS, and GSAP.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-blue/20 bg-[#fffaf2]/70 text-brand-blue transition-all hover:border-brand-blue hover:bg-brand-orange/15"
            >
              <Github size={18} />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-blue/20 bg-[#fffaf2]/70 text-brand-blue transition-all hover:border-brand-blue hover:bg-brand-orange/15"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-blue/20 bg-[#fffaf2]/70 text-brand-blue transition-all hover:border-brand-blue hover:bg-brand-orange/15"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
