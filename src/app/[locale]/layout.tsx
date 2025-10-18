import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Tajawal } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { locales } from '@/lib/i18n-config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import AnimatedCursor from '@/components/AnimatedCursor';
import PageTransition from '@/components/PageTransition';
import SmoothScroll from '@/components/SmoothScroll';
import StructuredData from '@/components/StructuredData';
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
    title: {
      default: isArabic
        ? 'Trust Band Travel - رحلات تثق بها | وكالة سفر وسياحة'
        : 'Trust Band Travel - Trips You Trust | Travel & Tourism Agency',
      template: isArabic
        ? '%s | Trust Band Travel'
        : '%s | Trust Band Travel',
    },
    description: isArabic
      ? 'وكالة سفر موثوقة في مصر تقدم أفضل العروض والخدمات السياحية: حجوزات طيران، فنادق فاخرة، باقات سياحية متنوعة، استخراج تأشيرات، عمرة، موافقات أمنية، ودعم على مدار الساعة. أسعار تنافسية وخدمة احترافية.'
      : 'Trusted travel agency in Egypt offering the best deals and tourism services: flight bookings, luxury hotels, diverse tour packages, visa processing, Umrah, security approvals, and 24/7 support. Competitive prices and professional service.',
    keywords: isArabic
      ? [
          'وكالة سفر',
          'سياحة مصر',
          'Trust Band',
          'ترست باند',
          'حجوزات طيران',
          'فنادق',
          'باقات سياحية',
          'تأشيرات',
          'عمرة',
          'موافقات أمنية',
          'رحلات سياحية',
          'تذاكر طيران',
          'حجز فنادق',
          'سفر وسياحة',
          'وكالة سياحة',
          'عروض سفر',
          'رحلات دولية',
          'سياحة دينية',
          'سياحة ترفيهية',
          'دعم 24/7'
        ].join(', ')
      : [
          'travel agency',
          'Egypt tourism',
          'Trust Band',
          'Trust Band Travel',
          'flight bookings',
          'hotels',
          'tour packages',
          'visas',
          'Umrah',
          'security approvals',
          'tourist trips',
          'airline tickets',
          'hotel booking',
          'travel and tourism',
          'tourism agency',
          'travel deals',
          'international trips',
          'religious tourism',
          'leisure tourism',
          '24/7 support'
        ].join(', '),
    authors: [{ name: 'Trust Band Travel' }],
    creator: 'Trust Band Travel',
    publisher: 'Trust Band Travel',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: '/images/logo.jpg',
      shortcut: '/images/logo.jpg',
      apple: '/images/logo.jpg',
    },
    openGraph: {
      title: isArabic
        ? 'Trust Band Travel - رحلات تثق بها | وكالة سفر وسياحة'
        : 'Trust Band Travel - Trips You Trust | Travel & Tourism Agency',
      description: isArabic
        ? 'أفضل العروض والخدمات السياحية في مصر - باقات سياحية، حجوزات طيران وفنادق، تأشيرات، عمرة'
        : 'Best deals and tourism services in Egypt - Tour packages, flight & hotel bookings, visas, Umrah',
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
      siteName: 'Trust Band Travel',
    },
    twitter: {
      card: 'summary_large_image',
      title: isArabic
        ? 'Trust Band Travel - رحلات تثق بها'
        : 'Trust Band Travel - Trips You Trust',
      description: isArabic
        ? 'وكالة سفر موثوقة تقدم أفضل العروض والخدمات السياحية'
        : 'Trusted travel agency offering the best deals and tourism services',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
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
      <head>
        <StructuredData type="organization" />
        <StructuredData type="website" />
      </head>
      <body className={isRTL ? 'font-arabic' : 'font-sans'}>
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll />
          <AnimatedCursor />
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
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

