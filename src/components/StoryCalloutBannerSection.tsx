import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import realInteriorImg from '../assets/real_reservation_interior.jpg';

interface StoryCalloutBannerSectionProps {
  onExploreClick?: () => void;
  onNavigateToExplore?: (sectionId?: string) => void;
}

export const StoryCalloutBannerSection: React.FC<StoryCalloutBannerSectionProps> = ({ onExploreClick, onNavigateToExplore }) => {
  const handleOrderOnline = () => {
    if (onNavigateToExplore) {
      onNavigateToExplore('menu');
    } else if (onExploreClick) {
      onExploreClick();
    }
  };

  const handleVisitUs = () => {
    if (onNavigateToExplore) {
      onNavigateToExplore('contact');
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-black overflow-hidden select-none font-sans">
      {/* Background Image: Lucky's Restaurant Venue Interior */}
      <div className="absolute inset-0 z-0">
        <img
          src={realInteriorImg}
          alt="Lucky's Restaurant Suchitra Interior"
          className="w-full h-full object-cover filter brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Big Bold Headline restored */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black font-sans uppercase text-white tracking-tight leading-tight"
        >
          Taste the Magic of Smoky Angara Kababs & Mandi
        </motion.h2>

        {/* Subtitle Description restored */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Experience the perfect blend of smoky Angara Kababs, melt-in-mouth Mutton Mandi, Hyderabadi Dum Biryani, and refreshing Irani Chai at Lucky's Restaurant Suchitra.
        </motion.p>

        {/* Dual CTA Buttons (Gold VISIT US pill + White ORDER ONLINE pill) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          {/* Gold VISIT US Button */}
          <button
            onClick={handleVisitUs}
            className="px-8 py-3.5 rounded-full bg-[#C68D47] hover:bg-[#b07b3b] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            <span>VISIT US</span>
            <MapPin className="w-4 h-4 text-white" />
          </button>

          {/* White ORDER ONLINE Button */}
          <button
            onClick={handleOrderOnline}
            className="px-8 py-3.5 rounded-full bg-white hover:bg-gray-100 text-[#161312] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            <span>ORDER ONLINE</span>
            <ArrowRight className="w-4 h-4 text-[#161312]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
