import React from 'react';
import { motion } from 'framer-motion';
import starterPlatterImg from '../assets/luckys_starter_platter.jpg';
import luckysFacadeImg from '../assets/luckys_exterior_facade.jpg';

interface BrandStorySplitSectionProps {
  onNavigateToExplore?: (sectionId?: string) => void;
}

export const BrandStorySplitSection: React.FC<BrandStorySplitSectionProps> = ({ onNavigateToExplore }) => {
  const scrollToMenu = () => {
    if (onNavigateToExplore) {
      onNavigateToExplore('menu');
    } else {
      const el = document.getElementById('menu');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#E6DBC5] select-none overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column (58% width on Desktop): Official Lucky's Restaurant Illuminated Facade Photo ABOVE Starter Platter Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top / First Picture: Official Lucky's Restaurant Illuminated Night Facade */}
            <div className="relative aspect-[16/11] rounded-none overflow-hidden border border-[#E6DBC5] shadow-xl">
              <img
                src={luckysFacadeImg}
                alt="Lucky's Restaurant Suchitra Building Facade"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Second Picture: Signature Starter Platter */}
            <div className="relative aspect-[16/10] rounded-none overflow-hidden border border-[#E6DBC5] shadow-lg">
              <img
                src={starterPlatterImg}
                alt="Signature Starter Platter - Lucky's Restaurant Suchitra"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Column (42% width on Desktop): Headline & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-7 lg:pl-2"
          >
            {/* Eyebrow Tag */}
            <span className="eyebrow-text block mb-1 text-xs sm:text-sm">
              SUCHITRA, HYDERABAD (OPP. HDFC BANK)
            </span>

            {/* ROAST Display Headline (General Sans 800) */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl roast-display-heading text-[#1F1919] leading-[1.1] my-4 font-black">
              Experience Lucky's Restaurant Suchitra & Rooftop Bar
            </h2>

            {/* Body Text Paragraph 1 */}
            <p className="text-sm sm:text-base text-[#3D3333] font-normal leading-relaxed font-sans">
              Craving something truly delicious? Experience the magic at <strong className="font-semibold text-[#7B1E1E]">Lucky’s Restaurant Suchitra</strong> with our mouthwatering signature <strong className="font-semibold text-[#7B1E1E]">Angara Kabab</strong>! Perfectly grilled, smoky, and juicy, our Angara Kabab transforms your dining experience from ordinary to unforgettable.
            </p>

            {/* Body Text Paragraph 2 */}
            <p className="text-sm sm:text-base text-[#3D3333] font-normal leading-relaxed font-sans">
              Located near Suchitra Opp. to HDFC Bank, we serve authentic Hyderabadi Dum Biryani, slow-cooked Mutton Juicy Mandi, fried chicken Mandi, and refreshing Irani Chai. Whether hanging out with friends or grabbing a feast with family, this is the ultimate spot to satisfy your cravings.
            </p>

            {/* Closing Italic Quote */}
            <p className="text-sm text-[#7B1E1E] font-medium italic pt-3 border-t border-gray-100 font-sans">
              "Swing by Lucky's Restaurant near Suchitra and treat yourself to the best food in town. Your taste buds will thank you!"
            </p>

            {/* EXPLORE MENU CTA Button */}
            <div className="pt-4">
              <button
                onClick={scrollToMenu}
                className="w-full sm:w-auto px-10 py-4 border-2 border-[#3D2314] bg-white text-[#3D2314] hover:bg-[#3D2314] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer shadow-sm rounded-none text-center active:scale-98"
              >
                EXPLORE MENU
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
