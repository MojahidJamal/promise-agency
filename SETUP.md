# Setup Guide for Trust Band Travel

## Initial Setup Steps

### 1. Install Dependencies

```bash
cd trust-band
pnpm install
# or
npm install
```

### 2. Configure Environment

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/message/KFESNW3GRJH5D1
```

### 3. Add Content from Social Media

The site is pre-configured with placeholder content. To add real content:

#### From Instagram (@trust.band_travel)
1. Visit: https://www.instagram.com/trust.band_travel/
2. Copy post captions and save images
3. Add images to `public/images/gallery/`
4. Update testimonials in `src/content/trustband.json`

#### From Facebook
1. Visit: https://www.facebook.com/676041272267639
2. Copy about information, services, and package details
3. Update `src/content/trustband.json` with real data

#### From TikTok (@trust_band_agency)
1. Visit: https://www.tiktok.com/@trust_band_agency
2. Download video thumbnails if needed
3. Add to gallery

### 4. Update Content File

Edit `src/content/trustband.json`:

```json
{
  "brand": {
    "phone": "+1234567890",  // Add real phone
    "address_ar": "العنوان الفعلي",  // Add real address
    "address_en": "Real address"
  }
}
```

### 5. Add Real Images

1. Create these directories if needed:
   ```bash
   mkdir -p public/images/gallery
   ```

2. Add package images:
   - `public/images/istanbul1.jpg`
   - `public/images/dubai1.jpg`
   - `public/images/cairo1.jpg`
   - etc.

3. Add gallery images:
   - `public/images/gallery/1.jpg`
   - `public/images/gallery/2.jpg`
   - etc.

4. Optimize images before adding:
   ```bash
   # Using ImageMagick (optional)
   convert input.jpg -resize 1200x800 -quality 85 output.jpg
   ```

### 6. Test Locally

```bash
pnpm dev
```

Visit:
- http://localhost:3000 (Arabic)
- http://localhost:3000/en (English)

### 7. Build for Production

```bash
pnpm build
pnpm start
```

### 8. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or:
1. Push to GitHub
2. Import on vercel.com
3. Configure environment variables
4. Deploy

## Content Update Workflow

### Adding a New Package

1. Add package data to `src/content/trustband.json`:

```json
{
  "slug": "package-name",
  "title_ar": "اسم الباقة",
  "title_en": "Package Name",
  "price_from": 999,
  "currency": "USD",
  "highlights_ar": ["ميزة 1", "ميزة 2"],
  "highlights_en": ["Feature 1", "Feature 2"],
  "whatsapp_cta": true,
  "gallery": ["/images/package-name1.jpg"]
}
```

2. Add package images to `public/images/`

3. No code changes needed!

### Adding Testimonials

Edit `src/content/trustband.json`:

```json
{
  "testimonials": [
    {
      "name": "اسم العميل",
      "name_en": "Client Name",
      "quote_ar": "التقييم بالعربي",
      "quote_en": "Review in English"
    }
  ]
}
```

### Updating Translations

Edit these files:
- `src/messages/ar.json` for Arabic text
- `src/messages/en.json` for English text

## Troubleshooting

### Issue: Images not showing

**Solution**: Make sure images are in `public/images/` and paths start with `/images/`

### Issue: WhatsApp links not working

**Solution**: Check that `NEXT_PUBLIC_WHATSAPP_URL` is set in `.env.local`

### Issue: Build errors

**Solution**: Run `pnpm clean` then `pnpm install` and rebuild

### Issue: RTL not working

**Solution**: Check that locale is set correctly in URL (/ for Arabic, /en for English)

## Performance Optimization

1. **Optimize Images**: Use WebP format when possible
2. **Enable Caching**: Configured automatically in Next.js
3. **Monitor Performance**: Use Lighthouse in Chrome DevTools
4. **CDN**: Vercel provides this automatically

## Security Best Practices

1. Never commit `.env.local` (it's in .gitignore)
2. Use environment variables for sensitive data
3. Keep dependencies updated: `pnpm update`
4. Review dependencies regularly

## Need Help?

- Check README.md for detailed documentation
- Review Next.js docs: https://nextjs.org/docs
- Check next-intl docs: https://next-intl-docs.vercel.app/

---

Happy building! 🚀

