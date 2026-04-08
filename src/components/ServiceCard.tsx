'use client';

import { useLocale } from 'next-intl';
import { Plane, Hotel, Package, FileText, Star, LucideIcon, ArrowRight, UserCheck, ShieldCheck, Car, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { getWhatsAppServiceUrl } from '@/utils/whatsapp';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  highlight?: string;
  className?: string;
}

const serviceIcons: Record<string, LucideIcon> = {
  tickets: Plane,
  hotels: Hotel,
  packages: Package,
  visa: FileText,
  umrah: Star,
  'exit-return-visa': RefreshCw,
  'family-visit-saudi': UserCheck,
  'security-clearance': ShieldCheck,
  'international-license': Car,
};

export default function ServiceCard({
  id,
  title,
  description,
  highlight,
  className,
}: ServiceCardProps) {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const Icon = serviceIcons[id] || Package;

  const handleWhatsAppClick = () => {
    const message = isRTL 
      ? `مرحباً، أريد الاستفسار عن خدمة ${title}`
      : `Hello, I'd like to inquire about the ${title} service`;
    window.open(getWhatsAppServiceUrl(message), '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn(
        'group relative bg-white rounded-3xl p-8 cursor-pointer',
        'shadow-lg hover:shadow-2xl',
        'transition-all duration-300',
        'font-arabic overflow-hidden',
        'h-full flex flex-col',
        className
      )}
      onClick={handleWhatsAppClick}
    >
      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#D4A520] rounded-t-3xl"></div>
      
      {/* Icon Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-2xl bg-[#D4A520] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Icon className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
        </div>
        
        {/* Title */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-[#D4A520] transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>

      {/* Highlight Badge */}
      {highlight && (
        <div className="mb-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#D4A520]/10 rounded-full border-2 border-[#D4A520]/30">
            <div className="w-3 h-3 rounded-full bg-[#D4A520] animate-pulse"></div>
            <span className="text-sm font-bold text-[#D4A520]">
              {highlight}
            </span>
          </div>
        </div>
      )}
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-8 text-base flex-grow">
        {description}
      </p>
      
      {/* WhatsApp CTA */}
      <div className="mt-auto">
        <div className="flex items-center justify-between p-4 rounded-2xl bg-[#D4A520] group-hover:bg-[#B8900E] transition-all duration-300 shadow-lg">
          <span className="text-base font-bold text-white">
            {isRTL ? 'استفسر عبر واتساب' : 'Inquire on WhatsApp'}
          </span>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/30">
            <ArrowRight 
              className={cn(
                'w-5 h-5 text-white',
                isRTL && 'rotate-180'
              )} 
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>

      {/* Corner Decoration */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D4A520]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
}

