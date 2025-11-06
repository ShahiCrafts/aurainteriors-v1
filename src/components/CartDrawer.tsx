import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useShoppingCart } from './ShoppingCartContext';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const CartDrawer = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    cartTotal 
  } = useShoppingCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-[#C9A871]" />
                <h2 
                  className="text-[#2A2A2A]"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem' }}
                >
                  Shopping Cart
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-[#2A2A2A]" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                  <p className="text-[#5A5A5A] mb-2">Your cart is empty</p>
                  <p className="text-sm text-[#5A5A5A]/60">Add some beautiful furniture to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 bg-[#FAF8F5] p-4 rounded-lg"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-[#E5E1DC] rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-[#2A2A2A] truncate">{item.name}</h3>
                            <p className="text-sm text-[#C9A871]">{item.category}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-50 transition-colors"
                            >
                              <Minus className="w-4 h-4 text-[#2A2A2A]" />
                            </button>
                            <span className="w-8 text-center text-[#2A2A2A]">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-50 transition-colors"
                            >
                              <Plus className="w-4 h-4 text-[#2A2A2A]" />
                            </button>
                          </div>
                          <p className="text-[#2A2A2A]">{item.price}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-200 bg-[#FAF8F5]">
                {/* Subtotal */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#5A5A5A]">Subtotal</span>
                  <span 
                    className="text-[#2A2A2A]"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem' }}
                  >
                    ${cartTotal.toLocaleString()}
                  </span>
                </div>

                <p className="text-sm text-[#5A5A5A] mb-4">Shipping and taxes calculated at checkout</p>

                {/* Checkout Button */}
                <Button
                  className="w-full bg-[#2A2A2A] hover:bg-[#C9A871] text-white py-6 rounded-none transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10">Proceed to Checkout</span>
                  <motion.div
                    className="absolute inset-0 bg-[#C9A871]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full mt-3 text-[#5A5A5A] hover:text-[#2A2A2A] transition-colors py-3"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
