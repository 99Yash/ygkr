import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ModeToggle } from '@/components/theme-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yash Gourav Kar',
  description: 'Software Developer',
  openGraph: {
    title: 'ygkr.vercel.app',
    description: 'Software developer',
    url: 'https://ygkr.vercel.app',
    siteName: 'ygkr.vercel.app',
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen antialiased dark:bg-black/60 bg-gray-300 `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
