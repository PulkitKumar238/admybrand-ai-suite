import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  children: ReactNode;
  intensity?: number;
}

export function FloatingElements({ children, intensity = 10 }: FloatingElementsProps) {
  return (
    <motion.div
      animate={{
        y: [0, -intensity, 0, intensity, 0],
        x: [0, intensity, 0, -intensity, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
} 