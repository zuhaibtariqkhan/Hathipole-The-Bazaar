'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  MapPin,
  ChevronRight
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

  const displayedProducts = mockProducts.filter((p) => {
    if (activeTab === 'bestsellers') return p.isBestSeller;
    if (activeTab === 'new') return p.isNewArrival;
    return p.isLimitedEdition;
  });

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Full-Bleed Cinematic Hero Banner */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1E1A18]">
        <div className="absolute inset-0">
          <img
            src={heroSlides[heroIndex].image}
            alt={heroSlides[heroIndex].title}
            className="w-full h-full object-cover opacity-50 scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18] via-[#1E1A18]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-[#FCFAF7] space-y-8 pt-20">
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#CDA45A] uppercase inline-block">
            {heroSlides[heroIndex].tag}
          </span>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.15]">
            {heroSlides[heroIndex].title}
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
            {heroSlides[heroIndex].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <Link
              href="/shop"
              className="btn-gold px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 shadow-2xl"
            >
              Discover Collections <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/bespoke"
              className="px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#FCFAF7] border border-[#CDA45A]/50 hover:border-[#CDA45A] hover:bg-[#CDA45A] hover:text-[#1E1A18] rounded-xl transition-all"
            >
              Bespoke Consult
            </Link>
          </div>
        </div>

        {/* Minimal Hero Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroIndex(idx)}
              className={`h-1 transition-all rounded-full ${
                heroIndex === idx ? 'w-10 bg-[#CDA45A]' : 'w-3 bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. Value Proposition Luxury Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 hover:border-[#CDA45A] rounded-3xl p-8 space-y-4 shadow-luxury hover:-translate-y-1.5 transition-all duration-300 group text-center sm:text-left flex flex-col items-center sm:items-start">
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

          <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 hover:border-[#CDA45A] rounded-3xl p-8 space-y-4 shadow-luxury hover:-translate-y-1.5 transition-all duration-300 group text-center sm:text-left flex flex-col items-center sm:items-start">
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

          <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 hover:border-[#CDA45A] rounded-3xl p-8 space-y-4 shadow-luxury hover:-translate-y-1.5 transition-all duration-300 group text-center sm:text-left flex flex-col items-center sm:items-start">
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

          <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 hover:border-[#CDA45A] rounded-3xl p-8 space-y-4 shadow-luxury hover:-translate-y-1.5 transition-all duration-300 group text-center sm:text-left flex flex-col items-center sm:items-start">
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

      {/* 3. Brand Story Editorial */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center space-y-8">
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#CDA45A] uppercase block">
            The Philosophy of Hathipole
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#1E1A18] leading-tight max-w-3xl mx-auto">
            Hathipole The Bazaar is not a marketplace. It is a digital luxury boutique representing India’s finest craftsmanship.
          </h2>

          <p className="text-sm text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Hathipole The Bazaar connects discerning global collectors directly with India’s most revered master craftsmen. Every creation is an authentic piece of living heritage—crafted by hand using natural minerals, real gold foil, pure silks, and ancient techniques passed down through generations.
          </p>

          <div className="pt-4">
            <Link
              href="/artisans"
              className="text-xs font-semibold tracking-widest text-[#CDA45A] uppercase border-b border-[#CDA45A] pb-1 hover:text-[#1E1A18] hover:border-[#1E1A18] transition-colors"
            >
              Explore Our Heritage Story →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Curated Heritage Collections */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#CDA45A]/20 pb-6">
          <div>
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block">
              Museum Curation
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#1E1A18]">
              Curated Heritage Collections
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-semibold tracking-wider text-[#CDA45A] uppercase hover:underline"
          >
            View All Categories →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCollections.map((col) => (
            <Link
              key={col.title}
              href={col.link}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury border border-[#CDA45A]/20 hover:border-[#CDA45A] transition-all duration-500"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18]/90 via-[#1E1A18]/20 to-transparent p-6 flex flex-col justify-end text-[#FCFAF7]">
                <span className="text-[10px] text-[#E6D2A8] font-bold uppercase tracking-widest">
                  {col.region}
                </span>
                <h3 className="font-serif-luxury text-xl font-semibold group-hover:text-[#CDA45A] transition-colors mt-1">
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

      {/* 5. Featured Masterpieces */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#CDA45A]/20 pb-6">
          <div>
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block">
              Handcrafted Treasures
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#1E1A18]">
              Featured Masterpiece Collection
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-[#FCFAF7] p-1 rounded-full border border-[#CDA45A]/30">
            <button
              onClick={() => setActiveTab('bestsellers')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'bestsellers'
                  ? 'bg-[#1E1A18] text-[#E6D2A8]'
                  : 'text-gray-600 hover:text-[#1E1A18]'
              }`}
            >
              Best Sellers
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'new'
                  ? 'bg-[#1E1A18] text-[#E6D2A8]'
                  : 'text-gray-600 hover:text-[#1E1A18]'
              }`}
            >
              New Arrivals
            </button>
            <button
              onClick={() => setActiveTab('limited')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'limited'
                  ? 'bg-[#1E1A18] text-[#E6D2A8]'
                  : 'text-gray-600 hover:text-[#1E1A18]'
              }`}
            >
              Limited Editions
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. Single Master Artisan Spotlight */}
      <section className="bg-[#1E1A18] text-[#FCFAF7] py-24 border-y border-[#CDA45A]/30">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 aspect-[4/5] rounded-3xl overflow-hidden border border-[#CDA45A]/40 shadow-2xl relative">
            <img
              src={mockArtisans[0].coverImage}
              alt={mockArtisans[0].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18]/90 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs text-[#CDA45A] font-bold uppercase tracking-wider">
                  Master Artisan Spotlight
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#FCFAF7]">
                  {mockArtisans[0].name}
                </h3>
                <span className="text-xs text-gray-300">{mockArtisans[0].title}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <Quote className="w-12 h-12 text-[#CDA45A]/40" />

            <h3 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#E6D2A8] leading-tight">
              &ldquo;We use 24K real gold foil and natural minerals like lapis lazuli on cotton canvas, preserving techniques patronized by royalty since the 16th century.&rdquo;
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              {mockArtisans[0].story}
            </p>

            <div className="pt-4 border-t border-[#CDA45A]/20 flex items-center justify-between">
              <span className="text-xs text-[#CDA45A] font-semibold">
                38 Years of Royal Painting Lineage
              </span>
              <Link
                href="/artisans"
                className="text-xs font-semibold uppercase tracking-wider text-[#FCFAF7] hover:text-[#CDA45A] transition-colors"
              >
                Meet All Artisans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Uncluttered Global Connoisseur Testimonial */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6 py-8">
        <span className="font-cinzel text-xs tracking-[0.3em] text-[#CDA45A] uppercase block">
          Global Client Voice
        </span>

        <Quote className="w-10 h-10 text-[#CDA45A]/30 mx-auto" />

        <p className="font-serif-luxury text-2xl sm:text-3xl text-[#1E1A18] leading-relaxed italic font-normal">
          &ldquo;The 24K Gold Pichwai artwork arrived in New York encased in museum-grade acrylic. The detail of Shrinathji and the mineral gold shimmer is breathtaking in person.&rdquo;
        </p>

        <div className="space-y-0.5">
          <h5 className="font-serif-luxury text-base font-bold text-[#1E1A18]">Lady Eleanor Vance</h5>
          <span className="text-xs text-gray-500 font-light">Interior Architect • New York, USA</span>
        </div>
      </section>

      {/* 8. Minimalist Heritage Journal Preview */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="flex items-center justify-between border-b border-[#CDA45A]/20 pb-6">
          <div>
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block">
              Editorial Stories
            </span>
            <h2 className="font-serif-luxury text-3xl font-normal text-[#1E1A18]">
              The Heritage Journal
            </h2>
          </div>
          <Link href="/blog" className="text-xs font-semibold text-[#CDA45A] hover:underline uppercase tracking-wider">
            View All Stories →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockBlogs.map((blog) => (
            <div key={blog.id} className="bg-[#FCFAF7] border border-[#CDA45A]/20 rounded-2xl overflow-hidden shadow-luxury hover:border-[#CDA45A] transition-all group">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[10px] text-[#B56A45] font-bold uppercase tracking-wider">
                  {blog.category} • {blog.readTime}
                </span>
                <h4 className="font-serif-luxury text-lg font-bold text-[#1E1A18] group-hover:text-[#CDA45A] transition-colors line-clamp-2">
                  {blog.title}
                </h4>
                <p className="text-xs text-gray-600 line-clamp-2 font-light">{blog.excerpt}</p>
                <Link href={`/blog#${blog.slug}`} className="text-xs text-[#CDA45A] font-semibold inline-block pt-2">
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
