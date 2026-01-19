import Image from 'next/image'
import PageLayout from '@/components/PageLayout'

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="bg-[#0d1b2a] min-h-screen py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-4xl font-bold text-center mb-8">About Kikeroo</h1>

          <div className="bg-kik-dark rounded-lg p-8 mb-8">
            <h2 className="text-kik-gold text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Kikeroo was founded with a simple idea: traveling with friends should be easy and fun.
              We believe that the best travel experiences happen when you share them with people you care about.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our platform makes it simple to plan group trips, coordinate bookings, and create
              unforgettable memories together. From finding the perfect hotel to booking exciting
              activities, Kikeroo handles the logistics so you can focus on enjoying the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-kik-dark rounded-lg p-6 text-center">
              <div className="text-kik-gold text-4xl font-bold mb-2">500+</div>
              <p className="text-gray-300">Destinations</p>
            </div>
            <div className="bg-kik-dark rounded-lg p-6 text-center">
              <div className="text-kik-gold text-4xl font-bold mb-2">10K+</div>
              <p className="text-gray-300">Happy Travelers</p>
            </div>
            <div className="bg-kik-dark rounded-lg p-6 text-center">
              <div className="text-kik-gold text-4xl font-bold mb-2">1000+</div>
              <p className="text-gray-300">Group Trips</p>
            </div>
          </div>

          <div className="bg-kik-dark rounded-lg p-8 mb-8">
            <h2 className="text-kik-gold text-2xl font-semibold mb-4">Why Choose Kikeroo?</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-kik-gold font-bold">1.</span>
                <span><strong className="text-white">Easy Group Coordination</strong> - Share trip details and coordinate plans with your entire group in one place.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-kik-gold font-bold">2.</span>
                <span><strong className="text-white">Best Price Guarantee</strong> - We search hundreds of providers to find you the best deals.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-kik-gold font-bold">3.</span>
                <span><strong className="text-white">Curated Experiences</strong> - From concerts to adventure activities, we offer handpicked experiences.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-kik-gold font-bold">4.</span>
                <span><strong className="text-white">24/7 Support</strong> - Our team is always here to help you before, during, and after your trip.</span>
              </li>
            </ul>
          </div>

          <div className="bg-kik-dark rounded-lg p-8">
            <h2 className="text-kik-gold text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-300 leading-relaxed">
              We&apos;re a passionate team of travelers, technologists, and hospitality experts
              united by our love for exploration and connection. Based across the globe,
              we bring diverse perspectives to create a platform that truly serves travelers
              from all walks of life.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
