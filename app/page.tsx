'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';
import ProductCardMobile from '@/components/product/ProductCardMobile';
import MobileFeaturedCarousel from '@/components/product/MobileFeaturedCarousel';
import { mockProducts } from '@/lib/data/mockProducts';
import { mockArtisans, mockArtisanStories } from '@/lib/data/mockArtisans';
import RoyalCrestDivider from '@/components/ui/RoyalCrestDivider';
import GlobalReviewsCarousel from '@/components/home/GlobalReviewsCarousel';
import {
  ArrowRight,
  Quote
} from 'lucide-react';

const heroSlides = [
  {
    tag: 'Himalayan Heritage',
    title: 'Authentic Kashmiri Pashmina',
    subtitle: 'The Finest Wool in the World',
    description: 'Handwoven from the rare Himalayan Pashmina, each shawl embodies exceptional softness, warmth, and timeless elegance. Crafted by master artisans using generations-old weaving techniques, every piece is a symbol of refined luxury.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=2000&q=80',
    ctaText: 'Explore Pashmina →',
    link: '/shop?category=pashminas'
  },
  {
    tag: 'Handwoven Legacy',
    title: 'Hand-Knotted Heritage Rugs',
    subtitle: 'Masterpieces Woven Knot by Knot',
    description: "Inspired by India's rich artistic heritage, our handcrafted rugs are created using premium wool and silk by skilled master weavers. Designed to become heirloom pieces, they bring enduring beauty to the world's finest interiors.",
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=2000&q=80',
    ctaText: 'Explore Rugs →',
    link: '/shop?category=rugs'
  },
  {
    tag: 'Royal Artistry',
    title: 'Royal Pichwai & Miniature Paintings',
    subtitle: 'Timeless Art for Modern Collectors',
    description: "Hand-painted by renowned artists using natural pigments, gold detailing, and centuries-old techniques, each painting celebrates India's royal artistic traditions and transforms any space into a gallery of heritage.",
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=2000&q=80',
    ctaText: 'Explore Paintings →',
    link: '/shop?category=paintings'
  }
];

const marqueeItems = [
  '24K GOLD PICHWAI ART',
  'HAND-KNOTTED SILK RUGS',
  'PURE CASHMERE JAMAWAR',
  'MAKRANA MARBLE PIETRA DURA',
  'NATURAL AMBER OUD ATTAR',
  'PURE MONGRA SAFFRON',
  'GHARCHOLA BANDHANI SAREES',
  'ROYAL WEDDING SHERWANIS'
];

