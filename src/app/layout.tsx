import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "ygkr",
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
        url: "../../public/Screenshot_20230917_114024.png",
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
      </head>
      <body
        className={` ${inter.className} relative min-h-screen antialiased scrollbar-hide`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
