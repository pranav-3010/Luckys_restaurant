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
    plusCode: "GF7H+GP Hyderabad, Telangana",
    phonePrimary: "082228 66693",
    phoneSecondary: "+91 82228 66693",
    whatsapp: "918222866693",
    hours: "Open Daily: 12:00 PM – 12:00 AM Midnight",
    costForTwo: "₹1,000 – ₹1,400 for two (with Bar)",
    zomatoUrl: "https://www.zomato.com/hyderabad",
    swiggyUrl: "https://www.swiggy.com/city/hyderabad",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.9687452841!2d78.4820!3d17.5350!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f35a0000001%3A0x6300863028!2sKompally%2C%20Hyderabad%2C%20Telangana%20500067!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    isMainBranch: true,
  }
];

export const RESTAURANT_INFO = {
  name: "C/o Rajahmundry Kitchen and Bar",
  teluguName: "C / ఓ రాజమండ్రి కిచెన్ అండ్ బార్",
  tagline: "Godavari Ruchulu. Rooftop Bar Vibe.",
  taglineEN: "Godavari Ruchulu. Rooftop Bar Vibe.",
  taglineTE: "గోదావరి రుచులు • రూఫ్‌టాప్ బార్",
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
  { id: 'all', labelEN: 'All Specialties', labelTE: 'అన్నీ' },
  { id: 'cooker-pulao', labelEN: 'Katti Lanti Cooker Pulaos', subtitle: 'Signature Pressure Cooker Specials', labelTE: 'కుక్కర్ పులావ్స్' },
  { id: 'seafood', labelEN: 'Godavari Chepala Swargam', subtitle: 'Seafood & Banana Leaf Delicacies', labelTE: 'చేపలు & రొయ్యలు' },
  { id: 'starters', labelEN: 'Karakara Mudhha & Street Small Plates', subtitle: 'Fiery Starters & Bandi Specials', labelTE: 'స్టార్టర్స్' },
  { id: 'curries', labelEN: 'Katha Vintara - Main Course', subtitle: 'Regional Classics & Gravies', labelTE: 'కర్రీస్ & మెయిన్ కోర్స్' },
  { id: 'bar-specialties', labelEN: 'Mahaa Mandapam - Bar & Drinks', subtitle: 'Craft Cocktails & Spirits', labelTE: 'బార్ & కాక్‌టైల్స్' },
  { id: 'desserts', labelEN: 'Kavitha Sweets', subtitle: 'Royal Desserts & Kulfi', labelTE: 'స్వీట్స్ & డెసర్ట్స్' },
];

