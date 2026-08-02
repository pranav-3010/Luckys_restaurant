import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { HeroSection } from './components/HeroSection';
import { TickerBanner } from './components/TickerBanner';
import { FeatureGridSection } from './components/FeatureGridSection';
import { CategoryHighlightsSection } from './components/CategoryHighlightsSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { EventsSection } from './components/EventsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';
import type { MenuItem } from './types';

export function App() {
  const [, setActiveSection] = useState('home');
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<string>('all');
  const [selectedOrderItem, setSelectedOrderItem] = useState<MenuItem | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAF6F0] text-[#1F1919]">
        <main>
          <HeroSection
            onExploreMenu={() => scrollToSection('menu')}
            onReserveTable={() => scrollToSection('reservation')}
          />

          <TickerBanner />

          <FeatureGridSection />

          <CategoryHighlightsSection
            onSelectCategory={(category) => {
              setSelectedMenuCategory(category);
            }}
          />

          <MenuSection
            initialCategory={selectedMenuCategory}
            onSelectItem={(item) => setSelectedOrderItem(item)}
          />

          <AboutSection />

          <GallerySection />

          <EventsSection
            onReserveTable={() => scrollToSection('reservation')}
          />

          <ReviewsSection />

          <ReservationSection />

          <ContactSection />
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
