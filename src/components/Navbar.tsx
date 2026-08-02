import React, { useState, useEffect } from 'react';
import { ShoppingBag, Globe, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenOrderModal: () => void;
  onNavigateToExplore: (sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, onNavigateToExplore }) => {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigateToExplore(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 select-none ${
        isScrolled
          ? 'bg-[#161312]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10'
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
                {language === 'EN' ? 'Suchitra, Hyderabad' : 'సుచిత్ర, హైదరాబాద్'}
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
              onClick={() => handleNavClick('cocktails')}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 hover:text-[#7DCE9F] transition-colors cursor-pointer"
            >
              COCKTAILS & BAR
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
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-[#F6E27A] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'EN' ? 'TELUGU' : 'ENGLISH'}</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#7DCE9F]" />
              <span>CALL NOW</span>
            </a>

            {/* Order Online Button */}
            <button
              onClick={onOpenOrderModal}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#7DCE9F] bg-[#7DCE9F] hover:bg-[#68b988] text-[#161312] text-xs font-black tracking-wider shadow-lg cursor-pointer transition-all hover:scale-105"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">ORDER ONLINE</span>
              <span className="sm:hidden">ORDER</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
