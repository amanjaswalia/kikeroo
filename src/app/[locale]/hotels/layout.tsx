import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hotels' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    openGraph: {
      title: `${t('metaTitle')} | Kikeroo`,
      description: t('metaDescription'),
    },
    alternates: {
      canonical: 'https://kikeroo.com/hotels',
    },
  };
}

export default function HotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
