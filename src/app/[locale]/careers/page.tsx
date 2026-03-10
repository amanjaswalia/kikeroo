import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';
import { FiMapPin, FiBriefcase, FiClock } from 'react-icons/fi';

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
];

const benefits = [
  { title: 'Flexible Work', description: 'Work from anywhere in the world. We believe in results, not hours in an office.' },
  { title: 'Travel Perks', description: 'Generous travel allowance and discounts on all Kikeroo bookings.' },
  { title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs for you and your family.' },
  { title: 'Learning Budget', description: 'Annual budget for courses, conferences, and professional development.' },
  { title: 'Equity Options', description: 'Be an owner of Kikeroo with our employee stock option program.' },
  { title: 'Unlimited PTO', description: 'Take the time you need to recharge and explore the world.' },
];

export default function CareersPage() {
  const t = useTranslations('Careers');

  return (
    <PageLayout>
      <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold mb-3 tracking-tight">{t('title')}</h1>
            <p className="text-slate-500 dark:text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-8 text-center">{t('whyWork')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-6">
                  <h3 className="text-kik-gold font-semibold text-sm mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-white/50 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-8 text-center">{t('openPositions')}</h2>
            <div className="space-y-3">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-white/20 transition-colors cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-slate-900 dark:text-white text-base font-semibold group-hover:text-kik-gold transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-slate-500 dark:text-white/40 text-sm mt-1 leading-relaxed">{job.description}</p>
                      <div className="flex flex-wrap gap-4 mt-3">
                        <span className="flex items-center gap-1.5 text-slate-400 dark:text-white/30 text-xs">
                          <FiBriefcase className="w-3.5 h-3.5" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400 dark:text-white/30 text-xs">
                          <FiMapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400 dark:text-white/30 text-xs">
                          <FiClock className="w-3.5 h-3.5" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button className="bg-kik-gold text-kik-darker font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-kik-gold-light transition-colors whitespace-nowrap shadow-lg shadow-kik-gold/20">
                      {t('applyNow')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-10">
            <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-3">{t('dontSeeRole')}</h2>
            <p className="text-slate-500 dark:text-white/40 text-sm mb-6 max-w-md mx-auto">
              {t('dontSeeRoleDesc')}
            </p>
            <button className="bg-kik-blue text-white font-semibold px-8 py-3 rounded-xl text-sm hover:bg-kik-blue-light transition-colors">
              {t('sendApplication')}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
