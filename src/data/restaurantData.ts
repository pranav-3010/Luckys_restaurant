import type { MenuItem, Review } from '../types';
import realBiryaniImg from '../assets/real_mutton_curry_biryani.jpg';
import realTandooriImg from '../assets/real_tandoori_starter.jpg';
import realFishImg from '../assets/real_aritaku_fish_parcels.jpg';
import realCocktailImg from '../assets/real_bar_cocktail_drink.jpg';
import heroImg from '../assets/co_rajahmundry_hero.jpg';

export interface LocationBranch {
  id: string;
  name: string;
  area: string;
  address: string;
  plusCode: string;
  phonePrimary: string;
  phoneSecondary: string;
  whatsapp: string;
  hours: string;
  costForTwo: string;
  zomatoUrl: string;
  swiggyUrl: string;
  mapsEmbedUrl: string;
  isMainBranch?: boolean;
}

export const BRANCHES: LocationBranch[] = [
  {
    id: "kompally",
    name: "C/o Rajahmundry — Kompally Rooftop",
    area: "Kompally, Hyderabad",
    address: "5th Floor, Santa Sriram Estates, Near Kompally Junction, Hyderabad, Telangana 500067",
    plusCode: "F9H5+XP Hyderabad, Telangana",
    phonePrimary: "+91 91000 88899",
    phoneSecondary: "+91 91000 88877",
    whatsapp: "919100088899",
    hours: "12:00 PM – 12:00 AM (Midnight)",
    costForTwo: "₹1,200 for two",
    zomatoUrl: "https://www.zomato.com",
    swiggyUrl: "https://www.swiggy.com",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.2831388674996!2d78.4862!3d17.5415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMyJzI5LjQiTiA3OMKwMjknMTAuMyJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin",
    isMainBranch: true
  }
];

export const RESTAURANT_INFO = {
  name: "C/o Rajahmundry Kitchen & Bar",
  tagline: "Authentic Godavari Regional Cuisine & Rooftop Bar",
  taglineEN: "Authentic Godavari Regional Cuisine & Rooftop Bar",
  taglineTE: "పక్కా గోదావరి రుచులు & రూఫ్‌టాప్ బార్",
  teluguName: "కేరాఫ్ రాజమండ్రి కిచెన్ & బార్",
  description: "C/o Rajahmundry celebrates the vibrant food culture of Rajahmundry and East/West Godavari districts. From pressure-cooked Mutton Cooker Pulao and banana leaf Aritaku Chepala Fry to handcrafted rooftop cocktails.",
  story: "Born out of pure hometown nostalgia, C/o Rajahmundry Kitchen and Bar celebrates the legendary food culture of East & West Godavari. From fiery pressure-cooked Cooker Pulaos and banana leaf Aritaku Chepala Fry to handcrafted rooftop cocktails, we bring authentic regional recipes to a lively 5th-floor rooftop setting in Hyderabad.",
  rating: 4.5,
  reviewCount: 948,
  address: BRANCHES[0].address,
  plusCode: BRANCHES[0].plusCode,
  phone: BRANCHES[0].phonePrimary,
  phoneSecondary: BRANCHES[0].phoneSecondary,
  whatsapp: BRANCHES[0].whatsapp,
  hours: BRANCHES[0].hours,
  costForTwo: BRANCHES[0].costForTwo,
  googleMapsEmbed: BRANCHES[0].mapsEmbedUrl,
  heroImage: heroImg,
  instagramUrl: "https://www.instagram.com",
  facebookUrl: "https://facebook.com",
};

export const MENU_CATEGORIES = [
  { id: 'all', labelEN: 'All Items', labelTE: 'అన్నీ' },
  { id: 'rajahmundry-taluka', labelEN: 'C/o Rajahmundry Taluka', subtitle: 'Authentic Rajahmundry Starters & Specials', labelTE: 'రాజమండ్రి తాలూకా' },
];

