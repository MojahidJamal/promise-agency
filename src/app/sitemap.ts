import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trustbandtravel.com';

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/packages', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
  ];
  
  const locales = ['ar', 'en'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = locale === 'ar' 
        ? `${baseUrl}${route.path}`
        : `${baseUrl}/${locale}${route.path}`;
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            ar: locale === 'ar' ? url : `${baseUrl}${route.path}`,
            en: locale === 'en' ? url : `${baseUrl}/en${route.path}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}

