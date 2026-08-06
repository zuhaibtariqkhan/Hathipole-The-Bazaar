import {
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Users,
  Feather,
  Palette,
  Eye,
  FileCheck,
  Heart,
  ShieldAlert,
  BookOpen,
  Truck,
  Lock,
  Headphones,
  ArrowRight,
  MapPin,
  Check
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Authenticity Guaranteed | Hathipole The Bazaar',
  description: '100% Certified authentic Indian craftsmanship, direct artisan relationships, genuine materials, and quality inspection guarantees.'
};

const trustBadges = [
  { icon: ShieldCheck, title: '100% Authentic Indian Crafts', desc: 'Guaranteed genuine heritage artistry' },
  { icon: Users, title: 'Directly Sourced from Master Artisans', desc: 'Working directly with traditional guild masters' },
  { icon: Award, title: '350+ Artisan Partners Across India', desc: 'Empowering hereditary craft clusters' },
  { icon: Sparkles, title: '70+ Years of Heritage & Experience', desc: 'Generations of trusted art curation' },
  { icon: Feather, title: 'Handcrafted, Never Mass Produced', desc: 'Every piece is uniquely hand-created' },
  { icon: Heart, title: 'Ethically & Responsibly Sourced', desc: 'Fair wages & sustainable craft support' },
  { icon: Eye, title: 'Quality Inspected Before Dispatch', desc: 'Rigorous 6-point craft inspection' },
  { icon: Truck, title: 'Worldwide Express Shipping', desc: 'Insured air courier via FedEx & DHL' },
  { icon: Lock, title: '256-Bit SSL Secure Payments', desc: 'Encrypted global payment processing' },
  { icon: Headphones, title: 'Dedicated Customer Support', desc: 'Senior craft concierge at your service' }
];

const craftJourneySteps = [
  { step: '01', title: 'Artisan Selection', desc: 'Partnering with recognized master craft lineage families across India.' },
  { step: '02', title: 'Material Sourcing', desc: 'Selecting pure silk, wool, Pashmina, natural dyes, and 24K gold foil.' },
  { step: '03', title: 'Handcrafting', desc: 'Weeks or months of meticulous hand weaving, painting, or carving.' },
  { step: '04', title: 'Quality Inspection', desc: 'Multi-point inspection of structural integrity, finish, and detail.' },
  { step: '05', title: 'Authenticity Verification', desc: 'Issuing serialized Certificate of Authenticity and craft origin proof.' },
  { step: '06', title: 'Premium Packaging', desc: 'Archival custom boxing with protective care documentation.' },
  { step: '07', title: 'Worldwide Delivery', desc: 'Insured priority express courier straight to your residence.' }
];

const uniqueVariations = [
  'Color tones & natural dye shading',
  'Textural weave variations',
  'Intricate pattern nuances',
  'Hand brushwork details',
  'Knotting density & texture',
  'Needlework & embroidery touch',
  'Wood & marble carving marks',
  'Natural stone placement',
  'Subtle dimensional uniqueness',
  'Hand-burnished metallic finish'
];

const genuineMaterials = [
  'Pure Wool',
  'Silk',
  'Pashmina',
  'Cotton',
  'Linen',
  'Wood',
  'Brass',
  'Marble',
  'Semi-Precious Stones',
  'Leather',
  'Handmade Paper',
  'Natural Dyes',
  'Mineral Pigments',
  'Gold or Silver Foil'
];

const traditionalTechniques = [
  'Hand Weaving',
  'Hand Knotting',
  'Hand Spinning',
  'Block Printing',
  'Bandhani Tie-Dye',
  'Hand Embroidery',
  'Zardozi',
  'Pichwai Painting',
  'Miniature Painting',
  'Wood Carving',
  'Stone Inlay',
  'Metal Craft',
  'Natural Attar Distillation',
  'Handloom Textile Production'
];

