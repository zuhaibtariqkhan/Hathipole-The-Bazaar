import {
  FileText,
  ShieldCheck,
  UserCheck,
  ShoppingBag,
  Sparkles,
  DollarSign,
  CreditCard,
  Truck,
  Palette,
  Copyright,
  AlertTriangle,
  Scale,
  Lock,
  RefreshCw,
  Mail,
  Heart,
  CheckCircle2,
  Award,
  BookOpen,
  Building2,
  Compass,
  Layers
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Heritage Service & Conditions | Hathipole The Bazaar',
  description: 'Terms and conditions governing online acquisitions, bespoke commissions, authenticity assurances, and our Heritage Service commitments at Hathipole The Bazaar.'
};

const termsProductsList = [
  'Rugs',
  'Pashmina',
  'Textiles',
  'Bandhani',
  'Handicrafts',
  'Miniature & Pichwai Paintings',
  'Jewellery',
  'Attar & Natural Fragrances',
  'Home Décor',
  'Designer Apparel',
  'Bespoke Collections',
  'Wedding Hampers',
  'Gifts & Accessories'
];

const bespokeCreationsList = [
  'Custom Rugs',
  'Bespoke Textiles',
  'Commissioned Paintings',
  'Luxury Gifting',
  'Wedding Collections',
  'Interior Projects'
];

