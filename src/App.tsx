import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { HeroSection } from './components/HeroSection';
import { TickerBanner } from './components/TickerBanner';
import { FeatureGridSection } from './components/FeatureGridSection';
import { BrandStorySplitSection } from './components/BrandStorySplitSection';
import { StoryCalloutBannerSection } from './components/StoryCalloutBannerSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { EventsSection } from './components/EventsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';
import { ArrowLeft, MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';
import type { MenuItem } from './types';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'explore'>('home');
  const [selectedMenuCategory] = useState<string>('all');
  const [selectedOrderItem, setSelectedOrderItem] = useState<MenuItem | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateToExplore = (sectionId?: string) => {
    setCurrentPage('explore');
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAF6F0] text-[#1F1919]">

        {/* Dedicated Page Top Navigation Header (Shown on Explore Page) */}
        {currentPage === 'explore' && (
          <header className="sticky top-0 z-50 bg-[#FAF3E0]/95 backdrop-blur-md border-b border-[#E6DBC5] py-3.5 px-4 sm:px-8 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Back to Home Button */}
              <button
                onClick={navigateToHome}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E6DBC5] text-xs font-bold uppercase tracking-widest text-[#1F1919] hover:bg-[#7B1E1E] hover:text-white hover:border-[#7B1E1E] transition-all cursor-pointer shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>

              {/* Brand Wordmark */}
              <div className="text-center">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1F1919] uppercase font-sans block">
                  C/o Rajahmundry
                </span>
                <span className="text-[10px] font-bold text-[#E67E22] tracking-widest uppercase block">
                  Kitchen and Bar
                </span>
              </div>

              {/* Phone CTA */}
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full orange-btn-bg text-xs font-bold uppercase tracking-widest shadow-sm hover:scale-105 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </header>
        )}

        <main>
          {currentPage === 'home' ? (
            /* HOMEPAGE VIEW: Clean Minimalist ROAST Layout */
            <>
              <HeroSection
                onExploreMenu={() => navigateToExplore('menu')}
                onReserveTable={() => navigateToExplore('reservation')}
              />

              <TickerBanner />

              <FeatureGridSection onNavigateToExplore={navigateToExplore} />

              <BrandStorySplitSection onNavigateToExplore={navigateToExplore} />

              <StoryCalloutBannerSection onNavigateToExplore={navigateToExplore} />
            </>
          ) : (
            /* DEDICATED SEPARATE EXPLORE & ORDERING PAGE VIEW */
            <>
              {/* Top Announcement Bar */}
              <div className="bg-[#7B1E1E] text-white py-4 px-4 text-center select-none border-b border-[#D4AF37]/40">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-medium">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#F6E27A]" />
                    <span>5th Floor, Santa Sriram Estates, Kompally, Hyderabad</span>
                  </span>
                  <span className="font-bold text-[#F6E27A] uppercase tracking-wider">
                    Digital Menu & Bar Card • Kitchen Open Till Midnight
                  </span>
                </div>
              </div>

              <MenuSection
                initialCategory={selectedMenuCategory}
                onSelectItem={(item) => setSelectedOrderItem(item)}
              />

              <AboutSection />

              <GallerySection />

              <EventsSection
                onReserveTable={() => {
                  const el = document.getElementById('reservation');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              <ReviewsSection />

              <ReservationSection />

              <ContactSection />
            </>
          )}
        </main>

        <OrderModal
          item={selectedOrderItem}
          onClose={() => setSelectedOrderItem(null)}
        />

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
