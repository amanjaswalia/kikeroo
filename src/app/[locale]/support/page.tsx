'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';
import { FiMail, FiPhone, FiMessageCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function SupportPage() {
  const t = useTranslations('Support');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const faqs = [
    { question: t('faq1Q'), answer: t('faq1A') },
    { question: t('faq2Q'), answer: t('faq2A') },
    { question: t('faq3Q'), answer: t('faq3A') },
    { question: t('faq4Q'), answer: t('faq4A') },
    { question: t('faq5Q'), answer: t('faq5A') },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('thankYou'));
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

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {[
              { icon: FiMail, title: t('emailUs'), detail: 'support@kikeroo.com' },
              { icon: FiPhone, title: t('callUs'), detail: '+1 (800) 123-4567' },
              { icon: FiMessageCircle, title: t('liveChat'), detail: t('available247') },
            ].map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-7 text-center hover:border-slate-300 dark:hover:border-white/20 transition-colors cursor-pointer group"
              >
                <Icon className="w-8 h-8 text-kik-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-1">
                  {title}
                </h3>
                <p className="text-slate-500 dark:text-white/40 text-sm">{detail}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">
                {t('faqTitle')}
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="text-slate-900 dark:text-white font-medium text-sm pr-4">
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <FiChevronUp className="w-4 h-4 text-kik-gold flex-shrink-0" />
                      ) : (
                        <FiChevronDown className="w-4 h-4 text-slate-400 dark:text-white/30 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-slate-600 dark:text-white/50 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">
                {t('sendMessage')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-slate-500 dark:text-white/50 text-xs font-medium block mb-2">
                    {t('yourName')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all placeholder:text-slate-400 dark:placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="text-slate-500 dark:text-white/50 text-xs font-medium block mb-2">
                    {t('emailAddress')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all placeholder:text-slate-400 dark:placeholder:text-white/20"
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
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all placeholder:text-slate-400 dark:placeholder:text-white/20"
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
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-white/20"
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
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
