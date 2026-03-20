import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Footer from "@/components/footer";
import "./globals.css";
import Header from "@/components/header";
const IBMPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "فيصل الحربي - مهندس برمجيات",
  description:
    "موقع شخصي لفيصل الحربي، مهندس برمجيات متخصص في تطوير الويب. استكشف مقالاتي، مشاريعي، ومهاراتي التقنية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${IBMPlexSansArabic.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
