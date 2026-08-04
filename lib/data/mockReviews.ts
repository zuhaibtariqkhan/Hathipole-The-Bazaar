export interface GlobalReview {
  id: string;
  customerName: string;
  flag: string;
  profession: string;
  location: string;
  purchasedCategory: string;
  rating: number;
  reviewText: string;
  verified: boolean;
}

export const mockGlobalReviews: GlobalReview[] = [
  {
    id: 'rev-1',
    customerName: 'Emily Carter',
    flag: '🇺🇸',
    profession: 'Interior Designer',
    location: 'New York, USA',
    purchasedCategory: 'Handwoven Rug',
    rating: 5,
    reviewText: 'The craftsmanship is exceptional. The rug completely transformed our living room and arrived perfectly packaged. You can genuinely feel the heritage behind every weave.',
    verified: true
  },
  {
    id: 'rev-2',
    customerName: 'James Harrington',
    flag: '🇬🇧',
    profession: 'Art Collector',
    location: 'London, United Kingdom',
    purchasedCategory: 'Pichwai Painting',
    rating: 5,
    reviewText: 'The detailing is extraordinary. It looks even more magnificent in person than in the photographs. A true museum-quality masterpiece.',
    verified: true
  },
  {
    id: 'rev-3',
    customerName: 'Sophie Laurent',
    flag: '🇫🇷',
    profession: 'Boutique Owner',
    location: 'Paris, France',
    purchasedCategory: 'Pashmina Shawl',
    rating: 5,
    reviewText: 'The softness and quality exceeded every expectation. It’s elegant, lightweight, and has become one of my favourite luxury accessories.',
    verified: true
  },
  {
    id: 'rev-4',
    customerName: 'Ahmed Al Mansoori',
    flag: '🇦🇪',
    profession: 'Business Owner',
    location: 'Dubai, UAE',
    purchasedCategory: 'Attar Collection',
    rating: 5,
    reviewText: 'The fragrances are rich, long-lasting, and unlike anything available in commercial perfume stores. Beautiful presentation as well.',
    verified: true
  },
  {
    id: 'rev-5',
    customerName: 'Yuki Tanaka',
    flag: '🇯🇵',
    profession: 'Architect',
    location: 'Tokyo, Japan',
    purchasedCategory: 'Handcrafted Wooden Decor',
    rating: 5,
    reviewText: 'Every piece feels handmade with incredible attention to detail. It perfectly complements our minimalist interior.',
    verified: true
  },
  {
    id: 'rev-6',
    customerName: 'Olivia Thompson',
    flag: '🇦🇺',
    profession: 'Home Stylist',
    location: 'Sydney, Australia',
    purchasedCategory: 'Bandhani Textile',
    rating: 5,
    reviewText: 'The colors are vibrant and the fabric quality is outstanding. Shipping was faster than expected and the craftsmanship is remarkable.',
    verified: true
  },
  {
    id: 'rev-7',
    customerName: 'Michael Bennett',
    flag: '🇨🇦',
    profession: 'Luxury Homeowner',
    location: 'Toronto, Canada',
    purchasedCategory: 'Bespoke Furniture',
    rating: 5,
    reviewText: 'Working with Hathipole on a bespoke furniture piece was a wonderful experience. Communication was excellent, and the final product is truly one of a kind.',
    verified: true
  }
];
