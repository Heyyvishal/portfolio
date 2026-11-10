import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishal — Freelance Web Developer in Chennai",
  description:
    "Vishal is a freelance web developer in Chennai building modern business websites, landing pages and custom web applications with Next.js, React and TypeScript.",
  applicationName: "Vishal — Web Developer Portfolio",
  keywords: [
    "Vishal web developer",
    "freelance web developer",
    "Chennai web developer",
    "business website development",
    "landing page design",
    "custom web applications",
    "website redesign",
    "Next.js developer",
  ],
  authors: [{ name: "Vishal" }],
  creator: "Vishal",
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Vishal — Freelance Web Developer in Chennai",
    description:
      "Modern business websites, landing pages and custom web applications — designed and built end to end.",
    type: "website",
    locale: "en_IN",
    siteName: "Vishal — Web Developer Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Vishal — Freelance Web Developer in Chennai",
    description:
      "Modern business websites, landing pages and custom web applications — designed and built end to end.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-accent-ink"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
