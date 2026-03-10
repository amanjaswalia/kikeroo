import { useTranslations } from 'next-intl';
import { testimonials } from '@/lib/data';
import { FiStar } from 'react-icons/fi';

export default function Testimonials() {
  const t = useTranslations('Testimonials');

  return (
    <section className="bg-gray-50 dark:bg-kik-darker py-16 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="text-slate-500 dark:text-white/40 text-sm mt-2">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-kik-blue flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white text-sm font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-slate-500 dark:text-white/40 text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < testimonial.rating
                        ? 'text-kik-gold fill-kik-gold'
                        : 'text-slate-300 dark:text-white/20'
                    }`}
                  />
                ))}
              </div>
              <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed">
                &ldquo;{testimonial.review}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
