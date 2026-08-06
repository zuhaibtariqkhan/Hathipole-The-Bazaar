'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export interface PublicationLogo {
  id: string;
  name: string;
  logoUrl?: string; // Future-ready for real image/SVG asset
  articleUrl?: string; // Future-ready for article link
  logoComponent: React.ReactNode;
}

const publicationLogos: PublicationLogo[] = [
  {
    id: 'ad-india',
    name: 'Architectural Digest India',
    logoComponent: (
      <div className="flex flex-col items-center">
        <span className="font-serif tracking-widest text-lg sm:text-xl font-bold uppercase leading-none">
          ARCHITECTURAL DIGEST
        </span>
        <span className="text-[8px] font-sans tracking-[0.35em] text-gray-500 font-semibold uppercase mt-0.5">
          INDIA
        </span>
      </div>
    )
  },
  {
    id: 'cnt-india',
    name: 'Condé Nast Traveller India',
    logoComponent: (
      <div className="flex flex-col items-center">
        <span className="font-serif tracking-[0.2em] text-sm sm:text-base font-semibold uppercase leading-none">
          CONDÉ NAST TRAVELLER
        </span>
        <span className="text-[8px] font-sans tracking-[0.35em] text-gray-500 font-semibold uppercase mt-0.5">
          INDIA
        </span>
      </div>
    )
  },
  {
    id: 'elle-decor',
    name: 'Elle Decor India',
    logoComponent: (
      <div className="flex flex-col items-center">
        <span className="font-sans font-black tracking-[0.25em] text-base sm:text-lg uppercase leading-none">
          ELLE DECOR
        </span>
        <span className="text-[8px] font-sans tracking-[0.35em] text-gray-500 font-semibold uppercase mt-0.5">
          INDIA
        </span>
      </div>
    )
  },
  {
    id: 'forbes-india',
    name: 'Forbes India',
    logoComponent: (
      <div className="flex flex-col items-center">
        <span className="font-serif tracking-tight text-xl sm:text-2xl font-black uppercase leading-none">
          Forbes
        </span>
        <span className="text-[8px] font-sans tracking-[0.35em] text-gray-500 font-semibold uppercase mt-0.5">
          INDIA
        </span>
      </div>
    )
  }
];

interface AsFeaturedInSectionProps {
  logos?: PublicationLogo[];
  autoScrollInterval?: number; // default 4500ms for mobile
}

export default function AsFeaturedInSection({
  logos = publicationLogos,
  autoScrollInterval = 4500
}: AsFeaturedInSectionProps) {
  const [mobileIdx, setMobileIdx] = useState(0);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll loop for mobile view
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIdx((prev) => {
        const next = (prev + 1) % logos.length;
        if (mobileContainerRef.current) {
          const cardWidth = 200;
          mobileContainerRef.current.scrollTo({
            left: next * cardWidth,
            behavior: 'smooth'
          });
        }
        return next;
      });
    }, autoScrollInterval);

    return () => clearInterval(timer);
  }, [logos.length, autoScrollInterval]);

  return (
    <section className="py-10 sm:py-14 border-y border-[#D4AF37]/20 bg-[#FCFAF7]/60 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-6 text-center">
        {/* Minimal Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-cinzel text-xs font-semibold tracking-[0.35em] text-[#D4AF37] uppercase"
        >
          As Featured In
        </motion.h3>

        {/* Desktop & Tablet: Centered Single Row Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden sm:flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24 pt-2"
        >
          {logos.map((logo) => {
            const content = logo.logoUrl ? (
              <img
                src={logo.logoUrl}
                alt={logo.name}
                className="h-7 sm:h-9 w-auto object-contain grayscale opacity-65 hover:grayscale-0 hover:opacity-100 hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer"
                loading="lazy"
              />
            ) : (
              <div className="opacity-65 hover:opacity-100 hover:scale-[1.02] hover:text-[#D4AF37] text-[#1E1A18] transition-all duration-300 ease-out cursor-pointer flex items-center h-10 px-2">
                {logo.logoComponent}
              </div>
            );

            return logo.articleUrl ? (
              <a
                key={logo.id}
                href={logo.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={logo.name}
                className="inline-block"
              >
                {content}
              </a>
            ) : (
              <div key={logo.id} title={logo.name} className="inline-block">
                {content}
              </div>
            );
          })}
        </motion.div>

        {/* Mobile View: Touch-Enabled Horizontal Scrollable Strip */}
        <div className="block sm:hidden pt-1">
          <div
            ref={mobileContainerRef}
            className="flex items-center gap-8 overflow-x-auto snap-x snap-mandatory px-4 pb-2 no-scrollbar touch-pan-x scroll-smooth justify-center"
          >
            {logos.map((logo, idx) => {
              const content = logo.logoUrl ? (
                <img
                  src={logo.logoUrl}
                  alt={logo.name}
                  className="h-7 w-auto object-contain grayscale opacity-75 shrink-0 snap-center"
                  loading="lazy"
                />
              ) : (
                <div className="opacity-75 text-[#1E1A18] shrink-0 snap-center px-3 py-1">
                  {logo.logoComponent}
                </div>
              );

              return (
                <div key={`mob-${logo.id}`} className="shrink-0 snap-center">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
