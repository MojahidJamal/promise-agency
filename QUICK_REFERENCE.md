# Trust Band Travel - Quick Reference Card

## 🎯 Three Commands to Get Started

```bash
cd trust-band
pnpm install
pnpm dev
```

Visit: http://localhost:3000

---

## 📂 Important Files

| File | Purpose |
|------|---------|
| `src/content/trustband.json` | **All site content** (edit this!) |
| `src/messages/ar.json` | Arabic UI translations |
| `src/messages/en.json` | English UI translations |
| `tailwind.config.ts` | Colors & theme |
| `.env.local` | Environment variables |
| `public/images/` | Images directory |

---

## 🎨 Brand Colors

```javascript
primary: '#0d99e4'  // Trust Band blue
black: '#111827'
gray: '#6b7280'
white: '#ffffff'
```

---

## 🌐 URL Structure

| Arabic (RTL) | English (LTR) |
|--------------|---------------|
| `/` | `/en` |
| `/packages` | `/en/packages` |
| `/services` | `/en/services` |
| `/about` | `/en/about` |
| `/contact` | `/en/contact` |
| `/gallery` | `/en/gallery` |
| `/faq` | `/en/faq` |

---

## 🔧 Common Tasks

### Add a New Package
Edit `src/content/trustband.json`:
```json
{
  "packages": [
    {
      "slug": "london-5d",
      "title_ar": "لندن 5 أيام",
      "title_en": "London 5D",
      "price_from": 1499,
      "currency": "USD",
      "highlights_ar": ["..."],
      "highlights_en": ["..."],
      "whatsapp_cta": true,
      "gallery": ["/images/london.jpg"]
    }
  ]
}
```

### Change UI Text
Edit `src/messages/ar.json` or `en.json`:
```json
{
  "nav": {
    "home": "الرئيسية"  // Change this
  }
}
```

### Add Image
1. Copy to `public/images/yourimage.jpg`
2. Reference as `/images/yourimage.jpg`

### Update Contact Info
Edit `src/content/trustband.json`:
```json
{
  "brand": {
    "phone": "+1234567890",
    "email": "info@trustband.travel",
    "address_ar": "العنوان الفعلي",
    "address_en": "Real Address"
  }
}
```

---

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and import on vercel.com

---

## 📱 WhatsApp Links

Base URL is in:
- `src/content/trustband.json` → `brand.whatsapp`
- `.env.local` → `NEXT_PUBLIC_WHATSAPP_URL` (overrides JSON)

---

## 🐛 Quick Fixes

### Port Already in Use
```bash
npx kill-port 3000
pnpm dev
```

### Clear Cache
```bash
rm -rf .next node_modules
pnpm install
```

### Build Errors
```bash
pnpm build
# Check output for specific errors
```

---

## 📊 Project Stats

- **Pages**: 8 (× 2 languages = 16 routes)
- **Components**: 10 reusable
- **Languages**: 2 (Arabic default, English)
- **Dependencies**: 11 production + 8 dev
- **Lines of Code**: ~2,500+

---

## ✅ Pre-Launch Checklist

- [ ] Install dependencies (`pnpm install`)
- [ ] Add real content to `trustband.json`
- [ ] Add images to `public/images/`
- [ ] Update phone & address
- [ ] Test on mobile
- [ ] Test WhatsApp links
- [ ] Create `.env.local`
- [ ] Build succeeds (`pnpm build`)
- [ ] Deploy to Vercel
- [ ] Add custom domain

---

## 📞 Support

**Documentation:**
- README.md - Full docs
- INSTALLATION.md - Install guide
- SETUP.md - Detailed setup
- PROJECT_SUMMARY.md - Complete overview

**Contact:**
- Email: info@trustband.travel
- WhatsApp: https://wa.me/message/KFESNW3GRJH5D1

---

**Happy Building! 🚀**

