import React from 'react';
import { motion } from 'framer-motion';
import { Star, UtensilsCrossed, Calendar, Phone, MapPin, Wine, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B0908]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESTAURANT_INFO.heroImage}
          alt="C/o Rajahmundry 5th Floor Kitchen & Bar Rooftop Ambiance"
          className="w-full h-full object-cover filter brightness-35 contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0908] via-[#0B0908]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0908]/90 via-transparent to-[#0B0908]/90" />
      </div>

      {/* Ambient Lighting Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Rating & Telugu Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark-panel border border-[#C8963E]/40 text-xs text-[#F6E27A] font-semibold mb-6 shadow-xl"
        >
          <div className="flex items-center gap-1 text-amber-400 font-bold">
            <Star className="w-4 h-4 fill-current text-amber-400" />
            <span>4.5 Star Rating</span>
          </div>
          <span className="text-white/40">•</span>
          <span>948+ Diners on Google</span>
          <span className="text-white/40">•</span>
          <span className="text-[#C8963E] font-bold">{RESTAURANT_INFO.teluguName}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-serif-heading tracking-tight leading-none mb-6 text-white"
        >
          Authentic Godavari Flavors <br />
          <span className="gold-gradient-text">Rooftop Kitchen & Bar</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-lg text-[#D4C5B9] max-w-2xl mx-auto font-light leading-relaxed mb-8"
        >
          Experience Hyderabad's finest <strong className="text-[#F6E27A] font-semibold">Mutton Cooker Pulao</strong>, <strong className="text-[#F6E27A] font-semibold">Aritaku Chepala Fry</strong>, and handcrafted cocktails on our 5th-floor rooftop lounge in Kompally.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-12"
        >
          <button
            onClick={onReserveTable}
            className="w-full sm:w-auto px-8 py-4 rounded-full amber-gradient-btn text-xs font-bold uppercase tracking-widest shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Find a Table
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full gold-border-btn text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            <UtensilsCrossed className="w-4 h-4" />
            Explore Menu & Bar
          </button>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-dark-panel text-[#F6E27A] border border-[#C8963E]/40 font-bold text-xs uppercase tracking-widest hover:border-[#F6E27A] transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </motion.div>

        {/* Info Highlights Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 roast-card p-4 rounded-2xl max-w-4xl mx-auto text-left border border-[#C8963E]/30"
        >
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-[#C8963E]/20 border border-[#C8963E]/40 flex items-center justify-center text-[#F6E27A] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#C8963E]">5th Floor Rooftop</span>
              <span className="block text-xs text-[#E6DAD0] font-medium truncate">Santa Sriram Estates, Kompally</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-1">
            <div className="w-10 h-10 rounded-xl bg-[#C8963E]/20 border border-[#C8963E]/40 flex items-center justify-center text-[#F6E27A] shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#C8963E]">Signature Specialty</span>
              <span className="block text-xs text-[#E6DAD0] font-medium">Godavari Cooker Pulao & Aritaku Fish</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-1">
            <div className="w-10 h-10 rounded-xl bg-[#C8963E]/20 border border-[#C8963E]/40 flex items-center justify-center text-[#F6E27A] shrink-0">
              <Wine className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#C8963E]">Bar & Cocktails</span>
              <span className="block text-xs text-[#E6DAD0] font-medium">Craft Cocktails & Open Till 12 AM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
