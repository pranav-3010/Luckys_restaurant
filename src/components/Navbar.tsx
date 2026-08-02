import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onNavigateToExplore?: (sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToExplore }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (onNavigateToExplore) {
      onNavigateToExplore(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none font-sans ${
        isScrolled
          ? 'bg-[#58111A]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/15'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
          >
            <div>
              <h1 className="text-xl sm:text-2xl font-black font-sans tracking-tight text-white uppercase leading-none group-hover:text-[#7DCE9F] transition-colors">
                Lucky’s Restaurant
              </h1>
              <span className="text-[9px] font-bold tracking-widest text-[#F6E27A] uppercase block mt-1">
                Suchitra, Hyderabad
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('menu')}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 hover:text-[#7DCE9F] transition-colors cursor-pointer"
            >
              MENU
            </button>
            <button
              onClick={() => handleNavClick('mandi')}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 hover:text-[#7DCE9F] transition-colors cursor-pointer"
            >
              ARABIAN MANDI
            </button>
            <button
              onClick={() => handleNavClick('reservations')}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 hover:text-[#7DCE9F] transition-colors cursor-pointer"
            >
              RESERVATIONS
            </button>
            <button
              onClick={() => handleNavClick('locations')}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 hover:text-[#7DCE9F] transition-colors cursor-pointer"
            >
              LOCATION
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Direct Call Button */}

            {/* Direct Call Button */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#7DCE9F]" />
              <span>CALL NOW</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#7DCE9F] focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#161312] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
          <button
            onClick={() => handleNavClick('menu')}
            className="block w-full text-left text-sm font-bold uppercase tracking-widest text-white hover:text-[#7DCE9F] py-2 border-b border-white/5 cursor-pointer"
          >
            MENU
          </button>
          <button
            onClick={() => handleNavClick('mandi')}
            className="block w-full text-left text-sm font-bold uppercase tracking-widest text-white hover:text-[#7DCE9F] py-2 border-b border-white/5 cursor-pointer"
          >
            ARABIAN MANDI
          </button>
          <button
            onClick={() => handleNavClick('reservations')}
            className="block w-full text-left text-sm font-bold uppercase tracking-widest text-white hover:text-[#7DCE9F] py-2 border-b border-white/5 cursor-pointer"
          >
            RESERVATIONS
          </button>
          <button
            onClick={() => handleNavClick('locations')}
            className="block w-full text-left text-sm font-bold uppercase tracking-widest text-white hover:text-[#7DCE9F] py-2 cursor-pointer"
          >
            LOCATION
          </button>

          <div className="pt-2 flex items-center justify-between">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-2 text-xs font-bold text-[#7DCE9F]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <span className="text-[10px] text-gray-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#F6E27A]" />
              <span>Suchitra, Hyd</span>
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
