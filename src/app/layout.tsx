import type { Metadata, Viewport } from 'next';
import { DM_Mono, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import { BRAND, SITE } from '@/config/site';
import { ScrollProgress } from '@/components/ScrollProgress';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: '400',
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
  // Icons and OG images come from file conventions in app/ (icon.png,
  // apple-icon.png, opengraph-image.png, work/[slug]/opengraph-image.tsx).
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'en_US',
    url: '/',
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: BRAND.klein,
  colorScheme: 'light',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    // data-scroll-behavior: smooth scrolling is for in-page anchors; route
    // changes should jump to the top instantly
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-75ZKE9DTVJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-75ZKE9DTVJ');
          `}
        </Script>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
