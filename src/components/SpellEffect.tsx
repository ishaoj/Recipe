import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SpellParticle {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

interface SpellEffectProps {
  isActive?: boolean;
  color?: string;
  particleCount?: number;
}

export default function SpellEffect({ 
  isActive = false, 
  color = '#D4AF37',
  particleCount = 20 
}: SpellEffectProps) {
  const [particles, setParticles] = useState<SpellParticle[]>([]);

  useEffect(() => {
    if (isActive) {
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        scale: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 360
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isActive, particleCount]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
          initial={{
            x: '50%',
            y: '50%',
            scale: 0,
            rotate: 0,
            opacity: 1
          }}
          animate={{
            x: `${50 + particle.x}%`,
            y: `${50 + particle.y}%`,
            scale: particle.scale,
            rotate: particle.rotation,
            opacity: 0
          }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }}
        />
      ))}
    </div>
  );
}