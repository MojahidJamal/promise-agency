'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import Section from '@/components/Section';
import { cn } from '@/utils/cn';
import content from '@/content/trustband.json';

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
      bgColor="gray"
    >
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="mb-4 bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-lg pr-4">{faq.question}</span>
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
                openIndex === idx ? 'max-h-96' : 'max-h-0'
              )}
            >
              <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Still Have Questions */}
      <div className="mt-12 text-center bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">
          {isArabic ? 'لا تزال لديك أسئلة؟' : 'Still have questions?'}
        </h3>
        <p className="text-gray-600 mb-6">
          {isArabic
            ? 'تواصل معنا عبر واتساب وسنكون سعداء بمساعدتك'
            : "Contact us on WhatsApp and we'll be happy to help"}
        </p>
        <a
          href={content.brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {t('common.contact_us')}
        </a>
      </div>
    </Section>
  );
}

