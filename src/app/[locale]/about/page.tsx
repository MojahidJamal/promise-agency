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
  Heart
} from 'lucide-react';
import Section from '@/components/Section';
import { cn } from '@/utils/cn';

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
      {/* Hero Section */}
      <Section bgColor="dark">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary/80 bg-clip-text text-transparent">
              {t('pages.about_title')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {t('pages.about_desc')}
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-lg text-white/90 leading-relaxed">
                {t('pages.about_intro')}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Professional Highlights */}
      <Section bgColor="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('pages.about_highlight')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{highlight.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{highlight.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Specialized Teams */}
      <Section bgColor="gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? 'فرقنا المتخصصة' : 'Our Specialized Teams'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'نعتمد على فرق عمل متخصص لتلبية احتياجات عملائنا بدقة واحترافية'
                : 'We rely on specialized work teams to meet our clients\' needs with precision and professionalism'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teams.map((team, idx) => {
              const Icon = team.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className={`w-16 h-16 ${team.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${team.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {team.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {team.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section title={t('about.our_mission')} bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.our_mission_desc')}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section title={t('about.our_values')} bgColor="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section bgColor="dark">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
              <Star className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t('about.why_choose_us')}
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {t('about.why_choose_us_desc')}
            </p>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section bgColor="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: t('about.stats.happy_clients') },
              { number: '50+', label: t('about.stats.destinations') },
              { number: '1000+', label: t('about.stats.trips') },
              { number: '24/7', label: t('about.stats.support') },
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

