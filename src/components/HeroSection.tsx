import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import realBiryaniImg from '../assets/real_mutton_curry_biryani.jpg';
import realTandooriImg from '../assets/real_tandoori_starter.jpg';
import realFishImg from '../assets/real_aritaku_fish_parcels.jpg';
import realCocktailImg from '../assets/real_bar_cocktail_drink.jpg';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const slides = [
    {
      image: realBiryaniImg,
      tagline: 'Authentic Godavari Mutton Curry & Biryani',
    },
    {
      image: realTandooriImg,
      tagline: 'Signature Tandoori Starters & Kebabs',
    },
    {
      image: realFishImg,
      tagline: 'Traditional Aritaku Banana Leaf Chepala Fry',
    },
    {
      image: realCocktailImg,
      tagline: 'Rooftop Bar Cocktails & Craft Spirits',
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
    <section id="home" className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-black select-none">
      {/* Background Image Carousel Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt="C/o Rajahmundry Real Culinary Experience"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full object-cover filter brightness-50 contrast-110"
          />
        </AnimatePresence>

        {/* Ambient Dark Overlay for High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
      </div>

      {/* Top Floating Rating & Telugu Badge */}
      <div className="relative z-10 pt-24 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-[#D4AF37]/50 text-xs text-[#F6E27A] backdrop-blur-md shadow-2xl"
        >
          <span className="flex items-center gap-1 font-bold text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
            4.5 (948+ Diners on Google)
          </span>
          <span className="text-white/30">•</span>
          <span className="text-white font-semibold">C / ఓ రాజమండ్రి కిచెన్ అండ్ బార్</span>
        </motion.div>
      </div>

      {/* Center Giant Block Typography (Inspired by ROAST Hero Screen) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase font-serif-heading text-white drop-shadow-2xl leading-none">
            C/O RAJAHMUNDRY
          </h1>
          <p className="text-sm sm:text-xl font-bold uppercase tracking-widest text-[#F6E27A] drop-shadow-md">
            KITCHEN & BAR • 5TH FLOOR ROOFTOP KOMPALLY
          </p>
          <p className="text-xs sm:text-sm text-[#D4C5B9] font-light max-w-lg mx-auto italic">
            "{slides[currentSlide].tagline}"
          </p>
        </motion.div>
      </div>

      {/* Bottom Bar: OUR LOCATIONS | Scroll Arrow Button | ORDER ONLINE */}
      <div className="relative z-10 pb-8 px-6 sm:px-12 flex items-center justify-between">
        {/* Left: OUR LOCATIONS */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white hover:text-[#F6E27A] underline underline-offset-8 transition-colors cursor-pointer"
        >
          OUR LOCATIONS
        </motion.a>

        {/* Center: Down Arrow Circle Button (v) */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/60 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:border-[#F6E27A] hover:text-[#F6E27A] hover:scale-110 transition-all shadow-2xl group"
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
          className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white hover:text-[#F6E27A] underline underline-offset-8 transition-colors cursor-pointer"
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
            className={`h-1 rounded-full transition-all ${
              currentSlide === idx ? 'w-8 bg-[#F6E27A]' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
