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
  { id: 'luckys-specials', labelEN: 'Lucky’s Signature Kababs', subtitle: 'Smoky Angara Kababs & Tandoori Starters', labelTE: 'అంగారా కబాబ్స్' },
  { id: 'mandi-specials', labelEN: 'Mutton & Chicken Mandi', subtitle: 'Mutton Juicy Mandi & Fried Chicken Mandi', labelTE: 'మండి స్పెషల్స్' },
  { id: 'hyderabadi-biryani', labelEN: 'Hyderabadi Biryani', subtitle: 'Authentic Hyderabadi Dum & Fry Piece Biryani', labelTE: 'హైదరాబాదీ బిర్యానీ' },
  { id: 'rajahmundry-taluka', labelEN: 'C/o Rajahmundry Taluka', subtitle: 'Godavari Regional Starters & Specials', labelTE: 'రాజమండ్రి తాలూకా' },
  { id: 'yekadaina-yeppudaina', labelEN: 'Yekadaina Yeppudaina', subtitle: 'Evergreen Anytime Favorites & Snacks', labelTE: 'ఎక్కడైనా ఎప్పుడైనా' },
  { id: 'vedigha-ghatugha', labelEN: 'Vedigha Ghatugha', subtitle: 'Hot & Spicy Soups, Rasam & Mutton Marag', labelTE: 'వేడిగా ఘాటుగా' },
  { id: 'nuvva-nena', labelEN: 'Nuvva-Nena', subtitle: 'Authentic Godavari Rice & Bandi Style Noodles', labelTE: 'నువ్వా-నేనా' },
  { id: 'rajahmundry-re-remix', labelEN: 'Rajahmundry Re-Remix', subtitle: 'Signature Non-Veg Rice Combos & Chepala Pulusu', labelTE: 'రాజమండ్రి రీ-రీమిక్స్' },
  { id: 'raju-gari-vindhuri', labelEN: 'Raju Gari Vindhuri', subtitle: 'Royal Biryanis, Chittimutyalu & Potlam Pulaos', labelTE: 'రాజు గారి విందురి' },
  { id: 'mattikunda-rottelu', labelEN: 'Mattikunda Rottelu', subtitle: 'Tandoori Roti, Naan & Malabar Parotas', labelTE: 'మట్టికుండ రొట్టెలు' },
  { id: 'asalusisilina', labelEN: 'Asalusisalina', subtitle: 'Authentic Andhra Curries, Gravies & Guthi Vankaya', labelTE: 'అసలుసిసలైన' },
  { id: 'teepi-teepigha', labelEN: 'Teepi Teepigha', subtitle: 'Matka Junnu, Bobbatlu & Irani Chai Sweets', labelTE: 'తీపి తీపిగా' },
  { id: 'jathagha', labelEN: 'Jathagha', subtitle: 'Coolers, Nimma Soda & Refreshing Beverages', labelTE: 'జతగా' },
  // BAR & COCKTAIL CATEGORIES
  { id: 'signature-cocktails', labelEN: 'Signature Rooftop Cocktails', subtitle: 'Handcrafted Craft Cocktails & Infusions', labelTE: 'కాక్‌టైల్స్' },
  { id: 'wines', labelEN: 'Wine & Bubbles', subtitle: 'Fine Red, White & Sparkling Wines', labelTE: 'వైన్' },
  { id: 'vodka-spirits', labelEN: 'Vodka & Premium Spirits', subtitle: 'Grey Goose, Absolut & Import Spirits', labelTE: 'వోడ్కా' },
  { id: 'beers', labelEN: 'Craft & Bottled Beers', subtitle: 'Corona, Heineken & Budweiser', labelTE: 'బీర్' },
  { id: 'whisky-rum', labelEN: 'Whisky, Rum & Tequila', subtitle: 'Black Label, Jameson & Don Julio', labelTE: 'విస్కీ & రమ్' },
];

