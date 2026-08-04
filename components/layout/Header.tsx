'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store/useStore';
import { currencyList } from '@/lib/data/currencies';
import { CategorySlug, CurrencyCode } from '@/lib/types';
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Sparkles,
  ChevronDown,
  Globe,
  SlidersHorizontal,
  Menu,
  X,
  Compass
} from 'lucide-react';

const megaMenuCategories: Array<{
  slug: CategorySlug;
  name: string;
  subcategories: string[];
  region: string;
  image: string;
}> = [
  {
    slug: 'rugs',
    name: 'Rugs & Carpets',
    subcategories: ['Persian Style Rugs', 'Fine Silk Rugs', 'Hand Knotted Wool', 'Floor Carpets'],
    region: 'Master Silk Guild',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'pashminas',
    name: 'Pashminas & Scarves',
    subcategories: ['Pure Cashmere Shawls', 'Hand-Embroidered Jamawar', 'Luxury Stoles', 'Silk Scarves'],
    region: 'Heritage Cashmere Guild',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'paintings',
    name: 'Miniature & Pichwai',
    subcategories: ['Original Pichwai Art', '24K Gold Foil Miniatures', 'Traditional Art', 'Wall Decor'],
    region: 'Royal Art Studio',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'handicrafts',
    name: 'Handicrafts & Decor',
    subcategories: ['Makrana Marble Inlay', 'Carved Teakwood', 'Hand-Cast Brass Idols', 'Stone Sculptures'],
    region: 'Imperial Marble Guild',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'jewellery',
    name: 'Royal Jewellery',
    subcategories: ['Fine Kundan Sets', 'Meenakari Enamel', '925 Silver Pieces', 'Gemstone Necklaces'],
    region: 'Royal Goldsmiths',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'attar',
    name: 'Attar & Perfumes',
    subcategories: ['Natural Rose Attar', 'Wild Amber Oud Oil', 'Sandalwood Base', 'Luxury Gift Sets'],
    region: 'Natural Fragrance Distillery',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'textile',
    name: 'Home Textiles',
    subcategories: ['Hand-Block Cushion Covers', 'Table Linen', 'Silk Bedsheets', 'Curtains & Throws'],
    region: 'Fine Textile Guild',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'bandhani',
    name: 'Bandhani Sarees',
    subcategories: ['Gaji Silk Sarees', 'Bandhej Dupattas', 'Dress Materials', 'Royal Fabrics'],
    region: 'Heritage Tie-Dye Guild',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'bespoke',
    name: 'Bespoke Projects',
    subcategories: ['Custom Bone Inlay Furniture', 'Interior Projects', 'Personalized Luxury Gifts'],
    region: 'Bespoke Studio',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'spices',
    name: 'Royal Spices & Saffron',
    subcategories: ['Mongra Saffron', 'Green Cardamom', 'Royal Masala Blends', 'Herbal Teas'],
    region: 'Organic Spice Guild',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'bags-diaries',
    name: 'Leather Bags & Journals',
    subcategories: ['Hand-Tooled Leather Bags', 'Embossed Travel Journals', 'Handmade Cotton Diaries'],
    region: 'Leather Craft Studio',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'wedding-hampers',
    name: 'Wedding Hampers',
    subcategories: ['Royal Trunk Gift Boxes', 'Bridal Keepsakes', 'Customized Hampers'],
    region: 'Royal Gifting Studio',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'return-gifts',
    name: 'Return Gifts & Favors',
    subcategories: ['Brass Elephant Diyas', 'Corporate Keepsakes', 'Festival Favors'],
    region: 'Solid Brass Studio',
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=400&q=80'
  },
  {
    slug: 'designer-apparels',
    name: 'Designer Apparels',
    subcategories: ['Hand-Embroidered Kurtas', 'Royal Wedding Sherwanis', 'Kaftans & Indo-Western'],
    region: 'Royal Fashion Atelier',
    image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf03b0?auto=format&fit=crop&w=400&q=80'
  }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategorySlug | null>(null);

  const {
    cart,
    wishlistIds,
    compareIds,
    currency,
    setCurrency,
    setSearchModalOpen,
    setCartDrawerOpen,
    setCompareModalOpen
  } = useStore();

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 transition-all duration-300">
      {/* Sleek, Compact Header Bar */}
      <div
        className={`transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#F7F0E7]/95 backdrop-blur-md border-[#CDA45A]/30 py-1.5 shadow-md'
            : 'bg-[#F7F0E7] border-[#CDA45A]/20 py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1E1A18] hover:text-[#CDA45A] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Enlarged Royal Logo */}
          <Link href="/" className="flex items-center shrink-0 py-1 group">
            <img
              src="/logo-transp.png"
              alt="Hathipole The Bazaar Royal Logo"
              className={`w-auto object-contain hover:scale-105 transition-all duration-300 filter drop-shadow-md ${
                isScrolled
                  ? 'h-16 sm:h-18 md:h-20 lg:h-24 max-h-24'
                  : 'h-20 sm:h-24 md:h-28 lg:h-32 max-h-36'
              }`}
            />
          </Link>

          {/* Compact AI Search Bar */}
          <div
            onClick={() => setSearchModalOpen(true)}
            className="hidden md:flex items-center gap-2.5 bg-[#FCFAF7] border border-[#CDA45A]/30 hover:border-[#CDA45A] px-3.5 py-1.5 rounded-full cursor-pointer w-60 lg:w-80 transition-all shadow-sm group"
          >
            <Search className="w-3.5 h-3.5 text-[#CDA45A]" />
            <span className="text-xs text-gray-500 flex-1 truncate font-light">
              Search silk rugs, 24K Pichwai art...
            </span>
            <span className="flex items-center gap-1 bg-[#F7F0E7] text-[10px] text-[#CDA45A] font-semibold px-2 py-0.5 rounded-full border border-[#CDA45A]/20 group-hover:bg-[#CDA45A] group-hover:text-white transition-colors">
              <Sparkles className="w-3 h-3 inline" /> AI
            </span>
          </div>

          {/* Action Controls & Currency Selector */}
          <div className="flex items-center gap-3 text-[#1E1A18]">
            {/* Currency Selector Badge */}
            <div className="hidden sm:flex items-center gap-1.5 bg-[#1E1A18] text-[#FCFAF7] px-3 py-1 rounded-full border border-[#CDA45A]/40 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-[#CDA45A]" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                className="bg-transparent text-[#FCFAF7] font-semibold cursor-pointer focus:outline-none text-xs"
              >
                {currencyList.map((c) => (
                  <option key={c.code} value={c.code} className="bg-[#1E1A18] text-[#FCFAF7]">
                    {c.code} ({c.symbol})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setSearchModalOpen(true)}
              className="md:hidden p-1.5 hover:text-[#CDA45A] transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {compareIds.length > 0 && (
              <button
                onClick={() => setCompareModalOpen(true)}
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-[#CDA45A] border border-[#CDA45A]/40 px-2.5 py-1 rounded-full hover:bg-[#CDA45A] hover:text-white transition-all shadow-sm"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Compare ({compareIds.length})
              </button>
            )}

            <Link
              href="/account?tab=wishlist"
              className="relative p-1.5 hover:text-[#CDA45A] transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistIds.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#CDA45A] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                  {wishlistIds.length}
                </span>
              )}
            </Link>

            <Link
              href="/account"
              className="p-1.5 hover:text-[#CDA45A] transition-colors hidden sm:block"
              title="My Account"
            >
              <User className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative flex items-center gap-2 bg-[#1E1A18] text-[#FCFAF7] hover:bg-[#CDA45A] px-3.5 py-1.5 rounded-full transition-all shadow-md group"
            >
              <ShoppingBag className="w-4 h-4 text-[#CDA45A] group-hover:text-white transition-colors" />
              <span className="text-xs font-bold">{totalCartItems}</span>
            </button>
          </div>
        </div>

        {/* Compact Category Navigation Bar */}
        <nav className="hidden lg:block border-t border-[#CDA45A]/15 mt-1.5 pt-1.5">
          <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
            <Link
              href="/shop"
              className="text-xs font-bold tracking-wider text-[#1E1A18] hover:text-[#CDA45A] uppercase py-1 transition-colors whitespace-nowrap flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5 text-[#CDA45A]" /> All Collections
            </Link>

            {megaMenuCategories.slice(0, 9).map((cat) => (
              <div
                key={cat.slug}
                className="relative group py-1"
                onMouseEnter={() => setActiveCategory(cat.slug)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link
                  href={`/shop?category=${cat.slug}`}
                  className="text-xs font-medium tracking-wide text-[#3D3A36] hover:text-[#CDA45A] transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  {cat.name}
                  <ChevronDown className="w-3 h-3 text-[#CDA45A]/60 group-hover:rotate-180 transition-transform" />
                </Link>

                <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-xl shadow-2xl p-4 z-50 animate-fadeIn">
                  <div className="flex items-center justify-between mb-3 border-b border-[#CDA45A]/20 pb-2">
                    <span className="font-serif-luxury text-base font-semibold text-[#1E1A18]">
                      {cat.name}
                    </span>
                    <span className="text-[10px] text-[#B56A45] font-medium uppercase">
                      {cat.region}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {cat.subcategories.map((sub) => (
                      <li key={sub}>
                        <Link
                          href={`/shop?category=${cat.slug}&subcategory=${encodeURIComponent(sub)}`}
                          className="text-xs text-gray-700 hover:text-[#CDA45A] transition-colors flex items-center justify-between"
                        >
                          <span>{sub}</span>
                          <span className="text-[10px] text-gray-400">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="relative h-24 rounded-lg overflow-hidden group/img">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A18]/80 to-transparent flex items-end p-2">
                      <span className="text-[10px] font-semibold text-[#E6D2A8] uppercase tracking-wider">
                        Explore Authentic {cat.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/artisans"
              className="text-xs font-bold tracking-wider text-[#B56A45] hover:text-[#CDA45A] uppercase py-1 transition-colors whitespace-nowrap"
            >
              Artisan Stories
            </Link>
            <Link
              href="/bespoke"
              className="text-xs font-bold tracking-wider text-[#CDA45A] hover:text-[#1E1A18] uppercase py-1 transition-colors whitespace-nowrap"
            >
              Bespoke Consult
            </Link>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FCFAF7] border-b border-[#CDA45A]/30 px-6 py-4 space-y-4 animate-fadeIn">
            {/* Mobile Currency Switcher */}
            <div className="flex items-center justify-between bg-[#1E1A18] text-[#E6D2A8] px-4 py-2 rounded-xl">
              <span className="text-xs font-semibold flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#CDA45A]" /> Global Currency:
              </span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                className="bg-transparent text-[#FCFAF7] font-semibold focus:outline-none text-xs"
              >
                {currencyList.map((c) => (
                  <option key={c.code} value={c.code} className="bg-[#1E1A18] text-[#FCFAF7]">
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#1E1A18] hover:text-[#CDA45A]"
            >
              Explore All Collections
            </Link>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {megaMenuCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/shop?category=${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs text-gray-700 hover:text-[#CDA45A] p-2 bg-[#F7F0E7] rounded-lg"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-[#CDA45A]/20 pt-4 flex justify-between text-xs font-bold uppercase tracking-wider">
              <Link href="/artisans" onClick={() => setMobileMenuOpen(false)} className="text-[#B56A45]">
                Artisan Stories
              </Link>
              <Link href="/bespoke" onClick={() => setMobileMenuOpen(false)} className="text-[#CDA45A]">
                Bespoke Consult
              </Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-[#3D3A36]">
                Journal
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
