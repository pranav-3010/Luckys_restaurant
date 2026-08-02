import React from 'react';
import { motion } from 'framer-motion';
import realBiryaniImg from '../assets/real_mutton_curry_biryani.jpg';
import realCocktailImg from '../assets/real_bar_cocktail_drink.jpg';
import heroImg from '../assets/co_rajahmundry_hero.jpg';
import realTandooriImg from '../assets/real_tandoori_starter.jpg';

export const FeatureGridSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-[#FAF6F0] border-b border-[#D4AF37]/30 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Top Row: 2 Large Cards (Menu & Events & Bar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection('menu')}
            className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[16/10] bg-black border border-gray-200 shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={realBiryaniImg}
              alt="C/o Rajahmundry Menu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 sm:p-10">
              <h3 className="text-3xl sm:text-5xl font-black font-serif-heading text-white tracking-tight leading-none mb-2">
                Menu
              </h3>
              <p className="text-xs sm:text-sm text-[#E6DAD0] font-light mb-4 uppercase tracking-wider">
                Digital Menu & Bar Card
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border-b border-white pb-1 w-max group-hover:text-[#F6E27A] group-hover:border-[#F6E27A] transition-colors">
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
            className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[16/10] bg-black border border-gray-200 shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={realCocktailImg}
              alt="Events & Bar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 sm:p-10">
              <h3 className="text-3xl sm:text-5xl font-black font-serif-heading text-white tracking-tight leading-none mb-2">
                Events & Bar
              </h3>
              <p className="text-xs sm:text-sm text-[#E6DAD0] font-light mb-4 uppercase tracking-wider">
                Live IPL, Music & Craft Spirits
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border-b border-white pb-1 w-max group-hover:text-[#F6E27A] group-hover:border-[#F6E27A] transition-colors">
                <span>EXPLORE &rarr;</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: 2 Cards (Reservation & Visit Us) - Gifting Omitted */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 3: Reservation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => scrollToSection('reservation')}
            className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[16/9] bg-black border border-gray-200 shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={heroImg}
              alt="Reservation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <h3 className="text-2xl sm:text-4xl font-black font-serif-heading text-white tracking-tight leading-none mb-2">
                Reservation
              </h3>
              <p className="text-xs text-[#E6DAD0] font-light mb-3 uppercase tracking-wider">
                Rooftop & AC Lounge Table Booking
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border-b border-white pb-1 w-max group-hover:text-[#F6E27A] group-hover:border-[#F6E27A] transition-colors">
                <span>BOOK TABLE &rarr;</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Visit Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => scrollToSection('locations')}
            className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[16/9] bg-black border border-gray-200 shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={realTandooriImg}
              alt="Visit Us"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <h3 className="text-2xl sm:text-4xl font-black font-serif-heading text-white tracking-tight leading-none mb-2">
                Visit Us
              </h3>
              <p className="text-xs text-[#E6DAD0] font-light mb-3 uppercase tracking-wider">
                5th Floor, Santa Sriram Estates, Kompally
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border-b border-white pb-1 w-max group-hover:text-[#F6E27A] group-hover:border-[#F6E27A] transition-colors">
                <span>FIND LOCATION &rarr;</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
