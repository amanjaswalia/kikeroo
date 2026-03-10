import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Support' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    openGraph: {
      title: `${t('metaTitle')} | Kikeroo`,
      description: t('metaDescription'),
    },
    alternates: {
      canonical: 'https://kikeroo.com/support',
    },
  };
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
