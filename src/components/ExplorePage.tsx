import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, User, ShoppingBag, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { ReservationSection } from './ReservationSection';
import { ContactSection } from './ContactSection';
import { LoginModal } from './LoginModal';
import { CartModal, type CartItem } from './CartModal';
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
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Global Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find(ci => ci.item.id === item.id);
      if (existing) {
        return prev.map(ci => ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci);
      }
      return [...prev, { item, quantity: 1 }];
    });
    onSelectItem(item);
    // Silent add to cart without auto-opening cart drawer
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map(ci => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);

  const isBarCategory = (catId: string) => {
    return ['signature-cocktails', 'wines', 'vodka-spirits', 'beers', 'whisky-rum'].includes(catId);
  };

  const getVisibleCategories = () => {
    if (activeTab === 'cocktails') {
      return MENU_CATEGORIES.filter(c => c.id !== 'all' && isBarCategory(c.id));
    }
    return MENU_CATEGORIES.filter(c => c.id !== 'all' && !isBarCategory(c.id));
  };

  const visibleCategories = getVisibleCategories();

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

  const navTabs: { id: 'menu' | 'cocktails' | 'reservations' | 'locations'; label: string }[] = [
    { id: 'menu', label: 'MENU' },
    { id: 'cocktails', label: 'COCKTAILS & BAR' },
    { id: 'reservations', label: 'RESERVATIONS' },
    { id: 'locations', label: 'LOCATIONS' },
  ];

  return (
    <div className="min-h-screen bg-[#F5EBE0] text-[#1F1919] select-none font-sans">

      {/* Login Modal Popup */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* Cart Modal Drawer */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* 1. TOP ROAST BLACK NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#161312] text-white py-4 px-4 sm:px-8 shadow-xl border-b border-white/10">
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
              <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase block mt-0.5">
                Kitchen & Bar
              </span>
            </div>
          </div>

          {/* Middle: Tab Navigation Links with Smooth Animated Sliding Green Double Line */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id === 'menu' || tab.id === 'cocktails') {
                      setSelectedSubCategory('all');
                    }
                  }}
                  className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer py-2 relative ${
                    isActive ? 'text-[#7DCE9F]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab.label}

                  {/* Animated Sliding Green Double Line Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="navTabActiveDoubleLine"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute left-0 right-0 -bottom-1 flex flex-col items-center gap-0.5 pointer-events-none"
                    >
                      {/* Top Main Line */}
                      <span className="w-full h-[2px] bg-[#7DCE9F] rounded-full shadow-[0_0_8px_rgba(125,206,159,0.6)]" />
                      {/* Bottom Accent Secondary Line */}
                      <span className="w-3/4 h-[1.5px] bg-[#7DCE9F]/80 rounded-full" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Search Input Bar, Profile Icon & Cart Pill Button */}
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search menu or drinks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#7DCE9F] w-36 sm:w-44 transition-all"
              />
            </div>

            {/* PROFILE USER ICON */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer relative group"
              title="Login / Signup"
            >
              <User className="w-5 h-5 group-hover:text-[#7DCE9F] transition-colors" />
            </button>

            {/* CART BUTTON - OPENS CART DRAWER */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wider cursor-pointer transition-all hover:border-[#7DCE9F]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>CART</span>
              <span className="w-4 h-4 rounded-full bg-[#7DCE9F] text-[#161312] text-[10px] flex items-center justify-center font-bold">
                {totalCartCount}
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Tab Bar for Small Screens with Sliding Underline */}
      <div className="flex md:hidden bg-[#161312] border-b border-white/10 px-4 py-2 justify-around overflow-x-auto text-[11px] font-black uppercase tracking-wider">
        {navTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id === 'menu' || tab.id === 'cocktails') {
                  setSelectedSubCategory('all');
                }
              }}
              className={`py-1.5 relative transition-colors ${
                isActive ? 'text-[#7DCE9F]' : 'text-white/70'
              }`}
            >
              {tab.label === 'COCKTAILS & BAR' ? 'COCKTAILS' : tab.label}
              {isActive && (
                <motion.div
                  layoutId="mobileNavTabActiveLine"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#7DCE9F]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* 2. TAB VIEW CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* --- VIEW 1: MENU & COCKTAILS VIEW --- */}
        {(activeTab === 'menu' || activeTab === 'cocktails') && (
          <div className="space-y-12">
            {/* Sticky Category Quick-Jump Pill Slider */}
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
                {activeTab === 'cocktails' ? 'All Drinks' : 'All Categories'}
              </button>

              {visibleCategories.map((cat) => (
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

            {/* CONTINUOUS SECTIONS DISPLAY FOR ACTIVE TAB */}
            {visibleCategories.map((category) => {
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
                    {categoryItems.map((item) => {
                      const itemInCart = cartItems.find(ci => ci.item.id === item.id);
                      const quantityInCart = itemInCart ? itemInCart.quantity : 0;

                      return (
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

                          {/* ADD / Quantity Stepper Button */}
                          {quantityInCart === 0 ? (
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="w-full py-3 bg-white hover:bg-[#1A1615] hover:text-white border border-[#E6DBC5] text-[#C88A3B] hover:border-[#1A1615] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-sm text-center"
                            >
                              ADD
                            </button>
                          ) : (
                            <div className="w-full py-2 bg-[#1A1615] text-[#7DCE9F] border border-[#1A1615] font-bold text-xs uppercase tracking-widest flex items-center justify-between px-4 shadow-sm">
                              <button
                                onClick={() => handleUpdateQuantity(item.id, -1)}
                                className="hover:text-white transition-colors cursor-pointer text-base font-black px-1"
                              >
                                -
                              </button>
                              <span>{quantityInCart} IN CART</span>
                              <button
                                onClick={() => handleUpdateQuantity(item.id, 1)}
                                className="hover:text-white transition-colors cursor-pointer text-base font-black px-1"
                              >
                                +
                              </button>
                            </div>
                          )}

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
                      );
                    })}
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
