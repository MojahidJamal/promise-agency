'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import Section from '@/components/Section';
import { cn } from '@/utils/cn';
import content from '@/content/trustband.json';

// Note: Metadata export is not supported in Client Components
// SEO is handled by parent layout and dynamic content

export default function FAQPage() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = content.faq.map((item) => ({
    question: isArabic ? item.q_ar : item.q_en,
    answer: isArabic ? item.a_ar : item.a_en,
  }));

  return (
    <Section
      title={t('sections.faq_title')}
      subtitle={t('pages.faq_desc')}
      bgColor="white"
      waveHero={true}
    >
      <div className="max-w-4xl mx-auto">
        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={cn(
                'bg-white rounded-2xl overflow-hidden',
                'transition-all duration-300',
                openIndex === idx 
                  ? 'shadow-xl ring-2 ring-primary' 
                  : 'shadow-lg hover:shadow-xl'
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className={cn(
                  'w-full px-6 py-5 flex items-center justify-between',
                  'hover:bg-gray-50 transition-colors',
                  isArabic && 'flex-row-reverse'
                )}
              >
                <div className={cn(
                  'flex items-center gap-4 flex-1',
                  isArabic && 'flex-row-reverse'
                )}>
                  <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0',
                    'transition-colors duration-300',
                    openIndex === idx 
                      ? 'bg-primary text-white' 
                      : 'bg-primary/10 text-primary'
                  )}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className={cn(
                    'font-bold text-lg text-gray-900 flex-1',
                    isArabic ? 'text-right' : 'text-left'
                  )}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    'w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300',
                    openIndex === idx && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <div className={cn(
                  'px-6 pb-6 pt-2 text-gray-700 leading-relaxed',
                  isArabic ? 'text-right pr-20' : 'text-left pl-20'
                )}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            {isArabic ? 'لم تجد إجابة لسؤالك؟' : 'Didn\'t find your answer?'}
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            {isArabic
              ? 'فريقنا جاهز للإجابة على جميع استفساراتك عبر واتساب'
              : 'Our team is ready to answer all your questions via WhatsApp'}
          </p>
          <a
            href={content.brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 px-8 py-4 rounded-xl',
              'bg-primary hover:bg-primary/90 text-white font-bold',
              'transition-all duration-300 shadow-lg',
              'hover:shadow-xl hover:scale-105',
              'transform active:scale-95'
            )}
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('common.contact_us')}</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
