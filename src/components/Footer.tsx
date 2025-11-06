import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className="relative bg-[#2A2A2A] text-white overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C9A871] blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="py-20 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-[#C9A871]" />
              <span className="tracking-[0.3em] text-[#C9A871] uppercase">Stay Connected</span>
              <Sparkles className="w-5 h-5 text-[#C9A871]" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                fontWeight: '400'
              }}
            >
              Subscribe to Our <span className="italic text-[#C9A871]">Design Newsletter</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 mb-8"
            >
              Get exclusive access to new collections, design inspiration, and AR features.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#C9A871] rounded-none h-14"
              />
              <Button
                type="submit"
                className="bg-[#C9A871] hover:bg-[#D4B481] text-[#2A2A2A] px-8 rounded-none h-14 transition-all duration-300"
              >
                Subscribe
              </Button>
            </motion.form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 
              className="mb-6 text-[#C9A871]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Aura Interiors
            </h4>
            <p className="text-white/60 mb-6">
              Redefining luxury furniture with augmented reality technology and timeless design.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 border border-white/20 hover:border-[#C9A871] flex items-center justify-center rounded-full hover:bg-[#C9A871]/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-white/60 hover:text-[#C9A871]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Shop Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h5 className="mb-6 text-white">Shop</h5>
            <ul className="space-y-3">
              {['Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/60 hover:text-[#C9A871] transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h5 className="mb-6 text-white">Company</h5>
            <ul className="space-y-3">
              {['About Us', 'AR Technology', 'Showrooms', 'Design Services', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/60 hover:text-[#C9A871] transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h5 className="mb-6 text-white">Contact</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-[#C9A871] flex-shrink-0 mt-1" />
                <span>123 Design Avenue<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-[#C9A871] flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-[#C9A871] flex-shrink-0" />
                <span>hello@aurainteriors.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-center md:text-left">
              © 2025 Aura Interiors. All rights reserved.
            </p>
            <div className="flex gap-8 text-white/40">
              <a href="#" className="hover:text-[#C9A871] transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-[#C9A871] transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-[#C9A871] transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
