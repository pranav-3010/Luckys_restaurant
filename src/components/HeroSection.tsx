import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import realBiryaniImg from '../assets/real_mutton_curry_biryani.jpg';
import realTandooriImg from '../assets/real_tandoori_starter.jpg';
import realFishImg from '../assets/real_aritaku_fish_parcels.jpg';
import realCocktailImg from '../assets/real_bar_cocktail_drink.jpg';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
  onOpenLocation?: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onExploreMenu, onOpenLocation }) => {
  const { language, toggleLanguage } = useLanguage();

  const slides = [
    {
      image: realBiryaniImg,
      taglineEN: 'Authentic Godavari Mutton Cooker Pulao',
      taglineTE: 'రాజమండ్రి మటన్ కుక్కర్ పులావ్',
    },
    {
      image: realTandooriImg,
      taglineEN: 'Charcoal Roasted Tandoori Chicken Starter',
      taglineTE: 'చార్కోల్ తందూరి చికెన్',
    },
    {
      image: realFishImg,
      taglineEN: 'Traditional Aritaku Banana Leaf Chepala Fry',
      taglineTE: 'అరిటాకు చేపల ఫ్రై',
    },
    {
      image: realCocktailImg,
      taglineEN: 'Rooftop Bar Cocktails & Craft Spirits',
      taglineTE: 'రూఫ్‌టాప్ బార్ అండ్ కాక్‌టైల్స్',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToNext = () => {
    const el = document.getElementById('highlights');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-screen flex flex-col justify-between overflow-hidden bg-black select-none">
      {/* 100% Real, Full-Screen, Crisp Food Photography Image */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt="C/o Rajahmundry Real Culinary Experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Minimal gradient text backdrop strips for legibility */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
      </div>

      {/* Top Bar: Language Toggle Switcher */}
      <div className="relative z-10 pt-6 sm:pt-10 px-4 sm:px-6 flex items-center justify-end max-w-7xl mx-auto w-full">
        <button
          onClick={toggleLanguage}
          className="px-3.5 py-1.5 rounded-full bg-black/80 border border-[#D4AF37]/60 text-[11px] sm:text-xs font-bold text-[#F6E27A] backdrop-blur-md hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-1.5 shadow-2xl active:scale-95"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{language === 'EN' ? 'TELUGU (తెలుగు)' : 'ENGLISH'}</span>
        </button>
      </div>

      {/* CENTER RESTAURANT NAME ONLY - FULLY MOBILE OPTIMIZED (NO OVERFLOW) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-1.5 sm:space-y-3 max-w-full"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif tracking-tight text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)] leading-tight font-black break-words">
            C/O Rajahmundry
          </h1>
          <p className="text-[10px] xs:text-xs sm:text-lg md:text-xl font-bold uppercase tracking-[0.25em] sm:tracking-[0.4em] text-[#F6E27A] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] pt-1">
            k i t c h e n &nbsp; a n d &nbsp; b a r
          </p>
        </motion.div>
      </div>

      {/* Bottom Bar: OUR LOCATIONS | Down Arrow (v) | ORDER ONLINE */}
      <div className="relative z-10 pb-6 sm:pb-8 px-4 sm:px-12 flex items-center justify-between">
        {/* Left: OUR LOCATIONS */}
        <motion.button
          onClick={() => {
            if (onOpenLocation) onOpenLocation();
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[11px] sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest text-white hover:text-[#F6E27A] underline underline-offset-4 sm:underline-offset-8 transition-colors cursor-pointer drop-shadow-lg"
        >
          OUR LOCATIONS
        </motion.button>

        {/* Center: Down Arrow Circle Button (v) */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/80 bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:border-[#F6E27A] hover:text-[#F6E27A] hover:scale-110 transition-all shadow-2xl group shrink-0 mx-2"
          title="Scroll Down"
        >
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.button>

        {/* Right: ORDER ONLINE */}
        <motion.button
          onClick={onExploreMenu}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[11px] sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest text-white hover:text-[#F6E27A] underline underline-offset-4 sm:underline-offset-8 transition-colors cursor-pointer drop-shadow-lg"
        >
          ORDER ONLINE
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 sm:h-1.5 rounded-full transition-all ${
              currentSlide === idx ? 'w-6 sm:w-8 bg-[#F6E27A]' : 'w-1.5 sm:w-2 bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
