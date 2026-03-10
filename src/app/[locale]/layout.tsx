import type { Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { routing } from '@/i18n/routing';
import EmergencyBanner from '@/components/EmergencyBanner';
import CookieConsent from '@/components/CookieConsent';
import WhatsAppButton from '@/components/WhatsAppButton';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f5473',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });

  return {
    metadataBase: new URL('https://kikeroo.com'),
    title: {
      default: t('title'),
      template: '%s | Kikeroo',
    },
    description: t('description'),
    keywords: [
      'group travel',
      'travel planning',
      'group trips',
      'hotel booking',
      'travel with friends',
      'group vacation',
      'trip coordination',
      'travel experiences',
    ],
    authors: [{ name: 'Kikeroo' }],
    creator: 'Kikeroo',
    publisher: 'Kikeroo',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale,
      url: 'https://kikeroo.com',
      siteName: 'Kikeroo',
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Kikeroo - Group Travel Planning',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Kikeroo - Travel with Friends',
      description: t('description'),
      images: ['/images/og-image.png'],
      creator: '@kikeroo',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    alternates: {
      canonical: 'https://kikeroo.com',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NextIntlClientProvider messages={messages}>
            <EmergencyBanner />
            {children}
            <CookieConsent />
            <WhatsAppButton />
          </NextIntlClientProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Kikeroo',
              url: 'https://kikeroo.com',
              logo: 'https://kikeroo.com/images/logo 1 (1).png',
              description:
                'Plan unforgettable group trips with Kikeroo. Book hotels, events, and activities together with friends.',
              sameAs: [
                'https://facebook.com/kikeroo',
                'https://twitter.com/kikeroo',
                'https://instagram.com/kikeroo',
                'https://linkedin.com/company/kikeroo',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-800-123-4567',
                contactType: 'customer service',
                availableLanguage: [
                  'English',
                  'French',
                  'German',
                  'Spanish',
                  'Dutch',
                  'Italian',
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
