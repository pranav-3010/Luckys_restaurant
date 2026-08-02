import React from 'react';

export const TickerBanner: React.FC = () => {
  const items = [
    'FOOD',
    'CULTURE',
    'DRINKS',
    'COMMUNITY',
    'GODAVARI RUCHULU',
    'ROOFTOP BAR',
  ];

  // Repeat items for seamless infinite marquee loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#FAF3E0] border-y-2 border-[#E6DBC5] py-6 sm:py-8 overflow-hidden select-none shadow-md">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeatedItems.map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 sm:gap-14 mx-4 sm:mx-8 shrink-0">
            <span className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-widest text-[#1A1615] font-sans">
              {text}
            </span>

            {/* Mint Green 6-Point Starburst Icon */}
            <svg
              className="w-7 h-7 sm:w-10 sm:h-10 text-[#8CD1AD] shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.2 8.3L22.6 6L16.4 12L22.6 18L14.2 15.7L12 24L9.8 15.7L1.4 18L7.6 12L1.4 6L9.8 8.3L12 0Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
