import React from 'react';

export const TickerBanner: React.FC = () => {
  const items = [
    'FOOD',
    'CULTURE',
    'DRINKS',
    'COMMUNITY',
    'WORKSHOPS',
    'GODAVARI RUCHULU',
    'ROOFTOP BAR',
    'COOKER PULAO',
  ];

  // Repeat items for seamless infinite marquee loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#FAF3E0] border-y border-[#E6DBC5] py-4 sm:py-5 overflow-hidden select-none shadow-inner">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeatedItems.map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-10 mx-3 sm:mx-5 shrink-0">
            <span className="text-xl sm:text-3xl font-black uppercase tracking-wider text-[#1A1615] font-sans">
              {text}
            </span>

            {/* Mint Green 6-Point Starburst Icon */}
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#8CD1AD] shrink-0"
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
