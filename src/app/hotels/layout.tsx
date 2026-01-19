import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotels - Find Perfect Accommodations for Your Group',
  description: 'Browse and book hotels for your group trip. Find the best accommodations in Bolivia, Japan, Indonesia, and more. Easy group booking with Kikeroo.',
  openGraph: {
    title: 'Hotels - Find Perfect Accommodations | Kikeroo',
    description: 'Browse and book hotels for your group trip. Find the best accommodations worldwide.',
  },
  alternates: {
    canonical: 'https://kikeroo.com/hotels',
  },
}

export default function HotelsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
