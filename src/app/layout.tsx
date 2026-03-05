import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Kova - AI-Powered Agent Intelligence',
    template: '%s | Kova',
  },
  description: 'Find your perfect estate agent with AI-powered matching. Compare top-performing local agents based on real sales data. Free, impartial, and takes 60 seconds.',
  keywords: ['estate agent', 'compare estate agents', 'sell my house', 'find estate agent', 'property agent', 'UK estate agent comparison', 'AI agent matching'],
  authors: [{ name: 'Kova' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Kova',
    title: 'Kova - AI-Powered Agent Intelligence',
    description: 'Find your perfect estate agent with AI-powered matching. Compare top-performing local agents based on real sales data.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-cream text-text antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
