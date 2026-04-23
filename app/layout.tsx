import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Skyen Systems",
    template: "%s | Skyen Systems",
  },
  description:
    "Skyen Systems builds custom software, AI solutions, mobile apps, and scalable digital platforms for modern businesses.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
