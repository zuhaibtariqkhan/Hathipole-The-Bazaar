'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Play, ChevronLeft, ChevronRight, ExternalLink, X, Eye, Heart, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export interface InstagramReel {
  id: string;
  title: string;
  caption: string;
  thumbnailUrl: string;
  videoUrl?: string;
  permalink: string;
  artisanTag?: string;
  views?: string;
  likes?: string;
}

const mockInstagramReels: InstagramReel[] = [
  {
    id: 'reel-1',
    title: 'Weaving Pashmina in Srinagar',
    caption: 'Watch Master Artisan Ghulam Ahmed spin 100% pure Himalayan Cashmere on a traditional handloom. Over 180 hours of precision in every weave. #Hathipole #KashmiriPashmina #HandwovenLuxury',
    thumbnailUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    videoUrl: '/P-SHAWLS.mp4',
    permalink: 'https://instagram.com',
    artisanTag: 'Kashmir Guild',
    views: '124K',
    likes: '8.4K'
  },
  {
    id: 'reel-2',
    title: '24K Gold Pichwai Brushwork',
    caption: 'Pure natural mineral pigments and real 24K gold foil applied knot-by-knot. The divine artistry of Nathdwara Pichwai preserved across centuries. #PichwaiArt #RoyalCraft #HathipoleBazaar',
    thumbnailUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    videoUrl: '/PAINTING.mp4',
    permalink: 'https://instagram.com',
    artisanTag: 'Rajasthan Studio',
    views: '98.2K',
    likes: '6.7K'
  },
  {
    id: 'reel-3',
    title: 'Hand-Knotted Silk Rug Perfection',
    caption: '900 knots per square inch. Master weavers in Jaipur knotting fine Mulberry silk into living heirlooms. #SilkRugs #HeritageInteriors #HandmadeInIndia',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80',
    videoUrl: '/RUGS.mp4',
    permalink: 'https://instagram.com',
    artisanTag: 'Jaipur Guild',
    views: '210K',
    likes: '14.2K'
  },
  {
    id: 'reel-4',
    title: 'Makrana Marble Pietra Dura Inlay',
    caption: 'Precise chisel cuts into pure Makrana white marble, inlaying Lapis Lazuli, Malachite, and Mother of Pearl. #MarbleInlay #PietraDura #AgraCraft',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    videoUrl: '/PAINTING.mp4',
    permalink: 'https://instagram.com',
    artisanTag: 'Imperial Inlay',
    views: '85.4K',
    likes: '5.1K'
  },
  {
    id: 'reel-5',
    title: 'Royal Bandhani Tie-Dye Technique',
    caption: 'Thousands of microscopic knots tied by hand before dip-dyeing in natural indigo and saffron extracts. #Bandhani #RoyalSarees #IndianTextiles',
    thumbnailUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    videoUrl: '/P-SHAWLS.mp4',
    permalink: 'https://instagram.com',
    artisanTag: 'Gujarat Heritage',
    views: '143K',
    likes: '9.9K'
  },
  {
    id: 'reel-6',
    title: 'Distilling Natural Amber & Attar',
    caption: 'Slow steam distillation of damask rose petals and rare sandalwood using copper Deg-Bhapka stills. #Attar #NaturalPerfumery #KannaujAttar',
    thumbnailUrl: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=600&q=80',
    videoUrl: '/RUGS.mp4',
    permalink: 'https://instagram.com',
    artisanTag: 'Kannauj Guild',
    views: '76.1K',
    likes: '4.8K'
  },
  {
    id: 'reel-7',
    title: 'Silver Filigree & Kundan Jewellery',
    caption: 'Delicate fine silver wires shaped into botanical motifs by traditional Tarakasi goldsmiths. #SilverFiligree #KundanJewelry #HeritageArt',
    thumbnailUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    videoUrl: '/P-SHAWLS.mp4',
    permalink: 'https://instagram.com',
    artisanTag: 'Cuttack Masters',
    views: '112K',
    likes: '8.1K'
  }
];

interface InstagramReelsSectionProps {
  reels?: InstagramReel[];
  isLoading?: boolean;
  error?: string;
  autoScrollInterval?: number; // default 4500ms
}

