import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-[#0B0908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C8963E] block mb-1">
            Visit Us in Kompally
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-serif-heading gold-gradient-text tracking-tight mb-3">
            Location & Contact
          </h2>
          <p className="text-xs sm:text-sm text-[#D4C5B9] font-light">
            Located on the 5th Floor of Santa Sriram Estates, Kompally. Call us for reservations or takeaway orders.
          </p>
          <div className="w-20 h-1 bg-[#C8963E] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Card */}
          <div className="lg:col-span-5 roast-card p-6 sm:p-8 rounded-3xl border border-[#C8963E]/40 space-y-6 bg-[#14110E]">
            <h3 className="text-xl font-bold font-serif-heading text-white uppercase border-b border-white/10 pb-4">
              Restaurant Details
            </h3>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#C8963E]/20 border border-[#C8963E]/40 flex items-center justify-center text-[#F6E27A] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#C8963E] font-bold">Address</span>
                <span className="text-xs sm:text-sm text-[#E6DAD0] leading-relaxed block">{RESTAURANT_INFO.address}</span>
                <span className="inline-block mt-1 text-[11px] text-[#A8988B] bg-[#0D0B0A] px-2 py-0.5 rounded border border-white/10 font-mono">
                  Plus Code: {RESTAURANT_INFO.plusCode}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#C8963E]/20 border border-[#C8963E]/40 flex items-center justify-center text-[#F6E27A] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#C8963E] font-bold">Direct Phone</span>
                <div className="flex flex-col text-xs sm:text-sm text-[#E6DAD0]">
                  <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#F6E27A] font-bold">
                    {RESTAURANT_INFO.phone}
                  </a>
                  <a href={`tel:${RESTAURANT_INFO.phoneSecondary}`} className="hover:text-[#F6E27A] font-medium text-xs text-[#A8988B]">
                    {RESTAURANT_INFO.phoneSecondary}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#C8963E]/20 border border-[#C8963E]/40 flex items-center justify-center text-[#F6E27A] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#C8963E] font-bold">Operating Hours</span>
                <span className="block text-xs sm:text-sm text-[#E6DAD0] font-medium">{RESTAURANT_INFO.hours}</span>
              </div>
            </div>

            {/* Online Delivery Links */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#C8963E]">
                Order Online Delivery
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.zomato.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-rose-600/20 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider hover:bg-rose-600/30 transition-colors"
                >
                  <span>Zomato</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.swiggy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-orange-600/20 border border-orange-500/40 text-orange-300 text-xs font-bold uppercase tracking-wider hover:bg-orange-600/30 transition-colors"
                >
                  <span>Swiggy</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-7 roast-card p-2 rounded-3xl border border-[#C8963E]/40 overflow-hidden aspect-[16/10] bg-[#14110E]">
            <iframe
              title="C/o Rajahmundry Kitchen and Bar Location Map"
              src={RESTAURANT_INFO.googleMapsEmbed}
              className="w-full h-full rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
