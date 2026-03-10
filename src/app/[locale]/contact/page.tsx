'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';
import GoogleMap from '@/components/GoogleMap';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageLayout>
      <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold text-center mb-3 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-slate-500 dark:text-white/40 text-center text-sm mb-12">
            {t('subtitle')}
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">
                {t('formTitle')}
              </h2>

              {submitted && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 px-4 py-3 rounded-xl mb-5 text-sm">
                  {t('thankYou')}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-slate-500 dark:text-white/50 text-xs font-medium block mb-2">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-slate-500 dark:text-white/50 text-xs font-medium block mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-slate-500 dark:text-white/50 text-xs font-medium block mb-2">
                    {t('subject')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-slate-500 dark:text-white/50 text-xs font-medium block mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-kik-gold text-kik-darker font-semibold py-3 rounded-xl hover:bg-kik-gold-light transition-all duration-200 text-sm shadow-lg shadow-kik-gold/20"
                >
                  {t('send')}
                </button>
              </form>
            </div>

            {/* Contact Info + Map */}
            <div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">
                {t('infoTitle')}
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: FiMail,
                    label: t('emailLabel'),
                    value: 'hello@kikeroo.com',
                  },
                  {
                    icon: FiPhone,
                    label: t('phoneLabel'),
                    value: '+1 (555) 000-0000',
                  },
                  {
                    icon: FiMapPin,
                    label: t('addressLabel'),
                    value: t('addressValue'),
                  },
                  {
                    icon: FiClock,
                    label: t('hoursLabel'),
                    value: t('hoursValue'),
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-xl p-4"
                  >
                    <Icon className="w-5 h-5 text-kik-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-slate-900 dark:text-white text-sm font-medium">
                        {label}
                      </p>
                      <p className="text-slate-500 dark:text-white/50 text-sm">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">
                {t('locationTitle')}
              </h3>
              <GoogleMap query="123 Travel Street, Berlin, Germany" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
