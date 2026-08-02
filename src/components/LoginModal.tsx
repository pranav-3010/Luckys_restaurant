import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setOtpStep(true);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join('').length === 4) {
      setIsLoggedIn(true);
      setTimeout(() => {
        setIsLoggedIn(false);
        setOtpStep(false);
        setPhoneNumber('');
        setOtp(['', '', '', '']);
        onClose();
      }, 1800);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 font-sans relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {isLoggedIn ? (
            <div className="p-8 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
              <h3 className="text-2xl font-black font-sans text-gray-900">Successfully Logged In!</h3>
              <p className="text-xs text-gray-500">Welcome to Lucky's Restaurant Suchitra!</p>
            </div>
          ) : !otpStep ? (
            /* STEP 1: Phone Number Input */
            <div className="p-8 space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-black font-sans text-gray-900 tracking-tight">
                  Login or Signup
                </h2>
                <p className="text-xs text-gray-500">
                  Enter your phone number to manage orders & rewards.
                </p>
              </div>

              <form onSubmit={handleSendOtp} className="space-y-5">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Enter your Phone Number
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-sm font-bold text-gray-500 border-r pr-2">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                      placeholder="98765 43210"
                      className="w-full pl-14 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 placeholder-gray-400 focus:bg-white focus:border-black focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={phoneNumber.length < 10}
                  className="w-full py-4 bg-[#161312] hover:bg-[#7B1E1E] disabled:bg-gray-200 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>PROCEED</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="pt-2 text-center border-t border-gray-100">
                <p className="text-[11px] text-gray-400">
                  By proceeding, you agree to Lucky's Restaurant Terms of Service & Privacy Policy.
                </p>
              </div>
            </div>
          ) : (
            /* STEP 2: OTP Verification */
            <div className="p-8 space-y-6">
              <div className="space-y-1">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black font-sans text-gray-900 tracking-tight">
                  Verify OTP Code
                </h2>
                <p className="text-xs text-gray-500">
                  Enter the 4-digit code sent to <strong className="text-gray-900">+91 {phoneNumber}</strong>
                </p>
              </div>

              <form onSubmit={handleVerifyOtp} className="space-y-5">
                <div className="flex justify-between gap-3">
                  {[0, 1, 2, 3].map((idx) => (
                    <input
                      key={idx}
                      id={`otp-input-${idx}`}
                      type="text"
                      maxLength={1}
                      value={otp[idx]}
                      onChange={(e) => {
                        const val = e.target.value;
                        const newOtp = [...otp];
                        newOtp[idx] = val;
                        setOtp(newOtp);
                        if (val && idx < 3) {
                          const nextEl = document.getElementById(`otp-input-${idx + 1}`);
                          if (nextEl) nextEl.focus();
                        }
                      }}
                      className="w-14 h-14 text-center bg-gray-50 border border-gray-200 rounded-xl text-xl font-black text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={otp.join('').length < 4}
                  className="w-full py-4 bg-[#161312] hover:bg-[#7B1E1E] disabled:bg-gray-200 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>VERIFY & LOGIN</span>
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setOtpStep(false)}
                    className="text-xs text-gray-500 hover:text-black font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Change Phone Number
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
