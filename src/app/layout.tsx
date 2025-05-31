import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Analytics } from '@/components/Analytics'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Emagrecedores ADV",
  description: "Site otimizado com as melhores práticas de performance",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  manifest: "/manifest.json",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://emagrecedores-adv.com.br",
    siteName: "Emagrecedores ADV",
    title: "Emagrecedores ADV",
    description: "Site otimizado com as melhores práticas de performance",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="min-h-screen bg-white">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
