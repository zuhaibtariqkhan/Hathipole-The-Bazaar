import { ShieldCheck, Lock, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Hathipole The Bazaar',
  description: 'Hathipole The Bazaar privacy policy, client data encryption, and confidentiality commitments.'
};

export default function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-14 space-y-10">
      <div className="text-center space-y-4 border-b border-[#CDA45A]/20 pb-8">
        <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
          Client Confidentiality & Data Assurance
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1E1A18]">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
          Last Updated: August 2026. Your privacy and high-value transaction confidentiality are paramount at Hathipole The Bazaar.
        </p>
      </div>

      <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-3xl p-8 sm:p-12 space-y-8 shadow-luxury text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-2xl font-bold text-[#1E1A18] flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#CDA45A]" /> 1. Commitment to Client Privacy
          </h2>
          <p>
            Hathipole The Bazaar is committed to maintaining the trust and confidence of our global collectors and patrons. We do not sell, rent, or trade client email lists or personal transaction records to third parties for marketing purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-2xl font-bold text-[#1E1A18] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#CDA45A]" /> 2. Data Collection & Usage
          </h2>
          <p>
            When you purchase handcrafted luxury creations, commission bespoke art, or subscribe to the Royal Crafts Society, we collect necessary personal details such as your name, shipping address, contact phone number, and billing information to complete delivery and issue authentic certificates of origin.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Processing worldwide air express shipments via FedEx and DHL Priority Express</li>
            <li>Issuing hand-signed certificates of authenticity and artisan lineage proof</li>
            <li>Providing live tracking status and senior craft concierge updates</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-2xl font-bold text-[#1E1A18] flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#CDA45A]" /> 3. 256-Bit SSL Encrypted Checkout
          </h2>
          <p>
            All online credit card, debit card, and banking transactions are encrypted using industry-standard 256-Bit SSL certificate security through global gateways including Stripe, PayPal, and Razorpay. Sensitive financial credentials are never stored on our servers.
          </p>
        </section>

        <div className="pt-6 border-t border-[#CDA45A]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500">Have questions about your privacy data?</span>
          <Link href="/bespoke" className="btn-gold px-6 py-2.5 text-xs uppercase font-bold tracking-wider">
            Contact Senior Concierge
          </Link>
        </div>
      </div>
    </div>
  );
}
