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
      items = items.filter(item => item.category === 'bar-specialties');
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
    <div className="min-h-screen bg-[#FAF6F0] text-[#1F1919] select-none font-sans">

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
              onClick={() => { setActiveTab('cocktails'); setSelectedSubCategory('bar-specialties'); }}
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
            {/* Search Toggle Input */}
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

            {/* Cart Pill Button (Matching ROAST Cart Pill in Image) */}
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
      <div className="bg-[#FAF3E0] border-b border-[#E6DBC5] py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#4A3E3E]">
          <div className="flex items-center gap-1.5 font-medium cursor-pointer">
            <MapPin className="w-3.5 h-3.5 text-[#E67E22]" />
            <span className="font-bold">C/o Rajahmundry • Kompally, 5th Floor</span>
          </div>

          {/* Mobile Tab Links */}
          <div className="flex md:hidden items-center gap-3 overflow-x-auto text-[11px] font-bold uppercase">
            <button onClick={() => { setActiveTab('menu'); setSelectedSubCategory('all'); }} className={activeTab === 'menu' ? 'text-[#E67E22]' : 'text-gray-600'}>Menu</button>
            <button onClick={() => { setActiveTab('cocktails'); setSelectedSubCategory('bar-specialties'); }} className={activeTab === 'cocktails' ? 'text-[#E67E22]' : 'text-gray-600'}>Cocktails</button>
            <button onClick={() => setActiveTab('reservations')} className={activeTab === 'reservations' ? 'text-[#E67E22]' : 'text-gray-600'}>Reservations</button>
            <button onClick={() => setActiveTab('locations')} className={activeTab === 'locations' ? 'text-[#E67E22]' : 'text-gray-600'}>Locations</button>
          </div>
        </div>
      </div>

      {/* 3. TAB VIEW CONTENT (TAB-BASED SWITCHING - ONLY ACTIVE TAB IS VISIBLE) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* --- VIEW 1: MENU & COCKTAILS VIEW ONLY --- */}
        {(activeTab === 'menu' || activeTab === 'cocktails') && (
          <div className="space-y-8">
            {/* Category Pill Slider (Matching ROAST Category Slider Bar) */}
            <div className="relative bg-[#FAF3E0] p-2 rounded-2xl border border-[#E6DBC5] shadow-sm flex items-center gap-2 overflow-x-auto scrollbar-none">
              <button className="p-1 rounded-full text-gray-400 hover:text-[#1F1919] shrink-0">
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedSubCategory('all')}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedSubCategory === 'all'
                    ? 'bg-[#1A1615] text-white shadow-md'
                    : 'bg-white/60 text-[#4A3E3E] hover:bg-white'
                }`}
              >
                All Specialties
              </button>

              {MENU_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSubCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    selectedSubCategory === cat.id
                      ? 'bg-[#1A1615] text-white shadow-md'
                      : 'bg-white/60 text-[#4A3E3E] hover:bg-white'
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
                {activeTab === 'cocktails' ? 'ROOFTOP CRAFT COCKTAILS & BAR' : (selectedSubCategory === 'all' ? 'DIGITAL MENU & BAR CARD' : MENU_CATEGORIES.find(c => c.id === selectedSubCategory)?.labelEN)}
              </h2>
            </div>

            {/* Product Card Grid (Matching ROAST Card Grid with ADD Button) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E6DBC5] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  {/* Item Image */}
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                      {item.isVeg ? '🟢 VEG' : '🔴 NON-VEG'}
                    </div>
                  </div>

                  {/* Item Info & ADD Button */}
                  <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-lg font-bold font-sans text-[#1F1919] group-hover:text-[#7B1E1E] transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <span className="text-sm font-black text-[#7B1E1E] font-sans">₹{item.price}</span>
                      </div>
                      <p className="text-xs text-[#6E5C5C] font-light line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* ROAST Signature ADD Button */}
                    <button
                      onClick={() => onSelectItem(item)}
                      className="w-full py-2.5 rounded-xl border-2 border-[#E6DBC5] bg-white hover:bg-[#1A1615] hover:text-white hover:border-[#1A1615] text-[#1F1919] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-sm text-center"
                    >
                      ADD +
                    </button>
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
