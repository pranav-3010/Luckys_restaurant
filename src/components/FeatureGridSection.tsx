import React from 'react';
import { motion } from 'framer-motion';
import luckysBiryaniMenuCardImg from '../assets/luckys_biryani_menu_card.jpg';
import realCocktailImg from '../assets/real_bar_cocktail_drink.jpg';
import realReservationInteriorImg from '../assets/real_reservation_interior.jpg';
import luckysFacadeImg from '../assets/luckys_exterior_facade.jpg';

interface FeatureGridSectionProps {
  onNavigateToExplore?: (sectionId?: string) => void;
}

export const FeatureGridSection: React.FC<FeatureGridSectionProps> = ({ onNavigateToExplore }) => {
  const scrollToSection = (id: string) => {
    if (onNavigateToExplore) {
      onNavigateToExplore(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-[#FAF3E0] border-b border-[#E6DBC5] select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

        {/* Top Row: 2 Asymmetric Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Card 1: Menu - Official Hyderabadi Biryani Feast Platter Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection('menu')}
            className="md:col-span-7 group relative rounded-none overflow-hidden cursor-pointer aspect-[4/3] sm:aspect-[16/11] bg-black border border-[#E6DBC5] shadow-md hover:shadow-2xl transition-all"
          >
            <img
              src={luckysBiryaniMenuCardImg}
              alt="Lucky's Restaurant Menu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-10">
              <h3 className="text-3xl sm:text-5xl font-black font-sans text-white tracking-tight leading-none mb-2">
                Menu
              </h3>
              <p className="text-xs sm:text-sm text-[#E6DAD0] font-light mb-4 uppercase tracking-wider">
                Digital Menu & Mandi Cards
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border-b-2 border-white pb-1 w-max group-hover:text-[#F6E27A] group-hover:border-[#F6E27A] transition-colors">
                <span>EXPLORE &rarr;</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Events & Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => scrollToSection('events')}
            className="md:col-span-5 group relative rounded-none overflow-hidden cursor-pointer aspect-[4/3] sm:aspect-square bg-black border border-[#E6DBC5] shadow-md hover:shadow-2xl transition-all"
          >
            <img
              src={realCocktailImg}
              alt="Events & Bar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-10">
              <h3 className="text-3xl sm:text-5xl font-black font-sans text-white tracking-tight leading-none mb-2">
                Events & Bar
              </h3>
              <p className="text-xs sm:text-sm text-[#E6DAD0] font-light mb-4 uppercase tracking-wider">
                Live IPL, Music & Craft Cocktails
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border-b-2 border-white pb-1 w-max group-hover:text-[#F6E27A] group-hover:border-[#F6E27A] transition-colors">
                <span>EXPLORE &rarr;</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: 2 Distinct Aspect Cards (Reservation & Visit Us) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 3: Reservation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => scrollToSection('reservation')}
            className="group relative rounded-none overflow-hidden cursor-pointer aspect-[16/9] sm:aspect-[16/10] bg-black border border-[#E6DBC5] shadow-md hover:shadow-2xl transition-all"
          >
            <img
              src={realReservationInteriorImg}
              alt="Lucky's Restaurant Dining Room Reservation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <h3 className="text-2xl sm:text-4xl font-black font-sans text-white tracking-tight leading-none mb-2">
                Reservation
              </h3>
              <p className="text-xs text-[#E6DAD0] font-light mb-3 uppercase tracking-wider">
                Dining Room & Rooftop Lounge Table Booking
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border-b-2 border-white pb-1 w-max group-hover:text-[#F6E27A] group-hover:border-[#F6E27A] transition-colors">
                <span>BOOK TABLE &rarr;</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Visit Us - Adjusted Image Positioning (object-[center_10%]) for Clean Text Alignment without Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => scrollToSection('contact')}
            className="group relative rounded-none overflow-hidden cursor-pointer aspect-[16/9] sm:aspect-[16/10] bg-black border border-[#E6DBC5] shadow-md hover:shadow-2xl transition-all"
          >
            <img
              src={luckysFacadeImg}
              alt="Visit Lucky's Restaurant Suchitra"
              className="w-full h-full object-cover object-[center_10%] group-hover:scale-105 transition-transform duration-700 filter brightness-[0.78]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <h3 className="text-2xl sm:text-4xl font-black font-sans text-white tracking-tight leading-none mb-2 drop-shadow-lg">
                Visit Us
              </h3>
              <p className="text-xs text-[#E6DAD0] font-light mb-3 uppercase tracking-wider drop-shadow-md">
                84a, Suchitra Rd, Suchitra (Opp. HDFC Bank)
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border-b-2 border-white pb-1 w-max group-hover:text-[#F6E27A] group-hover:border-[#F6E27A] transition-colors">
                <span>FIND LOCATION &rarr;</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
