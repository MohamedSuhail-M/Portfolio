'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const ref = useScrollReveal<HTMLDivElement>('[data-reveal]');

  return (
    <div
      ref={ref}
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      <p
        data-reveal
        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-brand-blue"
      >
        <span className="h-px w-8 bg-brand-blue/60" />
        {eyebrow}
      </p>
      <h2
        data-reveal
        className="mt-4 font-heading text-[32px] font-bold uppercase leading-[0.98] tracking-tight text-[#271f19] sm:text-[44px]"
      >
        {title}
      </h2>
      {description && (
        <p
          data-reveal
          className="mt-4 text-[16px] leading-relaxed text-[#6c5d50] sm:text-[18px]"
        >
          {description}
        </p>
      )}
    </div>
  );
}
