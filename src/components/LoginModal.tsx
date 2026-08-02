import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Smartphone } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'phone' | 'otp' | 'success'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleProceedPhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) return;
    setStep('otp');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      onClose();
      setStep('phone');
      setPhone('');
      setOtp(['', '', '', '']);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-md bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 text-center font-sans"
        >
          {/* Close X Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-[#1A1615] hover:bg-gray-100 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* STEP 1: PHONE NUMBER INPUT */}
          {step === 'phone' && (
            <form onSubmit={handleProceedPhone} className="space-y-6 pt-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1615] font-sans tracking-tight">
                Login / Signup
              </h2>

              <div className="relative">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your Phone Number"
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-xl text-sm sm:text-base text-[#1A1615] placeholder-gray-400 focus:outline-none focus:border-[#1A1615] transition-colors font-sans text-center"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1A1615] hover:bg-[#7B1E1E] text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-full transition-all shadow-lg cursor-pointer hover:scale-[1.01]"
              >
                PROCEED
              </button>

              <p className="text-[11px] text-gray-400 font-light pt-2">
                By proceeding, you agree to C/o Rajahmundry's Terms of Service & Privacy Policy.
              </p>
            </form>
          )}

          {/* STEP 2: OTP VERIFICATION */}
          {step === 'otp' && (
            <form onSubmit={handleVerifyOtp} className="space-y-6 pt-2">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                <Smartphone className="w-6 h-6" />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#1A1615] font-sans">
                Enter 4-Digit OTP
              </h2>

              <p className="text-xs text-gray-500 font-light">
                We sent a verification code to <span className="font-bold text-[#1A1615]">+91 {phone}</span>
              </p>

              <div className="flex justify-center gap-3 py-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => {
                      const newOtp = [...otp];
                      newOtp[idx] = e.target.value;
                      setOtp(newOtp);
                    }}
                    className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-xl text-[#1A1615] focus:outline-none focus:border-[#1A1615] bg-gray-50"
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1A1615] hover:bg-[#7B1E1E] text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-full transition-all shadow-lg cursor-pointer"
              >
                VERIFY & CONTINUE
              </button>

              <button
                type="button"
                onClick={() => setStep('phone')}
                className="text-xs font-bold text-gray-500 hover:text-[#1A1615] underline block mx-auto pt-1"
              >
                Change Phone Number
              </button>
            </form>
          )}

          {/* STEP 3: SUCCESS STATE */}
          {step === 'success' && (
            <div className="space-y-4 py-6 text-center">
              <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto" />
              <h2 className="text-2xl font-bold text-[#1A1615] font-sans">
                Welcome to C/o Rajahmundry!
              </h2>
              <p className="text-xs text-gray-500 font-light">
                You are successfully logged in. Enjoy your culinary experience!
              </p>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
