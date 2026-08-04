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

      {/* Main Footer Content - Grand Logo, Connect With Us & Contact Info */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-sm">
        {/* Grand Brand Logo & Connect With Us Column */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="inline-block">
            <img
              src="/logo-transp.png"
              alt="Hathipole The Bazaar Logo"
              className="h-36 sm:h-44 md:h-52 lg:h-64 max-h-72 w-auto object-contain hover:opacity-95 transition-opacity duration-300 filter drop-shadow-md"
            />
          </Link>
          <p className="text-gray-300 leading-relaxed max-w-md text-xs sm:text-sm font-light">
            Hathipole The Bazaar is a digital luxury boutique bringing together India’s finest master artisans, traditional art forms, and royal handcrafted creations for global connoisseurs.
          </p>

          {/* Formatted Address & Clickable Phone Number */}
          <div className="space-y-3 text-gray-300 pt-2 font-medium text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#CDA45A] shrink-0 mt-0.5" />
              <span className="leading-relaxed">93 Saheliyo Ki, Near UIT Bridge, Panchwati, Bari, Udaipur, Rajasthan 313004</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#CDA45A] shrink-0" />
              <a href="tel:+919887363093" className="hover:text-[#CDA45A] transition-colors font-bold text-base text-[#FCFAF7]">
                +91 98873 63093
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#CDA45A] shrink-0" />
              <a href="mailto:concierge@hathipole.com" className="hover:text-[#CDA45A] transition-colors">
                concierge@hathipole.com
              </a>
            </div>
          </div>

          {/* Connect With Us - Social Media & Contact Icon Buttons */}
          <div className="pt-4 space-y-3">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#E6D2A8] block">
              Connect With Us
            </span>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/hathipole_the_bazaar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-[#CDA45A]/15 border border-[#CDA45A]/50 text-[#CDA45A] hover:bg-[#CDA45A] hover:text-[#1E1A18] hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/hathipolethebazaar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-[#CDA45A]/15 border border-[#CDA45A]/50 text-[#CDA45A] hover:bg-[#CDA45A] hover:text-[#1E1A18] hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.615V8z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919887363093"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full bg-[#CDA45A]/15 border border-[#CDA45A]/50 text-[#CDA45A] hover:bg-[#CDA45A] hover:text-[#1E1A18] hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:concierge@hathipole.com"
                aria-label="Email"
                className="w-11 h-11 rounded-full bg-[#CDA45A]/15 border border-[#CDA45A]/50 text-[#CDA45A] hover:bg-[#CDA45A] hover:text-[#1E1A18] hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                <Mail className="w-5 h-5" />
              </a>
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
