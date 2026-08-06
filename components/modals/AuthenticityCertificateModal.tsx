'use client';

import { useEffect, useRef } from 'react';
import { useStore } from '@/lib/store/useStore';
import {
  X,
  ShieldCheck,
  Award,
  Download,
  Printer,
  Sparkles,
  CheckCircle2,
  MapPin,
  UserCheck,
  QrCode,
  Share2
} from 'lucide-react';

export default function AuthenticityCertificateModal() {
  const { authenticityModalProduct, setAuthenticityModalProduct, showToast } = useStore();
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (authenticityModalProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [authenticityModalProduct]);

  if (!authenticityModalProduct) return null;

  const product = authenticityModalProduct;
  const certificateId = `HTB-2026-${product.id.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    showToast(`Downloading official Certificate of Authenticity PDF for ${product.title}...`);
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-6 md:p-10 flex items-center justify-center print:p-0 print:static print:bg-white">
      {/* Backdrop */}
      <div
        onClick={() => setAuthenticityModalProduct(null)}
        className="fixed inset-0 bg-[#1E1A18]/85 backdrop-blur-md transition-opacity print:hidden"
      />

      {/* Main Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#FCFAF7] border-2 border-[#D4AF37] rounded-3xl shadow-2xl overflow-hidden z-10 animate-fadeIn my-auto print:shadow-none print:border-4 print:max-w-none print:rounded-none">
        {/* Close Button */}
        <button
          onClick={() => setAuthenticityModalProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text.gray-400 hover:text-[#1E1A18] bg-white/90 rounded-full shadow-md border border-[#D4AF37]/30 transition-all cursor-pointer print:hidden"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Inner Canvas (Printable Area) */}
        <div ref={printRef} className="p-6 sm:p-10 space-y-6 relative overflow-hidden bg-[#FCFAF7]">
          {/* Subtle Ambient Watermark Crest */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 text-[#D4AF37] select-none">
            <span className="font-serif-luxury text-[180px] font-bold">H</span>
          </div>

          {/* Decorative Corner Ornaments */}
          <div className="absolute top-3 left-3 text-[#D4AF37] text-lg font-serif select-none pointer-events-none">
            ❖
          </div>
          <div className="absolute top-3 right-3 text-[#D4AF37] text-lg font-serif select-none pointer-events-none">
            ❖
          </div>
          <div className="absolute bottom-3 left-3 text-[#D4AF37] text-lg font-serif select-none pointer-events-none">
            ❖
          </div>
          <div className="absolute bottom-3 right-3 text-[#D4AF37] text-lg font-serif select-none pointer-events-none">
            ❖
          </div>

          {/* Top Header & Holographic Seal */}
          <div className="text-center space-y-3 border-b-2 border-[#D4AF37]/30 pb-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-gold-foil text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#1E1A18]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Official Digital Ledger Verification
            </div>

            <h2 className="font-cinzel text-xl sm:text-3xl font-bold tracking-[0.2em] text-[#1E1A18] uppercase">
              Certificate of Authenticity
            </h2>

            <p className="text-xs text-gray-500 font-light tracking-widest uppercase">
              Hathipole The Bazaar • Royal Heritage Guild
            </p>

            <div className="flex justify-center items-center gap-2 text-[10px] text-[#D4AF37] font-mono font-bold tracking-widest pt-1">
              <span>CERTIFICATE ID:</span>
              <span className="bg-[#1E1A18] text-[#E6D2A8] px-3 py-1 rounded-md shadow-xs border border-[#D4AF37]/40">
                {certificateId}
              </span>
            </div>
          </div>

          {/* Certificate Body Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            {/* Left Image & Seal Preview */}
            <div className="md:col-span-5 space-y-3 text-center">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-xl relative group bg-white">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#E6D2A8] block">
                    Certified Item
                  </span>
                  <h4 className="font-serif-luxury text-xs sm:text-sm font-bold line-clamp-1">
                    {product.title}
                  </h4>
                </div>
              </div>

              {/* Holographic 24K Gold Seal */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F7F0E7] border border-[#D4AF37]/40 shadow-xs">
                <Award className="w-4 h-4 text-[#D4AF37] animate-pulse" />
                <span className="text-[10px] font-bold text-[#1E1A18] uppercase tracking-wider">
                  24K Gold Foil Certified Stamp
                </span>
              </div>
            </div>

            {/* Right Specifications & Provenance Details */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#B56A45]">
                  Certified Heritage Origin
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1E1A18]">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-600 italic">{product.tagline}</p>
              </div>

              {/* Artisan Guild Verification Box */}
              <div className="bg-[#F7F0E7] border border-[#D4AF37]/30 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#1E1A18] flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-[#D4AF37]" /> Master Artisan:
                  </span>
                  <span className="font-serif-luxury font-bold text-[#1E1A18] text-sm">
                    {product.artisan.name}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Guild & Region:
                  </span>
                  <span className="font-semibold text-[#1E1A18]">{product.craftRegion}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Experience & Heritage:</span>
                  <span className="font-semibold text-[#1E1A18]">
                    {product.artisan.experienceYears} Years Master Crafting
                  </span>
                </div>
              </div>

              {/* Certified Specifications Grid */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1E1A18]">
                  Verified Material Specifications:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-[#D4AF37]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E5C4B] shrink-0" />
                    <span className="truncate"><strong>Materials:</strong> {product.materials.join(', ')}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#D4AF37]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E5C4B] shrink-0" />
                    <span className="truncate"><strong>Dimensions:</strong> {product.dimensions}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#D4AF37]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E5C4B] shrink-0" />
                    <span className="truncate"><strong>Technique:</strong> {product.craftType}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#D4AF37]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E5C4B] shrink-0" />
                    <span className="truncate"><strong>Weight:</strong> {product.weight}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Verification Seal & Signatures */}
          <div className="pt-6 border-t-2 border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#1E1A18] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] p-2 shadow-md">
                <QrCode className="w-full h-full" />
              </div>
              <div className="text-left space-y-0.5">
                <span className="text-[10px] font-bold text-[#1E1A18] uppercase tracking-wider block">
                  Scan to Verify Online
                </span>
                <span className="text-[11px] text-gray-500 font-mono block">
                  hathipole.org/verify/{product.id}
                </span>
              </div>
            </div>

            {/* Master Guild Signature Representation */}
            <div className="text-right space-y-1">
              <span className="font-serif-luxury text-xl italic text-[#1E1A18] font-bold block pr-2">
                Hathipole Heritage Guild
              </span>
              <span className="text-[9px] text-gray-500 tracking-widest uppercase block border-t border-gray-300 pt-1">
                Authorized Board of Master Artisans
              </span>
            </div>
          </div>
        </div>

        {/* Modal Action Footer Bar (Hidden in Print) */}
        <div className="p-4 sm:p-6 bg-[#F7F0E7] border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Guaranteed 100% Authentic Handcrafted Heritage</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#1E1A18] hover:bg-[#D4AF37] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Printer className="w-4 h-4" /> Print Certificate
            </button>

            <button
              onClick={handleDownloadPDF}
              className="flex-1 sm:flex-none btn-gold px-6 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
