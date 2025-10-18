'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/utils/whatsapp';
import { cn } from '@/utils/cn';

export default function WhatsAppFloat() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 z-50 group',
        isRTL ? 'left-6' : 'right-6',
        'flex items-center gap-3',
        'bg-primary hover:bg-primary/90 text-white',
        'rounded-2xl px-4 py-3 shadow-trust-lg hover:shadow-trust-lg',
        'transition-all duration-300 hover:scale-105',
        'animate-pulse hover:animate-none'
      )}
      aria-label={t('whatsapp.floating_button')}
    >
      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
        <MessageCircle className="w-5 h-5" />
      </div>
      <div className="hidden sm:block">
        <div className="text-sm font-bold font-arabic">
          {t('whatsapp.floating_button')}
        </div>
        <div className="text-xs opacity-80 font-arabic">
          {isRTL ? 'تواصل معنا' : 'Contact Us'}
        </div>
      </div>
    </a>
  );
}

