import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Inter, Space_Grotesk } from "next/font/google";
import { MainContent } from "@/components/layout/MainContent";
import { Navbar } from "@/components/layout/Navbar";
import { GlobalCursorGlow } from "@/components/ui/GlobalCursorGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { ConsentAwareAnalytics } from "@/components/ConsentAwareAnalytics";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skyensystems.com";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Skyen Systems | Custom Software Development & AI Solutions",
    template: "%s | Skyen Systems",
  },
  description:
    "Skyen Systems builds custom software, AI solutions, mobile apps, and scalable digital platforms for modern businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Skyen Systems",
    title: "Skyen Systems | Custom Software Development & AI Solutions",
    description:
      "Skyen Systems builds custom software, AI solutions, mobile apps, and scalable digital platforms for modern businesses.",
    images: [{ url: "/logo-png.png", width: 512, height: 512, alt: "Skyen Systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyen Systems | Custom Software Development & AI Solutions",
    description:
      "Skyen Systems builds custom software, AI solutions, mobile apps, and scalable digital platforms for modern businesses.",
    images: ["/logo-png.png"],
  },
  icons: {
    icon: [{ url: "/logo-png.png", type: "image/png" }],
    shortcut: ["/logo-png.png"],
    apple: [{ url: "/logo-png.png", type: "image/png" }],
  },
  other: {
    "x-ua-compatible": "IE=edge",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F2F2F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/bgs/cute%20blue.jfif" fetchPriority="high" />
        <link rel="preload" as="image" href="/logo-png.png" />
        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F4F4F2] text-[#141414]">
        <ConsentAwareAnalytics />
        <ScrollProgress />
        <GlobalCursorGlow />
        <SmoothScrollProvider>
          <Navbar />
          <MainContent>{children}</MainContent>
          <Footer />
        </SmoothScrollProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
