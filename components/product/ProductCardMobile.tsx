'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { useStore } from '@/lib/store/useStore';
import { formatPrice } from '@/lib/data/currencies';
import { Heart, Eye, Star, ShoppingBag, ShieldCheck } from 'lucide-react';

interface ProductCardMobileProps {
  product: Product;
  compactImageAspect?: string;
}

export default function ProductCardMobile({
  product,
  compactImageAspect = 'aspect-[4/4]'
}: ProductCardMobileProps) {
  const [hovered, setHovered] = useState(false);
  const {
    currency,
    addToCart,
    toggleWishlist,
    wishlistIds,
    setQuickViewProduct
  } = useStore();

  const isWishlisted = wishlistIds.includes(product.id);

  return (
    <div
      className="group relative luxury-card-interactive flex flex-col h-full rounded-2xl overflow-hidden border border-[#D4AF37]/25 bg-white shadow-sm hover:shadow-md transition-all duration-300"
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setTimeout(() => setHovered(false), 1500)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image Container */}
      <div className={`relative ${compactImageAspect} overflow-hidden bg-gray-50 cursor-pointer`}>
        <Link href={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Badge Overlay */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10 pointer-events-none">
          {product.isBestSeller && (
            <span className="bg-[#1E1A18]/90 backdrop-blur-xs text-[#E6D2A8] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-[#D4AF37]/40 shadow-xs">
              Best Seller
            </span>
          )}
          {product.isNewArrival && !product.isBestSeller && (
            <span className="bg-[#D4AF37] text-[#1E1A18] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
              New
            </span>
          )}
          {product.isLimitedEdition && !product.isBestSeller && !product.isNewArrival && (
            <span className="bg-[#B56A45] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
              Limited
            </span>
          )}
        </div>

        {/* Quick Action Floating Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-1.5 z-10">
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={`w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm transition-all active:scale-90 ${
              isWishlisted
                ? 'bg-red-50 text-red-500 border border-red-200 scale-105'
                : 'bg-white/90 text-[#1E1A18] hover:bg-[#D4AF37] hover:text-white'
            }`}
            title="Wishlist"
            aria-label="Add to wishlist"
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          {/* Quick View Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="w-7 h-7 rounded-full bg-white/90 text-[#1E1A18] hover:bg-[#D4AF37] hover:text-white flex items-center justify-center backdrop-blur-md shadow-sm transition-all active:scale-90"
            title="Quick View"
            aria-label="Quick view product"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Compact Content Details */}
      <div className="p-2 flex-1 flex flex-col justify-between space-y-1.5">
        <div className="space-y-0.5">
          {/* Region & Rating Header */}
          <div className="flex items-center justify-between text-[9px] gap-1">
            <span className="text-[#B56A45] font-bold tracking-wider uppercase font-cinzel text-[8px] truncate">
              {product.craftRegion}
            </span>
            <div className="flex items-center gap-0.5 text-amber-500 font-semibold bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-1 py-0.1 rounded-full shrink-0">
              <Star className="w-2 h-2 fill-amber-400 text-amber-400" />
              <span className="text-[9px] text-[#1E1A18] font-bold">{product.rating}</span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/product/${product.id}`} className="block">
            <h4 className="font-serif-luxury text-[11px] font-bold text-[#1E1A18] group-hover:text-[#D4AF37] transition-colors line-clamp-1 leading-tight">
              {product.title}
            </h4>
          </Link>
        </div>

        {/* Pricing & Add to Cart Footer */}
        <div className="pt-1.5 border-t border-[#D4AF37]/20 space-y-1.5">
          <div className="flex items-baseline justify-between gap-1">
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className="font-serif-luxury text-xs font-bold text-[#1E1A18]">
                {formatPrice(product.priceUSD, currency)}
              </span>
              {product.originalPriceUSD && (
                <span className="text-[9px] text-gray-400 line-through font-light">
                  {formatPrice(product.originalPriceUSD, currency)}
                </span>
              )}
            </div>

            {product.authenticityCertificate && (
              <span className="text-[7px] text-[#3E5C4B] font-semibold flex items-center gap-0.5 bg-[#3E5C4B]/10 px-1 py-0.1 rounded-full shrink-0" title="Certified Authentic">
                <ShieldCheck className="w-2 h-2 text-[#3E5C4B]" /> Cert.
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="btn-gold w-full py-1 px-1.5 text-[9px] uppercase font-bold tracking-wider flex items-center justify-center gap-1 rounded-lg shadow-xs active:scale-98 transition-transform"
          >
            <ShoppingBag className="w-2.5 h-2.5" /> Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}
