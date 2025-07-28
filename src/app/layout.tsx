// Next.js 14 App Router (TypeScript + TailwindCSS) - ADmyBRAND AI Suite Landing Page
// Enhanced layout with better SEO and modern styling

// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - AI-Powered Marketing Automation Platform",
  description: "Transform your marketing with cutting-edge AI technology. Automate campaigns, generate content, and scale your business with our comprehensive AI marketing suite.",
  keywords: "AI marketing, marketing automation, content generation, campaign management, digital marketing, AI tools",
  authors: [{ name: "ADmyBRAND" }],
  openGraph: {
    title: "ADmyBRAND AI Suite - AI-Powered Marketing Automation",
    description: "Automate content creation, track performance in real-time, and scale campaigns effortlessly with AI.",
    url: "https://admybrand-ai-suite.vercel.app",
    siteName: "ADmyBRAND AI Suite",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - AI-Powered Marketing Automation",
    description: "Transform your marketing with AI technology. Automate campaigns and scale your business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-[#0f172a] dark:text-white transition-colors duration-300 antialiased`}>
        {children}
      </body>
    </html>
  );
}
