'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/utils/cn';

export default function AnimatedCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isOnPrimary, setIsOnPrimary] = useState(false);
  const [isOnFooter, setIsOnFooter] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      // Check if element has primary color background
      const hasPrimaryBackground = 
        target.classList.contains('bg-primary') ||
        target.closest('.bg-primary') ||
        target.classList.contains('bg-[#0d99e4]') ||
        target.closest('.bg-[#0d99e4]') ||
        target.classList.contains('gradient-bg') ||
        target.closest('.gradient-bg');
      
      // Check if element is in footer
      const isInFooter = 
        target.closest('footer') ||
        target.closest('[data-footer]') ||
        target.tagName === 'FOOTER';
      
      setIsHovering(!!isInteractive);
      setIsOnPrimary(!!hasPrimaryBackground);
      setIsOnFooter(!!isInFooter);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
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
            scale: isHovering ? 1.8 : 1,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
        >
          <div
            className={cn(
              'w-5 h-5 rounded-full',
              isOnFooter ? 'bg-white' : 'bg-black'
            )}
          />
        </motion.div>
      </motion.div>

      {/* Outer ring */}
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
            opacity: isHovering ? 0.6 : 0.4,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        >
          <div
            className={cn(
              'w-12 h-12 rounded-full border-2',
              isOnFooter ? 'border-white' : 'border-black'
            )}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

