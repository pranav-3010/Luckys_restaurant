import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ShoppingBag, CheckCircle2 } from 'lucide-react';
import type { MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderModalProps {
  isOpen?: boolean;
  onClose: () => void;
  item?: MenuItem | null;
  selectedItem?: MenuItem | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, item, selectedItem }) => {
  const activeDish = item || selectedItem;
  const showModal = isOpen !== undefined ? isOpen : Boolean(activeDish);

  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!showModal || !activeDish) return null;

  const totalPrice = activeDish.price * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message =
`🍷 *NEW DISH ORDER - Lucky's Restaurant Suchitra*
--------------------------------------------------
🍱 *Item:* ${activeDish.name}
🔢 *Quantity:* ${quantity}
💰 *Total Amount:* ₹${totalPrice.toFixed(2)}
--------------------------------------------------
📦 *Order Type:* ${orderType === 'delivery' ? 'Home Delivery (Suchitra)' : 'Takeaway Pick-up'}
📍 *Address:* ${orderType === 'delivery' ? address : '84a, Suchitra Rd, Suchitra (Opp. HDFC Bank)'}
👤 *Name:* ${name}
📱 *Phone:* ${phone}
📝 *Notes:* ${notes || 'None'}
--------------------------------------------------
Please confirm my order!`;

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 select-none font-sans">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-lg bg-[#FAF5ED] border border-[#E6DBC5] shadow-2xl overflow-hidden relative"
        >
          {/* Header */}
          <div className="p-5 bg-[#161312] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#7DCE9F]" />
              <div>
                <h3 className="text-lg font-black font-sans uppercase tracking-wider text-white">
                  Place Dish Order
                </h3>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">
                  Lucky's Restaurant Suchitra
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="p-10 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
              <h4 className="text-2xl font-black font-sans text-[#1F1919] uppercase">Order Sent via WhatsApp!</h4>
              <p className="text-xs text-[#6E5C5C]">Our kitchen team will confirm your order details shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              
              {/* Selected Item Summary Card */}
              <div className="bg-white p-4 border border-[#E6DBC5] flex items-center justify-between">
                <div>
                  <h4 className="font-black text-sm text-[#1F1919] uppercase">{activeDish.name}</h4>
                  <span className="text-xs font-bold text-[#7B1E1E]">₹{activeDish.price.toFixed(2)} per item</span>
                </div>
                
                {/* Quantity Stepper */}
                <div className="flex items-center gap-3 bg-[#FAF5ED] border border-[#E6DBC5] px-3 py-1.5">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-lg font-bold text-gray-600 hover:text-black cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-sm font-black text-[#1F1919] w-4 text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-lg font-bold text-gray-600 hover:text-black cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Order Mode Toggle */}
              <div className="grid grid-cols-2 gap-2 bg-white p-1 border border-[#E6DBC5]">
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`py-2 text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                    orderType === 'delivery' ? 'bg-[#161312] text-[#7DCE9F]' : 'text-gray-500'
                  }`}
                >
                  🛵 Home Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('takeaway')}
                  className={`py-2 text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                    orderType === 'takeaway' ? 'bg-[#161312] text-[#7DCE9F]' : 'text-gray-500'
                  }`}
                >
                  🛍️ Takeaway / Pickup
                </button>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#1F1919] mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full p-2.5 bg-white border border-[#E6DBC5] text-xs text-[#1F1919] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#1F1919] mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className="w-full p-2.5 bg-white border border-[#E6DBC5] text-xs text-[#1F1919] focus:outline-none"
                  />
                </div>
              </div>

              {orderType === 'delivery' && (
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#1F1919] mb-1">Delivery Address *</label>
                  <textarea
                    rows={2}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street, Colony in Suchitra / Nearby Area"
                    className="w-full p-2.5 bg-white border border-[#E6DBC5] text-xs text-[#1F1919] focus:outline-none resize-none"
                  />
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#161312] hover:bg-[#7B1E1E] text-white font-black text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>CONFIRM ORDER (₹{totalPrice.toFixed(2)}) VIA WHATSAPP</span>
              </button>

            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
