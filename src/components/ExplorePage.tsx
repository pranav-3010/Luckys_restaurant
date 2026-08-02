import React, { useState } from 'react';
import { Search, User, ShoppingBag, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
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

  const scrollToCategory = (catId: string) => {
    setSelectedSubCategory(catId);
    if (catId !== 'all') {
      const el = document.getElementById(`cat-section-${catId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Filter categories and items based on search query
  const searchFilter = (item: MenuItem) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
  };

  return (
    <div className="min-h-screen bg-[#F5EBE0] text-[#1F1919] select-none font-sans">

      {/* 1. TOP ROAST BLACK NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#1A1615] text-white py-3.5 px-4 sm:px-8 shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Left: Single Brand Logo Wordmark */}
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
                C/O Rajahmundry
              </h1>
              <span className="text-[9px] font-bold text-gray-300 tracking-widest uppercase block mt-0.5">
                Kitchen & Bar
              </span>
            </div>
          </div>

          {/* Middle: Tab Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => { setActiveTab('menu'); setSelectedSubCategory('all'); }}
              className={`text-xs font-bold uppercase tracking-widest transition-all cursor-pointer py-1 ${
                activeTab === 'menu' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              MENU
            </button>
            <button
              onClick={() => { setActiveTab('cocktails'); setSelectedSubCategory('all'); }}
              className={`text-xs font-bold uppercase tracking-widest transition-all cursor-pointer py-1 ${
                activeTab === 'cocktails' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              COCKTAILS
            </button>
            <button
              onClick={() => setActiveTab('reservations')}
              className={`text-xs font-bold uppercase tracking-widest transition-all cursor-pointer py-1 ${
                activeTab === 'reservations' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              RESERVATIONS
            </button>
            <button
              onClick={() => setActiveTab('locations')}
              className={`text-xs font-bold uppercase tracking-widest transition-all cursor-pointer py-1 ${
                activeTab === 'locations' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              LOCATIONS
            </button>
          </nav>

          {/* Right: Search Input Bar, Profile Icon & Cart Pill Button */}
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-white w-36 sm:w-44 transition-all"
              />
            </div>

            <button className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer">
              <User className="w-5 h-5" />
            </button>

            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wider cursor-pointer transition-all">
              <ShoppingBag className="w-4 h-4" />
              <span>CART</span>
              <span className="w-4 h-4 rounded-full bg-white text-[#1A1615] text-[10px] flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* 2. TAB VIEW CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* --- VIEW 1: MENU & COCKTAILS VIEW --- */}
        {(activeTab === 'menu' || activeTab === 'cocktails') && (
          <div className="space-y-12">
            {/* Sticky Category Quick-Jump Pill Slider (Clean Off-White Background) */}
            <div className="sticky top-[60px] z-40 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-[#E6DBC5] shadow-md flex items-center gap-2 overflow-x-auto scrollbar-none">
              <button className="p-1 rounded-full text-gray-400 hover:text-[#1F1919] shrink-0">
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToCategory('all')}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedSubCategory === 'all'
                    ? 'bg-[#1A1615] text-white shadow-md'
                    : 'bg-[#F5EBE0] text-[#4A3E3E] hover:bg-white'
                }`}
              >
                All Categories
              </button>

              {MENU_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    selectedSubCategory === cat.id
                      ? 'bg-[#1A1615] text-white shadow-md'
                      : 'bg-[#F5EBE0] text-[#4A3E3E] hover:bg-white'
                  }`}
                >
                  {cat.labelEN}
                </button>
              ))}

              <button className="p-1 rounded-full text-gray-400 hover:text-[#1F1919] shrink-0">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* CONTINUOUS ALL-CATEGORY SECTIONS DISPLAY */}
            {MENU_CATEGORIES.filter(c => c.id !== 'all').map((category) => {
              const categoryItems = MENU_ITEMS.filter(
                item => item.category === category.id && searchFilter(item)
              );

              if (categoryItems.length === 0) return null;

              return (
                <section key={category.id} id={`cat-section-${category.id}`} className="space-y-6 pt-4 scroll-mt-28">
                  {/* Category Title & Subtitle */}
                  <div className="border-b border-[#E6DBC5] pb-3">
                    <h2 className="text-2xl sm:text-4xl font-black font-sans uppercase text-[#1F1919] tracking-tight">
                      {category.labelEN}
                    </h2>
                    {category.subtitle && (
                      <p className="text-xs text-[#7B1E1E] font-bold uppercase tracking-widest mt-1">
                        {category.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Product Cards Grid for this Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#FAF5ED] border border-[#E6DBC5]/80 p-5 rounded-none shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
                      >
                        {/* Square Image */}
                        <div className="relative aspect-square w-full bg-white overflow-hidden border border-[#E6DBC5]/40 flex items-center justify-center p-2">
                          <img
                            src={item.image || MENU_ITEMS[0].image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* ADD Button */}
                        <button
                          onClick={() => onSelectItem(item)}
                          className="w-full py-3 bg-white hover:bg-[#1A1615] hover:text-white border border-[#E6DBC5] text-[#C88A3B] hover:border-[#1A1615] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-sm text-center"
                        >
                          ADD
                        </button>

                        {/* Title & Veg Badge */}
                        <div className="space-y-2 pt-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-black font-sans text-[#1F1919] leading-snug">
                              {item.name}
                            </h3>
                            <span className={`shrink-0 w-4 h-4 rounded-sm border flex items-center justify-center p-0.5 ${item.isVeg ? 'border-emerald-600 bg-emerald-50' : 'border-rose-600 bg-rose-50'}`}>
                              <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'}`} />
                            </span>
                          </div>

                          <div className="text-sm font-black text-[#1F1919] font-sans">
                            ₹{item.price.toFixed(2)}
                          </div>

                          <p className="text-xs text-[#6E5C5C] font-normal leading-relaxed font-sans line-clamp-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
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
