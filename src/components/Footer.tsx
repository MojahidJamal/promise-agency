'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { MapPin, Clock, Mail, Phone, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import content from '@/content/trustband.json';
import SocialBar from './SocialBar';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
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
    <motion.footer
      data-footer="true"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #111827 0%, #000000 100%)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16',
          isRTL && 'lg:grid-flow-col-dense'
        )}>
          {/* About */}
          <div className="lg:col-span-1">
            <div className={cn('flex items-center gap-3 mb-6', isRTL ? 'flex-row-reverse' : 'flex-row')}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Plane className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-arabic">
                  Trust Band <span className="text-primary">Travel</span>
                </h3>
                <div className="text-xs text-gray-300 font-arabic">
                  {isRTL ? 'ترست باند للسفر' : 'Trust Band Travel'}
                </div>
              </div>
            </div>
            <p className="leading-relaxed mb-6 font-arabic" style={{ color: '#d1d5db' }}>
              {t('footer.about_desc')}
            </p>
            <div className="space-y-3">
              <span className="text-sm text-gray-300 font-arabic block">
                {t('footer.follow_us')}
              </span>
              <SocialBar />
            </div>
          </div>

          {/* Quick Links */}
          <div className={cn('', isRTL && 'text-right')}>
            <h4 className="text-lg font-bold mb-6 font-arabic" style={{ color: '#ffffff' }}>{t('footer.quick_links')}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href} className={cn('', isRTL && 'text-right')}>
                  <Link
                    href={link.href}
                    className={cn(
                      'hover:text-primary transition-colors font-arabic group block',
                      isRTL ? 'text-right' : 'text-left'
                    )}
                    style={{ color: '#d1d5db' }}
                  >
                    <span className={cn(
                      'w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity inline-block mr-2',
                      isRTL && 'ml-2 mr-0'
                    )}></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={cn('', isRTL && 'text-right')}>
            <h4 className="text-lg font-bold mb-6 font-arabic" style={{ color: '#ffffff' }}>{t('footer.contact_info')}</h4>
            <ul className="space-y-4">
              <li className={cn('flex items-start gap-3', isRTL ? 'flex-row-reverse' : 'flex-row')}>
                <div className={cn(
                  'w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0',
                  isRTL ? 'order-2' : 'order-1'
                )}>
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className={cn(
                  'flex-1',
                  isRTL ? 'text-right order-1' : 'order-2'
                )}>
                  <div className="text-xs text-gray-300 mb-1 font-arabic">{t('footer.email')}</div>
                  <a
                    href={`mailto:${content.brand.email}`}
                    className="text-white hover:text-primary transition-colors font-arabic block"
                  >
                    {content.brand.email}
                  </a>
                </div>
              </li>
              {content.brand.phone && (
                <li className={cn('flex items-start gap-3', isRTL ? 'flex-row-reverse' : 'flex-row')}>
                  <div className={cn(
                    'w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0',
                    isRTL ? 'order-2' : 'order-1'
                  )}>
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className={cn(
                    'flex-1',
                    isRTL ? 'text-right order-1' : 'order-2'
                  )}>
                    <a
                      href={`tel:${content.brand.phone}`}
                      className="text-white hover:text-primary transition-colors font-arabic block"
                    >
                      {content.brand.phone}
                    </a>
                  </div>
                </li>
              )}
              <li className={cn('flex items-start gap-3', isRTL ? 'flex-row-reverse' : 'flex-row')}>
                <div className={cn(
                  'w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0',
                  isRTL ? 'order-2' : 'order-1'
                )}>
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className={cn(
                  'flex-1',
                  isRTL ? 'text-right order-1' : 'order-2'
                )}>
                  <div className="text-xs text-gray-300 mb-1 font-arabic">{t('footer.address')}</div>
                  <div className="text-white font-arabic">
                    {locale === 'ar' ? content.brand.address_ar : content.brand.address_en}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className={cn('', isRTL && 'text-right')}>
            <h4 className="text-lg font-bold mb-6 font-arabic" style={{ color: '#ffffff' }}>{t('footer.working_hours')}</h4>
            <div className={cn('flex items-start gap-3', isRTL ? 'flex-row-reverse' : 'flex-row')}>
              <div className={cn(
                'w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0',
                isRTL ? 'order-2' : 'order-1'
              )}>
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div className={cn(
                'flex-1',
                isRTL ? 'text-right order-1' : 'order-2'
              )}>
                <div className="text-white font-arabic leading-relaxed">
                  {locale === 'ar'
                    ? content.brand.working_hours_ar
                    : content.brand.working_hours_en}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className={cn(
            'flex flex-col md:flex-row justify-between items-center gap-4',
            isRTL && 'md:flex-row-reverse'
          )}>
            <p className="font-arabic" style={{ color: '#d1d5db' }}>
              © {new Date().getFullYear()} Trust Band Travel. {t('footer.rights')}.
            </p>
            <div className={cn('flex items-center gap-4 text-sm', isRTL ? 'flex-row-reverse' : 'flex-row')} style={{ color: '#d1d5db' }}>
              <Link href={`/${locale}/privacy`} className="hover:text-primary transition-colors font-arabic">
                {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </Link>
              <span>•</span>
              <Link href={`/${locale}/contact`} className="hover:text-primary transition-colors font-arabic">
                {isRTL ? 'اتصل بنا' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}