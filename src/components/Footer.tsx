import React from 'react';
import { Heart, Phone, MapPin, Star, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080706] border-t border-[#C8963E]/30 pt-16 pb-12 text-[#D4C5B9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8C6219] p-0.5 shadow-xl">
                <div className="w-full h-full rounded-full bg-[#0D0B0A] flex items-center justify-center font-cinzel text-sm font-bold text-[#F6E27A]">
                  C/O
                </div>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-[#F6E27A] uppercase font-serif-heading block">
                  C/o Rajahmundry
                </span>
                <span className="text-xs font-bold text-[#C8963E] tracking-wider uppercase block">
                  {RESTAURANT_INFO.teluguName}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A8988B] max-w-md font-light leading-relaxed">
              {RESTAURANT_INFO.tagline}. Authentic Andhra, Mutton Cooker Pulao, Aritaku Chepala Fry, Tandoori Starters & Handcrafted Cocktails on our 5th Floor Rooftop in Kompally.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-[#F6E27A] font-semibold">
              <MapPin className="w-4 h-4 text-[#C8963E]" />
              <span>5th Floor, Santa Sriram Estates, Kompally, Hyderabad – 500067</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-current text-amber-400" />
              <span>4.5 Rating ({RESTAURANT_INFO.reviewCount} Diners on Google)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6E27A] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#D4C5B9]">
              <li><a href="#home" className="hover:text-[#F6E27A] transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-[#F6E27A] transition-colors">Digital Menu & Bar Card</a></li>
              <li><a href="#about" className="hover:text-[#F6E27A] transition-colors">About 5th Floor Rooftop</a></li>
              <li><a href="#reviews" className="hover:text-[#F6E27A] transition-colors">Google Reviews (4.5 ★)</a></li>
              <li><a href="#reservation" className="hover:text-[#F6E27A] transition-colors">Table Reservation</a></li>
              <li><a href="#contact" className="hover:text-[#F6E27A] transition-colors">Kompally Location</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6E27A] mb-4">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-xs">
              <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-white font-bold hover:text-[#F6E27A] flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C8963E]" />
                {RESTAURANT_INFO.phone}
              </a>
              <span className="block text-[#A8988B] text-[11px]">{RESTAURANT_INFO.hours}</span>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hi%20C/o%20Rajahmundry!%20I%20want%20to%20reserve%20a%20table.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs hover:bg-emerald-600/30 transition-colors mt-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Reservation</span>
              </a>
            </div>
          </div>
        </div>

        {/* SEO Strip */}
        <div className="py-6 border-b border-white/10 text-[10px] text-[#A8988B] text-center space-x-2">
          <span>Best Restaurant in Kompally</span> • 
          <span>Cooker Pulao Hyderabad</span> • 
          <span>Rooftop Bar Kompally</span> • 
          <span>Andhra Restaurant Kompally</span> • 
          <span>Aritaku Fish Hyderabad</span> • 
          <span>5th Floor Kitchen and Bar</span>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-1 text-[#F6E27A] font-medium">
            <span>Website Designed & Managed with</span>
            <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
            <span>by <strong className="text-white font-bold">Aeronyx Tech (B.Pranav)</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
