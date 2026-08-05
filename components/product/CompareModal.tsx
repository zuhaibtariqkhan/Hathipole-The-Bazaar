'use client';

import { useEffect } from 'react';
import { useStore } from '@/lib/store/useStore';
import { mockProducts } from '@/lib/data/mockProducts';
import { formatPrice } from '@/lib/data/currencies';
import { X, Trash2, ShoppingBag, SlidersHorizontal, CheckCircle } from 'lucide-react';

export default function CompareModal() {
  const {
    compareModalOpen,
    setCompareModalOpen,
    compareIds,
    toggleCompare,
    clearCompare,
    currency,
    addToCart
  } = useStore();

  useEffect(() => {
    if (compareModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [compareModalOpen]);

  if (!compareModalOpen) return null;

  const comparedProducts = mockProducts.filter((p) => compareIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div
        onClick={() => setCompareModalOpen(false)}
        className="fixed inset-0 bg-[#1E1A18]/80 backdrop-blur-md transition-opacity"
      />

      <div className="relative max-w-5xl mx-auto bg-[#FCFAF7] border border-[#CDA45A]/40 rounded-2xl shadow-2xl overflow-hidden z-10 animate-fadeIn my-auto">
        {/* Header */}
        <div className="p-6 border-b border-[#CDA45A]/20 bg-[#F7F0E7] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-[#CDA45A]" />
            <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18]">
              Handcrafted Product Comparison ({comparedProducts.length} items)
            </h3>
          </div>
          <div className="flex items-center gap-4">
            {comparedProducts.length > 0 && (
              <button
                onClick={clearCompare}
                className="text-xs text-red-600 hover:underline flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear All
              </button>
            )}
            <button
              onClick={() => setCompareModalOpen(false)}
              className="p-2 text-gray-400 hover:text-[#1E1A18] rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Table */}
        <div className="p-6 overflow-x-auto max-h-[75vh]">
          {comparedProducts.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <SlidersHorizontal className="w-12 h-12 text-gray-300 mx-auto" />
              <p className="text-sm text-gray-500">
                No items selected for comparison. Click the slider icon on product cards to compare specifications.
              </p>
            </div>
          ) : (
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr>
                  <th className="p-3 bg-[#F7F0E7] border border-[#CDA45A]/20 w-44 font-serif-luxury text-sm text-[#1E1A18]">
                    Specification
                  </th>
                  {comparedProducts.map((p) => (
                    <th
                      key={p.id}
                      className="p-3 bg-white border border-[#CDA45A]/20 min-w-[200px] text-center"
                    >
                      <div className="relative group space-y-2">
                        <button
                          onClick={() => toggleCompare(p.id)}
                          className="absolute -top-2 -right-2 text-gray-400 hover:text-red-500 p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <img
                          src={p.images[0]}
                          alt={p.title}
                          className="w-24 h-28 object-cover rounded-lg mx-auto"
                        />
                        <h5 className="font-serif-luxury text-sm font-bold text-[#1E1A18] line-clamp-1">
                          {p.title}
                        </h5>
                        <span className="font-serif-luxury text-sm font-bold text-[#CDA45A] block">
                          {formatPrice(p.priceUSD, currency)}
                        </span>
                        <button
                          onClick={() => addToCart(p, 1)}
                          className="btn-gold w-full py-1.5 text-[10px] uppercase font-bold flex items-center justify-center gap-1"
                        >
                          <ShoppingBag className="w-3 h-3" /> Add to Bag
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#CDA45A]/20">
                <tr>
                  <td className="p-3 bg-[#F7F0E7] font-semibold text-[#1E1A18]">Craft Region</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center text-[#B56A45] font-semibold">
                      {p.craftRegion}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F7F0E7] font-semibold text-[#1E1A18]">Technique</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center">{p.craftType}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F7F0E7] font-semibold text-[#1E1A18]">Materials</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center">{p.materials.join(', ')}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F7F0E7] font-semibold text-[#1E1A18]">Dimensions</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center">{p.dimensions}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F7F0E7] font-semibold text-[#1E1A18]">Weight</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center">{p.weight}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F7F0E7] font-semibold text-[#1E1A18]">Master Artisan</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center font-medium text-[#1E1A18]">
                      {p.artisan.name} ({p.artisan.experienceYears} yrs)
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F7F0E7] font-semibold text-[#1E1A18]">Certificate</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center text-green-700">
                      {p.authenticityCertificate ? '✓ Included' : 'N/A'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
