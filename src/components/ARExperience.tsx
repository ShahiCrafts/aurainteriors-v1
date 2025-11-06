import { motion, useInView } from 'motion/react';
import { QrCode, Smartphone, Sparkles, Eye } from 'lucide-react';
import { useRef, useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const ARExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <section id="ar-experience" ref={ref} className="relative py-32 bg-[#2A2A2A] overflow-hidden">
      {/* Animated Gold Lines Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#C9A871] to-transparent"
            style={{ top: `${20 + i * 20}%`, width: '100%' }}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              ease: 'linear',
              delay: i * 0.5 
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: AR Demo Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#C9A871]/30">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614917752476-02e4b89b4bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB1c2luZyUyMHBob25lJTIwQVJ8ZW58MXx8fHwxNzYyNDM2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AR Experience"
                className="w-full h-full object-cover"
              />
              
              {/* Floating AR Icons */}
              <motion.div
                className="absolute top-8 right-8 bg-[#C9A871] p-4 rounded-full shadow-2xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Smartphone className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute bottom-12 left-8 backdrop-blur-md bg-white/20 px-6 py-3 rounded-full border border-white/40"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="text-white flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>View in your room</span>
                </p>
              </motion.div>
            </div>

            {/* Decorative Element */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C9A871]/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-[#C9A871]/20 px-4 py-2 rounded-full mb-6 border border-[#C9A871]/30"
            >
              <Sparkles className="w-4 h-4 text-[#C9A871]" />
              <span className="tracking-wider uppercase">AR Technology</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.2',
                fontWeight: '400',
                marginBottom: '1.5rem'
              }}
            >
              See How Our Furniture
              <br />
              <span className="italic text-[#C9A871]">Fits Your World</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-white/70 mb-8"
              style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
            >
              Experience our furniture in your actual space before making a decision. 
              Our augmented reality technology lets you visualize every piece perfectly scaled 
              and positioned in your home.
            </motion.p>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="space-y-4 mb-8"
            >
              {[
                'Real-time 3D visualization',
                'Accurate size and scale',
                'Works on any mobile device',
                'Save and share your designs'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-[#C9A871] rounded-full" />
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* QR Code Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              onClick={() => setShowQRModal(true)}
              className="group relative inline-flex items-center gap-3 bg-[#C9A871] hover:bg-[#D4B481] text-[#2A2A2A] px-8 py-4 transition-all duration-300 overflow-hidden"
            >
              <QrCode className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Scan QR to Try AR</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Gold Gradient Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-[#C9A871] to-transparent mt-24"
        />
      </div>

      {/* QR Modal */}
      <Dialog open={showQRModal} onOpenChange={setShowQRModal}>
        <DialogContent className="bg-white border-0 max-w-md">
          <div className="text-center py-8">
            <h3 
              className="mb-6 text-[#2A2A2A]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Experience AR
            </h3>
            <div className="w-64 h-64 mx-auto bg-[#FAF8F5] border-2 border-[#C9A871]/30 rounded-xl flex items-center justify-center mb-6">
              <QrCode className="w-32 h-32 text-[#C9A871]" />
            </div>
            <p className="text-[#5A5A5A]">
              Scan this QR code with your mobile device to launch the AR experience
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
