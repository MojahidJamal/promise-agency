import { useTranslations, useLocale } from 'next-intl';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import PackageCard from '@/components/PackageCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import content from '@/content/trustband.json';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const services = content.services.slice(0, 4).map((service) => ({
    id: service.id,
    title: isArabic ? service.title_ar : service.title_en,
    description: isArabic ? service.desc_ar : service.desc_en,
  }));

  const featuredPackages = content.packages.slice(0, 3).map((pkg) => ({
    slug: pkg.slug,
    title: isArabic ? pkg.title_ar : pkg.title_en,
    price: pkg.price_from,
    currency: pkg.currency,
    highlights: isArabic ? pkg.highlights_ar : pkg.highlights_en,
    image: pkg.gallery[0],
  }));

  return (
    <>
      <Hero />

      {/* Services Section */}
      <Section title={t('sections.services')} bgColor="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Section>

      {/* Featured Packages */}
      <Section title={t('sections.featured_packages')} bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map((pkg) => (
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
      </Section>

      {/* Testimonials */}
      <Section title={t('sections.testimonials')} bgColor="gray">
        <TestimonialCarousel testimonials={content.testimonials} />
      </Section>

      {/* Why Choose Us */}
      <Section title={t('sections.why_us')} bgColor="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '🔒',
              title: t('features.secure_booking'),
              desc: t('features.secure_booking_desc'),
            },
            {
              icon: '💬',
              title: t('features.support_24_7'),
              desc: t('features.support_24_7_desc'),
            },
            {
              icon: '💰',
              title: t('features.best_prices'),
              desc: t('features.best_prices_desc'),
            },
            {
              icon: '🎯',
              title: t('features.expert_guides'),
              desc: t('features.expert_guides_desc'),
            },
          ].map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

