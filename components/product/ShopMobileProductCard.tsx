'use client';

import Link from 'next/link';
import { Product } from '@/lib/types';
import { useStore } from '@/lib/store/useStore';
import { formatPrice } from '@/lib/data/currencies';
import { Heart } from 'lucide-react';

interface ShopMobileProductCardProps {
  product: Product;
}

export default function ShopMobileProductCard({ product }: ShopMobileProductCardProps) {
  const { currency, toggleWishlist, wishlistIds } = useStore();
  const isWishlisted = wishlistIds.includes(product.id);

  const hasDiscount = product.originalPriceUSD && product.originalPriceUSD > product.priceUSD;

  return (
    <div className="group relative bg-[#FCFAF7] border border-[#CDA45A]/25 hover:border-[#CDA45A] rounded-xl sm:rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs active:scale-95 transition-all duration-200 touch-manipulation">
      {/* Top Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <Link href={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Top-Left Sale / Status Badge */}
        <div className="absolute top-1.5 left-1.5 z-10 flex flex-col gap-1">
          {hasDiscount ? (
            <span className="bg-red-900/90 text-white text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full shadow-xs">
              SALE
            </span>
          ) : product.isBestSeller ? (
            <span className="bg-[#1E1A18]/90 text-[#E6D2A8] text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border border-[#CDA45A]/40 shadow-xs">
              BEST
            </span>
          ) : product.isNewArrival ? (
            <span className="bg-[#CDA45A] text-[#1E1A18] text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full shadow-xs">
              NEW
            </span>
          ) : null}
        </div>

        {/* Top-Right Wishlist Icon Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-1.5 right-1.5 z-10 w-6 h-6 rounded-full flex items-center justify-center backdrop-blur-md shadow-xs transition-all active:scale-90 ${
            isWishlisted
              ? 'bg-red-50 text-red-500 border border-red-200 shadow-[0_0_10px_rgba(239,68,68,0.4)]'
              : 'bg-white/85 text-[#1E1A18] hover:bg-[#CDA45A] hover:text-white'
          }`}
          aria-label="Add to wishlist"
        >
          <Heart className={`w-3 h-3 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Essential Card Details */}
      <div className="p-2 flex-1 flex flex-col justify-between space-y-1">
        <Link href={`/product/${product.id}`}>
          <h4 className="font-serif-luxury text-[11px] font-bold text-[#1E1A18] group-hover:text-[#CDA45A] transition-colors line-clamp-2 leading-tight">
            {product.title}
          </h4>
        </Link>

        {/* Price Row */}
        <div className="pt-0.5 flex flex-wrap items-baseline gap-1">
          <span className="font-serif-luxury text-xs font-bold text-[#1E1A18]">
            {formatPrice(product.priceUSD, currency)}
          </span>
          {product.originalPriceUSD && (
            <span className="text-[9px] text-gray-400 line-through">
              {formatPrice(product.originalPriceUSD, currency)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
