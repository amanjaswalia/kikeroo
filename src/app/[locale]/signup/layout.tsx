import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Signup' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: 'https://kikeroo.com/signup',
    },
  };
}

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
