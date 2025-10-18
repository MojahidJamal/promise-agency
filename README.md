# Trust Band Travel Website

A fully responsive bilingual (Arabic/English) travel agency website built with Next.js 14 (App Router), TypeScript, and TailwindCSS.

## 🌟 Features

- **Bilingual**: Arabic (RTL) as default + English (LTR)
- **Fully Responsive**: Mobile-first design from 320px to desktop
- **SEO Optimized**: Meta tags, sitemap, robots.txt, JSON-LD schema
- **Fast Performance**: Next.js App Router with optimizations
- **WhatsApp Integration**: Direct booking and inquiries
- **Modern UI**: Clean design with Tailwind CSS and custom primary color (#0d99e4)
- **Internationalization**: Using next-intl for seamless translations

## 📋 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Tajawal (Arabic), Inter (English)
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or later
- pnpm (recommended) or npm

### Installation

```bash
# Navigate to project directory
cd trust-band

# Install dependencies
pnpm install
# or
npm install

# Create environment file
cp .env.example .env.local

# Run development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
trust-band/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Localized routes
│   │   │   ├── layout.tsx     # Locale layout with fonts & i18n
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── packages/      # Tour packages
│   │   │   ├── services/      # Services page
│   │   │   ├── about/         # About page
│   │   │   ├── contact/       # Contact page
│   │   │   ├── gallery/       # Gallery page
│   │   │   ├── faq/           # FAQ page
│   │   │   └── privacy/       # Privacy policy
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   ├── robots.ts          # Robots.txt
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── PackageCard.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── SocialBar.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── content/
│   │   └── trustband.json     # Site content & data
│   ├── messages/
│   │   ├── ar.json            # Arabic translations
│   │   └── en.json            # English translations
│   ├── lib/
│   │   └── i18n-config.ts     # i18n configuration
│   ├── utils/
│   │   ├── whatsapp.ts        # WhatsApp URL helpers
│   │   └── cn.ts              # Classname utility
│   ├── i18n.ts                # next-intl setup
│   └── middleware.ts          # Locale routing middleware
├── public/
│   └── images/                # Images & assets
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` to change the primary color:

```typescript
colors: {
  primary: {
    DEFAULT: '#0d99e4', // Change this
    // ...
  },
}
```

### Adding New Content

#### Add a New Package

Edit `src/content/trustband.json`:

```json
{
  "packages": [
    {
      "slug": "paris-7n8d",
      "title_ar": "باريس 8 أيام / 7 ليالٍ",
      "title_en": "Paris 8D/7N",
      "price_from": 1599,
      "currency": "USD",
      "highlights_ar": ["فندق 5 نجوم", "جولة المتاحف", "رحلة إلى فرساي"],
      "highlights_en": ["5★ hotel", "Museum tour", "Versailles trip"],
      "whatsapp_cta": true,
      "gallery": ["/images/paris1.jpg", "/images/paris2.jpg"]
    }
  ]
}
```

#### Add a New Service

Edit `src/content/trustband.json`:

```json
{
  "services": [
    {
      "id": "insurance",
      "title_ar": "تأمين السفر",
      "title_en": "Travel Insurance",
      "desc_ar": "تأمين شامل لرحلتك.",
      "desc_en": "Comprehensive coverage for your trip."
    }
  ]
}
```

#### Add Translation Keys

Edit `src/messages/ar.json` and `src/messages/en.json`:

```json
{
  "new_section": {
    "title": "العنوان",
    "description": "الوصف"
  }
}
```

### Adding Images

1. Add images to `public/images/`
2. Reference them in content: `/images/yourimage.jpg`
3. Or use in components:

```tsx
import Image from 'next/image';

<Image src="/images/yourimage.jpg" alt="Description" width={800} height={600} />
```

## 🌐 Environment Variables

Create a `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://trustband.travel

# WhatsApp Configuration
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/message/KFESNW3GRJH5D1

# Google Analytics (optional)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📱 Social Media Integration

Update social links in `src/content/trustband.json`:

```json
{
  "brand": {
    "instagram": "https://www.instagram.com/trust.band_travel/",
    "facebook": "https://www.facebook.com/676041272267639",
    "tiktok": "https://www.tiktok.com/@trust_band_agency",
    "whatsapp": "https://wa.me/message/KFESNW3GRJH5D1"
  }
}
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Environment Variables on Vercel

Add these in Project Settings → Environment Variables:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_URL`
- `NEXT_PUBLIC_GA_ID` (optional)

## ✅ Testing Checklist

- [ ] Arabic is default at `/` (RTL)
- [ ] English works at `/en` (LTR)
- [ ] Language switcher works
- [ ] All navigation links work
- [ ] WhatsApp CTAs open with correct prefilled text
- [ ] Package cards display correctly
- [ ] Contact form redirects to WhatsApp
- [ ] Mobile responsive (test 320px+)
- [ ] Images load and are optimized
- [ ] No console errors
- [ ] Lighthouse score ≥90

## 📖 Key Pages

- **Home** (`/`): Hero, services, featured packages, testimonials
- **Packages** (`/packages`): All tour packages with filtering
- **Services** (`/services`): All available services
- **About** (`/about`): Company info, mission, values
- **Contact** (`/contact`): Contact form (WhatsApp integration)
- **Gallery** (`/gallery`): Photo gallery
- **FAQ** (`/faq`): Frequently asked questions

## 🔧 Maintenance

### Update Content

All content is in `src/content/trustband.json` and can be updated without touching code.

### Update Translations

Edit `src/messages/ar.json` and `src/messages/en.json` to change UI text.

### Add New Pages

1. Create `src/app/[locale]/newpage/page.tsx`
2. Add translations in messages files
3. Add link in Navbar if needed

## 📞 Support

For questions or issues:
- Email: info@trustband.travel
- WhatsApp: [Message Us](https://wa.me/message/KFESNW3GRJH5D1)

## 📄 License

© 2025 Trust Band Travel. All rights reserved.

---

Built with ❤️ using Next.js 14 + Tailwind CSS

