import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRightFromSquareIcon, Eye } from "lucide-react";
import { AnimatedButton } from "./AnimatedButton";
import { useRef } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const scrollToExplore = () => {
    document.getElementById("featured-collection")?.scrollIntoView({ behavior: "smooth" });
  };

  const openARModal = () => {
    document.getElementById("ar-experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-[#FAF8F5] font-[Inter]"
    >
      {/* Background with Parallax */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1621431869071-934c835377af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] bg-[#C9A871]/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white font-[400] leading-tight tracking-tight mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
              lineHeight: "1.08",
              letterSpacing: "-0.015em",
              textShadow: "0 3px 25px rgba(0,0,0,0.4)",
            }}
          >
            Redefine Your Space
            <br />
            <span className="italic text-[#C9A871]">with Modern Luxury</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-2xl mx-auto text-white/85 mb-14 text-[1.125rem] leading-relaxed md:leading-loose font-light tracking-[0.01em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience furniture in your home through AR before you buy.
            <br />
            Transform your living spaces with elegance, technology, and comfort.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <AnimatedButton onClick={scrollToExplore} variant="primary">
              Explore Collection
            </AnimatedButton>

            <AnimatedButton
              onClick={openARModal}
              variant="outline"
              icon={<ArrowUpRightFromSquareIcon className="w-5 h-5" />}
              className="border-white text-white"
            >
              Try in AR
            </AnimatedButton>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={scrollToExplore}
        >
          <ArrowDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};
