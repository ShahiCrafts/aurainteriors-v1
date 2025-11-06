import { motion, useInView } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Elena Martinez',
    role: 'Interior Designer',
    content: 'Aura Interiors transformed my approach to client presentations. The AR feature lets clients see exactly how pieces will look in their space. Absolutely revolutionary.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Homeowner',
    content: 'The quality is unmatched. Each piece is a work of art that elevates our entire living space. The AR visualization gave us complete confidence before purchasing.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Sophia Laurent',
    role: 'Architect',
    content: 'The perfect marriage of timeless design and cutting-edge technology. Aura Interiors understands that luxury is in the details and the experience.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  }
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-[#FAF8F5]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#C9A871]/10 px-4 py-2 rounded-full mb-6 border border-[#C9A871]/20"
          >
            <span className="tracking-wider uppercase text-[#C9A871]">Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#2A2A2A]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.2',
              fontWeight: '400'
            }}
          >
            Trusted by <span className="italic text-[#C9A871]">Design Enthusiasts</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 h-full flex flex-col relative overflow-hidden border border-transparent hover:border-[#C9A871]/20 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 text-[#C9A871]/5 group-hover:text-[#C9A871]/10 transition-colors duration-300">
                  <Quote 
                    className="w-32 h-32" 
                    style={{ strokeWidth: 1 }}
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.4 + index * 0.15 + i * 0.05 
                      }}
                    >
                      <Star className="w-5 h-5 fill-[#C9A871] text-[#C9A871]" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <blockquote 
                  className="text-[#2A2A2A] mb-8 flex-grow relative z-10"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.125rem',
                    lineHeight: '1.7',
                    fontStyle: 'italic'
                  }}
                >
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A871]/30 group-hover:border-[#C9A871] transition-colors duration-300">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#2A2A2A]">
                      {testimonial.name}
                    </p>
                    <p className="text-[#C9A871]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Decorative border bottom */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A871] to-transparent origin-center"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto"
        >
          {[
            { number: '10,000+', label: 'Happy Customers' },
            { number: '500+', label: 'Unique Pieces' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '50+', label: 'Design Awards' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div 
                className="text-[#C9A871] mb-2"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '600'
                }}
              >
                {stat.number}
              </div>
              <p className="text-[#5A5A5A] tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
