'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { MessageCircle, CheckCircle, Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { getPackageInquiryUrl } from '@/utils/whatsapp';

interface PackageCardProps {
  slug: string;
  title: string;
  price: number;
  currency: string;
  highlights: string[];
  image?: string;
  className?: string;
}

export default function PackageCard({
  slug,
  title,
  price,
  currency,
  highlights,
  image,
  className,
}: PackageCardProps) {
  const locale = useLocale();
  const t = useTranslations();
  const isRTL = locale === 'ar';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={cn(
        'group bg-white rounded-3xl overflow-hidden shadow-trust hover:shadow-trust-lg',
        'transition-all duration-300 hover:-translate-y-1',
        'border border-gray-100 hover:border-primary/20',
        'font-arabic',
        className
      )}
    >
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
            ✈️
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Price Badge */}
        <div className={cn(
          'absolute top-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg',
          isRTL ? 'left-4' : 'right-4'
        )}>
          <div className="text-xs text-gray-500 font-medium">{t('common.from')}</div>
          <div className="text-2xl font-bold text-primary">
            ${price}
          </div>
        </div>

        {/* Rating Badge */}
        <div className={cn(
          'absolute top-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg',
          isRTL ? 'right-4' : 'left-4'
        )}>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-bold text-gray-700">5.0</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className={cn('flex items-start gap-3 mb-4', isRTL && 'flex-row-reverse')}>
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-gray-700 group-hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
        </div>

        {/* Highlights */}
        <ul className="space-y-3 mb-6">
          {highlights.map((highlight, idx) => (
            <li key={idx} className={cn('flex items-start gap-3', isRTL && 'flex-row-reverse')}>
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={getPackageInquiryUrl(title, locale)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl',
            'bg-primary hover:bg-primary/90 text-white font-bold',
            'transition-all duration-300 shadow-trust hover:shadow-trust-lg',
            'group-hover:scale-105 transform'
          )}
        >
          <MessageCircle className="w-5 h-5" />
          <span>{t('common.book_now')}</span>
        </a>
      </div>
    </motion.div>
  );
}

