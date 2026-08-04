import { create } from 'zustand';
import {
  Product,
  CartItem,
  CurrencyCode,
  Order,
  UserProfile,
  Coupon
} from '../types';
import { mockProducts } from '../data/mockProducts';

export const AVAILABLE_COUPONS: Coupon[] = [
  { code: 'ROYAL10', discountPercentage: 10, minSpendUSD: 100, description: '10% Royal Welcome Discount' },
  { code: 'HERITAGE15', discountPercentage: 15, minSpendUSD: 500, description: '15% Off Heritage Luxury Orders' },
  { code: 'FREESHIP', discountPercentage: 0, minSpendUSD: 0, description: 'Complimentary Worldwide Express Courier' }
];

interface StoreState {
  // Navigation & Modals
  searchModalOpen: boolean;
  setSearchModalOpen: (open: boolean) => void;
  cartDrawerOpen: boolean;
  setCartDrawerOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  compareModalOpen: boolean;
  setCompareModalOpen: (open: boolean) => void;

  // Currency
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;

  // Cart
  cart: CartItem[];
  giftWrap: boolean;
  setGiftWrap: (wrap: boolean) => void;
  giftMessage: string;
  setGiftMessage: (msg: string) => void;
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  addToCart: (product: Product, quantity?: number, selectedVariant?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  // Wishlist & Compare
  wishlistIds: string[];
  toggleWishlist: (productId: string) => void;
  compareIds: string[];
  toggleCompare: (productId: string) => void;
  clearCompare: () => void;

  // Authentication & Profile
  user: UserProfile | null;
  loginMock: (email: string, name?: string) => void;
  logoutMock: () => void;

  // Orders
  orders: Order[];
  createOrder: (shippingAddress: Order['shippingAddress'], paymentMethod: string, courier: Order['courier']) => Order;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;

  // Notification Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  // Navigation & Modals
  searchModalOpen: false,
  setSearchModalOpen: (open) => set({ searchModalOpen: open }),
  cartDrawerOpen: false,
  setCartDrawerOpen: (open) => set({ cartDrawerOpen: open }),
  quickViewProduct: null,
  setQuickViewProduct: (product) => set({ quickViewProduct: product }),
  compareModalOpen: false,
  setCompareModalOpen: (open) => set({ compareModalOpen: open }),

  // Currency
  currency: 'USD',
  setCurrency: (code) => set({ currency: code }),

  // Cart
  cart: [
    { product: mockProducts[0], quantity: 1 },
    { product: mockProducts[5], quantity: 1 }
  ],
  giftWrap: false,
  setGiftWrap: (wrap) => set({ giftWrap: wrap }),
  giftMessage: '',
  setGiftMessage: (msg) => set({ giftMessage: msg }),
  appliedCoupon: null,

  applyCoupon: (code) => {
    const found = AVAILABLE_COUPONS.find((c) => c.code.toUpperCase() === code.trim().toUpperCase());
    if (!found) {
      return { success: false, message: 'Invalid promotional code.' };
    }
    const currentSubtotal = get().cart.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);
    if (currentSubtotal < found.minSpendUSD) {
      return { success: false, message: `Minimum spend of $${found.minSpendUSD} required for ${found.code}.` };
    }
    set({ appliedCoupon: found });
    return { success: true, message: `Applied ${found.code} (${found.discountPercentage > 0 ? `${found.discountPercentage}% Off` : 'Free Express Shipping'})!` };
  },

  removeCoupon: () => set({ appliedCoupon: null }),

  addToCart: (product, quantity = 1, selectedVariant) => {
    const existingIndex = get().cart.findIndex((item) => item.product.id === product.id);
    if (existingIndex > -1) {
      const updated = [...get().cart];
      updated[existingIndex].quantity += quantity;
      set({ cart: updated, cartDrawerOpen: true });
    } else {
      set({ cart: [...get().cart, { product, quantity, selectedVariant }], cartDrawerOpen: true });
    }
    get().showToast(`Added ${product.title} to cart`);
  },

  removeFromCart: (productId) => {
    set({ cart: get().cart.filter((item) => item.product.id !== productId) });
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    set({
      cart: get().cart.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    });
  },

  clearCart: () => set({ cart: [], giftWrap: false, giftMessage: '', appliedCoupon: null }),

