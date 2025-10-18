'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function AnimatedCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isOnFooter, setIsOnFooter] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.3 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    let animationFrame: number;
    const moveCursor = (e: MouseEvent) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      animationFrame = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      // Check if element is in footer
      const isInFooter = 
        target.closest('footer') ||
        target.closest('[data-footer]') ||
        target.tagName === 'FOOTER';
      
      setIsHovering(!!isInteractive);
      setIsOnFooter(!!isInFooter);
    };

    const handleClick = (e: MouseEvent) => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 6; i++) {
        newParticles.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
        });
      }
      setParticles(newParticles);
      setTimeout(() => setParticles([]), 600);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('click', handleClick);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', handleClick);
    };
  }, [cursorX, cursorY]);

  // Don't render on server or mobile devices
  if (!isMounted || typeof window === 'undefined' || window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Click Particles */}
      <AnimatePresence>
        {particles.map((particle, index) => (
          <motion.div
            key={particle.id}
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              x: particle.x + (Math.cos((index * Math.PI * 2) / 6) * 50),
              y: particle.y + (Math.sin((index * Math.PI * 2) / 6) * 50),
              scale: 0,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            <div
              className={cn(
                'w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2',
                isOnFooter ? 'bg-white' : 'bg-black'
              )}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Trailing effect - Multiple dots */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 2.2 : 1.8,
            opacity: isHovering ? 0.12 : 0.06,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        >
          <div
            className={cn(
              'w-16 h-16 rounded-full blur-xl',
              isOnFooter 
                ? 'bg-white' 
                : 'bg-black'
            )}
          />
        </motion.div>
      </motion.div>

      {/* Custom cursor - Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 2 : 1,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
        >
          <motion.div
            className={cn(
              'w-3 h-3 rounded-full',
              isOnFooter 
                ? 'bg-white shadow-lg shadow-white/50' 
                : 'bg-black shadow-lg shadow-black/50'
            )}
            animate={{
              rotate: isHovering ? 180 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Outer ring with gradient */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.4 : 1,
            opacity: isHovering ? 0.6 : 0.3,
            rotate: isHovering ? 45 : 0,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
        >
          <div
            className={cn(
              'w-10 h-10 rounded-full border-2',
              isOnFooter 
                ? 'border-white' 
                : 'border-black'
            )}
            style={{
              background: isOnFooter 
                ? 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Inner pulsing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div
            className={cn(
              'w-6 h-6 rounded-full',
              isOnFooter 
                ? 'border border-white' 
                : 'border border-black'
            )}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

