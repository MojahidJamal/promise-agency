'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { MessageCircle, PackageOpen, Star, Shield, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { buildWhatsAppUrl } from '@/utils/whatsapp';
import content from '@/content/trustband.json';

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative bg-gradient-to-br from-[#0d99e4] via-[#0a7ab8] to-[#085a8c] text-white overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={cn(
                'text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight',
                'font-arabic'
              )}
            >
              {isRTL ? content.brand.tagline_ar : content.brand.tagline_en}
            </motion.h1>
            
            {/* Trust Band Logo/Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">TB</span>
              </div>
              <span className="font-bold text-lg">Trust Band Travel</span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <div className={cn(
            'flex flex-col sm:flex-row gap-4 justify-center items-center mb-16',
            isRTL && 'sm:flex-row-reverse'
          )}>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-3 px-8 py-4 rounded-2xl',
                'bg-white text-primary font-bold text-lg',
                'transition-all duration-300 shadow-trust-lg',
                'hover:scale-105 transform hover:shadow-2xl',
                'w-full sm:w-auto justify-center min-w-[200px]'
              )}
            >
              <MessageCircle className="w-6 h-6" />
              <span>{t('hero.cta_whatsapp')}</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            >
              <Link
                href={`/${locale}/packages`}
                className={cn(
                  'flex items-center gap-3 px-8 py-4 rounded-2xl',
                  'bg-white/10 hover:bg-white/20 text-white font-bold text-lg',
                  'transition-all duration-300 backdrop-blur-sm',
                  'hover:scale-105 transform',
                  'w-full sm:w-auto justify-center min-w-[200px]'
                )}
              >
                <PackageOpen className="w-6 h-6" />
                <span>{t('hero.cta_packages')}</span>
              </Link>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { 
                label: isRTL ? 'حجز آمن' : 'Secure Booking', 
                icon: Shield,
                desc: isRTL ? 'حماية كاملة' : 'Full Protection'
              },
              { 
                label: isRTL ? 'دعم 24/7' : '24/7 Support', 
                icon: Clock,
                desc: isRTL ? 'متاح دائماً' : 'Always Available'
              },
              { 
                label: isRTL ? 'أفضل الأسعار' : 'Best Prices', 
                icon: Award,
                desc: isRTL ? 'أسعار تنافسية' : 'Competitive Rates'
              },
              { 
                label: isRTL ? 'تقييم 5 نجوم' : '5-Star Rating', 
                icon: Star,
                desc: isRTL ? 'جودة عالية' : 'High Quality'
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1, ease: 'easeOut' }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-white mb-2 text-lg font-arabic">{item.label}</div>
                <div className="text-sm text-white/80 font-arabic">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

