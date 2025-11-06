import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Sparkles, Lightbulb, Compass, Award } from 'lucide-react';
import { useRef } from 'react';

const principles = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering AR technology to revolutionize furniture shopping'
  },
  {
    icon: Compass,
    title: 'Craftsmanship',
    description: 'Handpicked materials and meticulous attention to detail'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Award-winning designs recognized worldwide'
  }
];

export const DesignPhilosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yLeft = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-[#C9A871]"
            style={{ top: `${i * 8.33}%` }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ 
              duration: 2, 
              delay: i * 0.1,
              ease: 'easeOut'
            }}
          />
        ))}
      </div>

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="text-[#C9A871]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(8rem, 20vw, 18rem)',
            fontWeight: '700',
            lineHeight: '1'
          }}
        >
          Aura
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-[#C9A871]" />
            <span className="tracking-[0.3em] text-[#C9A871] uppercase">Our Philosophy</span>
            <Sparkles className="w-5 h-5 text-[#C9A871]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 text-[#2A2A2A]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.2',
              fontWeight: '400'
            }}
          >
            Where <span className="italic text-[#C9A871]">Craftsmanship</span>
            <br />
            Meets Technology
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#5A5A5A] max-w-2xl mx-auto mb-20"
            style={{ fontSize: '1.25rem', lineHeight: '1.8' }}
          >
            Every piece at Aura Interiors blends artful design with smart innovation.
            We believe your home should be a reflection of your unique story, enhanced
            by technology that makes design accessible and experiential.
          </motion.p>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-[#FAF8F5] border border-[#C9A871]/20 rounded-full mb-6 group-hover:bg-[#C9A871] group-hover:border-[#C9A871] transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-[#C9A871] group-hover:text-white transition-colors duration-300" />
                  </motion.div>

                  <h3 
                    className="mb-3 text-[#2A2A2A] group-hover:text-[#C9A871] transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {principle.title}
                  </h3>

                  <p className="text-[#5A5A5A]">
                    {principle.description}
                  </p>

                  {/* Decorative underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="h-0.5 bg-gradient-to-r from-transparent via-[#C9A871] to-transparent mt-6"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-8 -top-8 text-[#C9A871]/20"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '8rem',
                lineHeight: '1'
              }}
            >
              "
            </div>
            
            <blockquote 
              className="relative text-[#2A2A2A] italic max-w-3xl mx-auto"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                lineHeight: '1.6'
              }}
            >
              Design is not just what it looks like and feels like.
              <br />
              Design is how it works in your life.
            </blockquote>

            <div className="absolute -right-8 -bottom-8 text-[#C9A871]/20"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '8rem',
                lineHeight: '1'
              }}
            >
              "
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements with Parallax */}
        <motion.div
          style={{ y: yLeft }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-20 left-10 w-32 h-32 border border-[#C9A871]/10 rounded-full"
        />
        <motion.div
          style={{ y: yRight }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-20 right-10 w-24 h-24 border border-[#C9A871]/10 rounded-full"
        />
      </div>
    </section>
  );
};
