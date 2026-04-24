import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";

import { siteConfig } from "@/data/site-config";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  applicationName: siteConfig.brand.name,
  category: "travel",
  metadataBase: new URL(siteConfig.siteUrl),
  verification: {
    google: "nwjwy9ikKgyouv8-QDlcJ35tXerljgzVYIBd2uINV0Q",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.brand.name,
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning className={`${sora.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚕</text></svg>" />
      </head>
      <body suppressHydrationWarning style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', 'Segoe UI', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
