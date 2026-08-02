import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 relative bg-[#F5EBE0] select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (General Sans 800 - WITHOUT DESCRIPTION) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-1">
          <span className="eyebrow-text block text-xs sm:text-sm">
            5TH FLOOR ROOFTOP LOCATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans uppercase text-[#1F1919] tracking-tight">
            LOCATION & CONTACT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card (Matching ROAST Container Theme) */}
          <div className="lg:col-span-5 bg-[#FAF5ED] p-6 sm:p-8 border border-[#E6DBC5] shadow-xl rounded-none flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-black font-sans text-[#1F1919] uppercase border-b border-[#E6DBC5] pb-4">
                Restaurant Details
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-[#1A1615] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#E67E22]" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-1">Address</span>
                  <span className="text-xs sm:text-sm text-[#3D3333] leading-relaxed block font-sans">{RESTAURANT_INFO.address}</span>
                  <span className="inline-block mt-2 text-[10px] font-mono text-[#6E5C5C] bg-white px-2 py-0.5 border border-[#E6DBC5]">
                    Plus Code: {RESTAURANT_INFO.plusCode}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-[#1A1615] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#E67E22]" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-1">Direct Phone</span>
                  <div className="flex flex-col text-xs sm:text-sm text-[#3D3333] space-y-1">
                    <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#7B1E1E] font-bold">
                      {RESTAURANT_INFO.phone}
                    </a>
                    <a href={`tel:${RESTAURANT_INFO.phoneSecondary}`} className="hover:text-[#7B1E1E] text-xs text-[#6E5C5C]">
                      {RESTAURANT_INFO.phoneSecondary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-[#1A1615] text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#E67E22]" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-1">Operating Hours</span>
                  <span className="block text-xs sm:text-sm text-[#3D3333] font-bold">{RESTAURANT_INFO.hours}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Pill Buttons */}
            <div className="pt-4 border-t border-[#E6DBC5] space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://maps.google.com/?q=Santa+Sriram+Estates+Kompally+Hyderabad`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#1A1615] hover:bg-[#7B1E1E] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-[#E67E22]" />
                  <span>DIRECTIONS</span>
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hi%20C/o%20Rajahmundry!%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>
              </div>

              {/* Delivery Apps */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://www.zomato.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white border border-[#E6DBC5] text-rose-700 text-xs font-bold uppercase tracking-wider hover:bg-rose-50 transition-colors"
                >
                  <span>ZOMATO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.swiggy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white border border-[#E6DBC5] text-orange-700 text-xs font-bold uppercase tracking-wider hover:bg-orange-50 transition-colors"
                >
                  <span>SWIGGY</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-7 bg-[#FAF5ED] p-2 border border-[#E6DBC5] shadow-xl rounded-none min-h-[420px] flex items-center justify-center">
            <iframe
              title="C/o Rajahmundry Kitchen and Bar Location Map"
              src={RESTAURANT_INFO.googleMapsEmbed}
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
