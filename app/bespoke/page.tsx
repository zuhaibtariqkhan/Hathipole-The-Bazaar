'use client';

import { useState } from 'react';
import { useStore } from '@/lib/store/useStore';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Phone } from 'lucide-react';

export default function BespokePage() {
  const { showToast } = useStore();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Bespoke inquiry received! Senior craft concierge will contact you within 24 hours.');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="bg-[#1E1A18] text-[#FCFAF7] border border-[#CDA45A]/40 rounded-3xl p-10 md:p-16 text-center space-y-4 relative overflow-hidden shadow-2xl">
        <div className="inline-flex items-center gap-2 bg-[#CDA45A]/20 border border-[#CDA45A]/50 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#E6D2A8]">
          <Sparkles className="w-3.5 h-3.5 text-[#CDA45A]" />
          Custom Crafting & Architectural Projects
        </div>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FCFAF7]">
          Bespoke Royal Commissions
        </h1>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          From custom-sized hand-knotted silk carpets to 24K gold foil Pichwai murals, Makrana marble fountain installations, and bone inlay suite furniture.
        </p>
      </div>

      {/* Main Grid Form & Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-3xl p-8 space-y-6 shadow-luxury">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#CDA45A] mx-auto" />
              <h3 className="font-serif-luxury text-2xl font-bold text-[#1E1A18]">
                Bespoke Commission Inquiry Received
              </h3>
              <p className="text-xs text-gray-600 max-w-md mx-auto">
                Thank you for your interest in custom Indian craftsmanship. Our senior master craft manager has assigned your request to our lead artisan studio.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif-luxury text-2xl font-bold text-[#1E1A18] border-b border-[#CDA45A]/20 pb-3">
                Request Bespoke Consultation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Lady Eleanor Vance"
                    className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@vancedesign.com"
                    className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Project Type *</label>
                  <select className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]">
                    <option>Interior Designer Project</option>
                    <option>5-Star Heritage Hotel / Resort Suite</option>
                    <option>Private Luxury Residence</option>
                    <option>Royal Wedding VIP Keepsakes</option>
                    <option>Art Collector Commission</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Estimated Budget (USD)</label>
                  <select className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]">
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
                  className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                Submit Commission Request <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#1E1A18] text-[#FCFAF7] border border-[#CDA45A]/40 rounded-3xl p-8 space-y-4 shadow-luxury">
            <h4 className="font-serif-luxury text-xl font-bold text-[#E6D2A8]">
              The Bespoke Commission Journey
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[#CDA45A] text-[#1E1A18] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span><strong>Concept & Sketch Consultation:</strong> Direct dialogue with our master craft managers and architectural advisors.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[#CDA45A] text-[#1E1A18] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span><strong>Material Selection:</strong> Choice of 24K gold foil, pure mulberry silk, Makrana marble blocks, or vegetable-tanned leathers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[#CDA45A] text-[#1E1A18] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span><strong>Handcrafting & Progress Reports:</strong> Weekly high-resolution photo & video updates from the artisan studio.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[#CDA45A] text-[#1E1A18] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span><strong>Insured Air Transport:</strong> Encased in custom wooden crates and delivered via FedEx International Priority.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
