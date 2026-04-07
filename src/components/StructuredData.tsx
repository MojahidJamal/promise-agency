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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Promise Agency',
    alternateName: isArabic ? 'برومس أجنسي' : 'Promise Agency',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.jpg`,
    image: `${baseUrl}/images/logo.jpg`,
    description: isArabic
      ? 'وكالة خدمات موثوقة في مصر تقدم موافقات أمنية، تأشيرات، زيارات عائلية، ورخص قيادة دولية'
      : 'Trusted agency in Egypt offering security clearances, visas, family visits, and international driving licenses',
    telephone: '+201558746076',
    email: 'meaadpromise@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: isArabic ? 'القاهرة' : 'Cairo',
      addressCountry: isArabic ? 'مصر' : 'Egypt',
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
      'https://www.instagram.com/_promise.agency_?igsh=MXVzZWJhcWtyaHp6Nw==',
      'https://www.facebook.com/share/1CU7fBXZP4/?mibextid=LQQJ4d',
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
    name: 'Promise Agency',
    url: baseUrl,
    description: pageDescription || organizationSchema.description,
    inLanguage: isArabic ? 'ar' : 'en',
    publisher: {
      '@type': 'Organization',
      name: 'Promise Agency',
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

