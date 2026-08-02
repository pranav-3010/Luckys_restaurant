import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#E67E22] block mb-1">
            Verified Google Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-serif-heading gold-heading-text tracking-tight mb-3">
            Diner Experiences
          </h2>

          <div className="flex items-center justify-center gap-2 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current text-[#E67E22]" />
            ))}
            <span className="text-base font-bold text-[#1F1919] ml-2 font-serif-heading">
              4.5 / 5.0 Rating ({RESTAURANT_INFO.reviewCount} Reviews on Google)
            </span>
          </div>
          <p className="text-xs text-[#6E5C5C] font-light">
            Diners praise our authentic Andhra cuisine, cooker pulao, aritaku fish, rooftop bar vibe, and hospitable staff.
          </p>
          <div className="w-20 h-1 bg-[#E67E22] mx-auto rounded-full mt-4" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="spice-card p-8 rounded-3xl border border-gray-200 flex flex-col justify-between relative bg-white shadow-sm hover:shadow-md"
            >
              <Quote className="w-10 h-10 text-[#E67E22]/15 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-[#E67E22]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#4A3E3E] leading-relaxed font-light italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-100 mt-6 relative z-10">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold font-serif-heading text-[#1F1919]">
                        {review.name}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="block text-[10px] text-[#9E8E8E]">
                      {review.source} • {review.date}
                    </span>
                  </div>
                </div>

                {review.ownerResponse && (
                  <div className="p-3 rounded-xl bg-[#FAF6F0] border border-gray-200 text-[11px] text-[#4A3E3E]">
                    <span className="block font-bold text-[#7B1E1E] mb-0.5 flex items-center gap-1">
                      <MessageSquare className="w-3 h-3 text-[#E67E22]" /> Owner Response:
                    </span>
                    <span>"{review.ownerResponse}"</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
