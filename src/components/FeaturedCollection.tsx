import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Eye, ArrowRight, ShoppingCart } from 'lucide-react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Product, useShoppingCart } from './ShoppingCartContext';
import { ProductModal } from './ProductModal';
import { toast } from 'sonner@2.0.3';

const products: Product[] = [
  {
    id: 1,
    name: 'Luxe Velvet Sofa',
    category: 'Living Room',
    price: '$3,499',
    priceValue: 3499,
    image: 'https://images.unsplash.com/photo-1684261556324-a09b2cdf68b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBzb2ZhJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNDM2ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Architectural Armchair',
    category: 'Accent Seating',
    price: '$1,299',
    priceValue: 1299,
    image: 'https://images.unsplash.com/photo-1760611656233-915efdf138b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYXJtY2hhaXIlMjBsdXh1cnl8ZW58MXx8fHwxNzYyNDM2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: 'Marble Dining Set',
    category: 'Dining',
    price: '$4,899',
    priceValue: 4899,
    image: 'https://images.unsplash.com/photo-1685644201646-9e836c398c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NjIzNzAwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    name: 'Designer Coffee Table',
    category: 'Tables',
    price: '$899',
    priceValue: 899,
    image: 'https://images.unsplash.com/photo-1612735489907-520981cd3885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGNvZmZlZSUyMHRhYmxlfGVufDF8fHx8MTc2MjM2ODg4M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export const FeaturedCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart, setIsCartOpen } = useShoppingCart();
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      description: 'View your cart to proceed to checkout',
      action: {
        label: 'View Cart',
        onClick: () => setIsCartOpen(true),
      },
    });
  };

  return (
    <section id="featured-collection" ref={ref} className="py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Parallax Background Element */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#C9A871]/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#C9A871]/10 px-4 py-2 rounded-full mb-6 border border-[#C9A871]/20"
          >
            <span className="tracking-wider uppercase text-[#C9A871]">Our Collection</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-[#2A2A2A]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.2',
              fontWeight: '400'
            }}
          >
            Featured <span className="italic">Masterpieces</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#5A5A5A]"
            style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
          >
            Curated pieces that blend timeless elegance with contemporary innovation.
            Each item is a statement of refined taste.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleProductClick(product)}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-[#E5E1DC] rounded-sm shadow-md hover:shadow-2xl transition-shadow duration-500">
                <motion.div
                  animate={{
                    scale: hoveredId === product.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center pb-8 gap-3"
                >
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredId === product.id ? 0 : 20,
                      opacity: hoveredId === product.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex items-center gap-2 bg-white text-[#2A2A2A] px-6 py-3 hover:bg-[#C9A871] hover:text-white transition-all duration-300 group/btn relative overflow-hidden"
                  >
                    <Eye className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">View Details</span>
                    <motion.div
                      className="absolute inset-0 bg-[#C9A871]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredId === product.id ? 0 : 20,
                      opacity: hoveredId === product.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="flex items-center gap-2 bg-[#2A2A2A] text-white px-6 py-3 hover:bg-[#C9A871] transition-all duration-300 relative overflow-hidden"
                  >
                    <ShoppingCart className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Add</span>
                    <motion.div
                      className="absolute inset-0 bg-[#C9A871]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: hoveredId === product.id ? 1 : 0,
                    scale: hoveredId === product.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 bg-[#C9A871] text-white px-3 py-1 text-sm"
                >
                  NEW
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <p className="text-[#C9A871] uppercase tracking-wider">{product.category}</p>
                
                <h3 
                  className="text-[#2A2A2A] group-hover:text-[#C9A871] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <p className="text-[#2A2A2A]">{product.price}</p>
                  <motion.div
                    animate={{ x: hoveredId === product.id ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#C9A871]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 border-2 border-[#2A2A2A] text-[#2A2A2A] px-10 py-4 hover:bg-[#2A2A2A] hover:text-white transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">View Full Collection</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-[#2A2A2A]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
