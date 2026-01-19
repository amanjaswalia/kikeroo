import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Places - Explore Destinations Worldwide',
  description: 'Discover amazing travel destinations for your group trip. Explore La Paz, Berlin, Surabaya, and more beautiful places around the world with Kikeroo.',
  openGraph: {
    title: 'Places - Explore Destinations | Kikeroo',
    description: 'Discover amazing travel destinations for your group trip worldwide.',
  },
  alternates: {
    canonical: 'https://kikeroo.com/places',
  },
}

export default function PlacesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
