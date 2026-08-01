import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, Flame, Search, ArrowUpDown, ShoppingBag, Wine, SlidersHorizontal, Info } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import type { MenuItem } from '../types';

interface MenuSectionProps {
  initialCategory?: string;
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ initialCategory = 'all', onSelectItem }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg' | 'spicy' | 'special'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const categories = [
    { id: 'all', label: 'All Menu' },
    { id: 'cooker-pulao', label: 'Cooker Pulaos' },
    { id: 'seafood', label: 'Seafood Starters' },
    { id: 'starters', label: 'Tandoori & Starters' },
    { id: 'curries', label: 'Curries & Combos' },
    { id: 'bar-specialties', label: 'Kitchen & Bar' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const filteredItems = useMemo(() => {
    let result = MENU_ITEMS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'non-veg' && item.isVeg) return false;
      if (dietaryFilter === 'spicy' && !item.isSpicy) return false;
      if (dietaryFilter === 'special' && !item.isChefSpecial) return false;

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
      }
      return true;
    });

    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, dietaryFilter, searchQuery, sortBy]);

  return (
    <section id="menu" className="py-24 relative bg-[#0B0908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C8963E] block mb-1">
            Physical Menu & Bar Card
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-serif-heading gold-gradient-text tracking-tight mb-3">
            Digital Menu & Drinks
          </h2>
          <p className="text-xs sm:text-sm text-[#D4C5B9] font-light">
            Explore our signature Godavari cooker pulaos, banana leaf fish fries, curries, and handcrafted rooftop bar cocktails.
          </p>
          <div className="w-20 h-1 bg-[#C8963E] mx-auto rounded-full mt-4" />
        </div>

        {/* Control Panel */}
        <div className="glass-dark-panel p-4 sm:p-6 rounded-2xl border border-[#C8963E]/30 mb-10 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-[#F6E27A] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Cooker Pulao, Aritaku Fish, Cocktail, Marag..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#161311] border border-[#C8963E]/30 text-sm text-white placeholder-[#7C7167] focus:border-[#F6E27A] focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#7C7167] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Pills */}
            <div className="md:col-span-4 flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  dietaryFilter === 'all' ? 'amber-gradient-btn' : 'bg-[#161311] text-[#D4C5B9] border border-[#C8963E]/20 hover:text-[#F6E27A]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  dietaryFilter === 'veg' ? 'bg-emerald-600 text-white' : 'bg-[#161311] text-emerald-400 border border-emerald-500/30'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Veg
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  dietaryFilter === 'non-veg' ? 'bg-rose-600 text-white' : 'bg-[#161311] text-rose-400 border border-rose-500/30'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-400" /> Non-Veg
              </button>
              <button
                onClick={() => setDietaryFilter('spicy')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  dietaryFilter === 'spicy' ? 'bg-amber-600 text-white' : 'bg-[#161311] text-amber-400 border border-amber-500/30'
                }`}
              >
                <Flame className="w-3.5 h-3.5" /> Spicy
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-2 relative">
              <div className="flex items-center gap-2 bg-[#161311] border border-[#C8963E]/30 px-3 py-2.5 rounded-xl text-xs text-[#D4C5B9]">
                <ArrowUpDown className="w-4 h-4 text-[#F6E27A] shrink-0" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs text-white focus:outline-none cursor-pointer w-full font-medium"
                >
                  <option value="default" className="bg-[#161311] text-white">Default Sort</option>
                  <option value="price-asc" className="bg-[#161311] text-white">Price: Low to High</option>
                  <option value="price-desc" className="bg-[#161311] text-white">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedCategory === cat.id
                  ? 'amber-gradient-btn border-transparent shadow-lg scale-105'
                  : 'bg-[#161311] text-[#D4C5B9] border-[#C8963E]/30 hover:text-[#F6E27A] hover:border-[#F6E27A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 roast-card rounded-2xl border border-[#C8963E]/30 space-y-3">
            <SlidersHorizontal className="w-10 h-10 text-[#C8963E] mx-auto opacity-50" />
            <h3 className="text-lg font-bold text-white font-serif-heading">No dishes found</h3>
            <p className="text-xs text-[#A8988B]">Try adjusting your search query or dietary filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item: MenuItem) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="roast-card p-6 rounded-2xl border border-[#C8963E]/30 hover:border-[#F6E27A] transition-all flex flex-col justify-between group bg-[#14110E]"
              >
                <div>
                  {item.image && (
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 border border-[#C8963E]/20 relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 ${
                          item.isVeg ? 'border-emerald-500 bg-[#0D0B0A]' : 'border-rose-500 bg-[#0D0B0A]'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                      </span>

                      <h3 className="text-lg font-bold font-serif-heading text-white group-hover:text-[#F6E27A] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <span className="text-lg font-black text-[#F6E27A] font-serif-heading whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#A8988B] leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {item.isChefSpecial && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#C8963E]/20 text-[#F6E27A] font-bold border border-[#C8963E]/40">
                        <Star className="w-3 h-3 fill-current text-[#F6E27A]" /> Signature
                      </span>
                    )}
                    {item.category === 'bar-specialties' && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/40">
                        <Wine className="w-3 h-3" /> Bar Craft
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/40">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className="px-4 py-1.5 rounded-full amber-gradient-btn text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 hover:scale-105 transition-transform"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Order
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-12 roast-card p-4 rounded-xl border border-[#C8963E]/30 max-w-2xl mx-auto text-center flex items-center justify-center gap-3 text-xs text-[#A8988B] bg-[#14110E]">
          <Info className="w-4 h-4 text-[#F6E27A] shrink-0" />
          <span>All government taxes applicable. Service staff will gladly guide you on spice customization & bar specials.</span>
        </div>
      </div>
    </section>
  );
};
