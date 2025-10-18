import { useTranslations } from 'next-intl';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { cn } from '@/utils/cn';
import content from '@/content/trustband.json';

export default function SocialBar() {
  const t = useTranslations();

  const socials = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: content.brand.instagram,
      color: 'hover:bg-pink-600',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: content.brand.facebook,
      color: 'hover:bg-blue-600',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: content.brand.whatsapp,
      color: 'hover:bg-green-600',
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'w-12 h-12 rounded-full bg-white/10 flex items-center justify-center',
              'transition-all duration-300 hover:scale-110 hover:bg-white/20',
              'text-white border border-white/20'
            )}
            aria-label={social.name}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
}

