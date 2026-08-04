'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store/useStore';
import { formatPrice } from '@/lib/data/currencies';
import {
  ShieldCheck,
  CreditCard,
  Truck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Gift
} from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, currency, appliedCoupon, giftWrap, createOrder, user } = useStore();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Address form
  const [fullName, setFullName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [street, setStreet] = useState(user?.savedAddresses[0]?.street || '');
  const [city, setCity] = useState(user?.savedAddresses[0]?.city || 'Udaipur');
  const [state, setState] = useState(user?.savedAddresses[0]?.state || 'Rajasthan');
  const [country, setCountry] = useState(user?.savedAddresses[0]?.country || 'India');
  const [zipCode, setZipCode] = useState(user?.savedAddresses[0]?.zipCode || '313001');

  // Shipping choice
  const [courier, setCourier] = useState<'FedEx Express' | 'DHL Worldwide' | 'India Post'>('FedEx Express');

  // Payment choice
  const [paymentMethod, setPaymentMethod] = useState<string>('Stripe (Credit / Debit Card)');

  const subtotalUSD = cart.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);
  const discountAmountUSD = appliedCoupon ? (subtotalUSD * appliedCoupon.discountPercentage) / 100 : 0;
  const giftWrapFeeUSD = giftWrap ? 5 : 0;
  const finalTotalUSD = subtotalUSD - discountAmountUSD + giftWrapFeeUSD;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder = createOrder(
      { fullName, street, city, state, country, zipCode },
      paymentMethod,
      courier
    );
    router.push(`/order-confirmation/${newOrder.id}`);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-6 py-20 text-center space-y-4">
        <h2 className="font-serif-luxury text-2xl font-bold text-[#1E1A18]">
          Your bag is empty
        </h2>
        <p className="text-xs text-gray-500">Please add items to your cart before proceeding to checkout.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 space-y-8">
      {/* Checkout Header */}
      <div className="border-b border-[#CDA45A]/20 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="font-cinzel text-xs tracking-[0.2em] text-[#CDA45A] uppercase block">
            Express Royal Checkout
          </span>
          <h1 className="font-serif-luxury text-3xl font-bold text-[#1E1A18]">
            Secure Order Finalization
          </h1>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className={`px-3 py-1 rounded-full ${step === 1 ? 'bg-[#CDA45A] text-white' : 'bg-gray-200 text-gray-600'}`}>
            1. Shipping Address
          </span>
          <span>→</span>
          <span className={`px-3 py-1 rounded-full ${step === 2 ? 'bg-[#CDA45A] text-white' : 'bg-gray-200 text-gray-600'}`}>
            2. Courier & Payment
          </span>
          <span>→</span>
          <span className={`px-3 py-1 rounded-full ${step === 3 ? 'bg-[#CDA45A] text-white' : 'bg-gray-200 text-gray-600'}`}>
            3. Review & Place
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Step Form Column */}
        <div className="lg:col-span-7 bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-luxury">
          {/* STEP 1: Address */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/20 pb-3">
                <Truck className="w-5 h-5 text-[#CDA45A]" /> Shipping & Contact Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Street Address *</label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="House/Apt No., Street Name..."
                  required
                  className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">City *</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">State / Region *</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Zip / Postal Code *</label>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    required
                    className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Country *</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
                >
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Japan">Japan</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-gold w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-4"
              >
                Continue to Courier & Payment <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Courier & Payment */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/20 pb-3">
                <CreditCard className="w-5 h-5 text-[#CDA45A]" /> Courier & Payment Gateway
              </h3>

              {/* Courier Choice */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-700 block">Select Preferred Courier</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'FedEx Express', time: '3-5 Days', tag: 'Fastest Global' },
                    { name: 'DHL Worldwide', time: '4-6 Days', tag: 'Insured Door-to-Door' },
                    { name: 'India Post', time: '7-10 Days', tag: 'Standard' }
                  ].map((c) => (
                    <div
                      key={c.name}
                      onClick={() => setCourier(c.name as any)}
                      className={`p-3.5 border rounded-xl cursor-pointer transition-all ${
                        courier === c.name ? 'border-[#CDA45A] bg-[#CDA45A]/10' : 'border-gray-200 bg-white'
                      }`}
                    >
                      <span className="font-bold text-xs text-[#1E1A18] block">{c.name}</span>
                      <span className="text-[10px] text-gray-500 block">{c.time} • {c.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Gateways */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-700 block">Select Payment Method</label>
                <div className="space-y-2">
                  {[
                    'Stripe (Credit / Debit Cards - Visa, Mastercard, AMEX)',
                    'PayPal Express Checkout',
                    'Razorpay (Cards, UPI, Net Banking, Wallets)',
                    'UPI Instant QR Simulation (GPay / PhonePe / Paytm)'
                  ].map((pm) => (
                    <label
                      key={pm}
                      className={`flex items-center gap-3 p-3.5 border rounded-xl cursor-pointer transition-all ${
                        paymentMethod === pm ? 'border-[#CDA45A] bg-[#CDA45A]/10 font-semibold' : 'border-gray-200 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === pm}
                        onChange={() => setPaymentMethod(pm)}
                        className="accent-[#CDA45A]"
                      />
                      <span className="text-xs text-[#1E1A18]">{pm}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3.5 border border-gray-300 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn-gold flex-1 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  Review Order <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Review & Place */}
          {step === 3 && (
            <form onSubmit={handleSubmitOrder} className="space-y-6 animate-fadeIn">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18] flex items-center gap-2 border-b border-[#CDA45A]/20 pb-3">
                <CheckCircle2 className="w-5 h-5 text-[#CDA45A]" /> Final Review & Confirmation
              </h3>

              <div className="bg-[#F7F0E7] border border-[#CDA45A]/20 rounded-2xl p-4 space-y-2 text-xs">
                <div className="flex justify-between font-semibold">
                  <span>Shipping To:</span>
                  <span className="text-[#1E1A18]">{fullName}, {street}, {city}, {country}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Courier:</span>
                  <span className="text-[#CDA45A]">{courier}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Payment Gateway:</span>
                  <span className="text-[#1E1A18]">{paymentMethod}</span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 block">
                  Items in Bag ({cart.length})
                </span>
                {cart.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between items-center text-xs p-2 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <img src={product.images[0]} alt={product.title} className="w-10 h-12 object-cover rounded" />
                      <span className="font-bold text-[#1E1A18] line-clamp-1">{product.title} (x{quantity})</span>
                    </div>
                    <span className="font-serif-luxury font-bold">{formatPrice(product.priceUSD * quantity, currency)}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-4 border border-gray-300 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-gold flex-1 py-4 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl"
                >
                  <Lock className="w-4 h-4" /> Place Royal Order ({formatPrice(finalTotalUSD, currency)})
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-5 bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-3xl p-6 space-y-4 shadow-luxury sticky top-28">
          <h4 className="font-serif-luxury text-lg font-bold text-[#1E1A18] border-b border-[#CDA45A]/20 pb-3">
            Summary ({cart.reduce((a, b) => a + b.quantity, 0)} Items)
          </h4>

          <div className="space-y-3 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-[#1E1A18]">{formatPrice(subtotalUSD, currency)}</span>
            </div>
            {appliedCoupon && (
              <div className="flex justify-between text-green-700 font-semibold">
                <span>Discount ({appliedCoupon.code})</span>
                <span>-{formatPrice(discountAmountUSD, currency)}</span>
              </div>
            )}
            {giftWrap && (
              <div className="flex justify-between text-[#CDA45A] font-semibold">
                <span>Royal Gift Wrap</span>
                <span>+{formatPrice(5, currency)}</span>
              </div>
            )}
            <div className="flex justify-between border-t border-[#CDA45A]/20 pt-3 font-serif-luxury text-xl font-bold text-[#1E1A18]">
              <span>Grand Total</span>
              <span>{formatPrice(finalTotalUSD, currency)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
