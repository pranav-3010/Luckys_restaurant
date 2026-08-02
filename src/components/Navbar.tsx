import React, { useState, useEffect } from 'react';
import { Phone, Star, Menu, X, Calendar, Globe, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO, BRANCHES } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu & Bar' },
    { id: 'about', label: 'Our Heritage' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'events', label: 'Events & Bar' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'locations', label: 'Locations' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isScrolled && !isMobileMenuOpen) return null;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white py-3 border-b border-[#D4AF37]/40 shadow-lg animate-in slide-in-from-top duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Rating */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#7B1E1E] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-cinzel text-xs font-bold text-[#7B1E1E]">
                C/O
              </div>
            </div>
            <div>
              <span className="block text-base font-black tracking-wider text-[#7B1E1E] uppercase font-serif-heading leading-none">
                C/o Rajahmundry
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[9px] font-bold text-[#E67E22] uppercase tracking-widest">
                  {language === 'EN' ? 'Kitchen & Bar • Kompally' : 'కిచెన్ అండ్ బార్ • కొంపల్లి'}
                </span>
                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-[#E67E22]">
                  <Star className="w-3 h-3 fill-current text-[#E67E22]" />
                  4.5 ({RESTAURANT_INFO.reviewCount})
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs font-bold tracking-wider uppercase transition-all relative py-1 ${
                  activeSection === link.id
                    ? 'text-[#7B1E1E]'
                    : 'text-[#4A3E3E] hover:text-[#E67E22]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#7B1E1E] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right Action: Language Switcher, Call, Book Table & Delivery Links */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full border border-[#D4AF37] bg-[#FAF6F0] text-[11px] font-bold text-[#7B1E1E] flex items-center gap-1 hover:bg-[#7B1E1E] hover:text-white transition-colors"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'EN' ? 'TELUGU (తెలుగు)' : 'ENGLISH'}</span>
            </button>

            {/* Book Table Button */}
            <a
              href="#reservation"
              onClick={() => handleNavClick('reservation')}
              className="hidden sm:flex px-4 py-2 rounded-full orange-btn-bg text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform items-center gap-1 text-white"
            >
              <Calendar className="w-3.5 h-3.5" /> Book Table
            </a>

            {/* Delivery Quick Link */}
            <a
              href={BRANCHES[0].zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 px-3 py-2 rounded-full bg-rose-600 text-white text-xs font-bold uppercase hover:bg-rose-700 transition-colors shadow-sm"
              title="Order on Zomato"
            >
              <span>Zomato</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Direct Call */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="p-2 rounded-full gold-outline-btn shadow-sm hover:scale-105 transition-transform"
              title="Call Restaurant"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#7B1E1E] hover:bg-black/5 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#D4AF37]/30 px-6 py-6 mt-2 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-sm uppercase font-bold tracking-wider py-2.5 border-b border-gray-100 flex items-center justify-between ${
                  activeSection === link.id ? 'text-[#7B1E1E]' : 'text-[#4A3E3E]'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <span className="w-2 h-2 rounded-full bg-[#7B1E1E]" />}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={toggleLanguage}
                className="w-full py-2.5 rounded-xl border border-[#D4AF37] bg-[#FAF6F0] text-xs font-bold text-[#7B1E1E] flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>Switch Language to: {language === 'EN' ? 'తెలుగు (Telugu)' : 'English'}</span>
              </button>

              <a
                href="#reservation"
                onClick={() => handleNavClick('reservation')}
                className="w-full py-3 rounded-xl orange-btn-bg text-xs font-bold uppercase shadow-lg flex items-center justify-center gap-2 text-white"
              >
                <Calendar className="w-4 h-4" /> Reserve 5th Floor Rooftop Table
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
