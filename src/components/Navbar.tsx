import React, { useState, useEffect } from 'react';
import { Phone, Star, Menu, X, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu & Bar' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'reservation', label: 'Reserve Table' },
    { id: 'contact', label: 'Location' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E0C0A]/95 backdrop-blur-md py-3 border-b border-[#C8963E]/30 shadow-2xl'
            : 'bg-gradient-to-b from-[#0B0908] via-[#0B0908]/80 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Rating */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group shrink-0"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8C6219] p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#0D0B0A] flex items-center justify-center font-cinzel text-xs font-bold text-[#F6E27A]">
                C/O
              </div>
            </div>
            <div>
              <span className="block text-base sm:text-lg font-black tracking-wider text-[#F6E27A] uppercase font-serif-heading leading-none">
                C/o Rajahmundry
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[9px] font-bold text-[#C8963E] uppercase tracking-widest">
                  Kitchen & Bar • Kompally
                </span>
                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-amber-400">
                  <Star className="w-3 h-3 fill-current text-amber-400" />
                  4.5 ({RESTAURANT_INFO.reviewCount})
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs font-bold tracking-widest uppercase transition-all relative py-1 ${
                  activeSection === link.id
                    ? 'text-[#F6E27A]'
                    : 'text-[#D4C5B9] hover:text-[#F6E27A]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#reservation"
              onClick={() => handleNavClick('reservation')}
              className="hidden sm:flex px-5 py-2.5 rounded-full amber-gradient-btn text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" /> Book Table
            </a>

            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="p-2.5 rounded-full gold-border-btn shadow-sm hover:scale-105 transition-transform"
              title="Call Restaurant"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#F6E27A] hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#120F0D] border-t border-[#C8963E]/30 px-6 py-6 mt-2 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-sm uppercase font-bold tracking-wider py-2.5 border-b border-white/5 flex items-center justify-between ${
                  activeSection === link.id ? 'text-[#F6E27A]' : 'text-[#D4C5B9]'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />}
              </button>
            ))}
            <div className="pt-2">
              <a
                href="#reservation"
                onClick={() => handleNavClick('reservation')}
                className="w-full py-3 rounded-xl amber-gradient-btn text-xs font-bold uppercase shadow-lg flex items-center justify-center gap-2"
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
