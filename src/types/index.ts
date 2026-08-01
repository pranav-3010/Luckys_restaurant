export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'cooker-pulao' | 'starters' | 'seafood' | 'curries' | 'bar-specialties' | 'desserts';
  isVeg: boolean;
  isSpicy?: boolean;
  isChefSpecial?: boolean;
  image?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  source: string;
  ownerResponse?: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
