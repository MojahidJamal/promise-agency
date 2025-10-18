'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { MessageCircle, PackageOpen, Star, Shield, Clock, Award } from 'lucide-react';
import { cn } from '@/utils/cn';
import { buildWhatsAppUrl } from '@/utils/whatsapp';
import content from '@/content/trustband.json';

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative gradient-bg text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className={cn(
              'text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight',
              'font-arabic'
            )}>
              {isRTL ? content.brand.tagline_ar : content.brand.tagline_en}
            </h1>
            
            {/* Trust Band Logo/Text */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">TB</span>
              </div>
              <span className="font-bold text-lg">Trust Band Travel</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className={cn(
            'flex flex-col sm:flex-row gap-4 justify-center items-center mb-16',
            isRTL && 'sm:flex-row-reverse'
          )}>
            <a
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
            </a>

            <Link
              href={`/${locale}/packages`}
              className={cn(
                'flex items-center gap-3 px-8 py-4 rounded-2xl',
                'bg-white/10 hover:bg-white/20 text-white font-bold text-lg',
                'border-2 border-white/30 hover:border-white/50',
                'transition-all duration-300 backdrop-blur-sm',
                'hover:scale-105 transform',
                'w-full sm:w-auto justify-center min-w-[200px]'
              )}
            >
              <PackageOpen className="w-6 h-6" />
              <span>{t('hero.cta_packages')}</span>
            </Link>
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
              <div key={idx} className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-white mb-2 text-lg font-arabic">{item.label}</div>
                <div className="text-sm text-white/80 font-arabic">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

