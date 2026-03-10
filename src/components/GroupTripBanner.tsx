import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FiArrowRight } from 'react-icons/fi';

export default function GroupTripBanner() {
  const t = useTranslations('GroupTrip');

  return (
    <section className="mt-16 max-w-7xl mx-auto px-5 md:px-8">
      <div className="relative overflow-hidden rounded-2xl h-[350px] md:h-[400px]">
        <Image
          src="/images/image 26.png"
          alt="Group travel"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative h-full flex items-center px-8 md:px-14 lg:px-20">
          <div className="text-white max-w-lg">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-kik-gold mb-4">
              {t('label')}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {t('title')}
              <br />
              <span className="text-white/80">{t('titleHighlight')}</span>
            </h2>
            <p className="text-white/60 mt-4 text-sm md:text-base max-w-md leading-relaxed">
              {t('description')}
            </p>
            <button className="mt-8 group inline-flex items-center gap-2 bg-kik-gold text-kik-darker font-semibold text-sm md:text-base px-7 py-3.5 rounded-xl hover:bg-kik-gold-light transition-all duration-200 shadow-lg shadow-kik-gold/20">
              {t('cta')}
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
