import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-montserrat",
});


export const metadata: Metadata = {
  title: "Serendale AI — Next-Gen AI Blockchain Platform",
  description: "Explore the best AI-based blockchain hero exploration community. Scalable, secure, and fast (120K TPS).",
  keywords: ["AI", "Blockchain", "Serendale", "Crypto", "Web3"],
  authors: [{ name: "Altynbek" }], 
  openGraph: {
    title: "Serendale AI — Scalable Platform",
    description: "The next generation of AI-based blockchain technology.",
    url: "https://serendale-ai-nu.vercel.app", 
    siteName: "Serendale AI",
    images: [
      {
        url: "/og-image.png", 
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