'use client';

import { mockArtisans } from '@/lib/data/mockArtisans';
import { Sparkles, MapPin, Award, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ArtisansPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 space-y-16">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-cinzel text-xs tracking-[0.3em] text-[#CDA45A] uppercase block font-semibold">
          Empowering Indian Lineage Craftsmen
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-[#1E1A18] tracking-tight">
          The Artisans of Hathipole The Bazaar
        </h1>
        <div className="w-16 h-0.5 bg-[#CDA45A] mx-auto" />
        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
          Meet the master painters, carpet weavers, wood sculptors, and distillers who keep India’s 400-year-old royal art lineages alive through direct fair-trade partnership.
        </p>
      </div>

      {/* Artisans Interactive Luxury Cards */}
      <div className="space-y-12">
        {mockArtisans.map((artisan, idx) => (
          <div
            key={artisan.id}
            className={`luxury-card-interactive grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group p-2 md:p-4 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="lg:col-span-5 aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={artisan.coverImage}
                alt={artisan.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18]/90 via-[#1E1A18]/20 to-transparent flex items-end p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={artisan.avatar}
                    alt={artisan.name}
                    className="w-14 h-14 rounded-full border-2 border-[#CDA45A] object-cover shadow-lg"
                  />
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#FCFAF7] group-hover:text-[#E6D2A8] transition-colors">
                      {artisan.name}
                    </h3>
                    <span className="text-xs text-[#CDA45A] font-semibold">{artisan.title}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 md:p-8 space-y-6">
              {/* Gold Foil Badge Header */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge-gold-foil px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1E1A18] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#CDA45A]" /> {artisan.experienceYears} Years Master Experience
                </span>
                <span className="bg-[#1E1A18] text-[#E6D2A8] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 border border-[#CDA45A]/40">
                  <MapPin className="w-3.5 h-3.5 text-[#CDA45A]" /> {artisan.region}
                </span>
              </div>

              <h3 className="font-serif-luxury text-3xl md:text-4xl font-bold text-[#1E1A18] leading-tight">
                Specialty: {artisan.specialty}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed font-light">
                {artisan.story}
              </p>

              <div className="pt-4 border-t border-[#CDA45A]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-[#3E5C4B] font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#3E5C4B]" /> Certified Master Craftsman
                  </span>
                  <span className="flex items-center gap-1.5 text-[#B56A45] font-bold">
                    <Heart className="w-4 h-4 text-[#B56A45]" /> Direct Fair-Trade Beneficiary
                  </span>
                </div>

                <Link
                  href={`/shop?search=${encodeURIComponent(artisan.name.split(' ')[0])}`}
                  className="btn-gold px-6 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                >
                  View Creations <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
