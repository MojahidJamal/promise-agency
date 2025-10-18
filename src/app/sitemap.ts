import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trustband.travel';

  const routes = ['', '/packages', '/services', '/about', '/contact', '/gallery', '/faq'];
  const locales = ['ar', 'en'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = locale === 'ar' 
        ? `${baseUrl}${route}`
        : `${baseUrl}/${locale}${route}`;
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return sitemapEntries;
}

