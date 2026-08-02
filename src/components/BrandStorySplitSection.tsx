import React from 'react';
import { motion } from 'framer-motion';
import realFishImg from '../assets/real_aritaku_fish_parcels.jpg';

export const BrandStorySplitSection: React.FC = () => {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#E6DBC5] select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column (58% width on Desktop): Aritaku Fish Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative aspect-[16/11] rounded-none overflow-hidden border border-[#E6DBC5] shadow-2xl"
          >
            <img
              src={realFishImg}
              alt="Traditional Aritaku Chepala Fry"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Right Column (42% width on Desktop): Bigger Headline & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-7 lg:pl-2"
          >
            {/* Eyebrow Tag */}
            <span className="eyebrow-text block mb-1 text-xs sm:text-sm">
              WHERE GODAVARI HERITAGE MEETS HYDERABAD NIGHTLIFE
            </span>

            {/* Bigger ROAST Display Headline (General Sans 800) */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl roast-display-heading text-[#1F1919] leading-[1.1] my-4">
              Experience Hyderabad's Premier Rajahmundry Kitchen & Rooftop Bar
            </h2>

            {/* Body Text Paragraph 1 */}
            <p className="text-sm sm:text-base text-[#3D3333] font-normal leading-relaxed font-sans">
              Born out of pure hometown nostalgia in Kompally, <strong className="font-semibold text-[#7B1E1E]">C/o Rajahmundry Kitchen & Bar</strong> redefines casual rooftop dining by seamlessly blending authentic Godavari recipes with a vibrant bar vibe. Our 5th-floor flagship at Santa Sriram Estates features traditional pressure-cooked Mutton Pulaos, banana-leaf toasted Aritaku Chepala Fry, and open-air rooftop lounge seating.
            </p>

            {/* Body Text Paragraph 2 */}
            <p className="text-sm sm:text-base text-[#3D3333] font-normal leading-relaxed font-sans">
              From hand-pounded Godavari spice masalas to artisanal rooftop cocktails, we bring generations of regional culinary heritage to every creation. Whether catching live match screenings, enjoying retro Telugu acoustic nights, or gathering for weekend family feasts, we craft experiences that delight your senses.
            </p>

            {/* Closing Italic Quote */}
            <p className="text-sm text-[#7B1E1E] font-medium italic pt-3 border-t border-gray-100 font-sans">
              "Join a community where every meal tells a hometown story and every toast sparks connection."
            </p>

            {/* EXPLORE MENU CTA Button */}
            <div className="pt-4">
              <button
                onClick={scrollToMenu}
                className="px-10 py-4 rounded-full orange-btn-bg text-white font-bold text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all flex items-center gap-3 cursor-pointer"
              >
                <span>EXPLORE MENU</span>
                <span className="text-base">&rarr;</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
