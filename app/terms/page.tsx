import { Award, FileText, Truck, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Heritage Service | Hathipole The Bazaar',
  description: 'Terms of service, shipping policies, returns, and authenticity terms for Hathipole The Bazaar.'
};

export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-14 space-y-10">
      <div className="text-center space-y-4 border-b border-[#CDA45A]/20 pb-8">
        <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
          Heritage Commerce Directives
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1E1A18]">
          Terms of Heritage Service
        </h1>
        <p className="text-xs text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
          Operational terms governing online acquisitions, bespoke commissions, international courier transit, and artisan guild representations.
        </p>
      </div>

      <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-3xl p-8 sm:p-12 space-y-8 shadow-luxury text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-2xl font-bold text-[#1E1A18] flex items-center gap-2">
            <Award className="w-5 h-5 text-[#CDA45A]" /> 1. Handcrafted Character & Variations
          </h2>
          <p>
            Every product cataloged at Hathipole The Bazaar is genuinely 100% handcrafted by traditional master artisans. Because each silk rug, 24K gold Pichwai artwork, carved marble inlay, and needlework Pashmina is created individually without machine duplication, minor variations in dye tone, weave texture, or foil work celebrate the unique human touch of authentic heritage art.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-2xl font-bold text-[#1E1A18] flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#CDA45A]" /> 2. Worldwide Express Courier Shipping & Insurance
          </h2>
          <p>
            All international orders are dispatched via FedEx Air Express or DHL Priority Courier from our Udaipur, Kashmir, or Jaipur guild ateliers. Shipments include 100% full transit insurance against loss, transit damage, or delay.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-2xl font-bold text-[#1E1A18] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#CDA45A]" /> 3. 30-Day Heritage Return Guarantee
          </h2>
          <p>
            If a standard catalog item does not fulfill your aesthetic expectations, you may return it within 30 days of courier delivery in its original condition with the serial certificate intact for a full refund or exchange. Custom bespoke commissions are subject to specific sign-off agreements.
          </p>
        </section>

        <div className="pt-6 border-t border-[#CDA45A]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500">Need specific terms clarification?</span>
          <Link href="/shop" className="btn-gold px-6 py-2.5 text-xs uppercase font-bold tracking-wider">
            Return to Royal Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
