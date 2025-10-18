'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import Section from '@/components/Section';
import { cn } from '@/utils/cn';
import { getContactInquiryUrl } from '@/utils/whatsapp';
import content from '@/content/trustband.json';
import toast from 'react-hot-toast';

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

  return (
    <>
      <Section
        title={t('pages.contact_title')}
        subtitle={t('pages.contact_desc')}
        bgColor="gray"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">
                {t('footer.contact_info')}
              </h3>

              <div className="space-y-6">
                <div className={cn('flex items-start gap-4', isArabic && 'flex-row-reverse')}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className={isArabic ? 'text-right' : 'text-left'}>
                    <div className="font-bold mb-1">{t('footer.email')}</div>
                    <a
                      href={`mailto:${content.brand.email}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {content.brand.email}
                    </a>
                  </div>
                </div>

                {content.brand.phone && (
                  <div className={cn('flex items-start gap-4', isArabic && 'flex-row-reverse')}>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className={isArabic ? 'text-right' : 'text-left'}>
                      <div className="font-bold mb-1">
                        {isArabic ? 'الهاتف' : 'Phone'}
                      </div>
                      <a
                        href={`tel:${content.brand.phone}`}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {content.brand.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className={cn('flex items-start gap-4', isArabic && 'flex-row-reverse')}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className={isArabic ? 'text-right' : 'text-left'}>
                    <div className="font-bold mb-1">{t('footer.address')}</div>
                    <p className="text-gray-600">
                      {isArabic
                        ? content.brand.address_ar
                        : content.brand.address_en}
                    </p>
                  </div>
                </div>

                <div className={cn('flex items-start gap-4', isArabic && 'flex-row-reverse')}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className={isArabic ? 'text-right' : 'text-left'}>
                    <div className="font-bold mb-1">
                      {t('footer.working_hours')}
                    </div>
                    <p className="text-gray-600">
                      {isArabic
                        ? content.brand.working_hours_ar
                        : content.brand.working_hours_en}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">{t('common.send_message')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact_form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  'w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg',
                  'bg-primary hover:bg-primary/90 text-white font-bold',
                  'transition-all duration-300 shadow-lg hover:shadow-xl',
                  'hover:scale-105 transform'
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

