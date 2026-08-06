'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import { mockProducts } from '@/lib/data/mockProducts';
import { useStore } from '@/lib/store/useStore';
import { formatPrice } from '@/lib/data/currencies';
import {
  Star,
  ShieldCheck,
  ShoppingBag,
  Heart,
  Truck,
  RotateCcw,
  Sparkles,
  Award,
  CheckCircle2,
  Share2,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = mockProducts.find((p) => p.id === id) || mockProducts[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [zipCode, setZipCode] = useState('');
  const [deliveryResult, setDeliveryResult] = useState<string | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<'story' | 'specs' | 'care' | 'shipping'>('story');
  const [quantity, setQuantity] = useState(1);

  // High-Res Image Lens Magnifier State
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0, bgX: 0, bgY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;
    setMagnifierPos({ x, y, bgX, bgY });
  };

  const { currency, addToCart, toggleWishlist, wishlistIds, showToast } = useStore();
  const isWishlisted = wishlistIds.includes(product.id);

  // Bundle product
  const bundleProduct = mockProducts.find((p) => p.id !== product.id && p.category === product.category) || mockProducts[1];

  const handleCalculateDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode) return;
    setDeliveryResult(`Estimated Delivery to ${zipCode}: 3-5 Business Days via FedEx Air Express`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 space-y-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium">
        <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <Link href="/shop" className="hover:text-[#D4AF37]">Shop</Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <Link href={`/shop?category=${product.category}`} className="hover:text-[#D4AF37]">{product.categoryName}</Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#1E1A18] font-bold line-clamp-1">{product.title}</span>
      </nav>

      {/* Main PDP Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Gallery Column with High-Res Image Lens Magnifier */}
        <div className="lg:col-span-7 space-y-4 sticky top-28">
          <div
            className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 border border-[#D4AF37]/30 shadow-2xl relative cursor-crosshair group"
            onMouseEnter={() => setShowMagnifier(true)}
            onMouseLeave={() => setShowMagnifier(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover"
            />

            {/* Gallery Image Navigation Slider Arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1E1A18]/70 backdrop-blur-md border border-[#D4AF37]/50 text-white hover:bg-[#D4AF37] hover:text-[#1E1A18] transition-all flex items-center justify-center shadow-lg cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) => (prev + 1) % product.images.length);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1E1A18]/70 backdrop-blur-md border border-[#D4AF37]/50 text-white hover:bg-[#D4AF37] hover:text-[#1E1A18] transition-all flex items-center justify-center shadow-lg cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* High-Res Lens Magnifier Overlay */}
            {showMagnifier && (
              <div
                className="pointer-events-none absolute w-44 h-44 rounded-full border-2 border-[#D4AF37] shadow-2xl hidden md:block z-30"
                style={{
                  top: `${magnifierPos.y - 88}px`,
                  left: `${magnifierPos.x - 88}px`,
                  backgroundImage: `url(${product.images[selectedImage] || product.images[0]})`,
                  backgroundPosition: `${magnifierPos.bgX}% ${magnifierPos.bgY}%`,
                  backgroundSize: '300%',
                  boxShadow: '0 0 25px rgba(212, 175, 55, 0.4), inset 0 0 15px rgba(0, 0, 0, 0.2)'
                }}
              />
            )}

            {product.isLimitedEdition && (
              <span className="absolute top-4 left-4 badge-gold-foil text-[#1E1A18] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full z-20">
                Collector Limited Edition
              </span>
            )}
          </div>

          {/* Thumbnails Strip */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === idx ? 'border-[#D4AF37] scale-95 shadow-md' : 'border-transparent opacity-70'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-[#B56A45] font-semibold uppercase tracking-wider">
                {product.craftRegion} • {product.craftType}
              </span>
              <div className="flex items-center gap-1 text-amber-500 font-semibold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-gray-400">({product.reviewCount} Reviews)</span>
              </div>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1E1A18] leading-tight">
              {product.title}
            </h1>
            <p className="text-xs text-gray-500 italic mt-1">{product.tagline}</p>

            <div className="flex items-baseline gap-3 my-4">
              <span className="font-serif-luxury text-3xl font-bold text-[#1E1A18]">
                {formatPrice(product.priceUSD * quantity, currency)}
              </span>
              {product.originalPriceUSD && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.originalPriceUSD * quantity, currency)}
                </span>
              )}
              <span className="text-xs text-green-700 font-semibold bg-green-100 px-2.5 py-1 rounded-full">
                Ready to Ship
              </span>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Master Artisan Card */}
          <div className="bg-[#FCFAF7] border border-[#D4AF37]/30 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <img
                src={product.artisan.avatar}
                alt={product.artisan.name}
                className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]"
              />
              <div>
                <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block">
                  Master Artisan Bio
                </span>
                <h5 className="font-serif-luxury text-sm font-bold text-[#1E1A18]">
                  {product.artisan.name}
                </h5>
                <span className="text-[11px] text-gray-500 block">{product.artisan.title}</span>
              </div>
            </div>
            <Link
              href="/artisans"
              className="text-xs text-[#D4AF37] font-semibold hover:underline shrink-0"
            >
              Story →
            </Link>
          </div>

          {/* Add to Cart Controls */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-xl bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-xl font-bold"
                >
                  -
                </button>
                <span className="px-4 text-xs font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-xl font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(product, quantity)}
                className="btn-gold flex-1 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Shopping Bag
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3.5 rounded-xl border transition-colors ${
                  isWishlisted
                    ? 'bg-red-50 text-red-500 border-red-200'
                    : 'border-[#D4AF37] text-gray-700 hover:bg-[#D4AF37] hover:text-white'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Zip Code Delivery Calculator */}
          <div className="bg-[#F7F0E7] border border-[#D4AF37]/25 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1E1A18]">
              <Truck className="w-4 h-4 text-[#D4AF37]" />
              <span>Calculate Worldwide Courier Delivery</span>
            </div>
            <form onSubmit={handleCalculateDelivery} className="flex gap-2">
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter Postal / Zip Code (e.g. 10021)"
                className="flex-1 text-xs px-3 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#1E1A18] text-[#FCFAF7] text-xs font-semibold rounded-xl hover:bg-[#D4AF37]"
              >
                Check
              </button>
            </form>
            {deliveryResult && (
              <p className="text-xs text-[#3E5C4B] font-semibold flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-4 h-4 text-[#3E5C4B]" />
                {deliveryResult}
              </p>
            )}
          </div>

          {/* Detailed Accordions */}
          <div className="border border-[#D4AF37]/25 rounded-2xl divide-y divide-[#D4AF37]/20 bg-[#FCFAF7]">
            {/* Story */}
            <div className="p-4">
              <button
                onClick={() => setActiveAccordion(activeAccordion === 'story' ? 'specs' : 'story')}
                className="w-full flex justify-between items-center text-xs font-bold text-[#1E1A18] uppercase tracking-wider"
              >
                <span>Heritage Craft Story</span>
                <span>{activeAccordion === 'story' ? '-' : '+'}</span>
              </button>
              {activeAccordion === 'story' && (
                <p className="text-xs text-gray-600 leading-relaxed pt-3">
                  {product.story}
                </p>
              )}
            </div>

            {/* Specs */}
            <div className="p-4">
              <button
                onClick={() => setActiveAccordion(activeAccordion === 'specs' ? 'story' : 'specs')}
                className="w-full flex justify-between items-center text-xs font-bold text-[#1E1A18] uppercase tracking-wider"
              >
                <span>Specifications & Dimensions</span>
                <span>{activeAccordion === 'specs' ? '-' : '+'}</span>
              </button>
              {activeAccordion === 'specs' && (
                <div className="text-xs text-gray-600 space-y-1.5 pt-3">
                  <div><strong>Dimensions:</strong> {product.dimensions}</div>
                  <div><strong>Weight:</strong> {product.weight}</div>
                  <div><strong>Materials:</strong> {product.materials.join(', ')}</div>
                  <div><strong>Authenticity:</strong> Certified Handcrafted Origin</div>
                </div>
              )}
            </div>

            {/* Care */}
            <div className="p-4">
              <button
                onClick={() => setActiveAccordion(activeAccordion === 'care' ? 'story' : 'care')}
                className="w-full flex justify-between items-center text-xs font-bold text-[#1E1A18] uppercase tracking-wider"
              >
                <span>Heritage Care Instructions</span>
                <span>{activeAccordion === 'care' ? '-' : '+'}</span>
              </button>
              {activeAccordion === 'care' && (
                <ul className="text-xs text-gray-600 space-y-1.5 pt-3 list-disc pl-4">
                  {product.careInstructions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Bought Together Bundle */}
      <section className="bg-[#FCFAF7] border border-[#D4AF37]/30 rounded-3xl p-8 space-y-6 shadow-luxury">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#D4AF37]" />
          <h3 className="font-serif-luxury text-2xl font-bold text-[#1E1A18]">
            Frequently Bought Together (Curated Royal Pairing)
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-24 h-28 rounded-xl overflow-hidden border border-[#D4AF37]/30 shrink-0">
              <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h5 className="font-serif-luxury text-sm font-bold text-[#1E1A18]">{product.title}</h5>
              <span className="font-serif-luxury text-sm font-bold text-[#D4AF37]">
                {formatPrice(product.priceUSD, currency)}
              </span>
            </div>

            <Plus className="w-6 h-6 text-[#D4AF37] shrink-0" />

            <div className="w-24 h-28 rounded-xl overflow-hidden border border-[#D4AF37]/30 shrink-0">
              <img src={bundleProduct.images[0]} alt={bundleProduct.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h5 className="font-serif-luxury text-sm font-bold text-[#1E1A18]">{bundleProduct.title}</h5>
              <span className="font-serif-luxury text-sm font-bold text-[#D4AF37]">
                {formatPrice(bundleProduct.priceUSD, currency)}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              addToCart(product, 1);
              addToCart(bundleProduct, 1);
              showToast('Added pairing bundle to shopping bag!');
            }}
            className="btn-gold px-6 py-3 text-xs uppercase font-bold tracking-wider shrink-0"
          >
            Add Both to Bag ({formatPrice(product.priceUSD + bundleProduct.priceUSD, currency)})
          </button>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="space-y-6">
        <h3 className="font-serif-luxury text-3xl font-bold text-[#1E1A18]">
          Client Ratings & Authenticity Reviews ({product.reviewCount})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FCFAF7] border border-[#D4AF37]/20 rounded-2xl p-6 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-serif-luxury text-sm font-bold text-[#1E1A18]">Lady Eleanor Vance</span>
              <span className="text-[10px] text-gray-400">Verified Buyer • USA</span>
            </div>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-gray-600 italic leading-relaxed">
              &ldquo;The craftsmanship on this piece is museum quality. The colors and gold gilding shimmer beautifully under soft lighting in our living room.&rdquo;
            </p>
          </div>

          <div className="bg-[#FCFAF7] border border-[#D4AF37]/20 rounded-2xl p-6 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-serif-luxury text-sm font-bold text-[#1E1A18]">Lord Alistair Sterling</span>
              <span className="text-[10px] text-gray-400">Verified Buyer • UK</span>
            </div>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-gray-600 italic leading-relaxed">
              &ldquo;Shipping from India to London was seamless with FedEx Express. Arrived safely wrapped with an authentic certificate of origin.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
