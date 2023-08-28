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
  description: "Software Developer",
  metadataBase: new URL("https://ygkr.vercel.app"),
  openGraph: {
    title: "ygkr",
    description: "Software developer",
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
        className={` ${inter.className} min-h-screen  bg-gray-300 antialiased dark:bg-gradient-to-r dark:from-gray-950 dark:via-black dark:to-[#11113b] `}
      >
        {/* //?in light mode */}
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in "
          color="#232121"
          quantity={70}
          ease={30}
        />
        {/* //?in dark mode */}
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in opacity-50"
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
