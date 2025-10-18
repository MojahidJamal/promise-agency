'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link href={`/${locale === 'ar' ? '' : locale}`} className={cn(
            "flex items-center gap-3",
            isRTL && "flex-row-reverse"
          )}>
            <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary to-primary/80">
              <div className="absolute inset-0 flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-700 font-arabic leading-tight">
                Trust Band{' '}
                <span className="text-primary">Travel</span>
              </div>
              <div className="text-xs text-gray-500 font-arabic leading-tight">
                {isRTL ? 'ترست باند للسفر' : 'Trust Band Travel'}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  'text-gray-700 hover:text-primary hover:bg-primary/5',
                  'font-arabic'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-xl',
                'bg-primary hover:bg-primary/90 text-white font-medium text-sm',
                'transition-all duration-300 shadow-trust hover:shadow-trust-lg',
                'font-arabic'
              )}
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('hero.cta_whatsapp')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
            >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/5',
                    'transition-colors font-medium font-arabic'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <LanguageSwitcher />
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center justify-center gap-2 px-4 py-3 rounded-xl',
                    'bg-primary hover:bg-primary/90 text-white font-medium',
                    'transition-all duration-300 font-arabic'
                  )}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('hero.cta_whatsapp')}</span>
                </a>
              </div>
            </div>
          </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

