import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Tajawal } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { locales } from '@/lib/i18n-config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure Arabic is default
  const finalLocale = locale || 'ar';
  const isArabic = finalLocale === 'ar';
  
  return {
    title: isArabic
      ? 'Trust Band Travel - رحلات تثق بها'
      : 'Trust Band Travel - Trips you trust',
    description: isArabic
      ? 'وكالة سفر موثوقة تقدم أفضل العروض والخدمات السياحية. حجوزات طيران، فنادق، باقات سياحية، تأشيرات، وعمرة.'
      : 'A trusted travel agency offering the best deals and tourism services. Flight bookings, hotels, tour packages, visas, and Umrah.',
    keywords: isArabic
      ? 'وكالة سفر, حجوزات طيران, فنادق, باقات سياحية, تأشيرات, عمرة'
      : 'travel agency, flight bookings, hotels, tour packages, visas, umrah',
    openGraph: {
      title: isArabic
        ? 'Trust Band Travel - رحلات تثق بها'
        : 'Trust Band Travel - Trips you trust',
      description: isArabic
        ? 'أفضل العروض والخدمات السياحية'
        : 'Best deals and tourism services',
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: isArabic
        ? 'Trust Band Travel - رحلات تثق بها'
        : 'Trust Band Travel - Trips you trust',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure Arabic is default
  const finalLocale = locale || 'ar';
  
  if (!locales.includes(finalLocale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = finalLocale === 'ar';

  return (
    <html lang={finalLocale} dir={isRTL ? 'rtl' : 'ltr'} className={`${inter.variable} ${tajawal.variable}`}>
      <body className={isRTL ? 'font-arabic' : 'font-sans'}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <Toaster
            position={isRTL ? 'top-left' : 'top-right'}
            toastOptions={{
              duration: 4000,
              style: {
                background: '#111827',
                color: '#fff',
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

