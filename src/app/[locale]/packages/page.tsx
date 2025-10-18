'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Section from '@/components/Section';
import PackageCard from '@/components/PackageCard';
import content from '@/content/trustband.json';
import { cn } from '@/utils/cn';

// Note: Metadata export is not supported in Client Components
// SEO is handled by parent layout and dynamic content

export default function PackagesPage() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const [priceRange, setPriceRange] = useState<string>('all');

  const allPackages = content.packages.map((pkg) => ({
    slug: pkg.slug,
    title: isArabic ? pkg.title_ar : pkg.title_en,
    price: pkg.price_from,
    currency: pkg.currency,
    highlights: isArabic ? pkg.highlights_ar : pkg.highlights_en,
    image: pkg.gallery[0],
  }));

  const filteredPackages = allPackages.filter((pkg) => {
    if (priceRange === 'all') return true;
    if (priceRange === 'low') return pkg.price < 800;
    if (priceRange === 'mid') return pkg.price >= 800 && pkg.price < 1200;
    if (priceRange === 'high') return pkg.price >= 1200;
    return true;
  });

  return (
    <>
      <Section
        title={t('pages.packages_title')}
        subtitle={t('pages.packages_desc')}
        bgColor="white"
        waveHero={true}
      >
        {/* Filter */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex gap-2 bg-white p-2 rounded-2xl shadow-xl">
            {[
              { value: 'all', label: isArabic ? 'الكل' : 'All' },
              { value: 'low', label: isArabic ? 'أقل من 800$' : 'Under $800' },
              { value: 'mid', label: '800$ - 1200$' },
              { value: 'high', label: isArabic ? 'أكثر من 1200$' : 'Over $1200' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setPriceRange(option.value)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 font-arabic ${
                  priceRange === option.value
                    ? 'bg-primary text-white shadow-trust-lg'
                    : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
          isArabic && 'lg:grid-flow-col-dense'
        )}>
          {filteredPackages.map((pkg) => (
            <PackageCard
              key={pkg.slug}
              slug={pkg.slug}
              title={pkg.title}
              price={pkg.price}
              currency={pkg.currency}
              highlights={pkg.highlights}
              image={pkg.image}
            />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl p-12 shadow-xl max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-xl text-gray-600 font-arabic">
                {isArabic
                  ? 'لا توجد باقات متاحة في هذا النطاق السعري'
                  : 'No packages available in this price range'}
              </p>
            </div>
          </div>
        )}
      </Section>
    </>
  );
}