export default function InstagramReelsSection({
  reels = mockInstagramReels,
  isLoading = false,
  error,
  autoScrollInterval = 4500
}: InstagramReelsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [selectedReel, setSelectedReel] = useState<InstagramReel | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth scroll to slide
  const scrollToIndex = useCallback(
    (index: number) => {
      if (!containerRef.current || index < 0 || index >= reels.length) return;
      const targetElement = itemRefs.current[index];
      if (targetElement) {
        const container = containerRef.current;
        const targetLeft = targetElement.offsetLeft;
        const paddingOffset = 24;

        container.scrollTo({
          left: targetLeft - paddingOffset,
          behavior: 'smooth'
        });
        setActiveIndex(index);
      }
    },
    [reels.length]
  );

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => {
      const nextIdx = (prev + 1) % reels.length;
      scrollToIndex(nextIdx);
      return nextIdx;
    });
  }, [reels.length, scrollToIndex]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => {
      const nextIdx = (prev - 1 + reels.length) % reels.length;
      scrollToIndex(nextIdx);
      return nextIdx;
    });
  }, [reels.length, scrollToIndex]);

  // Autoplay functionality with interaction pause
  useEffect(() => {
    if (isInteracting || isLoading || reels.length === 0) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoScrollInterval);

    return () => clearInterval(timer);
  }, [isInteracting, isLoading, autoScrollInterval, nextSlide, reels.length]);

  const handleInteractionStart = () => {
    setIsInteracting(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleInteractionEnd = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 4000);
  };

  // Track active slide position on manual scroll
  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = itemRefs.current[0]?.clientWidth || 220;

    const newIndex = Math.round(scrollLeft / (cardWidth + 16));
    if (newIndex >= 0 && newIndex < reels.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="bg-[#1E1A18] text-[#FCFAF7] py-12 sm:py-20 md:py-24 border-y border-[#CDA45A]/30 relative overflow-hidden">
      {/* Background Subtle Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <div className="absolute top-1/3 left-1/10 w-96 h-96 rounded-full bg-[#CDA45A]/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-[#E6D2A8]/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 text-center md:text-left border-b border-[#CDA45A]/20 pb-6 sm:pb-8">
          <div className="space-y-2 sm:space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CDA45A]/10 border border-[#CDA45A]/30">
              <InstagramIcon className="w-3.5 h-3.5 text-[#CDA45A]" />
              <span className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.2em] text-[#E6D2A8] uppercase font-bold">
                Instagram Reels Curation
              </span>
            </div>

            <h2 className="font-serif-luxury text-2.5xl sm:text-4xl md:text-5xl font-normal text-[#FCFAF7] tracking-tight leading-tight">
              Experience Hathipole in Motion
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Discover the artistry behind India&apos;s finest handmade creations through short films, artisan moments, behind-the-scenes craftsmanship, and stories from our heritage.
            </p>
          </div>

          {/* Desktop Navigation & Instagram Link */}
          <div className="flex items-center justify-center md:justify-end gap-3 shrink-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-[#CDA45A]/50 text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#E6D2A8] hover:bg-[#CDA45A] hover:text-[#1E1A18] transition-all flex items-center gap-2"
            >
              <InstagramIcon className="w-4 h-4" /> Follow @Hathipole
            </a>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => {
                  handleInteractionStart();
                  prevSlide();
                  handleInteractionEnd();
                }}
                className="w-10 h-10 rounded-full border border-[#CDA45A]/40 text-[#FCFAF7] hover:bg-[#CDA45A] hover:text-[#1E1A18] flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Previous reel"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  handleInteractionStart();
                  nextSlide();
                  handleInteractionEnd();
                }}
                className="w-10 h-10 rounded-full border border-[#CDA45A]/40 text-[#FCFAF7] hover:bg-[#CDA45A] hover:text-[#1E1A18] flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Next reel"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs text-center">
            Failed to load Instagram content: {error}
          </div>
        )}

        {/* Loading Skeletons */}
        {isLoading ? (
          <div className="flex gap-3.5 sm:gap-4 overflow-x-auto pb-4 no-scrollbar">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={`skel-${idx}`}
                className="w-[48vw] min-w-[170px] max-w-[210px] sm:w-[210px] md:w-[230px] lg:w-[250px] aspect-[9/16] shrink-0 rounded-2xl bg-white/5 animate-pulse border border-white/10"
              />
            ))}
          </div>
        ) : (
          /* Horizontal Reels Scroll Container */
          <div
            className="relative"
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
          >
            <div
              ref={containerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 sm:gap-5 pb-5 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 no-scrollbar touch-pan-x scroll-smooth"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {reels.map((reel, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={reel.id}
                    ref={(el) => {
                      itemRefs.current[idx] = el;
                    }}
                    onClick={() => setSelectedReel(reel)}
                    className={`group relative shrink-0 snap-start rounded-2xl overflow-hidden aspect-[9/16] w-[48vw] min-w-[170px] max-w-[210px] sm:w-[210px] md:w-[230px] lg:w-[250px] shadow-xl border cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] ${
                      isActive
                        ? 'border-[#CDA45A] shadow-[0_8px_25px_rgba(205,164,90,0.3)]'
                        : 'border-white/10 hover:border-[#CDA45A]/70'
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <img
                      src={reel.thumbnailUrl}
                      alt={reel.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Dark Ambient & Glassmorphism Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20 p-3 sm:p-4 flex flex-col justify-between">
                      {/* Top Header Badge */}
                      <div className="flex items-center justify-between gap-1.5">
                        {reel.artisanTag && (
                          <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-[#1E1A18] bg-[#E6D2A8] px-2 py-0.5 rounded-full uppercase shadow-sm">
                            {reel.artisanTag}
                          </span>
                        )}
                        {reel.views && (
                          <span className="text-[9px] sm:text-[10px] font-medium text-white/90 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded-full flex items-center gap-1 border border-white/10">
                            <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#CDA45A]" /> {reel.views}
                          </span>
                        )}
                      </div>

                      {/* Center Floating Play Button */}
                      <div className="self-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#CDA45A]/90 backdrop-blur-md border border-white/40 text-[#1E1A18] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#CDA45A] transition-all duration-300">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                      </div>

                      {/* Bottom Caption & Stats Preview */}
                      <div className="space-y-0.5 sm:space-y-1">
                        <h4 className="font-serif-luxury text-xs sm:text-base font-bold text-white line-clamp-1 group-hover:text-[#E6D2A8] transition-colors">
                          {reel.title}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-gray-300 font-light line-clamp-2 leading-tight">
                          {reel.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Indicators Dots Bar */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {reels.map((reel, idx) => (
                <button
                  key={`reel-dot-${reel.id}`}
                  onClick={() => {
                    handleInteractionStart();
                    scrollToIndex(idx);
                    handleInteractionEnd();
                  }}
                  aria-label={`Go to reel ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    activeIndex === idx
                      ? 'w-7 sm:w-8 bg-[#CDA45A] shadow-[0_0_10px_rgba(205,164,90,0.6)]'
                      : 'w-2 bg-white/20 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Reel Detail Modal */}
      <AnimatePresence>
        {selectedReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#1E1A18] border border-[#CDA45A]/40 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[92vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedReel(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 text-white hover:bg-[#CDA45A] hover:text-[#1E1A18] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Left Column: HD Video Player */}
              <div className="md:col-span-5 bg-black relative aspect-[9/12] max-h-[45vh] md:max-h-none md:aspect-[9/16] flex items-center justify-center overflow-hidden">
                {selectedReel.videoUrl ? (
                  <video
                    src={selectedReel.videoUrl}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={selectedReel.thumbnailUrl}
                    alt={selectedReel.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Right Column: Details & Instagram Permalink */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="badge-gold-foil text-[10px] text-[#1E1A18] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {selectedReel.artisanTag || 'Heritage Reel'}
                    </span>
                    {selectedReel.views && (
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-[#CDA45A]" /> {selectedReel.views} views
                      </span>
                    )}
                    {selectedReel.likes && (
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-[#CDA45A]" /> {selectedReel.likes}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FCFAF7]">
                    {selectedReel.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed whitespace-pre-line border-l-2 border-[#CDA45A]/50 pl-4 py-1">
                    {selectedReel.caption}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#CDA45A]/20 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={selectedReel.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto btn-gold px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    <InstagramIcon className="w-4 h-4" /> Watch on Instagram <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedReel(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/20 text-xs font-bold tracking-wider uppercase text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
