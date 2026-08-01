import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Fish, Wine, Utensils, IceCream } from 'lucide-react';

interface CategoryHighlightsProps {
  onSelectCategory: (category: string) => void;
}

export const CategoryHighlightsSection: React.FC<CategoryHighlightsProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'cooker-pulao',
      title: 'COOKER PULAO',
      subtitle: 'Mutton & Chicken Pressure Pulao',
      icon: <Flame className="w-6 h-6 text-[#F6E27A]" />,
      desc: 'Pressure-cooked with desi ghee & Godavari spices',
    },
    {
      id: 'seafood',
      title: 'SEAFOOD STARTERS',
      subtitle: 'Aritaku Chepala Fry & Loose Prawns',
      icon: <Fish className="w-6 h-6 text-[#F6E27A]" />,
      desc: 'Banana leaf wrapped fish and spicy chili prawns',
    },
    {
      id: 'bar-specialties',
      title: 'KITCHEN & BAR',
      subtitle: 'Craft Cocktails & Spirits',
      icon: <Wine className="w-6 h-6 text-[#F6E27A]" />,
      desc: 'Signature tropical drinks & premium malts',
    },
    {
      id: 'curries',
      title: 'ANDHRA CURRIES',
      subtitle: 'Bagara Rice & Natukodi Pulusu',
      icon: <Utensils className="w-6 h-6 text-[#F6E27A]" />,
      desc: 'Spicy chicken curry, bagara rice & thalis',
    },
    {
      id: 'desserts',
      title: 'ROYAL DESSERTS',
      subtitle: 'Apricot Delight & Matka Kulfi',
      icon: <IceCream className="w-6 h-6 text-[#F6E27A]" />,
      desc: 'Layered rabri apricot compote & earthen kulfi',
    },
  ];

  return (
    <section className="py-20 relative bg-[#0E0C0A] border-y border-[#C8963E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C8963E] block mb-1">
            Our Culinary Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-serif-heading gold-gradient-text tracking-wide">
            Explore Categories
          </h2>
          <div className="w-16 h-1 bg-[#C8963E] mx-auto mt-2 rounded-full" />
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => {
                onSelectCategory(cat.id);
                const el = document.getElementById('menu');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="roast-card p-6 rounded-2xl cursor-pointer flex flex-col justify-between group hover:-translate-y-1 transition-all border border-[#C8963E]/30 bg-[#161311]"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C8963E]/15 border border-[#C8963E]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-base font-bold font-serif-heading text-white group-hover:text-[#F6E27A] transition-colors mb-1">
                  {cat.title}
                </h3>
                <span className="block text-xs font-semibold text-[#C8963E] mb-2">
                  {cat.subtitle}
                </span>
                <p className="text-xs text-[#A8988B] font-light leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-bold uppercase text-[#F6E27A] tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Browse Category &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
