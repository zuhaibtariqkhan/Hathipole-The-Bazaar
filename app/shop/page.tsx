'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/product/ProductCard';
import ShopMobileProductCard from '@/components/product/ShopMobileProductCard';
import { mockProducts } from '@/lib/data/mockProducts';
import { CategorySlug, CraftRegion } from '@/lib/types';
import {
  SlidersHorizontal,
  Grid,
  List,
  ChevronDown,
  RotateCcw,
  Sparkles,
  Search
} from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [maxPrice, setMaxPrice] = useState<number>(4000);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (p.priceUSD > maxPrice) return false;
      if (inStockOnly && !p.inStock) return false;
      if (
        searchQuery &&
        !p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.craftType.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.priceUSD - b.priceUSD;
      if (sortBy === 'price-high') return b.priceUSD - a.priceUSD;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, maxPrice, searchQuery, sortBy, inStockOnly]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setMaxPrice(4000);
    setSearchQuery('');
    setSortBy('featured');
    setInStockOnly(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8">
      {/* Page Title */}
      <div className="border-b border-[#CDA45A]/20 pb-6 space-y-2">
        <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block font-semibold">
          Curated Excellence
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1A18]">
          Discover India&apos;s Finest Handmade Collections
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 max-w-3xl font-light leading-relaxed">
          Browse our complete collection of authentic handcrafted masterpieces, from luxurious rugs and Himalayan Pashmina to royal paintings, heritage textiles, handcrafted jewellery, fragrances, and bespoke creations. Every piece is curated for exceptional quality, authenticity, and timeless beauty.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-2xl p-6 h-fit space-y-6 shadow-luxury">
          <div className="flex items-center justify-between border-b border-[#CDA45A]/20 pb-3">
            <h3 className="font-serif-luxury text-lg font-bold text-[#1E1A18] flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#CDA45A]" /> Filters
            </h3>
            <button
              onClick={resetFilters}
              className="text-xs text-[#CDA45A] hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>

          {/* Search Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">Keyword Search</label>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by keyword..."
                className="w-full text-xs pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full text-xs p-2.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
            >
              <option value="all">All 14 Categories</option>
              <option value="rugs">Fine Silk Rugs</option>
              <option value="pashminas">Pure Cashmere Pashmina</option>
              <option value="paintings">Miniature & Pichwai Art</option>
              <option value="handicrafts">Marble & Wood Handicrafts</option>
              <option value="jewellery">Royal Silver Kundan</option>
              <option value="attar">Attar & Perfumes</option>
              <option value="textile">Home Textiles</option>
              <option value="bandhani">Bandhani Sarees</option>
              <option value="bespoke">Bespoke Custom Pieces</option>
              <option value="spices">Mongra Saffron & Spices</option>
              <option value="bags-diaries">Leather Bags & Diaries</option>
              <option value="wedding-hampers">Wedding Hampers</option>
              <option value="return-gifts">Return Gifts & Favors</option>
              <option value="designer-apparels">Designer Apparels</option>
            </select>
          </div>

          {/* Price Range Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="uppercase tracking-wider text-gray-700">Max Price</span>
              <span className="text-[#CDA45A] font-serif-luxury font-bold">${maxPrice} USD</span>
            </div>
            <input
              type="range"
              min={100}
              max={4000}
              step={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#CDA45A] cursor-pointer"
            />
          </div>

          {/* In Stock Checkbox */}
          <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="w-4 h-4 accent-[#CDA45A] rounded"
            />
            <span>Show Ready-to-Ship Items Only</span>
          </label>
        </aside>

        {/* Main Product Grid View */}
        <main className="lg:col-span-3 space-y-6">
          {/* Controls Bar */}
          <div className="bg-[#FCFAF7] border border-[#CDA45A]/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <span className="text-xs text-gray-600 font-medium">
              Showing <strong className="text-[#1E1A18] font-bold">{filteredProducts.length}</strong> authentic handcrafted creations
            </span>

            <div className="flex items-center gap-4">
              {/* Sorting */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-medium">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="text-xs p-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#CDA45A]"
                >
                  <option value="featured">Featured Royal</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">New Arrivals</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center border border-gray-300 rounded-xl p-1 bg-white">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-[#CDA45A] text-white' : 'text-gray-500 hover:text-[#1E1A18]'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-[#CDA45A] text-white' : 'text-gray-500 hover:text-[#1E1A18]'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid / List */}
          {filteredProducts.length === 0 ? (
            <div className="bg-[#FCFAF7] border border-[#CDA45A]/20 rounded-2xl p-12 text-center space-y-3">
              <Sparkles className="w-10 h-10 text-[#CDA45A] mx-auto" />
              <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18]">
                No creations match your active filters
              </h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Try widening your price range or clearing category filters to explore the royal catalog.
              </p>
              <button
                onClick={resetFilters}
                className="btn-gold px-6 py-2.5 text-xs uppercase tracking-wider inline-block mt-2"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              {/* Mobile View: Compact 3-Column Product Grid */}
              <div className="grid grid-cols-3 gap-2 sm:hidden">
                {filteredProducts.map((product) => (
                  <ShopMobileProductCard key={`mob-shop-${product.id}`} product={product} />
                ))}
              </div>

              {/* Desktop and Tablet View (Unchanged) */}
              <div className={`hidden sm:grid ${viewMode === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center font-serif-luxury text-lg">Loading Royal Catalog...</div>}>
      <ShopContent />
    </Suspense>
  );
}
