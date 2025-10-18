import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  
  // Ensure Arabic is the default locale
  const finalLocale = locale || 'ar';
  
  return {
    locale: finalLocale,
    messages: (await import(`./messages/${finalLocale}.json`)).default,
  };
});