const featuredCollections = [
  {
    title: 'Pure Silk Rugs',
    tagline: 'Hand-Knotted 900 Knots Sq. In.',
    region: 'Master Silk Guild',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=rugs'
  },
  {
    title: '24K Gold Pichwai Art',
    tagline: 'Original Natural Mineral Pigments',
    region: 'Master Art Studio',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=paintings'
  },
  {
    title: 'Pure Cashmere Pashmina',
    tagline: 'Featherlight Sozni Needlework',
    region: 'Heritage Cashmere Guild',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=pashminas'
  },
  {
    title: 'Makrana Marble Inlay',
    tagline: 'Pietra Dura Semi-Precious Stones',
    region: 'Imperial Marble Guild',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=handicrafts'
  }
];

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'bestsellers' | 'new' | 'limited'>('bestsellers');
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const displayedProducts = mockProducts.filter((p) => {
    if (activeTab === 'bestsellers') return p.isBestSeller;
    if (activeTab === 'new') return p.isNewArrival;
    return p.isLimitedEdition;
  });

  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-32 pb-16 sm:pb-24">
      {/* 1. Full-Bleed Cinematic Hero Banner with Floating Gold Orbs */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1E1A18]">
        {/* Animated Background Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.55, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[heroIndex].image}
              alt={heroSlides[heroIndex].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18] via-[#1E1A18]/40 to-transparent z-10" />

        {/* Floating Gold Orbs & Dust Animation */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-[#CDA45A]/15 blur-3xl animate-float-dust-1" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#E6D2A8]/10 blur-3xl animate-float-dust-2" />
          <div className="absolute top-1/3 right-1/6 w-60 h-60 rounded-full bg-[#CDA45A]/20 blur-3xl animate-float-dust-3" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-[#FCFAF7] space-y-6 sm:space-y-8 pt-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge-gold-foil font-cinzel text-xs tracking-[0.3em] text-[#1E1A18] font-bold uppercase inline-block px-5 py-1.5 rounded-full"
          >
            {heroSlides[heroIndex].tag}
          </motion.span>

          <motion.h1
            key={`title-${heroIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.15]"
          >
            {heroSlides[heroIndex].title}
          </motion.h1>

          <motion.p
            key={`sub-${heroIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-xl text-[#E6D2A8] font-cinzel tracking-wide"
          >
            {heroSlides[heroIndex].subtitle}
          </motion.p>

          <motion.p
            key={`desc-${heroIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {heroSlides[heroIndex].description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
          >
            <Link
              href={heroSlides[heroIndex].link}
              className="btn-gold px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 shadow-2xl"
            >
              {heroSlides[heroIndex].ctaText}
            </Link>
            <Link
              href="/bespoke"
              className="px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#FCFAF7] border border-[#CDA45A]/50 hover:border-[#CDA45A] hover:bg-[#CDA45A] hover:text-[#1E1A18] rounded-xl transition-all shadow-lg"
            >
              Bespoke Consult
            </Link>
          </motion.div>
        </div>

        {/* Hero Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroIndex(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                heroIndex === idx ? 'w-12 bg-[#CDA45A]' : 'w-4 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. Royal Craft Infinite Marquee Ticker */}
      <section className="bg-[#1E1A18] border-y-2 border-[#CDA45A]/40 py-4 overflow-hidden relative shadow-lg">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-[#E6D2A8] font-cinzel text-xs tracking-[0.3em] uppercase">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-8 font-semibold">
              <span>{item}</span>
              <span className="text-[#CDA45A] text-sm">✦</span>
            </span>
          ))}
        </div>
      </section>



      {/* Royal Crest Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <RoyalCrestDivider label="Royal Heritage" />
      </div>

      {/* 4. Brand Story Editorial */}
      <section className="max-w-5xl mx-auto px-6 py-4">
        <div className="text-center space-y-8">
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#CDA45A] uppercase block font-semibold">
            The Philosophy of Hathipole
          </span>

          <h2 className="font-serif-luxury text-2.5xl sm:text-4xl md:text-5xl font-normal text-[#1E1A18] leading-tight max-w-4xl mx-auto text-center">
            Hathipole The Bazaar is more than a luxury marketplace. It is a global destination for India&apos;s finest handcrafted heritage.
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-600 font-light leading-relaxed text-center">
            <p>
              We connect discerning collectors and design enthusiasts with India&apos;s most accomplished master artisans, preserving centuries of craftsmanship through every creation. Each piece is handcrafted using authentic materials such as pure silk, natural pigments, handwoven textiles, precious metals, and traditional techniques passed down through generations.
            </p>
            <p>
              Every purchase celebrates authenticity, sustains artisan communities, and carries forward the living legacy of Indian craftsmanship for the world to experience.
            </p>
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/artisans"
              className="text-xs font-bold tracking-widest text-[#CDA45A] uppercase border-b-2 border-[#CDA45A] pb-1 hover:text-[#1E1A18] hover:border-[#1E1A18] transition-colors inline-block"
            >
              Explore Our Heritage Story →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Discover Authentic Craftsmanship */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 border-b border-[#CDA45A]/20 pb-6 text-center sm:text-left">
          <div>
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
              Heritage Curation
            </span>
            <h2 className="font-serif-luxury text-2.5xl sm:text-4xl font-bold text-[#1E1A18]">
              Discover Authentic Craftsmanship
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-bold tracking-wider text-[#CDA45A] uppercase hover:underline"
          >
            View All Categories →
          </Link>
        </div>

        {/* Mobile View: Compact 2-column Product Grid (40-50% smaller size) */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {mockProducts.slice(0, 6).map((product) => (
            <ProductCardMobile key={`heritage-mobile-${product.id}`} product={product} />
          ))}
        </div>

        {/* Desktop and Tablet View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCollections.map((col) => (
            <Link
              key={col.title}
              href={col.link}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-luxury border border-[#CDA45A]/30 hover:border-[#CDA45A] transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18]/90 via-[#1E1A18]/25 to-transparent p-6 flex flex-col justify-end text-[#FCFAF7]">
                <span className="badge-gold-foil text-[10px] text-[#1E1A18] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-2">
                  {col.region}
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold group-hover:text-[#CDA45A] transition-colors mt-1">
                  {col.title}
                </h3>
                <span className="text-xs text-gray-300 font-light mt-0.5">
                  {col.tagline}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Featured Masterpieces with Gliding Tab Indicator */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#CDA45A]/20 pb-6 text-center sm:text-left">
          <div>
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
              Handcrafted Treasures
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1E1A18]">
              Featured Masterpiece Collection
            </h2>
          </div>

          {/* Gliding Gold Tab Indicator */}
          <div className="flex items-center gap-2 bg-[#FCFAF7] p-1.5 rounded-full border border-[#CDA45A]/40 shadow-md relative overflow-x-auto max-w-full no-scrollbar">
            {(['bestsellers', 'new', 'limited'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all z-10 capitalize whitespace-nowrap min-h-[44px] flex items-center justify-center ${
                  activeTab === tab ? 'text-[#1E1A18]' : 'text-gray-600 hover:text-[#1E1A18]'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-[#CDA45A] rounded-full z-[-1] shadow-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {tab === 'bestsellers' ? 'Best Sellers' : tab === 'new' ? 'New Arrivals' : 'Limited Editions'}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile View: Touch-Enabled Auto-Sliding Carousel (8-12 Products) */}
        <div className="block sm:hidden">
          <MobileFeaturedCarousel
            products={
              displayedProducts.length >= 8
                ? displayedProducts
                : [...displayedProducts, ...mockProducts.filter((p) => !displayedProducts.some((dp) => dp.id === p.id))]
            }
          />
        </div>

        {/* Desktop and Tablet Grid Layout (Unchanged) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 7. Master Artisan Spotlight Showcase */}
      <section className="bg-[#1E1A18] text-[#FCFAF7] py-24 border-y-2 border-[#CDA45A]/40 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#CDA45A]/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#E6D2A8]/10 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Gallery & Thumbnails */}
          <div className="lg:col-span-5 space-y-6">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#CDA45A]/50 shadow-2xl relative group bg-black/40">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStoryIndex}
                  src={mockArtisanStories[activeStoryIndex].coverImage}
                  alt={mockArtisanStories[activeStoryIndex].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18]/90 via-[#1E1A18]/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-[10px] font-bold text-[#E6D2A8] uppercase tracking-widest bg-[#1E1A18]/80 px-3.5 py-1 rounded-full border border-[#CDA45A]/40 inline-block">
                  Story {mockArtisanStories[activeStoryIndex].number} • {mockArtisanStories[activeStoryIndex].region}
                </span>
                <h4 className="font-serif-luxury text-xl font-bold text-white">
                  {mockArtisanStories[activeStoryIndex].title}
                </h4>
              </div>
            </div>

            {/* Interactive Image Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {mockArtisanStories.map((story, idx) => (
                <button
                  key={story.id}
                  onClick={() => setActiveStoryIndex(idx)}
                  className={`relative aspect-[4/5] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activeStoryIndex === idx
                      ? 'border-[#CDA45A] scale-105 shadow-lg'
                      : 'border-transparent opacity-50 hover:opacity-100 hover:scale-102'
                  }`}
                  aria-label={`View story ${story.number}`}
                >
                  <img src={story.coverImage} alt={story.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/35 hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-1 right-2 text-[10px] font-bold text-white drop-shadow-md">
                    {story.number}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Text details */}
          <div className="lg:col-span-7 space-y-6">
            <Quote className="w-12 h-12 text-[#CDA45A]/50" />

            <div className="space-y-3">
              <span className="font-cinzel text-xs font-bold text-[#CDA45A] tracking-[0.25em] uppercase">
                {mockArtisanStories[activeStoryIndex].region}
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#E6D2A8] leading-tight">
                {mockArtisanStories[activeStoryIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#B56A45] font-semibold tracking-wide uppercase">
                {mockArtisanStories[activeStoryIndex].subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed italic border-l-2 border-[#CDA45A] pl-4">
              &ldquo;{mockArtisanStories[activeStoryIndex].closingQuote}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed line-clamp-3">
              {mockArtisanStories[activeStoryIndex].paragraphs[0]}
            </p>

            <div className="pt-4 border-t border-[#CDA45A]/20 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#CDA45A] font-bold">
                70+ Years Heritage • 350+ Artisan Families
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href={mockArtisanStories[activeStoryIndex].categoryLink}
                  className="btn-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
                >
                  Explore Collection <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/artisans"
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FCFAF7] border border-[#CDA45A]/50 hover:bg-[#CDA45A] hover:text-[#1E1A18] rounded-xl transition-all shadow-sm"
                >
                  All Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Auto-Sliding Global Reviews Carousel */}
      <GlobalReviewsCarousel />
    </div>
  );
}
