'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function AnimatedCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
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
      
      setIsHovering(!!isInteractive);
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

      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
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
          <div
            className="w-3 h-3 rounded-full bg-[#0d99e4]"
            style={{
              boxShadow: '0 0 8px #0d99e4, 0 0 16px rgba(13, 153, 228, 0.5)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Outer ring when hovering */}
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
            scale: isHovering ? 1.5 : 0.8,
            opacity: isHovering ? 0.5 : 0.3,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        >
          <div
            className="w-8 h-8 rounded-full border-2 border-[#0d99e4]"
            style={{
              boxShadow: '0 0 6px rgba(13, 153, 228, 0.3)',
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

