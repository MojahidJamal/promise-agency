"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Simple CSS-based smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add smooth scroll for all browsers
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      * {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
}

