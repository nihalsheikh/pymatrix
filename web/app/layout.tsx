import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'PyMatrix - Advanced Matrix Digital Rain',
  description: 'TMatrix-inspired cinematic digital rain for your terminal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
