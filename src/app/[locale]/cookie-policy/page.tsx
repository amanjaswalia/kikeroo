import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';

export default function CookiePolicyPage() {
  const t = useTranslations('CookiePolicy');

  return (
    <PageLayout>
      <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold text-center mb-3 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-slate-500 dark:text-white/40 text-center text-sm mb-12">
            {t('lastUpdated')}
          </p>

          <div className="space-y-5 text-slate-600 dark:text-white/60">
            <section className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-7">
              <p className="leading-relaxed text-sm">{t('intro')}</p>
            </section>

            <section className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-7">
              <h2 className="text-kik-gold text-base font-bold mb-4">
                {t('whatAreCookies')}
              </h2>
              <p className="leading-relaxed text-sm">
                {t('whatAreCookiesDesc')}
              </p>
            </section>

            {[
              {
                title: t('essentialTitle'),
                desc: t('essentialDesc'),
              },
              {
                title: t('analyticsTitle'),
                desc: t('analyticsDesc'),
              },
              {
                title: t('marketingTitle'),
                desc: t('marketingDesc'),
              },
              {
                title: t('personalizationTitle'),
                desc: t('personalizationDesc'),
              },
            ].map(({ title, desc }) => (
              <section
                key={title}
                className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-7"
              >
                <h2 className="text-kik-gold text-base font-bold mb-4">
                  {title}
                </h2>
                <p className="leading-relaxed text-sm">{desc}</p>
              </section>
            ))}

            <section className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-7">
              <h2 className="text-kik-gold text-base font-bold mb-4">
                {t('manageCookies')}
              </h2>
              <p className="leading-relaxed text-sm">
                {t('manageCookiesDesc')}
              </p>
            </section>

            <section className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-7">
              <h2 className="text-kik-gold text-base font-bold mb-4">
                {t('contactTitle')}
              </h2>
              <p className="leading-relaxed text-sm">{t('contactDesc')}</p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
