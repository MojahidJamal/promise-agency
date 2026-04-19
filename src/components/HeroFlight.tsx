"use client";

import { useEffect, useId, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

type Props = {
  trailColor?: string;      // default brand blue
  planeSize?: number;       // px, default 36
  durationMs?: number;      // total duration, default 4800
  className?: string;       // positioning class on the whole layer
};

export default function HeroFlight({
  trailColor = "#D4A520",
  planeSize = 36,
  durationMs = 4800,
  className
}: Props) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const planeRef = useRef<SVGSVGElement | null>(null);
  const id = useId();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for responsive sizing
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive plane size and trail
  const responsivePlaneSize = isMobile ? planeSize * 0.7 : planeSize;
  const responsiveStrokeWidth = isMobile ? 2.5 : 3.5;

  // Rounded "loop + arc" path (stays inside hero bounds). viewBox keeps it responsive.
  const pathD =
    "M 90,250 C 40,230 40,170 95,165 C 150,160 140,220 90,210 " + // small loop
    "C 60,200 60,170 110,150 S 300,120 460,90 S 680,85 750,100";   // arc ending near top text

  useEffect(() => {
    if (!pathRef.current || !planeRef.current) return;

    // Respect reduced motion: place plane at end and skip animation
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      // Snap plane to end of path
      gsap.set(planeRef.current, {
        xPercent: -50, yPercent: -50,
      });
      // No dynamic animation; trail fully drawn
      return;
    }

    // Timeline: accelerate -> cruise -> decelerate & stop
    const t = gsap.timeline({ defaults: { ease: "none" } });

    // Draw the trail BEHIND the plane (it follows the plane)
    const length = pathRef.current.getTotalLength?.() ?? 2000;
    // Start with trail hidden
    gsap.set(pathRef.current, { 
      strokeDasharray: `${length} ${length}`,
      strokeDashoffset: length 
    });

    // Motion along path (plane nose follows path direction perfectly)
    t.to(planeRef.current, {
      duration: (durationMs / 1000) * 0.18,
      ease: "power3.out",
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0.0,
        end: 0.18
      }
    })
    .to(planeRef.current, {
      duration: (durationMs / 1000) * 0.62,
      ease: "none",
      motionPath: { 
        path: pathRef.current, 
        align: pathRef.current, 
        autoRotate: true,
        alignOrigin: [0.5, 0.5], 
        start: 0.18, 
        end: 0.80 
      }
    })
    .to(planeRef.current, {
      duration: (durationMs / 1000) * 0.20,
      ease: "power2.out",
      motionPath: { 
        path: pathRef.current, 
        align: pathRef.current, 
        autoRotate: true,
        alignOrigin: [0.5, 0.5], 
        start: 0.80, 
        end: 1.0 
      }
    });

    // Trail appears BEHIND plane as it moves (synchronized)
    t.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: durationMs / 1000,
      ease: "linear"
    }, 0);

    return () => { t.kill(); };
  }, [durationMs, trailColor]);

  // RTL: mirror the whole layer if <html dir="rtl">
  const [isRTL, setIsRTL] = useState(false);
  useEffect(() => {
    setIsRTL(document.documentElement?.dir === "rtl");
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
      aria-hidden="true"
      style={{ transform: isRTL ? "scaleX(-1)" : undefined, transformOrigin: "center" }}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 320" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* subtle glow for the trail */}
          <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id={`trail-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={trailColor} stopOpacity="0.0" />
            <stop offset="35%" stopColor={trailColor} stopOpacity="0.35" />
            <stop offset="100%" stopColor={trailColor} stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Dashed trail path */}
        <path
          ref={pathRef}
          id={`heroFlightPath-${id}`}
          d={pathD}
          fill="none"
          stroke={`url(#trail-${id})`}
          strokeWidth={responsiveStrokeWidth}
          strokeLinecap="round"
          strokeDasharray="7 10"
          filter={`url(#glow-${id})`}
        />
      </svg>

      {/* Plane SVG moving along the same path (centered on point) */}
      <svg
        ref={planeRef}
        width={responsivePlaneSize}
        height={responsivePlaneSize}
        viewBox="0 0 576 512"
        role="img"
        aria-label="airplane"
        style={{ position: "absolute", left: 0, top: 0, transform: "translate(-50%, -50%)", filter: "drop-shadow(0 0 6px rgba(212,165,32,.45))" }}
        className="plane"
      >
        <path fill="#ffffff" d="M482.3 192C516.5 192 576 221 576 256C576 292 516.5 320 482.3 320H365.7L265.2 495.9C259.5 505.8 248.9 512 237.4 512H181.2C170.6 512 162.9 501.8 165.8 491.6L214.9 320H112L68.8 377.6C65.78 381.6 61.04 384 56 384H14.03C6.284 384 0 377.7 0 369.1C0 368.7 .1818 367.4 .5398 366.1L32 256L.5398 145.9C.1818 144.6 0 143.3 0 142C0 134.3 6.284 128 14.03 128H56C61.04 128 65.78 130.4 68.8 134.4L112 192H214.9L165.8 20.4C162.9 10.17 170.6 0 181.2 0H237.4C248.9 0 259.5 6.153 265.2 16.12L365.7 192H482.3z"/>
      </svg>
    </div>
  );
}

