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
    <footer className="bg-[#1E1A18] text-[#FCFAF7] border-t-2 border-[#CDA45A]/40 pt-10 pb-8">
      {/* Value Proposition & Trust Badges Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-8 border-b border-[#CDA45A]/25">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#CDA45A]/15 border border-[#CDA45A]/50 flex items-center justify-center text-[#CDA45A] shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#E6D2A8]">
              100% Authentic Artisans
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Every creation is ethically hand-crafted by master craftsmen across traditional artisan guilds.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#CDA45A]/15 border border-[#CDA45A]/50 flex items-center justify-center text-[#CDA45A] shadow-lg">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#E6D2A8]">
              Worldwide Express Shipping
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Insured door-to-door air courier via FedEx & DHL Express to over 120 target countries worldwide.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#CDA45A]/15 border border-[#CDA45A]/50 flex items-center justify-center text-[#CDA45A] shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#E6D2A8]">
              Bespoke Crafting
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Custom size, color, and monogram requests for interior designers, architects, and luxury buyers.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#CDA45A]/15 border border-[#CDA45A]/50 flex items-center justify-center text-[#CDA45A] shadow-lg">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#E6D2A8]">
              Fair Artisan Support
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Direct fair-trade wages supporting artisan families and preserving endangered heritage art forms.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 border-b border-[#CDA45A]/25">
        <div className="bg-[#2A2421] border border-[#CDA45A]/40 rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl text-center lg:text-left space-y-2">
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
              Join the Royal Crafts Society
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FCFAF7] leading-tight">
              Receive 10% Off Your First Handcrafted Order
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Subscribe for private collection previews, master artisan stories, and exclusive heritage invitations.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-3 bg-[#CDA45A]/20 border border-[#CDA45A] text-[#E6D2A8] px-6 py-4 rounded-2xl text-xs font-semibold shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-[#CDA45A]" />
                Thank you! Use promo code <strong className="text-white text-sm ml-1">ROYAL10</strong> at checkout.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="w-full bg-[#1E1A18] border border-[#CDA45A]/40 focus:border-[#CDA45A] text-xs text-[#FCFAF7] placeholder-gray-500 pl-11 pr-4 py-3 rounded-2xl focus:outline-none shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 whitespace-nowrap shadow-xl"
                >
                  Join Society <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Simplified Footer Content - Brand Story Left & Contact Info Right */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 text-sm">
        {/* Left Section: Large Logo & Updated Brand Statement */}
        <div className="lg:col-span-7 space-y-5">
          <Link href="/" className="inline-block shrink-0 overflow-visible group">
            <img
              src="/logo-transp.png"
              alt="Hathipole The Bazaar Royal Brand Logo"
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain hover:scale-105 transition-all duration-300 filter drop-shadow-xl"
            />
          </Link>
          <p className="text-gray-300 leading-relaxed max-w-xl text-xs sm:text-sm font-light">
            Hathipole The Bazaar brings together India&apos;s finest handmade crafts through generations of skilled artisans. For over 70 years, we have celebrated authenticity, heritage, and exceptional craftsmanship, connecting master artisans with homes around the world.
          </p>
        </div>

        {/* Right Section: Contact Information & Social Buttons */}
        <div className="lg:col-span-5 space-y-6">
          <h5 className="font-serif-luxury text-lg font-bold text-[#E6D2A8] uppercase tracking-wider border-b border-[#CDA45A]/20 pb-2">
            Contact Information
          </h5>

          <div className="space-y-3.5 text-gray-300 font-light text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#CDA45A] shrink-0 mt-0.5" />
              <span className="leading-relaxed">93 Saheliyo Ki, Near UIT Bridge, Panchwati, Bari, Udaipur, Rajasthan 313004</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#CDA45A] shrink-0" />
              <a href="tel:+919887363093" className="hover:text-[#CDA45A] transition-colors font-semibold text-sm sm:text-base text-[#FCFAF7]">
                +91 98873 63093
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#CDA45A] shrink-0" />
              <a href="mailto:concierge@hathipole.com" className="hover:text-[#CDA45A] transition-colors font-medium">
                concierge@hathipole.com
              </a>
            </div>
          </div>

          {/* Connect With Us - Social Media */}
          <div className="pt-2 space-y-3">
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
                className="w-10 h-10 rounded-full bg-[#CDA45A]/15 border border-[#CDA45A]/50 text-[#CDA45A] hover:bg-[#CDA45A] hover:text-[#1E1A18] hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/hathipolethebazaar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#CDA45A]/15 border border-[#CDA45A]/50 text-[#CDA45A] hover:bg-[#CDA45A] hover:text-[#1E1A18] hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.615V8z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919887363093"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#CDA45A]/15 border border-[#CDA45A]/50 text-[#CDA45A] hover:bg-[#CDA45A] hover:text-[#1E1A18] hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:concierge@hathipole.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-[#CDA45A]/15 border border-[#CDA45A]/50 text-[#CDA45A] hover:bg-[#CDA45A] hover:text-[#1E1A18] hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Legal Links, Copyright & Payment Methods */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 border-t border-[#CDA45A]/20 flex flex-col items-center gap-4 text-center text-xs text-gray-400">
        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-1 font-medium text-gray-300">
          <Link href="/privacy" className="hover:text-[#CDA45A] transition-colors">
            Privacy Policy
          </Link>
          <span className="text-[#CDA45A]/60">•</span>
          <Link href="/terms" className="hover:text-[#CDA45A] transition-colors">
            Terms of Heritage Service
          </Link>
          <span className="text-[#CDA45A]/60">•</span>
          <Link href="/authenticity" className="hover:text-[#CDA45A] transition-colors">
            Authenticity Guarantee
          </Link>
        </div>

        {/* Copyright Line */}
        <div>
          © {new Date().getFullYear()} Hathipole The Bazaar. All Rights Reserved. Preserving India’s Artistic Heritage.
        </div>

        {/* Accepted Payment Methods Bar - After Copyright */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {/* Visa */}
          <div className="bg-[#2A2421] border border-[#CDA45A]/30 hover:border-[#CDA45A] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[#CDA45A] hover:text-[#E6D2A8] hover:scale-105 transition-all duration-300 shadow-sm flex items-center justify-center h-8 sm:h-9 w-12 sm:w-14" title="Visa">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M19.412 6.136c-.144-.736-.784-1.288-1.544-1.288h-3.88l-.056.28c2.952.752 4.984 2.248 5.792 4.312l-.312-3.304zm-14.88 9.216l2.424-7.536 1.456 5.568.16.8c.088.424.368.808.76.96.696.256 1.488.384 2.304.384h3.696l.16-.8L12.508 7.04H10.2l-1.6 4.776-.8-4.776H5.212l-1.92 8.312h2.24zM22 6.04h-2.152l-1.344 8.312h2.152L22 6.04zM10.4 6.04H8.248l-1.352 8.312H9.048l1.352-8.312z" />
            </svg>
          </div>
          {/* Mastercard */}
          <div className="bg-[#2A2421] border border-[#CDA45A]/30 hover:border-[#CDA45A] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[#CDA45A] hover:text-[#E6D2A8] hover:scale-105 transition-all duration-300 shadow-sm flex items-center justify-center h-8 sm:h-9 w-12 sm:w-14" title="Mastercard">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <circle cx="8" cy="12" r="7" opacity="0.65" />
              <circle cx="16" cy="12" r="7" opacity="0.65" />
              <path d="M12 7.7a7 7 0 0 0-2.8 4.3 7 7 0 0 0 2.8 4.3 7 7 0 0 0 2.8-4.3 7 7 0 0 0-2.8-4.3z" />
            </svg>
          </div>
          {/* American Express */}
          <div className="bg-[#2A2421] border border-[#CDA45A]/30 hover:border-[#CDA45A] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[#CDA45A] hover:text-[#E6D2A8] hover:scale-105 transition-all duration-300 shadow-sm flex items-center justify-center h-8 sm:h-9 w-12 sm:w-14" title="American Express">
            <svg viewBox="0 0 36 24" className="w-full h-full fill-none stroke-current" strokeWidth="1.5">
              <rect x="2" y="2" width="32" height="20" rx="3" strokeWidth="2" />
              <path d="M6 16l2-7 2 7M6.8 13.5h2.4M12 16V9l2.5 4L17 9v7M19 16V9h3M19 12.5h2.5M19 9h3.5M25 9l2.5 3.5L30 9M25 16l2.5-3.5L30 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* RuPay */}
          <div className="bg-[#2A2421] border border-[#CDA45A]/30 hover:border-[#CDA45A] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[#CDA45A] hover:text-[#E6D2A8] hover:scale-105 transition-all duration-300 shadow-sm flex items-center justify-center h-8 sm:h-9 w-12 sm:w-14" title="RuPay">
            <svg viewBox="0 0 36 24" className="w-full h-full fill-current">
              <path d="M5 6h7c1.5 0 2.6.4 3.3 1.1s1 1.7 1 2.8c0 1-.3 1.9-1 2.5a4 4 0 0 1-3.3 1.1H9.5l4.5 5.5H11.2l-4.5-5.5H5v5.5H3V6h2zm2 2v4h5c.7 0 1.2-.2 1.6-.5.4-.3.6-.7.6-1.5 0-.7-.2-1.1-.6-1.4-.4-.4-.9-.6-1.6-.6H7zM3 10.5h11V12H3v-1.5z" />
              <path d="M19.5 6.5l-4 11h2.5l4-11h-2.5zm4 0l-4 11h2.5l4-11h-2.5zm4 0l-4 11h2.5l4-11h-2.5z" opacity="0.8" />
            </svg>
          </div>
          {/* UPI */}
          <div className="bg-[#2A2421] border border-[#CDA45A]/30 hover:border-[#CDA45A] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[#CDA45A] hover:text-[#E6D2A8] hover:scale-105 transition-all duration-300 shadow-sm flex items-center justify-center h-8 sm:h-9 w-12 sm:w-14" title="UPI">
            <svg viewBox="0 0 36 24" className="w-full h-full fill-current">
              <path d="M4 17l4.5-10h3l-4.5 10H4z" />
              <path d="M8.5 17l4.5-10H16l-4.5 10H8.5z" opacity="0.65" />
              <path d="M13 17l4.5-10h3L16 17H13z" opacity="0.3" />
              <path d="M21 7v6.5c0 .8.2 1.4.6 1.8s1 .6 1.9.6 1.5-.2 1.9-.6.6-1 .6-1.8V7h1.6v6.5c0 1.3-.4 2.2-1.1 2.8C25.8 17 24.8 17.3 23.5 17.3s-2.3-.3-3-1c-.7-.6-1.1-1.5-1.1-2.8V7H21zm6.5 0h2.5c.8 0 1.4.2 1.8.6s.6 1 .6 1.7-.2 1.3-.6 1.7-1 .6-1.8.6h-1v5.7h-1.6V7zm1.6 1.5v3h1c.3 0 .6-.1.8-.2s.3-.4.3-.8c0-.3-.1-.6-.3-.7s-.5-.2-.8-.2h-1zm4.4-1.5h1.6v10.3h-1.6V7z" />
            </svg>
          </div>
          {/* PayPal */}
          <div className="bg-[#2A2421] border border-[#CDA45A]/30 hover:border-[#CDA45A] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[#CDA45A] hover:text-[#E6D2A8] hover:scale-105 transition-all duration-300 shadow-sm flex items-center justify-center h-8 sm:h-9 w-12 sm:w-14" title="PayPal">
            <svg viewBox="0 0 16 16" className="w-full h-full fill-current">
              <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z" />
            </svg>
          </div>
          {/* Apple Pay */}
          <div className="bg-[#2A2421] border border-[#CDA45A]/30 hover:border-[#CDA45A] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[#CDA45A] hover:text-[#E6D2A8] hover:scale-105 transition-all duration-300 shadow-sm flex items-center justify-center h-8 sm:h-9 w-12 sm:w-14" title="Apple Pay">
            <svg viewBox="0 0 36 24" className="w-full h-full fill-current">
              <path d="M9 7.2c.4-.5.6-1.1.5-1.7-.5 0-1.2.3-1.5.8-.3.4-.6 1-.5 1.6.6.1 1.2-.3 1.5-.7zm-1.5 1.7c-.6 0-1.1.4-1.5.4s-.7-.4-1.3-.4c-.9 0-1.7.7-2.1 1.5-.8 1.5-.8 3.9.2 5.4.5.7 1.1 1.6 2 1.6s1-.5 2-.5c1 0 1.1.5 2 .5s1.5-.8 2-1.6c.7-.9.9-1.9.9-2 0 0-1.7-.7-1.7-2.6 0-1.6 1.3-2.4 1.4-2.5-.7-1.1-1.9-1.3-2.4-1.3z" />
              <path d="M16 8h2.3c.7 0 1.2.2 1.6.5.3.3.5.7.5 1.3s-.2 1-.5 1.3c-.4.3-.9.5-1.6.5H17.2v4.4H16V8zm1.2 1.2v2h1c.3 0 .5-.1.7-.2s.2-.3.2-.6c0-.3-.1-.5-.2-.6s-.4-.2-.7-.2h-1zm7.4.8c-.5 0-.9.2-1.2.6s-.5.8-.5 1.4c0 .6.2 1.1.5 1.4s.7.5 1.2.5.9-.2 1.2-.5.5-.8.5-1.4c0-.6-.2-1.1-.5-1.4s-.7-.6-1.2-.6zm-1.2-2h1.2v.7c.3-.5.8-.8 1.4-.8.8 0 1.4.3 1.8.9s.6 1.4.6 2.3c0 .9-.2 1.7-.6 2.3s-1 .9-1.8.9c-.6 0-1.1-.3-1.4-.8v2.8h-1.2V10zm8.7 0l-1.9 4.8-1.9-4.8h1.3l1 2.8 1-2.8h1.3z" />
            </svg>
          </div>
          {/* Google Pay */}
          <div className="bg-[#2A2421] border border-[#CDA45A]/30 hover:border-[#CDA45A] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[#CDA45A] hover:text-[#E6D2A8] hover:scale-105 transition-all duration-300 shadow-sm flex items-center justify-center h-8 sm:h-9 w-12 sm:w-14" title="Google Pay">
            <svg viewBox="0 0 36 24" className="w-full h-full fill-current">
              <path d="M8.2 11.2c0-.5-.04-1-.1-1.4H4.5v2.7h2.1c-.1.5-.4 1-.8 1.3v1.1h1.3c.7-.6 1.1-1.7 1.1-3.7z" />
              <path d="M4.5 15c.8 0 1.5-.3 2.1-.8l-1.3-1.1c-.2.2-.5.3-.8.3-.7 0-1.2-.4-1.4-1h-1.3v1c.5 1 1.6 1.6 2.7 1.6z" />
              <path d="M3.1 12.4c-.1-.3-.1-.6-.1-.9s0-.6.1-.9V9.6H1.8C1.5 10.2 1.3 10.8 1.3 11.5s.2 1.3.5 1.9l1.3-1z" />
              <path d="M4.5 8c1.1 0 1.7.5 2.1.9l1.5-1.5C7.2 6.5 6 6 4.5 6 3.4 6 2.3 6.6 1.8 7.6l1.3 1c.2-.6.7-1 1.4-1z" />
              <path d="M14 8h2.3c.7 0 1.2.2 1.6.5.3.3.5.7.5 1.3s-.2 1-.5 1.3c-.4.3-.9.5-1.6.5h-1.1v4.4H14V8zm1.2 1.2v2h1c.3 0 .5-.1.7-.2s.2-.3.2-.6c0-.3-.1-.5-.2-.6s-.4-.2-.7-.2h-1zm7.4.8c-.5 0-.9.2-1.2.6s-.5.8-.5 1.4c0 .6.2 1.1.5 1.4s.7.5 1.2.5.9-.2 1.2-.5.5-.8.5-1.4c0-.6-.2-1.1-.5-1.4s-.7-.6-1.2-.6zm-1.2-2h1.2v.7c.3-.5.8-.8 1.4-.8.8 0 1.4.3 1.8.9s.6 1.4.6 2.3c0 .9-.2 1.7-.6 2.3s-1 .9-1.8.9c-.6 0-1.1-.3-1.4-.8v2.8h-1.2V10zm8.7 0l-1.9 4.8-1.9-4.8h1.3l1 2.8 1-2.8h1.3z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
