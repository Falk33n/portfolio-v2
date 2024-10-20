import { NavBar } from '@/components/nav-bar';
import { ThemeProvider } from '@/components/providers';
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import React from 'react';
import './globals.scss';

const roboto = Roboto_Condensed({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Tim Falk's Portfolio | Full-Stack Developer",
  description:
    'Tim Falk is a full-stack developer showcasing expertise in both front-end and back-end development with technologies like React, TypeScript, Node.js, .NET and Prisma.',
  keywords:
    'Tim Falk, full-stack developer, web developer, React, Node.js, TypeScript, .NET, C#, Next.js, Tailwind CSS, Prisma, tRPC',
  openGraph: {
    type: 'website',
    url: 'https://timfalk.dev',
    title: "Tim Falk's Full-Stack Developer Portfolio",
    description:
      "Explore Tim Falk's full-stack development projects, highlighting expertise in front-end (React, Next.js) and back-end (Node.js, Prisma, tRPC, .NET).",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Tim Falk's Full-Stack Developer Portfolio",
      },
    ],
    siteName: 'Tim Falk Full-Stack Developer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@falk33n',
    title: "Tim Falk's Full-Stack Developer Portfolio",
    description:
      "Check out Tim Falk's portfolio showcasing full-stack web development expertise in React, Node.js, TypeScript, .NET, Prisma and more.",
    images: '/images/twitter-card.jpg',
  },
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
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
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='canonical'
          href='https://timfalk.dev'
        />
      </head>
      <body className={`${roboto.className} antialiased w-full`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main
            id='content'
            aria-label='Main content'
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
