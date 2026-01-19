import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Kikeroo collects, uses, and protects your personal information. Read our privacy policy for details on data security and your rights.',
  openGraph: {
    title: 'Privacy Policy | Kikeroo',
    description: 'Learn how Kikeroo protects your personal information and data.',
  },
  alternates: {
    canonical: 'https://kikeroo.com/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