export const MENU_ITEMS: MenuItem[] = [
  // LUCKY'S SIGNATURE SPECIALS (ANGARA KABAB, BANJARA KABAB, MANDI)
  {
    id: "l1",
    name: "LUCKY’S SPECIAL ANGARA KABAB",
    description: "Chef's signature smoky, juicy Angara Kabab marinated in secret red spice blend, charcoal grilled & served with mint chutney.",
    price: 449.00,
    category: "luckys-specials",
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
    category: "luckys-specials",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "l3",
    name: "MUTTON JUICY MANDI",
    description: "Signature Arabian Mandi rice topped with melt-in-mouth slow cooked mutton shank, cashews, raisins & spicy mandi chutney.",
    price: 599.00,
    category: "mandi-specials",
    isVeg: false,
    isChefSpecial: true,
    image: realBiryaniImg
  },
  {
    id: "l4",
    name: "FRIED CHICKEN MANDI",
    description: "Aromatic Mandi rice served with crispy fried marinated chicken, caramelized onions & signature Mandi soup.",
    price: 469.00,
    category: "mandi-specials",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "l5",
    name: "HYDERABADI CHICKEN BIRYANI",
    description: "Classic authentic Hyderabadi Dum Chicken Biryani cooked with long-grain basmati rice, saffron & pure ghee.",
    price: 369.00,
    category: "hyderabadi-biryani",
    isVeg: false,
    isChefSpecial: true,
    image: realBiryaniImg
  },
  {
    id: "l6",
    name: "MUTTON HALEEM (SEASONAL)",
    description: "Royal slow-cooked mutton haleem blended with lentils, wheat, pure ghee, fried onions & cashews.",
    price: 299.00,
    category: "luckys-specials",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "l7",
    name: "IRANI CHAI & MASALA TEA",
    description: "Authentic rich, thick Hyderabadi Irani Chai simmered with condensed milk & cardamom.",
    price: 49.00,
    category: "teepi-teepigha",
    isVeg: true,
    isChefSpecial: true
  },

  // 1. C/O RAJAHMUNDRY TALUKA (19 ITEMS)
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
  },

  // 2. YEKADAINA YEPPUDAINA (18 ITEMS)
  {
    id: "y1",
    name: "MOKKAJONNA VEPUDU",
    description: "Crunchy stir-fried sweet corn seasoned with crushed green chilies & roasted cumin.",
    price: 379.00,
    category: "yekadaina-yeppudaina",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "y2",
    name: "KARA KARA PANEER",
    description: "Crispy fried cottage cheese cubes coated in fiery Andhra red chili karam and curry leaves.",
    price: 429.00,
    category: "yekadaina-yeppudaina",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "y3",
    name: "PANEER TIKKA 4 WAYS",
    description: "Four assorted tandoori paneer skewers: Achari, Malai, Hariyali & Peri-Peri smoked in clay oven.",
    price: 449.00,
    category: "yekadaina-yeppudaina",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "y4",
    name: "MALAI BROCCOLI",
    description: "Tender broccoli florets marinated in rich cream, cashew paste & cardamom, charcoal roasted.",
    price: 429.00,
    category: "yekadaina-yeppudaina",
    isVeg: true
  },
  {
    id: "y5",
    name: "KALCHINA APPLE",
    description: "Tandoori smoked spiced apple wedges served with mint dip & tangy chaat masala.",
    price: 379.00,
    category: "yekadaina-yeppudaina",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "y6",
    name: "CHILLY EGG/EGG 65",
    description: "Boiled egg quarters wok-tossed in Indo-Chinese chili garlic sauce or spicy Andhra 65 masala.",
    price: 369.00,
    category: "yekadaina-yeppudaina",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "y7",
    name: "KODI APPADALU",
    description: "Crispy chicken appadam rolls stuffed with minced spiced chicken & fried crunchy.",
    price: 459.00,
    category: "yekadaina-yeppudaina",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "y8",
    name: "NETHI KODI VEPUDU",
    description: "Tender chicken cooked in pure buffalo ghee with shallots, crushed black pepper & curry leaves.",
    price: 459.00,
    category: "yekadaina-yeppudaina",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "y9",
    name: "CHINCHINADA KODI PAKODI",
    description: "Traditional Chinchinada village style crispy fried chicken pakodas with bone.",
    price: 459.00,
    category: "yekadaina-yeppudaina",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "y10",
    name: "KOTHIMEERA KODI VEPUDU",
    description: "Succulent chicken morsels tossed in fresh coriander leaf paste & roasted aromatics.",
    price: 459.00,
    category: "yekadaina-yeppudaina",
    isVeg: false
  },
  {
    id: "y11",
    name: "TANDOORI DRUMSTICKS",
    description: "Juicy chicken drumsticks marinated in spicy yogurt & tandoori masala, charcoal grilled.",
    price: 459.00,
    category: "yekadaina-yeppudaina",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "y12",
    name: "PANDUMIRCHI KODI KEBAB",
    description: "Boneless chicken kebabs marinated in red Pandumirchi chili paste & smoked in clay tandoor.",
    price: 459.00,
    category: "yekadaina-yeppudaina",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "y13",
    name: "MIRYALA MAMSAM VEPUDU",
    description: "Tender mutton chunks wok-roasted with crushed black pepper (Miryalu) & ghee.",
    price: 569.00,
    category: "yekadaina-yeppudaina",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "y14",
    name: "GONGURA MAMSAM VEPUDU",
    description: "Mutton roast infused with tangy sour sorrel leaves (Gongura) & red chili masala.",
    price: 569.00,
    category: "yekadaina-yeppudaina",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "y15",
    name: "PACHI CHINTAKAYA FISH KEBAB",
    description: "Fresh fish fillets marinated in raw green tamarind (Pachi Chintakaya) paste & charcoal grilled.",
    price: 539.00,
    category: "yekadaina-yeppudaina",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "y16",
    name: "APOLLO FISH",
    description: "Crispy fried boneless fish fillets tossed in spicy garlic soy sauce & fried curry leaves.",
    price: 539.00,
    category: "yekadaina-yeppudaina",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "y17",
    name: "NALLAKARAM ROYYALA VEPUDU",
    description: "Fresh river prawns tossed in dark roasted black chili powder (Nallakaram) & curry leaves.",
    price: 569.00,
    category: "yekadaina-yeppudaina",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "y18",
    name: "LOOSE PRAWNS",
    description: "Crispy batter-fried prawns tossed with finely chopped garlic, green chilies & spring onions.",
    price: 569.00,
    category: "yekadaina-yeppudaina",
    isVeg: false
  },

  // 3. VEDIGHA GHATUGHA (6 ITEMS)
  {
    id: "vg1",
    name: "BROWN GARLIC SOUP",
    description: "Rich, aromatic slow-roasted brown garlic broth infused with fresh herbs & crushed black pepper.",
    price: 175.00,
    category: "vedigha-ghatugha",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "vg2",
    name: "MIRIYALA RASAM / KODI",
    description: "Traditional spicy Andhra black pepper rasam simmered with garlic, cumin, tomato & tender chicken extract.",
    price: 175.00,
    category: "vedigha-ghatugha",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "vg3",
    name: "KOTHIMEERA SOUP (BROCCOLI/CHICKEN)",
    description: "Fresh green coriander infused clear soup simmered with garden broccoli florets or chicken strips.",
    price: 175.00,
    category: "vedigha-ghatugha",
    isVeg: true
  },
  {
    id: "vg4",
    name: "CORN SOUP (VEG/CHICKEN)",
    description: "Creamy sweet corn soup broth flavored with white pepper, sesame oil & choice of veg or chicken.",
    price: 175.00,
    category: "vedigha-ghatugha",
    isVeg: true
  },
  {
    id: "vg5",
    name: "MANCHOW (VEG/CHICKEN)",
    description: "Classic spicy Indo-Chinese manchow soup loaded with mushrooms, garlic, soy broth & crispy fried noodles.",
    price: 175.00,
    category: "vedigha-ghatugha",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "vg6",
    name: "MUTTON MARAG",
    description: "Hyderabadi royal rich mutton bone broth simmered for hours with cashew, cream, cardamom, black pepper & ghee.",
    price: 249.00,
    category: "vedigha-ghatugha",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true,
    image: realBiryaniImg
  },

  // 4. NUVVA-NENA (6 ITEMS)
  {
    id: "nn1",
    name: "ANNAM (PLAIN/GHEE/PERUGU)",
    description: "Steamed Sona Masoori rice served choice of plain, aromatic pure cow ghee, or soothing fresh curd with mango pickle.",
    price: 159.00,
    category: "nuvva-nena",
    isVeg: true
  },
  {
    id: "nn2",
    name: "PAPPUCHARU ANNAM",
    description: "Homestyle Godavari Pappucharu (spiced lentil stew) mixed with hot rice & ghee, served with fried chili.",
    price: 249.00,
    category: "nuvva-nena",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "nn3",
    name: "AVAKAI MUDDAPAPPU ANNAM",
    description: "Iconic combination of thick yellow lentil dahl (Mudda Pappu), fiery spicy Andhra mango pickle (Avakai) & pure ghee rice.",
    price: 249.00,
    category: "nuvva-nena",
    isVeg: true,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "nn4",
    name: "RAGI SANGATI / BAGARA ANNAM",
    description: "Nutritious finger millet ball (Ragi Sangati) or aromatic tempered mint & spice Bagara rice.",
    price: 249.00,
    category: "nuvva-nena",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "nn5",
    name: "FRIED RICE / NOODLES (REGULAR / BANDI STYLE)",
    description: "Wok-tossed street bandi style or regular fried rice/noodles with choice of Veg, Egg, Chicken or Mix.",
    price: 369.00,
    category: "nuvva-nena",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "nn6",
    name: "AVAKAI FRIED RICE / NOODLES",
    description: "Fiery wok-tossed fried rice or noodles flavored with spicy Andhra Avakai pickle paste & choice of Veg, Chicken or Mix.",
    price: 379.00,
    category: "nuvva-nena",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },

  // 5. RAJAHMUNDRY RE-REMIX (5 ITEMS)
  {
    id: "rrr1",
    name: "BAGARA ANNAM (CHICKEN / MUTTON DALCHA / NATUKODI)",
    description: "Aromatic Bagara rice served with rich choice of spicy Telangana chicken curry, slow-cooked Mutton Dalcha or country Natukodi pulusu.",
    price: 449.00,
    category: "rajahmundry-re-remix",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true,
    image: realBiryaniImg
  },
  {
    id: "rrr2",
    name: "GODAVARI SPL FRIED RICE (VEG / CHICKEN)",
    description: "Chef's signature Godavari spiced special fried rice loaded with caramelized onions, cashews & choice of veg or chicken.",
    price: 449.00,
    category: "rajahmundry-re-remix",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "rrr3",
    name: "RAGI SANGATI (CHICKEN / NATUKODI / MUTTON)",
    description: "Traditional hot ragi sangati served with fiery spicy country Natukodi chicken, spicy mutton gravy or chicken fry.",
    price: 449.00,
    category: "rajahmundry-re-remix",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "rrr4",
    name: "PAPPU CHARU ANNAM (CHICKEN FRY / MUTTON FRY)",
    description: "Comforting Pappucharu rice & ghee served alongside crispy Guntur Chicken Fry or spicy Mutton Fry.",
    price: 419.00,
    category: "rajahmundry-re-remix",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "rrr5",
    name: "GHEE RICE WITH CHEPALA PULUSU",
    description: "Steaming hot pure cow ghee rice served with authentic sour & spicy Godavari tamarind river fish curry (Chepala Pulusu).",
    price: 449.00,
    category: "rajahmundry-re-remix",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true,
    image: realFishImg
  },

  // 6. RAJU GARI VINDHURI (18 ITEMS)
  {
    id: "rgv1",
    name: "VEG PULAV (ULAVACHARU / AVAKAYA)",
    description: "Fragrant rice cooked with mixed vegetables in rich Ulavacharu (horsegram broth) or fiery Avakaya mango pickle.",
    price: 369.00,
    category: "raju-gari-vindhuri",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "rgv2",
    name: "PANEER PULAV (PACHI MIRCHI / PANDU MIRCHI)",
    description: "Soft cottage cheese cubes cooked with aromatic long-grain rice and choice of raw green chili or red Pandumirchi paste.",
    price: 419.00,
    category: "raju-gari-vindhuri",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "rgv3",
    name: "MASALA VANKAYA PULAV",
    description: "Traditional Godavari style stuffed baby brinjal (Gutthi Vankaya) cooked with fragrant spiced pulao rice & ghee.",
    price: 419.00,
    category: "raju-gari-vindhuri",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "rgv4",
    name: "CHICKEN BIRYANI / FRY PIECE",
    description: "Hyderabadi Dum Chicken Biryani or spicy Rajahmundry fried chicken piece layered over dum spiced rice.",
    price: 419.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isChefSpecial: true,
    image: realBiryaniImg
  },
  {
    id: "rgv5",
    name: "ULAVACHARU KODI PULAV / BIRYANI",
    description: "Signature combination of horsegram broth (Ulavacharu) infused spiced chicken pulao or dum biryani.",
    price: 429.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "rgv6",
    name: "AVAKAI KODI PULAV / BIRYANI",
    description: "Fiery spicy Andhra mango pickle (Avakai) infused tender chicken pulao or dum biryani.",
    price: 449.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "rgv7",
    name: "KODI PULAV (PACHIMIRCHI / PANDUMIRCHI)",
    description: "Juicy bone-in chicken cooked in choice of fresh raw green chili or spicy red Pandumirchi paste & ghee pulao rice.",
    price: 449.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "rgv8",
    name: "REDDY GARI REKKA BIRYANI",
    description: "Royal Rayalaseema style crispy fried chicken wings (Rekkalu) layered over fiery spiced dum biryani rice.",
    price: 479.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "rgv9",
    name: "MUTTON FRY PIECE PULAV / BIRYANI",
    description: "Tender bone-in mutton fry pieces cooked in roasted spices & ghee layered with aromatic pulao or biryani rice.",
    price: 539.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "rgv10",
    name: "GONGURA MAMSAM PULAV",
    description: "Tender mutton cooked with tangy sorrel leaves (Gongura) and pure cow ghee pulao rice.",
    price: 549.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "rgv11",
    name: "NALLI GOSHT",
    description: "Royal slow-cooked mutton shank (Nalli) in rich marrow gravy served over royal spiced biryani rice.",
    price: 699.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "rgv12",
    name: "VISTARAKU POTLAM PULAV (CHICKEN / MUTTON / PRAWN)",
    description: "Fragrant pulao cooked with choice of Chicken, Mutton or Prawns, wrapped and steamed in traditional vistaraku leaf parcel.",
    price: 459.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "rgv13",
    name: "ARITAKU POTLAM KHEEMA PULAV",
    description: "Spicy minced mutton kheema pulao wrapped in toasted banana leaf parcel with ghee & caramelized onions.",
    price: 559.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "rgv14",
    name: "RAVULAPALEM ROYYALA PULAV / BIRYANI",
    description: "Fresh Ravulapalem Godavari river prawns wok-tossed with crushed pepper and dum biryani rice.",
    price: 559.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "rgv15",
    name: "CHITTIMUTYALU PULAV (PANEER / MUSHROOM)",
    description: "Traditional aromatic short-grain Chittimutyalu rice pulao cooked with cottage cheese or button mushrooms & ghee.",
    price: 439.00,
    category: "raju-gari-vindhuri",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "rgv16",
    name: "CHITTIMUTYALU FRY PIECE PULAV (CHICKEN / MUTTON / PRAWN)",
    description: "Aromatic tiny-grain Chittimutyalu rice cooked in ghee with choice of fried Chicken, Mutton or River Prawns.",
    price: 459.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "rgv17",
    name: "BHANUMATHI COOKER PULAV (VEG / CHICKEN / MUTTON)",
    description: "Fiery pressure-cooked hometown style Bhanumathi pulao cooked with green chilies, coriander & choice of protein.",
    price: 449.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "rgv18",
    name: "SURYAKANTHAM COOKER PULAV (VEG / CHICKEN / MUTTON)",
    description: "Special spicy Suryakantham pressure cooker pulao loaded with roasted cashews, fried onions & choice of meat.",
    price: 469.00,
    category: "raju-gari-vindhuri",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },

  // 7. MATTIKUNDA ROTTELU (4 ITEMS)
  {
    id: "mr1",
    name: "TANDOORI ROTI (PLAIN / BUTTER)",
    description: "Whole wheat unleavened bread baked in traditional clay tandoor oven, served plain or brushed with butter.",
    price: 79.00,
    category: "mattikunda-rottelu",
    isVeg: true
  },
  {
    id: "mr2",
    name: "NAAN (PLAIN / BUTTER / GARLIC)",
    description: "Soft refined flour bread baked in clay tandoor, choice of plain, creamy butter or minced garlic coriander.",
    price: 79.00,
    category: "mattikunda-rottelu",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "mr3",
    name: "PARATHA (LACHA / PUDINA / PANEER)",
    description: "Multi-layered crispy tandoori paratha, choice of Lacha, fresh mint Pudina or stuffed cottage cheese Paneer.",
    price: 89.00,
    category: "mattikunda-rottelu",
    isVeg: true
  },
  {
    id: "mr4",
    name: "CHAPATHI / MALABAR PAROTA",
    description: "Homestyle soft wheat chapathi or flaky layered Kerala Malabar parota.",
    price: 99.00,
    category: "mattikunda-rottelu",
    isVeg: true
  },

  // 8. ASALUSISILINA (14 ITEMS)
  {
    id: "as1",
    name: "DAL FRY / TOMATO",
    description: "Yellow lentils tempered with ghee, cumin, garlic & mustard seeds or tangy tomatoes.",
    price: 329.00,
    category: "asalusisilina",
    isVeg: true
  },
  {
    id: "as2",
    name: "CORN PALAK",
    description: "Sweet corn kernels simmered in smooth velvety spinach puree, garlic & cream.",
    price: 389.00,
    category: "asalusisilina",
    isVeg: true
  },
  {
    id: "as3",
    name: "MUSHROOM MASALA",
    description: "Fresh button mushrooms cooked in rich onion tomato masala with freshly roasted spices.",
    price: 389.00,
    category: "asalusisilina",
    isVeg: true
  },
  {
    id: "as4",
    name: "GUTHI VANKAYA KURA",
    description: "Legendary Andhra stuffed baby brinjals simmered in thick peanut, sesame & tamarind gravy.",
    price: 389.00,
    category: "asalusisilina",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "as5",
    name: "KODI GUDDU PULUSU / MASALA",
    description: "Hard-boiled eggs simmered in tangy tamarind onion pulusu or spicy onion tomato masala gravy.",
    price: 389.00,
    category: "asalusisilina",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "as6",
    name: "ANDHRA KODI KOORA",
    description: "Traditional Andhra chicken curry cooked with bone, caramelized onions, green chilies & roasted spices.",
    price: 469.00,
    category: "asalusisilina",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "as7",
    name: "GONGURA KODI KOORA",
    description: "Spicy chicken curry infused with tangy sorrel leaves (Gongura) and red chili paste.",
    price: 469.00,
    category: "asalusisilina",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "as8",
    name: "KOTHIMEERA KODI KOORA",
    description: "Tender chicken pieces cooked in aromatic coriander green gravy with coconut milk & roasted spices.",
    price: 469.00,
    category: "asalusisilina",
    isVeg: false
  },
  {
    id: "as9",
    name: "BUTTER CHICKEN (B/L)",
    description: "Boneless tandoori chicken cooked in rich velvety tomato cashew gravy with cream & butter.",
    price: 489.00,
    category: "asalusisilina",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "as10",
    name: "ANDHRA MAMSAM KOORA",
    description: "Slow-cooked tender mutton curry prepared with hand-pounded Godavari masala & pure ghee.",
    price: 549.00,
    category: "asalusisilina",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "as11",
    name: "GONGURA MAMSAM KOORA",
    description: "Tender mutton chunks simmered in tangy sorrel leaf (Gongura) paste & roasted chili gravy.",
    price: 549.00,
    category: "asalusisilina",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "as12",
    name: "MIRIYALA MAMSAM KOORA",
    description: "Rich mutton curry cooked with crushed black pepper (Miryalu), shallots & roasted spices.",
    price: 549.00,
    category: "asalusisilina",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "as13",
    name: "ROYYALA IGURU / GONGURA",
    description: "Fresh river prawns cooked in thick onion tomato iguru gravy or tangy sorrel leaf Gongura paste.",
    price: 549.00,
    category: "asalusisilina",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "as14",
    name: "GODAVARI CHEPALA PULUSU",
    description: "Iconic Godavari river fish simmered in tangy tamarind broth with green chilies, raw mango & coriander.",
    price: 549.00,
    category: "asalusisilina",
    isVeg: false,
    isSpicy: true,
    isChefSpecial: true,
    image: realFishImg
  },

  // 9. TEEPI TEEPIGHA (4 ITEMS)
  {
    id: "tt1",
    name: "MATKA JUNNU",
    description: "Traditional steam-cooked colostrum milk pudding flavored with jaggery, cardamom & black pepper, served in clay pot.",
    price: 189.00,
    category: "teepi-teepigha",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "tt2",
    name: "C/O RAJAHMUNDRY DELIGHT",
    description: "Chef's special dessert combining royal apricoti sweet, rabri & roasted nuts.",
    price: 229.00,
    category: "teepi-teepigha",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "tt3",
    name: "BOBBATLU WITH BELLAM ICE CREAM",
    description: "Warm puran poli (Bobbatlu) stuffed with sweet chana dahl & jaggery, served with artisan jaggery ice cream.",
    price: 229.00,
    category: "teepi-teepigha",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "tt4",
    name: "ATHREYAPURAM POOTHAREKULU WITH ICE CREAM",
    description: "Legendary Athreyapuram rice paper sweet stuffed with jaggery & ghee, paired with creamy vanilla ice cream.",
    price: 249.00,
    category: "teepi-teepigha",
    isVeg: true,
    isChefSpecial: true
  },

  // 10. JATHAGHA (4 ITEMS)
  {
    id: "j1",
    name: "PACKAGED DRINKING WATER",
    description: "Pure chilled premium packaged drinking water bottle.",
    price: 30.00,
    category: "jathagha",
    isVeg: true
  },
  {
    id: "j2",
    name: "AERATED DRINKS",
    description: "Chilled carbonated soft drinks (Thums Up, Sprite, Coca-Cola).",
    price: 89.00,
    category: "jathagha",
    isVeg: true
  },
  {
    id: "j3",
    name: "NIMMA SODA",
    description: "Freshly squeezed lemon soda, choice of sweet, salted or mixed masala.",
    price: 139.00,
    category: "jathagha",
    isVeg: true
  },
  {
    id: "j4",
    name: "CHALLA CHALLAGA",
    description: "Refreshing cold spiced Andhra buttermilk blended with green chilies, ginger & curry leaves.",
    price: 139.00,
    category: "jathagha",
    isVeg: true,
    isChefSpecial: true
  },

  // 11. SIGNATURE ROOFTOP COCKTAILS (5 ITEMS)
  {
    id: "sc1",
    name: "GODAVARI SUNRISE COCKTAIL",
    description: "Handcrafted cocktail infused with Silver Tequila, Grenadine, fresh mango juice, lime & chili salt rim.",
    price: 499.00,
    category: "signature-cocktails",
    isVeg: true,
    isChefSpecial: true,
    image: realCocktailImg
  },
  {
    id: "sc2",
    name: "RAJAHMUNDRY LITCHI LIQUID",
    description: "Triple-distilled Vodka shaken with litchi liqueur, crushed mint, lemon soda & ice.",
    price: 479.00,
    category: "signature-cocktails",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "sc3",
    name: "TELANGANA GIN SPRITZER",
    description: "Artisanal Gin infused with elderflower tonic, cucumber slices & fresh rosemary sprig.",
    price: 459.00,
    category: "signature-cocktails",
    isVeg: true
  },
  {
    id: "sc4",
    name: "PANDUMIRCHI FIERY MARGARITA",
    description: "Smoked Tequila, Pandumirchi chili rim, fresh lime juice & agave syrup.",
    price: 499.00,
    category: "signature-cocktails",
    isVeg: true,
    isSpicy: true,
    isChefSpecial: true
  },
  {
    id: "sc5",
    name: "GONGURA SPICED MOJITO",
    description: "White Rum muddled with sorrel leaf Gongura extract, fresh mint, lime wedges & sparkling soda.",
    price: 449.00,
    category: "signature-cocktails",
    isVeg: true,
    isSpicy: true
  },

  // 12. WINE & BUBBLES (4 ITEMS)
  {
    id: "wb1",
    name: "SULA SHIRAZ RED WINE (GLASS / BOTTLE)",
    description: "Rich Indian red wine with notes of dark berries, pepper & oak.",
    price: 449.00,
    category: "wines",
    isVeg: true
  },
  {
    id: "wb2",
    name: "SULA SAUVIGNON BLANC WHITE WINE",
    description: "Crisp, refreshing dry white wine with aromas of green apple & citrus.",
    price: 449.00,
    category: "wines",
    isVeg: true
  },
  {
    id: "wb3",
    name: "JACOB'S CREEK CABERNET",
    description: "Premium Australian full-bodied red wine with plum & spice character.",
    price: 599.00,
    category: "wines",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "wb4",
    name: "PROSECCO SPARKLING WINE",
    description: "Italian sparkling bubbly wine with delicate green apple & floral notes.",
    price: 699.00,
    category: "wines",
    isVeg: true,
    isChefSpecial: true
  },

  // 13. VODKA & PREMIUM SPIRITS (3 ITEMS)
  {
    id: "vp1",
    name: "GREY GOOSE VODKA (60ML)",
    description: "Ultra-premium French wheat vodka distilled for exceptionally smooth taste.",
    price: 549.00,
    category: "vodka-spirits",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "vp2",
    name: "ABSOLUT VODKA (60ML)",
    description: "Classic Swedish pure vodka crafted from winter wheat.",
    price: 399.00,
    category: "vodka-spirits",
    isVeg: true
  },
  {
    id: "vp3",
    name: "SMIRNOFF GREEN APPLE (60ML)",
    description: "Crisp green apple flavored triple distilled vodka.",
    price: 299.00,
    category: "vodka-spirits",
    isVeg: true
  },

  // 14. CRAFT & BOTTLED BEERS (4 ITEMS)
  {
    id: "cb1",
    name: "CORONA EXTRA (BOTTLE)",
    description: "Chilled Mexican lager served with fresh lime wedge.",
    price: 349.00,
    category: "beers",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "cb2",
    name: "HEINEKEN PREMIUM (BOTTLE)",
    description: "Classic Dutch premium malt lager.",
    price: 299.00,
    category: "beers",
    isVeg: true
  },
  {
    id: "cb3",
    name: "BUDWEISER MAGNUM (BOTTLE)",
    description: "Strong super-premium lager beer.",
    price: 279.00,
    category: "beers",
    isVeg: true
  },
  {
    id: "cb4",
    name: "KINGFISHER ULTRA (BOTTLE)",
    description: "Smooth premium Indian lager.",
    price: 249.00,
    category: "beers",
    isVeg: true
  },

  // 15. WHISKY, RUM & TEQUILA (4 ITEMS)
  {
    id: "wrt1",
    name: "BLACK LABEL 12 YRS (60ML)",
    description: "Iconic Johnnie Walker 12 Year aged Scotch whisky with smoky oak finish.",
    price: 499.00,
    category: "whisky-rum",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "wrt2",
    name: "JAMESON IRISH WHISKEY (60ML)",
    description: "Triple-distilled smooth Irish whiskey.",
    price: 449.00,
    category: "whisky-rum",
    isVeg: true
  },
  {
    id: "wrt3",
    name: "BACARDI WHITE RUM (60ML)",
    description: "Classic Cuban light white rum.",
    price: 299.00,
    category: "whisky-rum",
    isVeg: true
  },
  {
    id: "wrt4",
    name: "DON JULIO BLANCO TEQUILA (SHOT)",
    description: "Ultra-premium 100% blue agave Mexican tequila shot.",
    price: 599.00,
    category: "whisky-rum",
    isVeg: true,
    isChefSpecial: true
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
