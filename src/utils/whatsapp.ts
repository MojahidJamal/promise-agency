
import content from '@/content/trustband.json';

export function buildWhatsAppUrl(message?: string): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL || content.brand.whatsapp;
  
  if (!message) {
    return baseUrl;
  }

  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}?text=${encodedMessage}`;
}

export function getPackageInquiryUrl(packageTitle: string, locale: string): string {
  const message =
    locale === 'ar'
      ? `مرحباً، أريد الاستفسار عن باقة: ${packageTitle}`
      : `Hello, I'd like to inquire about the package: ${packageTitle}`;
  
  return buildWhatsAppUrl(message);
}

export function getContactInquiryUrl(
  name: string,
  phone: string,
  email: string,
  message: string,
  locale: string
): string {
  const text =
    locale === 'ar'
      ? `الاسم: ${name}\nالهاتف: ${phone}\nالبريد: ${email}\n\nالرسالة: ${message}`
      : `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage: ${message}`;
  
  return buildWhatsAppUrl(text);
}

