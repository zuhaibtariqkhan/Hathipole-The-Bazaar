'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useStore } from '@/lib/store/useStore';
import { mockProducts } from '@/lib/data/mockProducts';
import { formatPrice } from '@/lib/data/currencies';
import ProductCard from '@/components/product/ProductCard';
import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  Award,
  HelpCircle,
  LogOut,
  Truck,
  Plus,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

function AccountContent() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get('tab') as any) || 'orders';

  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'addresses' | 'rewards' | 'tickets'>(initialTab);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMsg, setTicketMsg] = useState('');

  const { user, loginMock, logoutMock, orders, wishlistIds, currency, showToast } = useStore();

  const wishlistedProducts = mockProducts.filter((p) => wishlistIds.includes(p.id));

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-6 py-20">
        <div className="bg-[#FCFAF7] border border-[#D4AF37]/30 rounded-3xl p-8 space-y-6 shadow-luxury">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mx-auto">
              <User className="w-7 h-7" />
            </div>
            <h2 className="font-serif-luxury text-2xl font-bold text-[#1E1A18]">
              Royal Account Sign In
            </h2>
            <p className="text-xs text-gray-500">Access order history, wishlist, and Royal Crafts Club reward points.</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginMock('gayatrisingh@udaipurpalace.org', 'Princess Gayatri Singh');
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1">Email Address</label>
              <input
                type="email"
                defaultValue="gayatrisingh@udaipurpalace.org"
                required
                className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1">Password</label>
              <input
                type="password"
                defaultValue="••••••••"
                required
                className="w-full text-xs p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <button
              type="submit"
              className="btn-gold w-full py-3.5 text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              Sign In to Account
            </button>

            <div className="relative text-center my-4">
              <span className="bg-[#FCFAF7] px-3 text-[10px] text-gray-400 uppercase font-semibold">Or Express Sign In</span>
            </div>

            <button
              type="button"
              onClick={() => loginMock('guest@hathipole.com', 'Royal Connoisseur')}
              className="w-full py-3 text-xs font-semibold border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100"
            >
              Sign In as Guest Connoisseur
            </button>
          </form>
        </div>
      </div>
    );
  }

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject) return;
    showToast('Support Ticket submitted! Client concierge will respond within 2 hours.');
    setTicketSubject('');
    setTicketMsg('');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 space-y-8">
      {/* Header Profile Bar */}
      <div className="bg-[#FCFAF7] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-16 h-16 rounded-full bg-[#1E1A18] text-[#E6D2A8] font-serif-luxury text-2xl font-bold flex items-center justify-center border-2 border-[#D4AF37]">
            {user.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1E1A18]">
                {user.name}
              </h1>
              <span className="bg-[#D4AF37]/20 text-[#1E1A18] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#D4AF37]/50">
                {user.tier}
              </span>
            </div>
            <p className="text-xs text-gray-500">{user.email} • Member since 2026</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="bg-[#F7F0E7] border border-[#D4AF37]/20 px-4 py-2 rounded-xl text-center">
            <span className="font-serif-luxury text-xl font-bold text-[#1E1A18] block">{user.rewardPoints}</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider">Royal Points</span>
          </div>

          <button
            onClick={logoutMock}
            className="p-3 border border-gray-300 rounded-xl text-gray-600 hover:text-red-600 hover:border-red-300 transition-colors"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-3 bg-[#FCFAF7] border border-[#D4AF37]/30 rounded-2xl p-4 shadow-sm space-y-1">
          {[
            { id: 'orders', label: 'My Royal Orders', icon: ShoppingBag, count: orders.length },
            { id: 'wishlist', label: 'Saved Wishlist', icon: Heart, count: wishlistIds.length },
            { id: 'addresses', label: 'Saved Addresses', icon: MapPin, count: user.savedAddresses.length },
            { id: 'rewards', label: 'Royal Crafts Club', icon: Award },
            { id: 'tickets', label: 'Client Concierge', icon: HelpCircle }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#1E1A18] text-[#E6D2A8] shadow'
                    : 'text-gray-700 hover:bg-[#F7F0E7]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-[#D4AF37]' : 'text-gray-500'}`} />
                  <span>{tab.label}</span>
                </div>
                {tab.count !== undefined && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeTab === tab.id ? 'bg-[#D4AF37] text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Tab Content */}
        <main className="lg:col-span-9 bg-[#FCFAF7] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 shadow-luxury">
          {/* TAB 1: Orders */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18] border-b border-[#D4AF37]/20 pb-3">
                Order History & Live Courier Tracking
              </h3>

              {orders.length === 0 ? (
                <p className="text-xs text-gray-500 py-8 text-center">No previous orders found.</p>
              ) : (
                <div className="space-y-4">
                  {orders.map((ord) => (
                    <div key={ord.id} className="border border-[#D4AF37]/30 rounded-2xl p-5 space-y-4 bg-white">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-100 pb-3">
                        <div>
                          <span className="font-serif-luxury text-base font-bold text-[#1E1A18]">Order #{ord.id}</span>
                          <span className="text-xs text-gray-400 block">Placed on {ord.createdAt}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-[#D4AF37]/20 text-[#1E1A18] text-xs font-bold px-3 py-1 rounded-full border border-[#D4AF37]/40">
                            {ord.status}
                          </span>
                          <Link
                            href={`/order-confirmation/${ord.id}`}
                            className="text-xs text-[#D4AF37] font-semibold hover:underline"
                          >
                            View Receipt →
                          </Link>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {ord.items.map(({ product, quantity }) => (
                          <div key={product.id} className="flex items-center gap-4 text-xs">
                            <img src={product.images[0]} alt={product.title} className="w-12 h-14 object-cover rounded-lg" />
                            <div className="flex-1">
                              <h5 className="font-serif-luxury font-bold text-[#1E1A18]">{product.title}</h5>
                              <span className="text-gray-500">Qty: {quantity} • {product.craftRegion}</span>
                            </div>
                            <span className="font-serif-luxury font-bold text-[#1E1A18]">
                              {formatPrice(product.priceUSD * quantity, currency)}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-xs text-gray-500 pt-2 border-t border-gray-100">
                        <span>Courier: <strong>{ord.courier}</strong> ({ord.trackingNumber})</span>
                        <span className="font-serif-luxury font-bold text-[#1E1A18] text-base">
                          Total: {formatPrice(ord.totalUSD, currency)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Wishlist */}
          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18] border-b border-[#D4AF37]/20 pb-3">
                Saved Heritage Wishlist ({wishlistedProducts.length})
              </h3>

              {wishlistedProducts.length === 0 ? (
                <p className="text-xs text-gray-500 py-8 text-center">Your wishlist is empty.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Saved Addresses */}
          {activeTab === 'addresses' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-[#D4AF37]/20 pb-3">
                <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18]">Saved Shipping Addresses</h3>
                <button className="btn-gold px-4 py-2 text-xs font-bold flex items-center gap-1">
                  <Plus className="w-3.5 h-3.5" /> Add New Address
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {user.savedAddresses.map((addr) => (
                  <div key={addr.id} className="border border-[#D4AF37]/30 rounded-2xl p-5 bg-white space-y-2 relative">
                    {addr.isDefault && (
                      <span className="bg-[#D4AF37] text-white text-[10px] font-bold px-2 py-0.5 rounded-full absolute top-4 right-4">
                        Default
                      </span>
                    )}
                    <h5 className="font-serif-luxury font-bold text-sm text-[#1E1A18]">{addr.title}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {addr.fullName}<br />
                      {addr.street}<br />
                      {addr.city}, {addr.state} {addr.zipCode}<br />
                      <strong>{addr.country}</strong>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Royal Crafts Club Rewards */}
          {activeTab === 'rewards' && (
            <div className="space-y-6">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18] border-b border-[#D4AF37]/20 pb-3">
                Royal Crafts Club Loyalty Tier
              </h3>

              <div className="bg-[#1E1A18] text-[#FCFAF7] border border-[#D4AF37] rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider">Current Membership Tier</span>
                    <h4 className="font-serif-luxury text-2xl font-bold text-[#E6D2A8]">{user.tier}</h4>
                  </div>
                  <div className="text-right">
                    <span className="font-serif-luxury text-3xl font-bold text-[#E6D2A8]">{user.rewardPoints}</span>
                    <span className="text-[10px] text-gray-400 block uppercase">Accumulated Points</span>
                  </div>
                </div>

                <p className="text-xs text-gray-300">
                  Earn 1 Royal Point for every $1 spent. Redeem points for VIP bespoke discounts and complimentary attars.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: Support Tickets */}
          {activeTab === 'tickets' && (
            <div className="space-y-6">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18] border-b border-[#D4AF37]/20 pb-3">
                Client Concierge Support Tickets
              </h3>

              <form onSubmit={handleCreateTicket} className="space-y-4 bg-white border border-[#D4AF37]/20 p-5 rounded-2xl">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Inquiry Subject</label>
                  <input
                    type="text"
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    placeholder="e.g. Custom size request for Kashmiri Rug"
                    required
                    className="w-full text-xs p-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Details / Message</label>
                  <textarea
                    value={ticketMsg}
                    onChange={(e) => setTicketMsg(e.target.value)}
                    rows={4}
                    placeholder="Provide details for our Udaipur concierge team..."
                    required
                    className="w-full text-xs p-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold px-6 py-3 text-xs uppercase font-bold tracking-wider"
                >
                  Submit Inquiry Ticket
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center font-serif-luxury text-lg">Loading Royal Account...</div>}>
      <AccountContent />
    </Suspense>
  );
}
