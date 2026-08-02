import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, Star, Sparkles, ExternalLink, ShieldCheck, Car, Utensils } from 'lucide-react';
import { RESTAURANT_INFO, BRANCHES } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const branch = BRANCHES[0];

  const handleOpenMaps = () => {
    window.open(branch.mapsDirectUrl || `https://www.google.com/maps/place/Lucky%E2%80%99s+restaurant+Suchitra/@17.5001385,78.4744327,17z`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = `Hello Lucky's restaurant Suchitra! I would like to inquire about table availability, Mandi seating, or place an order.`;
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-8 sm:py-12 relative bg-[#F5EBE0] select-none font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1615] text-[#F6E27A] text-[11px] font-extrabold uppercase tracking-widest rounded-full">
            <Sparkles className="w-3 h-3 text-[#F6E27A]" />
            <span>SUCHITRA ROAD, HYDERABAD</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans uppercase text-[#1F1919] tracking-tight">
            VISIT & CONTACT US
          </h2>
          <p className="text-xs sm:text-sm text-[#6E5C5C] max-w-xl mx-auto font-medium">
            Located conveniently opposite HDFC Bank on Suchitra Road. Open daily for lunch, dinner & late-night biryani.
          </p>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-[#FAF5ED] p-3 sm:p-4 border border-[#E6DBC5] text-center rounded-xl">
            <div className="flex items-center justify-center gap-1 text-[#7B1E1E] font-black text-sm sm:text-base">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>3.9 / 5</span>
            </div>
            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">428+ Google Reviews</p>
          </div>
          <div className="bg-[#FAF5ED] p-3 sm:p-4 border border-[#E6DBC5] text-center rounded-xl">
            <div className="flex items-center justify-center gap-1 text-emerald-700 font-black text-xs sm:text-sm">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>11 AM - 1 AM</span>
            </div>
            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">Open Daily (Closes 1 AM)</p>
          </div>
          <div className="bg-[#FAF5ED] p-3 sm:p-4 border border-[#E6DBC5] text-center rounded-xl">
            <div className="flex items-center justify-center gap-1 text-[#1F1919] font-black text-xs sm:text-sm">
              <Car className="w-4 h-4 text-[#7B1E1E]" />
              <span>Valet Parking</span>
            </div>
            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">Easy Parking Available</p>
          </div>
          <div className="bg-[#FAF5ED] p-3 sm:p-4 border border-[#E6DBC5] text-center rounded-xl">
            <div className="flex items-center justify-center gap-1 text-[#1F1919] font-black text-xs sm:text-sm">
              <Utensils className="w-4 h-4 text-[#7B1E1E]" />
              <span>₹200 - ₹400</span>
            </div>
            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">Cost Per Person</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Official Branch Information Card */}
          <div className="lg:col-span-5 bg-[#FAF5ED] p-5 sm:p-8 border border-[#E6DBC5] shadow-xl rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Branch Header */}
              <div className="border-b border-[#E6DBC5] pb-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 bg-[#1A1615] text-[#F6E27A] text-[10px] font-extrabold uppercase tracking-widest rounded-full">
                    MAIN BRANCH
                  </span>
                  <div className="flex items-center gap-1 text-xs font-extrabold text-amber-600">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verified Spot</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-sans text-[#1F1919] uppercase leading-tight">
                  Lucky’s restaurant Suchitra
                </h3>
                <p className="text-xs font-bold text-[#7B1E1E] uppercase tracking-wider mt-1">
                  Suchitra Road, Quthbullapur, Hyderabad
                </p>
              </div>

              {/* Address Details */}
              <div className="space-y-4 text-xs text-[#1F1919]">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-white border border-[#E6DBC5] rounded-xl shrink-0 text-[#1F1919]">
                    <MapPin className="w-4 h-4 text-[#7B1E1E]" />
                  </div>
                  <div>
                    <span className="block font-bold uppercase tracking-wider text-[10px] text-gray-500">
                      Full Address
                    </span>
                    <p className="font-semibold text-xs sm:text-sm leading-relaxed mt-0.5 text-[#1F1919]">
                      84a, Suchitra Rd, Suchitra, Vennala Gadda, Quthbullapur, Hyderabad, Telangana 500067
                    </p>
                    <span className="inline-block mt-1.5 text-[11px] font-bold text-[#7B1E1E] bg-[#7B1E1E]/10 px-2.5 py-1 rounded-md">
                      📍 Landmark: Opp. to HDFC Bank
                    </span>
                    <p className="text-[11px] text-gray-500 mt-1.5">
                      Plus Code: <strong className="text-gray-700">GF2F+3Q Hyderabad</strong>
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-white border border-[#E6DBC5] rounded-xl shrink-0 text-[#1F1919]">
                    <Clock className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="block font-bold uppercase tracking-wider text-[10px] text-gray-500">
                      Operating Hours
                    </span>
                    <p className="font-extrabold text-xs sm:text-sm mt-0.5 text-emerald-700">
                      Open Daily: 11:00 AM – 1:00 AM
                    </p>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Lunch, Dinner & Late-Night Mandi Dawat
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-white border border-[#E6DBC5] rounded-xl shrink-0 text-[#1F1919]">
                    <Phone className="w-4 h-4 text-[#1A1615]" />
                  </div>
                  <div>
                    <span className="block font-bold uppercase tracking-wider text-[10px] text-gray-500">
                      Phone Contact & Reservations
                    </span>
                    <div className="flex flex-wrap items-center gap-3 font-bold text-xs sm:text-sm text-[#1F1919] mt-0.5">
                      <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#7B1E1E] underline">
                        {RESTAURANT_INFO.phone}
                      </a>
                      <span className="text-gray-300">|</span>
                      <a href={`tel:${RESTAURANT_INFO.phoneSecondary}`} className="hover:text-[#7B1E1E] underline">
                        {RESTAURANT_INFO.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Online Delivery Badges */}
              <div className="pt-2 border-t border-[#E6DBC5] space-y-2">
                <span className="block font-bold uppercase tracking-wider text-[10px] text-gray-500">
                  Order Food Online (Suchitra Branch)
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="https://www.zomato.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-[#E23744] hover:bg-[#c92c38] text-white text-[11px] font-black uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>ZOMATO</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href="https://www.swiggy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-[#FC8019] hover:bg-[#e06d0b] text-white text-[11px] font-black uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>SWIGGY</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E6DBC5]">
              <button
                onClick={handleOpenMaps}
                className="py-3.5 bg-[#1A1615] hover:bg-[#7B1E1E] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md rounded-xl"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="py-3.5 bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md rounded-xl"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Column: Google Maps Location Embed */}
          <div className="lg:col-span-7 bg-white border border-[#E6DBC5] shadow-xl overflow-hidden rounded-2xl min-h-[380px] sm:min-h-[460px] flex flex-col">
            <div className="p-3.5 bg-[#1A1615] text-white flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F6E27A]" />
                <span>Google Maps — Lucky's restaurant Suchitra</span>
              </div>
              <span className="text-[#F6E27A] text-[10px] font-black bg-white/10 px-2 py-0.5 rounded-full">
                Open 11am – 1am
              </span>
            </div>
            <iframe
              title="Lucky's restaurant Suchitra Google Maps Location"
              src={branch.mapsEmbedUrl}
              className="w-full flex-1 border-0 min-h-[360px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

