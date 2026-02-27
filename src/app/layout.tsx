import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Подключаем Montserrat
import "./globals.css";

// Настраиваем Montserrat с нужными весами
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Normal, Medium, SemiBold, Bold
  variable: "--font-montserrat",
});

// Настройки SEO и OpenGraph
export const metadata: Metadata = {
  title: "Serendale AI — Next-Gen AI Blockchain Platform",
  description: "Explore the best AI-based blockchain hero exploration community. Scalable, secure, and fast (120K TPS).",
  keywords: ["AI", "Blockchain", "Serendale", "Crypto", "Web3"],
  authors: [{ name: "Your Name" }], // Можешь вписать свое имя
  openGraph: {
    title: "Serendale AI — Scalable Platform",
    description: "The next generation of AI-based blockchain technology.",
    url: "https://your-domain.vercel.app", // Сюда потом вставишь ссылку от Vercel
    siteName: "Serendale AI",
    images: [
      {
        url: "/og-image.png", // Убедись, что этот файл лежит в папке public/
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Применяем шрифт ко всему body */}
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}