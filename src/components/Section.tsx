import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray' | 'dark' | 'primary';
  waveHero?: boolean;
}

export default function Section({
  title,
  subtitle,
  children,
  className,
  bgColor = 'white',
  waveHero = false,
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

  // If waveHero is true, render with wave background
  if (waveHero) {
    return (
      <>
        {/* Wave Hero Header */}
        <div className="relative bg-gradient-to-br from-[#0d99e4] via-[#0a7ab8] to-[#085a8c] overflow-hidden">
          {/* Animated Background Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center">
              {title && (
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-2xl md:text-3xl text-white/95 leading-relaxed font-medium drop-shadow-lg max-w-4xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          
          {/* Wave Shape */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
            </svg>
          </div>
        </div>
        
        {/* Content Section */}
        <section className={cn('py-20 md:py-28 relative', bgClasses[bgColor], className)}>
          <div className="container mx-auto px-4 relative z-10">
            {children}
          </div>
        </section>
      </>
    );
  }

  // Regular section render
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

