import React, { useState } from 'react';
import { Calendar, Clock, Users, Send, CheckCircle, MapPin, ChevronDown } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: '',
    time: '8:30 PM',
    seating: '5th Floor Rooftop Open Air Lounge',
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
📅 *Date & Time:* ${formState.date || 'Today'} at ${formState.time}
🏙️ *Seating Preference:* ${formState.seating}
📝 *Special Requests:* ${formState.requests || 'None'}
--------------------------------------------------
Please confirm my table reservation!`;

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setFormState({ name: '', phone: '', guests: '2 Guests', date: '', time: '8:30 PM', seating: '5th Floor Rooftop Open Air Lounge', requests: '' });
  };

  return (
    <section id="reservation" className="py-16 sm:py-24 relative bg-[#F5EBE0] select-none font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (General Sans 800) */}
        <div className="text-center mb-10 space-y-2">
          <span className="eyebrow-text block text-xs sm:text-sm">
            5TH FLOOR ROOFTOP & AC LOUNGE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans uppercase text-[#1F1919] tracking-tight">
            TABLE RESERVATION
          </h2>
          <p className="text-xs sm:text-base text-[#6E5C5C] font-light max-w-xl mx-auto leading-relaxed">
            Reserve your table for an authentic Godavari feast or rooftop cocktail experience at C/o Rajahmundry, Kompally.
          </p>
        </div>

        {/* Reservation Card (Rock-Solid Clean Dropdowns) */}
        <div className="bg-[#FAF5ED] p-6 sm:p-10 border border-[#E6DBC5] shadow-xl rounded-none">
          {submitted ? (
            <div className="p-8 bg-white border border-[#E6DBC5] text-center space-y-4">
              <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-black font-sans text-[#1F1919] uppercase">Reservation Sent to WhatsApp!</h3>
              <p className="text-xs sm:text-sm text-[#6E5C5C] font-light">
                Our restaurant manager at C/o Rajahmundry will confirm your table shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#1A1615] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#7B1E1E] transition-colors cursor-pointer"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 bg-white border border-[#E6DBC5] text-sm text-[#1F1919] placeholder-gray-400 focus:border-[#1A1615] focus:outline-none transition-colors font-sans rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3.5 bg-white border border-[#E6DBC5] text-sm text-[#1F1919] placeholder-gray-400 focus:border-[#1A1615] focus:outline-none transition-colors font-sans rounded-none"
                  />
                </div>
              </div>

              {/* Form Row 2: Guests, Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Guests Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formState.guests}
                      onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                      className="w-full pl-10 pr-9 py-3.5 bg-white border border-[#E6DBC5] text-xs font-bold text-[#1F1919] focus:border-[#1A1615] focus:outline-none appearance-none cursor-pointer font-sans rounded-none"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4 Guests">4 Guests</option>
                      <option value="5 Guests">5 Guests</option>
                      <option value="6 Guests">6 Guests</option>
                      <option value="Large Group (8+)">Large Group (8+)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Date Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      placeholder="Today / Tomorrow"
                      className="w-full pl-10 pr-4 py-3.5 bg-white border border-[#E6DBC5] text-xs text-[#1F1919] placeholder-gray-400 focus:border-[#1A1615] focus:outline-none font-sans rounded-none"
                    />
                  </div>
                </div>

                {/* Time Slot Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                    Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formState.time}
                      onChange={(e) => setFormState({ ...formState, time: e.target.value })}
                      className="w-full pl-10 pr-9 py-3.5 bg-white border border-[#E6DBC5] text-xs font-bold text-[#1F1919] focus:border-[#1A1615] focus:outline-none appearance-none cursor-pointer font-sans rounded-none"
                    >
                      <option value="12:30 PM">12:30 PM (Lunch)</option>
                      <option value="1:30 PM">1:30 PM (Lunch)</option>
                      <option value="2:30 PM">2:30 PM (Lunch)</option>
                      <option value="7:00 PM">7:00 PM (Dinner)</option>
                      <option value="8:00 PM">8:00 PM (Dinner)</option>
                      <option value="8:30 PM">8:30 PM (Dinner)</option>
                      <option value="9:30 PM">9:30 PM (Late Dinner)</option>
                      <option value="10:30 PM">10:30 PM (Night Bar)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Form Row 3: Seating Preference Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                  Seating Area Preference
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={formState.seating}
                    onChange={(e) => setFormState({ ...formState, seating: e.target.value })}
                    className="w-full pl-10 pr-9 py-3.5 bg-white border border-[#E6DBC5] text-xs font-bold text-[#1F1919] focus:border-[#1A1615] focus:outline-none appearance-none cursor-pointer font-sans rounded-none"
                  >
                    <option value="5th Floor Rooftop Open Air Lounge">5th Floor Rooftop Open Air Lounge</option>
                    <option value="Indoor AC Family Dining Area">Indoor AC Family Dining Area</option>
                    <option value="High Bar Counter Seating">High Bar Counter Seating</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Form Row 4: Special Requests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formState.requests}
                  onChange={(e) => setFormState({ ...formState, requests: e.target.value })}
                  placeholder="Special requests or food preferences (e.g. Birthday celebration, High chair needed)"
                  className="w-full px-4 py-3.5 bg-white border border-[#E6DBC5] text-xs text-[#1F1919] placeholder-gray-400 focus:border-[#1A1615] focus:outline-none resize-none font-sans rounded-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#1A1615] hover:bg-[#7B1E1E] text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>CONFIRM RESERVATION VIA WHATSAPP</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
