import PageLayout from '@/components/PageLayout'
import { FiMapPin, FiBriefcase, FiClock } from 'react-icons/fi'

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for an experienced Frontend Developer to help build amazing user experiences for our travel platform.',
  },
  {
    id: 2,
    title: 'Product Designer',
    department: 'Design',
    location: 'Berlin, Germany',
    type: 'Full-time',
    description: 'Join our design team to create intuitive and beautiful interfaces that help travelers plan their perfect trips.',
  },
  {
    id: 3,
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help us build scalable backend services that power millions of travel bookings worldwide.',
  },
  {
    id: 4,
    title: 'Customer Success Manager',
    department: 'Support',
    location: 'London, UK',
    type: 'Full-time',
    description: 'Be the voice of our customers and help them have amazing travel experiences with Kikeroo.',
  },
  {
    id: 5,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Drive growth and brand awareness through creative marketing campaigns and strategies.',
  },
  {
    id: 6,
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'Remote',
    type: 'Part-time',
    description: 'Analyze user data to provide insights that help improve our platform and user experience.',
  },
]

const benefits = [
  {
    title: 'Flexible Work',
    description: 'Work from anywhere in the world. We believe in results, not hours in an office.',
  },
  {
    title: 'Travel Perks',
    description: 'Generous travel allowance and discounts on all Kikeroo bookings.',
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs for you and your family.',
  },
  {
    title: 'Learning Budget',
    description: 'Annual budget for courses, conferences, and professional development.',
  },
  {
    title: 'Equity Options',
    description: 'Be an owner of Kikeroo with our employee stock option program.',
  },
  {
    title: 'Unlimited PTO',
    description: 'Take the time you need to recharge and explore the world.',
  },
]

export default function CareersPage() {
  return (
    <PageLayout>
      <div className="bg-[#0d1b2a] min-h-screen py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Help us revolutionize the way people travel together. We&apos;re building the future of group travel,
              and we need passionate people to join our journey.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-white text-2xl font-semibold mb-8 text-center">Why Work at Kikeroo?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-kik-dark rounded-lg p-6">
                  <h3 className="text-kik-gold font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Job Openings */}
          <div>
            <h2 className="text-white text-2xl font-semibold mb-8 text-center">Open Positions</h2>
            <div className="space-y-4">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="bg-kik-dark rounded-lg p-6 hover:bg-opacity-80 transition cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-white text-xl font-semibold group-hover:text-kik-gold transition">
                        {job.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{job.description}</p>
                      <div className="flex flex-wrap gap-4 mt-3">
                        <span className="flex items-center gap-1 text-gray-400 text-sm">
                          <FiBriefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400 text-sm">
                          <FiMapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400 text-sm">
                          <FiClock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button className="bg-kik-gold text-black font-semibold px-6 py-2 rounded hover:bg-opacity-80 transition whitespace-nowrap">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-kik-dark rounded-lg p-8">
            <h2 className="text-white text-2xl font-semibold mb-4">Don&apos;t See Your Role?</h2>
            <p className="text-gray-400 mb-6">
              We&apos;re always looking for talented people. Send us your resume and tell us how you can contribute.
            </p>
            <button className="bg-kik-blue text-white font-semibold px-8 py-3 rounded hover:bg-opacity-80 transition">
              Send Open Application
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