export default function AuthenticityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 space-y-12">
      {/* Header Banner */}
      <div className="text-center space-y-4 border-b border-[#CDA45A]/30 pb-8">
        <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
          100% Genuine Heritage Guarantee
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1E1A18]">
          Authenticity Guaranteed
        </h1>
        <p className="font-serif-luxury text-xl text-[#CDA45A] italic font-normal max-w-2xl mx-auto">
          Authentic Indian Craftsmanship. Guaranteed.
        </p>
        <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto font-light leading-relaxed pt-2">
          At <strong>Hathipole The Bazaar</strong>, authenticity is not a marketing claim—it is the foundation of everything we do. Every creation represents the skill, patience, and cultural heritage of India&apos;s master artisans.
        </p>
      </div>

      {/* Visual Trust Badges Grid */}
      <div className="bg-[#241F1C] border border-[#CDA45A]/40 rounded-3xl p-6 sm:p-8 text-[#FCFAF7] shadow-2xl space-y-6">
        <div className="text-center space-y-1">
          <span className="font-cinzel text-xs tracking-[0.2em] text-[#CDA45A] uppercase block font-semibold">
            Our Pillars of Trust
          </span>
          <h2 className="font-serif-luxury text-2xl font-bold text-[#E6D2A8]">
            Why Patrons Worldwide Trust Hathipole
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-2">
          {trustBadges.map((badge) => {
            const IconComp = badge.icon;
            return (
              <div
                key={badge.title}
                className="bg-[#2A2421] border border-[#CDA45A]/25 rounded-2xl p-4 flex flex-col items-center text-center gap-2 hover:border-[#CDA45A] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#CDA45A]/15 border border-[#CDA45A]/40 flex items-center justify-center text-[#CDA45A] group-hover:bg-[#CDA45A] group-hover:text-[#1E1A18] transition-all">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-xs font-bold text-[#E6D2A8] leading-tight">
                  {badge.title}
                </h3>
                <p className="text-[11px] text-gray-300 font-light leading-tight">
                  {badge.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Authenticity Document Container */}
      <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-3xl p-6 sm:p-10 md:p-12 space-y-10 shadow-luxury text-xs sm:text-sm text-gray-700 leading-relaxed font-light">

        {/* 1. Our Authenticity Promise */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
            <ShieldCheck className="w-5 h-5 text-[#CDA45A] shrink-0" /> Our Authenticity Promise
          </h2>
          <p>
            Every product offered by Hathipole The Bazaar is carefully selected to meet our standards of authenticity, quality, and craftsmanship.
          </p>
          <p className="font-semibold text-[#1E1A18]">We are committed to ensuring that each item:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div className="flex items-start gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 p-3 rounded-xl text-xs text-gray-800">
              <Check className="w-4 h-4 text-[#CDA45A] shrink-0 mt-0.5" />
              <span>Is handcrafted using traditional techniques wherever applicable.</span>
            </div>
            <div className="flex items-start gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 p-3 rounded-xl text-xs text-gray-800">
              <Check className="w-4 h-4 text-[#CDA45A] shrink-0 mt-0.5" />
              <span>Is sourced from trusted artisans, workshops, or verified craft communities.</span>
            </div>
            <div className="flex items-start gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 p-3 rounded-xl text-xs text-gray-800">
              <Check className="w-4 h-4 text-[#CDA45A] shrink-0 mt-0.5" />
              <span>Reflects the artistic traditions and cultural identity of its region.</span>
            </div>
            <div className="flex items-start gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 p-3 rounded-xl text-xs text-gray-800">
              <Check className="w-4 h-4 text-[#CDA45A] shrink-0 mt-0.5" />
              <span>Is made using high-quality materials appropriate to the craft.</span>
            </div>
            <div className="flex items-start gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 p-3 rounded-xl text-xs text-gray-800">
              <Check className="w-4 h-4 text-[#CDA45A] shrink-0 mt-0.5" />
              <span>Undergoes quality inspection before dispatch.</span>
            </div>
            <div className="flex items-start gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 p-3 rounded-xl text-xs text-gray-800">
              <Check className="w-4 h-4 text-[#CDA45A] shrink-0 mt-0.5" />
              <span>Represents genuine Indian craftsmanship rather than mass-produced replicas.</span>
            </div>
          </div>
        </section>

        {/* 2. Direct Relationships with Artisans */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
            <Users className="w-5 h-5 text-[#CDA45A] shrink-0" /> Direct Relationships with Artisans
          </h2>
          <p>
            We believe authenticity begins with the people who create our products.
          </p>
          <p>
            Instead of relying solely on wholesalers, we strive to work directly with skilled artisans, family workshops, cooperatives, and traditional craft clusters across India. Many of these crafts have been passed down through generations, preserving techniques that cannot be replicated by industrial manufacturing.
          </p>
          <p className="text-gray-800 font-medium">
            Our goal is to celebrate these artisans while helping sustain their livelihoods and preserve their cultural legacy.
          </p>
        </section>

        {/* 3. Handcrafted Means Every Piece is Unique */}
        <section className="space-y-4">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
            <Feather className="w-5 h-5 text-[#CDA45A] shrink-0" /> Handcrafted Means Every Piece is Unique
          </h2>
          <p>
            Unlike machine-made products, handcrafted creations naturally exhibit subtle variations. You may notice small differences in:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {uniqueVariations.map((item) => (
              <div key={item} className="bg-[#F7F0E7] border border-[#CDA45A]/20 px-3 py-2 rounded-xl text-xs text-center font-medium text-gray-800">
                {item}
              </div>
            ))}
          </div>
          <p className="italic text-gray-800 border-l-2 border-[#CDA45A] pl-3 py-1 bg-[#F5EFE6]/50 rounded-r-lg font-normal">
            These are not imperfections—they are the distinctive marks of genuine handmade craftsmanship and make every piece one of a kind.
          </p>
        </section>

        {/* 4. Genuine Materials */}
        <section className="space-y-4">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
            <Sparkles className="w-5 h-5 text-[#CDA45A] shrink-0" /> Genuine Materials
          </h2>
          <p>
            Where applicable, our products are created using carefully selected natural and traditional materials, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-1">
            {genuineMaterials.map((mat) => (
              <div key={mat} className="flex items-center gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 px-3 py-2 rounded-xl text-xs text-gray-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A] shrink-0" />
                <span>{mat}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 italic pt-1">
            Material composition may vary depending on the specific craft and product.
          </p>
        </section>

        {/* 5. Traditional Techniques */}
        <section className="space-y-4">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
            <Palette className="w-5 h-5 text-[#CDA45A] shrink-0" /> Traditional Techniques
          </h2>
          <p>
            Our collections celebrate some of India&apos;s most respected artistic traditions, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-1">
            {traditionalTechniques.map((tech) => (
              <div key={tech} className="flex items-center gap-2 bg-[#F7F0E7] border border-[#CDA45A]/20 px-3 py-2 rounded-xl text-xs text-gray-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A] shrink-0" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 pt-1">
            Many of these techniques require years of training and are practiced by artisan families who have dedicated their lives to preserving these traditions.
          </p>
        </section>

        {/* 6. Interactive Journey of a Craft Section */}
        <section className="space-y-6 pt-4 border-t border-[#CDA45A]/20">
          <div className="text-center space-y-1">
            <span className="font-cinzel text-xs tracking-[0.2em] text-[#CDA45A] uppercase block font-semibold">
              Trace the Creation
            </span>
            <h2 className="font-serif-luxury text-2xl font-bold text-[#1E1A18]">
              Journey of a Craft
            </h2>
            <p className="text-xs text-gray-500 max-w-xl mx-auto">
              From traditional artisan workshops in India to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 pt-2">
            {craftJourneySteps.map((s, idx) => (
              <div
                key={s.step}
                className="bg-[#F7F0E7] border border-[#CDA45A]/30 rounded-2xl p-4 space-y-2 flex flex-col justify-between hover:border-[#CDA45A] hover:bg-[#F5EFE6] transition-all relative"
              >
                <div className="flex items-center justify-between">
                  <span className="font-cinzel font-bold text-base text-[#CDA45A]">{s.step}</span>
                  {idx < craftJourneySteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#CDA45A]/40 hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10" />
                  )}
                </div>
                <h3 className="font-serif-luxury font-bold text-xs text-[#1E1A18] leading-snug">
                  {s.title}
                </h3>
                <p className="text-[11px] text-gray-600 leading-normal font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Quality Inspection */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
            <Eye className="w-5 h-5 text-[#CDA45A] shrink-0" /> Quality Inspection
          </h2>
          <p>Every product is inspected before shipment to ensure it meets our standards for:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-600">
            <div className="flex items-center gap-1.5"><span className="text-[#CDA45A]">•</span> Craftsmanship</div>
            <div className="flex items-center gap-1.5"><span className="text-[#CDA45A]">•</span> Material Quality</div>
            <div className="flex items-center gap-1.5"><span className="text-[#CDA45A]">•</span> Structural Integrity</div>
            <div className="flex items-center gap-1.5"><span className="text-[#CDA45A]">•</span> Finish</div>
            <div className="flex items-center gap-1.5"><span className="text-[#CDA45A]">•</span> Functionality</div>
            <div className="flex items-center gap-1.5"><span className="text-[#CDA45A]">•</span> Packaging</div>
          </div>
          <p className="text-gray-600 pt-1">
            While handmade variations are expected, products that do not meet our quality expectations are not approved for dispatch.
          </p>
        </section>

        {/* 8. Certificate of Authenticity */}
        <section className="space-y-3 bg-[#F5EFE6] border border-[#CDA45A]/30 rounded-2xl p-6">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/20 pb-2">
            <FileCheck className="w-5 h-5 text-[#CDA45A] shrink-0" /> Certificate of Authenticity
          </h2>
          <p>
            Selected premium products include a Certificate of Authenticity or product documentation containing information such as:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-800 pt-1">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A]" /> Product Name</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A]" /> Craft Tradition</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A]" /> Region of Origin</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A]" /> Material Details</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A]" /> Artisan or Workshop</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#CDA45A]" /> Care Instructions</div>
          </div>
          <p className="text-gray-500 italic pt-1 text-xs">
            Availability of documentation may vary depending on the product category.
          </p>
        </section>

        {/* 9. Ethical Sourcing */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
            <Heart className="w-5 h-5 text-[#CDA45A] shrink-0" /> Ethical Sourcing
          </h2>
          <p>We believe authentic craftsmanship should also be responsibly sourced. Whenever possible, we aim to:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Support traditional artisan communities.</li>
            <li>Encourage fair and respectful working relationships.</li>
            <li>Promote sustainable handcrafted production.</li>
            <li>Preserve endangered craft traditions.</li>
            <li>Reduce dependence on mass manufacturing.</li>
          </ul>
          <p className="text-gray-800 font-medium pt-1">
            Every purchase contributes to sustaining India&apos;s rich artistic heritage for future generations.
          </p>
        </section>

        {/* 10. Counterfeit Protection */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
            <ShieldAlert className="w-5 h-5 text-[#CDA45A] shrink-0" /> Counterfeit Protection
          </h2>
          <p>We do not knowingly sell counterfeit, imitation, or unauthorized products.</p>
          <p>
            If we discover that any product does not meet our authenticity standards, we will remove it from our collection and take appropriate corrective action.
          </p>
          <p className="text-gray-600">
            Customers who have concerns about the authenticity of a purchase are encouraged to contact our support team for assistance.
          </p>
        </section>

        {/* 11. Caring for Handmade Products */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/15 pb-2">
            <BookOpen className="w-5 h-5 text-[#CDA45A] shrink-0" /> Caring for Handmade Products
          </h2>
          <p>Authentic handcrafted items deserve thoughtful care.</p>
          <p>
            To preserve their beauty and longevity, we recommend following the care instructions provided with your purchase. Proper handling, cleaning, and storage will help maintain the quality and character of your handcrafted piece for years to come.
          </p>
        </section>

        {/* 12. Our Commitment */}
        <section className="space-y-4 bg-[#241F1C] text-[#FCFAF7] rounded-2xl p-6 sm:p-8 border border-[#CDA45A]/40 shadow-xl">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#E6D2A8] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#CDA45A]" /> Our Commitment
          </h2>
          <p className="leading-relaxed font-light text-gray-200">
            At Hathipole The Bazaar, authenticity is more than a promise—it is a responsibility. By choosing our collections, you are not only acquiring exceptional handcrafted products but also supporting the artisans, traditions, and communities that keep India&apos;s extraordinary cultural heritage alive.
          </p>
          <div className="pt-2 border-t border-[#CDA45A]/30 space-y-1 font-serif-luxury text-[#E6D2A8] italic text-base">
            <p>Every purchase tells a story. Every creation carries a legacy. Every artisan preserves a tradition.</p>
            <p className="font-sans text-xs text-gray-300 not-italic pt-1 font-light">
              Thank you for becoming part of that journey.
            </p>
          </div>
        </section>

        {/* Bottom Action Bar */}
        <div className="pt-6 border-t border-[#CDA45A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500">Discover the master craftspeople behind our collections.</span>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/artisans" className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1E1A18] border border-[#CDA45A]/40 rounded-xl hover:bg-[#F7F0E7] transition-all">
              Meet Master Artisans
            </Link>
            <Link href="/shop" className="btn-gold px-6 py-2.5 text-xs uppercase font-bold tracking-wider rounded-xl shadow-md">
              Explore Royal Catalog
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

