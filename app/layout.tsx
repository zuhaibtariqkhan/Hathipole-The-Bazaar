import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Cinzel } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import SearchModal from '@/components/modals/SearchModal';
import QuickViewModal from '@/components/product/QuickViewModal';
import CompareModal from '@/components/product/CompareModal';
import ToastNotification from '@/components/ui/ToastNotification';
import GoldCursorGlow from '@/components/ui/GoldCursorGlow';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Hathipole The Bazaar | The World of Indian Crafts',
  description: 'A global digital luxury boutique representing India\'s finest authentic handicrafts, hand-knotted silk rugs, pure cashmere pashminas, miniature paintings, and royal attar fragrances.',
  icons: {
    icon: [
      { url: '/favi.png', sizes: '32x32', type: 'image/png' },
      { url: '/favi.png', sizes: '192x192', type: 'image/png' }
    ],
    shortcut: '/favi.png',
    apple: '/favi.png'
  },
  keywords: [
    'Indian Handicrafts',
    'Pichwai Paintings',
    'Silk Rugs',
    'Cashmere Pashmina',
    'Fine Jewellery',
    'Luxury Global E-Commerce',
    'Handmade Indian Luxury'
  ],
  authors: [{ name: 'Hathipole The Bazaar' }],
  openGraph: {
    title: 'Hathipole The Bazaar | The World of Indian Crafts',
    description: 'Authentic Indian luxury craftsmanship empowering master artisans worldwide.',
    url: 'https://hathipole.com',
    siteName: 'Hathipole The Bazaar',
    images: [
      {
        url: '/the-logo.png',
        width: 1200,
        height: 630,
        alt: 'Hathipole The Bazaar Royal Heritage Logo'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${cinzel.variable}`}>
      <body className="bg-[#F7F0E7] text-[#1E1A18] min-h-screen flex flex-col antialiased selection:bg-[#CDA45A] selection:text-white relative">
        <GoldCursorGlow />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Global Floating Modals & Drawers */}
        <CartDrawer />
        <SearchModal />
        <QuickViewModal />
        <CompareModal />
        <ToastNotification />
      </body>
    </html>
  );
}
