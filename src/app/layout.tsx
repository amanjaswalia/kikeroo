import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f5473',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://kikeroo.com'),
  title: {
    default: 'Kikeroo - Travel with Friends | Group Trip Planning Made Easy',
    template: '%s | Kikeroo',
  },
  description: 'Plan unforgettable group trips with Kikeroo. Book hotels, events, and activities together with friends. The easiest way to travel as a group.',
  keywords: ['group travel', 'travel planning', 'group trips', 'hotel booking', 'travel with friends', 'group vacation', 'trip coordination', 'travel experiences'],
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
    locale: 'en_US',
    url: 'https://kikeroo.com',
    siteName: 'Kikeroo',
    title: 'Kikeroo - Travel with Friends | Group Trip Planning Made Easy',
    description: 'Plan unforgettable group trips with Kikeroo. Book hotels, events, and activities together with friends.',
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
    description: 'Plan unforgettable group trips with Kikeroo. The easiest way to travel as a group.',
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
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://kikeroo.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Kikeroo',
              url: 'https://kikeroo.com',
              logo: 'https://kikeroo.com/images/logo 1 (1).png',
              description: 'Plan unforgettable group trips with Kikeroo. Book hotels, events, and activities together with friends.',
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
                availableLanguage: ['English'],
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
