'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PageLayout from '@/components/PageLayout';
import StripeProvider from '@/components/StripeProvider';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const t = useTranslations('Checkout');
  const locale = useLocale();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          itemName: 'Kikeroo Travel Booking',
          amount: 99.99,
          currency: 'eur',
          locale,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert(t('error'));
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-16 px-5 md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-slate-900 dark:text-white text-2xl font-bold mb-3">
            {t('successTitle')}
          </h1>
          <p className="text-slate-600 dark:text-white/60 text-sm mb-8">
            {t('successMessage')}
          </p>
          <Link
            href="/"
            className="inline-block bg-kik-gold text-kik-darker font-semibold px-8 py-3 rounded-xl hover:bg-kik-gold-light transition-colors text-sm"
          >
            {t('backToHome')}
          </Link>
        </div>
      </div>
    );
  }

  if (status === 'cancelled') {
    return (
      <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-16 px-5 md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <FiXCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-slate-900 dark:text-white text-2xl font-bold mb-3">
            {t('cancelTitle')}
          </h1>
          <p className="text-slate-600 dark:text-white/60 text-sm mb-8">
            {t('cancelMessage')}
          </p>
          <Link
            href="/"
            className="inline-block bg-kik-gold text-kik-darker font-semibold px-8 py-3 rounded-xl hover:bg-kik-gold-light transition-colors text-sm"
          >
            {t('tryAgain')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-16 px-5 md:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-slate-900 dark:text-white text-2xl font-bold mb-8 text-center">
          {t('title')}
        </h1>

        <div className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-slate-900 dark:text-white text-lg font-semibold mb-4">
            {t('bookingSummary')}
          </h2>
          <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-white/10">
            <span className="text-slate-600 dark:text-white/60 text-sm">
              {t('item')}
            </span>
            <span className="text-slate-900 dark:text-white text-sm font-medium">
              Kikeroo Travel Booking
            </span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-slate-600 dark:text-white/60 text-sm">
              {t('amount')}
            </span>
            <span className="text-kik-gold text-lg font-bold">
              &euro;99.99
            </span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-kik-gold text-kik-darker font-semibold py-3.5 rounded-xl hover:bg-kik-gold-light transition-all duration-200 text-sm shadow-lg shadow-kik-gold/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? t('processing') : t('payNow')}
        </button>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <PageLayout>
      <StripeProvider>
        <Suspense>
          <CheckoutContent />
        </Suspense>
      </StripeProvider>
    </PageLayout>
  );
}
