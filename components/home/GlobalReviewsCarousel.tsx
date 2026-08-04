'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockGlobalReviews, GlobalReview } from '@/lib/data/mockReviews';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface GlobalReviewsCarouselProps {
  reviews?: GlobalReview[];
  autoSlideInterval?: number; // in milliseconds
}

export default function GlobalReviewsCarousel({
  reviews = mockGlobalReviews,
  autoSlideInterval = 4500
}: GlobalReviewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Handle responsive visible card counts (1 mobile, 2 tablet, 3 desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay slider logic
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [currentIndex, isHovered, autoSlideInterval, reviews.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Get currently visible reviews array for infinite carousel rendering
  const getVisibleReviews = () => {
    const visible: GlobalReview[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (currentIndex + i) % reviews.length;
      visible.push(reviews[idx]);
    }
    return visible;
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="font-cinzel text-xs tracking-[0.3em] text-[#CDA45A] uppercase block font-semibold">
          Global Client Voice
        </span>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1A18] tracking-tight">
          Trusted by Collectors & Craft Lovers Worldwide
        </h2>

        <div className="w-16 h-0.5 bg-[#CDA45A] mx-auto" />

        <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
          Authentic reviews from customers who have brought India&apos;s finest handcrafted treasures into their homes.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative px-2 sm:px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Review Cards Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {getVisibleReviews().map((review, idx) => (
              <motion.div
                key={`${review.id}-${currentIndex}-${idx}`}
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="luxury-card-interactive p-7 flex flex-col justify-between h-full space-y-6 group hover:-translate-y-2"
              >
                <div className="space-y-4">
                  {/* Top Bar: 5 Gold Stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#CDA45A] text-[#CDA45A]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#CDA45A]/30 group-hover:text-[#CDA45A]/60 transition-colors" />
                  </div>

                  {/* Purchased Category Tag */}
                  <div className="inline-flex items-center gap-1.5 badge-gold-foil px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#1E1A18]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#CDA45A]" /> Verified Purchase • {review.purchasedCategory}
                  </div>

                  {/* Short Authentic Review */}
                  <p className="font-serif-luxury text-base sm:text-lg text-[#1E1A18] leading-relaxed italic font-normal">
                    &ldquo;{review.reviewText}&rdquo;
                  </p>
                </div>

                {/* Reviewer Details Footer */}
                <div className="pt-4 border-t border-[#CDA45A]/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#1E1A18] flex items-center gap-2">
                      <span>{review.flag}</span> {review.customerName}
                    </h4>
                    <span className="text-xs text-gray-500 font-light block">
                      {review.profession} • {review.location}
                    </span>
                  </div>

                  <span title="Verified Customer">
                    <CheckCircle2 className="w-5 h-5 text-[#3E5C4B]" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Manual Navigation Controls */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#CDA45A]/15">
          {/* Pagination Indicators / Dots */}
          <div className="flex items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentIndex === idx ? 'w-8 bg-[#CDA45A]' : 'w-2 bg-[#CDA45A]/30 hover:bg-[#CDA45A]/60'
                }`}
              />
            ))}
          </div>

          {/* Left / Right Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Review"
              className="w-10 h-10 rounded-full bg-[#FCFAF7] border border-[#CDA45A]/40 text-[#1E1A18] hover:bg-[#CDA45A] hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Review"
              className="w-10 h-10 rounded-full bg-[#FCFAF7] border border-[#CDA45A]/40 text-[#1E1A18] hover:bg-[#CDA45A] hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
