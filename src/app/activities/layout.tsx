import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Activities - Adventure Experiences for Groups',
  description: 'Book thrilling group activities including parachute jumping, horse riding, diving with dolphins, and more. Create unforgettable memories with Kikeroo.',
  openGraph: {
    title: 'Activities - Adventure Experiences | Kikeroo',
    description: 'Book thrilling group activities. Create unforgettable adventure memories with friends.',
  },
  alternates: {
    canonical: 'https://kikeroo.com/activities',
  },
}

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
