'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Product } from '@/lib/types';
import ProductCardMobile from './ProductCardMobile';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileFeaturedCarouselProps {
  products: Product[];
  autoSlideInterval?: number; // default 3500ms (3.5s)
}

export default function MobileFeaturedCarousel({
  products,
  autoSlideInterval = 3500
}: MobileFeaturedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Ensure we display 8 to 12 products
  const carouselProducts = products.slice(0, 12);

  // Scroll smoothly to a specific index
  const scrollToIndex = useCallback((index: number) => {
    if (!containerRef.current || !itemRefs.current[index]) return;
    const targetElement = itemRefs.current[index];
    if (targetElement) {
      const containerLeft = containerRef.current.offsetLeft;
      const targetLeft = targetElement.offsetLeft;
      containerRef.current.scrollTo({
        left: targetLeft - containerLeft - 16, // offset padding
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  }, []);

  // Next slide helper with infinite loop
  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % carouselProducts.length;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, [carouselProducts.length, scrollToIndex]);

  // Previous slide helper
  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => {
      const nextIndex = (prevIndex - 1 + carouselProducts.length) % carouselProducts.length;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, [carouselProducts.length, scrollToIndex]);

  // Handle Autoplay timer
  useEffect(() => {
    if (isInteracting || carouselProducts.length === 0) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [isInteracting, autoSlideInterval, nextSlide, carouselProducts.length]);

  // Pause interaction handler
  const handleInteractionStart = () => {
    setIsInteracting(true);
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
  };

  // Resume autoplay after user stops interacting
  const handleInteractionEnd = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 4000);
  };

  // Update active index based on scroll position during manual swipe
  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const cardWidth = containerRef.current.firstElementChild?.clientWidth || 210;
    const newIndex = Math.round(scrollLeft / (cardWidth + 14));
    if (newIndex >= 0 && newIndex < carouselProducts.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <div
      className="relative space-y-4"
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
    >
      {/* Auto-sliding Scroll Track */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-3 pt-1 -mx-6 px-6 no-scrollbar touch-pan-x scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {carouselProducts.map((product, idx) => (
          <div
            key={`${product.id}-${idx}`}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
            className="w-[62vw] max-w-[210px] shrink-0 snap-start transition-all duration-300"
          >
            <ProductCardMobile product={product} compactImageAspect="aspect-[4/4]" />
          </div>
        ))}
      </div>

      {/* Footer Navigation & Indicators Bar */}
      <div className="flex items-center justify-between px-1 pt-1">
        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-[65%] no-scrollbar py-1">
          {carouselProducts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                handleInteractionStart();
                scrollToIndex(idx);
                handleInteractionEnd();
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 shrink-0 ${
                activeIndex === idx
                  ? 'w-6 bg-[#CDA45A]'
                  : 'w-1.5 bg-[#CDA45A]/30 hover:bg-[#CDA45A]/60'
              }`}
            />
          ))}
        </div>

        {/* Quick Touch Nav Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              handleInteractionStart();
              prevSlide();
              handleInteractionEnd();
            }}
            className="w-8 h-8 rounded-full bg-white border border-[#CDA45A]/40 text-[#1E1A18] flex items-center justify-center shadow-xs active:scale-90 transition-transform"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              handleInteractionStart();
              nextSlide();
              handleInteractionEnd();
            }}
            className="w-8 h-8 rounded-full bg-white border border-[#CDA45A]/40 text-[#1E1A18] flex items-center justify-center shadow-xs active:scale-90 transition-transform"
            aria-label="Next product"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
