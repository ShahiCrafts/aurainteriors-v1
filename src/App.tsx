import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ARExperience } from './components/ARExperience';
import { FeaturedCollection } from './components/FeaturedCollection';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import { Toaster } from './components/ui/sonner';
import './styles/globals.css';

export default function App() {
  return (
    <ShoppingCartProvider>
      <div className="min-h-screen">
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <HeroSection />
          <ARExperience />
          <FeaturedCollection />
          <DesignPhilosophy />
          <Testimonials />
        </main>

        {/* Footer */}
        <Footer />

        {/* Shopping Cart Drawer */}
        <CartDrawer />

        {/* Toast Notifications */}
        <Toaster />
      </div>
    </ShoppingCartProvider>
  );
}
