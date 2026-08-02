import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle, Tag, ArrowLeft } from 'lucide-react';
import type { MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [address, setAddress] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [isOrdered, setIsOrdered] = useState<boolean>(false);

  const subtotal = cartItems.reduce((acc, ci) => acc + ci.item.price * ci.quantity, 0);
  const gstTax = Math.round(subtotal * 0.05);
  const deliveryFee = orderType === 'delivery' ? (subtotal > 0 ? 49 : 0) : 0;
  const grandTotal = Math.max(0, subtotal + gstTax + deliveryFee - appliedDiscount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'GODAVARI10' || couponCode.toUpperCase() === 'FIRST10') {
      const discount = Math.round(subtotal * 0.1);
      setAppliedDiscount(discount);
    } else {
      alert('Invalid coupon code. Try GODAVARI10 for 10% off!');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const itemsSummary = cartItems
      .map(ci => `• ${ci.item.name} x ${ci.quantity} = ₹${(ci.item.price * ci.quantity).toFixed(2)}`)
      .join('\n');

    const message =
`🛒 *NEW ONLINE ORDER - C/o Rajahmundry Kitchen & Bar*
--------------------------------------------------
📦 *Order Type:* ${orderType === 'delivery' ? 'Home Delivery' : 'Takeaway / Pickup'}
📍 *Address / Notes:* ${address || 'Not specified'}
--------------------------------------------------
*ITEMS ORDERED:*
${itemsSummary}
--------------------------------------------------
💵 *Subtotal:* ₹${subtotal.toFixed(2)}
🌾 *GST (5%):* ₹${gstTax.toFixed(2)}
🛵 *Delivery Fee:* ₹${deliveryFee.toFixed(2)}
🏷️ *Discount:* -₹${appliedDiscount.toFixed(2)}
--------------------------------------------------
💰 *GRAND TOTAL:* ₹${grandTotal.toFixed(2)}
--------------------------------------------------
Please confirm my order and share payment link!`;

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsOrdered(true);
    setTimeout(() => {
      onClearCart();
      setIsOrdered(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Outer Backdrop Overlay - Clicking outside drawer closes cart */}
      <div
        className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm select-none cursor-pointer"
        onClick={onClose}
      >
        {/* Drawer Container - stop propagation so clicking inside doesn't close */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="w-full max-w-md bg-[#FAF5ED] h-full shadow-2xl flex flex-col justify-between border-l border-[#E6DBC5] font-sans cursor-default"
        >
          {/* Cart Drawer Header */}
          <div className="p-5 bg-[#161312] text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer mr-1"
                title="Back to Menu"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h2 className="text-lg font-black font-sans uppercase tracking-wider text-white leading-none">
                  Your Order Cart
                </h2>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mt-1">
                  C/o Rajahmundry Kompally
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
              title="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content / Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {isOrdered ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <CheckCircle className="w-16 h-16 text-emerald-600 animate-bounce" />
                <h3 className="text-2xl font-black font-sans text-[#1F1919] uppercase">
                  Order Placed via WhatsApp!
                </h3>
                <p className="text-xs text-[#6E5C5C] font-light max-w-xs">
                  Thank you! Our kitchen team at C/o Rajahmundry is preparing your meal.
                </p>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                <ShoppingBag className="w-16 h-16 stroke-1 text-gray-400" />
                <h3 className="text-lg font-bold font-sans text-[#1F1919] uppercase">Your Cart is Empty</h3>
                <p className="text-xs text-[#6E5C5C] font-light max-w-xs">
                  Add delicious starters, pulaos & drinks from our menu!
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 px-6 py-3 bg-[#161312] hover:bg-[#7B1E1E] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all cursor-pointer shadow-md"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <>
                {/* Back to Menu Quick Pill */}
                <div className="flex items-center justify-between pb-2 border-b border-[#E6DBC5]">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7B1E1E] hover:underline cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Menu / Add More Items</span>
                  </button>
                </div>

                {/* Delivery / Takeaway Toggle */}
                <div className="grid grid-cols-2 gap-2 bg-white p-1 border border-[#E6DBC5] rounded-none">
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      orderType === 'delivery'
                        ? 'bg-[#161312] text-[#7DCE9F] shadow-sm'
                        : 'text-gray-500 hover:text-[#161312]'
                    }`}
                  >
                    🛵 Home Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      orderType === 'takeaway'
                        ? 'bg-[#161312] text-[#7DCE9F] shadow-sm'
                        : 'text-gray-500 hover:text-[#161312]'
                    }`}
                  >
                    🛍️ Takeaway / Pickup
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3 pt-2">
                  {cartItems.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="bg-white p-4 border border-[#E6DBC5] flex items-center justify-between gap-3 shadow-sm"
                    >
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`w-3 h-3 rounded-sm border flex items-center justify-center p-0.5 ${item.isVeg ? 'border-emerald-600' : 'border-rose-600'}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'}`} />
                          </span>
                          <h4 className="text-xs font-black font-sans text-[#1F1919] uppercase leading-snug">
                            {item.name}
                          </h4>
                        </div>
                        <div className="text-xs font-bold text-[#7B1E1E]">
                          ₹{(item.price * quantity).toFixed(2)}
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 bg-[#FAF5ED] border border-[#E6DBC5] px-2 py-1">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 hover:text-[#7B1E1E] transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-[#1F1919] w-4 text-center">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 hover:text-[#7B1E1E] transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Coupon Form */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Coupon (GODAVARI10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-white border border-[#E6DBC5] text-xs text-[#1F1919] uppercase focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#161312] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#7B1E1E] transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>

                {/* Delivery Address Input */}
                {orderType === 'delivery' && (
                  <div className="pt-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F1919] mb-1">
                      Delivery Address *
                    </label>
                    <textarea
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter full delivery address in Kompally / nearby area"
                      className="w-full p-2.5 bg-white border border-[#E6DBC5] text-xs text-[#1F1919] placeholder-gray-400 focus:outline-none resize-none font-sans"
                    />
                  </div>
                )}
              </>
            )}
          </div>

          {/* Cart Footer Total & Checkout Button */}
          {cartItems.length > 0 && !isOrdered && (
            <div className="p-5 bg-white border-t border-[#E6DBC5] space-y-3">
              <div className="space-y-1.5 text-xs text-[#4A3E3E]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST Tax (5%)</span>
                  <span>₹{gstTax.toFixed(2)}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Coupon Discount</span>
                    <span>-₹{appliedDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-black text-[#1F1919] border-t border-[#E6DBC5] pt-2">
                  <span>GRAND TOTAL</span>
                  <span className="text-[#7B1E1E]">₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-full py-4 bg-[#161312] hover:bg-[#7B1E1E] text-[#7DCE9F] font-black text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  <span>PLACE ORDER VIA WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 text-[#7DCE9F]" />
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-[#1F1919] font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer text-center"
                >
                  Close & Continue Shopping
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
