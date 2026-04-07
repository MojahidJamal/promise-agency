import { useTranslations, useLocale } from 'next-intl';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import content from '@/content/trustband.json';
import { cn } from '@/utils/cn';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return {
    title: isArabic
      ? 'خدماتنا - Promise Agency | خدمات سفر وسياحة شاملة'
      : 'Our Services - Promise Agency | Comprehensive Travel & Tourism Services',
    description: isArabic
      ? 'نقدم خدمات سياحية شاملة: حجز تذاكر الطيران بأفضل الأسعار، حجز فنادق فاخرة، استخراج التأشيرات لجميع الدول، باقات العمرة، تنظيم رحلات سياحية مخصصة، موافقات أمنية، وخدمات النقل. فريق محترف متاح على مدار الساعة لخدمتك.'
      : 'We provide comprehensive tourism services: flight ticket booking at the best prices, luxury hotel reservations, visa processing for all countries, Umrah packages, customized tour organization, security approvals, and transportation services. Professional team available 24/7 to serve you.',
    keywords: isArabic
      ? [
          'خدمات سياحية',
          'حجز طيران',
          'حجز فنادق',
          'استخراج تأشيرات',
          'باقات عمرة',
          'رحلات سياحية',
          'موافقات أمنية',
          'خدمات النقل',
          'تنظيم رحلات',
          'حجوزات سفر',
          'خدمات متكاملة',
          'سياحة دينية',
          'سياحة ترفيهية',
          'خدمة مميزة',
          'دعم فوري',
          'أسعار مناسبة',
          'خدمة احترافية',
          'وجهات عالمية'
        ].join(', ')
      : [
          'tourism services',
          'flight booking',
          'hotel reservation',
          'visa processing',
          'Umrah packages',
          'tourist trips',
          'security approvals',
          'transportation services',
          'trip organization',
          'travel bookings',
          'integrated services',
          'religious tourism',
          'leisure tourism',
          'premium service',
          'instant support',
          'affordable prices',
          'professional service',
          'global destinations'
        ].join(', '),
    openGraph: {
      title: isArabic
        ? 'خدماتنا - Promise Agency | خدمات سفر وسياحة شاملة'
        : 'Our Services - Promise Agency | Comprehensive Travel Services',
      description: isArabic
        ? 'خدمات سياحية متكاملة: طيران، فنادق، تأشيرات، عمرة، رحلات مخصصة'
        : 'Comprehensive tourism services: flights, hotels, visas, Umrah, customized trips',
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
    },
  };
}

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
            ? 'في برومس أجنسي، نقدم خدمات شاملة ومتكاملة مصممة خصيصاً لتسهيل كل إجراءاتك وتوفير الوقت والجهد عليك'
            : 'At Promise Agency, we provide comprehensive services designed specifically to facilitate all your procedures and save your time and effort'
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

