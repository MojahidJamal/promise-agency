'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const segments = pathname.split('/').filter(Boolean);
    
    // Remove current locale if present
    if (segments[0] === 'ar' || segments[0] === 'en') {
      segments.shift();
    }
    
    // Add new locale (except for default 'ar')
    const newPath = newLocale === 'ar' 
      ? `/${segments.join('/')}` 
      : `/${newLocale}/${segments.join('/')}`;
    
    router.push(newPath || '/');
  };

  return (
    <button
      onClick={switchLocale}
      className={cn(
        'flex items-center gap-2 px-3 py-2 rounded-lg',
        'bg-white/10 hover:bg-white/20 transition-colors',
        'text-sm font-medium'
      )}
      aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <Globe className="w-4 h-4" />
      <span>{locale === 'ar' ? 'EN' : 'عربي'}</span>
    </button>
  );
}

