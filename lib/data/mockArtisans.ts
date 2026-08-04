export interface ArtisanStory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  region: string;
  coverImage: string;
  paragraphs: string[];
  closingQuote: string;
  categoryLink: string;
}

export const mockArtisanStories: ArtisanStory[] = [
  {
    id: 'story-1',
    number: '01',
    title: 'The Looms of Kashmir — Pashmina',
    subtitle: 'High-Altitude Changthangi Wool & Fine Hand Embroidery',
    region: 'Kashmir & Ladakh Heritage Guild',
    coverImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    paragraphs: [
      'Long before the first rays of sunlight touch the Himalayan valleys, the sound of wooden looms begins to echo through small homes nestled among the mountains. Here, generations of artisans continue a tradition that has survived centuries, preserving one of the world’s finest textile legacies—authentic Pashmina.',
      'Every shawl begins with exceptionally fine wool gathered from the Changthangi goats that inhabit the high-altitude regions of Ladakh. The raw fibre is carefully cleaned, spun by hand, and transformed into delicate yarn using techniques passed from parents to children over countless generations.',
      'The weaving process is slow and deliberate. Each thread is guided with remarkable precision, requiring weeks—and sometimes months—to complete a single masterpiece. The intricate embroidery that follows is equally extraordinary, with artisans stitching thousands of tiny motifs entirely by hand. Every pattern tells a story inspired by Kashmir’s landscapes, flowers, gardens, and centuries of artistic heritage.',
      'For more than 70 years, Hathipole The Bazaar has worked closely with artisan families dedicated to preserving this remarkable craft. Today, through partnerships with 350+ artisans across India, we continue to support traditional craftsmanship, sustain rural communities, and ensure that authentic Pashmina remains a symbol of heritage rather than mass production.'
    ],
    closingQuote: 'A genuine Pashmina is more than warmth—it is history woven into every thread.',
    categoryLink: '/shop?category=pashminas'
  },
  {
    id: 'story-2',
    number: '02',
    title: 'Threads of India — Handwoven Textiles',
    subtitle: 'Regional Weaves, Natural Dyes & Cultural Identity',
    region: 'Master Weavers Guild (Rajasthan, Gujarat, Bengal & South India)',
    coverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    paragraphs: [
      'Across India, every region speaks its own language through textiles. From Rajasthan’s vibrant colours to Gujarat’s intricate weaves, from Bengal’s fine cotton traditions to South India’s elegant silks, every fabric carries generations of cultural identity.',
      'Our textile artisans begin with natural fibres and age-old weaving techniques that have remained largely unchanged for centuries. Wooden handlooms, traditional dyeing methods, and painstaking finishing processes create fabrics that possess a character impossible to replicate through mass production.',
      'No two handcrafted textiles are ever perfectly identical. Slight variations in texture, weave, and colour are not imperfections—they are the signature of human hands.',
      'Behind every metre of fabric is a family whose knowledge has been refined through decades of experience. Many of these artisans learned their craft as children, sitting beside parents and grandparents who patiently taught them every knot, weave, and finishing detail.',
      'With a legacy spanning more than seven decades, Hathipole The Bazaar proudly collaborates with master weavers from across India, ensuring that traditional weaving communities continue to thrive while sharing India’s extraordinary textile heritage with homes around the world.'
    ],
    closingQuote: 'Every fabric carries not only colour and texture—but also the story of the hands that created it.',
    categoryLink: '/shop?category=textile'
  },
  {
    id: 'story-3',
    number: '03',
    title: 'The Soul of Pichwai — Miniature & Pichwai Paintings',
    subtitle: 'Natural Mineral Pigments, 24K Gold Leaf & Temple Heritage',
    region: 'Royal Art Studio (Udaipur & Nathdwara, Rajasthan)',
    coverImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    paragraphs: [
      'Inside quiet studios in Rajasthan, artists patiently prepare natural pigments, handmade brushes, and finely stretched canvases before beginning work on paintings that often take months to complete.',
      'Pichwai and miniature paintings are among India’s most celebrated artistic traditions. Every detail—from the expressive eyes of Shrinathji to the intricate lotus petals, peacocks, cows, and temple architecture—is painted entirely by hand using techniques preserved for generations.',
      'These artists spend years mastering proportions, brush control, and traditional symbolism before creating independent works. A single painting may contain thousands of individual brushstrokes so fine that many are almost invisible to the naked eye.',
      'Each artwork reflects devotion, patience, and discipline. Rather than rushing production, artisans allow every layer of colour to dry naturally before applying the next, building extraordinary depth and richness over time.',
      'For over 70 years, Hathipole The Bazaar has partnered with Rajasthan’s traditional artists, helping preserve one of India’s most treasured artistic legacies while introducing these timeless masterpieces to collectors around the globe.'
    ],
    closingQuote: 'When you bring home a handmade painting, you are not simply decorating a wall—you are preserving an artistic legacy.',
    categoryLink: '/shop?category=paintings'
  },
  {
    id: 'story-4',
    number: '04',
    title: 'Carved by Hand — Indian Handicrafts',
    subtitle: 'Teakwood, Makrana Marble, Solid Brass & Pietra Dura Inlay',
    region: 'Imperial Handicraft Guilds',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    paragraphs: [
      'Across villages, deserts, forests, and bustling artisan towns, master craftsmen transform ordinary natural materials into extraordinary works of art.',
      'Wood, marble, brass, stone, clay, leather, and natural fibres each demand different skills, different tools, and years of specialised experience. Every artisan develops an intimate understanding of their material, learning how it behaves, ages, and reveals its beauty through patient craftsmanship.',
      'Many workshops still rely on traditional hand tools rather than industrial machinery. Every carving, engraving, polishing, or inlay is completed slowly, allowing each piece to develop its own unique character. Small variations are celebrated because they prove that no machine has replaced the human hand.',
      'These crafts are more than decorative objects—they preserve regional traditions, local stories, and cultural identities that have survived for centuries despite rapid modernisation.',
      'Supported by a heritage of 70+ years and collaborations with 350+ skilled artisans, Hathipole The Bazaar is committed to protecting India’s handcrafted traditions and ensuring they continue to flourish for generations to come.'
    ],
    closingQuote: 'Every handcrafted piece carries something no factory can reproduce—the spirit, patience, and individuality of its maker.',
    categoryLink: '/shop?category=handicrafts'
  }
];

// Retain backward compatible mockArtisans export for existing component references
export const mockArtisans = [
  {
    id: 'art-1',
    name: 'Rameshwar Sharma',
    title: 'Master Pichwai & Miniature Painter',
    region: 'Master Art Studio' as const,
    experienceYears: 38,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    specialty: '24K Gold Leaf Pichwai Artwork',
    story: 'Inside quiet studios in Rajasthan, artists patiently prepare natural pigments and 24K real gold leaf canvas before starting Pichwai paintings that take months to complete.'
  },
  {
    id: 'art-2',
    name: 'Ghulam Nabi Mir',
    title: 'Senior Carpet & Cashmere Craftsman',
    region: 'Master Silk Guild' as const,
    experienceYears: 42,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
    specialty: 'Hand-Knotted Pure Silk Rugs & Cashmere Jamawar',
    story: 'Preserving Himalayan Pashmina spinning and hand-knotted silk carpet traditions for over 4 decades through traditional wooden looms.'
  }
];
