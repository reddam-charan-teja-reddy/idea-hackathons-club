import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ideahackathonsclub.pvpsit.ac.in"),
  title: `${siteConfig.club.name} | ${siteConfig.institution.shortName} · CSM & CSD`,
  description: siteConfig.club.description,
  keywords: [
    "Idea Hackathons Club",
    "PVPSIT",
    "CSE AI ML",
    "CSE Data Science",
    "IdeaStorm",
    "Hackathon",
    "CodeTantra",
    "Engineering Hackathon",
    "Vijayawada",
  ],
  authors: [{ name: siteConfig.club.name }],
  openGraph: {
    title: `${siteConfig.club.name} — PVPSIT`,
    description: siteConfig.club.description,
    type: "website",
    images: [
      {
        url: siteConfig.club.logoImage,
        width: 1200,
        height: 1200,
        alt: siteConfig.club.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.club.name,
    description: siteConfig.club.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#07090E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <body className="bg-[#07090E] text-[#F8FAFC] antialiased min-h-screen flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
