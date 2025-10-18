'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLocale } from 'next-intl';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
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
  autoplayDelay = 5000,
}: TestimonialCarouselProps) {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplayDelay, next]);

  if (!testimonials.length) return null;

  const currentTestimonial = testimonials[current];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Quote Icon */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl">
          <Quote className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 pt-16 relative">
        {/* Quote Text */}
        <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 text-center leading-relaxed">
          &quot;{locale === 'ar' ? currentTestimonial.quote_ar : currentTestimonial.quote_en}&quot;
        </blockquote>

        {/* Author */}
        <div className="text-center">
          <div className="font-bold text-lg text-black">
            {locale === 'ar' ? currentTestimonial.name : (currentTestimonial.name_en || currentTestimonial.name)}
          </div>
          <div className="text-primary font-medium">
            {locale === 'ar' ? 'عميل سعيد' : 'Happy Customer'}
          </div>
        </div>

        {/* Navigation */}
        {testimonials.length > 1 && (
          <>
            <button
              onClick={prev}
              className={cn(
                'absolute top-1/2 -translate-y-1/2 p-3 rounded-full',
                'bg-gray-100 hover:bg-primary hover:text-white',
                'transition-all duration-300 shadow-md',
                isRTL ? 'right-4' : 'left-4'
              )}
              aria-label="Previous testimonial"
            >
              {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
            </button>
            <button
              onClick={next}
              className={cn(
                'absolute top-1/2 -translate-y-1/2 p-3 rounded-full',
                'bg-gray-100 hover:bg-primary hover:text-white',
                'transition-all duration-300 shadow-md',
                isRTL ? 'left-4' : 'right-4'
              )}
              aria-label="Next testimonial"
            >
              {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </button>
          </>
        )}

        {/* Dots */}
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  idx === current
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
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

