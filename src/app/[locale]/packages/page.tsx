'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Section from '@/components/Section';
import PackageCard from '@/components/PackageCard';
import content from '@/content/trustband.json';

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
        bgColor="gray"
      >
        {/* Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 bg-white p-2 rounded-xl shadow-lg">
            {[
              { value: 'all', label: isArabic ? 'الكل' : 'All' },
              { value: 'low', label: isArabic ? 'أقل من 800$' : 'Under $800' },
              { value: 'mid', label: '800$ - 1200$' },
              { value: 'high', label: isArabic ? 'أكثر من 1200$' : 'Over $1200' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setPriceRange(option.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  priceRange === option.value
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              {isArabic
                ? 'لا توجد باقات متاحة في هذا النطاق السعري'
                : 'No packages available in this price range'}
            </p>
          </div>
        )}
      </Section>
    </>
  );
}

