import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Particles } from "@/components/ui/particles";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "ygkr",
    template: "%s | ygkr",
  },
  description:
    "Software Developer building stuff with TRPC & everything new in the NextJS ecosystem",
  metadataBase: new URL("https://ygkr.vercel.app"),
  openGraph: {
    title: "ygkr",
    description:
      "Software Developer building stuff with TRPC & everything new in the NextJS ecosystem",
    url: "https://ygkr.vercel.app",
    siteName: "ygkr.vercel.app",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "ygkr",
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
        className={` ${inter.className} min-h-screen bg-gray-300 antialiased dark:bg-gradient-to-br dark:from-[#000] dark:via-[#201a23] dark:to-[#000] `}
      >
        {/* //?in light mode */}
        <Particles
          className="animate-fade-in absolute inset-0 -z-10 "
          color="#232121"
          quantity={70}
          ease={30}
        />
        {/* //?in dark mode */}
        <Particles
          className="animate-fade-in absolute inset-0 -z-10 opacity-50"
          color="#9eca44"
          quantity={60}
          ease={30}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
