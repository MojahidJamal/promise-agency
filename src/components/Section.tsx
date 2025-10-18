import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray' | 'dark';
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
  };

  return (
    <section className={cn('py-16 md:py-24', bgClasses[bgColor], className)}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
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

