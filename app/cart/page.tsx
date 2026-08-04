'use client';

import useState from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store/useStore';
import { formatPrice } from '@/lib/data/currencies';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Gift,
  Tag,
  ArrowRight,
  ShieldCheck,
  Truck
} from 'lucide-react';

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    currency,
    giftWrap,
    setGiftWrap,
    giftMessage,
    setGiftMessage,
    appliedCoupon,
    applyCoupon,
    removeCoupon
  } = useStore();

  const subtotalUSD = cart.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);
  const discountAmountUSD = appliedCoupon ? (subtotalUSD * appliedCoupon.discountPercentage) / 100 : 0;
  const giftWrapFeeUSD = giftWrap ? 5 : 0;
  const finalTotalUSD = subtotalUSD - discountAmountUSD + giftWrapFeeUSD;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 space-y-8">
      <div className="border-b border-[#CDA45A]/20 pb-4">
        <span className="font-cinzel text-xs tracking-[0.2em] text-[#CDA45A] uppercase block">
          Client Shopping Bag
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1E1A18]">
          Your Royal Selections ({cart.reduce((a, b) => a + b.quantity, 0)})
        </h1>
      </div>

      {cart.length === 0 ? (
        <div className="bg-[#FCFAF7] border border-[#CDA45A]/20 rounded-3xl p-16 text-center space-y-4 shadow-luxury max-w-xl mx-auto">
          <ShoppingBag className="w-16 h-16 text-[#CDA45A] mx-auto" />
          <h2 className="font-serif-luxury text-2xl font-bold text-[#1E1A18]">
            Your shopping bag is currently empty
          </h2>
          <p className="text-xs text-gray-500">
            Discover our luxury hand-knotted silk carpets, 24K gold Pichwai paintings, and pure cashmere pashminas.
          </p>
          <Link
            href="/shop"
            className="btn-gold px-8 py-3 text-xs uppercase font-bold tracking-wider inline-block mt-2"
          >
            Explore Royal Catalog
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-6 shadow-sm hover:border-[#CDA45A] transition-all"
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-28 h-32 object-cover rounded-xl border border-gray-200 shrink-0 mx-auto sm:mx-0"
                />

                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] text-[#B56A45] font-semibold uppercase">
                          {product.craftRegion}
                        </span>
                        <h4 className="font-serif-luxury text-lg font-bold text-[#1E1A18]">
                          {product.title}
                        </h4>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-1">{product.tagline}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#CDA45A]/15">
                    <div className="flex items-center border border-gray-300 rounded-xl bg-white">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="px-3 py-1.5 hover:bg-gray-100 rounded-l-xl font-bold text-gray-600"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-semibold">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="px-3 py-1.5 hover:bg-gray-100 rounded-r-xl font-bold text-gray-600"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-serif-luxury text-lg font-bold text-[#1E1A18]">
                      {formatPrice(product.priceUSD * quantity, currency)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Gift Wrapping Box */}
            <div className="bg-[#F7F0E7] border border-[#CDA45A]/30 rounded-2xl p-6 space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={giftWrap}
                  onChange={(e) => setGiftWrap(e.target.checked)}
                  className="w-4 h-4 accent-[#CDA45A] rounded"
                />
                <div className="flex items-center gap-2 text-sm font-bold text-[#1E1A18]">
                  <Gift className="w-4 h-4 text-[#CDA45A]" />
                  <span>Add Royal Velvet Gift Packaging ({formatPrice(5, currency)})</span>
                </div>
              </label>

              {giftWrap && (
                <textarea
                  value={giftMessage}
                  onChange={(e) => setGiftMessage(e.target.value)}
                  placeholder="Enter custom gift inscription message for the recipient card..."
                  rows={3}
                  className="w-full text-xs p-3 bg-white border border-[#CDA45A]/40 rounded-xl focus:outline-none focus:border-[#CDA45A]"
                />
              )}
            </div>
          </div>

          {/* Order Summary Column */}
          <div className="lg:col-span-4 bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-2xl p-6 space-y-6 shadow-luxury sticky top-28">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18] border-b border-[#CDA45A]/20 pb-3">
              Order Summary
            </h3>

            <div className="space-y-3 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-[#1E1A18]">{formatPrice(subtotalUSD, currency)}</span>
              </div>

              {appliedCoupon && (
                <div className="flex justify-between text-green-700 font-semibold">
                  <span>Discount ({appliedCoupon.code})</span>
                  <span>-{formatPrice(discountAmountUSD, currency)}</span>
                </div>
              )}

              {giftWrap && (
                <div className="flex justify-between text-[#CDA45A] font-semibold">
                  <span>Royal Gift Wrapping</span>
                  <span>+{formatPrice(5, currency)}</span>
                </div>
              )}

              <div className="flex justify-between text-gray-500">
                <span>Worldwide Express Courier</span>
                <span className="text-green-700 font-semibold">COMPLIMENTARY</span>
              </div>

              <div className="flex justify-between pt-3 border-t border-[#CDA45A]/30 font-serif-luxury text-xl font-bold text-[#1E1A18]">
                <span>Total Amount</span>
                <span>{formatPrice(finalTotalUSD, currency)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="btn-gold w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="space-y-2 text-[11px] text-gray-500 text-center pt-2">
              <div className="flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#CDA45A]" />
                <span>Certified Authentic Origin & 256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Truck className="w-4 h-4 text-[#CDA45A]" />
                <span>Insured Door-to-Door Air Courier</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
