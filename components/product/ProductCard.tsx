'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { useStore } from '@/lib/store/useStore';
import { formatPrice } from '@/lib/data/currencies';
import { Heart, Eye, SlidersHorizontal, Star, ShoppingBag, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const {
    currency,
    addToCart,
    toggleWishlist,
    wishlistIds,
    toggleCompare,
    compareIds,
    setQuickViewProduct
  } = useStore();

  const isWishlisted = wishlistIds.includes(product.id);
  const isCompared = compareIds.includes(product.id);

  return (
    <div
      className="group relative luxury-card-interactive flex flex-col h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 cursor-pointer">
        <Link href={`/product/${product.id}`}>
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Gold Foil Badges Overlay */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
          {product.isBestSeller && (
            <span className="bg-[#1E1A18] text-[#E6D2A8] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#D4AF37]/40 shadow-md">
              Best Seller
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-[#D4AF37] text-[#1E1A18] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              New Arrival
            </span>
          )}
          {product.isLimitedEdition && (
            <span className="bg-[#B56A45] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              Limited Edition
            </span>
          )}
        </div>

        {/* Floating Quick Action Gold Buttons */}
        <div className="absolute top-3.5 right-3.5 flex flex-col gap-2 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
          {/* Wishlist */}
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md shadow-md transition-all duration-300 ${
              isWishlisted
                ? 'bg-red-50 text-red-500 border border-red-200 scale-110 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                : 'bg-white/90 text-[#1E1A18] hover:bg-[#D4AF37] hover:text-white hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]'
            }`}
            title="Add to Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          {/* Quick View */}
          <button
            onClick={() => setQuickViewProduct(product)}
            className="w-9 h-9 rounded-full bg-white/90 text-[#1E1A18] hover:bg-[#D4AF37] hover:text-white flex items-center justify-center backdrop-blur-md shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
            title="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Compare */}
          <button
            onClick={() => toggleCompare(product.id)}
            className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md shadow-md transition-all duration-300 ${
              isCompared
                ? 'bg-[#D4AF37] text-white scale-110 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'bg-white/90 text-[#1E1A18] hover:bg-[#D4AF37] hover:text-white hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]'
            }`}
            title="Compare Specs"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Add To Cart Slide-Up Banner on Hover */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#1E1A18]/90 via-[#1E1A18]/60 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
          <button
            onClick={() => addToCart(product, 1)}
            className="btn-gold w-full py-2.5 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg"
          >
            <ShoppingBag className="w-4 h-4" /> Express Add to Bag
          </button>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="text-[#B56A45] font-bold tracking-wider uppercase font-cinzel text-[10px]">
              {product.craftRegion}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-semibold bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-2 py-0.5 rounded-full">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="text-xs text-[#1E1A18]">{product.rating}</span>
              <span className="text-[10px] text-gray-500">({product.reviewCount})</span>
            </div>
          </div>

          <Link href={`/product/${product.id}`}>
            <h4 className="font-serif-luxury text-lg font-bold text-[#1E1A18] group-hover:text-[#D4AF37] transition-colors line-clamp-1">
              {product.title}
            </h4>
          </Link>

          <p className="text-xs text-gray-500 line-clamp-1 mt-1 font-light">
            {product.tagline}
          </p>
        </div>

        <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif-luxury text-xl font-bold text-[#1E1A18]">
              {formatPrice(product.priceUSD, currency)}
            </span>
            {product.originalPriceUSD && (
              <span className="text-xs text-gray-400 line-through">
                {formatPrice(product.originalPriceUSD, currency)}
              </span>
            )}
          </div>

          {product.authenticityCertificate && (
            <span className="text-[10px] text-[#3E5C4B] font-semibold flex items-center gap-1 bg-[#3E5C4B]/10 border border-[#3E5C4B]/30 px-2 py-0.5 rounded-full" title="Authenticity Guaranteed">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3E5C4B]" /> Certified
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
