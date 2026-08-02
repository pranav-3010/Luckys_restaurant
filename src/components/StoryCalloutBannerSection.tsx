import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import realInteriorImg from '../assets/real_interior_visit_us.jpg';

export const StoryCalloutBannerSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[520px] sm:h-[600px] bg-black select-none overflow-hidden border-b border-[#E6DBC5]">
      {/* Background Image: C/o Rajahmundry 5th Floor Rooftop Venue Interior */}
      <img
        src={realInteriorImg}
        alt="C/o Rajahmundry Kitchen and Bar Interior"
        className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05]"
      />

      {/* Dark Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

      {/* Centered ROAST-Style Callout Banner Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto space-y-6">
        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black font-sans text-white tracking-tight leading-tight"
        >
          Every Dish Tells a Hometown Story
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-xl text-[#E6DAD0] font-light max-w-2xl leading-relaxed font-sans"
        >
          Experience the perfect blend of Godavari cuisine, rooftop bar culture, and community at C/o Rajahmundry
        </motion.p>

        {/* 2 ROAST Signature Pill Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          {/* Button 1: Golden Amber Pill (VISIT US) */}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#C88A3B] hover:bg-[#B37930] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
          >
            <span>VISIT US</span>
            <MapPin className="w-4 h-4" />
          </button>

          {/* Button 2: White Pill (ORDER ONLINE) */}
          <button
            onClick={() => scrollToSection('menu')}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white hover:bg-[#FAF6F0] text-[#1F1919] font-bold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
          >
            <span>ORDER ONLINE</span>
            <span className="text-sm">&rarr;</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
