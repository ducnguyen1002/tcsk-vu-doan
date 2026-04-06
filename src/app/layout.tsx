import type { Metadata } from "next";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tổ chức sự kiện & Vũ đoàn | Nghệ thuật trên từng sân khấu",
  description: "Trang web chính thức của công ty tổ chức sự kiện chuyên nghiệp kết hợp vũ đoàn biểu diễn. Chúng tôi kiến tạo những khoảnh khắc nghệ thuật đỉnh cao.",
  keywords: "tổ chức sự kiện, vũ đoàn, event agency, biểu diễn nghệ thuật, vietnam event, dance team",
};

import SmoothScroll from "@/components/ui/SmoothScroll";
import FloatingActions from "@/components/ui/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${notoSerif.variable} ${notoSans.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased selection:bg-gold/30">
        <SmoothScroll>
          {children}
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
