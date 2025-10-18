import { getRequestConfig } from 'next-intl/server';
import { getRequestConfig as getRequestConfigType } from 'next-intl';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});

