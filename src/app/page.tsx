import "bootstrap/dist/css/bootstrap.min.css";
import Topheader from "@/components/Header/Topheader";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>د. داليا ماضي | أخصائية أمراض النساء والتوليد</title>
        <meta
          name="description"
          content="د. داليا ماضي، أخصائية النساء والتوليد في كفر الدوار، عيادتان: شارع المحكمة والعكرشة."
        />
        <meta
          property="og:title"
          content="د. داليا ماضي | أخصائية النساء والتوليد"
        />
        <meta
          property="og:description"
          content="اكتشف خدماتنا الطبية المتخصصة في النساء والتوليد مع د. داليا ماضي."
        />
        <meta
          property="og:image"
          content="https://drdaliyamady-eks4.vercel.app/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://drdaliyamady-eks4.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="د. داليا ماضي | أخصائية النساء والتوليد"
        />
        <meta
          name="twitter:description"
          content="اكتشف خدماتنا الطبية المتخصصة في النساء والتوليد مع د. داليا ماضي."
        />
        <meta
          name="twitter:image"
          content="https://drdaliyamady-eks4.vercel.app/og-image.jpg"
        />
      </Head>
      {/* top header */}
      <Topheader />
    </>
  );
};

export default page;
