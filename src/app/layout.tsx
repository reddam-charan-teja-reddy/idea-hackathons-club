import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { ThemeProvider } from "@/components/layout/ThemeContext";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#090A0E" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('idea-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored ? stored : (prefersDark ? 'dark' : 'dark');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-[#FF5722]/30 selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
