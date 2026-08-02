import React, { useState } from 'react';
import { Search, User, ShoppingBag, MapPin, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { ReservationSection } from './ReservationSection';
import { ContactSection } from './ContactSection';
import type { MenuItem } from '../types';

interface ExplorePageProps {
  onBackToHome: () => void;
  onSelectItem: (item: MenuItem) => void;
  initialTab?: 'menu' | 'cocktails' | 'reservations' | 'locations';
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  onBackToHome,
  onSelectItem,
  initialTab = 'menu',
}) => {
  const [activeTab, setActiveTab] = useState<'menu' | 'cocktails' | 'reservations' | 'locations'>(initialTab);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cartCount] = useState<number>(0);

  // Filter items for Menu or Cocktails tab
  const getFilteredItems = () => {
    let items = MENU_ITEMS;

    if (activeTab === 'cocktails') {
      items = items.filter(item => item.category === 'bar-specialties' || item.category === 'seafood');
    } else if (selectedSubCategory !== 'all') {
      items = items.filter(item => item.category === selectedSubCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      );
    }

    return items;
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="min-h-screen bg-[#F5EBE0] text-[#1F1919] select-none font-sans">

      {/* 1. TOP ROAST BLACK NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#1A1615] text-white py-3.5 px-4 sm:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Left: Brand Logo Wordmark */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer"
              title="Back to Home"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase font-sans leading-none">
                C/o Rajahmundry
              </h1>
              <span className="text-[9px] font-bold text-[#E67E22] tracking-widest uppercase block mt-0.5">
                Kitchen & Bar
              </span>
            </div>
          </div>

          {/* Middle: Tab Navigation Links (MENU, COCKTAILS, RESERVATIONS, LOCATIONS) */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => { setActiveTab('menu'); setSelectedSubCategory('all'); }}
              className={`text-xs font-bold uppercase tracking-widest transition-all cursor-pointer py-1 ${
                activeTab === 'menu' ? 'text-white border-b-2 border-[#E67E22]' : 'text-gray-400 hover:text-white'
              }`}
            >
              MENU
            </button>
            <button
              onClick={() => { setActiveTab('cocktails'); setSelectedSubCategory('all'); }}
              className={`text-xs font-bold uppercase tracking-widest transition-all cursor-pointer py-1 ${
                activeTab === 'cocktails' ? 'text-white border-b-2 border-[#E67E22]' : 'text-gray-400 hover:text-white'
              }`}
            >
              COCKTAILS
            </button>
            <button
              onClick={() => setActiveTab('reservations')}
              className={`text-xs font-bold uppercase tracking-widest transition-all cursor-pointer py-1 ${
                activeTab === 'reservations' ? 'text-white border-b-2 border-[#E67E22]' : 'text-gray-400 hover:text-white'
              }`}
            >
              RESERVATIONS
            </button>
            <button
              onClick={() => setActiveTab('locations')}
              className={`text-xs font-bold uppercase tracking-widest transition-all cursor-pointer py-1 ${
                activeTab === 'locations' ? 'text-white border-b-2 border-[#E67E22]' : 'text-gray-400 hover:text-white'
              }`}
            >
              LOCATIONS
            </button>
          </nav>

          {/* Right: Search Icon, Profile Icon & Cart Pill Button */}
          <div className="flex items-center gap-3">
            {/* Search Input Bar */}
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#E67E22] w-36 sm:w-44 transition-all"
              />
            </div>

            {/* Profile Icon */}
            <button className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer">
              <User className="w-5 h-5" />
            </button>

            {/* Cart Pill Button (Matching ROAST Cart Pill) */}
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wider cursor-pointer transition-all">
              <ShoppingBag className="w-4 h-4" />
              <span>CART</span>
              <span className="w-4 h-4 rounded-full bg-[#E67E22] text-white text-[10px] flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* 2. SUB-BAR: LOCATION SELECTOR & MOBILE TABS */}
      <div className="bg-[#FAF5ED] border-b border-[#E6DBC5] py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#4A3E3E]">
          <div className="flex items-center gap-1.5 font-medium cursor-pointer">
            <MapPin className="w-3.5 h-3.5 text-[#E67E22]" />
            <span className="font-bold">C/o Rajahmundry • Kompally, 5th Floor</span>
          </div>

          {/* Mobile Tab Links */}
          <div className="flex md:hidden items-center gap-3 overflow-x-auto text-[11px] font-bold uppercase">
            <button onClick={() => { setActiveTab('menu'); setSelectedSubCategory('all'); }} className={activeTab === 'menu' ? 'text-[#E67E22]' : 'text-gray-600'}>Menu</button>
            <button onClick={() => { setActiveTab('cocktails'); setSelectedSubCategory('all'); }} className={activeTab === 'cocktails' ? 'text-[#E67E22]' : 'text-gray-600'}>Cocktails</button>
            <button onClick={() => setActiveTab('reservations')} className={activeTab === 'reservations' ? 'text-[#E67E22]' : 'text-gray-600'}>Reservations</button>
            <button onClick={() => setActiveTab('locations')} className={activeTab === 'locations' ? 'text-[#E67E22]' : 'text-gray-600'}>Locations</button>
          </div>
        </div>
      </div>

      {/* 3. TAB VIEW CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* --- VIEW 1: MENU & COCKTAILS VIEW ONLY --- */}
        {(activeTab === 'menu' || activeTab === 'cocktails') && (
          <div className="space-y-8">
            {/* Category Pill Slider (Matching ROAST Category Bar) */}
            <div className="relative bg-[#FAF5ED] p-2 rounded-xl border border-[#E6DBC5] shadow-sm flex items-center gap-2 overflow-x-auto scrollbar-none">
              <button className="p-1 rounded-full text-gray-400 hover:text-[#1F1919] shrink-0">
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedSubCategory('all')}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedSubCategory === 'all'
                    ? 'bg-[#1A1615] text-white shadow-md'
                    : 'bg-white/80 text-[#4A3E3E] hover:bg-white'
                }`}
              >
                C/o Rajahmundry Taluka
              </button>

              {MENU_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSubCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    selectedSubCategory === cat.id
                      ? 'bg-[#1A1615] text-white shadow-md'
                      : 'bg-white/80 text-[#4A3E3E] hover:bg-white'
                  }`}
                >
                  {cat.labelEN}
                </button>
              ))}

              <button className="p-1 rounded-full text-gray-400 hover:text-[#1F1919] shrink-0">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Section Heading */}
            <div>
              <h2 className="text-3xl sm:text-5xl font-black font-sans uppercase text-[#1F1919] tracking-tight">
                {activeTab === 'cocktails' ? 'ROOFTOP CRAFT COCKTAILS & BAR' : 'C/O RAJAHMUNDRY TALUKA'}
              </h2>
            </div>

            {/* PRODUCT CARD GRID (EXACT MATCH TO ROAST CONTAINER PICTURE) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FAF5ED] border border-[#E6DBC5]/80 p-5 rounded-none shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
                >
                  {/* 1. Square Dish Image Container */}
                  <div className="relative aspect-square w-full bg-white overflow-hidden border border-[#E6DBC5]/40 flex items-center justify-center p-2">
                    <img
                      src={item.image || MENU_ITEMS[0].image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* 2. ROAST Signature White ADD Button */}
                  <button
                    onClick={() => onSelectItem(item)}
                    className="w-full py-3 bg-white hover:bg-[#1A1615] hover:text-white border border-[#E6DBC5] text-[#C88A3B] hover:border-[#1A1615] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-sm text-center"
                  >
                    ADD
                  </button>

                  {/* 3. Dish Title & Veg/Non-Veg Badge Side-by-Side */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-black font-sans text-[#1F1919] leading-snug">
                        {item.name}
                      </h3>
                      {/* Square Veg/Non-Veg Dot Badge */}
                      <span className={`shrink-0 w-4 h-4 rounded-sm border flex items-center justify-center p-0.5 ${item.isVeg ? 'border-emerald-600 bg-emerald-50' : 'border-rose-600 bg-rose-50'}`}>
                        <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'}`} />
                      </span>
                    </div>

                    {/* 4. Price Tag */}
                    <div className="text-sm font-black text-[#1F1919] font-sans">
                      ₹{item.price.toFixed(2)}
                    </div>

                    {/* 5. Description */}
                    <p className="text-xs text-[#6E5C5C] font-normal leading-relaxed font-sans line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW 2: RESERVATIONS VIEW ONLY --- */}
        {activeTab === 'reservations' && (
          <div className="py-4">
            <ReservationSection />
          </div>
        )}

        {/* --- VIEW 3: LOCATIONS VIEW ONLY --- */}
        {activeTab === 'locations' && (
          <div className="py-4">
            <ContactSection />
          </div>
        )}

      </main>
    </div>
  );
};
