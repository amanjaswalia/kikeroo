import PageLayout from '@/components/PageLayout'

export default function TermsPage() {
  return (
    <PageLayout>
      <div className="bg-[#0d1b2a] min-h-screen py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-4xl font-bold text-center mb-4">Terms and Conditions</h1>
          <p className="text-gray-400 text-center mb-12">Last updated: January 19, 2026</p>

          <div className="space-y-8 text-gray-300">
            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Kikeroo&apos;s services, you accept and agree to be bound by the terms
                and provisions of this agreement. If you do not agree to abide by these terms, please do not
                use our services. These terms apply to all visitors, users, and others who access or use
                the Service.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">2. Description of Service</h2>
              <p className="leading-relaxed mb-4">
                Kikeroo provides an online platform that enables users to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Search and book hotels, events, activities, and travel experiences</li>
                <li>Plan and coordinate group trips with friends and family</li>
                <li>Access travel-related information and recommendations</li>
                <li>Communicate with travel service providers</li>
              </ul>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">3. User Accounts</h2>
              <p className="leading-relaxed mb-4">
                When you create an account with us, you must provide accurate, complete, and current
                information. Failure to do so constitutes a breach of the Terms, which may result in
                immediate termination of your account.
              </p>
              <p className="leading-relaxed">
                You are responsible for safeguarding the password that you use to access the Service and
                for any activities or actions under your password. You agree not to disclose your password
                to any third party.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">4. Booking and Payments</h2>
              <p className="leading-relaxed mb-4">
                All bookings made through Kikeroo are subject to availability and confirmation. Prices
                displayed are in the currency indicated and may be subject to taxes and fees.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment is required at the time of booking unless otherwise specified</li>
                <li>We accept major credit cards and other payment methods as displayed</li>
                <li>All transactions are processed securely through our payment partners</li>
                <li>Prices may change without notice until a booking is confirmed</li>
              </ul>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">5. Cancellation and Refunds</h2>
              <p className="leading-relaxed mb-4">
                Cancellation policies vary depending on the service provider and type of booking.
                Please review the specific cancellation policy for each booking before confirming.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Free cancellation is available for most bookings up to 24-48 hours before check-in</li>
                <li>Non-refundable bookings are clearly marked and offered at discounted rates</li>
                <li>Refunds are processed to the original payment method within 5-10 business days</li>
                <li>Service fees may be non-refundable</li>
              </ul>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">6. User Conduct</h2>
              <p className="leading-relaxed mb-4">
                You agree not to use the Service:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, or state regulations, rules, or laws</li>
                <li>To infringe upon or violate our intellectual property rights or those of others</li>
                <li>To harass, abuse, insult, harm, defame, or discriminate against others</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
              </ul>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">7. Intellectual Property</h2>
              <p className="leading-relaxed">
                The Service and its original content, features, and functionality are and will remain the
                exclusive property of Kikeroo and its licensors. The Service is protected by copyright,
                trademark, and other laws. Our trademarks may not be used in connection with any product
                or service without prior written consent.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                In no event shall Kikeroo, nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from your access to or use of or inability to access or use
                the Service.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">9. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                If a revision is material, we will try to provide at least 30 days&apos; notice prior to any
                new terms taking effect. What constitutes a material change will be determined at our sole
                discretion. By continuing to access or use our Service after those revisions become effective,
                you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="bg-kik-dark rounded-lg p-6">
              <h2 className="text-kik-gold text-xl font-semibold mb-4">10. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4">
                <p>Email: legal@kikeroo.com</p>
                <p>Address: 123 Travel Street, Berlin, Germany 10115</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
