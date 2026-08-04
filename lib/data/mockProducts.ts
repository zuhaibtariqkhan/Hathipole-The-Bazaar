import { Product } from '../types';
import { mockArtisans } from './mockArtisans';

export const mockProducts: Product[] = [
  // 1. Rugs
  {
    id: 'prod-1',
    sku: 'RUG-SIL-001',
    title: 'Royal Hand-Knotted Pure Silk Rug',
    tagline: '900 Knots Per Sq. Inch Pure Silk Creation',
    description: 'An extraordinary masterpiece hand-knotted over 14 months. Features intricate Persian tree-of-life arabesque motifs woven with 100% natural Mulberry silk on silk foundation.',
    story: 'Crafted in the artisan guild studio of Master Ghulam Nabi Mir. Inspired by 16th-century royal court carpets.',
    priceUSD: 2450,
    originalPriceUSD: 2800,
    category: 'rugs',
    categoryName: 'Rugs & Floor Carpets',
    subcategory: 'Pure Silk Rugs',
    craftRegion: 'Master Silk Guild',
    craftType: 'Hand-Knotted Silk',
    materials: ['100% Mulberry Silk', 'Natural Botanical Dyes'],
    dimensions: '6 ft x 9 ft (180 cm x 270 cm)',
    weight: '14.2 kg',
    inStock: true,
    stockCount: 2,
    rating: 4.9,
    reviewCount: 28,
    isBestSeller: true,
    isFeatured: true,
    roomType: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[1],
    careInstructions: [
      'Vacuum gently using brushless attachment only',
      'Professional dry cleaning recommended once every 3 years',
      'Rotate carpet 180 degrees annually to ensure uniform light exposure'
    ],
    authenticityCertificate: true
  },
  // 2. Pashminas
  {
    id: 'prod-2',
    sku: 'PAS-JAM-002',
    title: 'Heritage Cashmere Jamawar Hand-Embroidered Shawl',
    tagline: '100% Grade-A Fine Pashmina with Needlework Embroidery',
    description: 'Ultra-luxurious, featherlight pure Pashmina woven from the fine undercoat of mountain goats. Embroidered with painstaking Sozni needlework taking 6 months to complete.',
    story: 'Woven by master weavers using techniques patronized by royalty since the 18th century.',
    priceUSD: 1120,
    originalPriceUSD: 1350,
    category: 'pashminas',
    categoryName: 'Pashminas & Luxury Scarves',
    subcategory: 'Pure Cashmere Shawls',
    craftRegion: 'Heritage Cashmere Guild',
    craftType: 'Sozni Needlework Embroidery',
    materials: ['100% Pure Pashmina Cashmere'],
    dimensions: '100 cm x 200 cm',
    weight: '240 grams',
    inStock: true,
    stockCount: 5,
    rating: 5.0,
    reviewCount: 42,
    isBestSeller: true,
    isFeatured: true,
    roomType: 'Royal Bedroom',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[1],
    careInstructions: [
      'Dry clean only with approved organic wool solvents',
      'Store flat wrapped in breathable muslin fabric',
      'Do not wring or hang on wire hangers'
    ],
    authenticityCertificate: true
  },
  // 3. Pichwai & Miniature Paintings
  {
    id: 'prod-3',
    sku: 'PIC-GOL-003',
    title: 'Shrinathji 24K Gold Leaf Hand-Painted Pichwai',
    tagline: 'Museum-Grade Mineral Pigments on Handloom Cotton Canvas',
    description: 'Intricate Pichwai painting depicting Lord Shrinathji surrounded by sacred cows and lotus blooms. Embellished with pure 24 Karat gold leaf gilding.',
    story: 'Handcrafted over 4 months by Master Rameshwar Sharma. Certified museum-grade artwork designed to last for generations.',
    priceUSD: 3200,
    category: 'paintings',
    categoryName: 'Miniature & Pichwai Paintings',
    subcategory: 'Original Pichwai Art',
    craftRegion: 'Master Art Studio',
    craftType: 'Natural Pigment & Gold Leaf',
    materials: ['Hand-Spun Cotton Canvas', 'Real 24K Gold Foil', 'Lapis Lazuli Pigments'],
    dimensions: '36 in x 48 in (90 cm x 120 cm)',
    weight: '3.5 kg (Framed)',
    inStock: true,
    stockCount: 1,
    rating: 5.0,
    reviewCount: 15,
    isLimitedEdition: true,
    isFeatured: true,
    roomType: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[0],
    careInstructions: [
      'Keep away from direct humid moisture and harsh sunlight',
      'Clean frame glass with microfiber cloth only',
      'Comes in UV-protective museum grade acrylic encapsulation'
    ],
    authenticityCertificate: true
  },
  // 4. Handicrafts (Wood & Marble)
  {
    id: 'prod-4',
    sku: 'HDC-MAR-004',
    title: 'Imperial Makrana Marble Inlay Decorative Bowl',
    tagline: 'Pietra Dura Inlaid with Semi-Precious Lapis Lazuli',
    description: 'Hand-carved out of pristine white Makrana marble. Adorned with delicate floral Pietra Dura inlay work using lapis lazuli, turquoise, and mother of pearl.',
    story: 'Meticulously crafted by traditional artisan families using hand chisels and diamond polishing powder.',
    priceUSD: 680,
    originalPriceUSD: 750,
    category: 'handicrafts',
    categoryName: 'Artisan Handicrafts',
    subcategory: 'Marble Inlay',
    craftRegion: 'Imperial Marble Guild',
    craftType: 'Pietra Dura Marble Inlay',
    materials: ['Pure Makrana White Marble', 'Lapis Lazuli', 'Malachite', 'Mother of Pearl'],
    dimensions: '12 in Diameter x 4 in Height',
    weight: '4.8 kg',
    inStock: true,
    stockCount: 8,
    rating: 4.8,
    reviewCount: 34,
    isBestSeller: true,
    roomType: 'Dining Sanctuary',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[0],
    careInstructions: [
      'Wipe clean with a soft damp cloth',
      'Do not use acidic cleaners or harsh chemicals',
      'Apply natural bee wax polish once a year to maintain shine'
    ],
    authenticityCertificate: true
  },
  // 5. Jewellery
  {
    id: 'prod-5',
    sku: 'JWL-SIL-005',
    title: 'Royal Kundan & Meenakari 925 Silver Choker Set',
    tagline: 'Hand-set Glass Stones with Traditional Enamel Artwork',
    description: 'Exquisite 925 Sterling Silver neckpiece showcasing traditional Meenakari (enameling) on the reverse side and hand-set Polki Kundan glass stones on the front.',
    story: 'Hand-crafted by master goldsmiths. A royal bridal statement piece.',
    priceUSD: 850,
    category: 'jewellery',
    categoryName: 'Royal Fine Jewellery',
    subcategory: 'Silver Kundan',
    craftRegion: 'Royal Goldsmiths',
    craftType: 'Meenakari & Kundan Setting',
    materials: ['925 Sterling Silver', '24K Gold Foil Plating', 'Natural Gemstone Beads'],
    dimensions: 'Adjustable Silk Cord Length (Choker width 3.5 in)',
    weight: '165 grams',
    inStock: true,
    stockCount: 4,
    rating: 4.9,
    reviewCount: 19,
    isNewArrival: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[2],
    careInstructions: [
      'Store in air-tight velvet box away from direct perfumes and hairsprays',
      'Wipe with soft silver polishing cloth',
      'Do not expose to salt water or swimming pool chlorine'
    ],
    authenticityCertificate: true
  },
  // 6. Attar & Perfumes
  {
    id: 'prod-6',
    sku: 'ATR-OUD-006',
    title: 'Nawab Royal Amber Oud Pure Concentrated Perfume Oil',
    tagline: 'Pure Hydro-Distilled Natural Attar (Alcohol-Free)',
    description: 'A regal blend of aged wild Agarwood (Oud), Sandalwood oil, and Damask Rose. Aged for 3 years in traditional leather bottles for unprecedented depth.',
    story: 'Formulated by 5th-generation perfumer Hakim Al-Bukhari using ancient copper stills.',
    priceUSD: 340,
    category: 'attar',
    categoryName: 'Attar & Luxury Perfumes',
    subcategory: 'Natural Organic Attars',
    craftRegion: 'Natural Fragrance Distillery',
    craftType: 'Deg-Bhapka Steam Distillation',
    materials: ['Wild Oud Oil', 'Sandalwood Base', 'Damask Rose Petals'],
    dimensions: '12 ml Crystal Cut Flacon',
    weight: '320 grams (incl. Wooden Keepsake Box)',
    inStock: true,
    stockCount: 12,
    rating: 5.0,
    reviewCount: 51,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[3],
    careInstructions: [
      'Store upright in cool dark ambient conditions',
      'Apply to pulse points using glass dipstick wand',
      '100% pure alcohol-free oil formulation'
    ],
    authenticityCertificate: true
  },
  // 7. Textile (Home decor)
  {
    id: 'prod-7',
    sku: 'TXT-BLK-007',
    title: 'Hand-Block Printed Velvet Cushion Cover Pair',
    tagline: 'Organic Indigo & Marigold Vegetable Dyes',
    description: 'Set of 2 luxurious cotton velvet cushion covers block printed by hand with intricate cypress and lotus palmette motifs.',
    story: 'Printed using hand-carved teakwood blocks dipped in fermented natural indigo dyes.',
    priceUSD: 140,
    category: 'textile',
    categoryName: 'Textile & Home Decor',
    subcategory: 'Cushion Covers',
    craftRegion: 'Fine Textile Guild',
    craftType: 'Hand Block Printing',
    materials: ['Cotton Velvet', 'Natural Botanical Dyes', 'Concealed Zipper'],
    dimensions: '20 in x 20 in (50 cm x 50 cm)',
    weight: '450 grams (Pair)',
    inStock: true,
    stockCount: 15,
    rating: 4.7,
    reviewCount: 39,
    roomType: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[2],
    careInstructions: [
      'Cold gentle hand wash with mild eco-friendly liquid detergent',
      'Dry in shade to preserve vibrant vegetable dye colors',
      'Warm iron on reverse side only'
    ],
    authenticityCertificate: true
  },
  // 8. Bandhani Sarees
  {
    id: 'prod-8',
    sku: 'BAN-GAJ-008',
    title: 'Gharchola Pure Gaji Silk Bandhani Saree',
    tagline: 'Hand-Tied 10,000 Micro Knot Tie-Dye Technique',
    description: 'Traditional Gharchola red silk saree featuring golden zari grid checks populated with thousands of hand-knotted Bandhani dots.',
    story: 'Hand-dyed by women artisans using natural madder root and turmeric. Takes over 90 days of hand tying.',
    priceUSD: 920,
    originalPriceUSD: 1050,
    category: 'bandhani',
    categoryName: 'Bandhani & Royal Textiles',
    subcategory: 'Bandhani Sarees',
    craftRegion: 'Heritage Tie-Dye Guild',
    craftType: 'Bandhej Tie-Dye & Zari Weaving',
    materials: ['Pure Gaji Silk', 'Real Tested Gold Zari'],
    dimensions: '5.5 meters Saree + 0.8 meter Unstitched Blouse Piece',
    weight: '780 grams',
    inStock: true,
    stockCount: 3,
    rating: 4.9,
    reviewCount: 22,
    isNewArrival: true,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[2],
    careInstructions: [
      'Dry clean only',
      'Do not steam iron directly over bandhani crinkles',
      'Wrap in cotton cloth when storing'
    ],
    authenticityCertificate: true
  },
  // 9. Bags & Diaries
  {
    id: 'prod-9',
    sku: 'BAG-LEA-009',
    title: 'Hand-Tooled Royal Leather Travel Journal',
    tagline: 'Hand-Stitched Genuine Full-Grain Leather with Recycled Cotton Paper',
    description: 'Vintage-style travel journal featuring embossed peacock mandalas, antique brass buckle lock, and 200 handmade cotton rag unlined pages.',
    story: 'Handcrafted by leather artisans using eco-friendly vegetable tanning.',
    priceUSD: 95,
    category: 'bags-diaries',
    categoryName: 'Bags & Leather Journals',
    subcategory: 'Handmade Diaries',
    craftRegion: 'Leather Craft Studio',
    craftType: 'Hand-Embossed Leatherwork',
    materials: ['Vegetable-Tanned Full-Grain Leather', '100% Recycled Cotton Rag Paper'],
    dimensions: '8 in x 10 in x 1.5 in',
    weight: '620 grams',
    inStock: true,
    stockCount: 25,
    rating: 4.8,
    reviewCount: 64,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[0],
    careInstructions: [
      'Apply natural leather conditioner annually',
      'Keep away from prolonged dampness and water submersion'
    ],
    authenticityCertificate: true
  },
  // 10. Spices
  {
    id: 'prod-10',
    sku: 'SPC-SAF-010',
    title: 'Organic Mongra Saffron (10 Grams)',
    tagline: 'Grade-A1 Pure Stigma Threads',
    description: 'The world’s most precious spice, harvested by hand from purple crocus blooms. Deep maroon strands brimming with intense aroma and crocin antioxidant vibrancy.',
    story: 'Directly sourced from organic family saffron estates.',
    priceUSD: 160,
    category: 'spices',
    categoryName: 'Royal Spices & Saffron',
    subcategory: 'Mongra Saffron',
    craftRegion: 'Organic Spice Guild',
    craftType: 'Hand-Harvested Organic Spice',
    materials: ['100% Pure Mongra Saffron Stigmas'],
    dimensions: '10 Gram Sealed Airtight Glass Jar',
    weight: '180 grams (incl. packaging)',
    inStock: true,
    stockCount: 30,
    rating: 5.0,
    reviewCount: 88,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[1],
    careInstructions: [
      'Store in cool airtight container away from light',
      'Steep in warm milk or water for 15 minutes before cooking'
    ],
    authenticityCertificate: true
  },
  // 11. Wedding Hampers
  {
    id: 'prod-11',
    sku: 'WED-HAM-011',
    title: 'Maharani Velvet & Brass Royal Bridal Keepsake Hamper',
    tagline: 'Curated Luxury Gift Box with Brass Diya, Attar & Pashmina Stole',
    description: 'An extraordinary gifting experience enclosed in a velvet-lined carved teakwood trunk with gold brass fittings. Includes pure saffron, attar oil, silk stole, and brass diya lamp.',
    story: 'Designed for high-profile weddings, VIP corporate gifting, and luxury celebration keepsakes.',
    priceUSD: 480,
    category: 'wedding-hampers',
    categoryName: 'Wedding Hampers & Luxury Gift Boxes',
    subcategory: 'Bridal Hampers',
    craftRegion: 'Master Art Studio',
    craftType: 'Multi-Craft Royal Gifting',
    materials: ['Hand-Carved Teakwood Trunk', 'Embossed Brass', 'Silk Lining'],
    dimensions: '16 in x 12 in x 8 in',
    weight: '5.2 kg',
    inStock: true,
    stockCount: 10,
    rating: 4.9,
    reviewCount: 14,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[0],
    careInstructions: [
      'Wipe wooden box with dry soft cloth',
      'Customized monogramming available upon request'
    ],
    authenticityCertificate: true
  },
  // 12. Bespoke
  {
    id: 'prod-12',
    sku: 'BES-FUR-012',
    title: 'Royal Bone Inlay 7-Drawer Dresser Chest',
    tagline: 'Custom Handcrafted Bone Inlay & Teakwood',
    description: 'Bespoke architectural furniture item handcrafted by premier inlay artisans. Tens of thousands of hand-carved bone pieces fitted onto solid teakwood frame.',
    story: 'Custom made to order for luxury residential interiors, 5-star heritage hotels, and palace suites.',
    priceUSD: 3850,
    category: 'bespoke',
    categoryName: 'Bespoke Custom Creations',
    subcategory: 'Interior Projects',
    craftRegion: 'Bespoke Studio',
    craftType: 'Bone Inlay Furniture',
    materials: ['Ethically-Sourced Camel Bone Inlay', 'Solid Teak Wood', 'Resin Finish'],
    dimensions: '42 in W x 20 in D x 34 in H',
    weight: '68 kg',
    inStock: true,
    stockCount: 2,
    rating: 5.0,
    reviewCount: 9,
    isLimitedEdition: true,
    roomType: 'Royal Bedroom',
    images: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[0],
    careInstructions: [
      'Wipe clean with slightly damp cloth',
      'Keep away from standing water or outdoor weather elements'
    ],
    authenticityCertificate: true
  },
  // 13. Return Gifts
  {
    id: 'prod-13',
    sku: 'RET-GFT-013',
    title: 'Heritage Solid Brass Engraved Elephant Diya Set of 4',
    tagline: 'Hand-Cast Brass Oil Lamps with Antique Gold Patina',
    description: 'Traditional solid brass oil lamps hand-carved in the form of royal elephants bearing lotus oil reservoirs.',
    story: 'Crafted in metal studios for wedding guest favors and festival gifting.',
    priceUSD: 110,
    category: 'return-gifts',
    categoryName: 'Return Gifts & Favors',
    subcategory: 'Corporate & Festive Favors',
    craftRegion: 'Solid Brass Studio',
    craftType: 'Hand-Cast Solid Brass',
    materials: ['100% Solid Brass'],
    dimensions: '4 in x 3 in x 3.5 in each',
    weight: '1.4 kg (Set of 4)',
    inStock: true,
    stockCount: 40,
    rating: 4.8,
    reviewCount: 31,
    images: [
      'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[0],
    careInstructions: [
      'Clean brass using lemon juice and baking soda or brass polish'
    ],
    authenticityCertificate: true
  },
  // 14. Designer Apparels
  {
    id: 'prod-14',
    sku: 'APP-SHR-014',
    title: 'Royal Ivory Raw Silk Hand-Embroidered Sherwani Set',
    tagline: 'Hand Zardozi & Dori Embroidery with Gold Silk Threadwork',
    description: 'High-luxury men’s royal wedding sherwani crafted from structured mulberry raw silk, hand-embroidered with floral zardozi bullion wires and pearl beads.',
    story: 'Custom designed in fashion atelier, favored by high-profile grooms.',
    priceUSD: 1650,
    originalPriceUSD: 1900,
    category: 'designer-apparels',
    categoryName: 'Designer Apparels',
    subcategory: 'Royal Sherwanis',
    craftRegion: 'Royal Fashion Atelier',
    craftType: 'Zardozi Hand Embroidery',
    materials: ['Pure Mulberry Raw Silk', 'Gold Metallic Bullion Wires', 'Silk Satin Lining'],
    dimensions: 'Available in US/EU Sizes 38, 40, 42, 44',
    weight: '1.8 kg',
    inStock: true,
    stockCount: 4,
    rating: 5.0,
    reviewCount: 16,
    isNewArrival: true,
    images: [
      'https://images.unsplash.com/photo-1597983073493-88cd35cf03b0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80'
    ],
    artisan: mockArtisans[2],
    careInstructions: [
      'Strictly dry clean only',
      'Store in provided protective garment bag with moth repellents'
    ],
    authenticityCertificate: true
  }
];
