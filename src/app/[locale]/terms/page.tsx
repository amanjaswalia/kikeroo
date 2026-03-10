import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';

export default function TermsPage() {
  const t = useTranslations('Terms');

  return (
    <PageLayout>
      <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold text-center mb-3 tracking-tight">{t('title')}</h1>
          <p className="text-slate-500 dark:text-white/40 text-center text-sm mb-12">{t('lastUpdated')}</p>

          <div className="space-y-5 text-slate-600 dark:text-white/60">
            {[
              {
                title: '1. Acceptance of Terms',
                content: (
                  <p className="leading-relaxed text-sm">
                    By accessing and using Kikeroo&apos;s services, you accept and agree to be bound by the terms
                    and provisions of this agreement. If you do not agree to abide by these terms, please do not
                    use our services. These terms apply to all visitors, users, and others who access or use
                    the Service.
                  </p>
                ),
              },
              {
                title: '2. Description of Service',
                content: (
                  <>
                    <p className="leading-relaxed mb-4 text-sm">Kikeroo provides an online platform that enables users to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                      <li>Search and book hotels, events, activities, and travel experiences</li>
                      <li>Plan and coordinate group trips with friends and family</li>
                      <li>Access travel-related information and recommendations</li>
                      <li>Communicate with travel service providers</li>
                    </ul>
                  </>
                ),
              },
              {
                title: '3. User Accounts',
                content: (
                  <>
                    <p className="leading-relaxed mb-4 text-sm">
                      When you create an account with us, you must provide accurate, complete, and current
                      information. Failure to do so constitutes a breach of the Terms, which may result in
                      immediate termination of your account.
                    </p>
                    <p className="leading-relaxed text-sm">
                      You are responsible for safeguarding the password that you use to access the Service and
                      for any activities or actions under your password. You agree not to disclose your password
                      to any third party.
                    </p>
                  </>
                ),
              },
              {
                title: '4. Booking and Payments',
                content: (
                  <>
                    <p className="leading-relaxed mb-4 text-sm">
                      All bookings made through Kikeroo are subject to availability and confirmation. Prices
                      displayed are in the currency indicated and may be subject to taxes and fees.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                      <li>Payment is required at the time of booking unless otherwise specified</li>
                      <li>We accept major credit cards and other payment methods as displayed</li>
                      <li>All transactions are processed securely through our payment partners</li>
                      <li>Prices may change without notice until a booking is confirmed</li>
                    </ul>
                  </>
                ),
              },
              {
                title: '5. Cancellation and Refunds',
                content: (
                  <>
                    <p className="leading-relaxed mb-4 text-sm">
                      Cancellation policies vary depending on the service provider and type of booking.
                      Please review the specific cancellation policy for each booking before confirming.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                      <li>Free cancellation is available for most bookings up to 24-48 hours before check-in</li>
                      <li>Non-refundable bookings are clearly marked and offered at discounted rates</li>
                      <li>Refunds are processed to the original payment method within 5-10 business days</li>
                      <li>Service fees may be non-refundable</li>
                    </ul>
                  </>
                ),
              },
              {
                title: '6. User Conduct',
                content: (
                  <>
                    <p className="leading-relaxed mb-4 text-sm">You agree not to use the Service:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                      <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                      <li>To violate any international, federal, or state regulations, rules, or laws</li>
                      <li>To infringe upon or violate our intellectual property rights or those of others</li>
                      <li>To harass, abuse, insult, harm, defame, or discriminate against others</li>
                      <li>To submit false or misleading information</li>
                      <li>To upload or transmit viruses or any other type of malicious code</li>
                    </ul>
                  </>
                ),
              },
              {
                title: '7. Intellectual Property',
                content: (
                  <p className="leading-relaxed text-sm">
                    The Service and its original content, features, and functionality are and will remain the
                    exclusive property of Kikeroo and its licensors. The Service is protected by copyright,
                    trademark, and other laws. Our trademarks may not be used in connection with any product
                    or service without prior written consent.
                  </p>
                ),
              },
              {
                title: '8. Limitation of Liability',
                content: (
                  <p className="leading-relaxed text-sm">
                    In no event shall Kikeroo, nor its directors, employees, partners, agents, suppliers, or
                    affiliates, be liable for any indirect, incidental, special, consequential, or punitive
                    damages, including without limitation, loss of profits, data, use, goodwill, or other
                    intangible losses, resulting from your access to or use of or inability to access or use
                    the Service.
                  </p>
                ),
              },
              {
                title: '9. Changes to Terms',
                content: (
                  <p className="leading-relaxed text-sm">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                    If a revision is material, we will try to provide at least 30 days&apos; notice prior to any
                    new terms taking effect. By continuing to access or use our Service after those revisions become effective,
                    you agree to be bound by the revised terms.
                  </p>
                ),
              },
              {
                title: '10. Contact Us',
                content: (
                  <>
                    <p className="leading-relaxed text-sm">
                      If you have any questions about these Terms, please contact us at:
                    </p>
                    <div className="mt-3 text-sm">
                      <p>Email: legal@kikeroo.com</p>
                      <p>Address: 123 Travel Street, Berlin, Germany 10115</p>
                    </div>
                  </>
                ),
              },
            ].map(({ title, content }) => (
              <section key={title} className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-7">
                <h2 className="text-kik-gold text-base font-bold mb-4">{title}</h2>
                {content}
              </section>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
