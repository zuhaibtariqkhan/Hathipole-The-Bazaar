'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Newspaper, ChevronLeft, ChevronRight } from 'lucide-react';

export interface PublicationMedia {
  id: string;
  name: string;
  category: string;
  logoPlaceholderText: string;
  tagline: string;
  logoUrl?: string;
  articleUrl?: string;
  publishDate?: string;
  articleTitle?: string;
  quote?: string;
}

const publications: PublicationMedia[] = [
  {
    id: 'pub-ad',
    name: 'Architectural Digest India',
    category: 'Architecture & Fine Interiors',
    logoPlaceholderText: 'ARCHITECTURAL DIGEST',
    tagline: 'The International Authority on Design & Living',
    articleTitle: 'Crafting Living Heirlooms for Global Interiors',
    publishDate: 'Upcoming Feature'
  },
  {
    id: 'pub-cnt',
    name: 'Condé Nast Traveller India',
    category: 'Luxury Travel & Heritage Guilds',
    logoPlaceholderText: 'CONDÉ NAST TRAVELLER',
    tagline: 'Truth in Travel & Cultural Heritage',
    articleTitle: 'Unveiling India’s Most Accomplished Master Artisans',
    publishDate: 'Upcoming Feature'
  },
  {
    id: 'pub-elle',
    name: 'Elle Decor India',
    category: 'Art, Textiles & Design Curation',
    logoPlaceholderText: 'ELLE DECOR',
    tagline: 'The Ultimate Guide to Fashionable Living',
    articleTitle: 'Preserving Centuries of Handwoven Pashmina & Gold Pichwai',
    publishDate: 'Upcoming Feature'
  },
  {
    id: 'pub-forbes',
    name: 'Forbes India',
    category: 'Luxury Heritage & Artisan Enterprise',
    logoPlaceholderText: 'FORBES INDIA',
    tagline: 'Leading the Future of Global Luxury & Heritage',
    articleTitle: 'Empowering Heritage Artisan Communities Worldwide',
    publishDate: 'Upcoming Feature'
  }
];

interface AsFeaturedInSectionProps {
  customPublications?: PublicationMedia[];
}

export default function AsFeaturedInSection({
  customPublications = publications
}: AsFeaturedInSectionProps) {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  return (
    <section className="py-12 sm:py-16 bg-[#FCFAF7] border-y border-[#D4AF37]/25 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/15 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-8 sm:space-y-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-3xl mx-auto"
        >
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#D4AF37] uppercase block font-semibold">
            Global Recognition
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1A18] tracking-tight">
            As Featured In
          </h2>

          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto" />

          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Celebrating India&apos;s finest handcrafted heritage through timeless artistry and luxury craftsmanship. Our journey is designed to resonate with discerning collectors, interior designers, and lovers of authentic Indian craftsmanship worldwide.
          </p>
        </motion.div>

        {/* Desktop / Tablet Grid (4 in 1 row on Desktop, 2 per row on Tablet) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customPublications.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-[#FCFAF7] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-3xl p-7 flex flex-col justify-between items-center text-center shadow-luxury hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Optional Link Overlay if Article URL exists */}
              {pub.articleUrl && (
                <a
                  href={pub.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20"
                  aria-label={`Read feature on ${pub.name}`}
                />
              )}

              {/* Publication Category Badge */}
              <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-gold-foil text-[9px] font-bold uppercase tracking-wider text-[#1E1A18]">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" /> {pub.category}
              </div>

              {/* Logo Display (Supports image logo or elegant monochrome typographic placeholder) */}
              <div className="h-16 flex items-center justify-center my-2 w-full px-2">
                {pub.logoUrl ? (
                  <img
                    src={pub.logoUrl}
                    alt={pub.name}
                    className="max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="font-cinzel text-base lg:text-lg font-bold tracking-[0.2em] text-gray-800 group-hover:text-[#D4AF37] transition-colors uppercase leading-tight select-none">
                    {pub.logoPlaceholderText}
                  </div>
                )}
              </div>

              {/* Divider & Tagline */}
              <div className="w-full pt-4 border-t border-[#D4AF37]/20 space-y-1">
                <span className="font-serif-luxury text-xs text-gray-500 font-semibold block">
                  {pub.name}
                </span>
                <span className="text-[10px] text-gray-400 font-light block line-clamp-1 italic">
                  {pub.tagline}
                </span>
              </div>

              {/* Hover Golden Accent Border Effect */}
              <div className="absolute inset-0 rounded-3xl border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/60 pointer-events-none transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Touch-Enabled Horizontal Carousel */}
        <div className="block sm:hidden space-y-4">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 pt-1 -mx-6 px-6 no-scrollbar touch-pan-x scroll-smooth">
            {customPublications.map((pub, idx) => (
              <div
                key={`mob-${pub.id}`}
                className="w-[78vw] max-w-[280px] shrink-0 snap-start bg-[#FCFAF7] border border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-md active:scale-98 transition-all"
              >
                <div className="mb-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full badge-gold-foil text-[8px] font-bold uppercase tracking-wider text-[#1E1A18]">
                  <Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" /> {pub.category}
                </div>

                <div className="h-14 flex items-center justify-center my-1">
                  <span className="font-cinzel text-sm font-bold tracking-[0.18em] text-gray-800 uppercase">
                    {pub.logoPlaceholderText}
                  </span>
                </div>

                <div className="w-full pt-3 border-t border-[#D4AF37]/20">
                  <span className="font-serif-luxury text-xs text-gray-700 font-bold block">
                    {pub.name}
                  </span>
                  <span className="text-[9px] text-gray-500 font-light block">
                    {pub.tagline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
