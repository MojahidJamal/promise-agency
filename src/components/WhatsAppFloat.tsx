'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/utils/whatsapp';
import { cn } from '@/utils/cn';

export default function WhatsAppFloat() {
  const t = useTranslations();

  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50',
        'w-16 h-16 rounded-full bg-green-500 hover:bg-green-600',
        'flex items-center justify-center text-white',
        'shadow-2xl hover:shadow-green-500/50',
        'transition-all duration-300 hover:scale-110',
        'animate-bounce'
      )}
      aria-label={t('whatsapp.floating_button')}
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}

