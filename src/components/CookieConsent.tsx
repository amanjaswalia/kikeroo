'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function CookieConsent() {
  const t = useTranslations('CookieConsent');
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: false,
    personalization: true,
  });

  useEffect(() => {
    const consent = Cookies.get('kikeroo-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    Cookies.set('kikeroo-consent', 'accepted', { expires: 365 });
    setVisible(false);
  };

  const handleRejectAll = () => {
    Cookies.set('kikeroo-consent', 'rejected', { expires: 365 });
    setVisible(false);
  };

  const handleSavePreferences = () => {
    Cookies.set(
      'kikeroo-consent',
      JSON.stringify({ status: 'custom', ...preferences }),
      { expires: 365 }
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-kik-darker border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/20 dark:shadow-black/40 p-6">
        <p className="text-slate-700 dark:text-white/70 text-sm leading-relaxed mb-4">
          {t('message')}{' '}
          <Link
            href="/cookie-policy"
            className="text-kik-gold hover:text-kik-gold-light underline transition-colors"
          >
            {t('learnMore')}
          </Link>
        </p>

        {showCustomize && (
          <div className="mb-4 space-y-3 border-t border-slate-200 dark:border-white/10 pt-4">
            <label className="flex items-center justify-between">
              <div>
                <span className="text-slate-900 dark:text-white text-sm font-medium">
                  {t('essential')}
                </span>
                <p className="text-slate-500 dark:text-white/40 text-xs">
                  {t('essentialDesc')}
                </p>
              </div>
              <span className="text-xs text-slate-400 dark:text-white/30 italic">
                {t('alwaysOn')}
              </span>
            </label>

            {(
              [
                { key: 'analytics', label: t('analytics'), desc: t('analyticsDesc') },
                { key: 'marketing', label: t('marketing'), desc: t('marketingDesc') },
                {
                  key: 'personalization',
                  label: t('personalization'),
                  desc: t('personalizationDesc'),
                },
              ] as const
            ).map(({ key, label, desc }) => (
              <label
                key={key}
                className="flex items-center justify-between cursor-pointer"
              >
                <div>
                  <span className="text-slate-900 dark:text-white text-sm font-medium">
                    {label}
                  </span>
                  <p className="text-slate-500 dark:text-white/40 text-xs">{desc}</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences[key]}
                  onChange={(e) =>
                    setPreferences({ ...preferences, [key]: e.target.checked })
                  }
                  className="rounded border-slate-300 dark:border-white/20 bg-transparent text-kik-gold focus:ring-kik-gold/30"
                />
              </label>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          {showCustomize ? (
            <button
              onClick={handleSavePreferences}
              className="flex-1 bg-kik-gold text-kik-darker font-semibold py-2.5 rounded-xl text-sm hover:bg-kik-gold-light transition-colors"
            >
              {t('savePreferences')}
            </button>
          ) : (
            <>
              <button
                onClick={() => setShowCustomize(true)}
                className="flex-1 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white/70 font-medium py-2.5 rounded-xl text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                {t('customize')}
              </button>
              <button
                onClick={handleRejectAll}
                className="flex-1 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white/70 font-medium py-2.5 rounded-xl text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                {t('rejectAll')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-kik-gold text-kik-darker font-semibold py-2.5 rounded-xl text-sm hover:bg-kik-gold-light transition-colors"
              >
                {t('acceptAll')}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
