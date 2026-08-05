import { ShieldCheck, Award, Sparkles, CheckCircle2, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Authenticity Guarantee | Hathipole The Bazaar',
  description: 'Certified artisan origin, 70-year heritage legacy, and genuine materials verification.'
};

export default function AuthenticityPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-14 space-y-10">
      <div className="text-center space-y-4 border-b border-[#CDA45A]/20 pb-8">
        <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
          70+ Years Heritage Legacy
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1E1A18]">
          Authenticity & Craft Guarantee
        </h1>
        <p className="text-xs text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
          Every creation shipped by Hathipole The Bazaar comes with an official hand-signed Certificate of Authenticity and Craft Origin.
        </p>
      </div>

      <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-3xl p-8 sm:p-12 space-y-8 shadow-luxury">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-[#F7F0E7] border border-[#CDA45A]/30 rounded-2xl space-y-2">
            <ShieldCheck className="w-8 h-8 text-[#CDA45A] mx-auto" />
            <h3 className="font-serif-luxury text-lg font-bold text-[#1E1A18]">100% Genuine Materials</h3>
            <p className="text-xs text-gray-600 font-light">Pure mulberry silk, 24K real gold foil, pure Himalayan Pashmina, and Makrana marble.</p>
          </div>

          <div className="p-6 bg-[#F7F0E7] border border-[#CDA45A]/30 rounded-2xl space-y-2">
            <Award className="w-8 h-8 text-[#CDA45A] mx-auto" />
            <h3 className="font-serif-luxury text-lg font-bold text-[#1E1A18]">Master Guild Pedigree</h3>
            <p className="text-xs text-gray-600 font-light">Crafted exclusively by recognized master artisan lineages with decades of hereditary mastery.</p>
          </div>

          <div className="p-6 bg-[#F7F0E7] border border-[#CDA45A]/30 rounded-2xl space-y-2">
            <Sparkles className="w-8 h-8 text-[#CDA45A] mx-auto" />
            <h3 className="font-serif-luxury text-lg font-bold text-[#1E1A18]">Serialized Certificate</h3>
            <p className="text-xs text-gray-600 font-light">Includes a custom serial number, artisan signature, and guild origin seal in every package.</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-light border-t border-[#CDA45A]/20 pt-8">
          <h2 className="font-serif-luxury text-2xl font-bold text-[#1E1A18] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#3E5C4B]" /> Direct Fair-Trade Artisan Empowerment
          </h2>
          <p>
            By certifying the authentic origin of every creation, Hathipole The Bazaar protects traditional craft guilds from counterfeit mass-production and ensures direct fair-trade income for 350+ artisan families across Kashmir, Rajasthan, Gujarat, Ladakh, and Bengal.
          </p>
        </div>

        <div className="pt-6 border-t border-[#CDA45A]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500">Explore the stories of the artisans behind your creations.</span>
          <Link href="/artisans" className="btn-gold px-6 py-2.5 text-xs uppercase font-bold tracking-wider">
            Explore Artisan Stories
          </Link>
        </div>
      </div>
    </div>
  );
}
