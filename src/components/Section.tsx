import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray' | 'dark' | 'primary';
}

export default function Section({
  title,
  subtitle,
  children,
  className,
  bgColor = 'white',
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    primary: 'gradient-bg text-white',
  };

  const textColorClasses = {
    white: 'text-gray-600',
    gray: 'text-gray-600',
    dark: 'text-white',
    primary: 'text-white',
  };

  return (
    <section className={cn('py-20 md:py-28 relative', bgClasses[bgColor], className)}>
      {/* Background Pattern for primary sections */}
      {bgColor === 'primary' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-16 md:mb-20">
            {title && (
              <h2 className={cn(
                'text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight',
                'font-arabic',
                textColorClasses[bgColor]
              )}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn(
                'text-lg md:text-xl max-w-3xl mx-auto leading-relaxed',
                bgColor === 'primary' ? 'text-white/90' : 'text-gray-600',
                'font-arabic'
              )}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

