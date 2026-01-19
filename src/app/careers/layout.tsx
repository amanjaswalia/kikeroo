import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Join Our Team',
  description: 'Join the Kikeroo team and help revolutionize group travel. View open positions in engineering, design, marketing, and more. Remote-friendly workplace.',
  openGraph: {
    title: 'Careers - Join Our Team | Kikeroo',
    description: 'Join the Kikeroo team and help revolutionize group travel. View open positions.',
  },
  alternates: {
    canonical: 'https://kikeroo.com/careers',
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
