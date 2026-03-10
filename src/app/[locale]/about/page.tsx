import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <PageLayout>
      <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold text-center mb-3 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-slate-500 dark:text-white/40 text-center text-sm mb-12">
            {t('subtitle')}
          </p>

          <div className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-8 md:p-10 mb-8">
            <h2 className="text-kik-gold text-xl font-bold mb-4">{t('missionTitle')}</h2>
            <p className="text-slate-600 dark:text-white/60 leading-relaxed mb-4 text-sm">
              {t('missionP1')}
            </p>
            <p className="text-slate-600 dark:text-white/60 leading-relaxed text-sm">
              {t('missionP2')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              { stat: '500+', label: t('destinations') },
              { stat: '10K+', label: t('happyTravelers') },
              { stat: '1000+', label: t('groupTrips') },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-7 text-center"
              >
                <div className="text-kik-gold text-3xl font-bold mb-1">{stat}</div>
                <p className="text-slate-500 dark:text-white/40 text-sm">{label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-8 md:p-10 mb-8">
            <h2 className="text-kik-gold text-xl font-bold mb-5">{t('whyChoose')}</h2>
            <ul className="space-y-4">
              {[
                { num: '01', title: t('reason1Title'), desc: t('reason1Desc') },
                { num: '02', title: t('reason2Title'), desc: t('reason2Desc') },
                { num: '03', title: t('reason3Title'), desc: t('reason3Desc') },
                { num: '04', title: t('reason4Title'), desc: t('reason4Desc') },
              ].map(({ num, title, desc }) => (
                <li key={num} className="flex items-start gap-4">
                  <span className="text-kik-gold/40 text-xs font-bold mt-0.5">{num}</span>
                  <span className="text-slate-600 dark:text-white/60 text-sm">
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      {title}
                    </strong>{' '}
                    &mdash; {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-8 md:p-10">
            <h2 className="text-kik-gold text-xl font-bold mb-4">{t('teamTitle')}</h2>
            <p className="text-slate-600 dark:text-white/60 leading-relaxed text-sm">
              {t('teamDesc')}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
