import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
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
    default: "Skyen Systems",
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
    title: "Skyen Systems",
    description:
      "Skyen Systems builds custom software, AI solutions, mobile apps, and scalable digital platforms for modern businesses.",
    images: [{ url: "/logo-png.png", width: 512, height: 512, alt: "Skyen Systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyen Systems",
    description:
      "Skyen Systems builds custom software, AI solutions, mobile apps, and scalable digital platforms for modern businesses.",
    images: ["/logo-png.png"],
  },
  icons: {
    icon: [{ url: "/logo-png.png", type: "image/png" }],
    shortcut: ["/logo-png.png"],
    apple: [{ url: "/logo-png.png", type: "image/png" }],
  },
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
      <body className="min-h-full flex flex-col bg-[#F7F9FC] text-[#0F172A]">
        <ScrollProgress />
        <SmoothScrollProvider />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
