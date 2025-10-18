import { useTranslations, useLocale } from 'next-intl';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import Section from '@/components/Section';
import { cn } from '@/utils/cn';

export default function AboutPage() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const values = [
    {
      icon: Shield,
      title: isArabic ? 'الثقة' : 'Trust',
      desc: isArabic
        ? 'نبني الثقة من خلال الشفافية والمصداقية'
        : 'We build trust through transparency and credibility',
    },
    {
      icon: Award,
      title: isArabic ? 'الجودة' : 'Quality',
      desc: isArabic
        ? 'نقدم خدمات عالية الجودة في كل رحلة'
        : 'We provide high-quality services on every trip',
    },
    {
      icon: Users,
      title: isArabic ? 'العملاء أولاً' : 'Customers First',
      desc: isArabic
        ? 'رضاكم هو أولويتنا القصوى'
        : 'Your satisfaction is our top priority',
    },
    {
      icon: TrendingUp,
      title: isArabic ? 'الابتكار' : 'Innovation',
      desc: isArabic
        ? 'نبحث دائماً عن أفضل الحلول والعروض'
        : 'We always seek the best solutions and deals',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('pages.about_title')}
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            {t('pages.about_desc')}
          </p>
        </div>
      </Section>

      {/* Mission */}
      <Section title={isArabic ? 'مهمتنا' : 'Our Mission'} bgColor="white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {isArabic
              ? 'نسعى لجعل تجربة السفر سهلة وممتعة لكل عميل. نقدم أفضل الخدمات السياحية بأسعار تنافسية، مع ضمان راحتكم وأمانكم في كل خطوة.'
              : 'We strive to make travel easy and enjoyable for every customer. We provide the best tourism services at competitive prices, ensuring your comfort and safety every step of the way.'}
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section title={isArabic ? 'قيمنا' : 'Our Values'} bgColor="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Stats */}
      <Section bgColor="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '500+', label: isArabic ? 'عميل سعيد' : 'Happy Clients' },
            { number: '50+', label: isArabic ? 'وجهة' : 'Destinations' },
            { number: '1000+', label: isArabic ? 'رحلة' : 'Trips' },
            { number: '24/7', label: isArabic ? 'دعم فني' : 'Support' },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

