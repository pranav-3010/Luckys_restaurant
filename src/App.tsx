import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { HeroSection } from './components/HeroSection';
import { TickerBanner } from './components/TickerBanner';
import { FeatureGridSection } from './components/FeatureGridSection';
import { BrandStorySplitSection } from './components/BrandStorySplitSection';
import { StoryCalloutBannerSection } from './components/StoryCalloutBannerSection';
import { ExplorePage } from './components/ExplorePage';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';
import type { MenuItem } from './types';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'explore'>('home');
  const [exploreInitialTab, setExploreInitialTab] = useState<'menu' | 'cocktails' | 'reservations' | 'locations'>('menu');
  const [selectedOrderItem, setSelectedOrderItem] = useState<MenuItem | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateToExplore = (sectionId?: string) => {
    if (sectionId === 'events' || sectionId === 'cocktails') {
      setExploreInitialTab('cocktails');
    } else if (sectionId === 'reservation' || sectionId === 'reservations') {
      setExploreInitialTab('reservations');
    } else if (sectionId === 'contact' || sectionId === 'locations') {
      setExploreInitialTab('locations');
    } else {
      setExploreInitialTab('menu');
    }
    setCurrentPage('explore');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAF6F0] text-[#1F1919]">
        <main>
          {currentPage === 'home' ? (
            /* HOMEPAGE VIEW: Clean Minimalist ROAST Layout */
            <>
              <HeroSection
                onExploreMenu={() => navigateToExplore('menu')}
                onReserveTable={() => navigateToExplore('reservations')}
              />

              <TickerBanner />

              <FeatureGridSection onNavigateToExplore={navigateToExplore} />

              <BrandStorySplitSection onNavigateToExplore={navigateToExplore} />

              <StoryCalloutBannerSection onNavigateToExplore={navigateToExplore} />

              <Footer />
            </>
          ) : (
            /* DEDICATED SEPARATE EXPLORE & ORDERING PAGE VIEW (ROAST STYLE) */
            <>
              <ExplorePage
                onBackToHome={navigateToHome}
                onSelectItem={(item) => setSelectedOrderItem(item)}
                initialTab={exploreInitialTab}
              />
              <Footer />
            </>
          )}
        </main>

        <OrderModal
          item={selectedOrderItem}
          onClose={() => setSelectedOrderItem(null)}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
