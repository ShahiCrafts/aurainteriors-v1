import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: ReactNode;
}

export const AnimatedButton = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  icon
}: AnimatedButtonProps) => {
  const variants = {
    primary: {
      base: 'bg-[#2A2A2A] text-white',
      hover: 'bg-[#C9A871]',
    },
    secondary: {
      base: 'bg-[#C9A871] text-white',
      hover: 'bg-[#2A2A2A]',
    },
    outline: {
      base: 'border-2 border-[#2A2A2A] bg-transparent text-[#2A2A2A]',
      hover: 'bg-[#2A2A2A] text-white',
    },
  };

  const { base, hover } = variants[variant];

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${base}
        px-8 py-4
        rounded-none
        transition-all duration-300
        group relative overflow-hidden
        inline-flex items-center justify-center gap-2
        ${className}
      `}
    >
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
      
      {/* Sliding background */}
      <motion.div
        className={`absolute inset-0 ${hover.split(' ')[0]}`}
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </motion.button>
  );
};
