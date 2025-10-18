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
  }));

  return (
    <Section
      title={t('pages.services_title')}
      subtitle={t('pages.services_desc')}
      bgColor="white"
      waveHero={true}
    >
      <div className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
        isArabic && 'lg:grid-flow-col-dense'
      )}>
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
  );
}

