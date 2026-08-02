import React, { useState } from 'react';
import { Calendar, Clock, Users, Send, CheckCircle, MapPin, ChevronDown, PhoneCall, Sparkles, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    guests: '4 Guests',
    occasion: 'Mandi Dawat Feast',
    date: todayStr,
    time: '8:30 PM (Dinner)',
    seating: 'Arabian Mandi Floor Majlis',
    requests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;

    const message =
`🍗 *TABLE & MANDI RESERVATION - Lucky's restaurant Suchitra*
--------------------------------------------------
👤 *Name:* ${formState.name}
📱 *Phone:* ${formState.phone}
👥 *Guests:* ${formState.guests}
🍽️ *Dining Style:* ${formState.occasion}
📅 *Date:* ${formState.date}
⏰ *Time Slot:* ${formState.time}
🏛️ *Seating:* ${formState.seating}
📝 *Special Note:* ${formState.requests || 'None'}
--------------------------------------------------
📍 *Location:* Opp. HDFC Bank, Suchitra Road, Hyderabad
Please confirm my table reservation!`;

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <section id="reservation" className="py-8 sm:py-12 relative bg-[#F5EBE0] select-none font-sans">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1615] text-[#F6E27A] text-[11px] font-extrabold uppercase tracking-widest rounded-full">
            <Sparkles className="w-3 h-3 text-[#F6E27A]" />
            <span>LUCKY'S RESTAURANT SUCHITRA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans uppercase text-[#1F1919] tracking-tight">
            TABLE & MANDI RESERVATION
          </h2>
          <p className="text-xs sm:text-sm text-[#6E5C5C] max-w-xl mx-auto font-medium">
            Reserve your table or authentic Arabian Mandi floor seating for family feasts, birthdays, and group celebrations.
          </p>
        </div>

        {/* Highlight Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-[#FAF5ED] p-3 sm:p-4 border border-[#E6DBC5] text-center rounded-xl">
            <span className="text-xl sm:text-2xl block mb-1">🛋️</span>
            <h4 className="text-[11px] sm:text-xs font-bold text-[#1F1919] uppercase">Mandi Majlis</h4>
            <p className="text-[10px] text-gray-500">Traditional Floor Seating</p>
          </div>
          <div className="bg-[#FAF5ED] p-3 sm:p-4 border border-[#E6DBC5] text-center rounded-xl">
            <span className="text-xl sm:text-2xl block mb-1">❄️</span>
            <h4 className="text-[11px] sm:text-xs font-bold text-[#1F1919] uppercase">AC Family Dining</h4>
            <p className="text-[10px] text-gray-500">Spacious & Private</p>
          </div>
          <div className="bg-[#FAF5ED] p-3 sm:p-4 border border-[#E6DBC5] text-center rounded-xl">
            <span className="text-xl sm:text-2xl block mb-1">🌙</span>
            <h4 className="text-[11px] sm:text-xs font-bold text-[#1F1919] uppercase">Open Till 1 AM</h4>
            <p className="text-[10px] text-gray-500">Late Night Biryani & Mandi</p>
          </div>
          <div className="bg-[#FAF5ED] p-3 sm:p-4 border border-[#E6DBC5] text-center rounded-xl">
            <span className="text-xl sm:text-2xl block mb-1">🎉</span>
            <h4 className="text-[11px] sm:text-xs font-bold text-[#1F1919] uppercase">Party Booking</h4>
            <p className="text-[10px] text-gray-500">Jumbo & Family Packs</p>
          </div>
        </div>

        {/* Reservation Card */}
        <div className="bg-[#FAF5ED] p-5 sm:p-8 md:p-10 border border-[#E6DBC5] shadow-2xl rounded-2xl">
          {submitted ? (
            <div className="p-6 sm:p-8 bg-white border border-[#E6DBC5] rounded-xl text-center space-y-4 shadow-sm">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-600 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-black font-sans text-[#1F1919] uppercase">
                Reservation Request Sent!
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5C5C] font-medium leading-relaxed max-w-md mx-auto">
                We've opened WhatsApp with your reservation details. Our team at Lucky’s Suchitra will confirm your table shortly.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#7B1E1E] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#5C1616] transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Desk: {RESTAURANT_INFO.phone}</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1A1615] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Make Another Booking
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              
              {/* Form Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 bg-white border border-[#E6DBC5] text-xs sm:text-sm text-[#1F1919] placeholder-gray-400 focus:border-[#1A1615] focus:outline-none transition-colors rounded-xl font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 bg-white border border-[#E6DBC5] text-xs sm:text-sm text-[#1F1919] placeholder-gray-400 focus:border-[#1A1615] focus:outline-none transition-colors rounded-xl font-sans"
                  />
                </div>
              </div>

              {/* Form Row 2: Guests, Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {/* Guests Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formState.guests}
                      onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                      className="w-full pl-10 pr-9 py-3 bg-white border border-[#E6DBC5] text-xs font-bold text-[#1F1919] focus:border-[#1A1615] focus:outline-none appearance-none cursor-pointer rounded-xl font-sans"
                    >
                      <option value="1-2 Guests">1-2 Guests</option>
                      <option value="4 Guests">4 Guests (Family)</option>
                      <option value="6 Guests">6 Guests (Group)</option>
                      <option value="8 Guests">8 Guests (Large Group)</option>
                      <option value="10+ Guests">10+ Guests (Party Feast)</option>
                      <option value="15+ Mega Group">15+ Mega Group Booking</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Date Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      min={todayStr}
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      className="w-full pl-10 pr-3 py-3 bg-white border border-[#E6DBC5] text-xs font-bold text-[#1F1919] focus:border-[#1A1615] focus:outline-none rounded-xl font-sans"
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
                      className="w-full pl-10 pr-9 py-3 bg-white border border-[#E6DBC5] text-xs font-bold text-[#1F1919] focus:border-[#1A1615] focus:outline-none appearance-none cursor-pointer rounded-xl font-sans"
                    >
                      <optgroup label="Lunch (11:30 AM - 4:00 PM)">
                        <option value="12:30 PM (Lunch)">12:30 PM</option>
                        <option value="1:30 PM (Lunch)">1:30 PM</option>
                        <option value="2:30 PM (Lunch)">2:30 PM</option>
                        <option value="3:30 PM (Late Lunch)">3:30 PM</option>
                      </optgroup>
                      <optgroup label="Dinner & Late Night (7:00 PM - 1:00 AM)">
                        <option value="7:30 PM (Dinner)">7:30 PM</option>
                        <option value="8:30 PM (Dinner)">8:30 PM</option>
                        <option value="9:30 PM (Dinner)">9:30 PM</option>
                        <option value="10:30 PM (Late Night)">10:30 PM</option>
                        <option value="11:30 PM (Midnight Mandi)">11:30 PM</option>
                      </optgroup>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Form Row 3: Dining Style & Seating Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                    Dining Feast Style
                  </label>
                  <div className="relative">
                    <UtensilsCrossed className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formState.occasion}
                      onChange={(e) => setFormState({ ...formState, occasion: e.target.value })}
                      className="w-full pl-10 pr-9 py-3 bg-white border border-[#E6DBC5] text-xs font-bold text-[#1F1919] focus:border-[#1A1615] focus:outline-none appearance-none cursor-pointer rounded-xl font-sans"
                    >
                      <option value="Mandi Dawat Feast">Arabian Mandi Dawat Feast</option>
                      <option value="Hyderabadi Biryani Feast">Hyderabadi Dum Biryani Feast</option>
                      <option value="Angara Kabab & Starters Night">Angara Kababs & Starters Night</option>
                      <option value="Birthday & Family Party">Birthday / Family Party</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-2">
                    Seating Area Preference
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formState.seating}
                      onChange={(e) => setFormState({ ...formState, seating: e.target.value })}
                      className="w-full pl-10 pr-9 py-3 bg-white border border-[#E6DBC5] text-xs font-bold text-[#1F1919] focus:border-[#1A1615] focus:outline-none appearance-none cursor-pointer rounded-xl font-sans"
                    >
                      <option value="Arabian Mandi Floor Majlis">Arabian Mandi Traditional Floor Majlis</option>
                      <option value="Indoor AC Family Section">Indoor AC Family Dining Section</option>
                      <option value="Main Dining Hall Table">Main Dining Hall Table</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
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
                  placeholder="e.g. Birthday cake setup, High chair for toddler, Extra spicy Mandi chutney"
                  className="w-full px-4 py-3 bg-white border border-[#E6DBC5] text-xs text-[#1F1919] placeholder-gray-400 focus:border-[#1A1615] focus:outline-none resize-none font-sans rounded-xl"
                />
              </div>

              {/* Action Buttons: Instant WhatsApp & Phone Call */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 sm:py-4 bg-[#25D366] hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2.5 rounded-xl cursor-pointer hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>BOOK TABLE VIA WHATSAPP</span>
                </button>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="px-6 py-3.5 sm:py-4 bg-[#1A1615] hover:bg-[#7B1E1E] text-white font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 rounded-xl cursor-pointer shrink-0"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

