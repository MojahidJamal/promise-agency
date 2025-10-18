'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLocale } from 'next-intl';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface Testimonial {
  name: string;
  name_en?: string;
  quote_ar: string;
  quote_en: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoplayDelay?: number;
}

export default function TestimonialCarousel({
  testimonials,
  autoplayDelay = 6000,
}: TestimonialCarouselProps) {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    if (!isHovered) {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }
  }, [testimonials.length, isHovered]);

  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplayDelay, next]);

  if (!testimonials.length) return null;

  // Get visible testimonials for desktop view
  const getVisibleTestimonials = () => {
    if (testimonials.length === 1) return [0];
    if (testimonials.length === 2) return [0, 1];
    
    // For 3+ testimonials, show current and next 2
    return [
      current,
      (current + 1) % testimonials.length,
      (current + 2) % testimonials.length,
    ];
  };

  const visibleIndices = getVisibleTestimonials();

  return (
    <div className="relative w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
      </div>

      {/* Mobile View: Single Card Carousel */}
      <div className="block md:hidden relative max-w-lg mx-auto px-4">
        <div className="relative min-h-[400px]">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-xl">
              <Quote className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white rounded-3xl shadow-2xl p-6 pt-12 relative backdrop-blur-sm"
            >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="text-lg text-gray-700 mb-6 text-center leading-relaxed font-arabic">
              &quot;{locale === 'ar' ? testimonials[current].quote_ar : testimonials[current].quote_en}&quot;
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/20 to-blue-200/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">
                  {(locale === 'ar' ? testimonials[current].name : (testimonials[current].name_en || testimonials[current].name)).charAt(0)}
                </span>
              </div>
              <div className="font-bold text-base text-gray-800 font-arabic">
                {locale === 'ar' ? testimonials[current].name : (testimonials[current].name_en || testimonials[current].name)}
              </div>
              <div className="text-primary text-sm font-medium font-arabic">
                {locale === 'ar' ? 'عميل سعيد' : 'Happy Customer'}
              </div>
            </div>

            {/* Navigation Arrows */}
            {testimonials.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className={cn(
                    'absolute top-1/2 -translate-y-1/2 p-2.5 rounded-xl',
                    'bg-white hover:bg-primary hover:text-white',
                    'transition-all duration-300 shadow-lg',
                    isRTL ? 'right-2' : 'left-2'
                  )}
                  aria-label="Previous testimonial"
                >
                  {isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
                <button
                  onClick={next}
                  className={cn(
                    'absolute top-1/2 -translate-y-1/2 p-2.5 rounded-xl',
                    'bg-white hover:bg-primary hover:text-white',
                    'transition-all duration-300 shadow-lg',
                    isRTL ? 'left-2' : 'right-2'
                  )}
                  aria-label="Next testimonial"
                >
                  {isRTL ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              </>
            )}
          </motion.div>
          </AnimatePresence>

          {/* Dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    idx === current
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 hover:bg-gray-400 w-2'
                  )}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop & Tablet View: Grid Layout */}
      <div className="hidden md:block relative max-w-7xl mx-auto px-4">
        <div className={cn(
          "grid gap-6 lg:gap-8",
          testimonials.length === 1 ? "grid-cols-1 max-w-2xl mx-auto" :
          testimonials.length === 2 ? "md:grid-cols-2 max-w-5xl mx-auto" :
          "md:grid-cols-2 lg:grid-cols-3"
        )}>
          <AnimatePresence mode="popLayout">
            {visibleIndices.map((idx, position) => {
              const testimonial = testimonials[idx];
              const isCenter = position === 1 && testimonials.length >= 3;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: isCenter ? 1.05 : 1,
                    translateY: isCenter ? -16 : 0
                  }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: position * 0.1,
                    ease: 'easeOut' 
                  }}
                  className="relative group"
                >
                {/* Decorative Quote Mark */}
                <div className={cn(
                  "absolute -top-4 z-10 transition-all duration-300",
                  isRTL ? "right-6" : "left-6",
                  "group-hover:scale-110 group-hover:-translate-y-1"
                )}>
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl",
                    isCenter 
                      ? "bg-gradient-to-br from-primary via-blue-500 to-blue-600" 
                      : "bg-gradient-to-br from-primary to-blue-500"
                  )}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className={cn(
                  "relative h-full rounded-3xl p-8 pt-10 transition-all duration-300",
                  "backdrop-blur-sm",
                  "group-hover:shadow-2xl group-hover:-translate-y-2",
                  isCenter 
                    ? "bg-gradient-to-br from-white via-blue-50/30 to-white shadow-xl" 
                    : "bg-white shadow-lg"
                )}>
                  
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "w-4 h-4 transition-all duration-300",
                          "fill-yellow-400 text-yellow-400",
                          "group-hover:scale-110"
                        )}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote className={cn(
                    "text-base lg:text-lg text-gray-700 mb-6 leading-relaxed font-arabic",
                    "min-h-[100px] flex items-center justify-center text-center"
                  )}>
                    &quot;{locale === 'ar' ? testimonial.quote_ar : testimonial.quote_en}&quot;
                  </blockquote>

                  {/* Decorative Line */}
                  <div className="w-16 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full mx-auto mb-6" />

                  {/* Author */}
                  <div className="text-center">
                    <div className={cn(
                      "w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center",
                      "transition-all duration-300 group-hover:scale-110",
                      isCenter
                        ? "bg-gradient-to-br from-primary/20 via-blue-100/50 to-blue-200/30"
                        : "bg-gradient-to-br from-primary/15 to-blue-100/30"
                    )}>
                      <span className="text-2xl font-bold text-primary">
                        {(locale === 'ar' ? testimonial.name : (testimonial.name_en || testimonial.name)).charAt(0)}
                      </span>
                    </div>
                    <div className="font-bold text-lg text-gray-800 font-arabic mb-1">
                      {locale === 'ar' ? testimonial.name : (testimonial.name_en || testimonial.name)}
                    </div>
                    <div className={cn(
                      "text-sm font-medium font-arabic transition-colors",
                      isCenter ? "text-primary" : "text-primary/80"
                    )}>
                      {locale === 'ar' ? 'عميل سعيد' : 'Happy Customer'}
                    </div>
                  </div>

                  {/* Decorative Corner Accent */}
                  <div className={cn(
                    "absolute bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none",
                    "transition-all duration-300 group-hover:opacity-10"
                  )}>
                    <Quote className="w-full h-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        {testimonials.length > 3 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className={cn(
                'p-4 rounded-2xl bg-white hover:bg-primary hover:text-white',
                'transition-all duration-300 shadow-lg',
                'hover:shadow-xl hover:scale-110'
              )}
              aria-label="Previous testimonials"
            >
              {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
            </button>

            {/* Progress Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={cn(
                    'h-2.5 rounded-full transition-all duration-300',
                    visibleIndices.includes(idx)
                      ? 'bg-primary w-10'
                      : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                  )}
                  aria-label={`Go to testimonial group ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className={cn(
                'p-4 rounded-2xl bg-white hover:bg-primary hover:text-white',
                'transition-all duration-300 shadow-lg',
                'hover:shadow-xl hover:scale-110'
              )}
              aria-label="Next testimonials"
            >
              {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </button>
          </div>
        )}

        {/* Simple Dots for 1-3 testimonials */}
        {testimonials.length > 1 && testimonials.length <= 3 && (
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300',
                  visibleIndices.includes(idx)
                    ? 'bg-primary w-10'
                    : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                )}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

