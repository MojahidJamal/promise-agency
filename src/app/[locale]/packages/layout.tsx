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
      ? 'باقاتنا السياحية - Promise Agency | عروض سفر مميزة وباقات متنوعة'
      : 'Our Tour Packages - Promise Agency | Special Travel Deals & Varied Packages',
    description: isArabic
      ? 'تصفح أفضل باقاتنا السياحية المتنوعة: رحلات إلى دبي، إسطنبول، القاهرة، وأكثر. باقات شاملة تشمل الطيران، الإقامة، المواصلات، والجولات السياحية. أسعار تنافسية تبدأ من 600 دولار. احجز باقتك المثالية الآن!'
      : 'Browse our best diverse tour packages: trips to Dubai, Istanbul, Cairo, and more. Comprehensive packages including flights, accommodation, transportation, and tours. Competitive prices starting from $600. Book your perfect package now!',
    keywords: isArabic
      ? [
          'باقات سياحية',
          'عروض سفر',
          'رحلات دبي',
          'رحلات إسطنبول',
          'رحلات القاهرة',
          'باقات شاملة',
          'عروض سياحية مميزة',
          'باقات اقتصادية',
          'باقات فاخرة',
          'رحلات عائلية',
          'شهر العسل',
          'عطلات نهاية الأسبوع',
          'باقات العمرة',
          'رحلات جماعية',
          'سياحة دولية',
          'حجز باقات',
          'أفضل العروض السياحية',
          'تخفيضات سفر',
          'باقات مخصصة'
        ].join(', ')
      : [
          'tour packages',
          'travel deals',
          'Dubai trips',
          'Istanbul trips',
          'Cairo trips',
          'comprehensive packages',
          'special tourist offers',
          'budget packages',
          'luxury packages',
          'family trips',
          'honeymoon',
          'weekend getaways',
          'Umrah packages',
          'group travel',
          'international tourism',
          'package booking',
          'best travel deals',
          'travel discounts',
          'customized packages'
        ].join(', '),
    openGraph: {
      title: isArabic
        ? 'باقاتنا السياحية - Promise Agency | عروض سفر مميزة'
        : 'Our Tour Packages - Promise Agency | Special Travel Deals',
      description: isArabic
        ? 'باقات سياحية متنوعة لأشهر الوجهات العالمية بأسعار تنافسية'
        : 'Diverse tour packages to famous global destinations at competitive prices',
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
    },
  };
}

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

