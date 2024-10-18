import { ThemeToggle } from '@/components';
import { ThemeProvider } from '@/components/providers';
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import React from 'react';
import './globals.scss';

const roboto = Roboto_Condensed({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Tim Falk's Portfolio",
  description: "A web developer portfolio showcasing Tim Falk's work.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={`${roboto.className} antialiased w-full min-h-screen`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <nav className='flex items-center p-4 w-full'>
            <ThemeToggle />
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
