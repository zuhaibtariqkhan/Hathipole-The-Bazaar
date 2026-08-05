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
        <div className="lg:col-span-7 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
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
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h5 className="font-serif-luxury text-lg font-bold text-[#E6D2A8] uppercase tracking-wider border-b border-[#CDA45A]/20 pb-2 w-full">
            Contact Information
          </h5>

          <div className="space-y-3.5 text-gray-300 font-light text-xs sm:text-sm flex flex-col items-center lg:items-start">
            <div className="flex items-start gap-3 text-center lg:text-left justify-center lg:justify-start">
              <MapPin className="w-5 h-5 text-[#CDA45A] shrink-0 mt-0.5" />
              <span className="leading-relaxed">93 Saheliyo Ki, Near UIT Bridge, Panchwati, Bari, Udaipur, Rajasthan 313004</span>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Phone className="w-5 h-5 text-[#CDA45A] shrink-0" />
              <a href="tel:+919887363093" className="hover:text-[#CDA45A] transition-colors font-semibold text-sm sm:text-base text-[#FCFAF7]">
                +91 98873 63093
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Mail className="w-5 h-5 text-[#CDA45A] shrink-0" />
              <a href="mailto:concierge@hathipole.com" className="hover:text-[#CDA45A] transition-colors font-medium">
                concierge@hathipole.com
              </a>
            </div>
          </div>

          {/* Connect With Us - Social Media */}
          <div className="pt-2 space-y-3 w-full text-center lg:text-left">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#E6D2A8] block">
              Connect With Us
            </span>
            <div className="flex items-center justify-center lg:justify-start gap-3">
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

      {/* Bottom Footer: Legal Links, Copyright & Official Payment Method Icons */}
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

        {/* Official Brand Payment Icons Bar (Full Opacity, Original Brand Colors, No Blur/Fade) */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {/* Visa */}
          <div className="bg-white rounded-md px-2 py-1 shadow-md h-8 sm:h-9 w-12 sm:w-14 flex items-center justify-center shrink-0" title="Visa">
            <svg viewBox="0 0 36 24" className="w-full h-full">
              <path d="M13.84 15.54h2.24l1.4-8.73h-2.24l-1.4 8.73zm8.38-8.52c-.44-.17-1.12-.35-1.98-.35-2.18 0-3.71 1.15-3.73 2.79-.02 1.21 1.09 1.88 1.93 2.29.86.42 1.15.69 1.15 1.07 0 .58-.7.84-1.35.84-.9 0-1.38-.14-2.12-.46l-.3-.14-.32 1.97c.54.25 1.54.46 2.57.47 2.43 0 4.01-1.19 4.03-3.03.02-.99-.6-1.74-1.92-2.36-.8-.41-1.29-.69-1.29-1.07 0-.37.41-.75 1.3-.75.74-.01 1.28.16 1.7.34l.2.09.33-1.96zm6.05-.21h-1.73c-.54 0-.95.16-1.18.72l-3.36 8.01h2.36l.47-1.3h2.89l.27 1.3h2.08l-1.8-8.73zm-2.88 5.66l1.19-3.26.68 3.26h-1.87zm-16.71-5.66l-2.2 8.73h2.36l3.35-8.73h-3.51z" fill="#1434CB"/>
              <path d="M9.87 6.81L6.72 15.54H4.37L2.17 8.35c-.13-.51-.48-.68-.89-.79L0 7.02l.04-.21h3.66c.48 0 .89.32.99.85l.95 5.04 2.37-5.89h1.86z" fill="#1434CB"/>
              <path d="M4.68 7.64c.48 0 .89.32.99.85l.95 5.04.14-.73-1.09-4.83c-.1-.38-.41-.33-.99-.33H4.68z" fill="#F7B600"/>
            </svg>
          </div>
          {/* Mastercard */}
          <div className="bg-white rounded-md px-2 py-1 shadow-md h-8 sm:h-9 w-12 sm:w-14 flex items-center justify-center shrink-0" title="Mastercard">
            <svg viewBox="0 0 36 24" className="w-full h-full">
              <circle cx="13" cy="12" r="7" fill="#EB001B"/>
              <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
              <path d="M18 6.85a6.97 6.97 0 0 0-2.6 5.15c0 2 0.9 3.8 2.6 5.15a6.97 6.97 0 0 0 2.6-5.15c0-2-0.9-3.8-2.6-5.15z" fill="#FF5F00"/>
            </svg>
          </div>
          {/* American Express */}
          <div className="bg-white rounded-md px-1.5 py-1 shadow-md h-8 sm:h-9 w-12 sm:w-14 flex items-center justify-center shrink-0" title="American Express">
            <svg viewBox="0 0 36 24" className="w-full h-full">
              <rect width="36" height="24" rx="2" fill="#006FCF"/>
              <path d="M4 16l2.2-7h2.5l2.2 7H9.2l-.4-1.5H6.6L6.2 16H4zm2.9-3h1.6l-.8-2.8-.8 2.8zm6.6 3V9h2.8l1.5 4.3L19.3 9H22v7h-2.1v-4.5l-1.6 4.5h-1.4l-1.6-4.5V16h-2.2zm11.5 0V9h5v1.8h-3.1v1h2.9v1.7h-2.9v1.7h3.2V16h-5z" fill="#FFFFFF"/>
            </svg>
          </div>
          {/* RuPay */}
          <div className="bg-white rounded-md px-2 py-1 shadow-md h-8 sm:h-9 w-12 sm:w-14 flex items-center justify-center shrink-0" title="RuPay">
            <svg viewBox="0 0 36 24" className="w-full h-full">
              <path d="M6 6h6.5c1.4 0 2.4.4 3 1.1.6.6.9 1.5.9 2.5 0 1-.3 1.8-.9 2.4-.6.6-1.6 1-3 1H10l4.2 5H11.5l-4.1-5H6v5H4V6h2zm2 1.8v3.5h4.5c.7 0 1.2-.2 1.5-.5.3-.3.5-.7.5-1.3 0-.6-.2-1-.5-1.3-.3-.3-.8-.4-1.5-.4H8z" fill="#0F438D"/>
              <path d="M19 6.5l-3.5 11h2.3l3.5-11H19zm3.5 0l-3.5 11h2.3l3.5-11h-2.3zm3.5 0l-3.5 11h2.3l3.5-11h-2.3z" fill="#F26522"/>
            </svg>
          </div>
          {/* UPI */}
          <div className="bg-white rounded-md px-2 py-1 shadow-md h-8 sm:h-9 w-12 sm:w-14 flex items-center justify-center shrink-0" title="UPI">
            <svg viewBox="0 0 36 24" className="w-full h-full">
              <path d="M4 17l4.5-10h3.2l-4.5 10H4z" fill="#F26522"/>
              <path d="M9 17l4.5-10h3.2l-4.5 10H9z" fill="#00833E"/>
              <path d="M19 7v6.5c0 .8.2 1.4.6 1.8.4.4 1 .6 1.8.6s1.4-.2 1.8-.6c.4-.4.6-1 .6-1.8V7h1.6v6.5c0 1.3-.4 2.2-1.1 2.8-.7.6-1.7.9-2.9.9s-2.2-.3-2.9-.9c-.7-.6-1.1-1.5-1.1-2.8V7H19zm6.5 0h2.5c.8 0 1.4.2 1.8.6s.6 1 .6 1.7-.2 1.3-.6 1.7-1 .6-1.8.6h-1v5.7h-1.6V7zm1.6 1.5v3h1c.3 0 .6-.1.8-.2s.3-.4.3-.8c0-.3-.1-.6-.3-.7s-.5-.2-.8-.2h-1z" fill="#1E1A18"/>
            </svg>
          </div>
          {/* PayPal */}
          <div className="bg-white rounded-md px-2 py-1 shadow-md h-8 sm:h-9 w-12 sm:w-14 flex items-center justify-center shrink-0" title="PayPal">
            <svg viewBox="0 0 36 24" className="w-full h-full">
              <path d="M14.5 4.5h4.2c2.1 0 3.6.4 4.3 1.2.7.8.8 1.9.5 3.3-.4 2.2-1.6 3.7-3.4 4.5-.9.4-2.1.6-3.6.6h-1.2l-1.5 8.4h-2.8l3-18z" fill="#0079C1"/>
              <path d="M13.5 8.5h3.8c1.5 0 2.6.3 3.1.9.5.6.5 1.5.3 2.6-.4 2-1.4 3.3-3.1 3.9-.8.3-1.8.5-3.1.5h-1l-1.5 8.4h-2.5l3-16.3z" fill="#0079C1"/>
            </svg>
          </div>
          {/* Apple Pay */}
          <div className="bg-white rounded-md px-2 py-1 shadow-md h-8 sm:h-9 w-12 sm:w-14 flex items-center justify-center shrink-0" title="Apple Pay">
            <svg viewBox="0 0 36 24" className="w-full h-full">
              <path d="M11.6 9.2c.4-.5.6-1.1.5-1.7-.5 0-1.2.3-1.5.8-.3.4-.6 1-.5 1.6.6.1 1.2-.3 1.5-.7zm-1.5 1.7c-.6 0-1.1.4-1.5.4s-.7-.4-1.3-.4c-.9 0-1.7.7-2.1 1.5-.8 1.5-.8 3.9.2 5.4.5.7 1.1 1.6 2 1.6s1-.5 2-.5c1 0 1.1.5 2 .5s1.5-.8 2-1.6c.7-.9.9-1.9.9-2 0 0-1.7-.7-1.7-2.6 0-1.6 1.3-2.4 1.4-2.5-.7-1.1-1.9-1.3-2.4-1.3z" fill="#000000"/>
              <path d="M18.6 10h2.3c.7 0 1.2.2 1.6.5.3.3.5.7.5 1.3s-.2 1-.5 1.3c-.4.3-.9.5-1.6.5h-1.1v4.4h-1.2V10zm1.2 1.2v2h1c.3 0 .5-.1.7-.2s.2-.3.2-.6c0-.3-.1-.5-.2-.6s-.4-.2-.7-.2h-1zm7.4.8c-.5 0-.9.2-1.2.6s-.5.8-.5 1.4c0 .6.2 1.1.5 1.4s.7.5 1.2.5.9-.2 1.2-.5.5-.8.5-1.4c0-.6-.2-1.1-.5-1.4s-.7-.6-1.2-.6zm-1.2-2h1.2v.7c.3-.5.8-.8 1.4-.8.8 0 1.4.3 1.8.9s.6 1.4.6 2.3c0 .9-.2 1.7-.6 2.3s-1 .9-1.8.9c-.6 0-1.1-.3-1.4-.8v2.8h-1.2V12zm8.7 0l-1.9 4.8-1.9-4.8h1.3l1 2.8 1-2.8h1.3z" fill="#000000"/>
            </svg>
          </div>
          {/* Google Pay */}
          <div className="bg-white rounded-md px-2 py-1 shadow-md h-8 sm:h-9 w-12 sm:w-14 flex items-center justify-center shrink-0" title="Google Pay">
            <svg viewBox="0 0 36 24" className="w-full h-full">
              <path d="M10.2 12.2c0-.4-.04-.8-.1-1.2H6.5v2.3h2.1c-.1.5-.4 1-.8 1.3v1.1h1.3c.7-.6 1.1-1.7 1.1-3.5z" fill="#4285F4"/>
              <path d="M6.5 16c1.1 0 2-.4 2.7-1l-1.3-1.1c-.4.3-.9.4-1.4.4-1.1 0-2-.7-2.3-1.7H2.9v1.1C3.6 15 4.9 16 6.5 16z" fill="#34A853"/>
              <path d="M4.2 12.6c-.1-.3-.1-.6-.1-1s0-.7.1-1V9.5H2.9C2.4 10.4 2.2 11.2 2.2 12.1s.2 1.7.7 2.6l1.3-1.1c-.1-.3-.2-.6-.2-1z" fill="#FBBC05"/>
              <path d="M6.5 8.2c.6 0 1.2.2 1.6.6l1.2-1.2C8.5 6.9 7.5 6.5 6.5 6.5c-1.6 0-2.9 1-3.6 2.3l1.3 1.1c.3-1 1.2-1.7 2.3-1.7z" fill="#EA4335"/>
              <path d="M16 8h2.3c.7 0 1.2.2 1.6.5.3.3.5.7.5 1.3s-.2 1-.5 1.3c-.4.3-.9.5-1.6.5h-1.1v4.4H16V8zm1.2 1.2v2h1c.3 0 .5-.1.7-.2s.2-.3.2-.6c0-.3-.1-.5-.2-.6s-.4-.2-.7-.2h-1zm7.4.8c-.5 0-.9.2-1.2.6s-.5.8-.5 1.4c0 .6.2 1.1.5 1.4s.7.5 1.2.5.9-.2 1.2-.5.5-.8.5-1.4c0-.6-.2-1.1-.5-1.4s-.7-.6-1.2-.6zm-1.2-2h1.2v.7c.3-.5.8-.8 1.4-.8.8 0 1.4.3 1.8.9s.6 1.4.6 2.3c0 .9-.2 1.7-.6 2.3s-1 .9-1.8.9c-.6 0-1.1-.3-1.4-.8v2.8h-1.2V10zm8.7 0l-1.9 4.8-1.9-4.8h1.3l1 2.8 1-2.8h1.3z" fill="#1E1A18"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
