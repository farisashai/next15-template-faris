import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { type ReactNode } from 'react';

import { DM_Sans as DMSans } from 'next/font/google';

const dmSans = DMSans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Next Starter Code',
  description: 'Custom Template by Faris Ashai',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className}`}>{children}</body>
    </html>
  );
}
