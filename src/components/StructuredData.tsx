'use client';

import { useLocale } from 'next-intl';

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'breadcrumb';
  pageTitle?: string;
  pageDescription?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function StructuredData({
  type = 'organization',
  pageTitle,
  pageDescription,
  breadcrumbs,
}: StructuredDataProps) {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const baseUrl = 'https://trust-band-travel.vercel.app';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Trust Band Travel',
    alternateName: isArabic ? 'ترست باند للسفر والسياحة' : 'Trust Band Travel Agency',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.jpg`,
    image: `${baseUrl}/images/logo.jpg`,
    description: isArabic
      ? 'وكالة سفر موثوقة في مصر تقدم أفضل باقات سياحية، حجوزات طيران، فنادق فاخرة، تأشيرات، عمرة، وخدمات سياحية متكاملة'
      : 'Trusted travel agency in Egypt offering the best tour packages, flight bookings, luxury hotels, visas, Umrah, and comprehensive tourism services',
    telephone: '+249916162563',
    email: 'trustbandcompany@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: isArabic ? 'الجيزة' : 'Giza',
      addressLocality: isArabic ? 'القاهرة' : 'Cairo',
      addressCountry: isArabic ? 'مصر' : 'Egypt',
      postalCode: '11511',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.0444,
      longitude: 31.2357,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '21:00',
    },
    sameAs: [
      'https://www.instagram.com/trust.band_travel/',
      'https://www.facebook.com/676041272267639',
      'https://www.tiktok.com/@trust_band_agency',
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD, EGP',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    areaServed: {
      '@type': 'Country',
      name: isArabic ? 'مصر' : 'Egypt',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Trust Band Travel',
    url: baseUrl,
    description: pageDescription || organizationSchema.description,
    inLanguage: isArabic ? 'ar' : 'en',
    publisher: {
      '@type': 'Organization',
      name: 'Trust Band Travel',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.jpg`,
      },
    },
  };

  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `${baseUrl}${crumb.url}`,
        })),
      }
    : null;

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return organizationSchema;
      case 'website':
        return websiteSchema;
      case 'breadcrumb':
        return breadcrumbSchema;
      default:
        return organizationSchema;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

