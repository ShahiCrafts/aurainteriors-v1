import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Eye, Star } from 'lucide-react';
import { Product, useShoppingCart } from './ShoppingCartContext';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const { addToCart, setIsCartOpen } = useShoppingCart();

  if (!product) return null;

  const handleAddToCart = () => {
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
              >
                <X className="w-6 h-6 text-[#2A2A2A]" />
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Product Image */}
                <div className="relative">
                  <div className="aspect-square bg-[#E5E1DC] rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-4 left-4 bg-[#C9A871] text-white px-4 py-2 rounded-full"
                  >
                    NEW ARRIVAL
                  </motion.div>

                  {/* AR Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-[#2A2A2A] py-3 rounded-lg hover:bg-white transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                    <span>View in AR</span>
                  </motion.button>
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <div className="flex-1">
                    {/* Category */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-[#C9A871] uppercase tracking-wider mb-2"
                    >
                      {product.category}
                    </motion.p>

                    {/* Product Name */}
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-[#2A2A2A] mb-4"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem' }}
                    >
                      {product.name}
                    </motion.h2>

                    {/* Rating */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 mb-6"
                    >
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < 4 ? 'fill-[#C9A871] text-[#C9A871]' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[#5A5A5A]">(127 reviews)</span>
                    </motion.div>

                    {/* Price */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="text-[#2A2A2A] mb-6"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem' }}
                    >
                      {product.price}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-[#5A5A5A] mb-8 leading-relaxed"
                    >
                      {product.description || 
                        `Experience the perfect blend of contemporary design and timeless elegance with the ${product.name}. Crafted with meticulous attention to detail, this piece transforms any space into a sophisticated sanctuary. Premium materials and expert craftsmanship ensure lasting beauty and comfort.`}
                    </motion.p>

                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="bg-[#FAF8F5] p-6 rounded-lg mb-8"
                    >
                      <h3 className="text-[#2A2A2A] mb-3">Key Features</h3>
                      <ul className="space-y-2 text-[#5A5A5A]">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#C9A871] rounded-full" />
                          Premium materials & construction
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#C9A871] rounded-full" />
                          AR visualization available
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#C9A871] rounded-full" />
                          Free white-glove delivery
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#C9A871] rounded-full" />
                          5-year warranty included
                        </li>
                      </ul>
                    </motion.div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      onClick={handleAddToCart}
                      className="w-full bg-[#2A2A2A] hover:bg-[#C9A871] text-white py-6 rounded-none transition-all duration-300 group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-[#C9A871]"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
