import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Section from '@/components/Section';

export default function GalleryPage() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // Placeholder images - will be replaced with actual images
  const images = [
    { id: 1, src: '/images/gallery/1.jpg', alt: 'Gallery 1' },
    { id: 2, src: '/images/gallery/2.jpg', alt: 'Gallery 2' },
    { id: 3, src: '/images/gallery/3.jpg', alt: 'Gallery 3' },
    { id: 4, src: '/images/gallery/4.jpg', alt: 'Gallery 4' },
    { id: 5, src: '/images/gallery/5.jpg', alt: 'Gallery 5' },
    { id: 6, src: '/images/gallery/6.jpg', alt: 'Gallery 6' },
    { id: 7, src: '/images/gallery/7.jpg', alt: 'Gallery 7' },
    { id: 8, src: '/images/gallery/8.jpg', alt: 'Gallery 8' },
  ];

  return (
    <Section
      title={t('sections.gallery_title')}
      subtitle={t('pages.gallery_desc')}
      bgColor="gray"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image, idx) => (
          <div
            key={image.id}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:opacity-0 transition-opacity flex items-center justify-center">
              <span className="text-6xl">
                {['✈️', '🏖️', '🏔️', '🌴', '🕌', '🏛️', '🎭', '🎨'][idx % 8]}
              </span>
            </div>
            {/* Uncomment when real images are added */}
            {/* <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            /> */}
          </div>
        ))}
      </div>

      {/* Coming Soon Note */}
      <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg">
        <p className="text-gray-600 text-lg">
          {isArabic
            ? 'المزيد من الصور قريباً! تابعونا على وسائل التواصل الاجتماعي لمشاهدة آخر الرحلات.'
            : 'More photos coming soon! Follow us on social media to see our latest trips.'}
        </p>
      </div>
    </Section>
  );
}

