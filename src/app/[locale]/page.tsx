import { useTranslations, useLocale } from 'next-intl';
import { Shield, MessageCircle, DollarSign, Target, Users, Compass, Globe, Headphones } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import PackageCard from '@/components/PackageCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import content from '@/content/trustband.json';
import { cn } from '@/utils/cn';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const services = content.services.slice(0, 4).map((service) => ({
    id: service.id,
    title: isArabic ? service.title_ar : service.title_en,
    description: isArabic ? service.desc_ar : service.desc_en,
    highlight: isArabic ? service.highlight_ar : service.highlight_en,
  }));

  const featuredPackages = content.packages.slice(0, 3).map((pkg) => ({
    slug: pkg.slug,
    title: isArabic ? pkg.title_ar : pkg.title_en,
    price: pkg.price_from,
    currency: pkg.currency,
    highlights: isArabic ? pkg.highlights_ar : pkg.highlights_en,
    image: pkg.gallery[0],
  }));

  return (
    <>
      <Hero />

      {/* Services Section */}
      <Section title={t('sections.services')} bgColor="gray">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 font-arabic leading-relaxed">
            {isArabic 
              ? 'نقدم لك خدمات متخصصة تلبي احتياجاتك بدقة واحترافية عالية'
              : 'We offer specialized services that meet your needs with precision and professionalism'
            }
          </p>
        </div>
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
          isArabic && 'lg:grid-flow-col-dense'
        )}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              highlight={service.highlight}
            />
          ))}
        </div>
      </Section>

      {/* Statistics Section */}
      <Section title={isArabic ? 'أرقامنا تتحدث' : 'Our Numbers Speak'} bgColor="white">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 font-arabic leading-relaxed">
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
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative Corner Accent */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4 shadow-2xl shadow-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Number */}
                    <div className="text-4xl md:text-5xl font-extrabold text-primary mb-3 group-hover:scale-110 transition-transform duration-500">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-lg font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-arabic">
                      {stat.label}
                    </div>
                    
                    {/* Decorative Line */}
                    <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-4 group-hover:w-24 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Featured Packages */}
      <Section title={t('sections.featured_packages')} bgColor="gray">
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
          isArabic && 'lg:grid-flow-col-dense'
        )}>
          {featuredPackages.map((pkg) => (
            <PackageCard
              key={pkg.slug}
              slug={pkg.slug}
              title={pkg.title}
              price={pkg.price}
              currency={pkg.currency}
              highlights={pkg.highlights}
              image={pkg.image}
            />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section title={t('sections.testimonials')} bgColor="gray">
        <TestimonialCarousel testimonials={content.testimonials} />
      </Section>

      {/* Why Choose Us */}
      <Section title={t('sections.why_us')} bgColor="primary">
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8',
          isArabic && 'lg:grid-flow-col-dense'
        )}>
          {[
            {
              icon: Shield,
              title: t('features.secure_booking'),
              desc: t('features.secure_booking_desc'),
            },
            {
              icon: MessageCircle,
              title: t('features.support_24_7'),
              desc: t('features.support_24_7_desc'),
            },
            {
              icon: DollarSign,
              title: t('features.best_prices'),
              desc: t('features.best_prices_desc'),
            },
            {
              icon: Target,
              title: t('features.expert_guides'),
              desc: t('features.expert_guides_desc'),
            },
          ].map((feature, idx) => (
            <div key={idx} className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white font-arabic">{feature.title}</h3>
              <p className="text-white/80 font-arabic leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

