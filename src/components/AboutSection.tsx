import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  const pillars = [
    { title: "Smoky Angara Kababs", desc: "Signature charcoal grilled kababs marinated in secret spices." },
    { title: "Mutton Juicy Mandi", desc: "Traditional Arabian mandi rice topped with melt-in-mouth slow cooked mutton shank." },
    { title: "Hyderabadi Dum Biryani", desc: "Classic authentic Hyderabadi Dum Chicken & Mutton Biryani made with pure ghee." },
    { title: "Authentic Irani Chai", desc: "Thick, rich cardamom Irani tea simmered to perfection." }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#FAF6F0] border-t border-b border-[#D4AF37]/30 select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow-text block mb-1">
            About Lucky's Restaurant
          </span>
          <h2 className="text-3xl sm:text-5xl roast-display-heading text-[#1F1919] mb-3 font-black">
            Suchitra, Hyderabad
          </h2>
          <div className="w-20 h-1 bg-[#E67E22] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E67E22]/15 border border-[#D4AF37] text-xs font-bold text-[#7B1E1E]">
              <Building2 className="w-4 h-4 text-[#E67E22]" />
              <span>84a, Suchitra Rd, Suchitra • Opp. HDFC Bank</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#1F1919]">
              Experience the Magic of Angara Kababs & Hyderabadi Mandi
            </h3>

            <p className="text-[#4A3E3E] text-sm sm:text-base leading-relaxed font-light font-sans">
              Located on Suchitra Road opposite HDFC Bank, <strong className="text-[#7B1E1E] font-semibold">Lucky’s Restaurant Suchitra</strong> brings you a flavor-packed feast. Perfectly grilled, smoky, and juicy Angara Kababs, Mutton Juicy Mandi, and authentic Hyderabadi Biryanis transform your dining experience into something unforgettable.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="spice-card p-4 rounded-xl border border-gray-200 bg-white">
                <span className="block text-xl font-black text-[#7B1E1E] font-serif-heading mb-1">{RESTAURANT_INFO.rating} ★</span>
                <span className="block text-[11px] uppercase tracking-wider text-[#6E5C5C] font-medium">{RESTAURANT_INFO.reviewCount}+ Google Diners</span>
              </div>
              <div className="spice-card p-4 rounded-xl border border-gray-200 bg-white">
                <span className="block text-xl font-black text-[#7B1E1E] font-serif-heading mb-1">11 AM – 1 AM</span>
                <span className="block text-[11px] uppercase tracking-wider text-[#6E5C5C] font-medium">Open Daily Timings</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-none overflow-hidden shadow-2xl border border-[#D4AF37]/40 aspect-[4/3]">
              <img
                src={RESTAURANT_INFO.heroImage}
                alt="Lucky's Restaurant Suchitra Dining Experience"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="spice-card p-6 rounded-none border border-gray-200 bg-white hover:border-[#E67E22] transition-all"
            >
              <div className="w-10 h-10 rounded-none bg-[#E67E22]/15 border border-[#E67E22]/30 flex items-center justify-center mb-4 text-[#E67E22]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold font-serif-heading text-[#1F1919] mb-2 uppercase">
                {item.title}
              </h4>
              <p className="text-xs text-[#6E5C5C] leading-relaxed font-light font-sans">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
