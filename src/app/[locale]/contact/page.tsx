'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  MessageCircle,
  Facebook,
  Instagram,
  Video
} from 'lucide-react';
import Section from '@/components/Section';
import { cn } from '@/utils/cn';
import { getContactInquiryUrl } from '@/utils/whatsapp';
import content from '@/content/trustband.json';
import toast from 'react-hot-toast';

// Note: Metadata export is not supported in Client Components
// SEO is handled by parent layout and dynamic content

export default function ContactPage() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error(isArabic ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
      return;
    }

    const whatsappUrl = getContactInquiryUrl(
      formData.name,
      formData.phone,
      formData.email,
      formData.message,
      locale
    );

    window.open(whatsappUrl, '_blank');
    
    toast.success(isArabic ? 'جاري فتح واتساب...' : 'Opening WhatsApp...');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: isArabic ? 'الهاتف' : 'Phone',
      value: content.brand.phone,
      href: `tel:${content.brand.phone}`,
    },
    {
      icon: Mail,
      label: t('footer.email'),
      value: content.brand.email,
      href: `mailto:${content.brand.email}`,
    },
    {
      icon: MapPin,
      label: t('footer.address'),
      value: isArabic ? content.brand.address_ar : content.brand.address_en,
      href: 'https://maps.google.com/?q=Cairo,Giza,Egypt',
    },
    {
      icon: Clock,
      label: t('footer.working_hours'),
      value: isArabic ? content.brand.working_hours_ar : content.brand.working_hours_en,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: content.brand.instagram,
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: content.brand.facebook,
    },
    {
      icon: Video,
      label: 'TikTok',
      href: content.brand.tiktok,
    },
  ];

  return (
    <>
      <Section
        title={t('pages.contact_title')}
        subtitle={t('pages.contact_desc')}
        bgColor="white"
        waveHero={true}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-gray-200/50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {t('footer.contact_info')}
              </h3>

              <div className="space-y-5">
                {contactInfo.map((item, idx) => (
                  <div key={idx}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={cn(
                          'flex items-start gap-4 p-4 rounded-xl',
                          'hover:bg-primary/5 transition-all duration-300',
                          'group',
                          isArabic && 'flex-row-reverse'
                        )}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className={cn('flex-1', isArabic ? 'text-right' : 'text-left')}>
                          <div className="font-semibold text-gray-900 mb-1">{item.label}</div>
                          <div className="text-gray-600 text-sm leading-relaxed">{item.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div
                        className={cn(
                          'flex items-start gap-4 p-4 rounded-xl',
                          isArabic && 'flex-row-reverse'
                        )}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className={cn('flex-1', isArabic ? 'text-right' : 'text-left')}>
                          <div className="font-semibold text-gray-900 mb-1">{item.label}</div>
                          <div className="text-gray-600 text-sm leading-relaxed">{item.value}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-gray-200/50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {t('footer.follow_us')}
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex-1 flex flex-col items-center gap-3 p-4 rounded-xl',
                      'bg-gray-50 hover:bg-primary/5',
                      'transition-all duration-300',
                      'hover:scale-105 hover:shadow-md',
                      'group'
                    )}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <social.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-2xl p-8  shadow-primary/20 shadow-[0_-4px_20px_rgba(13,153,228,0.2)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold">
                  {isArabic ? 'تواصل سريع' : 'Quick Contact'}
                </h3>
              </div>
              <p className="text-white/90 mb-6">
                {isArabic
                  ? 'للحصول على رد فوري، تواصل معنا عبر واتساب'
                  : 'For immediate response, contact us via WhatsApp'
                }
              </p>
              <a
                href={content.brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                  'bg-white text-primary font-bold',
                  'transition-all duration-300',
                  'hover:shadow-lg hover:scale-105'
                )}
              >
                <MessageCircle className="w-5 h-5" />
                <span>{isArabic ? 'افتح واتساب' : 'Open WhatsApp'}</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8  shadow-gray-200/50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              {t('common.send_message')}
            </h3>
            <p className="text-gray-600 mb-8">
              {isArabic 
                ? 'املأ النموذج وسنتواصل معك قريباً'
                : 'Fill the form and we\'ll contact you soon'
              }
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t('contact_form.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    'w-full px-4 py-3 rounded-xl',
                    'bg-gray-50 shadow-sm border border-gray-300',
                    'focus:bg-white focus:shadow-md focus:ring-2 focus:ring-primary/20',
                    'outline-none transition-all duration-300',
                    'text-gray-900 placeholder:text-gray-400'
                  )}
                  placeholder={isArabic ? 'أدخل اسمك' : 'Enter your name'}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t('contact_form.phone')} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={cn(
                    'w-full px-4 py-3 rounded-xl',
                    'bg-gray-50 shadow-sm border border-gray-300',
                    'focus:bg-white focus:shadow-md focus:ring-2 focus:ring-primary/20',
                    'outline-none transition-all duration-300',
                    'text-gray-900 placeholder:text-gray-400'
                  )}
                  placeholder={isArabic ? 'أدخل رقم هاتفك' : 'Enter your phone'}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t('contact_form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl',
                    'bg-gray-50 shadow-sm border border-gray-300',
                    'focus:bg-white focus:shadow-md focus:ring-2 focus:ring-primary/20',
                    'outline-none transition-all duration-300',
                    'text-gray-900 placeholder:text-gray-400'
                  )}
                  placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t('contact_form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl',
                    'bg-gray-50 shadow-sm border border-gray-300',
                    'focus:bg-white focus:shadow-md focus:ring-2 focus:ring-primary/20',
                    'outline-none transition-all duration-300',
                    'resize-none text-gray-900 placeholder:text-gray-400'
                  )}
                  placeholder={isArabic ? 'اكتب رسالتك هنا' : 'Write your message here'}
                />
              </div>

              <button
                type="submit"
                className={cn(
                  'w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl',
                  'bg-primary hover:bg-primary/90 text-white font-bold',
                  'transition-all duration-300 shadow-lg hover:shadow-xl',
                  'hover:scale-[1.02] transform active:scale-95'
                )}
              >
                <Send className="w-5 h-5" />
                <span>{t('contact_form.submit')}</span>
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
