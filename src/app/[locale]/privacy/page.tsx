import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';

export default function PrivacyPage() {
  const t = useTranslations('Privacy');

  return (
    <PageLayout>
      <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold text-center mb-3 tracking-tight">{t('title')}</h1>
          <p className="text-slate-500 dark:text-white/40 text-center text-sm mb-12">{t('lastUpdated')}</p>

          <div className="space-y-5 text-slate-600 dark:text-white/60">
            {[
              {
                title: 'Introduction',
                content: (
                  <p className="leading-relaxed text-sm">
                    At Kikeroo, we take your privacy seriously. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit our website or use our services.
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy
                    policy, please do not access the site.
                  </p>
                ),
              },
              {
                title: 'Information We Collect',
                content: (
                  <>
                    <p className="leading-relaxed mb-4 text-sm">We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-sm">
                      <li><strong className="text-slate-900 dark:text-white">Personal Information:</strong> Name, email address, phone number, postal address</li>
                      <li><strong className="text-slate-900 dark:text-white">Account Information:</strong> Username, password, account preferences</li>
                      <li><strong className="text-slate-900 dark:text-white">Payment Information:</strong> Credit card numbers, billing address (processed securely by our payment partners)</li>
                      <li><strong className="text-slate-900 dark:text-white">Travel Information:</strong> Travel dates, destination preferences, group trip details</li>
                      <li><strong className="text-slate-900 dark:text-white">Communication Data:</strong> Messages sent through our platform, customer support inquiries</li>
                    </ul>
                    <p className="leading-relaxed text-sm">
                      We also automatically collect certain information when you use our services, including your
                      IP address, browser type, device information, and usage data through cookies and similar technologies.
                    </p>
                  </>
                ),
              },
              {
                title: 'How We Use Your Information',
                content: (
                  <>
                    <p className="leading-relaxed mb-4 text-sm">We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                      <li>Process and manage your bookings and reservations</li>
                      <li>Create and maintain your account</li>
                      <li>Communicate with you about your bookings, account, or our services</li>
                      <li>Personalize your experience and provide tailored recommendations</li>
                      <li>Process payments and prevent fraud</li>
                      <li>Send promotional communications (with your consent)</li>
                      <li>Improve our services and develop new features</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </>
                ),
              },
              {
                title: 'Information Sharing',
                content: (
                  <>
                    <p className="leading-relaxed mb-4 text-sm">We may share your information with:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                      <li><strong className="text-slate-900 dark:text-white">Service Providers:</strong> Hotels, event organizers, and activity providers to fulfill your bookings</li>
                      <li><strong className="text-slate-900 dark:text-white">Payment Processors:</strong> To process your transactions securely</li>
                      <li><strong className="text-slate-900 dark:text-white">Group Trip Members:</strong> With other members of your group trips (only information you choose to share)</li>
                      <li><strong className="text-slate-900 dark:text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
                      <li><strong className="text-slate-900 dark:text-white">Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
                    </ul>
                    <p className="leading-relaxed mt-4 text-sm">
                      We do not sell your personal information to third parties for their marketing purposes.
                    </p>
                  </>
                ),
              },
              {
                title: 'Cookies and Tracking Technologies',
                content: (
                  <>
                    <p className="leading-relaxed mb-4 text-sm">We use cookies and similar tracking technologies to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                      <li>Remember your preferences and settings</li>
                      <li>Understand how you use our services</li>
                      <li>Provide personalized content and recommendations</li>
                      <li>Analyze site traffic and performance</li>
                      <li>Deliver targeted advertising</li>
                    </ul>
                    <p className="leading-relaxed mt-4 text-sm">
                      You can control cookies through your browser settings. However, disabling cookies may
                      affect the functionality of our services.
                    </p>
                  </>
                ),
              },
              {
                title: 'Data Security',
                content: (
                  <p className="leading-relaxed text-sm">
                    We implement appropriate technical and organizational security measures to protect your
                    personal information against unauthorized access, alteration, disclosure, or destruction.
                    These measures include encryption, secure servers, and regular security assessments.
                    However, no method of transmission over the Internet is 100% secure, and we cannot
                    guarantee absolute security.
                  </p>
                ),
              },
              {
                title: 'Your Rights',
                content: (
                  <>
                    <p className="leading-relaxed mb-4 text-sm">Depending on your location, you may have the following rights regarding your personal data:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                      <li><strong className="text-slate-900 dark:text-white">Access:</strong> Request a copy of your personal data</li>
                      <li><strong className="text-slate-900 dark:text-white">Correction:</strong> Request correction of inaccurate data</li>
                      <li><strong className="text-slate-900 dark:text-white">Deletion:</strong> Request deletion of your personal data</li>
                      <li><strong className="text-slate-900 dark:text-white">Portability:</strong> Request transfer of your data to another service</li>
                      <li><strong className="text-slate-900 dark:text-white">Opt-out:</strong> Unsubscribe from marketing communications</li>
                      <li><strong className="text-slate-900 dark:text-white">Restriction:</strong> Request restriction of processing</li>
                    </ul>
                    <p className="leading-relaxed mt-4 text-sm">
                      To exercise these rights, please contact us at privacy@kikeroo.com.
                    </p>
                  </>
                ),
              },
              {
                title: 'Data Retention',
                content: (
                  <p className="leading-relaxed text-sm">
                    We retain your personal information for as long as necessary to fulfill the purposes
                    outlined in this privacy policy, unless a longer retention period is required or permitted
                    by law. When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                ),
              },
              {
                title: 'International Data Transfers',
                content: (
                  <p className="leading-relaxed text-sm">
                    Your information may be transferred to and processed in countries other than your country
                    of residence. These countries may have different data protection laws. We ensure appropriate
                    safeguards are in place to protect your information in accordance with this privacy policy.
                  </p>
                ),
              },
              {
                title: 'Children&apos;s Privacy',
                content: (
                  <p className="leading-relaxed text-sm">
                    Our services are not intended for children under 16 years of age. We do not knowingly
                    collect personal information from children under 16. If you are a parent or guardian
                    and believe your child has provided us with personal information, please contact us.
                  </p>
                ),
              },
              {
                title: 'Changes to This Policy',
                content: (
                  <p className="leading-relaxed text-sm">
                    We may update this privacy policy from time to time. We will notify you of any changes
                    by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.
                    We encourage you to review this privacy policy periodically for any changes.
                  </p>
                ),
              },
              {
                title: 'Contact Us',
                content: (
                  <>
                    <p className="leading-relaxed text-sm">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="mt-3 text-sm">
                      <p>Email: privacy@kikeroo.com</p>
                      <p>Address: 123 Travel Street, Berlin, Germany 10115</p>
                      <p>Data Protection Officer: dpo@kikeroo.com</p>
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
