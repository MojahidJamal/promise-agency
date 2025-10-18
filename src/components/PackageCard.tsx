import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { MessageCircle, CheckCircle } from 'lucide-react';
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
    <div
      className={cn(
        'group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl',
        'transition-all duration-300 hover:-translate-y-2',
        'border border-gray-100 hover:border-primary/30',
        className
      )}
    >
      {/* Image */}
      <div className="relative h-56 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            ✈️
          </div>
        )}
        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
          <div className="text-xs opacity-80">{t('common.from')}</div>
          <div className="text-2xl font-bold">
            ${price}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {highlights.map((highlight, idx) => (
            <li key={idx} className={cn('flex items-start gap-2', isRTL && 'flex-row-reverse')}>
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={getPackageInquiryUrl(title, locale)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl',
            'bg-primary hover:bg-primary/90 text-white font-bold',
            'transition-all duration-300 shadow-md hover:shadow-lg',
            'group-hover:scale-105'
          )}
        >
          <MessageCircle className="w-5 h-5" />
          <span>{t('common.book_now')}</span>
        </a>
      </div>
    </div>
  );
}

