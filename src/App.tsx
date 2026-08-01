import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryHighlightsSection } from './components/CategoryHighlightsSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';
import type { MenuItem } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
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
    <div className="min-h-screen bg-[#0B0908] text-[#F3ECE6]">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <HeroSection
          onExploreMenu={() => scrollToSection('menu')}
          onReserveTable={() => scrollToSection('reservation')}
        />

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
  );
}

export default App;
