import type { MenuItem, Review } from '../types';
import realBiryaniImg from '../assets/luckys_biryani_feast.jpg';
import realTandooriImg from '../assets/luckys_starter_platter.jpg';
import realFishImg from '../assets/luckys_angara_chicken_platter.jpg';
import luckysMandiPlatterImg from '../assets/luckys_mandi_platter.jpg';
import heroImg from '../assets/luckys_exterior_facade.jpg';

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
  mapsDirectUrl: string;
  isMainBranch?: boolean;
}

export const BRANCHES: LocationBranch[] = [
  {
    id: "suchitra",
    name: "Lucky’s restaurant Suchitra",
    area: "Suchitra, Hyderabad",
    address: "84a, Suchitra Rd, Suchitra, Vennala Gadda, Quthbullapur, Hyderabad, Telangana 500067 (Opp. to HDFC Bank)",
    plusCode: "GF2F+3Q Hyderabad, Telangana",
    phonePrimary: "+91 96426 04015",
    phoneSecondary: "+91 96426 04016",
    whatsapp: "919642604015",
    hours: "11:00 AM – 1:00 AM (Closes 1 AM)",
    costForTwo: "₹400 for two (₹200–400 per person)",
    zomatoUrl: "https://www.zomato.com",
    swiggyUrl: "https://www.swiggy.com",
    mapsDirectUrl: "https://www.google.com/maps/place/Lucky%E2%80%99s+restaurant+Suchitra/@17.5001385,78.4744327,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb910068cd5611:0x56856c26632a8b7d!8m2!3d17.5001385!4d78.4744327!16s%2Fg%2F11vzdst8lc",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.869719329712!2d78.4744327!3d17.5001385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910068cd5611%3A0x56856c26632a8b7d!2sLucky%E2%80%99s%20restaurant%20Suchitra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    isMainBranch: true
  }
];

export const RESTAURANT_INFO = {
  name: "Lucky’s restaurant Suchitra",
  branchName: "Suchitra Branch",
  tagline: "Authentic Hyderabadi Biryani, Smoky Angara Kababs & Mandi",
  taglineEN: "Authentic Hyderabadi Biryani, Smoky Angara Kababs & Mandi",
  taglineTE: "లక్కీస్ రెస్టారెంట్ - సుచిత్ర | బిర్యానీ, అంగారా కబాబ్స్ & మండి",
  teluguName: "లక్కీస్ రెస్టారెంట్ సుచిత్ర",
  description: "Experience the magic at Lucky’s restaurant Suchitra! From mouthwatering smoky Angara Kababs and Mutton Juicy Mandi to authentic Hyderabadi Chicken Biryani and Irani Chai.",
  story: "Craving something truly delicious? Experience the magic at Lucky’s restaurant Suchitra with our mouthwatering Angara Kabab! Perfectly grilled, smoky, and juicy, our signature kebabs, Mandi, and Hyderabadi Biryanis transform your dining experience into a flavor-packed feast. Located near Suchitra Opp to HDFC Bank.",
  rating: 3.9,
  reviewCount: 428,
  address: BRANCHES[0].address,
  plusCode: BRANCHES[0].plusCode,
  phone: BRANCHES[0].phonePrimary,
  phoneSecondary: BRANCHES[0].phoneSecondary,
  whatsapp: BRANCHES[0].whatsapp,
  hours: BRANCHES[0].hours,
  costForTwo: BRANCHES[0].costForTwo,
  googleMapsEmbed: BRANCHES[0].mapsEmbedUrl,
  googleMapsDirectUrl: BRANCHES[0].mapsDirectUrl,
  heroImage: heroImg,
  instagramUrl: "https://www.instagram.com",
  facebookUrl: "https://facebook.com",
};

export const MENU_CATEGORIES = [
  { id: 'all', labelEN: 'All Items', labelTE: 'అన్నీ' },
  // ARABIAN MANDI CATEGORIES (Exclusively shown in ARABIAN MANDI tab)
  { id: 'chicken-mandi', labelEN: 'Chicken Mandi Specials', subtitle: 'Al Faham, Fried, Masala, Juicy, Broasted & BBQ Mandis', labelTE: 'చికెన్ మండి' },
  { id: 'mutton-mandi', labelEN: 'Mutton Mandi Specials', subtitle: 'Turkish, Ghee Roast, Fried, Juicy & Afghani Mutton Mandis', labelTE: 'మటన్ మండి' },
  { id: 'prawns-mandi', labelEN: 'Prawns Mandi Specials', subtitle: 'Fried Prawns Mandi Half & Full Platters', labelTE: 'ప్రాన్స్ మండి' },
  { id: 'fish-mandi', labelEN: 'Fish Mandi Specials', subtitle: 'Crispy Tawa Fried Fish Mandi', labelTE: 'ఫిష్ మండి' },

  // MENU SECTION CATEGORIES (Exclusively shown in MENU tab)
  { id: 'starters', labelEN: 'Starters', subtitle: 'Crispy Veg, Non-Veg & Tandoori Kabab Starters', labelTE: 'స్టార్టర్స్' },
  { id: 'curries', labelEN: 'Curries', subtitle: 'Dal, Paneer & Rich Hyderabadi Non-Veg Gravies', labelTE: 'కర్రీస్' },
  { id: 'fried-rice-noodles', labelEN: 'Fried Rice And Noodles', subtitle: 'Hakka Noodles, Schezwan & Special Fried Rice', labelTE: 'ఫ్రైడ్ రైస్ & నూడుల్స్' },
  { id: 'soup', labelEN: 'Soup', subtitle: 'Hot & Sour, Manchow & Sweet Corn Soups', labelTE: 'సూప్' },
  { id: 'zafrani-biryani', labelEN: 'Zafrani Biryani', subtitle: 'Authentic Hyderabadi Dum & Fry Piece Biryanis', labelTE: 'జాఫ్రానీ బిర్యానీ' },
  { id: 'shawarma-french-fries', labelEN: 'Shawarma And French Fries', subtitle: 'Chicken 65 Shawarma, Special Rolls & Fries', labelTE: 'షవర్మా & ఫ్రెంచ్ ఫ్రైస్' },
  { id: 'roti-naan', labelEN: 'Roti / Naan', subtitle: 'Tandoori Roti, Butter Naan, Paratha & Kulcha', labelTE: 'రొట్టి / నాన్' },
  { id: 'salads', labelEN: 'Salads', subtitle: 'Green Salad & Onion Salad', labelTE: 'సలాడ్స్' },
  { id: 'fish', labelEN: 'Fish', subtitle: 'Fish Pakoda & Fish Tikka Kebab', labelTE: 'ఫిష్' },
  { id: 'combos', labelEN: 'Combos', subtitle: 'High Protein Tikka & Salad Fuel Combos', labelTE: 'కాంబోస్' },
  { id: 'haleem', labelEN: 'Haleem', subtitle: 'Hyderabadi Special Mutton & Chicken Haleem', labelTE: 'హలీమ్' },
  { id: 'ice-cream', labelEN: 'Ice Cream', subtitle: 'Butterscotch, Chocolate & Vanilla Scoop', labelTE: 'ఐస్ క్రీమ్' },
  { id: 'desserts', labelEN: 'Desserts', subtitle: 'Apricot Delight, Double Ka Meetha & Gulab Jamun', labelTE: 'డెజర్ట్స్' },
];

