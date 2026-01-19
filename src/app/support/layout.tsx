import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support Center - Help & Contact Us',
  description: 'Get help with your Kikeroo bookings. Browse FAQs, contact our support team, or send us a message. We are here to help 24/7.',
  openGraph: {
    title: 'Support Center - Help & Contact | Kikeroo',
    description: 'Get help with your Kikeroo bookings. Contact our support team 24/7.',
  },
  alternates: {
    canonical: 'https://kikeroo.com/support',
  },
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
