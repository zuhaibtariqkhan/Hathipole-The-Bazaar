'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store/useStore';
import { formatPrice } from '@/lib/data/currencies';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Gift,
  Tag,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

export default function CartDrawer() {
  const {
    cartDrawerOpen,
    setCartDrawerOpen,
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

  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success?: boolean; message?: string }>({});

  if (!cartDrawerOpen) return null;

  const subtotalUSD = cart.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);
  const discountAmountUSD = appliedCoupon ? (subtotalUSD * appliedCoupon.discountPercentage) / 100 : 0;
  const giftWrapFeeUSD = giftWrap ? 5 : 0;
  const finalTotalUSD = subtotalUSD - discountAmountUSD + giftWrapFeeUSD;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyCoupon(couponInput);
    setCouponFeedback(res);
    if (res.success) setCouponInput('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setCartDrawerOpen(false)}
        className="fixed inset-0 bg-[#1E1A18]/70 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FCFAF7] border-l border-[#CDA45A]/30 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#CDA45A]/20 flex items-center justify-between bg-[#F7F0E7]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#CDA45A]" />
              <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18]">
                Your Shopping Bag ({cart.reduce((a, b) => a + b.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={() => setCartDrawerOpen(false)}
              className="p-2 text-gray-500 hover:text-[#1E1A18] transition-colors rounded-full hover:bg-gray-200/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#CDA45A]/10 text-[#CDA45A] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif-luxury text-lg font-semibold text-[#1E1A18]">
                  Your bag is currently empty
                </h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Explore our luxury handcrafted collections of Kashmiri silk rugs, Pashminas, and 24K Pichwai paintings.
                </p>
                <button
                  onClick={() => setCartDrawerOpen(false)}
                  className="btn-gold px-6 py-2.5 text-xs uppercase tracking-wider inline-block"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {cart.map(({ product, quantity, selectedVariant }) => (
                    <div
                      key={product.id}
                      className="flex gap-4 p-3 bg-white border border-[#CDA45A]/20 rounded-xl shadow-sm hover:border-[#CDA45A]/50 transition-colors"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-20 h-24 object-cover rounded-lg shrink-0 border border-gray-100"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h5 className="font-serif-luxury text-sm font-semibold text-[#1E1A18] line-clamp-1">
                              {product.title}
                            </h5>
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[11px] text-[#B56A45] font-medium mt-0.5">
                            {product.craftRegion}
                          </p>
                          {selectedVariant && (
                            <span className="text-[10px] text-gray-500 block">Variant: {selectedVariant}</span>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="p-1 hover:bg-gray-200 rounded-l-lg"
                            >
                              <Minus className="w-3 h-3 text-gray-600" />
                            </button>
                            <span className="px-2 text-xs font-semibold">{quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="p-1 hover:bg-gray-200 rounded-r-lg"
                            >
                              <Plus className="w-3 h-3 text-gray-600" />
                            </button>
                          </div>

                          <span className="font-serif-luxury text-sm font-bold text-[#1E1A18]">
                            {formatPrice(product.priceUSD * quantity, currency)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gift Wrap & Message Option */}
                <div className="bg-[#F7F0E7] border border-[#CDA45A]/30 rounded-xl p-4 space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                      className="w-4 h-4 accent-[#CDA45A] rounded"
                    />
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1E1A18]">
                      <Gift className="w-4 h-4 text-[#CDA45A]" />
                      <span>Add Royal Gift Wrapping ({formatPrice(5, currency)})</span>
                    </div>
                  </label>

                  {giftWrap && (
                    <textarea
                      value={giftMessage}
                      onChange={(e) => setGiftMessage(e.target.value)}
                      placeholder="Write your custom gift message for the recipient..."
                      rows={2}
                      className="w-full text-xs p-2.5 bg-white border border-[#CDA45A]/30 rounded-lg focus:outline-none focus:border-[#CDA45A]"
                    />
                  )}
                </div>

                {/* Promo Coupon Code Input */}
                <div className="space-y-2">
                  {appliedCoupon ? (
                    <div className="flex items-center justify-between bg-[#CDA45A]/15 border border-[#CDA45A] p-2.5 rounded-xl text-xs">
                      <div className="flex items-center gap-2 text-[#1E1A18] font-medium">
                        <Tag className="w-3.5 h-3.5 text-[#CDA45A]" />
                        <span>Code Applied: <strong>{appliedCoupon.code}</strong> ({appliedCoupon.description})</span>
                      </div>
                      <button
                        onClick={removeCoupon}
                        className="text-xs text-red-600 hover:underline font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="Promo Code (e.g. ROYAL10)"
                        className="flex-1 text-xs px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#CDA45A] uppercase"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#1E1A18] text-[#FCFAF7] text-xs font-semibold rounded-lg hover:bg-[#CDA45A] transition-colors"
                      >
                        Apply
                      </button>
                    </form>
                  )}
                  {couponFeedback.message && (
                    <p className={`text-[11px] ${couponFeedback.success ? 'text-green-700' : 'text-red-600'}`}>
                      {couponFeedback.message}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#CDA45A]/20 bg-[#F7F0E7] space-y-4">
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1E1A18]">{formatPrice(subtotalUSD, currency)}</span>
                </div>
                {appliedCoupon && discountAmountUSD > 0 && (
                  <div className="flex justify-between text-green-700 font-medium">
                    <span>Promo Discount ({appliedCoupon.discountPercentage}%)</span>
                    <span>-{formatPrice(discountAmountUSD, currency)}</span>
                  </div>
                )}
                {giftWrap && (
                  <div className="flex justify-between text-[#CDA45A] font-medium">
                    <span>Royal Gift Wrap</span>
                    <span>+{formatPrice(5, currency)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-500 text-[11px]">
                  <span>Worldwide Air Courier</span>
                  <span className="text-green-700 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-300 font-serif-luxury text-lg font-bold text-[#1E1A18]">
                  <span>Estimated Total</span>
                  <span>{formatPrice(finalTotalUSD, currency)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  href="/checkout"
                  onClick={() => setCartDrawerOpen(false)}
                  className="btn-gold w-full py-3 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  Proceed to Royal Checkout <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setCartDrawerOpen(false)}
                  className="block text-center text-xs font-semibold text-gray-600 hover:text-[#1E1A18] py-1"
                >
                  View Full Cart & Details
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#CDA45A]" />
                <span>Encrypted 256-Bit SSL Global Checkout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
