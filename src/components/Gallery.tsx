import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { galleryImages } from '@/lib/data';

export default function Gallery() {
  const t = useTranslations('Gallery');

  return (
    <section className="bg-white dark:bg-kik-darker/50 py-16 px-5 md:px-8 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="text-slate-500 dark:text-white/40 text-sm mt-2">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
