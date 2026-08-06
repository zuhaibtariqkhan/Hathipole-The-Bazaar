'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store/useStore';
import { mockProducts } from '@/lib/data/mockProducts';
import { formatPrice } from '@/lib/data/currencies';
import {
  Search,
  X,
  Sparkles,
  Mic,
  ArrowRight,
  TrendingUp,
  History
} from 'lucide-react';

const popularKeywords = [
  'Kashmiri Silk Rug',
  '24K Pichwai Painting',
  'Pure Cashmere Pashmina',
  'Jaipur Kundan Jewellery',
  'Natural Oud Attar',
  'Marble Inlay Bowl',
  'Bandhani Saree'
];

export default function SearchModal() {
  const { searchModalOpen, setSearchModalOpen, currency, setQuickViewProduct } = useStore();
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (searchModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [searchModalOpen]);

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return mockProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.craftRegion.toLowerCase().includes(q) ||
        p.craftType.toLowerCase().includes(q) ||
        p.materials.some((m) => m.toLowerCase().includes(q))
    );
  }, [query]);

  if (!searchModalOpen) return null;

  const handleVoiceSearch = () => {
    setIsListening(true);
    // Simulate voice speech-to-text input
    setTimeout(() => {
      setQuery('Kashmiri Silk Rug');
      setIsListening(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
      {/* Backdrop */}
      <div
        onClick={() => setSearchModalOpen(false)}
        className="fixed inset-0 bg-[#1E1A18]/80 backdrop-blur-md transition-opacity"
      />

      <div className="relative max-w-3xl mx-auto bg-[#FCFAF7] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden z-10 animate-fadeIn">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#D4AF37]/20 bg-[#F7F0E7] flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="AI Search: Ask for silk rugs, Pichwai paintings, pure attars..."
            autoFocus
            className="flex-1 bg-transparent text-base font-serif-luxury text-[#1E1A18] placeholder-gray-500 focus:outline-none"
          />

          <button
            onClick={handleVoiceSearch}
            className={`p-2 rounded-full transition-colors ${
              isListening ? 'bg-red-500 text-white animate-pulse' : 'text-gray-400 hover:text-[#D4AF37]'
            }`}
            title="Voice Search"
          >
            <Mic className="w-5 h-5" />
          </button>

          <button
            onClick={() => setSearchModalOpen(false)}
            className="p-2 text-gray-400 hover:text-[#1E1A18] rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {/* AI Helper Tip */}
          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-3.5 flex items-center justify-between text-xs text-[#3D3A36]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>
                <strong>AI Discovery Engine:</strong> Try natural prompts like &ldquo;Authentic Udaipur gifts for living room&rdquo;
              </span>
            </div>
          </div>

          {/* If Search Query Entered */}
          {query.trim() ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif-luxury text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Matching Royal Creations ({filteredProducts.length})
                </h4>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-10 text-gray-500 text-xs">
                  No handcrafted creations found matching &ldquo;{query}&rdquo;. Try keywords like Pashmina, Rugs, Attar or Silver.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-3 p-3 bg-white border border-[#D4AF37]/20 rounded-xl hover:border-[#D4AF37] transition-all group cursor-pointer"
                      onClick={() => {
                        setSearchModalOpen(false);
                        setQuickViewProduct(product);
                      }}
                    >
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-16 h-20 object-cover rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] text-[#B56A45] font-semibold uppercase">
                            {product.craftRegion}
                          </span>
                          <h5 className="font-serif-luxury text-xs font-bold text-[#1E1A18] line-clamp-1 group-hover:text-[#D4AF37] transition-colors">
                            {product.title}
                          </h5>
                          <span className="text-[10px] text-gray-500 block truncate">{product.categoryName}</span>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span className="font-serif-luxury text-xs font-bold text-[#1E1A18]">
                            {formatPrice(product.priceUSD, currency)}
                          </span>
                          <span className="text-[10px] text-[#D4AF37] group-hover:underline">Quick View →</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Popular & Recent Searches */
            <div className="space-y-6">
              <div>
                <h4 className="font-serif-luxury text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" /> Popular Heritage Searches
                </h4>
                <div className="flex flex-wrap gap-2">
                  {popularKeywords.map((kw) => (
                    <button
                      key={kw}
                      onClick={() => setQuery(kw)}
                      className="text-xs bg-white border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:bg-[#F7F0E7] text-[#1E1A18] px-3 py-1.5 rounded-full transition-all"
                    >
                      {kw}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif-luxury text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <History className="w-3.5 h-3.5 text-[#D4AF37]" /> Featured Collections
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <Link
                    href="/shop?category=rugs"
                    onClick={() => setSearchModalOpen(false)}
                    className="p-3 bg-white border border-[#D4AF37]/20 rounded-xl text-center hover:border-[#D4AF37] transition-all"
                  >
                    <span className="block font-serif-luxury text-sm font-bold text-[#1E1A18]">Silk Rugs</span>
                    <span className="text-[10px] text-gray-500">Srinagar, Kashmir</span>
                  </Link>
                  <Link
                    href="/shop?category=paintings"
                    onClick={() => setSearchModalOpen(false)}
                    className="p-3 bg-white border border-[#D4AF37]/20 rounded-xl text-center hover:border-[#D4AF37] transition-all"
                  >
                    <span className="block font-serif-luxury text-sm font-bold text-[#1E1A18]">24K Pichwai</span>
                    <span className="text-[10px] text-gray-500">Udaipur, Rajasthan</span>
                  </Link>
                  <Link
                    href="/shop?category=pashminas"
                    onClick={() => setSearchModalOpen(false)}
                    className="p-3 bg-white border border-[#D4AF37]/20 rounded-xl text-center hover:border-[#D4AF37] transition-all"
                  >
                    <span className="block font-serif-luxury text-sm font-bold text-[#1E1A18]">Pure Cashmere</span>
                    <span className="text-[10px] text-gray-500">Ladakh & Kashmir</span>
                  </Link>
                  <Link
                    href="/shop?category=attar"
                    onClick={() => setSearchModalOpen(false)}
                    className="p-3 bg-white border border-[#D4AF37]/20 rounded-xl text-center hover:border-[#D4AF37] transition-all"
                  >
                    <span className="block font-serif-luxury text-sm font-bold text-[#1E1A18]">Amber Oud</span>
                    <span className="text-[10px] text-gray-500">Varanasi, UP</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
