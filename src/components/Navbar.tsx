'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import LanguageSwitcher from './LanguageSwitcher';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = locale === 'ar';

  const navLinks = [
    { href: `/${locale === 'ar' ? '' : locale}`, label: t('nav.home') }, { href: `/${locale}/services`, label: t('nav.services') },


    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/packages`, label: t('nav.packages') },
    { href: `/${locale}/contact`, label: t('nav.contact') },
    { href: `/${locale}/faq`, label: t('nav.faq') },
  ];

  // Function to check if a link is active
  const isActiveLink = (href: string) => {
    // Remove locale prefix from pathname for comparison
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const hrefWithoutLocale = href.replace(`/${locale}`, '') || '/';
    
    // For home page
    if (hrefWithoutLocale === '/') {
      return pathWithoutLocale === '/' || pathWithoutLocale === '';
    }
    
    // For other pages, check exact match or if pathname starts with the href
    return pathWithoutLocale === hrefWithoutLocale || pathWithoutLocale.startsWith(hrefWithoutLocale + '/');
  };

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
          <Link href={`/${locale === 'ar' ? '' : locale}`}>
            <Image
              src="/images/logo.jpg"
              alt="Trust Band Travel Logo"
              width={200}
              height={100}
              className="h-14 md:h-16 lg:h-18 w-auto object-contain rounded-xl border-2 border-gray-200/50 p-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative',
                    'font-arabic',
                    isActive
                      ? 'text-primary bg-primary/10 font-semibold shadow-sm border border-primary/20'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-2 h-0.5 bg-primary rounded-full -translate-x-1/2"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    />
                  )}
                </Link>
              );
            })}
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
                {navLinks.map((link) => {
                  const isActive = isActiveLink(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'px-4 py-3 rounded-lg transition-colors font-medium font-arabic relative',
                        isActive
                          ? 'text-primary bg-primary/10 font-semibold shadow-sm border border-primary/20'
                          : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          className={cn(
                            'absolute top-1/2 w-1 h-8 bg-primary rounded-full -translate-y-1/2',
                            isRTL ? 'left-2' : 'right-2'
                          )}
                          layoutId="mobileActiveIndicator"
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                        />
                      )}
                    </Link>
                  );
                })}
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

