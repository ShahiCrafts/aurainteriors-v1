import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, ShoppingCart, Search, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { useShoppingCart } from './ShoppingCartContext';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { cartCount, setIsCartOpen } = useShoppingCart();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(42, 42, 42, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.95)', 'rgba(42, 42, 42, 1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-lg backdrop-blur-xl border-b border-gray-200/50' : ''
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-[#C9A871]" />
            </motion.div>
            <motion.span 
              style={{ color: textColor }}
              className="transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem',
                  fontWeight: '600'
                }}
              >
                Aura
              </span>
            </motion.span>
          </motion.div>

          {/* Center Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:flex items-center gap-8"
          >
            {['Collections', 'AR Experience', 'About', 'Showrooms', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                whileHover={{ y: -2 }}
                style={{ color: textColor }}
                className="hover:text-[#C9A871] transition-all duration-300 relative group"
              >
                {item}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#C9A871]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Right Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block p-2 hover:bg-[#C9A871]/10 rounded-full transition-colors duration-200"
            >
              <motion.div style={{ color: textColor }}>
                <Search className="w-5 h-5" />
              </motion.div>
            </motion.button>

            <motion.button 
              onClick={() => setIsCartOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 hover:bg-[#C9A871]/10 rounded-full transition-colors duration-200"
            >
              <motion.div style={{ color: textColor }}>
                <ShoppingCart className="w-5 h-5" />
              </motion.div>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-[#C9A871] text-white rounded-full flex items-center justify-center text-xs"
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
            >
              <motion.div style={{ color: textColor }}>
                <Menu className="w-6 h-6" />
              </motion.div>
            </Button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="hidden md:block bg-[#2A2A2A] hover:bg-[#C9A871] text-white px-6 rounded-none transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Book Consultation</span>
                <motion.div
                  className="absolute inset-0 bg-[#C9A871]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};
