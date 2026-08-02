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
    <section id="menu" className="py-24 relative bg-white border-t border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#E67E22] block mb-1">
            Physical Menu & Bar Card
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-serif-heading gold-heading-text tracking-tight mb-3">
            Digital Menu & Drinks
          </h2>
          <p className="text-xs sm:text-sm text-[#6E5C5C] font-light">
            Explore our signature Godavari cooker pulaos, banana leaf fish fries, curries, and handcrafted rooftop bar cocktails.
          </p>
          <div className="w-20 h-1 bg-[#E67E22] mx-auto rounded-full mt-4" />
        </div>

        {/* Control Panel */}
        <div className="bg-[#FAF6F0] p-4 sm:p-6 rounded-2xl border border-gray-200/80 mb-10 space-y-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-[#E67E22] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Cooker Pulao, Aritaku Fish, Cocktail, Marag..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-[#1F1919] placeholder-[#9E8E8E] focus:border-[#E67E22] focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#9E8E8E] hover:text-[#1F1919]"
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
                  dietaryFilter === 'all' ? 'orange-btn-bg text-white shadow-sm' : 'bg-white text-[#4A3E3E] border border-gray-200 hover:text-[#7B1E1E]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  dietaryFilter === 'veg' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-emerald-700 border border-emerald-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> Veg
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  dietaryFilter === 'non-veg' ? 'bg-rose-600 text-white shadow-sm' : 'bg-white text-rose-700 border border-rose-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-600" /> Non-Veg
              </button>
              <button
                onClick={() => setDietaryFilter('spicy')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  dietaryFilter === 'spicy' ? 'bg-amber-600 text-white shadow-sm' : 'bg-white text-amber-700 border border-amber-200'
                }`}
              >
                <Flame className="w-3.5 h-3.5" /> Spicy
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-2 relative">
              <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2.5 rounded-xl text-xs text-[#4A3E3E]">
                <ArrowUpDown className="w-4 h-4 text-[#E67E22] shrink-0" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs text-[#1F1919] focus:outline-none cursor-pointer w-full font-medium"
                >
                  <option value="default">Default Sort</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
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
                  ? 'orange-btn-bg border-transparent text-white shadow-md scale-105'
                  : 'bg-[#FAF6F0] text-[#4A3E3E] border-gray-200 hover:text-[#E67E22] hover:border-[#E67E22]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF6F0] rounded-2xl border border-gray-200 space-y-3">
            <SlidersHorizontal className="w-10 h-10 text-[#E67E22] mx-auto opacity-50" />
            <h3 className="text-lg font-bold text-[#1F1919] font-serif-heading">No dishes found</h3>
            <p className="text-xs text-[#6E5C5C]">Try adjusting your search query or dietary filters.</p>
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
                className="bg-[#FAF6F0] p-6 rounded-2xl border border-gray-200/80 hover:border-[#E67E22] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  {item.image && (
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 border border-gray-200 relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 ${
                          item.isVeg ? 'border-emerald-600 bg-white' : 'border-rose-600 bg-white'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'}`} />
                      </span>

                      <h3 className="text-lg font-bold font-serif-heading text-[#1F1919] group-hover:text-[#E67E22] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <span className="text-lg font-black text-[#7B1E1E] font-serif-heading whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#6E5C5C] leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200/60">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {item.isChefSpecial && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#E67E22]/15 text-[#7B1E1E] font-bold border border-[#E67E22]/30">
                        <Star className="w-3 h-3 fill-current text-[#E67E22]" /> Signature
                      </span>
                    )}
                    {item.category === 'bar-specialties' && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-semibold border border-purple-200">
                        <Wine className="w-3 h-3" /> Bar Craft
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-semibold border border-rose-200">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className="px-4 py-1.5 rounded-full orange-btn-bg text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 hover:scale-105 transition-transform"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Order
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-12 bg-[#FAF6F0] p-4 rounded-xl border border-gray-200 max-w-2xl mx-auto text-center flex items-center justify-center gap-3 text-xs text-[#6E5C5C]">
          <Info className="w-4 h-4 text-[#E67E22] shrink-0" />
          <span>All government taxes applicable (5% GST). Service staff will gladly guide you on spice customization & bar specials.</span>
        </div>
      </div>
    </section>
  );
};
