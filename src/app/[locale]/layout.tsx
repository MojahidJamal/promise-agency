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
        ? 'Promise Agency - وعدنا.. خدمة تثق بها | وكالة خدمات'
        : 'Promise Agency - Service You Can Trust | Agency',
      template: isArabic
        ? '%s | Promise Agency'
        : '%s | Promise Agency',
    },
    description: isArabic
      ? 'وكالة خدمات موثوقة في القاهرة، مصر تقدم موافقات أمنية، تأشيرات، زيارات عائلية للسعودية، رخص قيادة دولية، ودعم على مدار الساعة. خدمة سريعة واحترافية.'
      : 'Trusted agency in Cairo, Egypt offering security clearances, visas, family visits to Saudi Arabia, international driving licenses, and 24/7 support. Fast and professional service.',
    keywords: isArabic
      ? [
          'Promise Agency',
          'وكالة برومس',
          'موافقات أمنية',
          'تأشيرات',
          'زيارة عائلية السعودية',
          'رخصة قيادة دولية',
          'تأشيرة خروج وعودة',
          'خدمات الهجرة',
          'القاهرة مصر',
          'دعم 24/7'
        ].join(', ')
      : [
          'Promise Agency',
          'security clearance',
          'visas',
          'family visit Saudi Arabia',
          'international driving license',
          'exit return visa',
          'migration services',
          'Cairo Egypt',
          '24/7 support'
        ].join(', '),
    authors: [{ name: 'Promise Agency' }],
    creator: 'Promise Agency',
    publisher: 'Promise Agency',
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
        ? 'Promise Agency - وعدنا.. خدمة تثق بها | وكالة خدمات'
        : 'Promise Agency - Service You Can Trust | Agency',
      description: isArabic
        ? 'وكالة خدمات موثوقة في القاهرة، مصر - موافقات أمنية، تأشيرات، زيارات عائلية، رخص قيادة دولية'
        : 'Trusted agency in Cairo, Egypt - Security clearances, visas, family visits, international driving licenses',
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
      siteName: 'Promise Agency',
    },
    twitter: {
      card: 'summary_large_image',
      title: isArabic
        ? 'Promise Agency - وعدنا.. خدمة تثق بها'
        : 'Promise Agency - Service You Can Trust',
      description: isArabic
        ? 'وكالة خدمات موثوقة في القاهرة، مصر'
        : 'Trusted agency in Cairo, Egypt',
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

