import PageLayout from '@/components/PageLayout'

export default function PrivacyPage() {
  return (
    <PageLayout>
      <div className="bg-[#0d1b2a] min-h-screen py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-4xl font-bold text-center mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-center mb-12">Last updated: January 19, 2026</p>

          <div className="space-y-8 text-gray-300">
            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">Introduction</h2>
              <p className="leading-relaxed">
                At Kikeroo, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website or use our services.
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy
                policy, please do not access the site.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, postal address</li>
                <li><strong>Account Information:</strong> Username, password, account preferences</li>
                <li><strong>Payment Information:</strong> Credit card numbers, billing address (processed securely by our payment partners)</li>
                <li><strong>Travel Information:</strong> Travel dates, destination preferences, group trip details</li>
                <li><strong>Communication Data:</strong> Messages sent through our platform, customer support inquiries</li>
              </ul>
              <p className="leading-relaxed">
                We also automatically collect certain information when you use our services, including your
                IP address, browser type, device information, and usage data through cookies and similar technologies.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and manage your bookings and reservations</li>
                <li>Create and maintain your account</li>
                <li>Communicate with you about your bookings, account, or our services</li>
                <li>Personalize your experience and provide tailored recommendations</li>
                <li>Process payments and prevent fraud</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our services and develop new features</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">Information Sharing</h2>
              <p className="leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Hotels, event organizers, and activity providers to fulfill your bookings</li>
                <li><strong>Payment Processors:</strong> To process your transactions securely</li>
                <li><strong>Group Trip Members:</strong> With other members of your group trips (only information you choose to share)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We do not sell your personal information to third parties for their marketing purposes.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our services</li>
                <li>Provide personalized content and recommendations</li>
                <li>Analyze site traffic and performance</li>
                <li>Deliver targeted advertising</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling cookies may
                affect the functionality of our services.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your
                personal information against unauthorized access, alteration, disclosure, or destruction.
                These measures include encryption, secure servers, and regular security assessments.
                However, no method of transmission over the Internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">Your Rights</h2>
              <p className="leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, please contact us at privacy@kikeroo.com.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes
                outlined in this privacy policy, unless a longer retention period is required or permitted
                by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">International Data Transfers</h2>
              <p className="leading-relaxed">
                Your information may be transferred to and processed in countries other than your country
                of residence. These countries may have different data protection laws. We ensure appropriate
                safeguards are in place to protect your information in accordance with this privacy policy.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">Children&apos;s Privacy</h2>
              <p className="leading-relaxed">
                Our services are not intended for children under 16 years of age. We do not knowingly
                collect personal information from children under 16. If you are a parent or guardian
                and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes
                by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.
                We encourage you to review this privacy policy periodically for any changes.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4">
                <p>Email: privacy@kikeroo.com</p>
                <p>Address: 123 Travel Street, Berlin, Germany 10115</p>
                <p>Data Protection Officer: dpo@kikeroo.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
