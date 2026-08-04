'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';
import { mockProducts } from '@/lib/data/mockProducts';
import { mockArtisans } from '@/lib/data/mockArtisans';
import { mockBlogs } from '@/lib/data/mockBlogs';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  Heart,
  Quote,
  Star,
  Compass,
  Play,
  X,
  Volume2
} from 'lucide-react';

const heroSlides = [
  {
    title: 'The World of Indian Crafts',
    subtitle: 'Authentic 24K Gold Pichwai Art, Hand-Knotted Silk Rugs & Pure Cashmere',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=2000&q=80',
    tag: 'Royal Heritage'
  },
  {
    title: 'Pure Cashmere & Jamawar',
    subtitle: 'Hand-woven by master weavers with centuries of royal patronage',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=2000&q=80',
    tag: 'Master Weaving'
  },
  {
    title: 'Makrana Marble & Pietra Dura Inlay',
    subtitle: 'Imperial marble bowls and bespoke bone inlay furniture crafted for global sanctuaries',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80',
    tag: 'Bespoke Craft'
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
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const displayedProducts = mockProducts.filter((p) => {
    if (activeTab === 'bestsellers') return p.isBestSeller;
    if (activeTab === 'new') return p.isNewArrival;
    return p.isLimitedEdition;
  });

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
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
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-[#FCFAF7] space-y-8 pt-20">
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
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-light leading-relaxed"
          >
            {heroSlides[heroIndex].subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
          >
            <Link
              href="/shop"
              className="btn-gold px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 shadow-2xl"
            >
              Discover Collections <ArrowRight className="w-4 h-4" />
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

      {/* 3. Value Proposition Luxury Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="luxury-card-interactive p-8 space-y-4 shadow-luxury hover:-translate-y-1.5 transition-all duration-300 group text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#CDA45A]/10 border border-[#CDA45A]/40 flex items-center justify-center text-[#CDA45A] group-hover:scale-110 group-hover:bg-[#CDA45A] group-hover:text-white transition-all duration-300 shadow-md">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#1E1A18] group-hover:text-[#CDA45A] transition-colors">
                100% Master Artisans
              </h4>
              <div className="w-10 h-0.5 bg-[#CDA45A]/40 group-hover:w-16 transition-all my-2 mx-auto sm:mx-0" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Certified master craft lineages preserving 400-year royal heritage techniques.
              </p>
            </div>
          </div>

          <div className="luxury-card-interactive p-8 space-y-4 shadow-luxury hover:-translate-y-1.5 transition-all duration-300 group text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#CDA45A]/10 border border-[#CDA45A]/40 flex items-center justify-center text-[#CDA45A] group-hover:scale-110 group-hover:bg-[#CDA45A] group-hover:text-white transition-all duration-300 shadow-md">
              <Truck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#1E1A18] group-hover:text-[#CDA45A] transition-colors">
                Worldwide Air Courier
              </h4>
              <div className="w-10 h-0.5 bg-[#CDA45A]/40 group-hover:w-16 transition-all my-2 mx-auto sm:mx-0" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Insured door-to-door express delivery via FedEx & DHL to 120+ countries.
              </p>
            </div>
          </div>

          <div className="luxury-card-interactive p-8 space-y-4 shadow-luxury hover:-translate-y-1.5 transition-all duration-300 group text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#CDA45A]/10 border border-[#CDA45A]/40 flex items-center justify-center text-[#CDA45A] group-hover:scale-110 group-hover:bg-[#CDA45A] group-hover:text-white transition-all duration-300 shadow-md">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#1E1A18] group-hover:text-[#CDA45A] transition-colors">
                Bespoke Crafting
              </h4>
              <div className="w-10 h-0.5 bg-[#CDA45A]/40 group-hover:w-16 transition-all my-2 mx-auto sm:mx-0" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Tailored size, color & motif commissions for interior architects & luxury homes.
              </p>
            </div>
          </div>

          <div className="luxury-card-interactive p-8 space-y-4 shadow-luxury hover:-translate-y-1.5 transition-all duration-300 group text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#CDA45A]/10 border border-[#CDA45A]/40 flex items-center justify-center text-[#CDA45A] group-hover:scale-110 group-hover:bg-[#CDA45A] group-hover:text-white transition-all duration-300 shadow-md">
              <Heart className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#1E1A18] group-hover:text-[#CDA45A] transition-colors">
                Ethical Fair Trade
              </h4>
              <div className="w-10 h-0.5 bg-[#CDA45A]/40 group-hover:w-16 transition-all my-2 mx-auto sm:mx-0" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Direct fair-trade wages supporting artisan families & endangered art forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Story Editorial */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center space-y-8">
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#CDA45A] uppercase block font-semibold">
            The Philosophy of Hathipole
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#1E1A18] leading-tight max-w-3xl mx-auto">
            Hathipole The Bazaar is a digital luxury boutique representing India’s finest craftsmanship.
          </h2>

          <p className="text-sm text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Hathipole The Bazaar connects discerning global collectors directly with India’s most revered master craftsmen. Every creation is an authentic piece of living heritage—crafted by hand using natural minerals, real gold foil, pure silks, and ancient techniques passed down through generations.
          </p>

          <div className="pt-4">
            <Link
              href="/artisans"
              className="text-xs font-bold tracking-widest text-[#CDA45A] uppercase border-b-2 border-[#CDA45A] pb-1 hover:text-[#1E1A18] hover:border-[#1E1A18] transition-colors"
            >
              Explore Our Heritage Story →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Curated Heritage Collections */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#CDA45A]/20 pb-6">
          <div>
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
              Museum Curation
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1E1A18]">
              Curated Heritage Collections
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-bold tracking-wider text-[#CDA45A] uppercase hover:underline"
          >
            View All Categories →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#CDA45A]/20 pb-6">
          <div>
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
              Handcrafted Treasures
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1E1A18]">
              Featured Masterpiece Collection
            </h2>
          </div>

          {/* Gliding Gold Tab Indicator */}
          <div className="flex items-center gap-2 bg-[#FCFAF7] p-1.5 rounded-full border border-[#CDA45A]/40 shadow-md relative">
            {(['bestsellers', 'new', 'limited'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-all z-10 capitalize ${
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 7. Master Artisan Spotlight with Interactive Video Story Player */}
      <section className="bg-[#1E1A18] text-[#FCFAF7] py-24 border-y-2 border-[#CDA45A]/40 relative overflow-hidden shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-5 aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#CDA45A]/50 shadow-2xl relative group cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
            <img
              src={mockArtisans[0].coverImage}
              alt={mockArtisans[0].name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Play Button Pulse Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18]/90 via-[#1E1A18]/40 to-transparent flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#CDA45A] text-[#1E1A18] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform animate-pulse">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <span className="text-xs font-bold text-[#E6D2A8] uppercase tracking-widest bg-[#1E1A18]/80 px-4 py-1.5 rounded-full border border-[#CDA45A]/40">
                Play Artisan Studio Story
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <Quote className="w-12 h-12 text-[#CDA45A]/50" />

            <h3 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#E6D2A8] leading-tight">
              &ldquo;We use 24K real gold foil and natural minerals like lapis lazuli on cotton canvas, preserving techniques patronized by royalty since the 16th century.&rdquo;
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              {mockArtisans[0].story}
            </p>

            <div className="pt-4 border-t border-[#CDA45A]/20 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#CDA45A] font-bold">
                38 Years of Royal Painting Lineage
              </span>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="btn-gold px-6 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> Watch Master Documentary
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1E1A18] border-2 border-[#CDA45A] rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-[#CDA45A]/30 flex items-center justify-between text-[#FCFAF7]">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-[#CDA45A]" />
                  <span className="font-serif-luxury text-lg font-bold text-[#E6D2A8]">
                    Master Artisan Rameshwar Sharma • 24K Gold Pichwai Art Studio
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1 hover:text-[#CDA45A] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="aspect-video relative bg-black">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Master Artisan Documentary"
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 8. Global Connoisseur Testimonial */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6 py-8">
        <span className="font-cinzel text-xs tracking-[0.3em] text-[#CDA45A] uppercase block font-semibold">
          Global Client Voice
        </span>

        <Quote className="w-10 h-10 text-[#CDA45A]/40 mx-auto" />

        <p className="font-serif-luxury text-2xl sm:text-3xl text-[#1E1A18] leading-relaxed italic font-normal">
          &ldquo;The 24K Gold Pichwai artwork arrived in New York encased in museum-grade acrylic. The detail of Shrinathji and the mineral gold shimmer is breathtaking in person.&rdquo;
        </p>

        <div className="space-y-0.5">
          <h5 className="font-serif-luxury text-lg font-bold text-[#1E1A18]">Lady Eleanor Vance</h5>
          <span className="text-xs text-gray-500 font-light">Interior Architect • New York, USA</span>
        </div>
      </section>

      {/* 9. Minimalist Heritage Journal Preview */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="flex items-center justify-between border-b border-[#CDA45A]/20 pb-6">
          <div>
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
              Editorial Stories
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-[#1E1A18]">
              The Heritage Journal
            </h2>
          </div>
          <Link href="/blog" className="text-xs font-bold text-[#CDA45A] hover:underline uppercase tracking-wider">
            View All Stories →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockBlogs.map((blog) => (
            <div key={blog.id} className="luxury-card-interactive flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="badge-gold-foil text-[10px] text-[#1E1A18] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {blog.category} • {blog.readTime}
                  </span>
                  <h4 className="font-serif-luxury text-xl font-bold text-[#1E1A18] group-hover:text-[#CDA45A] transition-colors line-clamp-2 mt-2">
                    {blog.title}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 font-light">{blog.excerpt}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link href={`/blog#${blog.slug}`} className="text-xs text-[#CDA45A] font-bold uppercase tracking-wider inline-flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
