'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { mockArtisanStories } from '@/lib/data/mockArtisans';
import { Award, Users, MapPin, ArrowRight, ShieldCheck, Sparkles, Quote } from 'lucide-react';

export default function ArtisansPage() {
  return (
    <div className="bg-[#F7F0E7] text-[#1E1A18] min-h-screen">
      {/* 1. Grand Editorial Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-12 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 max-w-3xl mx-auto"
        >
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#D4AF37] uppercase block font-semibold">
            Preserving India’s Heritage Artistry
          </span>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold text-[#1E1A18] tracking-tight leading-tight">
            The Artisan Stories of Hathipole The Bazaar
          </h1>

          <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto" />

          <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
            Honouring centuries of traditional craft, master lineages, and rural artisan communities across India through authentic storytelling and direct fair-trade collaboration.
          </p>
        </motion.div>

        {/* 2. Integrated Brand Trust Bar (70+ Years & 350+ Artisans) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6"
        >
          <div className="bg-[#FCFAF7] border border-[#D4AF37]/30 rounded-2xl p-6 shadow-md flex items-center gap-4 text-left group hover:border-[#D4AF37] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#1E1A18]">70+ Years Legacy</h4>
              <p className="text-xs text-gray-600 font-light">Seven decades preserving authentic Indian handicrafts.</p>
            </div>
          </div>

          <div className="bg-[#FCFAF7] border border-[#D4AF37]/30 rounded-2xl p-6 shadow-md flex items-center gap-4 text-left group hover:border-[#D4AF37] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#1E1A18]">350+ Artisan Families</h4>
              <p className="text-xs text-gray-600 font-light">Direct fair-trade partnerships across India.</p>
            </div>
          </div>

          <div className="bg-[#FCFAF7] border border-[#D4AF37]/30 rounded-2xl p-6 shadow-md flex items-center gap-4 text-left group hover:border-[#D4AF37] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#1E1A18]">6 Artisan Regions</h4>
              <p className="text-xs text-gray-600 font-light">Kashmir, Rajasthan, Gujarat, Bengal, Ladakh & South India.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. The 4 Master Artisan Stories (Generous Spacing & Editorial Layout) */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 space-y-24">
        {mockArtisanStories.map((story, idx) => (
          <motion.article
            key={story.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-[#FCFAF7] border border-[#D4AF37]/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl space-y-10 relative overflow-hidden"
          >
            {/* Story Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D4AF37]/20 pb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-cinzel text-xs font-bold text-[#D4AF37] tracking-[0.25em] uppercase bg-[#1E1A18] text-[#E6D2A8] px-3.5 py-1 rounded-full border border-[#D4AF37]/40">
                    Story {story.number}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> {story.region}
                  </span>
                </div>

                <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1A18] tracking-tight">
                  {story.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#B56A45] font-semibold tracking-wide uppercase">
                  {story.subtitle}
                </p>
              </div>

              <Link
                href={story.categoryLink}
                className="btn-gold px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 whitespace-nowrap self-start md:self-auto shadow-md"
              >
                Explore Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Story Content Grid: Image + Paragraphs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Handcrafted Image */}
              <div
                className={`lg:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative border border-[#D4AF37]/40 group ${
                  idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <Image
                  src={story.coverImage}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2 text-[#E6D2A8] text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>Certified Authentic Heritage Creation</span>
                  </div>
                </div>
              </div>

              {/* Rich Editorial Paragraphs */}
              <div
                className={`lg:col-span-7 space-y-6 text-gray-800 leading-relaxed font-light text-base sm:text-lg ${
                  idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {story.paragraphs.map((para, pIdx) => {
                  if (pIdx === 0) {
                    // First paragraph with elegant drop cap
                    const firstChar = para.charAt(0);
                    const restPara = para.slice(1);
                    return (
                      <p key={pIdx} className="text-gray-800 leading-relaxed">
                        <span className="float-left text-5xl font-serif-luxury font-bold text-[#D4AF37] pr-3 pt-1 leading-none">
                          {firstChar}
                        </span>
                        {restPara}
                      </p>
                    );
                  }
                  return (
                    <p key={pIdx} className="text-gray-800 leading-relaxed">
                      {para}
                    </p>
                  );
                })}

                {/* Story Closing Highlight Quote */}
                <div className="bg-[#F7F0E7] border-l-4 border-[#D4AF37] p-6 rounded-r-2xl shadow-sm space-y-2 mt-6">
                  <Quote className="w-6 h-6 text-[#D4AF37]" />
                  <p className="font-serif-luxury text-xl sm:text-2xl text-[#1E1A18] italic font-medium leading-snug">
                    &ldquo;{story.closingQuote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* 4. Footer Trust Statement Callout */}
      <section className="max-w-5xl mx-auto px-6 pb-20 pt-8 text-center space-y-6">
        <div className="bg-[#1E1A18] border border-[#D4AF37]/40 rounded-3xl p-10 md:p-14 text-[#FCFAF7] space-y-4 shadow-2xl relative overflow-hidden">
          <Sparkles className="w-10 h-10 text-[#D4AF37] mx-auto animate-pulse" />
          <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#E6D2A8]">
            Sustaining India’s Heritage Artistry Together
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Every creation selected from Hathipole The Bazaar directly funds artisan livelihoods, supports rural education in craft villages, and ensures India’s 70-year heritage of handmade mastery lives on.
          </p>
          <div className="pt-4">
            <Link
              href="/shop"
              className="btn-gold px-8 py-3.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 shadow-xl"
            >
              Discover Handcrafted Creations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
