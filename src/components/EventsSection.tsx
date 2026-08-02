import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Wine, Music, Tv } from 'lucide-react';
import { EVENTS } from '../data/restaurantData';

interface EventsSectionProps {
  onReserveTable: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onReserveTable }) => {
  return (
    <section id="events" className="py-24 relative bg-[#FAF6F0] border-t border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#E67E22] block mb-1">
            Rooftop Vibe & Entertainment
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-serif-heading gold-heading-text tracking-tight mb-3">
            Bar Specials & Events
          </h2>
          <p className="text-xs sm:text-sm text-[#6E5C5C] font-light">
            Live IPL match screenings, weekend Biryani brunches, and nostalgic Telugu music nights on our 5th-floor rooftop lounge.
          </p>
          <div className="w-20 h-1 bg-[#E67E22] mx-auto rounded-full mt-4" />
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {EVENTS.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="spice-card p-8 rounded-3xl border border-gray-200 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E67E22]/15 text-[#7B1E1E] border border-[#E67E22]/30">
                    {event.badge}
                  </span>
                  {idx === 0 ? <Tv className="w-5 h-5 text-[#E67E22]" /> : idx === 1 ? <Wine className="w-5 h-5 text-[#E67E22]" /> : <Music className="w-5 h-5 text-[#E67E22]" />}
                </div>

                <h3 className="text-xl font-bold font-serif-heading text-[#1F1919]">
                  {event.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-[#E67E22] font-semibold">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>

                <p className="text-xs text-[#6E5C5C] leading-relaxed font-light">
                  {event.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6">
                <button
                  onClick={onReserveTable}
                  className="w-full py-2.5 rounded-xl orange-btn-bg text-white text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform"
                >
                  Reserve Table for Event
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
