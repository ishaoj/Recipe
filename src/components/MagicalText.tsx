import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface MagicalTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function MagicalText({ children, delay = 0, className = '' }: MagicalTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay,
            ease: [0.2, 0.65, 0.3, 0.9]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}