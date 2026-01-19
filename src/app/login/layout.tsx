import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - Sign In to Your Account',
  description: 'Sign in to your Kikeroo account to manage your bookings, view trip details, and plan your next group adventure.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://kikeroo.com/login',
  },
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
