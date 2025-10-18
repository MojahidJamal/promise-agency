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
      ? 'تواصل معنا - Trust Band Travel | خدمة عملاء 24/7 واتصال فوري'
      : 'Contact Us - Trust Band Travel | 24/7 Customer Service & Instant Connection',
    description: isArabic
      ? 'تواصل مع Trust Band Travel عبر الهاتف، واتساب، أو البريد الإلكتروني. فريق خدمة العملاء متاح على مدار الساعة للرد على استفساراتك ومساعدتك في حجز رحلتك. نحن في القاهرة، مصر ونخدم العملاء في جميع أنحاء العالم.'
      : 'Contact Trust Band Travel via phone, WhatsApp, or email. Customer service team available 24/7 to answer your inquiries and help you book your trip. We are in Cairo, Egypt and serve clients worldwide.',
    keywords: isArabic
      ? [
          'تواصل معنا',
          'خدمة العملاء',
          'رقم هاتف Trust Band',
          'واتساب Trust Band',
          'بريد إلكتروني',
          'عنوان المكتب',
          'القاهرة مصر',
          'دعم فني',
          'استفسارات الحجز',
          'تواصل فوري',
          'خدمة 24/7',
          'اتصل بنا',
          'موقع المكتب',
          'ساعات العمل',
          'حجز عبر واتساب',
          'دعم العملاء',
          'استشارات سياحية'
        ].join(', ')
      : [
          'contact us',
          'customer service',
          'Trust Band phone number',
          'Trust Band WhatsApp',
          'email address',
          'office address',
          'Cairo Egypt',
          'technical support',
          'booking inquiries',
          'instant contact',
          '24/7 service',
          'call us',
          'office location',
          'working hours',
          'WhatsApp booking',
          'customer support',
          'tourism consultation'
        ].join(', '),
    openGraph: {
      title: isArabic
        ? 'تواصل معنا - Trust Band Travel | خدمة عملاء 24/7'
        : 'Contact Us - Trust Band Travel | 24/7 Customer Service',
      description: isArabic
        ? 'فريقنا متاح على مدار الساعة للرد على استفساراتك ومساعدتك'
        : 'Our team is available 24/7 to answer your inquiries and help you',
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

