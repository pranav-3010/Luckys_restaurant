import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, Star } from 'lucide-react';
import { RESTAURANT_INFO, BRANCHES } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const branch = BRANCHES[0];

  const handleOpenMaps = () => {
    window.open(branch.mapsDirectUrl || `https://www.google.com/maps/place/Lucky%E2%80%99s+restaurant+Suchitra/@17.5001385,78.4744327,17z`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = `Hello Lucky's restaurant Suchitra! I would like to inquire about table availability or place an order.`;
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative bg-[#F5EBE0] select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 space-y-1">
          <span className="eyebrow-text block text-xs sm:text-sm">
            SUCHITRA, HYDERABAD (OPP. HDFC BANK)
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans uppercase text-[#1F1919] tracking-tight">
            VISIT & CONTACT US
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Official Branch Information Card */}
          <div className="lg:col-span-5 bg-[#FAF5ED] p-6 sm:p-8 border border-[#E6DBC5] shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Branch Header */}
              <div className="border-b border-[#E6DBC5] pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 bg-[#1A1615] text-[#F6E27A] text-[10px] font-bold uppercase tracking-widest">
                    SUCHITRA BRANCH
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>3.9 (428 Google Reviews)</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black font-sans text-[#1F1919] uppercase leading-tight">
                  Lucky’s restaurant Suchitra
                </h3>
                <p className="text-xs font-bold text-[#7B1E1E] uppercase tracking-wider mt-1">
                  Suchitra Road, Quthbullapur, Hyderabad
                </p>
              </div>

              {/* Address Details */}
              <div className="space-y-4 text-xs text-[#1F1919]">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white border border-[#E6DBC5] shrink-0 text-[#1F1919]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold uppercase tracking-wider text-[10px] text-gray-500">
                      Full Address
                    </span>
                    <p className="font-semibold text-sm leading-relaxed mt-0.5">
                      84a, Suchitra Rd, Suchitra, Vennala Gadda, Quthbullapur, Hyderabad, Telangana 500067
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-bold text-[#7B1E1E] bg-[#7B1E1E]/10 px-2 py-0.5">
                      📍 Landmark: Opp. to HDFC Bank
                    </span>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Plus Code: <strong className="text-gray-700">GF2F+3Q Hyderabad</strong>
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white border border-[#E6DBC5] shrink-0 text-[#1F1919]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold uppercase tracking-wider text-[10px] text-gray-500">
                      Operating Hours
                    </span>
                    <p className="font-semibold text-xs mt-0.5 text-emerald-700">
                      Open Daily: 11:00 AM – 1:00 AM (Closes 1 AM)
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Cost per Person: ₹200 – ₹400
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white border border-[#E6DBC5] shrink-0 text-[#1F1919]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold uppercase tracking-wider text-[10px] text-gray-500">
                      Phone Contact
                    </span>
                    <div className="space-y-0.5 font-bold text-sm text-[#1F1919] mt-0.5">
                      <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:underline block">
                        {RESTAURANT_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E6DBC5]">
              <button
                onClick={handleOpenMaps}
                className="py-3 bg-[#1A1615] hover:bg-[#7B1E1E] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="py-3 bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Column: Google Maps Location Embed */}
          <div className="lg:col-span-7 bg-white border border-[#E6DBC5] shadow-xl overflow-hidden min-h-[360px] sm:min-h-[440px] flex flex-col">
            <div className="p-3 bg-[#1A1615] text-white flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <span>Official Google Maps — Lucky's restaurant Suchitra</span>
              <span className="text-[#F6E27A] text-[10px]">Open 11am – 1am</span>
            </div>
            <iframe
              title="Lucky's restaurant Suchitra Google Maps Location"
              src={branch.mapsEmbedUrl}
              className="w-full flex-1 border-0 min-h-[340px]"
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
