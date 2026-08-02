import React from 'react';

interface FooterProps {
  onNavigateToExplore?: (sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToExplore }) => {
  const handleNav = (id: string) => {
    if (onNavigateToExplore) {
      onNavigateToExplore(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAF5ED] text-[#1F1919] pt-16 pb-12 border-t border-[#E6DBC5] select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Layout matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (4 cols): Brand Name & Address */}
          <div className="md:col-span-4 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight text-[#1F1919] leading-none">
              LUCKY'S RESTAURANT
            </h3>
            <p className="text-xs text-[#554747] font-normal leading-relaxed pt-1">
              Suchitra Road • Opp. to HDFC Bank, Suchitra, Hyderabad.
            </p>
          </div>

          {/* Right Columns (8 cols): 3 Links Columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-[#3D3333] font-medium">
            
            {/* Column 1 */}
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#7B1E1E] transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('menu')} className="hover:text-[#7B1E1E] transition-colors cursor-pointer text-left">
                  Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('events')} className="hover:text-[#7B1E1E] transition-colors cursor-pointer text-left">
                  Events & Bar
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reservation')} className="hover:text-[#7B1E1E] transition-colors cursor-pointer text-left">
                  Reservation
                </button>
              </li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#7B1E1E] transition-colors cursor-pointer text-left">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#7B1E1E] transition-colors cursor-pointer text-left">
                  Our Locations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reservation')} className="hover:text-[#7B1E1E] transition-colors cursor-pointer text-left">
                  Table Booking
                </button>
              </li>
            </ul>

            {/* Column 3 */}
            <ul className="space-y-2.5">
              <li>
                <a href="#terms" className="hover:text-[#7B1E1E] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#7B1E1E] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#refunds" className="hover:text-[#7B1E1E] transition-colors">
                  Refunds & Delivery
                </a>
              </li>
            </ul>

          </div>

        </div>

        {/* Thin bottom divider line matching reference image */}
        <div className="pt-4 border-t border-[#E6DBC5]/60 text-center text-[11px] text-[#7A6A6A]">
          <p>© {new Date().getFullYear()} Lucky’s Restaurant Suchitra. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};