export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 space-y-10">
      {/* Header Banner */}
      <div className="text-center space-y-4 border-b border-[#CDA45A]/30 pb-8">
        <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
          Heritage Commerce Directives & Service Charter
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1E1A18]">
          Terms & Heritage Service
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 font-light pt-2">
          <span><strong>Effective Date:</strong> August 6, 2026</span>
          <span className="text-[#CDA45A]">•</span>
          <span><strong>Last Updated:</strong> August 6, 2026</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-3xl p-6 sm:p-10 md:p-12 space-y-12 shadow-luxury text-xs sm:text-sm text-gray-700 leading-relaxed font-light">

        {/* SECTION I: TERMS & CONDITIONS */}
        <div className="space-y-10">
          <div className="border-b-2 border-[#CDA45A]/30 pb-4">
            <span className="font-cinzel text-xs text-[#CDA45A] tracking-widest font-bold uppercase block">Part I</span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1E1A18]">
              Terms & Conditions
            </h2>
          </div>

          {/* 1. Introduction */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <FileText className="w-5 h-5 text-[#CDA45A] shrink-0" /> 1. Introduction
            </h3>
            <p>
              Welcome to <strong>Hathipole The Bazaar</strong> (&quot;Hathipole&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
            </p>
            <p>
              These Terms &amp; Conditions govern your access to and use of our website, products, and services. By accessing our website or placing an order, you agree to be bound by these Terms.
            </p>
            <p className="italic text-gray-600 border-l-2 border-[#CDA45A] pl-3 py-1 bg-[#F5EFE6]/50 rounded-r-lg">
              If you do not agree with these Terms, please do not use our website.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <UserCheck className="w-5 h-5 text-[#CDA45A] shrink-0" /> 2. Eligibility
            </h3>
            <p>By using our website, you confirm that:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>You are at least 18 years of age or have permission from a parent or legal guardian.</li>
              <li>The information you provide is accurate and complete.</li>
              <li>You are legally capable of entering into a binding agreement.</li>
            </ul>
          </section>

          {/* 3. Products */}
          <section className="space-y-4">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <ShoppingBag className="w-5 h-5 text-[#CDA45A] shrink-0" /> 3. Products
            </h3>
            <p>
              Hathipole The Bazaar offers authentic Indian handcrafted products including, but not limited to:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {termsProductsList.map((item) => (
                <div key={item} className="flex items-center gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 px-3 py-2 rounded-xl text-xs text-gray-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 italic pt-2">
              As every handmade product is unique, slight variations in color, texture, weave, brushwork, dimensions, or finish are natural characteristics and are not considered defects.
            </p>
          </section>

          {/* 4. Authenticity */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <Award className="w-5 h-5 text-[#CDA45A] shrink-0" /> 4. Authenticity
            </h3>
            <p>
              We are committed to offering genuine handcrafted products sourced directly from skilled artisans across India.
            </p>
            <p>
              Natural materials, traditional techniques, and handmade processes mean every piece is unique.
            </p>
          </section>

          {/* 5. Pricing */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <DollarSign className="w-5 h-5 text-[#CDA45A] shrink-0" /> 5. Pricing
            </h3>
            <p>All prices are displayed in the selected currency where available.</p>
            <p>Prices may change without prior notice.</p>
            <p>
              Applicable taxes, customs duties, import charges, and local fees are the responsibility of the customer unless stated otherwise.
            </p>
          </section>

          {/* 6. Orders */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <ShoppingBag className="w-5 h-5 text-[#CDA45A] shrink-0" /> 6. Orders
            </h3>
            <p>We reserve the right to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Accept or decline any order</li>
              <li>Cancel suspicious or fraudulent orders</li>
              <li>Limit purchase quantities</li>
              <li>Correct pricing errors</li>
            </ul>
            <p className="text-gray-600 pt-1">
              An order confirmation does not constitute final acceptance until payment has been successfully processed and the order is approved.
            </p>
          </section>

          {/* 7. Payments */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <CreditCard className="w-5 h-5 text-[#CDA45A] shrink-0" /> 7. Payments
            </h3>
            <p>Payments are processed through secure third-party payment providers.</p>
            <p className="font-semibold text-[#1E1A18]">
              We do not store your complete payment card information.
            </p>
          </section>

          {/* 8. Shipping */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <Truck className="w-5 h-5 text-[#CDA45A] shrink-0" /> 8. Shipping
            </h3>
            <p>Estimated delivery dates are provided for convenience only.</p>
            <p>Delivery times may vary due to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Customs inspections</li>
              <li>Weather</li>
              <li>International shipping delays</li>
              <li>Artisan production schedules</li>
              <li>Public holidays</li>
            </ul>
            <p className="text-gray-600 pt-1">
              Risk of loss transfers to the customer upon delivery to the shipping address or as otherwise required by applicable law.
            </p>
          </section>

          {/* 9. Bespoke & Made-to-Order Products */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <Palette className="w-5 h-5 text-[#CDA45A] shrink-0" /> 9. Bespoke &amp; Made-to-Order Products
            </h3>
            <p>Custom-made, personalized, commissioned, or bespoke products:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Cannot be cancelled once production has begun.</li>
              <li>Are generally not eligible for returns unless damaged or defective.</li>
              <li>May require longer production timelines.</li>
            </ul>
          </section>

          {/* 10. Intellectual Property */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <Copyright className="w-5 h-5 text-[#CDA45A] shrink-0" /> 10. Intellectual Property
            </h3>
            <p>
              All content on this website, including Logos, Product Photography, Videos, Artwork, Product Descriptions, Graphics, Website Design, and Branding, is the intellectual property of Hathipole The Bazaar or its licensors and may not be copied, reproduced, or used without prior written permission.
            </p>
          </section>

          {/* 11. User Conduct */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <AlertTriangle className="w-5 h-5 text-[#CDA45A] shrink-0" /> 11. User Conduct
            </h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Use the website for unlawful purposes.</li>
              <li>Attempt unauthorized access to our systems.</li>
              <li>Upload malicious software.</li>
              <li>Infringe intellectual property rights.</li>
              <li>Interfere with website operations.</li>
            </ul>
          </section>

          {/* 12. Limitation of Liability */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <Scale className="w-5 h-5 text-[#CDA45A] shrink-0" /> 12. Limitation of Liability
            </h3>
            <p>
              To the fullest extent permitted by law, Hathipole The Bazaar shall not be liable for indirect, incidental, consequential, or special damages arising from the use of our website or products.
            </p>
            <p>Nothing in these Terms limits liability that cannot legally be excluded.</p>
          </section>

          {/* 13. Warranties */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <ShieldCheck className="w-5 h-5 text-[#CDA45A] shrink-0" /> 13. Warranties
            </h3>
            <p>Except where required by law, products are provided &quot;as is&quot; and &quot;as available.&quot;</p>
            <p>Handcrafted variations are inherent to artisan-made products and are not defects.</p>
          </section>

          {/* 14. Privacy */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <Lock className="w-5 h-5 text-[#CDA45A] shrink-0" /> 14. Privacy
            </h3>
            <p>
              Your use of the website is also governed by our{' '}
              <Link href="/privacy" className="text-[#CDA45A] font-semibold underline hover:text-[#1E1A18] transition-colors">
                Privacy Policy
              </Link>.
            </p>
          </section>

          {/* 15. Governing Law */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <Building2 className="w-5 h-5 text-[#CDA45A] shrink-0" /> 15. Governing Law
            </h3>
            <p>These Terms shall be governed by the laws of India.</p>
            <p>
              Any disputes shall be subject to the competent courts of Udaipur, Rajasthan, unless applicable consumer protection laws provide otherwise.
            </p>
          </section>

          {/* 16. Changes to These Terms */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <RefreshCw className="w-5 h-5 text-[#CDA45A] shrink-0" /> 16. Changes to These Terms
            </h3>
            <p>We may revise these Terms at any time.</p>
            <p>Updated versions become effective upon publication on our website.</p>
            <p>Continued use of the website constitutes acceptance of the revised Terms.</p>
          </section>

          {/* 17. Contact */}
          <section className="space-y-4 bg-[#F7F0E7] border border-[#CDA45A]/40 rounded-2xl p-6 sm:p-8">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/20 pb-2">
              <Mail className="w-5 h-5 text-[#CDA45A] shrink-0" /> 17. Contact Us
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-gray-800 font-normal">
              <p className="font-bold text-base text-[#1E1A18]">Hathipole The Bazaar</p>
              <p className="text-gray-600">Udaipur, Rajasthan, India</p>
              <p className="flex items-center gap-2 pt-1">
                <strong className="text-[#1E1A18]">Email:</strong>
                <a href="mailto:team@hathipolethebazaar.com" className="text-[#CDA45A] hover:underline font-semibold">
                  team@hathipolethebazaar.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <strong className="text-[#1E1A18]">Website:</strong>
                <a href="https://www.hathipolethebazaar.com" target="_blank" rel="noopener noreferrer" className="text-[#CDA45A] hover:underline font-semibold">
                  https://www.hathipolethebazaar.com
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* SECTION II: HERITAGE SERVICE CHARTER */}
        <div className="space-y-10 pt-8 border-t-2 border-[#CDA45A]/30">
          <div className="border-b-2 border-[#CDA45A]/30 pb-4">
            <span className="font-cinzel text-xs text-[#CDA45A] tracking-widest font-bold uppercase block">Part II</span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1E1A18]">
              Heritage Service Charter
            </h2>
          </div>

          {/* Preserving India's Living Heritage */}
          <section className="space-y-3 bg-[#241F1C] text-[#FCFAF7] rounded-2xl p-6 sm:p-8 border border-[#CDA45A]/40 shadow-xl">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#E6D2A8] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#CDA45A]" /> Preserving India&apos;s Living Heritage
            </h3>
            <p className="leading-relaxed font-light text-gray-200">
              At <strong>Hathipole The Bazaar</strong>, we believe every handcrafted creation carries a story that deserves to be preserved. Our Heritage Service is our commitment to protecting authenticity, celebrating artisan craftsmanship, and helping customers become custodians of India&apos;s rich artistic traditions.
            </p>
          </section>

          {/* Authentic Craftsmanship */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <Award className="w-5 h-5 text-[#CDA45A] shrink-0" /> Authentic Craftsmanship
            </h3>
            <p>
              Every piece is handcrafted by skilled artisans using traditional techniques passed down through generations. We work directly with master craftsmen from across India to ensure every creation reflects genuine heritage and exceptional quality.
            </p>
          </section>

          {/* Curated Collections */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <Compass className="w-5 h-5 text-[#CDA45A] shrink-0" /> Curated Collections
            </h3>
            <p>Each product is carefully selected based on:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-gray-800">
              <div className="flex items-center gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 px-3 py-2 rounded-xl text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A]" /> Authenticity
              </div>
              <div className="flex items-center gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 px-3 py-2 rounded-xl text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A]" /> Craftsmanship
              </div>
              <div className="flex items-center gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 px-3 py-2 rounded-xl text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A]" /> Material Quality
              </div>
              <div className="flex items-center gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 px-3 py-2 rounded-xl text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A]" /> Cultural Significance
              </div>
              <div className="flex items-center gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 px-3 py-2 rounded-xl text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A]" /> Artistic Excellence
              </div>
            </div>
            <p className="text-gray-600 italic pt-1">
              We prioritize timeless craftsmanship over mass production.
            </p>
          </section>

          {/* Artisan Support */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <Heart className="w-5 h-5 text-[#CDA45A] shrink-0" /> Artisan Support
            </h3>
            <p>
              Every purchase helps sustain traditional artisan communities by supporting fair opportunities and preserving skills that might otherwise disappear.
            </p>
            <p>
              Our goal is to build lasting partnerships with artisans while promoting responsible and ethical craftsmanship.
            </p>
          </section>

          {/* Quality Assurance */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <ShieldCheck className="w-5 h-5 text-[#CDA45A] shrink-0" /> Quality Assurance
            </h3>
            <p>Before dispatch, every product undergoes careful inspection for:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-600">
              <div className="flex items-center gap-1.5"><span className="text-[#CDA45A]">•</span> Craftsmanship</div>
              <div className="flex items-center gap-1.5"><span className="text-[#CDA45A]">•</span> Material Integrity</div>
              <div className="flex items-center gap-1.5"><span className="text-[#CDA45A]">•</span> Finishing</div>
              <div className="flex items-center gap-1.5"><span className="text-[#CDA45A]">•</span> Packaging</div>
              <div className="flex items-center gap-1.5"><span className="text-[#CDA45A]">•</span> Authenticity</div>
            </div>
            <p className="text-gray-600 pt-1">
              Due to the handmade nature of our collections, slight variations make each piece unique.
            </p>
          </section>

          {/* Heritage Documentation */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <BookOpen className="w-5 h-5 text-[#CDA45A] shrink-0" /> Heritage Documentation
            </h3>
            <p>Where available, selected products may include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Craft Origin</li>
              <li>Artisan Story</li>
              <li>Traditional Techniques</li>
              <li>Material Information</li>
              <li>Care Instructions</li>
            </ul>
            <p className="text-gray-600 pt-1">
              These details help preserve the cultural significance of every handcrafted piece.
            </p>
          </section>

          {/* Care & Preservation Guidance */}
          <section className="space-y-3">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <Layers className="w-5 h-5 text-[#CDA45A] shrink-0" /> Care &amp; Preservation Guidance
            </h3>
            <p>
              We provide recommendations to help customers preserve handcrafted products for years to come, including advice on cleaning, storage, handling, and display where applicable.
            </p>
          </section>

          {/* Bespoke Heritage Creations */}
          <section className="space-y-4">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
              <Palette className="w-5 h-5 text-[#CDA45A] shrink-0" /> Bespoke Heritage Creations
            </h3>
            <p>
              Our Heritage Service also supports custom commissions for homes, hospitality projects, collectors, and special occasions.
            </p>
            <p className="font-semibold text-[#1E1A18]">Subject to availability, we can assist with:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {bespokeCreationsList.map((item) => (
                <div key={item} className="flex items-center gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 px-3 py-2 rounded-xl text-xs text-gray-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 italic pt-1">
              Production timelines vary depending on the craft and artisan.
            </p>
          </section>

          {/* Our Promise */}
          <section className="space-y-4 bg-[#F5EFE6] border-2 border-[#CDA45A]/40 rounded-2xl p-6 sm:p-8 text-[#1E1A18]">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#CDA45A]" /> Our Promise
            </h3>
            <p className="leading-relaxed font-normal">
              When you choose Hathipole The Bazaar, you are not simply purchasing a product; you are supporting generations of craftsmanship, preserving cultural heritage, and helping traditional artisans continue their life&apos;s work.
            </p>
            <p className="leading-relaxed font-semibold italic text-[#CDA45A] pt-1">
              Every creation is made with patience, skill, and pride, carrying the legacy of India&apos;s artistic traditions into homes around the world.
            </p>
          </section>
        </div>

        {/* Bottom Action Footer */}
        <div className="pt-6 border-t border-[#CDA45A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500">Have questions regarding our terms or bespoke services?</span>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/privacy" className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1E1A18] border border-[#CDA45A]/40 rounded-xl hover:bg-[#F7F0E7] transition-all">
              Privacy Policy
            </Link>
            <a href="mailto:team@hathipolethebazaar.com" className="btn-gold px-6 py-2.5 text-xs uppercase font-bold tracking-wider rounded-xl shadow-md">
              Contact Concierge Team
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

