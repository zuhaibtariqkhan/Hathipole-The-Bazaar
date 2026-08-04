'use client';

import { useState } from 'react';
import { useStore } from '@/lib/store/useStore';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Phone, Compass, Award } from 'lucide-react';

export default function BespokePage() {
  const { showToast } = useStore();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Bespoke inquiry received! Senior craft concierge will contact you within 24 hours.');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 space-y-16">
      {/* Header Banner */}
      <div className="bg-[#1E1A18] text-[#FCFAF7] border border-[#CDA45A]/50 rounded-3xl p-10 md:p-16 text-center space-y-4 relative overflow-hidden shadow-2xl">
        <div className="inline-flex items-center gap-2 badge-gold-foil px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#1E1A18]">
          <Sparkles className="w-4 h-4 text-[#CDA45A]" />
          Custom Crafting & Architectural Projects
        </div>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#FCFAF7]">
          Bespoke Royal Commissions
        </h1>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          From custom-sized hand-knotted silk carpets to 24K gold foil Pichwai murals, Makrana marble fountain installations, and bone inlay suite furniture.
        </p>
      </div>

      {/* Main Grid Form & Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 luxury-card-interactive p-8 md:p-10 space-y-6 shadow-luxury">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-16 h-16 text-[#CDA45A] mx-auto" />
              <h3 className="font-serif-luxury text-3xl font-bold text-[#1E1A18]">
                Bespoke Commission Inquiry Received
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto font-light">
                Thank you for your interest in custom Indian craftsmanship. Our senior master craft manager has assigned your request to our lead artisan studio.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-[#CDA45A]/20 pb-4">
                <span className="font-cinzel text-xs tracking-wider text-[#CDA45A] uppercase block font-semibold">
                  Personalized Inquiry
                </span>
                <h3 className="font-serif-luxury text-3xl font-bold text-[#1E1A18]">
                  Request Bespoke Consultation
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Lady Eleanor Vance"
                    className="w-full text-xs p-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@vancedesign.com"
                    className="w-full text-xs p-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Project Type *</label>
                  <select className="w-full text-xs p-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A] transition-colors">
                    <option>Interior Designer Project</option>
                    <option>5-Star Heritage Hotel / Resort Suite</option>
                    <option>Private Luxury Residence</option>
                    <option>Royal Wedding VIP Keepsakes</option>
                    <option>Art Collector Commission</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Estimated Budget (USD)</label>
                  <select className="w-full text-xs p-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A] transition-colors">
                    <option>$2,500 - $5,000</option>
                    <option>$5,000 - $15,000</option>
                    <option>$15,000 - $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Custom Dimensions & Art Instructions *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Describe your custom dimensions, color preferences, motif patterns, or architectural requirements..."
                  className="w-full text-xs p-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
              >
                Submit Commission Request <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Info Column with Gold Badges & Interactive Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#1E1A18] text-[#FCFAF7] border border-[#CDA45A]/50 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <h4 className="font-serif-luxury text-2xl font-bold text-[#E6D2A8] border-b border-[#CDA45A]/20 pb-3">
              The Bespoke Commission Journey
            </h4>
            <ul className="space-y-4 text-xs text-gray-300 font-light">
              <li className="flex items-start gap-3">
                <span className="badge-gold-foil w-7 h-7 rounded-full text-[#1E1A18] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-white block font-semibold text-sm">Concept & Sketch Consultation</strong>
                  <span>Direct dialogue with our master craft managers and architectural advisors.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="badge-gold-foil w-7 h-7 rounded-full text-[#1E1A18] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-white block font-semibold text-sm">Material Selection</strong>
                  <span>Choice of 24K gold foil, pure mulberry silk, Makrana marble blocks, or vegetable-tanned leathers.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="badge-gold-foil w-7 h-7 rounded-full text-[#1E1A18] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-white block font-semibold text-sm">Handcrafting & Progress Reports</strong>
                  <span>Weekly high-resolution photo & video updates from the artisan studio.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="badge-gold-foil w-7 h-7 rounded-full text-[#1E1A18] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <strong className="text-white block font-semibold text-sm">Insured Air Transport</strong>
                  <span>Encased in custom wooden crates and delivered via FedEx International Priority.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
