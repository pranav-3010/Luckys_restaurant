import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, MapPin, Phone, User, MessageCircle, Truck, Store } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import type { MenuItem } from '../types';

interface OrderModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ item, onClose }) => {
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [quantity, setQuantity] = useState<number>(1);
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  if (!item) return null;

  const totalPrice = item.price * quantity;

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) return;
    if (orderType === 'delivery' && !address) return;

    const formattedMessage =
`🍷 *NEW DISH ORDER - C/o Rajahmundry Kitchen & Bar*
--------------------------------------------------
🍽️ *Item:* ${quantity}x ${item.name}
💰 *Total Amount:* ₹${totalPrice}
--------------------------------------------------
👤 *Customer Name:* ${customerName}
📱 *Phone Number:* ${phone}
🛵 *Order Type:* ${orderType === 'delivery' ? 'Home Delivery (Kompally)' : 'Takeaway Pick-up (5th Floor)'}
${orderType === 'delivery' ? `📍 *Delivery Address:* ${address}` : '🛍️ *Pick-up Location:* 5th Floor, Santa Sriram Estates, Kompally'}
📝 *Special Notes:* ${notes || 'None'}
--------------------------------------------------
Please confirm my order!`;

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-lg w-full roast-card p-6 sm:p-8 rounded-3xl border border-[#C8963E]/40 bg-[#161311] shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#A8988B] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-[#C8963E]/20 border border-[#C8963E]/40 flex items-center justify-center text-[#F6E27A]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#C8963E]">Quick Order Checkout</span>
              <h3 className="text-lg font-bold font-serif-heading text-[#F6E27A]">{item.name}</h3>
            </div>
          </div>

          <div className="bg-[#0D0B0A] p-4 rounded-2xl border border-[#C8963E]/20 flex items-center justify-between mb-6">
            <div>
              <span className="block text-xs text-[#A8988B]">Price per item</span>
              <span className="text-base font-black text-white font-serif-heading">₹{item.price}</span>
            </div>

            <div className="flex items-center gap-3 bg-[#161311] border border-[#C8963E]/30 px-3 py-1.5 rounded-xl">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-lg font-bold text-[#F6E27A] px-2 hover:scale-110"
              >
                -
              </button>
              <span className="text-sm font-bold text-white w-4 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="text-lg font-bold text-[#F6E27A] px-2 hover:scale-110"
              >
                +
              </button>
            </div>
          </div>

          <form onSubmit={handleSendToWhatsApp} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C8963E] font-bold mb-2">Order Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                    orderType === 'delivery'
                      ? 'amber-gradient-btn border-transparent shadow-lg'
                      : 'bg-[#0D0B0A] text-[#D4C5B9] border-[#C8963E]/30 hover:border-[#F6E27A]'
                  }`}
                >
                  <Truck className="w-4 h-4" /> Delivery
                </button>

                <button
                  type="button"
                  onClick={() => setOrderType('takeaway')}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                    orderType === 'takeaway'
                      ? 'amber-gradient-btn border-transparent shadow-lg'
                      : 'bg-[#0D0B0A] text-[#D4C5B9] border-[#C8963E]/30 hover:border-[#F6E27A]'
                  }`}
                >
                  <Store className="w-4 h-4" /> Pick-up
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C8963E] font-bold mb-1">Your Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#7C7167] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Kalyan Ram"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#0D0B0A] border border-[#C8963E]/30 text-xs text-white placeholder-[#7C7167] focus:border-[#F6E27A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C8963E] font-bold mb-1">Phone Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#7C7167] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 82228 66693"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#0D0B0A] border border-[#C8963E]/30 text-xs text-white placeholder-[#7C7167] focus:border-[#F6E27A] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {orderType === 'delivery' && (
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C8963E] font-bold mb-1">Delivery Address *</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#7C7167] absolute left-3 top-3" />
                  <textarea
                    required
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Flat No, Street / Colony in Kompally / Nearby Area"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#0D0B0A] border border-[#C8963E]/30 text-xs text-white placeholder-[#7C7167] focus:border-[#F6E27A] focus:outline-none resize-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C8963E] font-bold mb-1">Special Notes</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Spice level preference, extra raita, etc..."
                className="w-full px-3 py-2 rounded-xl bg-[#0D0B0A] border border-[#C8963E]/30 text-xs text-white placeholder-[#7C7167] focus:border-[#F6E27A] focus:outline-none"
              />
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#A8988B]">Total Bill Amount:</span>
                <span className="text-xl font-black text-[#F6E27A] font-serif-heading">₹{totalPrice}</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Send Order to WhatsApp</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
