'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export interface CollectionItem {
  id: string;
  title: string;
  tagline: string;
  region: string;
  image: string;
  link: string;
  artisanCount?: string;
}

const defaultCollections: CollectionItem[] = [
  {
    id: 'rugs',
    title: 'Pure Silk Rugs',
    tagline: 'Hand-Knotted 900 Knots Sq. In.',
    region: 'Master Silk Guild',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=rugs',
    artisanCount: '120+ Master Weavers'
  },
  {
    id: 'paintings',
    title: '24K Gold Pichwai Art',
    tagline: 'Original Natural Mineral Pigments',
    region: 'Master Art Studio',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=paintings',
    artisanCount: '45 Heritage Artists'
  },
  {
    id: 'pashminas',
    title: 'Pure Cashmere Pashmina',
    tagline: 'Featherlight Sozni Needlework',
    region: 'Heritage Cashmere Guild',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=pashminas',
    artisanCount: '80+ Kashmiri Artisans'
  },
  {
    id: 'handicrafts',
    title: 'Makrana Marble Inlay',
    tagline: 'Pietra Dura Semi-Precious Stones',
    region: 'Imperial Marble Guild',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=handicrafts',
    artisanCount: '35 Lapidary Masters'
  }
];

interface CollectionSliderProps {
  collections?: CollectionItem[];
}

export default function CollectionSlider({
  collections = defaultCollections
}: CollectionSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const isScrollingRef = useRef(false);

  // Scroll to slide index
  const scrollToIndex = useCallback(
    (index: number) => {
      if (!containerRef.current || index < 0 || index >= collections.length) return;
      const targetElement = itemRefs.current[index];
      if (targetElement) {
        isScrollingRef.current = true;
        const container = containerRef.current;
        const targetLeft = targetElement.offsetLeft;
        const containerPaddingLeft = 24; // Account for px-6 padding
        
        container.scrollTo({
          left: targetLeft - containerPaddingLeft,
          behavior: 'smooth'
        });
        setActiveIndex(index);

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
    },
    [collections.length]
  );

  const prevSlide = () => {
    const nextIdx = activeIndex === 0 ? collections.length - 1 : activeIndex - 1;
    scrollToIndex(nextIdx);
  };

  const nextSlide = () => {
    const nextIdx = (activeIndex + 1) % collections.length;
    scrollToIndex(nextIdx);
  };

  // Track active slide on manual touch/drag scroll
  const handleScroll = () => {
    if (isScrollingRef.current || !containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    
    // Determine closest element to current scroll left
    let closestIndex = 0;
    let minDistance = Infinity;

    itemRefs.current.forEach((el, idx) => {
      if (!el) return;
      const distance = Math.abs(el.offsetLeft - 24 - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  return (
    <div className="relative space-y-6 group/slider">
      {/* Desktop Side Overlay Navigator Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous collection"
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#1E1A18]/90 backdrop-blur-md border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E1A18] hover:scale-110 transition-all duration-300 shadow-2xl items-center justify-center cursor-pointer group/btn"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5] text-[#D4AF37] group-hover/btn:text-[#1E1A18] transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next collection"
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#1E1A18]/90 backdrop-blur-md border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E1A18] hover:scale-110 transition-all duration-300 shadow-2xl items-center justify-center cursor-pointer group/btn"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5] text-[#D4AF37] group-hover/btn:text-[#1E1A18] transition-colors" />
      </button>

      {/* Scrollable Track */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 pt-2 -mx-6 px-6 no-scrollbar touch-pan-x scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {collections.map((col, idx) => {
          const isActive = activeIndex === idx;
          return (
            <Link
              key={col.id}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              href={col.link}
              className={`group relative shrink-0 snap-start rounded-3xl overflow-hidden shadow-luxury border transition-all duration-500 w-[82vw] sm:w-[320px] md:w-[340px] lg:w-[360px] aspect-[3/4] ${
                isActive
                  ? 'border-[#D4AF37] shadow-2xl scale-[1.01]'
                  : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/70'
              }`}
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18]/95 via-[#1E1A18]/30 to-transparent p-6 sm:p-7 flex flex-col justify-end text-[#FCFAF7]">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="badge-gold-foil text-[10px] text-[#1E1A18] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit">
                    {col.region}
                  </span>
                  {col.artisanCount && (
                    <span className="text-[10px] text-[#E6D2A8] font-cinzel tracking-wider">
                      {col.artisanCount}
                    </span>
                  )}
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold group-hover:text-[#D4AF37] transition-colors mt-1">
                  {col.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-300 font-light mt-1 flex items-center justify-between">
                  <span>{col.tagline}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Slider Navigation Indicators & Controls Bar */}
      <div className="flex items-center justify-between pt-2 px-2 border-t border-[#D4AF37]/20">
        {/* Navigation Indicator Dots */}
        <div className="flex items-center gap-2.5">
          {collections.map((col, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={`col-dot-${col.id}`}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to ${col.title} collection`}
                className={`relative h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'w-10 bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)]'
                    : 'w-2.5 bg-[#D4AF37]/30 hover:bg-[#D4AF37]/70'
                }`}
              />
            );
          })}
        </div>

        {/* Left / Right Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous collection"
            className="w-10 h-10 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E1A18] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer group/bnt1"
          >
            <ChevronLeft className="w-5 h-5 text-[#D4AF37] group-hover/bnt1:text-[#1E1A18] transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next collection"
            className="w-10 h-10 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E1A18] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer group/bnt2"
          >
            <ChevronRight className="w-5 h-5 text-[#D4AF37] group-hover/bnt2:text-[#1E1A18] transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}
