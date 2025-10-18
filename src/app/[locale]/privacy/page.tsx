import { useTranslations, useLocale } from 'next-intl';
import Section from '@/components/Section';

export default function PrivacyPage() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <Section
      title={t('pages.privacy_title')}
      subtitle={t('pages.privacy_desc')}
      bgColor="white"
      waveHero={true}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-gray-100">
        <div className="prose prose-lg max-w-none">
          {isArabic ? (
            <>
              <h2>سياسة الخصوصية</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                في Trust Band Travel، نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح
                سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">المعلومات التي نجمعها</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                نقوم بجمع المعلومات التي تقدمها لنا طواعية عند حجز رحلة أو التواصل معنا،
                مثل الاسم ورقم الهاتف والبريد الإلكتروني.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">كيفية استخدام المعلومات</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                نستخدم معلوماتك لمعالجة حجوزاتك، والتواصل معك، وتحسين خدماتنا.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">حماية البيانات</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                نتخذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول أو
                التعديل أو الكشف غير المصرح به.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">تواصل معنا</h3>
              <p className="text-gray-700 leading-relaxed">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر
                واتساب أو البريد الإلكتروني.
              </p>
            </>
          ) : (
            <>
              <h2>Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Trust Band Travel, we respect your privacy and are committed to
                protecting your personal data. This privacy policy explains how we
                collect, use, and protect your information.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Information We Collect</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We collect information you voluntarily provide when booking a trip or
                contacting us, such as name, phone number, and email address.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">How We Use Information</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We use your information to process your bookings, communicate with you,
                and improve our services.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Data Protection</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We take appropriate security measures to protect your personal
                information from unauthorized access, modification, or disclosure.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Contact Us</h3>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this privacy policy, please contact us
                via WhatsApp or email.
              </p>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}

