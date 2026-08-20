import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Footer from "@/components/footer";
import "./globals.css";
import Header from "@/components/header";
import { GoogleAnalytics } from "@next/third-parties/google";

import localFont from "next/font/local";

const IBMPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

const customFont = localFont({
  src: [
    {
      path: "./fonts/thmanyahsans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/thmanyahsans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-custom",
  display: "swap",
});

export const metadata: Metadata = {
  title: "فيصل الحربي - مهندس برمجيات",
  description:
    "موقع شخصي لفيصل الحربي، مهندس برمجيات متخصص في تطوير الويب. استكشف مقالاتي، مشاريعي، ومهاراتي التقنية.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${customFont.className} antialiased`}>
        <Header />
        {children}
        {modal}
        <Footer />
        <GoogleAnalytics gaId="G-52TTV89PZ1" />
      </body>
    </html>
  );
}
