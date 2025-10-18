import { useTranslations, useLocale } from 'next-intl';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import content from '@/content/trustband.json';
import { cn } from '@/utils/cn';

export default function ServicesPage() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const services = content.services.map((service) => ({
    id: service.id,
    title: isArabic ? service.title_ar : service.title_en,
    description: isArabic ? service.desc_ar : service.desc_en,
    highlight: isArabic ? service.highlight_ar : service.highlight_en,
  }));

  return (
    <Section
      title={t('pages.services_title')}
      subtitle={t('pages.services_desc')}
      bgColor="white"
      waveHero={true}
    >
      <div className="mb-12 text-center max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 font-arabic leading-relaxed">
          {isArabic 
            ? 'في ترست باند، نقدم خدمات شاملة ومتكاملة مصممة خصيصاً لتسهيل كل إجراءاتك وتوفير الوقت والجهد عليك'
            : 'At Trust Band, we provide comprehensive services designed specifically to facilitate all your procedures and save your time and effort'
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            highlight={service.highlight}
          />
        ))}
      </div>
    </Section>
  );
}

