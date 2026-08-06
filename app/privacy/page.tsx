import {
  ShieldCheck,
  Lock,
  Globe,
  Cookie,
  Database,
  FileText,
  Eye,
  CheckCircle2,
  Mail,
  Server,
  Scale,
  RefreshCw,
  UserCheck,
  HelpCircle,
  Sparkles,
  ShoppingBag,
  Share2,
  BellRing,
  Building2
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Hathipole The Bazaar',
  description: 'Learn how Hathipole The Bazaar collects, uses, protects, and handles your personal information with absolute confidentiality and security.'
};

const collectionsList = [
  'Handmade Rugs',
  'Pashmina',
  'Textiles',
  'Bandhani',
  'Bespoke Collections',
  'Handicrafts',
  'Miniature & Pichwai Paintings',
  'Jewellery',
  'Attar & Natural Fragrances',
  'Bags & Diaries',
  'Indian Spices',
  'Wedding Hampers',
  'Designer Apparel',
  'Return Gifts',
  'Home Décor'
];

export default function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 space-y-10">
      {/* Header Banner */}
      <div className="text-center space-y-4 border-b border-[#D4AF37]/30 pb-8">
        <span className="font-cinzel text-xs tracking-[0.25em] text-[#D4AF37] uppercase block font-semibold">
          Client Confidentiality & Data Assurance
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1E1A18]">
          Privacy Policy
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 font-light pt-2">
          <span><strong>Effective Date:</strong> August 6, 2026</span>
          <span className="text-[#D4AF37]">•</span>
          <span><strong>Last Updated:</strong> August 6, 2026</span>
        </div>
      </div>

      {/* Main Privacy Card */}
      <div className="bg-[#FCFAF7] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 md:p-12 space-y-10 shadow-luxury text-xs sm:text-sm text-gray-700 leading-relaxed font-light">

        {/* 1. Welcome */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0" /> Welcome
          </h2>
          <p>
            Welcome to <strong>Hathipole The Bazaar</strong> (&quot;Hathipole&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
          </p>
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you visit our website, place an order, communicate with us, or otherwise interact with our services.
          </p>
          <p className="italic text-gray-600 border-l-2 border-[#D4AF37] pl-3 py-1 bg-[#F5EFE6]/50 rounded-r-lg">
            By using our website, you agree to the practices described in this Privacy Policy.
          </p>
        </section>

        {/* 2. About Hathipole The Bazaar */}
        <section className="space-y-4">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <Building2 className="w-5 h-5 text-[#D4AF37] shrink-0" /> About Hathipole The Bazaar
          </h2>
          <p>
            Hathipole The Bazaar is a luxury online marketplace based in <strong>Udaipur, Rajasthan, India</strong>, bringing authentic Indian craftsmanship to customers worldwide.
          </p>
          <div>
            <p className="font-semibold text-[#1E1A18] mb-2">Our collections include:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {collectionsList.map((item) => (
                <div key={item} className="flex items-center gap-2 bg-[#F7F0E7] border border-[#D4AF37]/20 px-3 py-2 rounded-xl text-xs text-gray-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Information We Collect */}
        <section className="space-y-4">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <Database className="w-5 h-5 text-[#D4AF37] shrink-0" /> Information We Collect
          </h2>
          <p>
            Depending on how you use our website, we may collect the following information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Personal Information */}
            <div className="bg-[#F7F0E7]/60 border border-[#D4AF37]/20 rounded-2xl p-5 space-y-2">
              <h3 className="font-serif-luxury font-bold text-[#1E1A18] text-base flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#D4AF37]" /> Personal Information
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Billing Address</li>
                <li>Shipping Address</li>
                <li>Company Name (if applicable)</li>
              </ul>
            </div>

            {/* Order Information */}
            <div className="bg-[#F7F0E7]/60 border border-[#D4AF37]/20 rounded-2xl p-5 space-y-2">
              <h3 className="font-serif-luxury font-bold text-[#1E1A18] text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" /> Order Information
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Purchased Products</li>
                <li>Order History</li>
                <li>Delivery Preferences</li>
                <li>Order Notes</li>
                <li>Invoice Information</li>
              </ul>
            </div>

            {/* Payment Information */}
            <div className="bg-[#F7F0E7]/60 border border-[#D4AF37]/20 rounded-2xl p-5 space-y-2 md:col-span-2">
              <h3 className="font-serif-luxury font-bold text-[#1E1A18] text-base flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#D4AF37]" /> Payment Information
              </h3>
              <p>
                Payments are processed securely through trusted third-party payment providers.
              </p>
              <p className="font-semibold text-[#1E1A18]">
                We <u>do not store</u> your complete credit card or debit card details on our servers.
              </p>
              <p className="pt-1 font-medium text-gray-700">Payment processors may collect:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Payment Tokens</li>
                <li>Transaction IDs</li>
                <li>Payment Status</li>
              </ul>
            </div>

            {/* Automatically Collected Information */}
            <div className="bg-[#F7F0E7]/60 border border-[#D4AF37]/20 rounded-2xl p-5 space-y-2 md:col-span-2">
              <h3 className="font-serif-luxury font-bold text-[#1E1A18] text-base flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#D4AF37]" /> Automatically Collected Information
              </h3>
              <p>When you visit our website we may automatically collect:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-gray-600">
                <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> IP Address</div>
                <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Browser Type</div>
                <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Device Information</div>
                <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Operating System</div>
                <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Language Preferences</div>
                <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Time Zone</div>
                <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Referral URLs</div>
                <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Pages Viewed</div>
                <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Session Information</div>
                <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Shopping Activity</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Cookies */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <Cookie className="w-5 h-5 text-[#D4AF37] shrink-0" /> Cookies
          </h2>
          <p>Our website uses cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Keep your shopping cart active</li>
            <li>Remember your preferences</li>
            <li>Improve website performance</li>
            <li>Understand visitor behavior</li>
            <li>Enhance security</li>
            <li>Personalize your shopping experience</li>
          </ul>
          <p className="text-gray-500 italic pt-1">
            You may disable cookies in your browser settings, although certain features of the website may not function correctly.
          </p>
        </section>

        {/* 5. How We Use Your Information */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <FileText className="w-5 h-5 text-[#D4AF37] shrink-0" /> How We Use Your Information
          </h2>
          <p>We use your information to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Process and fulfill orders</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Deliver purchased products</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Verify payments</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Prevent fraud</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Respond to customer inquiries</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Improve website functionality</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Personalize recommendations</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Send order confirmations</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Provide shipping updates</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Manage returns and refunds</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Improve customer experience</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Comply with legal obligations</div>
          </div>

          <div className="pt-3 space-y-2">
            <p className="font-semibold text-[#1E1A18]">With your consent, we may also send:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Product launches</li>
              <li>Exclusive collections</li>
              <li>Artisan stories</li>
              <li>Promotional offers</li>
              <li>Newsletters</li>
            </ul>
            <p className="text-gray-500 italic pt-1">
              You may unsubscribe from marketing communications at any time.
            </p>
          </div>
        </section>

        {/* 6. Legal Basis for Processing (GDPR) */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <Scale className="w-5 h-5 text-[#D4AF37] shrink-0" /> Legal Basis for Processing (GDPR)
          </h2>
          <p>
            Where applicable, we process personal data based on one or more of the following lawful grounds:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Your consent</li>
            <li>Performance of a contract</li>
            <li>Compliance with legal obligations</li>
            <li>Legitimate business interests</li>
            <li>Protection against fraud and abuse</li>
          </ul>
        </section>

        {/* 7. Sharing Your Information */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <Share2 className="w-5 h-5 text-[#D4AF37] shrink-0" /> Sharing Your Information
          </h2>
          <p className="font-bold text-[#1E1A18]">
            We never sell your personal information.
          </p>
          <p>
            We may share limited information with trusted service providers only when necessary to operate our business. These may include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 pl-2">
            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Payment Gateways</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Shipping Partners</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Courier Services</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Email Service Providers</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Website Hosting Providers</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Analytics Providers</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Customer Support Platforms</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Government Authorities where required by law</div>
          </div>
          <p className="text-gray-600 pt-1">
            Each service provider is expected to protect your information appropriately.
          </p>
        </section>

        {/* 8. International Transfers */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <Globe className="w-5 h-5 text-[#D4AF37] shrink-0" /> International Transfers
          </h2>
          <p>
            As we serve customers worldwide, your information may be processed in countries outside your country of residence.
          </p>
          <p>
            Where required by law, we implement appropriate safeguards to protect your personal information during international data transfers.
          </p>
        </section>

        {/* 9. Data Retention */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <Server className="w-5 h-5 text-[#D4AF37] shrink-0" /> Data Retention
          </h2>
          <p>We retain personal information only for as long as necessary to:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Fulfill orders</li>
            <li>Provide customer support</li>
            <li>Maintain business records</li>
            <li>Comply with tax and legal obligations</li>
            <li>Resolve disputes</li>
            <li>Enforce agreements</li>
          </ul>
          <p className="text-gray-600 pt-1">
            When no longer required, personal information is securely deleted or anonymized.
          </p>
        </section>

        {/* 10. Data Security */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" /> Data Security
          </h2>
          <p>We use commercially reasonable security measures including:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> SSL Encryption</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Secure Payment Processing</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Firewall Protection</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Access Controls</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Regular Security Updates</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Secure Hosting Infrastructure</div>
          </div>
          <p className="text-gray-500 italic pt-1">
            While no online system can guarantee absolute security, we continuously work to protect your information.
          </p>
        </section>

        {/* 11. Your Privacy Rights */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <UserCheck className="w-5 h-5 text-[#D4AF37] shrink-0" /> Your Privacy Rights
          </h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal information</li>
            <li>Restrict processing</li>
            <li>Object to processing</li>
            <li>Withdraw consent</li>
            <li>Request data portability</li>
            <li>Lodge a complaint with a relevant data protection authority</li>
          </ul>
          <p className="text-gray-600 pt-1">
            Requests may be submitted using the contact information below.
          </p>
        </section>

        {/* 12. Marketing Communications */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <BellRing className="w-5 h-5 text-[#D4AF37] shrink-0" /> Marketing Communications
          </h2>
          <p>If you subscribe to our newsletter, we may occasionally send:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>New collection announcements</li>
            <li>Artisan stories</li>
            <li>Limited edition releases</li>
            <li>Festival offers</li>
            <li>Exclusive member promotions</li>
          </ul>
          <p className="text-gray-600 pt-1">
            You can unsubscribe at any time using the link included in our emails.
          </p>
        </section>

        {/* 13. Third-Party Services */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <Globe className="w-5 h-5 text-[#D4AF37] shrink-0" /> Third-Party Services
          </h2>
          <p>Our website may integrate with third-party services such as:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-600">
            <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Payment Providers</div>
            <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Shipping Companies</div>
            <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Google Analytics</div>
            <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Social Media Platforms</div>
            <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Instagram</div>
            <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> Facebook</div>
            <div className="flex items-center gap-1.5"><span className="text-[#D4AF37]">•</span> YouTube</div>
          </div>
          <p className="text-gray-500 italic pt-1">
            These services maintain their own privacy policies, and we encourage you to review them separately.
          </p>
        </section>

        {/* 14. Children's Privacy */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <HelpCircle className="w-5 h-5 text-[#D4AF37] shrink-0" /> Children&apos;s Privacy
          </h2>
          <p>
            Our website is not intended for children under the age of 13 (or the applicable minimum age in your jurisdiction).
          </p>
          <p>
            We do not knowingly collect personal information from children.
          </p>
          <p>
            If we become aware that such information has been collected, we will promptly delete it.
          </p>
        </section>

        {/* 15. Changes to This Privacy Policy */}
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
            <RefreshCw className="w-5 h-5 text-[#D4AF37] shrink-0" /> Changes to This Privacy Policy
          </h2>
          <p>We may update this Privacy Policy periodically to reflect:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Changes in applicable laws</li>
            <li>New website features</li>
            <li>Business operations</li>
            <li>Security improvements</li>
          </ul>
          <p className="text-gray-600 pt-1">
            The updated version will always display the latest &quot;Last Updated&quot; date.
          </p>
        </section>

        {/* 16. Contact Us */}
        <section className="space-y-4 bg-[#F7F0E7] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#D4AF37]/20 pb-2">
            <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" /> Contact Us
          </h2>
          <p>
            If you have any questions regarding this Privacy Policy or your personal information, please contact us.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-gray-800 font-normal">
            <p className="font-bold text-base text-[#1E1A18]">Hathipole The Bazaar</p>
            <p className="text-gray-600">Udaipur, Rajasthan, India</p>
            <p className="flex items-center gap-2 pt-1">
              <strong className="text-[#1E1A18]">Email:</strong>
              <a href="mailto:privacy@hathipolethebazaar.com" className="text-[#D4AF37] hover:underline font-semibold">
                privacy@hathipolethebazaar.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <strong className="text-[#1E1A18]">Website:</strong>
              <a href="https://www.hathipolethebazaar.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline font-semibold">
                https://www.hathipolethebazaar.com
              </a>
            </p>
          </div>
        </section>

        {/* 17. Consent */}
        <section className="space-y-3 border-t border-[#D4AF37]/20 pt-6">
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1A18] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" /> Consent
          </h2>
          <p className="font-medium text-gray-800">
            By accessing or using Hathipole The Bazaar, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
          </p>
        </section>

        {/* Action Bar */}
        <div className="pt-6 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500">Have questions or specific data requests?</span>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/terms" className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1E1A18] border border-[#D4AF37]/40 rounded-xl hover:bg-[#F7F0E7] transition-all">
              Terms of Heritage Service
            </Link>
            <a href="mailto:privacy@hathipolethebazaar.com" className="btn-gold px-6 py-2.5 text-xs uppercase font-bold tracking-wider rounded-xl shadow-md">
              Contact Privacy Team
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

