# Installation Instructions

## Quick Start (3 Steps)

### Step 1: Install Dependencies

```bash
cd trust-band
pnpm install
```

**Don't have pnpm?** Install it first:
```bash
npm install -g pnpm
```

Or use npm instead:
```bash
npm install
```

### Step 2: Run Development Server

```bash
pnpm dev
```

The site will be available at:
- **Arabic (default)**: http://localhost:3000
- **English**: http://localhost:3000/en

### Step 3: Start Customizing!

See [SETUP.md](./SETUP.md) for detailed customization instructions.

---

## What's Been Built

✅ **Full Project Structure** with Next.js 14 App Router
✅ **Bilingual Support** (Arabic RTL + English LTR)
✅ **All Pages Created**:
   - Home (Hero, Services, Featured Packages, Testimonials)
   - Packages (with filtering)
   - Services
   - About
   - Contact (WhatsApp integration)
   - Gallery
   - FAQ
   - Privacy

✅ **All Components**:
   - Navbar with language switcher
   - Hero section
   - Service cards
   - Package cards with WhatsApp CTAs
   - Testimonial carousel
   - Footer with social links
   - WhatsApp floating button

✅ **SEO Ready**:
   - Dynamic sitemap
   - Robots.txt
   - Meta tags
   - Open Graph tags
   - JSON-LD schema ready

✅ **Responsive Design**: Mobile-first (320px → Desktop)
✅ **Performance Optimized**: Next.js Image, Font optimization
✅ **TypeScript**: Full type safety
✅ **Tailwind CSS**: Custom primary color (#0d99e4)

---

## Next Steps

1. **Add Real Content**
   - Update `src/content/trustband.json` with actual package details
   - Add phone number and address

2. **Add Images**
   - Copy images to `public/images/`
   - Update gallery images
   - Add package photos

3. **Test Everything**
   - Check Arabic RTL layout
   - Test English LTR layout
   - Verify WhatsApp links work
   - Test on mobile devices

4. **Deploy**
   - Push to GitHub
   - Deploy on Vercel
   - Add environment variables

---

## File Structure Overview

```
trust-band/
├── src/
│   ├── app/[locale]/          # All pages (localized)
│   ├── components/            # Reusable components
│   ├── content/               # Content data (JSON)
│   ├── messages/              # Translations (ar.json, en.json)
│   ├── utils/                 # Helper functions
│   └── lib/                   # Config files
├── public/images/             # Static images
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies
```

---

## Troubleshooting

### Port 3000 already in use?

```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use a different port
pnpm dev -p 3001
```

### Build errors?

```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
pnpm dev
```

### TypeScript errors?

They should resolve after `pnpm install`. If not:
```bash
pnpm dlx tsc --noEmit
```

---

## Support

Need help? Check:
1. [README.md](./README.md) - Full documentation
2. [SETUP.md](./SETUP.md) - Detailed setup guide
3. Next.js docs: https://nextjs.org/docs
4. next-intl docs: https://next-intl-docs.vercel.app/

---

🎉 **Your Trust Band Travel website is ready!**

