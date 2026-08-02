import React from 'react';
import { motion } from 'framer-motion';
import realBiryaniImg from '../assets/real_mutton_curry_biryani.jpg';
import realTandooriImg from '../assets/real_tandoori_starter.jpg';
import realFishImg from '../assets/real_aritaku_fish_parcels.jpg';
import realCocktailImg from '../assets/real_bar_cocktail_drink.jpg';

interface CategoryHighlightsProps {
  onSelectCategory: (category: string) => void;
}

export const CategoryHighlightsSection: React.FC<CategoryHighlightsProps> = ({ onSelectCategory }) => {
  const highlights = [
    {
      id: 'cooker-pulao',
      title: 'COOKER PULAO & BIRYANI',
      subtitle: 'Signature Mutton & Chicken Pulao',
      image: realBiryaniImg,
      desc: 'Pressure-cooked with desi ghee, green chilies & Godavari spices',
    },
    {
      id: 'seafood',
      title: 'ARITAKU CHEPALA FRY',
      subtitle: 'Banana Leaf Wrapped Seafood',
      image: realFishImg,
      desc: 'Korrameenu fish marinated in spicy red masala & pan grilled',
    },
    {
      id: 'starters',
      title: 'TANDOORI KITCHEN',
      subtitle: 'Authentic Charcoal Starters',
      image: realTandooriImg,
      desc: 'Spicy chicken leg kebabs with green mint chutney',
    },
    {
      id: 'bar-specialties',
      title: 'ROOFTOP BAR CRAFT',
      subtitle: 'Cocktails & Craft Spirits',
      image: realCocktailImg,
      desc: 'Layered tropical cocktails & spirits on the 5th floor open air lounge',
    },
  ];

  return (
    <section id="highlights" className="py-24 relative bg-[#FAF6F0] border-y border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#E67E22] block mb-1">
            Our Culinary Highlights
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-serif-heading gold-heading-text tracking-wide">
            Signature Experiences
          </h2>
          <div className="w-16 h-1 bg-[#E67E22] mx-auto mt-3 rounded-full" />
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => {
                onSelectCategory(item.id);
                const el = document.getElementById('menu');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="roast-card group relative rounded-3xl overflow-hidden cursor-pointer border border-gray-200 aspect-[3/4] bg-white flex flex-col justify-end shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1919]/90 via-[#1F1919]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 p-6 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E67E22] block">
                  {item.subtitle}
                </span>
                <h3 className="text-xl font-black font-serif-heading text-white group-hover:text-[#E67E22] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E6DAD0] font-light leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-2 text-[11px] font-bold uppercase text-[#E67E22] tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore Dish &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
