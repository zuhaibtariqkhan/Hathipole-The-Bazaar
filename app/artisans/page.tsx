'use client';

import { mockArtisans } from '@/lib/data/mockArtisans';
import { Sparkles, MapPin, Award, Heart, ShieldCheck } from 'lucide-react';

export default function ArtisansPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block">
          Empowering Indian Lineage Craftsmen
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1E1A18]">
          The Artisans of Hathipole The Bazaar
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed font-light">
          Meet the master painters, carpet weavers, wood sculptors, and distillers who keep India’s 400-year-old royal art lineages alive through fair-trade partnership.
        </p>
      </div>

      {/* Artisans Full Stories Cards */}
      <div className="space-y-12">
        {mockArtisans.map((artisan, idx) => (
          <div
            key={artisan.id}
            className={`bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-3xl overflow-hidden shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="lg:col-span-5 aspect-[4/5] relative">
              <img
                src={artisan.coverImage}
                alt={artisan.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18]/80 via-transparent to-transparent flex items-end p-6">
                <div className="flex items-center gap-3">
                  <img
                    src={artisan.avatar}
                    alt={artisan.name}
                    className="w-12 h-12 rounded-full border-2 border-[#CDA45A] object-cover"
                  />
                  <div>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#FCFAF7]">{artisan.name}</h3>
                    <span className="text-xs text-[#E6D2A8]">{artisan.title}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 md:p-12 space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#B56A45] font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" /> {artisan.region} • {artisan.experienceYears} Years of Master Experience
              </div>

              <h3 className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#1E1A18]">
                Specialty: {artisan.specialty}
              </h3>

              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                {artisan.story}
              </p>

              <div className="pt-4 border-t border-[#CDA45A]/20 flex items-center gap-6 text-xs text-gray-500">
                <span className="flex items-center gap-1 text-[#3E5C4B] font-semibold">
                  <ShieldCheck className="w-4 h-4" /> Certified Master Craftsman
                </span>
                <span className="flex items-center gap-1 text-[#CDA45A] font-semibold">
                  <Heart className="w-4 h-4" /> Direct Fair-Trade Beneficiary
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