  // Wishlist & Compare
  wishlistIds: ['prod-1', 'prod-3'],
  toggleWishlist: (productId) => {
    const exists = get().wishlistIds.includes(productId);
    const updated = exists
      ? get().wishlistIds.filter((id) => id !== productId)
      : [...get().wishlistIds, productId];
    set({ wishlistIds: updated });
    const product = mockProducts.find((p) => p.id === productId);
    get().showToast(exists ? `Removed from Wishlist` : `Saved to Wishlist: ${product?.title || ''}`);
  },

  compareIds: [],
  toggleCompare: (productId) => {
    const exists = get().compareIds.includes(productId);
    if (exists) {
      set({ compareIds: get().compareIds.filter((id) => id !== productId) });
    } else {
      if (get().compareIds.length >= 4) {
        get().showToast('Maximum 4 items allowed in compare list.');
        return;
      }
      set({ compareIds: [...get().compareIds, productId] });
      get().showToast('Added to product comparison list.');
    }
  },

  clearCompare: () => set({ compareIds: [] }),

  // Auth
  user: {
    id: 'usr-101',
    name: 'Princess Gayatri Singh',
    email: 'gayatrisingh@royalestate.org',
    phone: '+91 98290 12345',
    rewardPoints: 1250,
    tier: 'Heritage Gold',
    savedAddresses: [
      {
        id: 'addr-1',
        title: 'Heritage Palace (Home)',
        fullName: 'Gayatri Singh',
        street: '14 Royal Estate Enclave, Palace Quarter',
        city: 'Royal District',
        state: 'Heritage Region',
        country: 'India',
        zipCode: '313001',
        isDefault: true
      },
      {
        id: 'addr-2',
        title: 'Manhattan Penthouse',
        fullName: 'Gayatri Singh',
        street: '740 Park Avenue, Apt 14B',
        city: 'New York',
        state: 'NY',
        country: 'United States',
        zipCode: '10021',
        isDefault: false
      }
    ]
  },

  loginMock: (email, name) => {
    set({
      user: {
        id: `usr-${Date.now()}`,
        name: name || email.split('@')[0],
        email,
        phone: '+1 (555) 234-5678',
        rewardPoints: 500,
        tier: 'Royal Member',
        savedAddresses: []
      }
    });
    get().showToast(`Welcome back, ${name || email}!`);
  },

  logoutMock: () => {
    set({ user: null });
    get().showToast('Logged out successfully.');
  },

  // Orders
  orders: [
    {
      id: 'ORD-98231',
      createdAt: '2026-08-01',
      items: [{ product: mockProducts[2], quantity: 1 }],
      totalUSD: 3200,
      status: 'Shipped',
      trackingNumber: 'FX-884920194US',
      courier: 'FedEx Express',
      shippingAddress: {
        fullName: 'Princess Gayatri Singh',
        street: '740 Park Avenue, Apt 14B',
        city: 'New York',
        state: 'NY',
        country: 'United States',
        zipCode: '10021'
      },
      paymentMethod: 'Stripe (Credit Card)',
      giftWrap: true,
      giftMessage: 'With royal compliments for your new home.'
    }
  ],

  createOrder: (shippingAddress, paymentMethod, courier) => {
    const cart = get().cart;
    const subtotal = cart.reduce((sum, item) => sum + item.product.priceUSD * item.quantity, 0);
    const coupon = get().appliedCoupon;
    const discount = coupon ? (subtotal * coupon.discountPercentage) / 100 : 0;
    const giftFee = get().giftWrap ? 5 : 0;
    const totalUSD = subtotal - discount + giftFee;

    const newOrder: Order = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      createdAt: new Date().toISOString().split('T')[0],
      items: [...cart],
      totalUSD,
      status: 'Processing',
      trackingNumber: `HTB-${Math.floor(10000000 + Math.random() * 90000000)}`,
      courier,
      shippingAddress,
      paymentMethod,
      giftWrap: get().giftWrap,
      giftMessage: get().giftMessage
    };

    set({
      orders: [newOrder, ...get().orders],
      cart: [],
      giftWrap: false,
      giftMessage: '',
      appliedCoupon: null
    });

    return newOrder;
  },

  updateOrderStatus: (orderId, status) => {
    set({
      orders: get().orders.map((o) => (o.id === orderId ? { ...o, status } : o))
    });
  },

  // Toast
  toastMessage: null,
  showToast: (msg) => {
    set({ toastMessage: msg });
    setTimeout(() => {
      set({ toastMessage: null });
    }, 3000);
  }
}));
