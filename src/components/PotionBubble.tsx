import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
}

interface PotionBubbleProps {
  color?: string;
  bubbleCount?: number;
}

export default function PotionBubble({ 
  color = '#D4AF37', 
  bubbleCount = 10 
}: PotionBubbleProps) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      left: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setBubbles(newBubbles);
  }, [bubbleCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            backgroundColor: color,
            opacity: 0.6
          }}
          initial={{ y: '100%', scale: 0.5 }}
          animate={{
            y: '-100%',
            scale: [0.5, 1, 0.5],
            opacity: [0.6, 0.8, 0]
          }}
          transition={{
            duration: 3,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}