export const MENU_ITEMS: MenuItem[] = [
  // C/O RAJAHMUNDRY TALUKA (ALL 19 OFFICIAL ITEMS)
  {
    id: "t1",
    name: "MOKAJONNA WADA",
    description: "Crispy golden sweet corn vadas spiced with fresh green chilies, ginger & curry leaves. Served with spicy Andhra tomato chutney.",
    price: 379.00,
    category: "rajahmundry-taluka",
    isVeg: true,
    isChefSpecial: true,
    image: realTandooriImg
  },
  {
    id: "t2",
    name: "PANDUMIRCHI VEG STICKS",
    description: "Crispy fried vegetable sticks coated in fiery red Pandumirchi paste and aromatic Godavari spices.",
    price: 379.00,
    category: "rajahmundry-taluka",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "t3",
    name: "ELLIPAYA KARAM CORN",
    description: "Crispy wok-tossed sweet corn kernels coated in pungent garlic chili oil & crushed curry leaf karam.",
    price: 399.00,
    category: "rajahmundry-taluka",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "t4",
    name: "KOTHIMEERA PUTTAGODUGULU",
    description: "Plump button mushrooms tossed in rich coriander green paste, pepper & roasted cumin masala.",
    price: 399.00,
    category: "rajahmundry-taluka",
    isVeg: true
  },
  {
    id: "t5",
    name: "CORN CHEESE ROLLS",
    description: "Golden fried crispy rolls stuffed with creamy mozzarella, sweet corn & aromatic herbs.",
    price: 399.00,
    category: "rajahmundry-taluka",
    isVeg: true
  },
  {
    id: "t6",
    name: "POTLAM PANEER",
    description: "Fresh cottage cheese cubes marinated in spicy red chili masala, sealed inside a leaf parcel and pan-roasted.",
    price: 429.00,
    category: "rajahmundry-taluka",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "t7",
    name: "TAMALAPAKU PANEER",
    description: "Tandoori grilled paneer cubes infused with fresh betel leaf (Tamalapaku) aromatics and charcoal smoked.",
    price: 429.00,
    category: "rajahmundry-taluka",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "t8",
    name: "VISTARAKU POTLAM KODI VEPUDU",
    description: "Tender chicken pieces tossed in Guntur chili masala, wrapped inside a traditional vistaraku leaf parcel and slow-roasted.",
    price: 459.00,
    category: "rajahmundry-taluka",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true,
    image: realBiryaniImg
  },
  {
    id: "t9",
    name: "KARA KARA CHICKEN",
    description: "Ultra-crunchy fried chicken morsels seasoned with fiery spicy Godavari karam & fried curry leaves.",
    price: 459.00,
    category: "rajahmundry-taluka",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "t10",
    name: "RAJAHMUNDRY KODI REKKALU",
    description: "Crispy chicken wings tossed in Rajahmundry special sweet & spicy chili garlic glaze.",
    price: 459.00,
    category: "rajahmundry-taluka",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "t11",
    name: "BALISINA KODI KEBAB",
    description: "Succulent boneless chicken thighs marinated in cream, cashew paste, green chili & malai tandoori smoked.",
    price: 479.00,
    category: "rajahmundry-taluka",
    isVeg: false
  },
  {
    id: "t12",
    name: "POTLAM KODI KABAB",
    description: "Charcoal grilled chicken kebabs wrapped in leaf parcels with rich ghee & green chili marinade.",
    price: 479.00,
    category: "rajahmundry-taluka",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "t13",
    name: "VISTARAKU POTLAM MAMSAM VEPUDU",
    description: "Slow-cooked tender mutton chunks tossed in roasted spice masala, wrapped in vistaraku leaf and pan-seared in pure ghee.",
    price: 569.00,
    category: "rajahmundry-taluka",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "t14",
    name: "NETHI MAMSAM VEPUDU",
    description: "Boneless mutton cooked in rich pure buffalo ghee with shallots, crushed pepper & Godavari karam.",
    price: 579.00,
    category: "rajahmundry-taluka",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "t15",
    name: "LAMB CHOPS",
    description: "Charcoal grilled tender lamb ribs marinated in crushed black pepper, cloves, and ginger garlic masala.",
    price: 569.00,
    category: "rajahmundry-taluka",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "t16",
    name: "ARITAKU FISH FRY",
    description: "Fresh river fish slathered in spicy Andhra chili masala, wrapped in banana leaf and shallow fried to perfection.",
    price: 549.00,
    category: "rajahmundry-taluka",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true,
    image: realFishImg
  },
  {
    id: "t17",
    name: "RAJAHMUNDRY FISH FRY B/L",
    description: "Boneless fish fillets marinated in home-ground spice paste and crispy fried till golden brown.",
    price: 549.00,
    category: "rajahmundry-taluka",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "t18",
    name: "GODAVARI ROYYALA VEPUDU",
    description: "Fresh Godavari river prawns wok-tossed with caramelized onions, curry leaves & black pepper roast.",
    price: 569.00,
    category: "rajahmundry-taluka",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "t19",
    name: "TANDOORI KORRAMENU",
    description: "Whole fresh Korrameenu fish marinated in royal tandoori spices and charcoal roasted in the clay oven.",
    price: 899.00,
    category: "rajahmundry-taluka",
    isVeg: false,
    isChefSpecial: true,
    image: realCocktailImg
  }
];

export const EVENTS = [
  {
    id: "e1",
    title: "Retro Telugu Night & Acoustic Band",
    date: "Every Friday • 8:00 PM Onwards",
    badge: "WEEKLY NIGHT",
    desc: "Live acoustic performances of evergreen Telugu classics paired with rooftop cocktails.",
    description: "Live acoustic performances of evergreen Telugu classics paired with rooftop cocktails.",
    category: "music"
  },
  {
    id: "e2",
    title: "Live IPL Screening on Big Screen",
    date: "Match Days • 7:30 PM Onwards",
    badge: "SPORTS SCREENING",
    desc: "High-energy stadium vibe with rooftop projectors, craft beer buckets & spicy starters.",
    description: "High-energy stadium vibe with rooftop projectors, craft beer buckets & spicy starters.",
    category: "sports"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Siddharth Verma",
    rating: 5,
    date: "2 days ago",
    comment: "The Vistaraku Potlam Mamsam Vepudu and Rajahmundry Kodi Rekkalu are absolute perfection! Ambience on the 5th floor rooftop is unmatched in Kompally.",
    source: "Google Reviews",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r2",
    name: "Ananya Rao",
    rating: 5,
    date: "1 week ago",
    comment: "Pandumirchi Veg Sticks & Aritaku Fish Fry are super authentic! Excellent bar menu and cocktail collection.",
    source: "Zomato",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];
