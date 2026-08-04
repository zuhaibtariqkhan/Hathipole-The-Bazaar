'use client';

import { use } from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store/useStore';
import { formatPrice } from '@/lib/data/currencies';
import {
  CheckCircle2,
  PackageCheck,
  Truck,
  ShieldCheck,
  Printer,
  ArrowRight,
  Gift
} from 'lucide-react';

export default function OrderConfirmationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { orders, currency } = useStore();

  const order = orders.find((o) => o.id === id) || orders[0];

  const steps = [
    { label: 'Order Placed', done: true },
    { label: 'Artisan Crafted', done: order?.status !== 'Processing' },
    { label: 'Quality Checked', done: order?.status === 'Shipped' || order?.status === 'Out for Delivery' || order?.status === 'Delivered' },
    { label: 'Shipped (FedEx/DHL)', done: order?.status === 'Shipped' || order?.status === 'Delivered' },
    { label: 'Delivered', done: order?.status === 'Delivered' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 space-y-10">
      {/* Banner */}
      <div className="bg-[#FCFAF7] border border-[#CDA45A]/40 rounded-3xl p-8 text-center space-y-4 shadow-luxury animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#CDA45A]/20 text-[#CDA45A] flex items-center justify-center mx-auto border border-[#CDA45A]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block">
          Order Confirmed & Certified
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1E1A18]">
          Thank You For Preserving Indian Heritage Art!
        </h1>
        <p className="text-xs text-gray-600 max-w-lg mx-auto leading-relaxed">
          Your order <strong>#{order?.id}</strong> has been logged into our royal master artisan system. An email receipt and certificate of authenticity have been sent to your inbox.
        </p>

        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 bg-white border border-[#CDA45A]/40 text-[#1E1A18] text-xs font-semibold rounded-xl flex items-center gap-2 hover:bg-[#F7F0E7]"
          >
            <Printer className="w-4 h-4 text-[#CDA45A]" /> Print Order Receipt
          </button>
        </div>
      </div>

      {/* Live Order Status Tracker */}
      <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-3xl p-8 space-y-6 shadow-sm">
        <div className="flex justify-between items-center border-b border-[#CDA45A]/20 pb-4">
          <div>
            <h3 className="font-serif-luxury text-lg font-bold text-[#1E1A18]">
              Real-Time Courier Tracking Status
            </h3>
            <span className="text-xs text-gray-500">Tracking Number: <strong>{order?.trackingNumber}</strong> ({order?.courier})</span>
          </div>
          <span className="bg-[#CDA45A]/20 text-[#1E1A18] text-xs font-bold px-3 py-1 rounded-full border border-[#CDA45A]/40">
            {order?.status || 'Processing'}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-2">
          {steps.map((st, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  st.done
                    ? 'bg-[#CDA45A] text-white shadow-md'
                    : 'bg-gray-200 text-gray-500 border border-gray-300'
                }`}
              >
                {idx + 1}
              </div>
              <span className={`text-[11px] font-semibold ${st.done ? 'text-[#1E1A18]' : 'text-gray-400'}`}>
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Order Items & Shipping Address Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shipping Address */}
        <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-2xl p-6 space-y-3">
          <h4 className="font-serif-luxury text-base font-bold text-[#1E1A18] flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#CDA45A]" /> Shipping Address
          </h4>
          <div className="text-xs text-gray-600 space-y-1">
            <p className="font-semibold text-[#1E1A18]">{order?.shippingAddress.fullName}</p>
            <p>{order?.shippingAddress.street}</p>
            <p>{order?.shippingAddress.city}, {order?.shippingAddress.state} {order?.shippingAddress.zipCode}</p>
            <p className="font-medium text-[#CDA45A]">{order?.shippingAddress.country}</p>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-2xl p-6 space-y-3">
          <h4 className="font-serif-luxury text-base font-bold text-[#1E1A18] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#CDA45A]" /> Payment Method
          </h4>
          <div className="text-xs text-gray-600 space-y-1">
            <p className="font-semibold text-[#1E1A18]">{order?.paymentMethod}</p>
            <p>Total Paid: <strong className="font-serif-luxury text-sm text-[#1E1A18]">{formatPrice(order?.totalUSD || 0, currency)}</strong></p>
            <p className="text-green-700 font-semibold pt-1">✓ Verified & Authenticated</p>
          </div>
        </div>
      </div>

      {/* Return to Shop */}
      <div className="text-center pt-4">
        <Link
          href="/shop"
          className="btn-gold px-8 py-3.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
        >
          Continue Exploring Royal Catalog <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
