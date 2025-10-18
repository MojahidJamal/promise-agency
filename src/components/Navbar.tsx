'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '@/utils/cn';
import LanguageSwitcher from './LanguageSwitcher';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = locale === 'ar';

  const navLinks = [
    { href: `/${locale === 'ar' ? '' : locale}`, label: t('nav.home') },
    { href: `/${locale}/packages`, label: t('nav.packages') },
    { href: `/${locale}/services`, label: t('nav.services') },
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/gallery`, label: t('nav.gallery') },
    { href: `/${locale}/contact`, label: t('nav.contact') },
    { href: `/${locale}/faq`, label: t('nav.faq') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link href={`/${locale === 'ar' ? '' : locale}`} className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Trust Band Travel"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white hidden sm:block">
              Trust Band{' '}
              <span className="text-primary">Travel</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-2 px-6 py-3 rounded-lg',
                'bg-primary hover:bg-primary/90 text-white font-medium',
                'transition-all duration-300 shadow-lg hover:shadow-primary/50'
              )}
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('hero.cta_whatsapp')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10 bg-black/95">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <LanguageSwitcher />
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center justify-center gap-2 px-6 py-3 rounded-lg',
                    'bg-primary hover:bg-primary/90 text-white font-medium',
                    'transition-all duration-300'
                  )}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('hero.cta_whatsapp')}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

