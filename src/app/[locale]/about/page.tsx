import { useTranslations, useLocale } from 'next-intl';
import { 
  Shield, 
  Award, 
  Users, 
  TrendingUp, 
  Headphones, 
  Plane, 
  UserCheck, 
  FileCheck,
  Clock,
  DollarSign,
  Star,
  Heart,
  Target,
  Sparkles,
  CheckCircle2,
  Globe,
  Zap,
  Compass
} from 'lucide-react';
import Section from '@/components/Section';
import { cn } from '@/utils/cn';
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
      ? 'من نحن - Promise Agency | وكالة سفر موثوقة منذ سنوات'
      : 'About Us - Promise Agency | Trusted Travel Agency for Years',
    description: isArabic
      ? 'تعرف على Promise Agency - وكالة سفر رائدة في مصر مع فرق متخصصة في حجز الطيران، التأشيرات، الفنادق، والباقات السياحية. نقدم خدمات احترافية بأسعار تنافسية مع دعم على مدار الساعة. أكثر من 500 عميل سعيد و1000 رحلة ناجحة.'
      : 'Learn about Promise Agency - a leading travel agency in Egypt with specialized teams in flight booking, visas, hotels, and tour packages. We provide professional services at competitive prices with 24/7 support. More than 500 happy clients and 1000 successful trips.',
    keywords: isArabic
      ? [
          'عن Promise Agency',
          'وكالة سفر موثوقة',
          'فريق خدمة العملاء',
          'حجز تذاكر طيران',
          'خدمات التأشيرات',
          'فرق متخصصة',
          'احترافية عالية',
          'أسعار تنافسية',
          'دعم 24/7',
          'قيم الشركة',
          'مهمتنا',
          'رؤيتنا',
          'خبرة في السياحة',
          'موافقات أمنية',
          'عملاء سعداء',
          'وكالة سياحة محترفة',
          'ثقة ومصداقية',
          'جودة الخدمة'
        ].join(', ')
      : [
          'about Promise Agency',
          'trusted travel agency',
          'customer service team',
          'flight ticket booking',
          'visa services',
          'specialized teams',
          'high professionalism',
          'competitive prices',
          '24/7 support',
          'company values',
          'our mission',
          'our vision',
          'tourism expertise',
          'security approvals',
          'happy clients',
          'professional tourism agency',
          'trust and credibility',
          'service quality'
        ].join(', '),
    openGraph: {
      title: isArabic
        ? 'من نحن - Promise Agency | وكالة سفر موثوقة'
        : 'About Us - Promise Agency | Trusted Travel Agency',
      description: isArabic
        ? 'وكالة سفر رائدة مع فرق متخصصة وخدمات احترافية بأسعار تنافسية'
        : 'Leading travel agency with specialized teams and professional services at competitive prices',
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
    },
  };
}

