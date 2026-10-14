import type { Metadata, Viewport } from 'next';
import { DM_Mono, DM_Sans } from 'next/font/google';
import { SITE } from '@/config/site';
import { ScrollProgress } from '@/components/ScrollProgress';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    url: '/',
    title: SITE.title,
    description: SITE.description,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/favicons/apple-icon-180x180.png',
  },
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  colorScheme: 'light',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
