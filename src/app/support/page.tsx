'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { FiMail, FiPhone, FiMessageCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const faqs = [
  {
    question: 'How do I book a group trip?',
    answer: 'Simply search for your destination, select your dates and number of guests, then click "Start a group trip". You can then invite your friends to join and coordinate the booking together.',
  },
  {
    question: 'Can I cancel my booking?',
    answer: 'Yes, most bookings can be cancelled up to 24-48 hours before the check-in date. Please check the specific cancellation policy for your booking in your account dashboard.',
  },
  {
    question: 'How do I invite friends to my trip?',
    answer: 'After creating a group trip, you\'ll receive a unique link that you can share with your friends. They can join the trip and see all the details without needing to create an account.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for larger bookings.',
  },
  {
    question: 'Is my payment information secure?',
    answer: 'Absolutely. We use industry-standard SSL encryption and never store your full credit card details on our servers. All transactions are processed through secure payment gateways.',
  },
]

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <PageLayout>
      <div className="bg-[#0d1b2a] min-h-screen py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-4xl font-bold text-center mb-4">Support Center</h1>
          <p className="text-gray-400 text-center mb-12">How can we help you today?</p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-kik-dark rounded-lg p-6 text-center hover:bg-opacity-80 transition cursor-pointer">
              <FiMail className="w-10 h-10 text-kik-gold mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm">support@kikeroo.com</p>
            </div>
            <div className="bg-kik-dark rounded-lg p-6 text-center hover:bg-opacity-80 transition cursor-pointer">
              <FiPhone className="w-10 h-10 text-kik-gold mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm">+1 (800) 123-4567</p>
            </div>
            <div className="bg-kik-dark rounded-lg p-6 text-center hover:bg-opacity-80 transition cursor-pointer">
              <FiMessageCircle className="w-10 h-10 text-kik-gold mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <div>
              <h2 className="text-white text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-kik-dark rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="text-white font-medium">{faq.question}</span>
                      {openFaq === index ? (
                        <FiChevronUp className="w-5 h-5 text-kik-gold" />
                      ) : (
                        <FiChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-300 text-sm">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-white text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm block mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white focus:border-kik-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white focus:border-kik-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white focus:border-kik-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white focus:border-kik-gold focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-kik-gold text-black font-semibold py-3 rounded hover:bg-opacity-80 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
