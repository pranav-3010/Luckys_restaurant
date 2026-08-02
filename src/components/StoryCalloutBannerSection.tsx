import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import realInteriorImg from '../assets/real_interior_visit_us.jpg';

interface StoryCalloutBannerSectionProps {
  onNavigateToExplore?: (sectionId?: string) => void;
}

export const StoryCalloutBannerSection: React.FC<StoryCalloutBannerSectionProps> = ({ onNavigateToExplore }) => {
  const handleClick = (sectionId: string) => {
    if (onNavigateToExplore) {
      onNavigateToExplore(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[700px] sm:h-[820px] lg:h-screen bg-black select-none overflow-hidden border-b border-[#E6DBC5]">
      {/* Background Image: C/o Rajahmundry 5th Floor Rooftop Venue Interior */}
      <img
        src={realInteriorImg}
        alt="C/o Rajahmundry Kitchen and Bar Interior"
        className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05]"
      />

      {/* Dark Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/65" />

      {/* Centered ROAST-Style Callout Banner Content (Bigger Presence) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto space-y-8">
        {/* Main Big Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black font-sans text-white tracking-tight leading-[1.05]"
        >
          Every Dish Tells a Hometown Story
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-2xl text-[#E6DAD0] font-light max-w-3xl leading-relaxed font-sans"
        >
          Experience the perfect blend of Godavari cuisine, rooftop bar culture, and community at C/o Rajahmundry
        </motion.p>

        {/* 2 ROAST Signature Pill Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-5 pt-6"
        >
          {/* Button 1: Golden Amber Pill (VISIT US) */}
          <button
            onClick={() => handleClick('contact')}
            className="w-full sm:w-auto px-10 py-4.5 rounded-full bg-[#C88A3B] hover:bg-[#B37930] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer hover:scale-105"
          >
            <span>VISIT US</span>
            <MapPin className="w-4 h-4" />
          </button>

          {/* Button 2: White Pill (ORDER ONLINE - Loads Dedicated Explore Page) */}
          <button
            onClick={() => handleClick('menu')}
            className="w-full sm:w-auto px-10 py-4.5 rounded-full bg-white hover:bg-[#FAF6F0] text-[#1F1919] font-bold text-xs uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer hover:scale-105"
          >
            <span>ORDER ONLINE</span>
            <span className="text-sm">&rarr;</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
