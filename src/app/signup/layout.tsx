import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up - Create Your Account',
  description: 'Create a free Kikeroo account to start planning group trips, booking hotels, and coordinating travel with friends and family.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://kikeroo.com/signup',
  },
}

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