export default function AboutPage() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const values = [
    {
      icon: Shield,
      title: t('about.trust'),
      desc: t('about.trust_desc'),
    },
    {
      icon: Award,
      title: t('about.quality'),
      desc: t('about.quality_desc'),
    },
    {
      icon: Users,
      title: t('about.customers_first'),
      desc: t('about.customers_first_desc'),
    },
    {
      icon: TrendingUp,
      title: t('about.innovation'),
      desc: t('about.innovation_desc'),
    },
  ];

  const teams = [
    {
      icon: Headphones,
      title: t('teams.customer_service.title'),
      description: t('teams.customer_service.description'),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Plane,
      title: t('teams.flight_booking.title'),
      description: t('teams.flight_booking.description'),
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: UserCheck,
      title: t('teams.supervision.title'),
      description: t('teams.supervision.description'),
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: FileCheck,
      title: t('teams.visa_services.title'),
      description: t('teams.visa_services.description'),
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  const highlights = [
    {
      icon: Star,
      title: isArabic ? 'احترافية عالية' : 'High Professionalism',
      desc: isArabic ? 'خدمات بمستوى احترافية عال' : 'Services with high level of professionalism',
    },
    {
      icon: Clock,
      title: isArabic ? 'دقة في المواعيد' : 'Punctuality',
      desc: isArabic ? 'الالتزام التام بالدقة في المواعيد' : 'Full commitment to punctuality',
    },
    {
      icon: DollarSign,
      title: isArabic ? 'أسعار تنافسية' : 'Competitive Prices',
      desc: isArabic ? 'أسعار تنافسية للغاية' : 'Highly competitive prices',
    },
  ];

  return (
    <>
      {/* Hero Section - Creative Wave Design */}
      <div className="relative bg-gradient-to-br from-[#D4A520] via-[#B8900E] to-[#8C6D0A] overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl animate-float">
              <Heart className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl">
              
              {t('pages.about_title')}
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/95 leading-relaxed mb-8 font-medium drop-shadow-lg max-w-4xl mx-auto">
              {t('pages.about_desc')}
            </p>
            
            <div className="max-w-4xl mx-auto bg-white/15 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-md">
                {t('pages.about_intro')}
              </p>
            </div>
          </div>
        </div>
        
        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Professional Highlights - Modern Card Grid */}
      <Section bgColor="white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
              <Sparkles className="w-10 h-10 text-primary" />
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-primary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
              {isArabic ? 'ما يميزنا' : 'What Sets Us Apart'}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              {t('pages.about_highlight')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon;
              
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-8 shadow-2xl shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {highlight.desc}
                    </p>
                  </div>
                  
                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Specialized Teams - Creative Layout */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl mb-8 shadow-2xl shadow-primary/30 animate-pulse">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
              {isArabic ? 'فرقنا المتخصصة' : 'Our Specialized Teams'}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              {isArabic 
                ? 'نعتمد على فرق عمل متخصص لتلبية احتياجات عملائنا بدقة واحترافية'
                : 'We rely on specialized work teams to meet our clients\' needs with precision and professionalism'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {teams.map((team, idx) => {
              const Icon = team.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    isEven ? 'md:translate-y-8' : 'md:translate-y-0'
                  }`}
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6 shadow-2xl shadow-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-5 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {team.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {team.description}
                    </p>
                    
                    {/* Animated Check Mark */}
                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-gray-600">
                        {isArabic ? 'فريق متخصص' : 'Specialized Team'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission - Bold Statement */}
      <Section bgColor="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full mb-8 shadow-2xl shadow-primary/30">
              <Target className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900">
              {t('about.our_mission')}
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-10 md:p-16 shadow-xl">
            <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed text-center font-medium">
              {t('about.our_mission_desc')}
            </p>
          </div>
        </div>
      </Section>

      {/* Values - Creative Grid */}
      <Section bgColor="white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl mb-8 shadow-2xl shadow-primary/30">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
              {t('about.our_values')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto mb-6 bg-primary rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-primary/30">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Why Choose Us - Striking Banner */}
      <div className="relative bg-primary py-20 md:py-32 overflow-hidden">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 border-4 border-white rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-8 shadow-2xl">
            <Zap className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-white drop-shadow-2xl">
            {t('about.why_choose_us')}
          </h2>
          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-10 md:p-16 shadow-2xl">
            <p className="text-2xl md:text-3xl text-white leading-relaxed drop-shadow-lg font-medium">
              {t('about.why_choose_us_desc')}
            </p>
          </div>
        </div>
      </div>

      {/* Stats - Modern Counter Design */}
      <Section bgColor="white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl mb-8 shadow-2xl shadow-primary/30 animate-bounce">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
              {isArabic ? 'إحصائياتنا' : 'Our Statistics'}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              {isArabic 
                ? 'أرقام تتحدث عن نجاحنا وثقة عملائنا'
                : 'Numbers that speak to our success and client trust'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                number: '500+', 
                label: t('about.stats.happy_clients'), 
                icon: Users
              },
              { 
                number: '50+', 
                label: t('about.stats.destinations'), 
                icon: Compass
              },
              { 
                number: '1000+', 
                label: t('about.stats.trips'), 
                icon: Globe
              },
              { 
                number: '24/7', 
                label: t('about.stats.support'), 
                icon: Headphones
              },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="group">
                  <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3">
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Decorative Corner Accent */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6 shadow-2xl shadow-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Number */}
                      <div className="text-5xl md:text-6xl font-extrabold text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
                        {stat.number}
                      </div>
                      
                      {/* Label */}
                      <div className="text-lg font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {stat.label}
                      </div>
                      
                      {/* Decorative Line */}
                      <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-6 group-hover:w-24 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}

