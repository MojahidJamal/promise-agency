import { useLocale } from 'next-intl';
import { Plane, Hotel, Package, FileText, Star, LucideIcon, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  className?: string;
}

const serviceIcons: Record<string, LucideIcon> = {
  tickets: Plane,
  hotels: Hotel,
  packages: Package,
  visa: FileText,
  umrah: Star,
};

export default function ServiceCard({
  id,
  title,
  description,
  className,
}: ServiceCardProps) {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const Icon = serviceIcons[id] || Package;

  return (
    <div
      className={cn(
        'group relative bg-white rounded-3xl p-8 shadow-trust hover:shadow-trust-lg',
        'transition-all duration-300 hover:-translate-y-1',
        'border border-gray-100 hover:border-primary/20',
        'font-arabic',
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110">
          <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold mb-4 text-gray-700 group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        
        {/* CTA Arrow */}
        <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          <span className="text-sm font-medium">
            {isRTL ? 'اعرف المزيد' : 'Learn More'}
          </span>
          <ArrowRight className={cn('w-4 h-4 transition-transform duration-300', isRTL && 'rotate-180')} />
        </div>
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/10 transition-colors duration-300"></div>
    </div>
  );
}

