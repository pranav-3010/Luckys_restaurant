import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF3E0] border-t border-[#E6DBC5] py-16 text-[#1F1919] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">

          {/* Column 1: Brand Wordmark */}
          <div className="space-y-3">
            <h3 className="text-2xl font-black font-sans tracking-tight text-[#1F1919] uppercase">
              C/o Rajahmundry
            </h3>
            <p className="text-xs text-[#6E5C5C] font-light leading-relaxed font-sans max-w-xs">
              Kitchen and Bar • 5th Floor, Santa Sriram Estates, Kompally, Hyderabad.
            </p>
          </div>

          {/* Column 2: Main Links */}
          <div className="space-y-3">
            <ul className="space-y-2 text-sm font-normal text-[#3D3333] font-sans">
              <li><a href="#home" className="hover:text-[#E67E22] transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-[#E67E22] transition-colors">Menu</a></li>
              <li><a href="#events" className="hover:text-[#E67E22] transition-colors">Events & Bar</a></li>
              <li><a href="#reservation" className="hover:text-[#E67E22] transition-colors">Reservation</a></li>
            </ul>
          </div>

          {/* Column 3: Locations & Contact */}
          <div className="space-y-3">
            <ul className="space-y-2 text-sm font-normal text-[#3D3333] font-sans">
              <li><a href="#contact" className="hover:text-[#E67E22] transition-colors">Contact</a></li>
              <li><a href="#contact" className="hover:text-[#E67E22] transition-colors">Our Locations</a></li>
              <li><a href="#reservation" className="hover:text-[#E67E22] transition-colors">Table Booking</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Policy */}
          <div className="space-y-3">
            <ul className="space-y-2 text-sm font-normal text-[#3D3333] font-sans">
              <li><a href="#about" className="hover:text-[#E67E22] transition-colors">Terms & Conditions</a></li>
              <li><a href="#about" className="hover:text-[#E67E22] transition-colors">Privacy Policy</a></li>
              <li><a href="#about" className="hover:text-[#E67E22] transition-colors">Refunds & Delivery</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Minimalist Copyright Line */}
        <div className="mt-16 pt-8 border-t border-[#E6DBC5] text-center text-xs text-[#7A6B6B] font-sans">
          <p>© {new Date().getFullYear()} C/o Rajahmundry Kitchen and Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
