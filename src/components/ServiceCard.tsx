import { useLocale } from 'next-intl';
import { Plane, Hotel, Package, FileText, Star, LucideIcon } from 'lucide-react';
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
        'group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl',
        'transition-all duration-300 hover:-translate-y-2',
        'border border-gray-100 hover:border-primary/30',
        className
      )}
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-black group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>

      {/* Hover Effect */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -z-10 group-hover:w-full group-hover:h-full group-hover:rounded-2xl transition-all duration-300" />
    </div>
  );
}

