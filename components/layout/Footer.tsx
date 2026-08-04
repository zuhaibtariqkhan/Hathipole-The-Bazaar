'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store/useStore';
import {
  ShieldCheck,
  Truck,
  Sparkles,
  Heart,
  Mail,
  ArrowRight,
  MapPin,
  Phone,
  CheckCircle2
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useStore();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    showToast('Welcome to Royal Crafts Society! Use promo code ROYAL10 for 10% off.');
  };

  return (
    <footer className="bg-[#1E1A18] text-[#FCFAF7] border-t-2 border-[#CDA45A]/40 pt-20 pb-12">
      {/* Value Proposition & Trust Badges Strip - Grand & Spacious */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16 border-b border-[#CDA45A]/25">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#CDA45A]/15 border border-[#CDA45A]/50 flex items-center justify-center text-[#CDA45A] shadow-lg">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h4 className="font-serif-luxury text-xl font-bold text-[#E6D2A8]">
              100% Authentic Artisans
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Every creation is ethically hand-crafted by master craftsmen across traditional artisan guilds.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#CDA45A]/15 border border-[#CDA45A]/50 flex items-center justify-center text-[#CDA45A] shadow-lg">
              <Truck className="w-7 h-7" />
            </div>
            <h4 className="font-serif-luxury text-xl font-bold text-[#E6D2A8]">
              Worldwide Express Shipping
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Insured door-to-door air courier via FedEx & DHL Express to over 120 target countries worldwide.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#CDA45A]/15 border border-[#CDA45A]/50 flex items-center justify-center text-[#CDA45A] shadow-lg">
              <Sparkles className="w-7 h-7" />
            </div>
            <h4 className="font-serif-luxury text-xl font-bold text-[#E6D2A8]">
              Bespoke Crafting
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Custom size, color, and monogram requests for interior designers, architects, and luxury buyers.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#CDA45A]/15 border border-[#CDA45A]/50 flex items-center justify-center text-[#CDA45A] shadow-lg">
              <Heart className="w-7 h-7" />
            </div>
            <h4 className="font-serif-luxury text-xl font-bold text-[#E6D2A8]">
              Fair Artisan Support
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Direct fair-trade wages supporting artisan families and preserving endangered heritage art forms.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Banner - Expansive Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 border-b border-[#CDA45A]/25">
        <div className="bg-[#2A2421] border border-[#CDA45A]/40 rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="max-w-2xl text-center lg:text-left space-y-3">
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
              Join the Royal Crafts Society
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#FCFAF7] leading-tight">
              Receive 10% Off Your First Handcrafted Order
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Subscribe for private collection previews, master artisan stories, and exclusive heritage invitations.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-3 bg-[#CDA45A]/20 border border-[#CDA45A] text-[#E6D2A8] px-8 py-5 rounded-2xl text-sm font-semibold shadow-lg">
                <CheckCircle2 className="w-6 h-6 text-[#CDA45A]" />
                Thank you! Use promo code <strong className="text-white text-base ml-1">ROYAL10</strong> at checkout.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="w-full bg-[#1E1A18] border border-[#CDA45A]/40 focus:border-[#CDA45A] text-sm text-[#FCFAF7] placeholder-gray-500 pl-12 pr-4 py-4 rounded-2xl focus:outline-none shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 whitespace-nowrap shadow-xl"
                >
                  Join Society <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content - Grand Logo & Clear Columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-sm">
        {/* Grand Brand Logo & Description Column */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="inline-block">
            <img
              src="/logo-transp.png"
              alt="Hathipole The Bazaar Logo"
              className="h-24 sm:h-28 lg:h-36 w-auto object-contain hover:opacity-95 transition-opacity duration-300 filter drop-shadow-md"
            />
          </Link>
          <p className="text-gray-300 leading-relaxed max-w-md text-xs sm:text-sm font-light">
            Hathipole The Bazaar is a digital luxury boutique bringing together India’s finest master artisans, traditional art forms, and royal handcrafted creations for global connoisseurs.
          </p>
          <div className="space-y-3 text-gray-300 pt-2 font-medium">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#CDA45A] shrink-0" />
              <span>Royal Artisan Guilds & Heritage Craft Studios</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#CDA45A] shrink-0" />
              <span>concierge@hathipole.com</span>
            </div>
          </div>
        </div>

        {/* Collections Column */}
        <div className="space-y-4">
          <h5 className="font-serif-luxury text-lg font-bold text-[#E6D2A8] uppercase tracking-wider border-b border-[#CDA45A]/20 pb-2">
            Collections
          </h5>
          <ul className="space-y-2.5 text-gray-300 text-xs sm:text-sm font-light">
            <li><Link href="/shop?category=rugs" className="hover:text-[#CDA45A] transition-colors">Fine Silk Rugs</Link></li>
            <li><Link href="/shop?category=pashminas" className="hover:text-[#CDA45A] transition-colors">Pure Cashmere Pashmina</Link></li>
            <li><Link href="/shop?category=paintings" className="hover:text-[#CDA45A] transition-colors">24K Gold Pichwai Art</Link></li>
            <li><Link href="/shop?category=handicrafts" className="hover:text-[#CDA45A] transition-colors">Marble Pietra Dura Inlay</Link></li>
            <li><Link href="/shop?category=jewellery" className="hover:text-[#CDA45A] transition-colors">Royal Kundan Jewellery</Link></li>
            <li><Link href="/shop?category=attar" className="hover:text-[#CDA45A] transition-colors">Royal Amber Oud Attar</Link></li>
            <li><Link href="/shop?category=spices" className="hover:text-[#CDA45A] transition-colors">Pure Mongra Saffron</Link></li>
          </ul>
        </div>

        {/* Artisan Disciplines Column */}
        <div className="space-y-4">
          <h5 className="font-serif-luxury text-lg font-bold text-[#E6D2A8] uppercase tracking-wider border-b border-[#CDA45A]/20 pb-2">
            Artisan Guilds
          </h5>
          <ul className="space-y-2.5 text-gray-300 text-xs sm:text-sm font-light">
            <li><Link href="/shop" className="hover:text-[#CDA45A] transition-colors">Royal Art Studio (Pichwai & Gold Leaf)</Link></li>
            <li><Link href="/shop" className="hover:text-[#CDA45A] transition-colors">Master Silk Guild (Carpet Knots)</Link></li>
            <li><Link href="/shop" className="hover:text-[#CDA45A] transition-colors">Imperial Marble Guild (Inlay Work)</Link></li>
            <li><Link href="/shop" className="hover:text-[#CDA45A] transition-colors">Natural Fragrance Distillery (Attar)</Link></li>
            <li><Link href="/shop" className="hover:text-[#CDA45A] transition-colors">Heritage Tie-Dye Guild (Bandhani)</Link></li>
            <li><Link href="/artisans" className="text-[#B56A45] hover:underline font-semibold block pt-2">Meet Our Artisans →</Link></li>
          </ul>
        </div>

        {/* Company & Support Column */}
        <div className="space-y-4">
          <h5 className="font-serif-luxury text-lg font-bold text-[#E6D2A8] uppercase tracking-wider border-b border-[#CDA45A]/20 pb-2">
            Client Concierge
          </h5>
          <ul className="space-y-2.5 text-gray-300 text-xs sm:text-sm font-light">
            <li><Link href="/bespoke" className="hover:text-[#CDA45A] transition-colors">Bespoke Custom Orders</Link></li>
            <li><Link href="/account" className="hover:text-[#CDA45A] transition-colors">Track Order & History</Link></li>
            <li><Link href="/blog" className="hover:text-[#CDA45A] transition-colors">Heritage Journal & Blog</Link></li>
            <li><span className="text-gray-400 block pt-3 text-xs leading-relaxed">Worldwide Express Courier: US, EU, UK, UAE, AU, CA, JP, SG</span></li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar - Grand & Clean */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 border-t border-[#CDA45A]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <div>
          © {new Date().getFullYear()} Hathipole The Bazaar. All Rights Reserved. Preserving India’s Artistic Heritage.
        </div>
        <div className="flex items-center gap-6 font-medium">
          <span className="hover:text-gray-200 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gray-200 cursor-pointer">Terms of Heritage Service</span>
          <span className="hover:text-gray-200 cursor-pointer">Authenticity Guarantee</span>
        </div>
      </div>
    </footer>
  );
}
