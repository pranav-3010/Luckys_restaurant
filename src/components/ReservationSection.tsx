import React, { useState } from 'react';
import { Calendar, Clock, Users, Send, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '8:00 PM',
    seating: '5th Floor Rooftop Lounge',
    requests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;

    const message =
`🍷 *TABLE RESERVATION REQUEST - C/o Rajahmundry Kitchen & Bar*
--------------------------------------------------
👤 *Name:* ${formState.name}
📱 *Phone:* ${formState.phone}
👥 *Guests:* ${formState.guests}
📅 *Date & Time:* ${formState.date} at ${formState.time}
🏙️ *Seating Preference:* ${formState.seating}
📝 *Special Requests:* ${formState.requests || 'None'}
--------------------------------------------------
Please confirm my table reservation!`;

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setFormState({ name: '', phone: '', guests: '2', date: '', time: '8:00 PM', seating: '5th Floor Rooftop Lounge', requests: '' });
  };

  return (
    <section id="reservation" className="py-24 relative bg-white border-t border-b border-[#D4AF37]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#E67E22] block mb-1">
            Book Your Table
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-serif-heading gold-heading-text tracking-tight mb-3">
            Rooftop & Bar Reservations
          </h2>
          <p className="text-xs sm:text-sm text-[#6E5C5C] font-light">
            Guarantee your seating on our 5th floor rooftop or indoor air-conditioned lounge.
          </p>
          <div className="w-20 h-1 bg-[#E67E22] mx-auto rounded-full mt-4" />
        </div>

        {/* Reservation Card */}
        <div className="spice-card p-6 sm:p-10 rounded-3xl border border-gray-200 bg-[#FAF6F0] shadow-md">
          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold font-serif-heading text-[#1F1919]">Reservation Sent to WhatsApp!</h3>
              <p className="text-xs text-[#6E5C5C]">Our manager at C/o Rajahmundry will confirm your table shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs text-[#E67E22] underline font-bold uppercase tracking-wider"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7B1E1E] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Kalyan Ram"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-[#1F1919] placeholder-[#9E8E8E] focus:border-[#E67E22] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7B1E1E] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+91 82228 66693"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-[#1F1919] placeholder-[#9E8E8E] focus:border-[#E67E22] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7B1E1E] mb-1">Guests</label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#E67E22] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={formState.guests}
                      onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 rounded-xl bg-white border border-gray-200 text-xs text-[#1F1919] focus:border-[#E67E22] focus:outline-none cursor-pointer"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests (Family)</option>
                      <option value="6">6 Guests</option>
                      <option value="8+">Large Group (8+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7B1E1E] mb-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#E67E22] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      placeholder="Today / Tomorrow"
                      className="w-full pl-9 pr-3 py-3 rounded-xl bg-white border border-gray-200 text-xs text-[#1F1919] placeholder-[#9E8E8E] focus:border-[#E67E22] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7B1E1E] mb-1">Time</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#E67E22] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={formState.time}
                      onChange={(e) => setFormState({ ...formState, time: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 rounded-xl bg-white border border-gray-200 text-xs text-[#1F1919] focus:border-[#E67E22] focus:outline-none cursor-pointer"
                    >
                      <option value="1:00 PM">1:00 PM (Lunch)</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="7:30 PM">7:30 PM (Dinner)</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="10:00 PM">10:00 PM (Night Bar)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7B1E1E] mb-1">Seating Area Preference</label>
                <select
                  value={formState.seating}
                  onChange={(e) => setFormState({ ...formState, seating: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs text-[#1F1919] focus:border-[#E67E22] focus:outline-none cursor-pointer"
                >
                  <option value="5th Floor Rooftop Open Air Lounge">5th Floor Rooftop Open Air Lounge</option>
                  <option value="Indoor AC Family Dining Area">Indoor AC Family Dining Area</option>
                  <option value="High Bar Counter Seating">High Bar Counter Seating</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7B1E1E] mb-1">Special Requests (Optional)</label>
                <textarea
                  rows={2}
                  value={formState.requests}
                  onChange={(e) => setFormState({ ...formState, requests: e.target.value })}
                  placeholder="Birthday celebration, high chair needed, dietary restrictions..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs text-[#1F1919] placeholder-[#9E8E8E] focus:border-[#E67E22] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl orange-btn-bg text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Reservation via WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
