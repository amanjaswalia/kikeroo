import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Our Mission & Story',
  description: 'Learn about Kikeroo, our mission to make group travel easy, and the team behind the platform. Discover why thousands of travelers choose Kikeroo.',
  openGraph: {
    title: 'About Us - Our Mission & Story | Kikeroo',
    description: 'Learn about Kikeroo and our mission to make group travel easy and fun.',
  },
  alternates: {
    canonical: 'https://kikeroo.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