export const MENU_ITEMS: MenuItem[] = [
  // COOKER PULAO
  {
    id: "p1",
    name: "Rajahmundry Mutton Cooker Pulao",
    description: "Our legendary bestseller! Tender mutton pieces pressure-cooked with ghee, green chilies, onions & homemade Godavari masala. Served with Mirchi Ka Salan and Raita.",
    price: 460,
    category: "cooker-pulao",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true,
    image: realBiryaniImg
  },
  {
    id: "p2",
    name: "Special Chicken Cooker Pulao",
    description: "Bone-in chicken slow-cooked in a pressure cooker with freshly pounded coriander, curry leaves, and aromatics.",
    price: 390,
    category: "cooker-pulao",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "p3",
    name: "Gongura Royyala (Prawns) Cooker Pulao",
    description: "Tangy Andhra sorrel leaves (Gongura) tossed with fresh Bay prawns and pressure-cooked spiced rice.",
    price: 480,
    category: "cooker-pulao",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },

  // SEAFOOD
  {
    id: "s1",
    name: "Aritaku Chepala Fry (Banana Leaf Fish)",
    description: "Whole fresh Korrameenu fish slathered in fiery Andhra red chili masala, sealed in a toasted banana leaf parcel and pan-grilled.",
    price: 520,
    category: "seafood",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true,
    image: realFishImg
  },
  {
    id: "s2",
    name: "Godavari Royyala Vepudu (Prawn Fry)",
    description: "Juicy prawns wok-tossed with crushed pepper, caramelized onions, curry leaves & ghee.",
    price: 440,
    category: "seafood",
    isVeg: false,
    isSpicy: true
  },

  // STARTERS
  {
    id: "a1",
    name: "Tandoori Chicken Leg Starter",
    description: "Whole chicken leg marinated overnight in roasted spices and charcoal grilled, served with fresh mint chutney & lemon.",
    price: 360,
    category: "starters",
    isVeg: false,
    isChefSpecial: true,
    image: realTandooriImg
  },
  {
    id: "a2",
    name: "Mutton Marag Soup",
    description: "Velvety Hyderabadi mutton bone broth simmering with black pepper, almonds, and cashew paste.",
    price: 260,
    category: "starters",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "a3",
    name: "Kodi Vepudu (Fiery Andhra Chicken Fry)",
    description: "Dry crispy bone-in chicken fried with crushed green chilies, coriander seeds, and curry leaves.",
    price: 380,
    category: "starters",
    isVeg: false,
    isSpicy: true
  },

  // CURRIES & COMBOS
  {
    id: "c1",
    name: "Bagara Rice with Andhra Chicken Curry",
    description: "Fragrant mint-infused Bagara rice paired with authentic spicy Godavari chicken gravy.",
    price: 380,
    category: "curries",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "c2",
    name: "Natukodi Pulusu (Country Chicken Curry)",
    description: "Country chicken slow-simmered in tangy tamarind, shallot, and roasted spice gravy.",
    price: 450,
    category: "curries",
    isVeg: false,
    isSpicy: true
  },

  // BAR
  {
    id: "b1",
    name: "Godavari Sunset Craft Cocktail",
    description: "Signature layered rooftop cocktail with spiced rum, tropical citrus, hibiscus foam, and dehydrated orange wheel.",
    price: 450,
    category: "bar-specialties",
    isVeg: true,
    isChefSpecial: true,
    image: realCocktailImg
  },
  {
    id: "b2",
    name: "Andhra Chili Whiskey Sour",
    description: "Bourbon whiskey, fresh lemon juice, egg white foam, and a dash of smoked Andhra chili syrup.",
    price: 480,
    category: "bar-specialties",
    isVeg: true,
    isChefSpecial: true
  },

  // DESSERTS
  {
    id: "d1",
    name: "Apricot Delight",
    description: "Layered sponge cake with stewed apricots, rabri cream, and silver leaf almonds.",
    price: 180,
    category: "desserts",
    isVeg: true,
    isChefSpecial: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Sameera Sindiri",
    rating: 5,
    date: "a month ago",
    comment: "Visited for the first time .. food is fabulous.. must try 😋. Starters, main course and desert everything was top notch..",
    source: "Google Reviews",
    ownerResponse: "Thank you, Sameera Sindiri, for your wonderful 5-star review! We're thrilled that your first visit was such a memorable one.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r2",
    name: "vj yadala",
    rating: 5,
    date: "2 months ago",
    comment: "I had a wonderful experience here! The food was absolutely delicious and served fresh. What really stood out was the service—staff was attentive & friendly.",
    source: "Google Reviews",
    ownerResponse: "Dear VJ Yadala, Thank you for your wonderful feedback and 5-star rating!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r3",
    name: "Mounica Gupta",
    rating: 4,
    date: "3 months ago",
    comment: "Decent place with great food and nice 5th floor rooftop ambiance. Excellent cooker pulao and aritaku fish!",
    source: "Google Reviews",
    ownerResponse: "Dear Mounica garu, Thank you for your detailed feedback and positive rating!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  }
];

export const EVENTS = [
  {
    id: "e1",
    title: "IPL Live Match Screening & Chilled Beer Bucket",
    date: "Every Evening 7:30 PM",
    desc: "Catch live matches on our giant 5th-floor rooftop LED projector screen with cold beers & spicy starters.",
    badge: "Sports Night"
  },
  {
    id: "e2",
    title: "Sunday Godavari Cooker Pulao Feast",
    date: "Sundays 12:00 PM – 4:00 PM",
    desc: "Unlimited refills of authentic Cooker Pulao, Gongura Royyalu, and Apricot Delight.",
    badge: "Weekend Brunch"
  },
  {
    id: "e3",
    title: "Retro Telugu Vinyl & Live Acoustic Nights",
    date: "Fridays & Saturdays 8:00 PM",
    desc: "Nostalgic Telugu classics performed live with handcrafted rooftop fusion cocktails.",
    badge: "Live Music"
  }
];
