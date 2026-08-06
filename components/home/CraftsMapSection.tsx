'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Sparkles, ArrowRight, ShieldCheck, Award, Users } from 'lucide-react';

export interface CraftRegionData {
  id: string;
  name: string;
  shortCode: string;
  tagline: string;
  crafts: string[];
  description: string;
  artisanCount: string;
  image: string;
  link: string;
  coordinates: { x: number; y: number }; // viewBox 500x550
}

const regionsData: CraftRegionData[] = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    shortCode: 'JK',
    tagline: 'Snow-Covered Valleys of Pure Cashmere',
    crafts: ['Pashmina', 'Rugs', 'Papier Mâché', 'Walnut Wood'],
    description: 'Home to century-old weaving guilds in Srinagar, Kashmir is world-renowned for 100% pure Himalayan Cashmere Pashminas, hand-knotted silk rugs, intricately painted papier mâché heirlooms, and carved walnut woodwork.',
    artisanCount: '180+ Master Weavers',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=pashminas',
    coordinates: { x: 190, y: 80 }
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    shortCode: 'RJ',
    tagline: 'Royal Ateliers & 24K Gold Pichwai Art',
    crafts: ['Pichwai', 'Miniature Paintings', 'Marble Inlay', 'Handicrafts'],
    description: 'The imperial heartland of Indian royalty. Rajasthan’s master artists craft divine 24K gold Pichwai miniature paintings using natural mineral pigments and Makrana marble inlay techniques perfected in royal courts.',
    artisanCount: '240+ Court Artists',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=paintings',
    coordinates: { x: 150, y: 215 }
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    shortCode: 'GJ',
    tagline: 'Ancestral Bandhani & Natural Indigo Ajrakh',
    crafts: ['Bandhani', 'Ajrakh', 'Textiles'],
    description: 'Famed for microscopic tie-dye Bandhani sarees and natural indigo block-printed Ajrakh textiles created using organic dyes, copper block stamps, and river washing techniques.',
    artisanCount: '110+ Textile Masters',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=textiles',
    coordinates: { x: 110, y: 290 }
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    shortCode: 'UP',
    tagline: 'Imperial Zardozi & Fine Brassware Metallurgists',
    crafts: ['Brassware', 'Zardozi'],
    description: 'Centuries of royal heritage in Moradabad and Varanasi. Artisans hand-embroider heavy metallic gold Zardozi threads into velvet and cast intricate brassware heirlooms.',
    artisanCount: '150+ Guild Metallurgists',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=handicrafts',
    coordinates: { x: 260, y: 210 }
  },
  {
    id: 'punjab',
    name: 'Punjab',
    shortCode: 'PB',
    tagline: 'Vibrant Floral Phulkari Embroidery',
    crafts: ['Phulkari'],
    description: 'Celebrated for Phulkari ("flower work") embroidery hand-stitched with untwisted silk threads onto coarse cotton fabric, forming rich geometric and botanical tapestries.',
    artisanCount: '75 Embroidery Families',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=pashminas',
    coordinates: { x: 190, y: 150 }
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    shortCode: 'KA',
    tagline: 'Royal Mysore Silk & Aromatic Sandalwood',
    crafts: ['Mysore Silk', 'Sandalwood'],
    description: 'Renowned for pure Mysore mulberry silk woven with real gold zari borders and hand-carved royal sandalwood sculptures emitting natural fragrant oils across decades.',
    artisanCount: '90 Lapidary & Silk Guilds',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=handicrafts',
    coordinates: { x: 195, y: 435 }
  },
  {
    id: 'assam',
    name: 'Assam',
    shortCode: 'AS',
    tagline: 'Golden Muga Silk & Heritage Bamboo Weaves',
    crafts: ['Muga Silk', 'Bamboo Crafts'],
    description: 'Exclusive home of golden Muga silk—the naturally golden wild silk that shines brighter with every wash—and fine bamboo lattice architecture.',
    artisanCount: '65 Wild Silk Harvesters',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=textiles',
    coordinates: { x: 445, y: 215 }
  },
  {
    id: 'odisha',
    name: 'Odisha',
    shortCode: 'OD',
    tagline: 'Sacred Pattachitra Cloth Scrolls & Stone Carving',
    crafts: ['Pattachitra', 'Stone Carving'],
    description: 'Ancient narrative scrolls painted on treated cloth using natural stone colors and intricate black ink outlines depicting mythological epics.',
    artisanCount: '80 Heritage Painters',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=paintings',
    coordinates: { x: 345, y: 330 }
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    shortCode: 'WB',
    tagline: 'Running Needle Kantha & Lost-Wax Dokra Bronze',
    crafts: ['Kantha', 'Dokra Art', 'Terracotta'],
    description: 'Famed for running-stitch Kantha silk quilting and 4,000-year-old lost-wax Dokra non-ferrous metal casting passed down through tribal metallurgists.',
    artisanCount: '130 Dokra Masters',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=handicrafts',
    coordinates: { x: 375, y: 275 }
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    shortCode: 'TN',
    tagline: 'Temple Kanchipuram Silk & Chola Bronze Sculptures',
    crafts: ['Kanchipuram Silk', 'Bronze Sculpture'],
    description: 'World-famous heavy mulberry silk woven with pure gold zari threads and lost-wax Chola temple bronzes cast with ancient iconographic proportions.',
    artisanCount: '140 Temple Weavers',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=handicrafts',
    coordinates: { x: 235, y: 490 }
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    shortCode: 'MH',
    tagline: 'Royal Paithani Peacock Tapestries',
    crafts: ['Paithani Sarees'],
    description: 'Handwoven silk sarees featuring oblique square borders and intricate peacock and lotus motifs woven with pure gold and silver threads.',
    artisanCount: '70 Royal Weavers',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=textiles',
    coordinates: { x: 185, y: 355 }
  }
];

