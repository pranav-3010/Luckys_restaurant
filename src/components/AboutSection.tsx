import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  const pillars = [
    { title: "Rooftop 5th Floor View", desc: "Panoramic city skyline dining with open breeze and cozy lounge seating." },
    { title: "Godavari Cooker Pulao", desc: "Pressure cooked mutton and chicken pulaos prepared with rich ghee & green chili masala." },
    { title: "Banana Leaf Delicacies", desc: "Fresh Korrameenu fish marinated in spicy Andhra masala grilled in toasted banana leaves." },
    { title: "Cocktails & Craft Bar", desc: "Full-service rooftop bar with handcrafted fusion cocktails & premium malts open till midnight." }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#FAF6F0] border-t border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#E67E22] block mb-1">
            About C/o Rajahmundry
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-serif-heading gold-heading-text tracking-tight mb-3">
            Kitchen and Bar
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
              <span>5th Floor, Santa Sriram Estates • Kompally</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#1F1919]">
              Where Traditional Godavari Spices Meet Modern Rooftop Hospitality
            </h3>

            <p className="text-[#4A3E3E] text-sm sm:text-base leading-relaxed font-light">
              Located on the 5th floor of Santa Sriram Estates in Kompally, <strong className="text-[#7B1E1E] font-semibold">C/o Rajahmundry Kitchen and Bar</strong> brings the authentic culinary legacy of East and West Godavari to Hyderabad. From sizzling Mutton Cooker Pulaos and banana-leaf roasted Aritaku Fish to artisanal cocktails, every moment here is crafted for unforgettable family gatherings and nightouts.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="spice-card p-4 rounded-xl border border-gray-200 bg-white">
                <span className="block text-xl font-black text-[#7B1E1E] font-serif-heading mb-1">{RESTAURANT_INFO.rating} ★</span>
                <span className="block text-[11px] uppercase tracking-wider text-[#6E5C5C] font-medium">{RESTAURANT_INFO.reviewCount}+ Google Diners</span>
              </div>
              <div className="spice-card p-4 rounded-xl border border-gray-200 bg-white">
                <span className="block text-xl font-black text-[#7B1E1E] font-serif-heading mb-1">Till 12 AM</span>
                <span className="block text-[11px] uppercase tracking-wider text-[#6E5C5C] font-medium">Kitchen & Bar Timings</span>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/40 aspect-[4/3]">
              <img
                src={RESTAURANT_INFO.heroImage}
                alt="C/o Rajahmundry Rooftop Dining Experience"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-dark-panel rounded-2xl border border-white/40">
                <span className="block text-sm font-bold text-[#1F1919] font-serif-heading">5th Floor Santa Sriram Estates Lounge</span>
                <span className="block text-xs text-[#7B1E1E]">Hyderabad's Premier Andhra Kitchen & Bar</span>
              </div>
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
              className="spice-card p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#E67E22] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E67E22]/15 border border-[#E67E22]/30 flex items-center justify-center mb-4 text-[#E67E22]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold font-serif-heading text-[#1F1919] mb-2 uppercase">
                {item.title}
              </h4>
              <p className="text-xs text-[#6E5C5C] leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