export const MENU_ITEMS: MenuItem[] = [
  // LUCKY'S SIGNATURE SPECIALS (ANGARA KABAB, BANJARA KABAB, MANDI)
  {
    id: "l1",
    name: "LUCKY’S SPECIAL ANGARA KABAB",
    description: "Chef's signature smoky, juicy Angara Kabab marinated in secret red spice blend, charcoal grilled & served with mint chutney.",
    price: 449.00,
    category: "starters",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true,
    image: realTandooriImg
  },
  {
    id: "l2",
    name: "CHICKEN BANJARA KEBAB (8 PIECES)",
    description: "Eight juicy boneless chicken morsels marinated in coriander, mint, green chili & tandoori smoked.",
    price: 429.00,
    category: "starters",
    isVeg: false,
    isChefSpecial: true
  },
  // ==================== ARABIAN MANDI SPECIALS ====================
  // 1. CHICKEN AL FAHAM MANDI
  {
    id: "mandi-alfaham-1",
    name: "Chicken Al Faham Mandi [1 Piece]",
    description: "Arabian Mandi rice topped with 1 piece of smoky charcoal-grilled Al Faham chicken, cashews, raisins, mayonnaise & spicy Mandi chutney.",
    price: 453.60,
    category: "chicken-mandi",
    isVeg: false,
    isChefSpecial: true,
    image: luckysMandiPlatterImg
  },
  {
    id: "mandi-alfaham-2",
    name: "Chicken Al Faham Mandi [2 Pieces]",
    description: "Arabian Mandi rice served with 2 pieces of charcoal-grilled Al Faham chicken, nuts, garnishes & signature Mandi soup.",
    price: 838.80,
    category: "chicken-mandi",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "mandi-alfaham-3",
    name: "Chicken Al Faham Mandi [3 Pieces]",
    description: "Arabian Mandi rice feast with 3 pieces of smoky Al Faham chicken, roasted cashews, fried onions & spicy chutney (Serves 3).",
    price: 1213.20,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-alfaham-4",
    name: "Chicken Al Faham Mandi [4 Pieces]",
    description: "Grand Arabian Mandi platter with 4 full pieces of charcoal Al Faham chicken, extra Mandi rice, soup & accompaniments (Serves 4).",
    price: 1710.00,
    category: "chicken-mandi",
    isVeg: false
  },

  // 2. MUTTON TURKISH MANDI
  {
    id: "mandi-mutton-turkish-1",
    name: "Mutton Turkish Mandi [1 Piece]",
    description: "Authentic Turkish style spiced slow-roasted tender mutton shank served over aromatic long-grain Mandi rice.",
    price: 606.00,
    category: "mutton-mandi",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "mandi-mutton-turkish-2",
    name: "Mutton Turkish Mandi [2 Pieces]",
    description: "Two pieces of succulent Turkish spiced mutton shanks over fragrant Mandi rice with cashews, raisins & spicy soup.",
    price: 1075.20,
    category: "mutton-mandi",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "mandi-mutton-turkish-3",
    name: "Mutton Turkish Mandi [3 Pieces]",
    description: "Three tender Turkish mutton shanks served over a large platter of Mandi rice with garlic dip & Mandi gravy (Serves 3).",
    price: 1533.60,
    category: "mutton-mandi",
    isVeg: false
  },
  {
    id: "mandi-mutton-turkish-4",
    name: "Mutton Turkish Mandi [4 Pieces]",
    description: "Royal Turkish Mutton Mandi platter featuring 4 slow-cooked shanks, aromatic basmati rice & festive garnishes (Serves 4).",
    price: 1999.20,
    category: "mutton-mandi",
    isVeg: false
  },

  // 3. FRIED CHICKEN MANDI
  {
    id: "mandi-fried-chicken-1",
    name: "Fried Chicken Mandi [1 Piece]",
    description: "Crispy golden fried marinated chicken piece served over spiced Mandi basmati rice with fried onions & gravy.",
    price: 412.80,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-fried-chicken-2",
    name: "Fried Chicken Mandi [2 Pieces]",
    description: "Two crispy golden fried chicken pieces served over aromatic Mandi rice with cashews & hot Mandi soup.",
    price: 812.40,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-fried-chicken-3",
    name: "Fried Chicken Mandi [3 Pieces]",
    description: "Three crispy fried chicken pieces over a generous portion of Mandi rice with salad & mayonnaise dip.",
    price: 1078.80,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-fried-chicken-4",
    name: "Fried Chicken Mandi [4 Pieces]",
    description: "Platter of Mandi rice served with 4 crunchy fried chicken pieces, roasted nuts & signature Mandi sauces.",
    price: 1318.80,
    category: "chicken-mandi",
    isVeg: false
  },

  // 4. CHICKEN MASALA MANDI
  {
    id: "mandi-chicken-masala-1",
    name: "Chicken Masala Mandi [1 Piece]",
    description: "Tender chicken cooked in rich spicy Hyderabadi masalas served over aromatic Mandi rice.",
    price: 440.40,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-chicken-masala-2",
    name: "Chicken Masala Mandi [2 Pieces]",
    description: "Two pieces of masala spiced chicken served over fragrant Mandi basmati rice with gravy & soup.",
    price: 838.80,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-chicken-masala-3",
    name: "Chicken Masala Mandi [3 Pieces]",
    description: "Three masala marinated chicken pieces served over a Mandi rice platter with fried cashews & spicy chutney.",
    price: 1078.80,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-chicken-masala-4",
    name: "Chicken Masala Mandi [4 Pieces]",
    description: "Family platter of 4 masala chicken pieces over spiced Mandi rice with accompaniments.",
    price: 1558.80,
    category: "chicken-mandi",
    isVeg: false
  },

  // 5. MUTTON GHEE ROAST MANDI
  {
    id: "mandi-mutton-ghee-roast-1",
    name: "Mutton Ghee Roast Mandi [1 Piece]",
    description: "Melt-in-mouth mutton shank roasted in pure desi ghee & coastal aromatic spices served over Mandi rice.",
    price: 578.40,
    category: "mutton-mandi",
    isVeg: false,
    isChefSpecial: true
  },

  // 6. MUTTON FRIED MANDI
  {
    id: "mandi-mutton-fried-1",
    name: "Mutton Fried Mandi [1 Piece]",
    description: "Crispy spiced fried mutton piece served over aromatic Mandi basmati rice with cashews & gravy.",
    price: 550.80,
    category: "mutton-mandi",
    isVeg: false
  },
  {
    id: "mandi-mutton-fried-2",
    name: "Mutton Fried Mandi [2 Pieces]",
    description: "Two crispy fried mutton pieces served over Mandi rice with caramelized onions & spicy Mandi soup.",
    price: 1033.20,
    category: "mutton-mandi",
    isVeg: false
  },
  {
    id: "mandi-mutton-fried-3",
    name: "Mutton Fried Mandi [3 Pieces]",
    description: "Three spiced fried mutton pieces over a large Mandi rice platter with roasted nuts & garlic dip.",
    price: 1461.60,
    category: "mutton-mandi",
    isVeg: false
  },
  {
    id: "mandi-mutton-fried-4",
    name: "Mutton Fried Mandi [4 Pieces]",
    description: "Feast platter of 4 fried mutton pieces served over aromatic Mandi rice with full garnishes.",
    price: 1930.80,
    category: "mutton-mandi",
    isVeg: false
  },

  // 7. MUTTON JUICY MANDI
  {
    id: "mandi-mutton-juicy-1",
    name: "Mutton Juicy Mandi [1 Piece]",
    description: "Lucky's signature slow-steamed juicy mutton shank cooked with fragrant Arabian spices over Mandi rice.",
    price: 578.40,
    category: "mutton-mandi",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "mandi-mutton-juicy-2",
    name: "Mutton Juicy Mandi [2 Pieces]",
    description: "Two ultra-tender juicy mutton shanks over fragrant Mandi rice topped with cashews & raisins.",
    price: 1060.80,
    category: "mutton-mandi",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "mandi-mutton-juicy-3",
    name: "Mutton Juicy Mandi [3 Pieces]",
    description: "Three succulent juicy mutton shanks served over a Mandi rice platter with spicy chutney & soup.",
    price: 1489.20,
    category: "mutton-mandi",
    isVeg: false
  },
  {
    id: "mandi-mutton-juicy-4",
    name: "Mutton Juicy Mandi [4 Pieces]",
    description: "Grand family Mandi feast featuring 4 melt-in-mouth mutton shanks over aromatic Mandi rice.",
    price: 1930.80,
    category: "mutton-mandi",
    isVeg: false
  },

  // 8. CHICKEN JUICY MANDI
  {
    id: "mandi-chicken-juicy-1",
    name: "Chicken Juicy Mandi [1 Piece]",
    description: "Steamed tender juicy chicken leg piece infused with mild Arabian spices served over Mandi rice.",
    price: 412.80,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-chicken-juicy-2",
    name: "Chicken Juicy Mandi [2 Pieces]",
    description: "Two steamed juicy chicken pieces served over Mandi rice with roasted nuts & garlic sauce.",
    price: 854.40,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-chicken-juicy-3",
    name: "Chicken Juicy Mandi [3 Pieces]",
    description: "Three tender juicy chicken pieces over a Mandi rice platter served with spicy chutney & Mandi soup.",
    price: 1185.60,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-chicken-juicy-4",
    name: "Chicken Juicy Mandi [4 Pieces]",
    description: "Four juicy steamed chicken pieces served over a large Mandi basmati rice platter.",
    price: 1654.80,
    category: "chicken-mandi",
    isVeg: false
  },

  // 9. MUTTON AFGHANI MANDI
  {
    id: "mandi-mutton-afghani-1",
    name: "Mutton Afghani Mandi [1 Piece]",
    description: "Creamy cashew & black pepper marinated Afghani mutton shank slow-roasted over Mandi rice.",
    price: 514.80,
    category: "mutton-mandi",
    isVeg: false
  },
  {
    id: "mandi-mutton-afghani-2",
    name: "Mutton Afghani Mandi [2 Pieces]",
    description: "Two pieces of creamy Afghani spiced mutton shanks over fragrant Arabian Mandi rice.",
    price: 958.80,
    category: "mutton-mandi",
    isVeg: false
  },
  {
    id: "mandi-mutton-afghani-3",
    name: "Mutton Afghani Mandi [3 Pieces]",
    description: "Three creamy Afghani mutton shanks served over a Mandi rice platter with cashews & garlic dip.",
    price: 1318.80,
    category: "mutton-mandi",
    isVeg: false
  },
  {
    id: "mandi-mutton-afghani-4",
    name: "Mutton Afghani Mandi [4 Pieces]",
    description: "Platter of 4 Afghani mutton shanks served over aromatic Mandi basmati rice.",
    price: 1678.80,
    category: "mutton-mandi",
    isVeg: false
  },

  // 10. CHICKEN BROASTED MANDI
  {
    id: "mandi-chicken-broasted-1",
    name: "Chicken Broasted Mandi [1 Piece]",
    description: "Crispy pressure-fried broasted chicken piece served over spiced Arabian Mandi rice.",
    price: 442.80,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-chicken-broasted-2",
    name: "Chicken Broasted Mandi [2 Pieces]",
    description: "Two crunchy broasted chicken pieces served over Mandi basmati rice with garlic dip.",
    price: 838.80,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-chicken-broasted-3",
    name: "Chicken Broasted Mandi [3 Pieces]",
    description: "Three broasted chicken pieces over a Mandi rice platter with hot soup & condiments.",
    price: 1078.80,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-chicken-broasted-4",
    name: "Chicken Broasted Mandi [4 Pieces]",
    description: "Four crispy broasted chicken pieces served over a large Mandi rice platter.",
    price: 1390.80,
    category: "chicken-mandi",
    isVeg: false
  },

  // 11. CHICKEN BARBEQUE MANDI
  {
    id: "mandi-chicken-bbq-1",
    name: "Chicken Barbeque Mandi [1 Piece]",
    description: "Smoky sweet-spicy BBQ glazed chicken piece served over fragrant Mandi basmati rice.",
    price: 453.60,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-chicken-bbq-2",
    name: "Chicken Barbeque Mandi [2 Pieces]",
    description: "Two BBQ grilled chicken pieces served over Mandi rice with caramelized onions & dip.",
    price: 838.80,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-chicken-bbq-3",
    name: "Chicken Barbeque Mandi [3 Pieces]",
    description: "Three BBQ grilled chicken pieces over a Mandi rice platter with roasted cashews & chutney.",
    price: 1186.80,
    category: "chicken-mandi",
    isVeg: false
  },
  {
    id: "mandi-chicken-bbq-4",
    name: "Chicken Barbeque Mandi [4 Pieces]",
    description: "Four BBQ glazed chicken pieces served over a full Mandi basmati rice platter.",
    price: 1558.80,
    category: "chicken-mandi",
    isVeg: false
  },

  // 12. PRAWNS FRIED MANDI
  {
    id: "mandi-prawns-half",
    name: "Prawns Fried Mandi [Half, Serves 1]",
    description: "Golden fried marinated tiger prawns served over aromatic Mandi basmati rice with spicy chutney.",
    price: 550.80,
    category: "prawns-mandi",
    isVeg: false
  },
  {
    id: "mandi-prawns-full",
    name: "Prawns Fried Mandi [Full, Serves 3]",
    description: "Grand Mandi platter topped with crispy fried prawns, roasted cashews, fried onions & Mandi soup.",
    price: 1102.80,
    category: "prawns-mandi",
    isVeg: false,
    isChefSpecial: true
  },

  // 13. FRIED FISH MANDI
  {
    id: "mandi-fish-fried-1",
    name: "Fried Fish Mandi [1 Piece]",
    description: "Crispy tawa fried spiced fish fillet served over aromatic Arabian Mandi basmati rice.",
    price: 550.80,
    category: "fish-mandi",
    isVeg: false
  },

  // ==================== STARTERS ====================
  { id: "str-1", name: "Baby Corn Manchuria", description: "Crispy fried baby corn tossed in spicy Indo-Chinese manchurian sauce.", price: 315.60, category: "starters", isVeg: true },
  { id: "str-2", name: "Chilli Mushroom", description: "Fresh mushrooms tossed with bell peppers, green chilies & soy sauce.", price: 315.60, category: "starters", isVeg: true },
  { id: "str-3", name: "Chilli Paneer", description: "Cubes of cottage cheese wok-tossed with chili, garlic & peppers.", price: 315.60, category: "starters", isVeg: true },
  { id: "str-4", name: "Crispy Corn", description: "Crunchy sweet corn kernels fried & seasoned with pepper & herbs.", price: 315.60, category: "starters", isVeg: true },
  { id: "str-5", name: "Crispy Veg", description: "Assorted farm fresh vegetables fried crisp with aromatic spices.", price: 315.60, category: "starters", isVeg: true },
  { id: "str-6", name: "Gobi Manchuria", description: "Crispy cauliflower florets tossed in tangy Manchurian gravy.", price: 274.80, category: "starters", isVeg: true },
  { id: "str-7", name: "Mushroom Manchuria", description: "Crispy button mushrooms sautéed in garlic chili Manchurian sauce.", price: 238.00, category: "starters", isVeg: true },
  { id: "str-8", name: "Paneer Majestic", description: "Hyderabadi style dry paneer strips fried & cooked in yogurt & curry leaves.", price: 315.60, category: "starters", isVeg: true },
  { id: "str-9", name: "Paneer 65", description: "Spicy South Indian style deep-fried paneer with chili & curry leaves.", price: 315.60, category: "starters", isVeg: true },
  { id: "str-10", name: "Veg Manchurian", description: "Fried vegetable balls tossed in sweet, sour & spicy sauce.", price: 199.00, category: "starters", isVeg: true },
  { id: "str-11", name: "Veg Spring Roll", description: "Crispy pastry rolls stuffed with shredded vegetables & noodles.", price: 315.60, category: "starters", isVeg: true },
  { id: "str-12", name: "Chicken 65 Shawarma", description: "Spicy Chicken 65 wrapped in soft rumali bread with mayonnaise & pickled veggies.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-13", name: "Chicken 65", description: "Classic Indo-Chinese spicy deep-fried chicken quick snack.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-14", name: "Chicken 777", description: "Crispy fried chicken on the outside & succulent juicy on the inside.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-15", name: "Chicken Drumstick", description: "Crispy fried chicken drumsticks coated in sweet & spicy sauce.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-16", name: "Chicken Lollipop", description: "Crispy French-trimmed chicken wings tossed in garlic Szechuan sauce.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-17", name: "Chicken Majestic", description: "Thin chicken strips cooked in buttermilk, green chilies & mint.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-18", name: "Chicken Manchuria", description: "Tender chicken morsels tossed in tangy Manchurian garlic sauce.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-19", name: "Chicken Manchurian", description: "Crispy fried chicken pieces in slightly sweet, sour & hot Manchurian sauce.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-20", name: "Chicken Shawarma Salad", description: "Shredded chicken shawarma meat served over crisp fresh salad greens.", price: 226.80, category: "starters", isVeg: false },
  { id: "str-21", name: "Chicken Spring Roll [3 Pieces]", description: "Crispy fried rolls filled with seasoned minced chicken & vegetables.", price: 412.80, category: "starters", isVeg: false },
  { id: "str-22", name: "Chilli Chicken", description: "Crispy batter fried chicken tossed in spicy chili sauce with bell peppers.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-23", name: "Dragon Chicken", description: "Spicy & tangy cashew-rich dragon chicken stir-fried with red chilies.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-24", name: "Fried Chicken", description: "Crunchy golden fried marinated chicken pieces.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-25", name: "Ginger Chicken", description: "Yummy ginger flavored chicken stir-fry with soy & chili.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-26", name: "Golden Chicken", description: "Deep-fried golden battered chicken tenders served with chili dip.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-27", name: "Pepper Chicken", description: "South Indian style black pepper roasted spicy chicken.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-28", name: "Chicken Banjara Kebab [8 Pieces]", description: "Eight boneless chicken morsels marinated in green mint paste & tandoori grilled.", price: 619.20, category: "starters", isVeg: false, isChefSpecial: true },
  { id: "str-29", name: "Chicken Seekh Kebab [Half, 4 Pieces]", description: "Skewered spiced minced chicken kebabs cooked in charcoal clay oven.", price: 330.00, category: "starters", isVeg: false },
  { id: "str-30", name: "Chicken Tikka [Half, 4 Pieces]", description: "Classic tandoori spiced marinated chicken tikka pieces.", price: 315.60, category: "starters", isVeg: false },
  { id: "str-31", name: "Fish Tikka [Half]", description: "Succulent fish fillets marinated in tandoori masalas & grilled.", price: 315.60, category: "starters", isVeg: false },
  { id: "str-32", name: "Kalmi Kabab [Half, 2 Pieces]", description: "Tender chicken drumsticks marinated in rich cashew cream & spices.", price: 315.60, category: "starters", isVeg: false },
  { id: "str-33", name: "Murgh Malai Kabab [Half, 4 Pieces]", description: "Melt-in-mouth chicken tikka marinated in cream, cheese & cardamom.", price: 315.60, category: "starters", isVeg: false },
  { id: "str-34", name: "Prawns Tikka [Half, 10 Pieces]", description: "Ten juicy tiger prawns marinated in tandoori spices & roasted.", price: 330.00, category: "starters", isVeg: false },
  { id: "str-35", name: "Reshmi Chicken Kebab [Half, 4 Pieces]", description: "Silky smooth minced chicken kebabs favoured with saffron & white pepper.", price: 315.60, category: "starters", isVeg: false },
  { id: "str-36", name: "Tandoori Chicken", description: "Whole chicken leg & chest marinated in yogurt & Kashmiri chili, roasted in tandoor.", price: 427.20, category: "starters", isVeg: false },
  { id: "str-37", name: "Tangdi Kebab", description: "Juicy chicken drumsticks marinated in rich tandoori masalas.", price: 274.80, category: "starters", isVeg: false },
  { id: "str-38", name: "Egg Manchuria & Chilli", description: "Crispy boiled egg cubes tossed in spicy chili Manchurian sauce.", price: 238.00, category: "starters", isVeg: false },

  // ==================== CURRIES ====================
  { id: "cur-1", name: "Dal Fry", description: "Yellow lentils tempered with ghee, cumin seeds & garlic.", price: 260.40, category: "curries", isVeg: true },
  { id: "cur-2", name: "Dal Tadka", description: "Classic yellow dal with aromatic double tadka of mustard, garlic & red chilies.", price: 274.80, category: "curries", isVeg: true },
  { id: "cur-3", name: "Kadai Paneer", description: "Cottage cheese cooked with bell peppers, tomatoes & freshly pounded kadai spices.", price: 385.20, category: "curries", isVeg: true },
  { id: "cur-4", name: "Kaju Paneer Curry", description: "Rich cashew nut & cottage cheese curry cooked in creamy tomato onion gravy.", price: 481.20, category: "curries", isVeg: true },
  { id: "cur-5", name: "Malai Kofta Curry", description: "Fried paneer & potato dumplings simmered in rich creamy cashew gravy.", price: 550.80, category: "curries", isVeg: true },
  { id: "cur-6", name: "Paneer Butter Masala", description: "Cubes of paneer cooked in velvety rich butter tomato gravy.", price: 385.20, category: "curries", isVeg: true },
  { id: "cur-7", name: "Paneer Do Pyaza", description: "Paneer cooked with onions added in two stages for sweet aromatic crunch.", price: 385.20, category: "curries", isVeg: true },
  { id: "cur-8", name: "Paneer Tikka Masala", description: "Grilled tandoori paneer tikka simmered in spicy tomato gravy.", price: 508.80, category: "curries", isVeg: true },
  { id: "cur-9", name: "Afghani Chicken Curry", description: "Chicken cooked in rich creamy white cashew & poppy seed gravy with mild pepper.", price: 226.80, category: "curries", isVeg: false },
  { id: "cur-10", name: "Butter Chicken Masala", description: "Tender tandoori chicken cooked in silky smooth butter tomato gravy.", price: 214.80, category: "curries", isVeg: false },
  { id: "cur-11", name: "Chicken Achari", description: "Chicken curry infused with tangy pickling spices & green chilies.", price: 226.80, category: "curries", isVeg: false },
  { id: "cur-12", name: "Chicken Chatpata", description: "Spicy & tangy spicy chicken gravy with onion capsicum masala.", price: 214.80, category: "curries", isVeg: false },
  { id: "cur-13", name: "Chicken Fry", description: "Hyderabadi style dry roasted spicy chicken fry with curry leaves.", price: 226.80, category: "curries", isVeg: false },
  { id: "cur-14", name: "Chicken Lababdar", description: "Mughlai style chicken curry cooked with grated paneer & rich tomatoes.", price: 466.80, category: "curries", isVeg: false },
  { id: "cur-15", name: "Chicken Shahi Korma", description: "Royal chicken curry simmered in fragrant almond & cashew gravy.", price: 274.80, category: "curries", isVeg: false },
  { id: "cur-16", name: "Chicken Tikka Masala", description: "Smoky tandoori chicken tikka pieces in thick spicy gravy.", price: 286.80, category: "curries", isVeg: false },
  { id: "cur-17", name: "Dum Ka Chicken Curry", description: "Slow-cooked dum chicken curry in sealed pot with aromatic spices.", price: 238.80, category: "curries", isVeg: false },
  { id: "cur-18", name: "Egg Bhurji", description: "Spiced scrambled eggs cooked with chopped onions, tomatoes & green chilies.", price: 274.80, category: "curries", isVeg: false },
  { id: "cur-19", name: "Egg Masala Curries", description: "Hard-boiled eggs simmered in rich spicy onion tomato curry.", price: 274.80, category: "curries", isVeg: false },
  { id: "cur-20", name: "Hyderabadi Chicken Masala", description: "Traditional spicy Hyderabadi chicken gravy with roasted coconut & sesame.", price: 226.80, category: "curries", isVeg: false },
  { id: "cur-21", name: "Kadhai Chicken", description: "Chicken stir-fried with crushed spices, onions & capsicum.", price: 226.80, category: "curries", isVeg: false },
  { id: "cur-22", name: "Murgh Musallam", description: "Rich Mughlai whole chicken gravy cooked with minced meat & boiled eggs.", price: 286.80, category: "curries", isVeg: false },
  { id: "cur-23", name: "Telangana Chicken Curry", description: "Rustic spicy Telangana style chicken curry cooked with red chili paste.", price: 214.80, category: "curries", isVeg: false },

  // ==================== FRIED RICE AND NOODLES ====================
  { id: "fr-1", name: "Chicken Hakka Noodles", description: "Classic wok-tossed noodles with chicken strips & fresh vegetables.", price: 202.80, category: "fried-rice-noodles", isVeg: false },
  { id: "fr-2", name: "Chicken Soft Noodles", description: "Soft wheat noodles tossed with chicken, soy sauce & spring onions.", price: 202.80, category: "fried-rice-noodles", isVeg: false },
  { id: "fr-3", name: "Egg Noodles", description: "Wok-tossed noodles with scrambled eggs & crisp veggies.", price: 177.60, category: "fried-rice-noodles", isVeg: false },
  { id: "fr-4", name: "Mixed Non Veg Noodles [Chicken Prawn Egg]", description: "Loaded noodles tossed with chicken, prawns, egg & spicy sauces.", price: 228.00, category: "fried-rice-noodles", isVeg: false },
  { id: "fr-5", name: "Schezwan Veg Noodles", description: "Spicy Szechuan sauce tossed vegetable noodles.", price: 177.60, category: "fried-rice-noodles", isVeg: true },
  { id: "fr-6", name: "Veg Soft Noodles", description: "Stir-fried soft noodles with carrots, cabbage & bell peppers.", price: 150.00, category: "fried-rice-noodles", isVeg: true },
  { id: "fr-7", name: "Chicken Fried Rice [Serves 1]", description: "Aromatic basmati rice wok-fried with chicken, egg & dark soy.", price: 260.40, category: "fried-rice-noodles", isVeg: false },
  { id: "fr-8", name: "Curd Rice [Serves 1]", description: "Comforting South Indian rice mixed with fresh curd, mustard & curry leaves.", price: 228.00, category: "fried-rice-noodles", isVeg: true },
  { id: "fr-9", name: "Egg Fried Rice [Serves 1]", description: "Fluffy basmati rice tossed with scrambled egg & veggies.", price: 228.00, category: "fried-rice-noodles", isVeg: false },
  { id: "fr-10", name: "Jeera Rice [Serves 1]", description: "Fragrant long-grain basmati rice tempered with cumin seeds & ghee.", price: 260.40, category: "fried-rice-noodles", isVeg: true },
  { id: "fr-11", name: "Mix Non Veg Fried Rice [Serves 1, Chicken Prawn Egg]", description: "Deluxe fried rice loaded with chicken, juicy prawns & egg.", price: 260.40, category: "fried-rice-noodles", isVeg: false },
  { id: "fr-12", name: "Mix Veg Fried Rice [Serves 1]", description: "Basmati rice wok-fried with diced garden vegetables.", price: 232.80, category: "fried-rice-noodles", isVeg: true },
  { id: "fr-13", name: "Mutton Fried Rice [Serves 1]", description: "Flavorful fried rice tossed with tender mutton pieces.", price: 357.60, category: "fried-rice-noodles", isVeg: false },
  { id: "fr-14", name: "Schezwan Chicken Fried Rice [Serves 1]", description: "Spicy Schezwan sauce tossed chicken fried rice.", price: 274.80, category: "fried-rice-noodles", isVeg: false },
  { id: "fr-15", name: "Schezwan Veg Fried Rice [Serves 1]", description: "Fiery Schezwan sauce fried rice with farm vegetables.", price: 228.00, category: "fried-rice-noodles", isVeg: true },
  { id: "fr-16", name: "Veg Fried Rice [Serves 1]", description: "Classic vegetable fried rice seasoned with pepper.", price: 205.20, category: "fried-rice-noodles", isVeg: true },

  // ==================== SOUP ====================
  { id: "soup-1", name: "Cream Of Tomato Soup", description: "Rich creamy tomato soup served with golden buttered croutons.", price: 192.00, category: "soup", isVeg: true },
  { id: "soup-2", name: "Veg Hot & Sour Soup", description: "Spicy & sour broth with shredded vegetables, ginger & soy.", price: 192.00, category: "soup", isVeg: true },
  { id: "soup-3", name: "Veg Lemon Coriander Soup", description: "Refreshing clear vegetable broth flavoured with lemon juice & fresh cilantro.", price: 192.00, category: "soup", isVeg: true },
  { id: "soup-4", name: "Veg Manchow Soup", description: "Indo-Chinese garlic vegetable soup served with crispy fried noodles.", price: 192.00, category: "soup", isVeg: true },
  { id: "soup-5", name: "Veg Sweet Corn Soup", description: "Comforting thick soup made with sweet corn kernels & vegetables.", price: 192.00, category: "soup", isVeg: true },

  // ==================== ZAFRANI BIRYANI ====================
  { id: "bir-1", name: "Chicken Biryani [Jumbo, Serves 6]", description: "Grand jumbo pack Hyderabadi Dum Chicken Biryani served with gravy, raita & Double Ka Meetha.", price: 1309.20, category: "zafrani-biryani", isVeg: false, isChefSpecial: true, image: realBiryaniImg },
  { id: "bir-2", name: "Chicken Biryani [Single, Serves 1] With Double Ka Meetha", description: "Single portion Hyderabadi Chicken Dum Biryani served with sweet Double Ka Meetha dessert.", price: 398.40, category: "zafrani-biryani", isVeg: false },
  { id: "bir-3", name: "Chicken Dum Biryani [Serves 1]", description: "Traditional saffron infused Hyderabadi Chicken Dum Biryani with Mirchi Ka Salan.", price: 260.40, category: "zafrani-biryani", isVeg: false },
  { id: "bir-4", name: "Hyderabadi Chicken Dum Biryani [Family Pack, Serves 4]", description: "Family pack Hyderabadi Dum Chicken Biryani with boiled eggs & raita.", price: 922.80, category: "zafrani-biryani", isVeg: false, isChefSpecial: true },
  { id: "bir-5", name: "Hyderabadi Chicken Dum Biryani [Serves 1]", description: "Classic single portion Hyderabadi Dum Biryani with tender chicken piece.", price: 262.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-6", name: "Hyderabadi Zafrani Chicken Biryani [Full, Serves 1]", description: "Royal saffron Zafrani Dum Biryani cooked with pure ghee & secret aromatic spices.", price: 478.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-7", name: "Biryani Rice", description: "Aromatic basmati Dum Biryani rice cooked with saffron, ghee & whole spices.", price: 219.60, category: "zafrani-biryani", isVeg: true },
  { id: "bir-8", name: "Boneless Chicken Biryani [Full, Serves 1]", description: "Flavorful Dum Biryani rice served with boneless chicken masala pieces.", price: 442.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-9", name: "Chicken 65 Biryani [Serves 1]", description: "Aromatic Biryani rice topped with spicy deep-fried Chicken 65 pieces.", price: 310.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-10", name: "Chicken Biryani [Mini, Serves 1]", description: "Mini portion Hyderabadi Chicken Dum Biryani.", price: 298.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-11", name: "Chicken Fry Piece Biryani [Full, Serves 1]", description: "Hyderabadi Biryani rice served with crispy spicy fried chicken pieces.", price: 466.80, category: "zafrani-biryani", isVeg: false, isChefSpecial: true },
  { id: "bir-12", name: "Chicken Lollipop Biryani [Full, Serves 1]", description: "Dum Biryani rice topped with crispy fried chicken lollipops.", price: 466.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-13", name: "Chicken Mughlai Biryani [Serves 1]", description: "Boneless chicken Mughlai gravy & boiled egg served over Biryani rice.", price: 334.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-14", name: "Extra Chicken Piece Only [1 Piece]", description: "Single piece of tender Hyderabadi dum chicken.", price: 177.60, category: "zafrani-biryani", isVeg: false },
  { id: "bir-15", name: "Extra Mutton Dum Piece", description: "Single melt-in-mouth slow cooked Mutton dum piece.", price: 177.50, category: "zafrani-biryani", isVeg: false },
  { id: "bir-16", name: "Fish Biryani", description: "Biryani rice served with spiced tawa fried fish fillet.", price: 478.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-17", name: "Fish Biryani [Single, Serves 1]", description: "Single portion Fish Biryani.", price: 298.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-18", name: "Hyderabadi Mutton Biryani [Single, Serves 1]", description: "Single portion authentic Hyderabadi Dum Mutton Biryani.", price: 322.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-19", name: "Hyderabadi Mutton Dum Biryani [Family Pack, Serves 3]", description: "Family pack of tender Mutton Dum Biryani with raita & salan.", price: 1198.80, category: "zafrani-biryani", isVeg: false, isChefSpecial: true },
  { id: "bir-20", name: "Hyderabadi Mutton Dum Biryani [Full, Serves 1]", description: "Full portion succulent Mutton Dum Biryani.", price: 550.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-21", name: "Mixed Non Veg Biryani [Serves 2]", description: "Royal platter with boneless chicken, mutton & prawns biryani.", price: 579.60, category: "zafrani-biryani", isVeg: false, isChefSpecial: true },
  { id: "bir-22", name: "Mutton Fry Piece Biryani [Full, Serves 1]", description: "Biryani rice topped with spicy fried mutton pieces.", price: 586.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-23", name: "Mutton Keema Biryani [Full, Serves 1]", description: "Aromatic Biryani rice served with spicy minced mutton keema masala.", price: 598.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-24", name: "Mutton Keema Biryani [Single]", description: "Single portion spicy Mutton Keema Biryani.", price: 358.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-25", name: "Prawns Biryani [16 Pieces, Serves 2]", description: "Large prawns biryani platter with 16 spiced prawns.", price: 674.40, category: "zafrani-biryani", isVeg: false },
  { id: "bir-26", name: "Prawns Biryani [8 Pieces, Serves 1]", description: "Single portion Prawns Biryani with 8 prawns.", price: 398.40, category: "zafrani-biryani", isVeg: false },
  { id: "bir-27", name: "Prawns Biryani [Full, Serves 1]", description: "Full portion spiced Prawns Biryani.", price: 564.00, category: "zafrani-biryani", isVeg: false },
  { id: "bir-28", name: "Chicken Majestic Biryani [Full]", description: "Biryani rice served with spicy Chicken Majestic strips.", price: 598.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-29", name: "Mutton Biryani [Jumbo Pack]", description: "Jumbo pack Mutton Dum Biryani for 6 persons.", price: 1678.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-30", name: "Egg Biryani [Serves 1]", description: "Fluffy Biryani rice served with two spiced boiled eggs.", price: 238.80, category: "zafrani-biryani", isVeg: false },
  { id: "bir-31", name: "Egg Biryani [Full]", description: "Full portion Egg Dum Biryani.", price: 389.00, category: "zafrani-biryani", isVeg: false },
  { id: "bir-32", name: "Kaju Paneer Biryani [Serves 1]", description: "Aromatic Veg Biryani rice loaded with fried cashews & paneer cubes.", price: 346.80, category: "zafrani-biryani", isVeg: true },
  { id: "bir-33", name: "Paneer Biryani [Serves 1]", description: "Dum Biryani rice served with marinated paneer masala.", price: 334.80, category: "zafrani-biryani", isVeg: true },
  { id: "bir-34", name: "Veg Biryani [Family Pack, Serves 3]", description: "Family pack Veg Dum Biryani loaded with garden vegetables.", price: 799.20, category: "zafrani-biryani", isVeg: true },
  { id: "bir-35", name: "Veg Biryani [Full, Serves 1]", description: "Full portion vegetable Dum Biryani.", price: 442.80, category: "zafrani-biryani", isVeg: true },
  { id: "bir-36", name: "Veg Biryani [Serves 1]", description: "Single portion Veg Biryani.", price: 260.40, category: "zafrani-biryani", isVeg: true },
  { id: "bir-37", name: "Veg Pulao [Serves 1]", description: "Fragrant basmati rice cooked with whole green spices & veggies.", price: 260.40, category: "zafrani-biryani", isVeg: true },

  // ==================== SHAWARMA AND FRENCH FRIES ====================
  { id: "shw-1", name: "Extra Mayonnaise", description: "Creamy egg garlic mayonnaise dip.", price: 60.00, category: "shawarma-french-fries", isVeg: false },
  { id: "shw-2", name: "Chicken Shawarma Special", description: "Special rumali wrap filled with shaved grilled chicken & mayonnaise.", price: 249.00, category: "shawarma-french-fries", isVeg: false },
  { id: "shw-3", name: "French Fries Shawarma", description: "Crispy french fries stuffed inside chicken shawarma roll.", price: 205.20, category: "shawarma-french-fries", isVeg: false },
  { id: "shw-4", name: "French Fries [Medium]", description: "Crispy salted potato french fries.", price: 136.80, category: "shawarma-french-fries", isVeg: true },
  { id: "shw-5", name: "Grilled Chicken Shawarma With Salad", description: "Juicy grilled chicken shawarma wrap served with fresh side salad.", price: 229.00, category: "shawarma-french-fries", isVeg: false },
  { id: "shw-6", name: "Special Grilled Chicken 65 Shawarma", description: "Spicy Chicken 65 wrapped in shawarma bread.", price: 249.00, category: "shawarma-french-fries", isVeg: false },

  // ==================== ROTI / NAAN ====================
  { id: "rt-1", name: "Alu Paratha", description: "Whole wheat flatbread stuffed with spiced potato mash.", price: 69.00, category: "roti-naan", isVeg: true },
  { id: "rt-2", name: "Butter Roti", description: "Clay oven baked whole wheat roti brushed with butter.", price: 40.80, category: "roti-naan", isVeg: true },
  { id: "rt-3", name: "Gobi Paratha", description: "Tandoori flatbread stuffed with spiced grated cauliflower.", price: 69.00, category: "roti-naan", isVeg: true },
  { id: "rt-4", name: "Masala Kulcha", description: "Soft leavened bread stuffed with spicy potato & onion filling.", price: 69.00, category: "roti-naan", isVeg: true },
  { id: "rt-5", name: "Plain Kulcha", description: "Soft tandoori flatbread garnished with coriander.", price: 60.00, category: "roti-naan", isVeg: true },
  { id: "rt-6", name: "Plain Naan", description: "Classic tandoori refined flour naan.", price: 45.00, category: "roti-naan", isVeg: true },
  { id: "rt-7", name: "Tandoori Roti", description: "Traditional whole wheat bread baked in clay tandoor.", price: 30.00, category: "roti-naan", isVeg: true },

  // ==================== SALADS ====================
  { id: "sal-1", name: "Green Salad", description: "Fresh sliced cucumber, tomatoes, carrots, onions & lemon wedges.", price: 177.60, category: "salads", isVeg: true },
  { id: "sal-2", name: "Onion Salad", description: "Crisp sliced raw onions served with green chilies & lemon.", price: 177.60, category: "salads", isVeg: true },

  // ==================== FISH ====================
  { id: "fsh-1", name: "Fish Pakoda", description: "Crispy batter-fried spiced fish fritters served with mint chutney.", price: 550.80, category: "fish", isVeg: false, image: realFishImg },
  { id: "fsh-2", name: "Fish Tikka Kebab", description: "Tandoori marinated fish cubes grilled over charcoal coals.", price: 550.80, category: "fish", isVeg: false },

  // ==================== COMBOS ====================
  { id: "cmb-1", name: "Chicken Tikka [200 G] With Salad", description: "High protein meal combining 200g lean grilled chicken tikka with fresh fiber-rich salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-2", name: "Hariyali Chicken Tikka [200 G] With Salad", description: "200g green herb grilled chicken tikka served with crisp salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-3", name: "Lasooni Chicken Tikka [200 G] With Salad", description: "200g garlic-infused grilled chicken tikka paired with fresh salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-4", name: "Chicken Kasturi Tikka [200 G] With Salad", description: "Aromatic fenugreek marinated chicken tikka served with fresh salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-5", name: "Chicken Tikka [150 G] With 3 Eggs And Salad", description: "Protein pack of 150g grilled chicken tikka, 3 eggs & salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-6", name: "Hariyali Tikka [150 G] With 3 Eggs And Salad", description: "150g Hariyali chicken tikka, 3 protein-rich eggs & salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-7", name: "Lasooni Tikka [150 G] With 3 Eggs And Salad", description: "Garlic chicken tikka served with 3 eggs & crisp salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-8", name: "Chicken Tikka [2 Pcs] With Hariyali Tikka [2 Pcs] And Salad", description: "Duo of classic tikka & Hariyali tikka with fresh salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-9", name: "Chicken Tikka [2 Pcs] With Malai Tikka [2 Pcs] And Salad", description: "Classic grilled tikka & cream malai tikka served with salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-10", name: "Hariyali Tikka [2 Pcs] With Lasooni Tikka [2 Pcs] And Salad", description: "Herb tikka & garlic lasooni tikka served with salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-11", name: "Reshmi Kebab [2 Pcs] With Chicken Tikka [2 Pcs] And Salad", description: "Soft reshmi kebabs & chicken tikka paired with fresh salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-12", name: "Kasturi Tikka [2 Pcs] With Chicken Tikka [2 Pcs] And Salad", description: "Kasturi tikka & classic chicken tikka served with fresh salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-13", name: "Fish Tikka [200 G] With Salad", description: "200g grilled fish tikka served with fresh fiber-rich salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-14", name: "Ajwain Fish Tikka [200 G] With Salad", description: "Ajwain carom seed marinated grilled fish tikka with crisp salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-15", name: "Lasooni Fish Tikka [200 G] With Salad", description: "Garlic fish tikka paired with crisp refreshing salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-16", name: "Fish Tikka [150 G] With 3 Egg Whites And Salad", description: "Lean fish tikka served with 3 egg whites & fresh salad.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-17", name: "Chicken Tikka [200 G] With Salad And Lime Water", description: "Grilled chicken tikka served with salad & refreshing lime water.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-18", name: "Hariyali Chicken Tikka [200 G] With Salad And Lime Water", description: "Green herb chicken tikka paired with salad & lime water.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-19", name: "Lasooni Chicken Tikka [200 G] With Salad And Lime Water", description: "Garlic chicken tikka served with salad & fresh lime water.", price: 360.00, category: "combos", isVeg: false },
  { id: "cmb-20", name: "Chicken Kasturi Tikka [200 G] With Salad And Lime Water", description: "Aromatic kasturi tikka with fresh salad & lime water.", price: 360.00, category: "combos", isVeg: false },

  // ==================== HALEEM ====================
  { id: "hal-1", name: "Mutton Haleem Spl", description: "Authentic Hyderabadi slow-cooked pounded Mutton Haleem garnished with ghee, fried onions, cashews & lime.", price: 298.80, category: "haleem", isVeg: false, isChefSpecial: true },
  { id: "hal-2", name: "Chicken Haleem", description: "Rich pounded Chicken Haleem slow-cooked with wheat, lentils & ghee.", price: 262.80, category: "haleem", isVeg: false },
  { id: "hal-3", name: "Chicken Haleem With Coke [200 Ml]", description: "Delicious Chicken Haleem served with 200ml chilled Coca-Cola.", price: 286.80, category: "haleem", isVeg: false },

  // ==================== ICE CREAM ====================
  { id: "ice-1", name: "Butterscotch Ice Cream", description: "Rich creamy butterscotch ice cream scoop with crunchy praline bits.", price: 172.80, category: "ice-cream", isVeg: true },
  { id: "ice-2", name: "Chocolate Ice Cream", description: "Indulgent rich dark chocolate ice cream scoop.", price: 172.80, category: "ice-cream", isVeg: true },
  { id: "ice-3", name: "Vanilla Ice Cream", description: "Classic Madagascar vanilla bean ice cream scoop.", price: 172.80, category: "ice-cream", isVeg: true },

  // ==================== DESSERTS ====================
  { id: "des-1", name: "Apricot Delight", description: "Hyderabadi special Khubani stewed apricots topped with fresh cream.", price: 274.80, category: "desserts", isVeg: true, isChefSpecial: true },
  { id: "des-2", name: "Double Ka Meetha", description: "Traditional Hyderabadi fried bread sweet soaked in saffron cardamom milk.", price: 199.00, category: "desserts", isVeg: true },
  { id: "des-3", name: "Gulab Jamun", description: "Soft fried milk solids soaked in warm rose cardamom syrup.", price: 118.80, category: "desserts", isVeg: true },
  { id: "des-4", name: "Kadhu Ka Kheer", description: "Traditional Hyderabadi bottle gourd pudding cooked with sago & khoya.", price: 118.80, category: "desserts", isVeg: true },
  { id: "des-5", name: "Qurbani Ka Meetha", description: "Authentic stewed dried apricot dessert topped with chopped almonds.", price: 274.80, category: "desserts", isVeg: true }
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
    desc: "High-energy stadium vibe with rooftop projectors, craft beer buckets & smoky Angara Kababs.",
    description: "High-energy stadium vibe with rooftop projectors, craft beer buckets & smoky Angara Kababs.",
    category: "sports"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Naga Saibabu",
    rating: 4,
    date: "Recently",
    comment: "The Angara Kabab & Mutton Juicy Mandi at Suchitra branch are super delicious! Great place to hang out with friends.",
    source: "Google Reviews",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r2",
    name: "Karthik Verma",
    rating: 4,
    date: "1 week ago",
    comment: "Awesome chicken fry Mandi and Irani chai! Located right opposite to HDFC Bank in Suchitra.",
    source: "Zomato",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];
