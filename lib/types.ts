export type CategorySlug =
  | 'rugs'
  | 'pashminas'
  | 'textile'
  | 'bandhani'
  | 'bespoke'
  | 'handicrafts'
  | 'paintings'
  | 'jewellery'
  | 'attar'
  | 'bags-diaries'
  | 'spices'
  | 'wedding-hampers'
  | 'return-gifts'
  | 'designer-apparels';

export type CraftRegion =
  | 'Master Art Studio'
  | 'Imperial Marble Guild'
  | 'Master Silk Guild'
  | 'Royal Goldsmiths'
  | 'Natural Fragrance Distillery'
  | 'Heritage Cashmere Guild'
  | 'Fine Textile Guild'
  | 'Heritage Tie-Dye Guild'
  | 'Organic Spice Guild'
  | 'Leather Craft Studio'
  | 'Solid Brass Studio'
  | 'Royal Fashion Atelier'
  | 'Bespoke Studio';

export interface Artisan {
  id: string;
  name: string;
  title: string;
  region: CraftRegion;
  experienceYears: number;
  avatar: string;
  coverImage: string;
  story: string;
  specialty: string;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  country: string;
}

export interface Product {
  id: string;
  sku: string;
  title: string;
  tagline: string;
  description: string;
  story: string;
  priceUSD: number;
  originalPriceUSD?: number;
  category: CategorySlug;
  categoryName: string;
  subcategory: string;
  craftRegion: CraftRegion;
  craftType: string;
  materials: string[];
  dimensions: string;
  weight: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isLimitedEdition?: boolean;
  isFeatured?: boolean;
  roomType?: 'Living Room' | 'Royal Bedroom' | 'Dining Sanctuary' | 'Heritage Courtyard';
  images: string[];
  videoUrl?: string;
  artisan: Artisan;
  careInstructions: string[];
  authenticityCertificate: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'AED' | 'INR' | 'AUD' | 'CAD' | 'JPY';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateAgainstUSD: number;
  label: string;
}

export interface Coupon {
  code: string;
  discountPercentage: number;
  minSpendUSD: number;
  description: string;
}

export interface Order {
  id: string;
  createdAt: string;
  items: CartItem[];
  totalUSD: number;
  status: 'Processing' | 'Artisan Crafted' | 'Quality Checked' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  trackingNumber: string;
  courier: 'FedEx Express' | 'DHL Worldwide' | 'India Post';
  shippingAddress: {
    fullName: string;
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  paymentMethod: string;
  giftWrap: boolean;
  giftMessage?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  rewardPoints: number;
  tier: 'Royal Member' | 'Heritage Gold' | 'Empirical Platinum';
  savedAddresses: Array<{
    id: string;
    title: string;
    fullName: string;
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    isDefault: boolean;
  }>;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export interface ProductFilterState {
  searchQuery: string;
  category: CategorySlug | 'all';
  subcategory: string | 'all';
  craftRegion: CraftRegion | 'all';
  craftType: string | 'all';
  minPriceUSD: number;
  maxPriceUSD: number;
  inStockOnly: boolean;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
}
