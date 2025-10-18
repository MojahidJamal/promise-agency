import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';
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
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Trust Band <span className="text-primary">Travel</span>
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              {t('footer.about_desc')}
            </p>
            <SocialBar />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.contact_info')}</h4>
            <ul className="space-y-3">
              <li className={cn('flex items-start gap-3', isRTL && 'flex-row-reverse')}>
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-white/50 mb-1">{t('footer.email')}</div>
                  <a
                    href={`mailto:${content.brand.email}`}
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    {content.brand.email}
                  </a>
                </div>
              </li>
              {content.brand.phone && (
                <li className={cn('flex items-start gap-3', isRTL && 'flex-row-reverse')}>
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`tel:${content.brand.phone}`}
                      className="text-white/80 hover:text-primary transition-colors"
                    >
                      {content.brand.phone}
                    </a>
                  </div>
                </li>
              )}
              <li className={cn('flex items-start gap-3', isRTL && 'flex-row-reverse')}>
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-white/80">
                  {locale === 'ar' ? content.brand.address_ar : content.brand.address_en}
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.working_hours')}</h4>
            <div className={cn('flex items-start gap-3', isRTL && 'flex-row-reverse')}>
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-white/80">
                {locale === 'ar'
                  ? content.brand.working_hours_ar
                  : content.brand.working_hours_en}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Trust Band Travel. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}

