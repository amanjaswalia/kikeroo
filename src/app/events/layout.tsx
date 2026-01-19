import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events - Discover Concerts & Shows for Your Group',
  description: 'Find and book events, concerts, and shows for your group trip. Experience live music from Rammstein, Hans Zimmer, Elton John, and more with Kikeroo.',
  openGraph: {
    title: 'Events - Discover Concerts & Shows | Kikeroo',
    description: 'Find and book events for your group trip. Experience amazing concerts and shows worldwide.',
  },
  alternates: {
    canonical: 'https://kikeroo.com/events',
  },
}

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
