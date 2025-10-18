'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { MessageCircle, PackageOpen } from 'lucide-react';
import { cn } from '@/utils/cn';
import { buildWhatsAppUrl } from '@/utils/whatsapp';
import content from '@/content/trustband.json';

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-primary/20 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {isRTL ? content.brand.tagline_ar : content.brand.tagline_en}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className={cn(
            'flex flex-col sm:flex-row gap-4 justify-center items-center',
            isRTL && 'sm:flex-row-reverse'
          )}>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-3 px-8 py-4 rounded-xl',
                'bg-primary hover:bg-primary/90 text-white font-bold text-lg',
                'transition-all duration-300 shadow-2xl hover:shadow-primary/50',
                'hover:scale-105 transform',
                'w-full sm:w-auto justify-center'
              )}
            >
              <MessageCircle className="w-6 h-6" />
              <span>{t('hero.cta_whatsapp')}</span>
            </a>

            <Link
              href={`/${locale}/packages`}
              className={cn(
                'flex items-center gap-3 px-8 py-4 rounded-xl',
                'bg-white/10 hover:bg-white/20 text-white font-bold text-lg',
                'border-2 border-white/30 hover:border-white/50',
                'transition-all duration-300',
                'hover:scale-105 transform',
                'w-full sm:w-auto justify-center'
              )}
            >
              <PackageOpen className="w-6 h-6" />
              <span>{t('hero.cta_packages')}</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: isRTL ? 'حجز آمن' : 'Secure Booking', icon: '🔒' },
              { label: isRTL ? 'دعم 24/7' : '24/7 Support', icon: '💬' },
              { label: isRTL ? 'أفضل الأسعار' : 'Best Prices', icon: '💰' },
              { label: isRTL ? 'مرشدون خبراء' : 'Expert Guides', icon: '🎯' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

