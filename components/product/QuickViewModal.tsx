'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store/useStore';
import { formatPrice } from '@/lib/data/currencies';
import {
  X,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Star,
  Check,
  Award,
  ArrowRight
} from 'lucide-react';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, currency, addToCart, toggleWishlist, wishlistIds } = useStore();
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  useEffect(() => {
    if (quickViewProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const isWishlisted = wishlistIds.includes(quickViewProduct.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0 bg-[#1E1A18]/80 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-4xl bg-[#FCFAF7] border border-[#CDA45A]/40 rounded-2xl shadow-2xl overflow-hidden z-10 animate-fadeIn my-auto">
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-[#1E1A18] bg-white/80 rounded-full shadow"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
          {/* Gallery Side */}
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 border border-[#CDA45A]/20 shadow-inner">
              <img
                src={quickViewProduct.images[selectedImgIndex] || quickViewProduct.images[0]}
                alt={quickViewProduct.title}
                className="w-full h-full object-cover"
              />
            </div>
            {quickViewProduct.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {quickViewProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImgIndex(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      selectedImgIndex === idx ? 'border-[#CDA45A] scale-95' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Side */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[#B56A45] font-semibold tracking-wider uppercase">
                  {quickViewProduct.craftRegion}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{quickViewProduct.rating}</span>
                  <span className="text-gray-400">({quickViewProduct.reviewCount} reviews)</span>
                </div>
              </div>

              <h2 className="font-serif-luxury text-2xl font-bold text-[#1E1A18] mb-1">
                {quickViewProduct.title}
              </h2>
              <p className="text-xs text-gray-500 italic mb-3">{quickViewProduct.tagline}</p>

              <div className="flex items-baseline gap-3 my-3">
                <span className="font-serif-luxury text-2xl font-bold text-[#1E1A18]">
                  {formatPrice(quickViewProduct.priceUSD, currency)}
                </span>
                {quickViewProduct.originalPriceUSD && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(quickViewProduct.originalPriceUSD, currency)}
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                {quickViewProduct.description}
              </p>

              {/* Artisan Highlight */}
              <div className="bg-[#F7F0E7] border border-[#CDA45A]/30 rounded-xl p-3.5 flex items-center gap-3 mb-4">
                <img
                  src={quickViewProduct.artisan.avatar}
                  alt={quickViewProduct.artisan.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#CDA45A]"
                />
                <div>
                  <span className="text-[10px] text-[#CDA45A] font-bold uppercase tracking-wider block">
                    Master Artisan Creation
                  </span>
                  <h6 className="font-serif-luxury text-xs font-bold text-[#1E1A18]">
                    {quickViewProduct.artisan.name} ({quickViewProduct.artisan.experienceYears} yrs exp.)
                  </h6>
                </div>
              </div>

              {/* Key Attributes */}
              <div className="space-y-1.5 text-xs text-gray-600 mb-6">
                <div><strong>Materials:</strong> {quickViewProduct.materials.join(', ')}</div>
                <div><strong>Dimensions:</strong> {quickViewProduct.dimensions}</div>
                <div><strong>Craft Technique:</strong> {quickViewProduct.craftType}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#CDA45A]/20">
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    addToCart(quickViewProduct, 1);
                    setQuickViewProduct(null);
                  }}
                  className="btn-gold flex-1 py-3 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Shopping Bag
                </button>
                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3 rounded-xl border transition-colors ${
                    isWishlisted ? 'bg-red-50 text-red-500 border-red-200' : 'border-[#CDA45A] text-gray-700 hover:bg-[#CDA45A] hover:text-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <Link
                href={`/product/${quickViewProduct.id}`}
                onClick={() => setQuickViewProduct(null)}
                className="block text-center text-xs font-semibold text-[#CDA45A] hover:underline"
              >
                View Full Specifications & Heritage Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
