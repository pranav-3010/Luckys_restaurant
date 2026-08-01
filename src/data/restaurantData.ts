import type { MenuItem, Review, FAQItem } from '../types';
import realBiryaniImg from '../assets/real_mutton_curry_biryani.jpg';
import realTandooriImg from '../assets/real_tandoori_starter.jpg';
import realFishImg from '../assets/real_aritaku_fish_parcels.jpg';
import realCocktailImg from '../assets/real_bar_cocktail_drink.jpg';
import heroImg from '../assets/co_rajahmundry_hero.jpg';

export const RESTAURANT_INFO = {
  name: "C/o Rajahmundry Kitchen and Bar",
  teluguName: "C / ఓ రాజమండ్రి కిచెన్ అండ్ బార్",
  rating: 4.5,
  reviewCount: 948,
  tagline: "Authentic Godavari Flavors & Rooftop Bar Vibe",
  address: "5th Floor, Santa Sriram Estates, Kompally, Hyderabad, Telangana 500067",
  plusCode: "GF7H+GP Hyderabad, Telangana",
  phone: "082228 66693",
  phoneSecondary: "+91 82228 66693",
  whatsapp: "918222866693",
  email: "contact@rajahmundrykitchenbar.com",
  hours: "Open Daily: 12:00 PM – 12:00 AM Midnight",
  costForTwo: "₹1,000 – ₹1,400 for two people (With Bar)",
  heroImage: heroImg,
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.9687452841!2d78.4820!3d17.5350!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f35a0000001%3A0x6300863028!2sKompally%2C%20Hyderabad%2C%20Telangana%20500067!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  services: ["Dine-in", "Takeaway", "No-contact Delivery", "Rooftop 5th Floor Seating", "Cocktails & Craft Bar", "Table Reservations"]
};

export const MENU_ITEMS: MenuItem[] = [
  // SIGNATURE COOKER PULAO
  {
    id: "p1",
    name: "Rajahmundry Mutton Cooker Pulao & Curry",
    description: "Our #1 best-selling signature dish! Tender tenderloin mutton cooked in a pressure cooker with ghee, green chilies, and aromatic Godavari spices, served with Biryani & Salan.",
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
    description: "Pressure-cooked bone chicken seasoned with fresh curry leaves, caramelized onions, and homemade pulao masala.",
    price: 390,
    category: "cooker-pulao",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },

  // SEAFOOD STARTERS
  {
    id: "s1",
    name: "Aritaku Chepala Fry (Banana Leaf Fish Parcels)",
    description: "Fresh Korrameenu fish marinated in spicy Andhra red masala, wrapped tightly in toasted banana leaf parcels and pan grilled.",
    price: 520,
    category: "seafood",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true,
    image: realFishImg
  },
  {
    id: "s2",
    name: "Loose Prawns Fry",
    description: "Crispy batter-fried prawns tossed with green chilies, garlic, and curry leaves.",
    price: 440,
    category: "seafood",
    isVeg: false,
    isSpicy: true
  },

  // APPETIZERS & STARTERS
  {
    id: "a1",
    name: "Tandoori Chicken Leg Starter",
    description: "Charcoal grilled juicy chicken leg marinated in roasted spices, served with fresh green mint chutney and onion slice on a custom ceramic plate.",
    price: 360,
    category: "starters",
    isVeg: false,
    isChefSpecial: true,
    image: realTandooriImg
  },
  {
    id: "a2",
    name: "Mutton Marag Soup",
    description: "Rich, velvety Hyderabadi mutton bone soup infused with black pepper, almonds, and cashew paste.",
    price: 260,
    category: "starters",
    isVeg: false,
    isChefSpecial: true
  },

  // BAR & COCKTAILS
  {
    id: "b1",
    name: "C/o Rajahmundry Layered Craft Cocktail",
    description: "Signature rooftop cocktail featuring layered tropical citrus, spiced rum, hibiscus foam, and dehydrated orange garnish.",
    price: 450,
    category: "bar-specialties",
    isVeg: true,
    isChefSpecial: true,
    image: realCocktailImg
  },
  {
    id: "b2",
    name: "Kompally Craft Mocktail",
    description: "Refreshing green apple syrup, fresh mint leaves, lime juice, and sparkling tonic water.",
    price: 220,
    category: "bar-specialties",
    isVeg: true
  },

  // DESSERTS
  {
    id: "d1",
    name: "Apricot Delight",
    description: "Rich layered sponge cake topped with stewed apricotes, fresh rabri cream, and sliced almonds.",
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
    ownerResponse: "Thank you, Sameera Sindiri, for your wonderful 5-star review! We're thrilled that your first visit was such a memorable one. It's fantastic to know you loved our starters, main course, and desserts!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r2",
    name: "vj yadala",
    rating: 5,
    date: "2 months ago",
    comment: "I had a wonderful experience here! The food was absolutely delicious and served fresh. What really stood out, though, was the service—the staff was attentive, friendly, and made us feel very welcome.",
    source: "Google Reviews",
    ownerResponse: "Dear VJ Yadala, Thank you for your wonderful feedback and 5-star rating! We are delighted to hear you enjoyed the food and our hospitality.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r3",
    name: "Mounica Gupta",
    rating: 4,
    date: "3 months ago",
    comment: "Decent place with decent food and nice 5th floor rooftop ambience. Excellent cooker pulao and aritaku fish!",
    source: "Google Reviews",
    ownerResponse: "Dear Mounica garu, Thank you for your detailed feedback and for rating our food positively!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "Where is C/o Rajahmundry Kitchen and Bar located?",
    answer: "We are located on the 5th Floor, Santa Sriram Estates, Kompally, Hyderabad, Telangana 500067."
  },
  {
    id: "f2",
    question: "Do you serve alcohol and craft cocktails?",
    answer: "Yes! We operate a full-service bar featuring signature cocktails, spirits, chilled beers, and non-alcoholic mocktails on our 5th-floor rooftop lounge."
  }
];
