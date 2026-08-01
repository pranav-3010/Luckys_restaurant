import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import heroImg from '../assets/co_rajahmundry_hero.jpg';
import cookerPulaoImg from '../assets/co_rajahmundry_cooker_pulao.jpg';
import aritakuFishImg from '../assets/co_rajahmundry_aritaku_fish.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ambiance' | 'food' | 'bar';
  image: string;
  subtitle: string;
}

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'food' | 'ambiance' | 'bar'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: '5th Floor Rooftop Dining & Bar',
      category: 'ambiance',
      image: heroImg,
      subtitle: 'Panoramic skyline view & teakwood seating in Kompally'
    },
    {
      id: 'g2',
      title: 'Signature Mutton Cooker Pulao',
      category: 'food',
      image: cookerPulaoImg,
      subtitle: 'Pressure cooked with green chilies, ghee & aromatic spices'
    },
    {
      id: 'g3',
      title: 'Aritaku Chepala Fry (Banana Leaf Fish)',
      category: 'food',
      image: aritakuFishImg,
      subtitle: 'Korrameenu fish wrapped in toasted banana leaf'
    },
    {
      id: 'g4',
      title: 'Bar Counter & Crafted Spirits',
      category: 'bar',
      image: heroImg,
      subtitle: 'Full service rooftop bar open daily till 12 AM midnight'
    }
  ];

  const filteredItems = galleryItems.filter(item => activeFilter === 'all' || item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 relative bg-[#0B0908] border-t border-b border-[#C8963E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C8963E] block mb-1">
            Visual Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-serif-heading gold-gradient-text tracking-tight mb-3">
            Photo Gallery
          </h2>
          <p className="text-xs sm:text-sm text-[#D4C5B9] font-light">
            Take a glimpse into our 5th-floor rooftop lounge, signature Godavari cooker pulaos, and handcrafted bar cocktails.
          </p>
          <div className="w-20 h-1 bg-[#C8963E] mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'food', label: 'Food & Dishes' },
            { id: 'ambiance', label: 'Rooftop Ambiance' },
            { id: 'bar', label: 'Bar & Lounge' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                activeFilter === tab.id
                  ? 'amber-gradient-btn border-transparent shadow-lg scale-105'
                  : 'bg-[#161311] text-[#D4C5B9] border-[#C8963E]/30 hover:text-[#F6E27A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImage(item)}
              className="roast-card group relative rounded-3xl overflow-hidden cursor-pointer border border-[#C8963E]/30 aspect-[4/3] bg-[#14110E]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#F6E27A] block mb-1">
                    C/o Rajahmundry Gallery
                  </span>
                  <h4 className="text-lg font-bold font-serif-heading text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#D4C5B9] font-light mt-1">
                    {item.subtitle}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#C8963E]/20 border border-[#C8963E]/40 flex items-center justify-center text-[#F6E27A] ml-auto shrink-0 group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full roast-card rounded-3xl overflow-hidden border border-[#C8963E]/40 p-4 bg-[#14110E] shadow-2xl">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain rounded-2xl"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold font-serif-heading text-[#F6E27A]">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-[#D4C5B9] mt-1 font-light">
                {selectedImage.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
