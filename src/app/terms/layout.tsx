import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Read Kikeroo terms and conditions. Understand our policies for bookings, cancellations, refunds, and user conduct on our platform.',
  openGraph: {
    title: 'Terms and Conditions | Kikeroo',
    description: 'Read Kikeroo terms and conditions for using our travel platform.',
  },
  alternates: {
    canonical: 'https://kikeroo.com/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
