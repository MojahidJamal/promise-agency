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
      ? 'الأسئلة الشائعة - Promise Agency | إجابات لجميع استفساراتك'
      : 'Frequently Asked Questions - Promise Agency | Answers to All Your Inquiries',
    description: isArabic
      ? 'إجابات شاملة على الأسئلة الأكثر شيوعاً حول خدماتنا السياحية: كيفية الحجز، إجراءات التأشيرات، طرق الدفع، سياسة الإلغاء، أوقات السفر المناسبة، المستندات المطلوبة، والمزيد. احصل على جميع المعلومات التي تحتاجها قبل حجز رحلتك.'
      : 'Comprehensive answers to the most frequently asked questions about our tourism services: how to book, visa procedures, payment methods, cancellation policy, suitable travel times, required documents, and more. Get all the information you need before booking your trip.',
    keywords: isArabic
      ? [
          'أسئلة شائعة',
          'استفسارات السفر',
          'كيفية الحجز',
          'إجراءات التأشيرات',
          'طرق الدفع',
          'سياسة الإلغاء',
          'شروط الحجز',
          'المستندات المطلوبة',
          'أوقات السفر',
          'استفسارات الطيران',
          'حجز الفنادق',
          'باقات سياحية',
          'أسئلة العملاء',
          'دليل السفر',
          'معلومات الرحلات',
          'إرشادات السفر',
          'نصائح سياحية'
        ].join(', ')
      : [
          'frequently asked questions',
          'travel inquiries',
          'how to book',
          'visa procedures',
          'payment methods',
          'cancellation policy',
          'booking terms',
          'required documents',
          'travel times',
          'flight inquiries',
          'hotel booking',
          'tour packages',
          'customer questions',
          'travel guide',
          'trip information',
          'travel guidelines',
          'tourism tips'
        ].join(', '),
    openGraph: {
      title: isArabic
        ? 'الأسئلة الشائعة - Promise Agency'
        : 'Frequently Asked Questions - Promise Agency',
      description: isArabic
        ? 'إجابات شاملة على جميع استفساراتك حول خدماتنا السياحية'
        : 'Comprehensive answers to all your inquiries about our tourism services',
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
    },
  };
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

