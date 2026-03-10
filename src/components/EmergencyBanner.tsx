'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FiAlertTriangle, FiX } from 'react-icons/fi';

export default function EmergencyBanner() {
  const t = useTranslations('Emergency');
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('kikeroo-emergency-dismissed');
    if (!isDismissed) {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('kikeroo-emergency-dismissed', 'true');
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="bg-amber-500/90 text-amber-950 relative z-[55]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm">
          <FiAlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span className="font-medium">{t('message')}</span>
          <a
            href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:no-underline whitespace-nowrap"
          >
            {t('link')}
          </a>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 p-1 hover:bg-amber-600/30 rounded transition-colors"
          aria-label={t('dismiss')}
        >
          <FiX className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
