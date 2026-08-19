'use client';

import Image from 'next/image';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface Cert {
  title: string;
  issuer: string;
  url: string;
  logo:
    | { type: 'image'; src: string; bg: string }
    | { type: 'text'; initials: string; bg: string; text: string; ring: string };
}

const CERTS: Cert[] = [
  {
    title: 'IBM Certified Data Fundamentals',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/f9d97f15-a467-4e44-b6b2-e07f548780bc/public_url',
    logo: {
      type: 'image',
      src: '/images/logos/ibm.svg',
      bg: 'bg-white',
    },
  },
  {
    title: 'Web Development Fundamentals',
    issuer: 'IBM / Credly',
    url: 'https://www.credly.com/badges/3de757b9-216f-463c-b106-140e252357d3/linked_in_profile',
    logo: {
      type: 'text',
      initials: 'WDF',
      bg: 'bg-brand-orange/15',
      text: 'text-brand-blue',
      ring: 'ring-brand-blue/30',
    },
  },
  {
    title: 'Python For Data Science',
    issuer: 'IBM / Cognitive Class',
    url: 'https://courses.cognitiveclass.ai/certificates/6ebb427a7ba740fcabe2d503d4cc4d4c',
    logo: {
      type: 'text',
      initials: 'Py',
      bg: 'bg-brand-blue/15',
      text: 'text-brand-blue',
      ring: 'ring-brand-blue/30',
    },
  },
  {
    title: 'Deloitte Australia – Data Analytics Job Simulation',
    issuer: 'Deloitte Australia',
    url: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a355ea546f317f60a26f84e_1782565734944_completion_certificate.pdf',
    logo: {
      type: 'image',
      src: '/images/logos/deloitte.svg',
      bg: 'bg-white',
    },
  },
  {
    title: 'Analyzing and Visualizing Data with Microsoft Power BI',
    issuer: 'Microsoft',
    url: 'https://certx.in/certificate/36a28147-6eed-47a5-8342-e5f926ebba611397025',
    logo: {
      type: 'image',
      src: '/images/logos/microsoft.svg',
      bg: 'bg-white',
    },
  },
];

export function Certifications() {
  const ref = useScrollReveal<HTMLDivElement>('[data-reveal]');

  return (
    <section id="certifications" className="section-pad relative overflow-hidden bg-[#ebe2d5]/50">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified, continuously upskilling"
          description="Credentials spanning data fundamentals, visualization, analytics job simulation, and Python for data science."
        />

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CERTS.map((c) => (
            <article
              key={c.title}
              data-reveal
              className="group glass-card flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_0_40px_-12px_rgba(183,94,35,0.4)]"
            >
              <div className="flex items-start justify-between">
                {/* Logo */}
                {c.logo.type === 'image' ? (
                  <div
                    className={cn(
                      'relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl p-2',
                      c.logo.bg
                    )}
                    aria-label={`${c.issuer} logo`}
                  >
                    <Image
                      src={c.logo.src}
                      alt={`${c.issuer} logo`}
                      fill
                      className="object-contain p-2"
                      sizes="56px"
                    />
                  </div>
                ) : (
                  <div
                    className={cn(
                      'relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl ring-1 ring-inset',
                      c.logo.bg,
                      c.logo.ring
                    )}
                    aria-label={`${c.issuer} logo placeholder`}
                  >
                    <span
                      className={cn(
                        'font-heading text-sm font-bold uppercase tracking-tight',
                        c.logo.text
                      )}
                    >
                      {c.logo.initials}
                    </span>
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent" />
                  </div>
                )}
              </div>

              <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-snug tracking-tight text-[#271f19]">
                {c.title}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-[#6c5d50]">
                <BadgeCheck size={14} className="text-brand-blue" />
                {c.issuer}
              </p>

              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand-blue transition-colors hover:text-brand-orange"
              >
                <ExternalLink size={14} />
                View Credential
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
