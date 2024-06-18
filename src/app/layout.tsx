import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";

import { Inter } from "next/font/google";
import { cn } from "../lib/utils";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const calcom = localFont({
  src: "../../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-title",
});

const haptik = localFont({
  src: "../../public/fonts/GT-Haptik-Regular.ttf",
  variable: "--font-google",
});

const haptikBold = localFont({
  src: "../../public/fonts/GT-Haptik-Bold.ttf",
  variable: "--font-gb",
  weight: "800",
});

export const metadata: Metadata = {
  title: {
    default: "Yash",
    template: "%s - ygkr",
  },
  description:
    "Software Developer building stuff with everything new in the NextJS ecosystem",
  metadataBase: new URL("https://ygkr.vercel.app"),
  openGraph: {
    title: "ygkr",
    description:
      "Software Developer building stuff with TRPC & everything new in the NextJS ecosystem",
    url: "https://ygkr.vercel.app",
    siteName: "ygkr.vercel.app",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://ygkr.vercel.app/og.png",
        width: 1920,
        height: 1080,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Yash",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/assets/yk_black.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
        <SpeedInsights />
      </head>
      <body
        className={cn(
          "relative min-h-screen bg-gray-950 text-gray-400 antialiased scrollbar-hide",
          inter.variable,
          calcom.variable,
          haptik.variable,
          haptikBold.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
