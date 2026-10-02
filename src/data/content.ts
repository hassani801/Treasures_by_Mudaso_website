export interface GroceryPackage {
  id: string;
  name: string;
  tagline: string;
  priceNaira: number;
  isPopular?: boolean;
  idealFor: string;
  items: string[];
}

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  popularBrands: string[];
}

export interface Testimonial {
  id: string;
  customerName: string;
  location: string;
  purchase: string;
  date: string;
  whatsappMessage: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BRAND_DATA = {
  name: 'Treasures by Mudaso',
  shortName: 'Mudaso',
  tagline: 'Your UK Personal Shopper',
  headline: 'UK Treasures, Delivered to Your Door in Nigeria',
  phoneFormatted: '+44 7760 580132',
  phoneRaw: '447760580132',
  instagramHandle: '@treasures_by_mudaso',
  instagramUrl: 'https://instagram.com/treasures_by_mudaso',
  followersCount: '2,245',
  deliveryDays: 'Mondays · Tuesdays · Fridays',
  locations: ['Abuja', 'Kano', 'Lagos', 'Port Harcourt', 'Nationwide Nigeria'],
  stats: [
    { label: 'Happy Customers', value: '2,000+' },
    { label: 'Curated UK Hauls', value: '190+' },
    { label: 'Authentic UK Sourced', value: '100%' },
    { label: 'Delivery Hubs in NG', value: '36 States' },
  ],
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = "Hi Treasures by Mudaso, I'd like to place an order.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${BRAND_DATA.phoneRaw}?text=${text}`;
}

export const CATEGORIES: Category[] = [
  {
    id: 'fragrance',
    name: 'Luxury Fragrance',
    subtitle: 'Original British & French Scents',
    description: '100% authentic niche perfumes, eau de parfums, and gift sets sourced directly from UK boutiques like Selfridges and Harrods.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    popularBrands: ['Jo Malone London', 'Maison Francis Kurkdjian', 'Tom Ford', 'Byredo'],
  },
  {
    id: 'groceries',
    name: 'British Groceries',
    subtitle: 'Pantry, Tea & Family Staples',
    description: 'Beloved UK treats, breakfast cereals, hot chocolates, specialty biscuits, and cooking essentials straight from M&S, Waitrose, and Tesco.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    popularBrands: ['Marks & Spencer', 'Waitrose', 'Twinings', 'Cadbury UK'],
  },
  {
    id: 'wellness',
    name: 'Wellness & Supplements',
    subtitle: 'Certified Health & Vitamins',
    description: 'UK pharmacy-grade vitamins, collagen elixirs, prenatal essentials, and organic supplements for optimal vitality.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    popularBrands: ['Vitabiotics', 'Holland & Barrett', 'Bioglan', 'Wellwoman'],
  },
  {
    id: 'home',
    name: 'Boutique Home',
    subtitle: 'Scented Candles & Cozy Decor',
    description: 'Aesthetic diffusers, luxury soy candles, plush Egyptian cotton linens, and dining accents to elevate your living spaces.',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
    popularBrands: ['The White Company', 'Zara Home UK', 'Neom Organics', 'Diptyque'],
  },
  {
    id: 'essentials',
    name: 'Everyday Essentials',
    subtitle: 'Baby, Skincare & Body Care',
    description: 'Gentle dermatological baby washes, cult UK sunscreens, restorative body lotions, and hygiene items for the entire household.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    popularBrands: ['La Roche-Posay UK', 'Aveeno Baby', 'CeraVe UK', 'Childs Farm'],
  },
];

export const GROCERY_PACKAGES: GroceryPackage[] = [
  {
    id: 'starter',
    name: 'Starter Pantry Hamper',
    tagline: 'Ideal for singles, students, or sweet tooth indulgence',
    priceNaira: 95000,
    idealFor: 'Treating yourself or sending a cozy gift',
    items: [
      'Twinings English Breakfast Tea (100 bags)',
      'Cadbury Drinking Chocolate Luxury Tub (500g)',
      'Marks & Spencer Scottish Shortbread Assortment',
      'Marmite or Nutella UK Creamy Spread',
      'Walkers Pure Butter Shortbread Fingers',
      'Border Dark Chocolate Ginger Biscuits',
      'Kallo Organic Stock Cubes & Sea Salt',
    ],
  },
  {
    id: 'family',
    name: 'Family Heritage Box',
    tagline: 'Our signature curated monthly UK feast for Nigerian homes',
    priceNaira: 185000,
    isPopular: true,
    idealFor: 'Full family monthly restock with premier British staples',
    items: [
      'Weetabix Organic Family Pack (48 biscuits)',
      'Ovaltine Malt Drink or Horlicks UK Classic (800g)',
      'Marks & Spencer Pure Blossom Honey & Fruit Jam',
      'Waitrose Extra Virgin Olive Oil (1 Litre)',
      'Nestle Carnation Evaporated Milk (Pack of 4)',
      'Cadbury Dairy Milk Caramel & Giant Buttons',
      'Heinz Classic Baked Beans & Cream of Tomato (6 Cans)',
      'Twinings Lemon & Ginger Herbal Infusions',
      'Bisto Gravy Granules & Colmans English Mustard',
    ],
  },
  {
    id: 'premium',
    name: 'Luxury Connoisseur Hamper',
    tagline: 'The ultimate royal selection of fine UK gourmet & wellness',
    priceNaira: 285000,
    idealFor: 'Elite gifting, bridal showers & executive pantries',
    items: [
      'Fortnum & Mason / Harrods Signature Blend Loose Leaf Tea',
      'Manuka Honey MGO 250+ Pure New Zealand Certified (UK Packed)',
      'Marks & Spencer Collection Belgian Chocolate Carousel',
      'Waitrose Truffle Infused Olive Oil & Balsamic Glaze',
      'Vitabiotics Perfectil Platinum or Wellwoman 3-Month Box',
      'Duchy Organic Biscuit Selection for Cheese',
      'San Pellegrino Sparkling Natural Mineral Water (Glass Bottles)',
      'L’Occitane or The White Company Fragranced Kitchen Hand Wash',
      'Exclusive Mudaso Keepsake Gifting Box with Silk Ribbon',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    customerName: 'Amina Bello',
    location: 'Maitama, Abuja',
    purchase: 'Jo Malone Wood Sage & M&S Biscuits',
    date: 'Delivered last Friday',
    whatsappMessage:
      'Salam dear! My parcel arrived in Abuja intact! The perfume is 100% original, exactly like the one I bought at Heathrow last summer. And the gradual payment scheme saved my life. Thank you Mudaso! ❤️',
    rating: 5,
  },
  {
    id: 'rev-2',
    customerName: 'Fatima Sanusi',
    location: 'Nassarawa GRA, Kano',
    purchase: 'Family Heritage Hamper & Vitabiotics',
    date: 'Delivered 2 days ago',
    whatsappMessage:
      'Everything is so fresh! The kids jumped when they saw their UK cereal and chocolates. Delivery right to my door in Kano without any hassle. You have a customer for life.',
    rating: 5,
  },
  {
    id: 'rev-3',
    customerName: 'Dr. Zainab K.',
    location: 'Guzape, Abuja',
    purchase: 'The White Company Diffuser & Skincare',
    date: 'Delivered Tuesday',
    whatsappMessage:
      'My house smells like a 5-star Mayfair hotel right now. Sourcing authentic The White Company products in Nigeria was impossible before finding you. 10/10 service!',
    rating: 5,
  },
  {
    id: 'rev-4',
    customerName: 'Hauwa Mohammed',
    location: 'Garki 2, Abuja',
    purchase: 'Bridal Gift Basket (Instalments)',
    date: 'Delivered last week',
    whatsappMessage:
      'I was able to pay in 3 instalments over 6 weeks. When the final payment cleared, Mudaso dispatched everything the same week. The bride cried happy tears!',
    rating: 5,
  },
  {
    id: 'rev-5',
    customerName: 'Ibrahim Al-Hassan',
    location: 'Bompai, Kano',
    purchase: 'Men’s Grooming & Niche Oud',
    date: 'Delivered Monday',
    whatsappMessage:
      'Received my Tom Ford fragrance and grooming items in Kano. Packaging was airtight and bubble wrapped like fine porcelain. Top tier personal shopper.',
    rating: 5,
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'How do I place an order with Treasures by Mudaso?',
    answer:
      'Ordering is as seamless as chatting with a trusted friend. Simply tap any "Order on WhatsApp" button or message us at +44 7760 580132 with your wishlist, screenshots, or the specific UK items you desire. We confirm UK store availability, provide a transparent quote in Naira, and coordinate everything.',
  },
  {
    question: 'How does the "Pay Gradually" (Instalments) option work?',
    answer:
      'We believe luxury shopping should feel comfortable. You can split your total invoice into 2, 3, or 4 manageable payments spread across your chosen timeframe. We purchase and securely hold your curated items in our UK staging facility as you pay. Once your final instalment clears, your entire consolidated package is dispatched on the very next flight to Nigeria!',
  },
  {
    question: 'Are all your products 100% genuine and original?',
    answer:
      'Without exception. We do not use third-party intermediaries or counterfeit markets. All items are hand-shopped by our UK team directly from authorized high-street flagships, departmental giants (Selfridges, Harrods, John Lewis, Boots), and premium grocers (M&S, Waitrose). Store receipts are readily available upon request.',
  },
  {
    question: 'What are your delivery timelines and dispatch days?',
    answer:
      'We operate regular consolidated air-cargo shipments between London and Nigeria. Our standard doorstep delivery days in Abuja and Kano are Mondays, Tuesdays, and Fridays. On average, orders arrive within 7 to 10 working days from the scheduled flight dispatch.',
  },
  {
    question: 'Which cities in Nigeria do you deliver to?',
    answer:
      'While we have dedicated direct logistics hubs in Abuja and Kano for express doorstep fulfillment, we deliver nationwide to all 36 states across Nigeria including Lagos, Port Harcourt, Ibadan, Kaduna, and Jos via trusted tracked courier partners.',
  },
  {
    question: 'Can I request bespoke UK items that are not featured on the website?',
    answer:
      'Yes, absolutely! We are your dedicated UK Personal Shopper. Whether it is a specific designer handbag from Bicester Village, baby nursery furniture, specialist medication/supplements, or hard-to-find home decor, send us the product link or photo on WhatsApp and we will source it for you.',
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    title: 'Selfridges London Perfume Run',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80',
    likes: '348',
    category: 'Fragrance',
  },
  {
    id: 'ig-2',
    title: 'M&S Luxury Pantry Unboxing',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    likes: '412',
    category: 'Groceries',
  },
  {
    id: 'ig-3',
    title: 'Jo Malone London Boutique Gift Wrap',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    likes: '520',
    category: 'Gifting',
  },
  {
    id: 'ig-4',
    title: 'Consolidated Cargo Heading to Abuja',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    likes: '631',
    category: 'Logistics',
  },
  {
    id: 'ig-5',
    title: 'Wellness & Glow Restock for Kano',
    image: 'https://images.unsplash.com/photo-1512290900672-1f55b9665f8c?auto=format&fit=crop&w=600&q=80',
    likes: '298',
    category: 'Wellness',
  },
  {
    id: 'ig-6',
    title: 'Bespoke Bridal Gifting Hamper',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    likes: '482',
    category: 'Bespoke',
  },
];
