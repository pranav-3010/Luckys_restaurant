import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star, Globe } from 'lucide-react';
import realBiryaniImg from '../assets/real_mutton_curry_biryani.jpg';
import realTandooriImg from '../assets/real_tandoori_starter.jpg';
import realFishImg from '../assets/real_aritaku_fish_parcels.jpg';
import realCocktailImg from '../assets/real_bar_cocktail_drink.jpg';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
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
      {/* 100% Real, Full-Screen, Crisp, Unblurred Food Photography Image */}
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
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Minimal gradient text backdrop strips */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Top Bar: Google Rating & Language Toggle Switcher */}
      <div className="relative z-10 pt-8 sm:pt-10 px-6 flex items-center justify-between max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/75 border border-[#D4AF37]/60 text-xs text-[#F6E27A] backdrop-blur-md shadow-2xl"
        >
          <span className="flex items-center gap-1 font-bold text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
            4.5 ({RESTAURANT_INFO.reviewCount}+ Google Diners)
          </span>
          <span className="text-white/40">•</span>
          <span className="text-white font-semibold">C / ఓ రాజమండ్రి కిచెన్ అండ్ బార్</span>
        </motion.div>

        {/* Language Switch Button on Hero Screen */}
        <button
          onClick={toggleLanguage}
          className="px-4 py-1.5 rounded-full bg-black/75 border border-[#D4AF37]/60 text-xs font-bold text-[#F6E27A] backdrop-blur-md hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-1.5 shadow-2xl"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{language === 'EN' ? 'TELUGU (తెలుగు)' : 'ENGLISH'}</span>
        </button>
      </div>

      {/* Center Giant Block Typography & Brand Story */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-3 p-6 sm:p-8 rounded-3xl bg-black/55 backdrop-blur-md border border-white/20 shadow-2xl max-w-4xl"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase font-serif-heading text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)] leading-none">
            C/O RAJAHMUNDRY
          </h1>
          <p className="text-xs sm:text-xl font-bold uppercase tracking-widest text-[#F6E27A] drop-shadow-md">
            {language === 'EN' ? RESTAURANT_INFO.taglineEN : RESTAURANT_INFO.taglineTE}
          </p>

          <p className="text-xs sm:text-sm text-[#E6DAD0] font-light max-w-2xl mx-auto leading-relaxed pt-2">
            {RESTAURANT_INFO.story}
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={onExploreMenu}
              className="px-6 py-3 rounded-full orange-btn-bg text-white font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-transform"
            >
              View Menu & Drinks
            </button>
            <button
              onClick={onReserveTable}
              className="px-6 py-3 rounded-full border border-[#D4AF37] bg-white/10 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md hover:bg-white/20 transition-all"
            >
              Book 5th Floor Table
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar: OUR LOCATIONS | Down Arrow (v) | ORDER ONLINE */}
      <div className="relative z-10 pb-8 px-6 sm:px-12 flex items-center justify-between">
        {/* Left: OUR LOCATIONS */}
        <motion.a
          href="#locations"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white hover:text-[#F6E27A] underline underline-offset-8 transition-colors cursor-pointer drop-shadow-lg"
        >
          OUR LOCATIONS
        </motion.a>

        {/* Center: Down Arrow Circle Button (v) */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/80 bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:border-[#F6E27A] hover:text-[#F6E27A] hover:scale-110 transition-all shadow-2xl group"
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
          className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white hover:text-[#F6E27A] underline underline-offset-8 transition-colors cursor-pointer drop-shadow-lg"
        >
          ORDER ONLINE
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all ${
              currentSlide === idx ? 'w-8 bg-[#F6E27A]' : 'w-2 bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