export default function CraftsMapSection() {
  const [selectedRegion, setSelectedRegion] = useState<CraftRegionData>(regionsData[0]);

  return (
    <section className="py-16 sm:py-24 bg-[#1E1A18] text-[#FCFAF7] border-y-2 border-[#D4AF37]/40 relative overflow-hidden shadow-2xl">
      {/* Background Ambient Glow & Dust Film */}
      <div className="film-grain-overlay opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl animate-float-dust-1" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#E6D2A8]/10 blur-3xl animate-float-dust-2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-10 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-gold-foil text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#1E1A18]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Craft Heritage Map
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#FCFAF7] tracking-tight leading-tight">
            Discover the Regions Behind Every Masterpiece
          </h2>

          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto" />

          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            From the snow-covered valleys of Kashmir to the royal ateliers of Rajasthan, explore the regions where India&apos;s most celebrated handcrafted traditions continue to flourish through generations of master artisans.
          </p>
        </div>

        {/* Mobile Horizontal Pill Selector */}
        <div className="block lg:hidden overflow-x-auto pb-2 no-scrollbar touch-pan-x">
          <div className="flex gap-2 min-w-max">
            {regionsData.map((reg) => {
              const isSelected = selectedRegion.id === reg.id;
              return (
                <button
                  key={`pill-${reg.id}`}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#D4AF37] text-[#1E1A18] shadow-[0_0_15px_rgba(212,175,55,0.6)] scale-105'
                      : 'bg-white/5 border border-[#D4AF37]/30 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {reg.name} ({reg.shortCode})
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Map of India SVG */}
          <div className="lg:col-span-6 bg-black/40 border border-[#D4AF37]/30 rounded-3xl p-4 sm:p-8 relative shadow-2xl overflow-hidden flex flex-col items-center justify-center min-h-[420px] sm:min-h-[500px]">
            {/* Ambient Map Header Note */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 text-[10px] text-[#E6D2A8] uppercase tracking-widest font-cinzel">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span>Click Marker to Explore Region</span>
            </div>

            {/* Vector Map Silhouette Container */}
            <div className="relative w-full aspect-[5/5.5] max-w-[460px] mx-auto flex items-center justify-center">
              <svg
                viewBox="0 0 500 550"
                className="w-full h-full drop-shadow-[0_0_20px_rgba(212,175,55,0.15)] select-none"
              >
                {/* Simplified Decorative India Geographical Path Outline */}
                <path
                  d="M 190 40 Q 210 50 200 80 Q 230 110 210 140 Q 280 180 320 170 Q 370 190 445 200 Q 470 220 440 250 Q 390 250 370 270 Q 380 330 350 350 Q 320 400 240 510 Q 220 510 190 450 Q 150 400 175 350 Q 120 330 100 290 Q 90 250 140 220 Q 160 170 180 140 Z"
                  fill="rgba(212, 175, 55, 0.05)"
                  stroke="rgba(212, 175, 55, 0.35)"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />

                {/* Secondary Decorative Inner Grids */}
                <path
                  d="M 190 80 L 150 215 L 260 210 L 190 80 Z M 150 215 L 110 290 L 185 355 L 150 215 Z M 185 355 L 195 435 L 235 490 L 185 355 Z M 260 210 L 375 275 L 345 330 L 260 210 Z M 375 275 L 445 215 L 375 275 Z"
                  fill="none"
                  stroke="rgba(212, 175, 55, 0.15)"
                  strokeWidth="1"
                />

                {/* Interactive Gold Location Pins */}
                {regionsData.map((reg) => {
                  const isSelected = selectedRegion.id === reg.id;
                  return (
                    <g
                      key={`map-pin-${reg.id}`}
                      onClick={() => setSelectedRegion(reg)}
                      className="cursor-pointer group"
                    >
                      {/* Pulse Ring when Active */}
                      {isSelected && (
                        <circle
                          cx={reg.coordinates.x}
                          cy={reg.coordinates.y}
                          r="18"
                          fill="none"
                          stroke="#D4AF37"
                          strokeWidth="1.5"
                          className="animate-ping opacity-75"
                        />
                      )}

                      {/* Outer Glow Halo */}
                      <circle
                        cx={reg.coordinates.x}
                        cy={reg.coordinates.y}
                        r={isSelected ? '14' : '10'}
                        fill={isSelected ? 'rgba(212, 175, 55, 0.35)' : 'rgba(212, 175, 55, 0.15)'}
                        className="transition-all duration-300 group-hover:scale-125"
                      />

                      {/* Core Metallic Gold Marker Circle */}
                      <circle
                        cx={reg.coordinates.x}
                        cy={reg.coordinates.y}
                        r={isSelected ? '7' : '5'}
                        fill={isSelected ? '#D4AF37' : '#E6D2A8'}
                        stroke="#1E1A18"
                        strokeWidth="2"
                        className="transition-all duration-300 group-hover:fill-[#D4AF37]"
                      />

                      {/* Label Text */}
                      <text
                        x={reg.coordinates.x + 10}
                        y={reg.coordinates.y + 4}
                        fill={isSelected ? '#D4AF37' : '#FCFAF7'}
                        fontSize={isSelected ? '11' : '9'}
                        fontFamily="Cinzel, serif"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        className="pointer-events-none drop-shadow-md transition-all duration-300"
                      >
                        {reg.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right Column: Dynamic Info Card updating with Framer Motion AnimatePresence */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4 }}
                className="bg-black/60 border-2 border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md relative overflow-hidden"
              >
                {/* Top Header Badge & Artisan Count */}
                <div className="flex items-center justify-between gap-2 border-b border-[#D4AF37]/20 pb-4">
                  <span className="badge-gold-foil text-[10px] text-[#1E1A18] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full">
                    {selectedRegion.name} Guild Region
                  </span>
                  <span className="text-xs text-[#E6D2A8] font-cinzel flex items-center gap-1.5 font-bold">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" /> {selectedRegion.artisanCount}
                  </span>
                </div>

                {/* Region Image & Title Banner */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl relative">
                    <img
                      src={selectedRegion.image}
                      alt={selectedRegion.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-md">
                      {selectedRegion.shortCode}
                    </span>
                  </div>

                  <div className="sm:col-span-7 space-y-1">
                    <h3 className="font-serif-luxury text-3xl font-bold text-[#FCFAF7]">
                      {selectedRegion.name}
                    </h3>
                    <p className="text-xs text-[#E6D2A8] font-cinzel tracking-wide italic">
                      &ldquo;{selectedRegion.tagline}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Craft Categories Pills */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">
                    Celebrated Craft Traditions:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedRegion.crafts.map((craft, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-white/5 border border-[#D4AF37]/30 text-xs font-bold text-gray-200 flex items-center gap-1.5"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> {craft}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Heritage Description */}
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed border-l-2 border-[#D4AF37] pl-4 py-1">
                  {selectedRegion.description}
                </p>

                {/* Action CTA Button */}
                <div className="pt-2 flex items-center justify-between border-t border-[#D4AF37]/20">
                  <span className="text-[10px] text-gray-400 font-light">
                    Direct Artisan Guild Partnership
                  </span>

                  <Link
                    href={selectedRegion.link}
                    className="btn-gold px-6 py-3 text-xs uppercase font-bold tracking-wider flex items-center gap-2 shadow-lg"
                  >
                    Explore {selectedRegion.name} Collection <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
