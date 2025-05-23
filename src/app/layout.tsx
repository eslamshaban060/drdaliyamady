import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";

const ElMessiri = El_Messiri({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "د. داليا ماضي – استشارية نساء وتوليد وتجميل نسائي",
  description: `
د. داليا ماضي خبيرة نساء وتوليد وتجميل نسائي:
• ماجستير نساء وتوليد – جامعة الإسكندرية  
• زمالة تنظيم الأسرة والصحة الإنجابية – مستشفى دار إسماعيل  
• دبلومة التجميل النسائي – الجمعية الأمريكية  
• عضو الجمعية المصرية لطب الجنين والأشعة رباعية الأبعاد  

خدمات طبية وجمالية متكاملة:
– استشارات الحمل والولادة ومتابعة ما قبل وبعد الولادة  
– تنظيم الأسرة وعلاج اضطرابات الدورة الشهرية  
– فحوصات دورية (سونار رباعي الأبعاد، مختبر)  
– تجميل المهبل (تضييق، تجديد) وشفرات الفرج  
– إزالة الشعر بالليزر وتقنيات فيزر  
– حقن فيلر ومواد شدّ غير جراحي  
– عناية بالبشرة والجسم وعلاج الترهلات  
– حماية الخصوبة ودعم الرضاعة الطبيعية  

📍 العنوان: شارع المحكمة – برج النيل – كفر الدوار  
🕑 مواعيد العمل: 2–6 مساءً يوميًا (ماعدا الجمعة والسبت)  
📞 للحجز والطوارئ: 01552232348 / 01227812348
  `.trim(),
  keywords: [
    // كلمات مفتاحية باللغة العربية:
    "دكتورة داليا ماضي",
    "نساء وتوليد",
    "تجميل نسائي",
    "عيادة نساء",
    "كفر الدوار",
    "رعاية طبية",
    "تنظيم الأسرة",
    "صحة الإنجاب",
    "رفع الرحم",
    "علاج التشنج المهبلي",
    "فيزر",
    "ليزر تجميل نسائي",
    "تضييق المهبل",
    "جراحات النساء",
    "علاج السقوط المهبلي",
    "حماية الخصوبة",
    "فيلر للوجه",
    "ليزر إزالة الشعر",
    "تجميل الشفرات",
    "علاج الجفاف المهبلي",
    "أطباء نساء وتوليد",
    "رعاية صحية للسيدات",
    "عيادة طبية محترفة",
    "فحص طبي",
    "تجميل الأنثى",
    "علاج الآلام النسائية",
    "حفاظ على الصحة الإنجابية",
    "علاج الموجات فوق الصوتية",
    "تجميل البشرة للنساء",
    "علاج الترهلات الجلدية",
    "تقنيات التجميل الحديثة",
    "فحوصات النساء الدورية",
    "خدمات العناية بالشعر",
    "حجز موعد عند د. داليا ماضي",
    "أفضل أطباء النساء والتوليد في كفر الدوار",
    "العناية بالجمال النسائي",
    // كلمات مفتاحية بالإنجليزية:
    "Gynecology",
    "Obstetrics",
    "Women's Health",
    "Cosmetic Gynecology",
    "Laser Hair Removal",
    "Vaginal Tightening",
    "Facial Fillers",
    "Postpartum Care",
    "Pregnancy Care",
    "Menstrual Disorders",
    "Uterine Disorders",
    "Vaginal Rejuvenation",
    "Women's Wellness",
    "Fertility Preservation",
    "Aesthetic Gynecology",
    "Pediatric Gynecology",
    "Pregnancy Ultrasound",
    "Non-Surgical Aesthetics",
    "Breastfeeding Support",
    "Female Fertility",
    "Cervical Health",
    "Female Hormonal Imbalance",
    "Women's Health Clinic",
    "Urogynecology",
    "Pre-natal Care",
    "Female Reproductive Health",
    "Female Genital Rejuvenation",
    // كلمات مفتاحية بالعامية المصرية:
    "دكتورة نساء",
    "دكتورة تجميل",
    "عيادة نساء وكشف",
    "سيدات كفر الدوار",
    "راحة المرأة",
    "مواعيد كشف نساء",
    "علاج التشنجات",
    "تجميل المهبل",
    "إزالة الشعر بالليزر",
    "تضييق المهبل بالليزر",
    "مواعيد كشف ليزر",
    "عيادة للنساء",
    "أطباء النساء في كفر الدوار",
    "علاج جفاف المهبل",
    "فيلر البشرة",
    "علاج الترهلات",
    "شفط الدهون",
    "تجميل منطقة المهبل",
    "افضل عيادة نساء",
    "تجميل فيزره",
    "مركز تجميل نسائي",
    "أفضل دكتورة تجميل نسائي",
    "حجز كشف عند دكتورة نساء",
    "تجميل السيدة",
    "طب نساء كفر الدوار",
  ],
  openGraph: {
    title:
      "شارع المحكمة: شارع المحكمة - برج النيل - أمام عصائر الشيخ - بجوار محل رف هدوم | د. داليا ماضي - أخصائية نساء وتوليد وتجميل نسائي",
    description:
      "د. داليا ماضي تقدم خدمات استشارات نساء وتوليد وتجميل نسائي بأعلى جودة في عياداتها بكفر الدوار. احجزي الآن للحصول على الرعاية الطبية المتكاملة. اكتشفي خدماتنا الطبية والتجميلية المتنوعة.",
    url: "https://www.example.com/doctor",
    siteName: "دكتورة داليا ماضي",
    images: [
      {
        url: "/drdilya.jfif",
        width: 800,
        height: 600,
        alt: "دكتورة داليا ماضي",
      },
    ],
    locale: "ar-EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      {/* <body className={geistMono.className}>{children}</body> */}
      <body className={ElMessiri.className}>{children}</body>
    </html>
  );
}
